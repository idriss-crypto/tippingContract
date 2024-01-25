/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ISchemaRegistryInterface extends ethers.utils.Interface {
  functions: {
    "getSchema(bytes32)": FunctionFragment;
    "register(string,address,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSchema",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, string, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "getSchema", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;

  events: {
    "Registered(bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;
}

export type RegisteredEvent = TypedEvent<
  [string, string] & { uid: string; registerer: string }
>;

export class ISchemaRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ISchemaRegistryInterface;

  functions: {
    getSchema(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, boolean, string] & {
          uid: string;
          resolver: string;
          revocable: boolean;
          schema: string;
        }
      ]
    >;

    register(
      schema: string,
      resolver: string,
      revocable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getSchema(
    uid: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, boolean, string] & {
      uid: string;
      resolver: string;
      revocable: boolean;
      schema: string;
    }
  >;

  register(
    schema: string,
    resolver: string,
    revocable: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getSchema(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, boolean, string] & {
        uid: string;
        resolver: string;
        revocable: boolean;
        schema: string;
      }
    >;

    register(
      schema: string,
      resolver: string,
      revocable: boolean,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Registered(bytes32,address)"(
      uid?: BytesLike | null,
      registerer?: null
    ): TypedEventFilter<[string, string], { uid: string; registerer: string }>;

    Registered(
      uid?: BytesLike | null,
      registerer?: null
    ): TypedEventFilter<[string, string], { uid: string; registerer: string }>;
  };

  estimateGas: {
    getSchema(uid: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    register(
      schema: string,
      resolver: string,
      revocable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSchema(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      schema: string,
      resolver: string,
      revocable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}