/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IEAS",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEAS__factory>;
    getContractFactory(
      name: "ISchemaRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISchemaRegistry__factory>;
    getContractFactory(
      name: "ITipping",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITipping__factory>;
    getContractFactory(
      name: "ISchemaResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISchemaResolver__factory>;
    getContractFactory(
      name: "PublicGoodAttester",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PublicGoodAttester__factory>;
    getContractFactory(
      name: "FeeCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeCalculator__factory>;
    getContractFactory(
      name: "MultiAssetSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiAssetSender__factory>;
    getContractFactory(
      name: "MockERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC1155__factory>;
    getContractFactory(
      name: "MockNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockNFT__factory>;
    getContractFactory(
      name: "MockToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockToken__factory>;
    getContractFactory(
      name: "MaticPriceAggregatorV3Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MaticPriceAggregatorV3Mock__factory>;
    getContractFactory(
      name: "MockEAS",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockEAS__factory>;
    getContractFactory(
      name: "Tipping",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Tipping__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IEAS",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IEAS>;
    getContractAt(
      name: "ISchemaRegistry",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISchemaRegistry>;
    getContractAt(
      name: "ITipping",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ITipping>;
    getContractAt(
      name: "ISchemaResolver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISchemaResolver>;
    getContractAt(
      name: "PublicGoodAttester",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PublicGoodAttester>;
    getContractAt(
      name: "FeeCalculator",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeCalculator>;
    getContractAt(
      name: "MultiAssetSender",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiAssetSender>;
    getContractAt(
      name: "MockERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC1155>;
    getContractAt(
      name: "MockNFT",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockNFT>;
    getContractAt(
      name: "MockToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockToken>;
    getContractAt(
      name: "MaticPriceAggregatorV3Mock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MaticPriceAggregatorV3Mock>;
    getContractAt(
      name: "MockEAS",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockEAS>;
    getContractAt(
      name: "Tipping",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Tipping>;

    deployContract(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorV3Interface>;
    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155>;
    deployContract(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155MetadataURI>;
    deployContract(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Receiver>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721>;
    deployContract(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Metadata>;
    deployContract(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721>;
    deployContract(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Receiver>;
    deployContract(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "IEAS",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IEAS>;
    deployContract(
      name: "ISchemaRegistry",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISchemaRegistry>;
    deployContract(
      name: "ITipping",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ITipping>;
    deployContract(
      name: "ISchemaResolver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISchemaResolver>;
    deployContract(
      name: "PublicGoodAttester",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PublicGoodAttester>;
    deployContract(
      name: "FeeCalculator",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FeeCalculator>;
    deployContract(
      name: "MultiAssetSender",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiAssetSender>;
    deployContract(
      name: "MockERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockERC1155>;
    deployContract(
      name: "MockNFT",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockNFT>;
    deployContract(
      name: "MockToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockToken>;
    deployContract(
      name: "MaticPriceAggregatorV3Mock",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MaticPriceAggregatorV3Mock>;
    deployContract(
      name: "MockEAS",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockEAS>;
    deployContract(
      name: "Tipping",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Tipping>;

    deployContract(
      name: "AggregatorV3Interface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorV3Interface>;
    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "ERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155>;
    deployContract(
      name: "IERC1155MetadataURI",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155MetadataURI>;
    deployContract(
      name: "IERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "IERC1155Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Receiver>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC721",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721>;
    deployContract(
      name: "IERC721Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Metadata>;
    deployContract(
      name: "IERC721",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721>;
    deployContract(
      name: "IERC721Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Receiver>;
    deployContract(
      name: "ERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "IEAS",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IEAS>;
    deployContract(
      name: "ISchemaRegistry",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISchemaRegistry>;
    deployContract(
      name: "ITipping",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ITipping>;
    deployContract(
      name: "ISchemaResolver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISchemaResolver>;
    deployContract(
      name: "PublicGoodAttester",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PublicGoodAttester>;
    deployContract(
      name: "FeeCalculator",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FeeCalculator>;
    deployContract(
      name: "MultiAssetSender",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiAssetSender>;
    deployContract(
      name: "MockERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockERC1155>;
    deployContract(
      name: "MockNFT",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockNFT>;
    deployContract(
      name: "MockToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockToken>;
    deployContract(
      name: "MaticPriceAggregatorV3Mock",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MaticPriceAggregatorV3Mock>;
    deployContract(
      name: "MockEAS",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockEAS>;
    deployContract(
      name: "Tipping",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Tipping>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}