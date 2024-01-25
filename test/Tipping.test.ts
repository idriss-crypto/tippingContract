import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect, use} from "chai";
import {ethers} from 'hardhat';
import {Signer, Interface} from 'ethers';


import {
    Tipping,
    MockNFT,
    MockToken,
    MaticPriceAggregatorV3Mock,
    MockEAS,
    MockERC1155,
} from "../src/types";
import MaticPriceAggregatorV3MockArtifact from "../src/artifacts/src/contracts/mocks/MaticPriceAggregatorV3Mock.sol/MaticPriceAggregatorV3Mock.json";
import MockEASArtifact from "../src/artifacts/src/contracts/mocks/MockEAS.sol/MockEAS.json";
import TippingArtifact from "../src/artifacts/src/contracts/Tipping.sol/Tipping.json";
import MockNFTArtifact from "../src/artifacts/src/contracts/mocks/AssetMock.sol/MockNFT.json";
import MockERC1155Artifact from "../src/artifacts/src/contracts/mocks/AssetMock.sol/MockERC1155.json";
import MockTokenArtifact from "../src/artifacts/src/contracts/mocks/AssetMock.sol/MockToken.json";
import { HardhatEthersHelpers } from "hardhat/types";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const NFT_ID_ARRAY = [...Array(10).keys()];
const ERC1155_ARRAY = [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 60],
    [4, 1_000_000],
    [5, 996],
];

