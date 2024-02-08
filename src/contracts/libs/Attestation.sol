// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import {IEAS, AttestationRequest, AttestationRequestData} from "../interfaces/IEAS.sol";
import {NO_EXPIRATION_TIME, EMPTY_UID} from "./Common.sol";

/**
 * @title PublicGoodAttester
 */
contract PublicGoodAttester {
    error InvalidEAS();

    // The address of the global EAS contract.
    IEAS private EAS;
    bytes32 public EAS_SCHEMA;
    bool public SUPPORTS_EAS;

    /**
     * @dev Creates a new ExampleAttester instance.
     *
     * @param eas The address of the global EAS contract.
     */
    constructor(address eas, bytes32 easSchema) {
        if (eas != address(0)) {
            _initializeEAS(eas, easSchema);
        }
    }

    function _initializeEAS(address eas, bytes32 easSchema) internal {
        if (eas == address(0)) {
            revert InvalidEAS();
        }
        SUPPORTS_EAS = true;
        EAS = IEAS(eas);
        EAS_SCHEMA = easSchema;
    }

    /**
     * @dev Attests to a schema that receives parameter
     * @param _publicGood: recipient address of public good
     */
    function _attestDonor(
        address _publicGood,
        address _assetAddress,
        uint256 _amount,
        uint256 _assetId
    ) internal {
        EAS.attest(
            AttestationRequest({
                schema: EAS_SCHEMA,
                data: AttestationRequestData({
                    recipient: msg.sender, // the supporter receives the attestation
                    expirationTime: NO_EXPIRATION_TIME, // No expiration time
                    revocable: false,
                    refUID: EMPTY_UID, // No references UI
                    data: abi.encode(
                        _publicGood,
                        _assetAddress,
                        _amount,
                        _assetId
                    ), // Encode grantee address
                    value: 0 // No value/ETH
                })
            })
        );
    }
}
