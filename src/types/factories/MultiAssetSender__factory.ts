/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MultiAssetSender,
  MultiAssetSenderInterface,
} from "../MultiAssetSender";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220f1b4c43068b2aa70f76bd6fd6c06b124670604e711994c2dbcc32ee17389897764736f6c63430008130033";

export class MultiAssetSender__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MultiAssetSender> {
    return super.deploy(overrides || {}) as Promise<MultiAssetSender>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MultiAssetSender {
    return super.attach(address) as MultiAssetSender;
  }
  connect(signer: Signer): MultiAssetSender__factory {
    return super.connect(signer) as MultiAssetSender__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiAssetSenderInterface {
    return new utils.Interface(_abi) as MultiAssetSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiAssetSender {
    return new Contract(address, _abi, signerOrProvider) as MultiAssetSender;
  }
}