const AssetType = {
    Native: 0,
    ERC20: 1,
    ERC721: 2,
    ERC1155: 3,
    SUPPORTED_ERC20: 4,
};


  describe("Tipping Contract", function () {
    
    let provider= ethers.provider;
    let owner: Signer;
    let signer1: Signer;
    let signer2: Signer;
    let ownerAddress: string;
    let signer1Address: string;
    let signer2Address: string;
    let mockToken: MockToken;
    let mockToken2: MockToken;
    let mockNFT: MockNFT;
    let mockERC1155: MockERC1155;
    let mockPriceOracle: MaticPriceAggregatorV3Mock;
    let mockEAS: MockEAS;
    let tippingContract: Tipping;
    let dollarInWei: bigint;
    let PAYMENT_FEE_PERCENTAGE: bigint;
    let PAYMENT_FEE_PERCENTAGE_DENOMINATOR: bigint;
    let tippingInterface: Interface;

    const setupToken = async () => {
        // Get the ContractFactory for your MockToken
        const MockToken = await ethers.getContractFactory("MockToken");
        mockToken = await MockToken.deploy();
        const MockToken2 = await ethers.getContractFactory("MockToken");
        mockToken2 = await MockToken.deploy();
        await mockToken.waitForDeployment();
        await mockToken2.waitForDeployment();
    };
    const setupERC721 = async () => {
        const MockNFT = await ethers.getContractFactory("MockNFT");
    
        mockNFT = await MockNFT.deploy();
        await mockNFT.waitForDeployment();
    
    
        await Promise.all(
            NFT_ID_ARRAY.map(async (val) => {
                return await mockNFT.safeMint(ownerAddress, val).catch(() => {});
            })
        );
    };
    const setupERC1155 = async () => {
        const MockERC1155 = await ethers.getContractFactory("MockERC1155");
    
        mockERC1155 = await MockERC1155.deploy();
        await mockERC1155.waitForDeployment();
    
        await Promise.all(
            ERC1155_ARRAY.map(async (val) => {
                return await mockERC1155.mint(ownerAddress, val[0], val[1]).catch(() => {});
            })
        );
    };

    before(async () => {
        const accounts = await ethers.getSigners();
        owner = accounts[0];
        signer1 = accounts[1];
        signer2 = accounts[2];
        ownerAddress = await owner.getAddress();
        signer1Address = await signer1.getAddress();
        signer2Address = await signer2.getAddress();

        const MaticPriceAggregatorV3MockFactory = await ethers.getContractFactory("MaticPriceAggregatorV3Mock");
        mockPriceOracle = (await MaticPriceAggregatorV3MockFactory.deploy()) as MaticPriceAggregatorV3Mock;
        await mockPriceOracle.waitForDeployment();

        mockPriceOracle.address = await mockPriceOracle.getAddress()

        const MockEASFactory = await ethers.getContractFactory("MockEAS");
        mockEAS = (await MockEASFactory.deploy()) as MockEAS;
        await mockEAS.waitForDeployment();

        mockEAS.address = await mockEAS.getAddress()

        const TippingFactory = await ethers.getContractFactory("Tipping");
        tippingContract = (await TippingFactory.deploy(
            true,
            true,
            mockPriceOracle.address,
            ZERO_ADDRESS,
            0,
            2300,
            18,
            mockEAS.address,
            "0x28b73429cc730191053ba7fe21e17253be25dbab480f0c3a369de5217657d925"
        )) as Tipping;
        await tippingContract.waitForDeployment();

        tippingContract.address = await tippingContract.getAddress()

        dollarInWei = await mockPriceOracle.dollarToWei();
        PAYMENT_FEE_PERCENTAGE = BigInt("10")
        PAYMENT_FEE_PERCENTAGE_DENOMINATOR = BigInt("1000");

        tippingInterface = new Interface(TippingArtifact.abi);

        // Temporary initialization to run tests
        await Promise.all([setupToken(), setupERC721(), setupERC1155()]);
        mockToken.address = await mockToken.getAddress();
        mockToken2.address = await mockToken2.getAddress();
        mockNFT.address = await mockNFT.getAddress();
        mockERC1155.address = await mockERC1155.getAddress();
    });

    describe("Contract management", async () => {
        it("properly adds admin", async () => {
            
            expect(await tippingContract.admins(ownerAddress)).to.be.true;
            expect(await tippingContract.admins(signer1Address)).to.be.false;
            expect(await tippingContract.admins(signer2Address)).to.be.false;

            await tippingContract.addAdmin(signer1Address);
            await tippingContract.addAdmin(signer2Address);

            expect(await tippingContract.admins(ownerAddress)).to.be.true;
            expect(await tippingContract.admins(signer1Address)).to.be.true;
            expect(await tippingContract.admins(signer2Address)).to.be.true;
        });

        it("properly removes admin", async () => {
            await tippingContract.addAdmin(signer1Address);
            await tippingContract.addAdmin(signer2Address);

            expect(await tippingContract.admins(signer1Address)).to.be.true;
            expect(await tippingContract.admins(signer2Address)).to.be.true;

            await tippingContract.deleteAdmin(signer1Address);
            await tippingContract.deleteAdmin(signer2Address);

            expect(await tippingContract.admins(signer1Address)).to.be.false;
            expect(await tippingContract.admins(signer2Address)).to.be.false;
        });

        it("properly adds and deletes supported ERC20", async () => {
            expect(await tippingContract.supportedERC20(mockToken2.address)).to
                .be.false;

            await tippingContract.addSupportedERC20(mockToken2.address);

            expect(await tippingContract.supportedERC20(mockToken2.address)).to
                .be.true;

            await tippingContract.deleteSupportedERC20(mockToken2.address);

            expect(await tippingContract.supportedERC20(mockToken2.address)).to
                .be.false;
        });

        it("properly adds and deletes public good address", async () => {
            expect(await tippingContract.publicGoods(signer1Address)).to.be
                .false;

            await tippingContract.addPublicGood(signer1Address);

            expect(await tippingContract.publicGoods(signer1Address)).to.be
                .true;

            await tippingContract.deletePublicGood(signer1Address);

            expect(await tippingContract.publicGoods(signer1Address)).to.be
                .false;
        });

        it("allows only admin to retrieve funds", async () => {
            expect(await tippingContract.admins(ownerAddress)).to.be.true;
            expect(await tippingContract.admins(signer1Address)).to.be.false;

            await expect(tippingContract.connect(signer1).withdraw()).to.be.revertedWithCustomError(tippingContract, "OnlyAdminCanWithdraw");
            await expect(tippingContract.connect(signer1).withdrawToken(ZERO_ADDRESS)).to.be.revertedWithCustomError(tippingContract, "OnlyAdminCanWithdraw");
            await expect(tippingContract.withdraw()).to.not.be.rejected;
        });

        it("allows only owner to change owner", async () => {
            await expect(
                tippingContract
                    .connect(signer1)
                    .transferOwnership(signer1Address)
            ).to.be.revertedWith("Ownable: caller is not the owner");

            await expect(tippingContract.transferOwnership(signer1Address)).to
                .not.be.reverted;

            await tippingContract
                .connect(signer1)
                .transferOwnership(ownerAddress);
        });

        it("allows only owner to change admin roles", async () => {
            await expect(
                tippingContract.connect(signer1).addAdmin(signer2Address)
            ).to.be.revertedWith("Ownable: caller is not the owner");
            await expect(
                tippingContract.connect(signer1).deleteAdmin(signer2Address)
            ).to.be.revertedWith("Ownable: caller is not the owner");
        });

        it("fails when trying to renounce contract ownership", async () => {
            await expect(
                tippingContract.renounceOwnership()
            ).to.be.revertedWithCustomError(tippingContract, "RenounceOwnershipNotAllowed");
        });
    });

    describe("Send native currency", () => {
        it("correctly calculates percentage fee", async () => {
            // Fee is on top in the new design:
            // protocol forwards x. Here x+1% = weiToSend
            const weiToSend = BigInt("1000000");
            const expectedProtocolFee = weiToSend * PAYMENT_FEE_PERCENTAGE / PAYMENT_FEE_PERCENTAGE_DENOMINATOR;
            const calculatedFee = await tippingContract.getPaymentFee(
                weiToSend,
                AssetType.Native,
                signer1Address
            );
            expect(calculatedFee).to.equal(expectedProtocolFee);

            await tippingContract.addPublicGood(signer2Address);
            const calculatedFeePG = await tippingContract.getPaymentFee(
                weiToSend,
                AssetType.Native,
                signer2Address
            );
            expect(calculatedFeePG.toString()).to.equal("0");
            await tippingContract.deletePublicGood(signer2Address);
        });
        it("allows for sending native currency", async () => {
            const weiToReceive = BigInt("1000000");
            const calculatedFee = await tippingContract.getPaymentFee(
                weiToReceive,
                AssetType.Native,
                signer1Address
            );
            const weiToSend = weiToReceive + calculatedFee;

            const tippingContractBalanceBefore = await provider.getBalance(
                tippingContract.address
            );
            const signer1BalanceBefore = await provider.getBalance(
                signer1Address
            );

            await tippingContract.sendNativeTo(signer1Address, "", {
                value: weiToSend,
            });
            const tippingContractBalanceAfter = await provider.getBalance(
                tippingContract.address
            );
            const signer1BalanceAfter = await provider.getBalance(
                signer1Address
            );
            expect(tippingContractBalanceAfter).to.equal(tippingContractBalanceBefore + calculatedFee);
            expect(signer1BalanceAfter).to.equal(signer1BalanceBefore + weiToReceive);

            // Do not take a fee if the recipient is a public good, and add attestation
            await tippingContract.addPublicGood(signer2Address);
            const signer2BalanceBefore = await provider.getBalance(
                signer2Address
            );
            await tippingContract.sendNativeTo(signer2Address, "", {
                value: weiToReceive,
            });
            const tippingContractBalanceAfter2 = await provider.getBalance(
                tippingContract.address
            );
            const signer2BalanceAfter = await provider.getBalance(
                signer2Address
            );
            expect(tippingContractBalanceAfter2).to.equal(
                tippingContractBalanceAfter
            );
            expect(signer2BalanceAfter).to.equal(
                signer2BalanceBefore + weiToReceive
            );
            await tippingContract.deletePublicGood(signer2Address);
        });

        it("allows sending asset to other (non-publicGood) address as batch", async () => {
            const weiToReceive1 = BigInt("1000000");
            const weiToReceive2 = BigInt("2500000");
            const tippingContractBalanceBefore = await provider.getBalance(
                tippingContract.address
            );
            const sig1BalanceBefore = await provider.getBalance(signer1Address);
            const sig2BalanceBefore = await provider.getBalance(signer2Address);

            const batchObject1 = {
                assetType: AssetType.Native,
                recipient: signer1Address,
                amount: weiToReceive1,
                tokenId: 0,
                tokenAddress: ZERO_ADDRESS,
                message: "",
            };
            const batchObject2 = {
                assetType: AssetType.Native,
                recipient: signer2Address,
                amount: weiToReceive2,
                tokenId: 0,
                tokenAddress: ZERO_ADDRESS,
                message: "",
            };

            const batchSendObject = await tippingContract.calculateBatchFee([
                batchObject1,
                batchObject2,
            ]);
            let nativeAmountToSend = BigInt(0);
            let adjustedBatchSendObject = batchSendObject.map(call => {
                nativeAmountToSend += BigInt(call.nativeAmount);
                return {
                    assetType: call.assetType,
                    recipient: call.recipient,
                    amount: call.amount,
                    tokenId: call.tokenId,
                    tokenAddress: call.tokenAddress,
                    message: call.message,
                };
            });

            await tippingContract.batchSendTo(adjustedBatchSendObject, {
                value: nativeAmountToSend,
            });

            const tippingContractBalanceAfter = await provider.getBalance(
                tippingContract.address
            );
            const sig1BalanceAfter = await provider.getBalance(signer1Address);
            const sig2BalanceAfter = await provider.getBalance(signer2Address);

            expect(tippingContractBalanceAfter).to.equal(
                tippingContractBalanceBefore + nativeAmountToSend - weiToReceive1 - weiToReceive2
            );
            expect(sig1BalanceAfter).to.equal(
                sig1BalanceBefore + weiToReceive1
            );
            expect(sig2BalanceAfter).to.equal(
                sig2BalanceBefore + weiToReceive2
            );
        });

        it("allows sending asset to other (non-publicGood and publicGoods) address as batch", async () => {
            const weiToReceive1 = BigInt("1000000");
            const weiToReceive2 = BigInt("2500000");
            const tippingContractBalanceBefore = await provider.getBalance(
                tippingContract.address
            );
            const sig1BalanceBefore = await provider.getBalance(signer1Address);
            const sig2BalanceBefore = await provider.getBalance(signer2Address);
            await tippingContract.addPublicGood(signer2Address);

            const batchObject1 = {
                assetType: AssetType.Native,
                recipient: signer1Address,
                amount: weiToReceive1,
                tokenId: 0,
                tokenAddress: ZERO_ADDRESS,
                message: "",
            };
            const batchObject2 = {
                assetType: AssetType.Native,
                recipient: signer2Address,
                amount: weiToReceive2,
                tokenId: 0,
                tokenAddress: ZERO_ADDRESS,
                message: "",
            };

            const batchSendObject = await tippingContract.calculateBatchFee([
                batchObject1,
                batchObject2,
            ]);
            let nativeAmountToSend = BigInt(0);
            let adjustedBatchSendObject = batchSendObject.map(call => {
                nativeAmountToSend += BigInt(call.nativeAmount);
                return {
                    assetType: call.assetType,
                    recipient: call.recipient,
                    amount: call.amount,
                    tokenId: call.tokenId,
                    tokenAddress: call.tokenAddress,
                    message: call.message,
                };
            });

            await tippingContract.batchSendTo(adjustedBatchSendObject, {
                value: nativeAmountToSend,
            });

            const tippingContractBalanceAfter = await provider.getBalance(
                tippingContract.address
            );
            const sig1BalanceAfter = await provider.getBalance(signer1Address);
            const sig2BalanceAfter = await provider.getBalance(signer2Address);

            expect(batchSendObject[1].amount).to.equal(weiToReceive2);
            expect(tippingContractBalanceAfter).to.equal(
                tippingContractBalanceBefore + nativeAmountToSend - weiToReceive1 - weiToReceive2
            );
            expect(sig1BalanceAfter).to.equal(
                sig1BalanceBefore + weiToReceive1
            );
            expect(sig2BalanceAfter).to.equal(
                sig2BalanceBefore + weiToReceive2
            );

            await tippingContract.deletePublicGood(signer2Address);
        });

        it("emits a TipMessage event", async () => {
            const weiToReceive = BigInt("1000000");
            const calculatedFee = await tippingContract.getPaymentFee(
                weiToReceive,
                AssetType.Native,
                signer1Address
            );
            const weiToSend = weiToReceive + calculatedFee;
            await expect(
                tippingContract.sendNativeTo(signer1Address, "xyz", {
                    value: weiToSend,
                })
            )
                .to.emit(tippingContract, "TipMessage")
                .withArgs(
                    signer1Address,
                    "xyz",
                    ownerAddress,
                    AssetType.Native,
                    ZERO_ADDRESS,
                    0,
                    weiToReceive,
                    calculatedFee
                );
        });
        // it("emits an Attested event", async () => {
        //     await tippingContract.addPublicGood(signer1Address);

        //     const weiToSend = BigNumber.from("1000000");
        //     await expect(
        //         tippingContract.sendNativeTo(signer1Address, "", {
        //             value: weiToSend,
        //         })
        //     )
        //         .to.emit(tippingContract, "Attested")
        //         .withArgs(
        //             ownerAddress
        //         );
        //     await tippingContract.deletePublicGood(signer1Address);
        // });
    });
});