/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface IDrissInterface extends utils.Interface {
  functions: {
    "IDrissMap(string)": FunctionFragment;
    "IDrissOwners(string)": FunctionFragment;
    "IDrissOwnersMap(string)": FunctionFragment;
    "addIDriss(string,string)": FunctionFragment;
    "getIDriss(string)": FunctionFragment;
    "removeIDriss(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IDrissMap"
      | "IDrissOwners"
      | "IDrissOwnersMap"
      | "addIDriss"
      | "getIDriss"
      | "removeIDriss"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "IDrissMap",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "IDrissOwners",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "IDrissOwnersMap",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addIDriss",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIDriss",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeIDriss",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "IDrissMap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "IDrissOwners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IDrissOwnersMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addIDriss", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getIDriss", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeIDriss",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IDriss extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDrissInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    IDrissMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    IDrissOwners(
      _hash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    IDrissOwnersMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    addIDriss(
      _hash: PromiseOrValue<string>,
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getIDriss(
      _hash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    removeIDriss(
      _hash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  IDrissMap(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  IDrissOwners(
    _hash: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  IDrissOwnersMap(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  addIDriss(
    _hash: PromiseOrValue<string>,
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getIDriss(
    _hash: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  removeIDriss(
    _hash: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    IDrissMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    IDrissOwners(
      _hash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    IDrissOwnersMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    addIDriss(
      _hash: PromiseOrValue<string>,
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getIDriss(
      _hash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    removeIDriss(
      _hash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    IDrissMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IDrissOwners(
      _hash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IDrissOwnersMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addIDriss(
      _hash: PromiseOrValue<string>,
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getIDriss(
      _hash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeIDriss(
      _hash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    IDrissMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IDrissOwners(
      _hash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IDrissOwnersMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addIDriss(
      _hash: PromiseOrValue<string>,
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getIDriss(
      _hash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeIDriss(
      _hash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}