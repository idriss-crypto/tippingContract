/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface MaticPriceAggregatorV3MockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "decimals"
      | "description"
      | "dollarToWei"
      | "getRoundData"
      | "latestRoundData"
      | "setPrice"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dollarToWei",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dollarToWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export interface MaticPriceAggregatorV3Mock extends BaseContract {
  address: string;
  connect(runner?: ContractRunner | null): MaticPriceAggregatorV3Mock;
  waitForDeployment(): Promise<this>;

  interface: MaticPriceAggregatorV3MockInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  decimals: TypedContractMethod<[], [bigint], "view">;

  description: TypedContractMethod<[], [string], "view">;

  dollarToWei: TypedContractMethod<[], [bigint], "view">;

  getRoundData: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        roundId: bigint;
        answer: bigint;
        startedAt: bigint;
        updatedAt: bigint;
        answeredInRound: bigint;
      }
    ],
    "view"
  >;

  latestRoundData: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        roundId: bigint;
        answer: bigint;
        startedAt: bigint;
        updatedAt: bigint;
        answeredInRound: bigint;
      }
    ],
    "view"
  >;

  setPrice: TypedContractMethod<[_price: BigNumberish], [void], "nonpayable">;

  version: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "dollarToWei"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoundData"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        roundId: bigint;
        answer: bigint;
        startedAt: bigint;
        updatedAt: bigint;
        answeredInRound: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "latestRoundData"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        roundId: bigint;
        answer: bigint;
        startedAt: bigint;
        updatedAt: bigint;
        answeredInRound: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "setPrice"
  ): TypedContractMethod<[_price: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}