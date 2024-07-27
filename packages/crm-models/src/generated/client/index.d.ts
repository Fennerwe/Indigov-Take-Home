
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Constituent
 * 
 */
export type Constituent = $Result.DefaultSelection<Prisma.$ConstituentPayload>
/**
 * Model ConstituentAddress
 * 
 */
export type ConstituentAddress = $Result.DefaultSelection<Prisma.$ConstituentAddressPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Constituents
 * const constituents = await prisma.constituent.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Constituents
   * const constituents = await prisma.constituent.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.constituent`: Exposes CRUD operations for the **Constituent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Constituents
    * const constituents = await prisma.constituent.findMany()
    * ```
    */
  get constituent(): Prisma.ConstituentDelegate<ExtArgs>;

  /**
   * `prisma.constituentAddress`: Exposes CRUD operations for the **ConstituentAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConstituentAddresses
    * const constituentAddresses = await prisma.constituentAddress.findMany()
    * ```
    */
  get constituentAddress(): Prisma.ConstituentAddressDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Constituent: 'Constituent',
    ConstituentAddress: 'ConstituentAddress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "constituent" | "constituentAddress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Constituent: {
        payload: Prisma.$ConstituentPayload<ExtArgs>
        fields: Prisma.ConstituentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConstituentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConstituentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload>
          }
          findFirst: {
            args: Prisma.ConstituentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConstituentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload>
          }
          findMany: {
            args: Prisma.ConstituentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload>[]
          }
          create: {
            args: Prisma.ConstituentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload>
          }
          createMany: {
            args: Prisma.ConstituentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConstituentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload>[]
          }
          delete: {
            args: Prisma.ConstituentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload>
          }
          update: {
            args: Prisma.ConstituentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload>
          }
          deleteMany: {
            args: Prisma.ConstituentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConstituentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConstituentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentPayload>
          }
          aggregate: {
            args: Prisma.ConstituentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConstituent>
          }
          groupBy: {
            args: Prisma.ConstituentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConstituentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConstituentCountArgs<ExtArgs>
            result: $Utils.Optional<ConstituentCountAggregateOutputType> | number
          }
        }
      }
      ConstituentAddress: {
        payload: Prisma.$ConstituentAddressPayload<ExtArgs>
        fields: Prisma.ConstituentAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConstituentAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConstituentAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload>
          }
          findFirst: {
            args: Prisma.ConstituentAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConstituentAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload>
          }
          findMany: {
            args: Prisma.ConstituentAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload>[]
          }
          create: {
            args: Prisma.ConstituentAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload>
          }
          createMany: {
            args: Prisma.ConstituentAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConstituentAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload>[]
          }
          delete: {
            args: Prisma.ConstituentAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload>
          }
          update: {
            args: Prisma.ConstituentAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload>
          }
          deleteMany: {
            args: Prisma.ConstituentAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConstituentAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConstituentAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstituentAddressPayload>
          }
          aggregate: {
            args: Prisma.ConstituentAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConstituentAddress>
          }
          groupBy: {
            args: Prisma.ConstituentAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConstituentAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConstituentAddressCountArgs<ExtArgs>
            result: $Utils.Optional<ConstituentAddressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Constituent
   */

  export type AggregateConstituent = {
    _count: ConstituentCountAggregateOutputType | null
    _min: ConstituentMinAggregateOutputType | null
    _max: ConstituentMaxAggregateOutputType | null
  }

  export type ConstituentMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    subscribed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConstituentMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    subscribed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConstituentCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    subscribed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConstituentMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConstituentMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConstituentCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConstituentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constituent to aggregate.
     */
    where?: ConstituentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constituents to fetch.
     */
    orderBy?: ConstituentOrderByWithRelationInput | ConstituentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConstituentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constituents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constituents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Constituents
    **/
    _count?: true | ConstituentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConstituentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConstituentMaxAggregateInputType
  }

  export type GetConstituentAggregateType<T extends ConstituentAggregateArgs> = {
        [P in keyof T & keyof AggregateConstituent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConstituent[P]>
      : GetScalarType<T[P], AggregateConstituent[P]>
  }




  export type ConstituentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstituentWhereInput
    orderBy?: ConstituentOrderByWithAggregationInput | ConstituentOrderByWithAggregationInput[]
    by: ConstituentScalarFieldEnum[] | ConstituentScalarFieldEnum
    having?: ConstituentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConstituentCountAggregateInputType | true
    _min?: ConstituentMinAggregateInputType
    _max?: ConstituentMaxAggregateInputType
  }

  export type ConstituentGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
    subscribed: boolean
    createdAt: Date
    updatedAt: Date
    _count: ConstituentCountAggregateOutputType | null
    _min: ConstituentMinAggregateOutputType | null
    _max: ConstituentMaxAggregateOutputType | null
  }

  type GetConstituentGroupByPayload<T extends ConstituentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConstituentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConstituentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConstituentGroupByOutputType[P]>
            : GetScalarType<T[P], ConstituentGroupByOutputType[P]>
        }
      >
    >


  export type ConstituentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    constituentAddress?: boolean | Constituent$constituentAddressArgs<ExtArgs>
  }, ExtArgs["result"]["constituent"]>

  export type ConstituentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["constituent"]>

  export type ConstituentSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConstituentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constituentAddress?: boolean | Constituent$constituentAddressArgs<ExtArgs>
  }
  export type ConstituentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConstituentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Constituent"
    objects: {
      constituentAddress: Prisma.$ConstituentAddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string | null
      subscribed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["constituent"]>
    composites: {}
  }

  type ConstituentGetPayload<S extends boolean | null | undefined | ConstituentDefaultArgs> = $Result.GetResult<Prisma.$ConstituentPayload, S>

  type ConstituentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConstituentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConstituentCountAggregateInputType | true
    }

  export interface ConstituentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Constituent'], meta: { name: 'Constituent' } }
    /**
     * Find zero or one Constituent that matches the filter.
     * @param {ConstituentFindUniqueArgs} args - Arguments to find a Constituent
     * @example
     * // Get one Constituent
     * const constituent = await prisma.constituent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConstituentFindUniqueArgs>(args: SelectSubset<T, ConstituentFindUniqueArgs<ExtArgs>>): Prisma__ConstituentClient<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Constituent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConstituentFindUniqueOrThrowArgs} args - Arguments to find a Constituent
     * @example
     * // Get one Constituent
     * const constituent = await prisma.constituent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConstituentFindUniqueOrThrowArgs>(args: SelectSubset<T, ConstituentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConstituentClient<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Constituent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentFindFirstArgs} args - Arguments to find a Constituent
     * @example
     * // Get one Constituent
     * const constituent = await prisma.constituent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConstituentFindFirstArgs>(args?: SelectSubset<T, ConstituentFindFirstArgs<ExtArgs>>): Prisma__ConstituentClient<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Constituent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentFindFirstOrThrowArgs} args - Arguments to find a Constituent
     * @example
     * // Get one Constituent
     * const constituent = await prisma.constituent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConstituentFindFirstOrThrowArgs>(args?: SelectSubset<T, ConstituentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConstituentClient<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Constituents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Constituents
     * const constituents = await prisma.constituent.findMany()
     * 
     * // Get first 10 Constituents
     * const constituents = await prisma.constituent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const constituentWithIdOnly = await prisma.constituent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConstituentFindManyArgs>(args?: SelectSubset<T, ConstituentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Constituent.
     * @param {ConstituentCreateArgs} args - Arguments to create a Constituent.
     * @example
     * // Create one Constituent
     * const Constituent = await prisma.constituent.create({
     *   data: {
     *     // ... data to create a Constituent
     *   }
     * })
     * 
     */
    create<T extends ConstituentCreateArgs>(args: SelectSubset<T, ConstituentCreateArgs<ExtArgs>>): Prisma__ConstituentClient<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Constituents.
     * @param {ConstituentCreateManyArgs} args - Arguments to create many Constituents.
     * @example
     * // Create many Constituents
     * const constituent = await prisma.constituent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConstituentCreateManyArgs>(args?: SelectSubset<T, ConstituentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Constituents and returns the data saved in the database.
     * @param {ConstituentCreateManyAndReturnArgs} args - Arguments to create many Constituents.
     * @example
     * // Create many Constituents
     * const constituent = await prisma.constituent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Constituents and only return the `id`
     * const constituentWithIdOnly = await prisma.constituent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConstituentCreateManyAndReturnArgs>(args?: SelectSubset<T, ConstituentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Constituent.
     * @param {ConstituentDeleteArgs} args - Arguments to delete one Constituent.
     * @example
     * // Delete one Constituent
     * const Constituent = await prisma.constituent.delete({
     *   where: {
     *     // ... filter to delete one Constituent
     *   }
     * })
     * 
     */
    delete<T extends ConstituentDeleteArgs>(args: SelectSubset<T, ConstituentDeleteArgs<ExtArgs>>): Prisma__ConstituentClient<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Constituent.
     * @param {ConstituentUpdateArgs} args - Arguments to update one Constituent.
     * @example
     * // Update one Constituent
     * const constituent = await prisma.constituent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConstituentUpdateArgs>(args: SelectSubset<T, ConstituentUpdateArgs<ExtArgs>>): Prisma__ConstituentClient<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Constituents.
     * @param {ConstituentDeleteManyArgs} args - Arguments to filter Constituents to delete.
     * @example
     * // Delete a few Constituents
     * const { count } = await prisma.constituent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConstituentDeleteManyArgs>(args?: SelectSubset<T, ConstituentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Constituents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Constituents
     * const constituent = await prisma.constituent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConstituentUpdateManyArgs>(args: SelectSubset<T, ConstituentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Constituent.
     * @param {ConstituentUpsertArgs} args - Arguments to update or create a Constituent.
     * @example
     * // Update or create a Constituent
     * const constituent = await prisma.constituent.upsert({
     *   create: {
     *     // ... data to create a Constituent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Constituent we want to update
     *   }
     * })
     */
    upsert<T extends ConstituentUpsertArgs>(args: SelectSubset<T, ConstituentUpsertArgs<ExtArgs>>): Prisma__ConstituentClient<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Constituents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentCountArgs} args - Arguments to filter Constituents to count.
     * @example
     * // Count the number of Constituents
     * const count = await prisma.constituent.count({
     *   where: {
     *     // ... the filter for the Constituents we want to count
     *   }
     * })
    **/
    count<T extends ConstituentCountArgs>(
      args?: Subset<T, ConstituentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConstituentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Constituent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConstituentAggregateArgs>(args: Subset<T, ConstituentAggregateArgs>): Prisma.PrismaPromise<GetConstituentAggregateType<T>>

    /**
     * Group by Constituent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConstituentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConstituentGroupByArgs['orderBy'] }
        : { orderBy?: ConstituentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConstituentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConstituentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Constituent model
   */
  readonly fields: ConstituentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Constituent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConstituentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constituentAddress<T extends Constituent$constituentAddressArgs<ExtArgs> = {}>(args?: Subset<T, Constituent$constituentAddressArgs<ExtArgs>>): Prisma__ConstituentAddressClient<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Constituent model
   */ 
  interface ConstituentFieldRefs {
    readonly id: FieldRef<"Constituent", 'String'>
    readonly firstName: FieldRef<"Constituent", 'String'>
    readonly lastName: FieldRef<"Constituent", 'String'>
    readonly email: FieldRef<"Constituent", 'String'>
    readonly phone: FieldRef<"Constituent", 'String'>
    readonly subscribed: FieldRef<"Constituent", 'Boolean'>
    readonly createdAt: FieldRef<"Constituent", 'DateTime'>
    readonly updatedAt: FieldRef<"Constituent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Constituent findUnique
   */
  export type ConstituentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
    /**
     * Filter, which Constituent to fetch.
     */
    where: ConstituentWhereUniqueInput
  }

  /**
   * Constituent findUniqueOrThrow
   */
  export type ConstituentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
    /**
     * Filter, which Constituent to fetch.
     */
    where: ConstituentWhereUniqueInput
  }

  /**
   * Constituent findFirst
   */
  export type ConstituentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
    /**
     * Filter, which Constituent to fetch.
     */
    where?: ConstituentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constituents to fetch.
     */
    orderBy?: ConstituentOrderByWithRelationInput | ConstituentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constituents.
     */
    cursor?: ConstituentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constituents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constituents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constituents.
     */
    distinct?: ConstituentScalarFieldEnum | ConstituentScalarFieldEnum[]
  }

  /**
   * Constituent findFirstOrThrow
   */
  export type ConstituentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
    /**
     * Filter, which Constituent to fetch.
     */
    where?: ConstituentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constituents to fetch.
     */
    orderBy?: ConstituentOrderByWithRelationInput | ConstituentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constituents.
     */
    cursor?: ConstituentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constituents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constituents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constituents.
     */
    distinct?: ConstituentScalarFieldEnum | ConstituentScalarFieldEnum[]
  }

  /**
   * Constituent findMany
   */
  export type ConstituentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
    /**
     * Filter, which Constituents to fetch.
     */
    where?: ConstituentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constituents to fetch.
     */
    orderBy?: ConstituentOrderByWithRelationInput | ConstituentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Constituents.
     */
    cursor?: ConstituentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constituents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constituents.
     */
    skip?: number
    distinct?: ConstituentScalarFieldEnum | ConstituentScalarFieldEnum[]
  }

  /**
   * Constituent create
   */
  export type ConstituentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
    /**
     * The data needed to create a Constituent.
     */
    data: XOR<ConstituentCreateInput, ConstituentUncheckedCreateInput>
  }

  /**
   * Constituent createMany
   */
  export type ConstituentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Constituents.
     */
    data: ConstituentCreateManyInput | ConstituentCreateManyInput[]
  }

  /**
   * Constituent createManyAndReturn
   */
  export type ConstituentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Constituents.
     */
    data: ConstituentCreateManyInput | ConstituentCreateManyInput[]
  }

  /**
   * Constituent update
   */
  export type ConstituentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
    /**
     * The data needed to update a Constituent.
     */
    data: XOR<ConstituentUpdateInput, ConstituentUncheckedUpdateInput>
    /**
     * Choose, which Constituent to update.
     */
    where: ConstituentWhereUniqueInput
  }

  /**
   * Constituent updateMany
   */
  export type ConstituentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Constituents.
     */
    data: XOR<ConstituentUpdateManyMutationInput, ConstituentUncheckedUpdateManyInput>
    /**
     * Filter which Constituents to update
     */
    where?: ConstituentWhereInput
  }

  /**
   * Constituent upsert
   */
  export type ConstituentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
    /**
     * The filter to search for the Constituent to update in case it exists.
     */
    where: ConstituentWhereUniqueInput
    /**
     * In case the Constituent found by the `where` argument doesn't exist, create a new Constituent with this data.
     */
    create: XOR<ConstituentCreateInput, ConstituentUncheckedCreateInput>
    /**
     * In case the Constituent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConstituentUpdateInput, ConstituentUncheckedUpdateInput>
  }

  /**
   * Constituent delete
   */
  export type ConstituentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
    /**
     * Filter which Constituent to delete.
     */
    where: ConstituentWhereUniqueInput
  }

  /**
   * Constituent deleteMany
   */
  export type ConstituentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constituents to delete
     */
    where?: ConstituentWhereInput
  }

  /**
   * Constituent.constituentAddress
   */
  export type Constituent$constituentAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    where?: ConstituentAddressWhereInput
  }

  /**
   * Constituent without action
   */
  export type ConstituentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constituent
     */
    select?: ConstituentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentInclude<ExtArgs> | null
  }


  /**
   * Model ConstituentAddress
   */

  export type AggregateConstituentAddress = {
    _count: ConstituentAddressCountAggregateOutputType | null
    _min: ConstituentAddressMinAggregateOutputType | null
    _max: ConstituentAddressMaxAggregateOutputType | null
  }

  export type ConstituentAddressMinAggregateOutputType = {
    id: string | null
    street1: string | null
    street2: string | null
    street3: string | null
    city: string | null
    state: string | null
    zip: string | null
    constituentId: string | null
  }

  export type ConstituentAddressMaxAggregateOutputType = {
    id: string | null
    street1: string | null
    street2: string | null
    street3: string | null
    city: string | null
    state: string | null
    zip: string | null
    constituentId: string | null
  }

  export type ConstituentAddressCountAggregateOutputType = {
    id: number
    street1: number
    street2: number
    street3: number
    city: number
    state: number
    zip: number
    constituentId: number
    _all: number
  }


  export type ConstituentAddressMinAggregateInputType = {
    id?: true
    street1?: true
    street2?: true
    street3?: true
    city?: true
    state?: true
    zip?: true
    constituentId?: true
  }

  export type ConstituentAddressMaxAggregateInputType = {
    id?: true
    street1?: true
    street2?: true
    street3?: true
    city?: true
    state?: true
    zip?: true
    constituentId?: true
  }

  export type ConstituentAddressCountAggregateInputType = {
    id?: true
    street1?: true
    street2?: true
    street3?: true
    city?: true
    state?: true
    zip?: true
    constituentId?: true
    _all?: true
  }

  export type ConstituentAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConstituentAddress to aggregate.
     */
    where?: ConstituentAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstituentAddresses to fetch.
     */
    orderBy?: ConstituentAddressOrderByWithRelationInput | ConstituentAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConstituentAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstituentAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstituentAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConstituentAddresses
    **/
    _count?: true | ConstituentAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConstituentAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConstituentAddressMaxAggregateInputType
  }

  export type GetConstituentAddressAggregateType<T extends ConstituentAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateConstituentAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConstituentAddress[P]>
      : GetScalarType<T[P], AggregateConstituentAddress[P]>
  }




  export type ConstituentAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstituentAddressWhereInput
    orderBy?: ConstituentAddressOrderByWithAggregationInput | ConstituentAddressOrderByWithAggregationInput[]
    by: ConstituentAddressScalarFieldEnum[] | ConstituentAddressScalarFieldEnum
    having?: ConstituentAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConstituentAddressCountAggregateInputType | true
    _min?: ConstituentAddressMinAggregateInputType
    _max?: ConstituentAddressMaxAggregateInputType
  }

  export type ConstituentAddressGroupByOutputType = {
    id: string
    street1: string
    street2: string | null
    street3: string | null
    city: string
    state: string
    zip: string
    constituentId: string
    _count: ConstituentAddressCountAggregateOutputType | null
    _min: ConstituentAddressMinAggregateOutputType | null
    _max: ConstituentAddressMaxAggregateOutputType | null
  }

  type GetConstituentAddressGroupByPayload<T extends ConstituentAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConstituentAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConstituentAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConstituentAddressGroupByOutputType[P]>
            : GetScalarType<T[P], ConstituentAddressGroupByOutputType[P]>
        }
      >
    >


  export type ConstituentAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street1?: boolean
    street2?: boolean
    street3?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    constituentId?: boolean
    Constituent?: boolean | ConstituentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constituentAddress"]>

  export type ConstituentAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street1?: boolean
    street2?: boolean
    street3?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    constituentId?: boolean
    Constituent?: boolean | ConstituentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constituentAddress"]>

  export type ConstituentAddressSelectScalar = {
    id?: boolean
    street1?: boolean
    street2?: boolean
    street3?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    constituentId?: boolean
  }

  export type ConstituentAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Constituent?: boolean | ConstituentDefaultArgs<ExtArgs>
  }
  export type ConstituentAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Constituent?: boolean | ConstituentDefaultArgs<ExtArgs>
  }

  export type $ConstituentAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConstituentAddress"
    objects: {
      Constituent: Prisma.$ConstituentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      street1: string
      street2: string | null
      street3: string | null
      city: string
      state: string
      zip: string
      constituentId: string
    }, ExtArgs["result"]["constituentAddress"]>
    composites: {}
  }

  type ConstituentAddressGetPayload<S extends boolean | null | undefined | ConstituentAddressDefaultArgs> = $Result.GetResult<Prisma.$ConstituentAddressPayload, S>

  type ConstituentAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConstituentAddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConstituentAddressCountAggregateInputType | true
    }

  export interface ConstituentAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConstituentAddress'], meta: { name: 'ConstituentAddress' } }
    /**
     * Find zero or one ConstituentAddress that matches the filter.
     * @param {ConstituentAddressFindUniqueArgs} args - Arguments to find a ConstituentAddress
     * @example
     * // Get one ConstituentAddress
     * const constituentAddress = await prisma.constituentAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConstituentAddressFindUniqueArgs>(args: SelectSubset<T, ConstituentAddressFindUniqueArgs<ExtArgs>>): Prisma__ConstituentAddressClient<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ConstituentAddress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConstituentAddressFindUniqueOrThrowArgs} args - Arguments to find a ConstituentAddress
     * @example
     * // Get one ConstituentAddress
     * const constituentAddress = await prisma.constituentAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConstituentAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, ConstituentAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConstituentAddressClient<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ConstituentAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentAddressFindFirstArgs} args - Arguments to find a ConstituentAddress
     * @example
     * // Get one ConstituentAddress
     * const constituentAddress = await prisma.constituentAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConstituentAddressFindFirstArgs>(args?: SelectSubset<T, ConstituentAddressFindFirstArgs<ExtArgs>>): Prisma__ConstituentAddressClient<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ConstituentAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentAddressFindFirstOrThrowArgs} args - Arguments to find a ConstituentAddress
     * @example
     * // Get one ConstituentAddress
     * const constituentAddress = await prisma.constituentAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConstituentAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, ConstituentAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConstituentAddressClient<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ConstituentAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConstituentAddresses
     * const constituentAddresses = await prisma.constituentAddress.findMany()
     * 
     * // Get first 10 ConstituentAddresses
     * const constituentAddresses = await prisma.constituentAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const constituentAddressWithIdOnly = await prisma.constituentAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConstituentAddressFindManyArgs>(args?: SelectSubset<T, ConstituentAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ConstituentAddress.
     * @param {ConstituentAddressCreateArgs} args - Arguments to create a ConstituentAddress.
     * @example
     * // Create one ConstituentAddress
     * const ConstituentAddress = await prisma.constituentAddress.create({
     *   data: {
     *     // ... data to create a ConstituentAddress
     *   }
     * })
     * 
     */
    create<T extends ConstituentAddressCreateArgs>(args: SelectSubset<T, ConstituentAddressCreateArgs<ExtArgs>>): Prisma__ConstituentAddressClient<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ConstituentAddresses.
     * @param {ConstituentAddressCreateManyArgs} args - Arguments to create many ConstituentAddresses.
     * @example
     * // Create many ConstituentAddresses
     * const constituentAddress = await prisma.constituentAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConstituentAddressCreateManyArgs>(args?: SelectSubset<T, ConstituentAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConstituentAddresses and returns the data saved in the database.
     * @param {ConstituentAddressCreateManyAndReturnArgs} args - Arguments to create many ConstituentAddresses.
     * @example
     * // Create many ConstituentAddresses
     * const constituentAddress = await prisma.constituentAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConstituentAddresses and only return the `id`
     * const constituentAddressWithIdOnly = await prisma.constituentAddress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConstituentAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, ConstituentAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ConstituentAddress.
     * @param {ConstituentAddressDeleteArgs} args - Arguments to delete one ConstituentAddress.
     * @example
     * // Delete one ConstituentAddress
     * const ConstituentAddress = await prisma.constituentAddress.delete({
     *   where: {
     *     // ... filter to delete one ConstituentAddress
     *   }
     * })
     * 
     */
    delete<T extends ConstituentAddressDeleteArgs>(args: SelectSubset<T, ConstituentAddressDeleteArgs<ExtArgs>>): Prisma__ConstituentAddressClient<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ConstituentAddress.
     * @param {ConstituentAddressUpdateArgs} args - Arguments to update one ConstituentAddress.
     * @example
     * // Update one ConstituentAddress
     * const constituentAddress = await prisma.constituentAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConstituentAddressUpdateArgs>(args: SelectSubset<T, ConstituentAddressUpdateArgs<ExtArgs>>): Prisma__ConstituentAddressClient<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ConstituentAddresses.
     * @param {ConstituentAddressDeleteManyArgs} args - Arguments to filter ConstituentAddresses to delete.
     * @example
     * // Delete a few ConstituentAddresses
     * const { count } = await prisma.constituentAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConstituentAddressDeleteManyArgs>(args?: SelectSubset<T, ConstituentAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConstituentAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConstituentAddresses
     * const constituentAddress = await prisma.constituentAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConstituentAddressUpdateManyArgs>(args: SelectSubset<T, ConstituentAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConstituentAddress.
     * @param {ConstituentAddressUpsertArgs} args - Arguments to update or create a ConstituentAddress.
     * @example
     * // Update or create a ConstituentAddress
     * const constituentAddress = await prisma.constituentAddress.upsert({
     *   create: {
     *     // ... data to create a ConstituentAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConstituentAddress we want to update
     *   }
     * })
     */
    upsert<T extends ConstituentAddressUpsertArgs>(args: SelectSubset<T, ConstituentAddressUpsertArgs<ExtArgs>>): Prisma__ConstituentAddressClient<$Result.GetResult<Prisma.$ConstituentAddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ConstituentAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentAddressCountArgs} args - Arguments to filter ConstituentAddresses to count.
     * @example
     * // Count the number of ConstituentAddresses
     * const count = await prisma.constituentAddress.count({
     *   where: {
     *     // ... the filter for the ConstituentAddresses we want to count
     *   }
     * })
    **/
    count<T extends ConstituentAddressCountArgs>(
      args?: Subset<T, ConstituentAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConstituentAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConstituentAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConstituentAddressAggregateArgs>(args: Subset<T, ConstituentAddressAggregateArgs>): Prisma.PrismaPromise<GetConstituentAddressAggregateType<T>>

    /**
     * Group by ConstituentAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstituentAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConstituentAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConstituentAddressGroupByArgs['orderBy'] }
        : { orderBy?: ConstituentAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConstituentAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConstituentAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConstituentAddress model
   */
  readonly fields: ConstituentAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConstituentAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConstituentAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Constituent<T extends ConstituentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstituentDefaultArgs<ExtArgs>>): Prisma__ConstituentClient<$Result.GetResult<Prisma.$ConstituentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConstituentAddress model
   */ 
  interface ConstituentAddressFieldRefs {
    readonly id: FieldRef<"ConstituentAddress", 'String'>
    readonly street1: FieldRef<"ConstituentAddress", 'String'>
    readonly street2: FieldRef<"ConstituentAddress", 'String'>
    readonly street3: FieldRef<"ConstituentAddress", 'String'>
    readonly city: FieldRef<"ConstituentAddress", 'String'>
    readonly state: FieldRef<"ConstituentAddress", 'String'>
    readonly zip: FieldRef<"ConstituentAddress", 'String'>
    readonly constituentId: FieldRef<"ConstituentAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConstituentAddress findUnique
   */
  export type ConstituentAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ConstituentAddress to fetch.
     */
    where: ConstituentAddressWhereUniqueInput
  }

  /**
   * ConstituentAddress findUniqueOrThrow
   */
  export type ConstituentAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ConstituentAddress to fetch.
     */
    where: ConstituentAddressWhereUniqueInput
  }

  /**
   * ConstituentAddress findFirst
   */
  export type ConstituentAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ConstituentAddress to fetch.
     */
    where?: ConstituentAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstituentAddresses to fetch.
     */
    orderBy?: ConstituentAddressOrderByWithRelationInput | ConstituentAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConstituentAddresses.
     */
    cursor?: ConstituentAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstituentAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstituentAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConstituentAddresses.
     */
    distinct?: ConstituentAddressScalarFieldEnum | ConstituentAddressScalarFieldEnum[]
  }

  /**
   * ConstituentAddress findFirstOrThrow
   */
  export type ConstituentAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ConstituentAddress to fetch.
     */
    where?: ConstituentAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstituentAddresses to fetch.
     */
    orderBy?: ConstituentAddressOrderByWithRelationInput | ConstituentAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConstituentAddresses.
     */
    cursor?: ConstituentAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstituentAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstituentAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConstituentAddresses.
     */
    distinct?: ConstituentAddressScalarFieldEnum | ConstituentAddressScalarFieldEnum[]
  }

  /**
   * ConstituentAddress findMany
   */
  export type ConstituentAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ConstituentAddresses to fetch.
     */
    where?: ConstituentAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConstituentAddresses to fetch.
     */
    orderBy?: ConstituentAddressOrderByWithRelationInput | ConstituentAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConstituentAddresses.
     */
    cursor?: ConstituentAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConstituentAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConstituentAddresses.
     */
    skip?: number
    distinct?: ConstituentAddressScalarFieldEnum | ConstituentAddressScalarFieldEnum[]
  }

  /**
   * ConstituentAddress create
   */
  export type ConstituentAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a ConstituentAddress.
     */
    data: XOR<ConstituentAddressCreateInput, ConstituentAddressUncheckedCreateInput>
  }

  /**
   * ConstituentAddress createMany
   */
  export type ConstituentAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConstituentAddresses.
     */
    data: ConstituentAddressCreateManyInput | ConstituentAddressCreateManyInput[]
  }

  /**
   * ConstituentAddress createManyAndReturn
   */
  export type ConstituentAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ConstituentAddresses.
     */
    data: ConstituentAddressCreateManyInput | ConstituentAddressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConstituentAddress update
   */
  export type ConstituentAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a ConstituentAddress.
     */
    data: XOR<ConstituentAddressUpdateInput, ConstituentAddressUncheckedUpdateInput>
    /**
     * Choose, which ConstituentAddress to update.
     */
    where: ConstituentAddressWhereUniqueInput
  }

  /**
   * ConstituentAddress updateMany
   */
  export type ConstituentAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConstituentAddresses.
     */
    data: XOR<ConstituentAddressUpdateManyMutationInput, ConstituentAddressUncheckedUpdateManyInput>
    /**
     * Filter which ConstituentAddresses to update
     */
    where?: ConstituentAddressWhereInput
  }

  /**
   * ConstituentAddress upsert
   */
  export type ConstituentAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the ConstituentAddress to update in case it exists.
     */
    where: ConstituentAddressWhereUniqueInput
    /**
     * In case the ConstituentAddress found by the `where` argument doesn't exist, create a new ConstituentAddress with this data.
     */
    create: XOR<ConstituentAddressCreateInput, ConstituentAddressUncheckedCreateInput>
    /**
     * In case the ConstituentAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConstituentAddressUpdateInput, ConstituentAddressUncheckedUpdateInput>
  }

  /**
   * ConstituentAddress delete
   */
  export type ConstituentAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
    /**
     * Filter which ConstituentAddress to delete.
     */
    where: ConstituentAddressWhereUniqueInput
  }

  /**
   * ConstituentAddress deleteMany
   */
  export type ConstituentAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConstituentAddresses to delete
     */
    where?: ConstituentAddressWhereInput
  }

  /**
   * ConstituentAddress without action
   */
  export type ConstituentAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstituentAddress
     */
    select?: ConstituentAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstituentAddressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ConstituentScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    subscribed: 'subscribed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConstituentScalarFieldEnum = (typeof ConstituentScalarFieldEnum)[keyof typeof ConstituentScalarFieldEnum]


  export const ConstituentAddressScalarFieldEnum: {
    id: 'id',
    street1: 'street1',
    street2: 'street2',
    street3: 'street3',
    city: 'city',
    state: 'state',
    zip: 'zip',
    constituentId: 'constituentId'
  };

  export type ConstituentAddressScalarFieldEnum = (typeof ConstituentAddressScalarFieldEnum)[keyof typeof ConstituentAddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ConstituentWhereInput = {
    AND?: ConstituentWhereInput | ConstituentWhereInput[]
    OR?: ConstituentWhereInput[]
    NOT?: ConstituentWhereInput | ConstituentWhereInput[]
    id?: StringFilter<"Constituent"> | string
    firstName?: StringFilter<"Constituent"> | string
    lastName?: StringFilter<"Constituent"> | string
    email?: StringFilter<"Constituent"> | string
    phone?: StringNullableFilter<"Constituent"> | string | null
    subscribed?: BoolFilter<"Constituent"> | boolean
    createdAt?: DateTimeFilter<"Constituent"> | Date | string
    updatedAt?: DateTimeFilter<"Constituent"> | Date | string
    constituentAddress?: XOR<ConstituentAddressNullableRelationFilter, ConstituentAddressWhereInput> | null
  }

  export type ConstituentOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    constituentAddress?: ConstituentAddressOrderByWithRelationInput
  }

  export type ConstituentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ConstituentWhereInput | ConstituentWhereInput[]
    OR?: ConstituentWhereInput[]
    NOT?: ConstituentWhereInput | ConstituentWhereInput[]
    firstName?: StringFilter<"Constituent"> | string
    lastName?: StringFilter<"Constituent"> | string
    phone?: StringNullableFilter<"Constituent"> | string | null
    subscribed?: BoolFilter<"Constituent"> | boolean
    createdAt?: DateTimeFilter<"Constituent"> | Date | string
    updatedAt?: DateTimeFilter<"Constituent"> | Date | string
    constituentAddress?: XOR<ConstituentAddressNullableRelationFilter, ConstituentAddressWhereInput> | null
  }, "id" | "email">

  export type ConstituentOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConstituentCountOrderByAggregateInput
    _max?: ConstituentMaxOrderByAggregateInput
    _min?: ConstituentMinOrderByAggregateInput
  }

  export type ConstituentScalarWhereWithAggregatesInput = {
    AND?: ConstituentScalarWhereWithAggregatesInput | ConstituentScalarWhereWithAggregatesInput[]
    OR?: ConstituentScalarWhereWithAggregatesInput[]
    NOT?: ConstituentScalarWhereWithAggregatesInput | ConstituentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Constituent"> | string
    firstName?: StringWithAggregatesFilter<"Constituent"> | string
    lastName?: StringWithAggregatesFilter<"Constituent"> | string
    email?: StringWithAggregatesFilter<"Constituent"> | string
    phone?: StringNullableWithAggregatesFilter<"Constituent"> | string | null
    subscribed?: BoolWithAggregatesFilter<"Constituent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Constituent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Constituent"> | Date | string
  }

  export type ConstituentAddressWhereInput = {
    AND?: ConstituentAddressWhereInput | ConstituentAddressWhereInput[]
    OR?: ConstituentAddressWhereInput[]
    NOT?: ConstituentAddressWhereInput | ConstituentAddressWhereInput[]
    id?: StringFilter<"ConstituentAddress"> | string
    street1?: StringFilter<"ConstituentAddress"> | string
    street2?: StringNullableFilter<"ConstituentAddress"> | string | null
    street3?: StringNullableFilter<"ConstituentAddress"> | string | null
    city?: StringFilter<"ConstituentAddress"> | string
    state?: StringFilter<"ConstituentAddress"> | string
    zip?: StringFilter<"ConstituentAddress"> | string
    constituentId?: StringFilter<"ConstituentAddress"> | string
    Constituent?: XOR<ConstituentRelationFilter, ConstituentWhereInput>
  }

  export type ConstituentAddressOrderByWithRelationInput = {
    id?: SortOrder
    street1?: SortOrder
    street2?: SortOrderInput | SortOrder
    street3?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    constituentId?: SortOrder
    Constituent?: ConstituentOrderByWithRelationInput
  }

  export type ConstituentAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    constituentId?: string
    AND?: ConstituentAddressWhereInput | ConstituentAddressWhereInput[]
    OR?: ConstituentAddressWhereInput[]
    NOT?: ConstituentAddressWhereInput | ConstituentAddressWhereInput[]
    street1?: StringFilter<"ConstituentAddress"> | string
    street2?: StringNullableFilter<"ConstituentAddress"> | string | null
    street3?: StringNullableFilter<"ConstituentAddress"> | string | null
    city?: StringFilter<"ConstituentAddress"> | string
    state?: StringFilter<"ConstituentAddress"> | string
    zip?: StringFilter<"ConstituentAddress"> | string
    Constituent?: XOR<ConstituentRelationFilter, ConstituentWhereInput>
  }, "id" | "constituentId">

  export type ConstituentAddressOrderByWithAggregationInput = {
    id?: SortOrder
    street1?: SortOrder
    street2?: SortOrderInput | SortOrder
    street3?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    constituentId?: SortOrder
    _count?: ConstituentAddressCountOrderByAggregateInput
    _max?: ConstituentAddressMaxOrderByAggregateInput
    _min?: ConstituentAddressMinOrderByAggregateInput
  }

  export type ConstituentAddressScalarWhereWithAggregatesInput = {
    AND?: ConstituentAddressScalarWhereWithAggregatesInput | ConstituentAddressScalarWhereWithAggregatesInput[]
    OR?: ConstituentAddressScalarWhereWithAggregatesInput[]
    NOT?: ConstituentAddressScalarWhereWithAggregatesInput | ConstituentAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConstituentAddress"> | string
    street1?: StringWithAggregatesFilter<"ConstituentAddress"> | string
    street2?: StringNullableWithAggregatesFilter<"ConstituentAddress"> | string | null
    street3?: StringNullableWithAggregatesFilter<"ConstituentAddress"> | string | null
    city?: StringWithAggregatesFilter<"ConstituentAddress"> | string
    state?: StringWithAggregatesFilter<"ConstituentAddress"> | string
    zip?: StringWithAggregatesFilter<"ConstituentAddress"> | string
    constituentId?: StringWithAggregatesFilter<"ConstituentAddress"> | string
  }

  export type ConstituentCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    constituentAddress?: ConstituentAddressCreateNestedOneWithoutConstituentInput
  }

  export type ConstituentUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    constituentAddress?: ConstituentAddressUncheckedCreateNestedOneWithoutConstituentInput
  }

  export type ConstituentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    constituentAddress?: ConstituentAddressUpdateOneWithoutConstituentNestedInput
  }

  export type ConstituentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    constituentAddress?: ConstituentAddressUncheckedUpdateOneWithoutConstituentNestedInput
  }

  export type ConstituentCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConstituentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConstituentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConstituentAddressCreateInput = {
    id?: string
    street1: string
    street2?: string | null
    street3?: string | null
    city: string
    state: string
    zip: string
    Constituent: ConstituentCreateNestedOneWithoutConstituentAddressInput
  }

  export type ConstituentAddressUncheckedCreateInput = {
    id?: string
    street1: string
    street2?: string | null
    street3?: string | null
    city: string
    state: string
    zip: string
    constituentId: string
  }

  export type ConstituentAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    street3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    Constituent?: ConstituentUpdateOneRequiredWithoutConstituentAddressNestedInput
  }

  export type ConstituentAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    street3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    constituentId?: StringFieldUpdateOperationsInput | string
  }

  export type ConstituentAddressCreateManyInput = {
    id?: string
    street1: string
    street2?: string | null
    street3?: string | null
    city: string
    state: string
    zip: string
    constituentId: string
  }

  export type ConstituentAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    street3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
  }

  export type ConstituentAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    street3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    constituentId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConstituentAddressNullableRelationFilter = {
    is?: ConstituentAddressWhereInput | null
    isNot?: ConstituentAddressWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConstituentCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConstituentMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConstituentMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConstituentRelationFilter = {
    is?: ConstituentWhereInput
    isNot?: ConstituentWhereInput
  }

  export type ConstituentAddressCountOrderByAggregateInput = {
    id?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    street3?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    constituentId?: SortOrder
  }

  export type ConstituentAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    street3?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    constituentId?: SortOrder
  }

  export type ConstituentAddressMinOrderByAggregateInput = {
    id?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    street3?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    constituentId?: SortOrder
  }

  export type ConstituentAddressCreateNestedOneWithoutConstituentInput = {
    create?: XOR<ConstituentAddressCreateWithoutConstituentInput, ConstituentAddressUncheckedCreateWithoutConstituentInput>
    connectOrCreate?: ConstituentAddressCreateOrConnectWithoutConstituentInput
    connect?: ConstituentAddressWhereUniqueInput
  }

  export type ConstituentAddressUncheckedCreateNestedOneWithoutConstituentInput = {
    create?: XOR<ConstituentAddressCreateWithoutConstituentInput, ConstituentAddressUncheckedCreateWithoutConstituentInput>
    connectOrCreate?: ConstituentAddressCreateOrConnectWithoutConstituentInput
    connect?: ConstituentAddressWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConstituentAddressUpdateOneWithoutConstituentNestedInput = {
    create?: XOR<ConstituentAddressCreateWithoutConstituentInput, ConstituentAddressUncheckedCreateWithoutConstituentInput>
    connectOrCreate?: ConstituentAddressCreateOrConnectWithoutConstituentInput
    upsert?: ConstituentAddressUpsertWithoutConstituentInput
    disconnect?: ConstituentAddressWhereInput | boolean
    delete?: ConstituentAddressWhereInput | boolean
    connect?: ConstituentAddressWhereUniqueInput
    update?: XOR<XOR<ConstituentAddressUpdateToOneWithWhereWithoutConstituentInput, ConstituentAddressUpdateWithoutConstituentInput>, ConstituentAddressUncheckedUpdateWithoutConstituentInput>
  }

  export type ConstituentAddressUncheckedUpdateOneWithoutConstituentNestedInput = {
    create?: XOR<ConstituentAddressCreateWithoutConstituentInput, ConstituentAddressUncheckedCreateWithoutConstituentInput>
    connectOrCreate?: ConstituentAddressCreateOrConnectWithoutConstituentInput
    upsert?: ConstituentAddressUpsertWithoutConstituentInput
    disconnect?: ConstituentAddressWhereInput | boolean
    delete?: ConstituentAddressWhereInput | boolean
    connect?: ConstituentAddressWhereUniqueInput
    update?: XOR<XOR<ConstituentAddressUpdateToOneWithWhereWithoutConstituentInput, ConstituentAddressUpdateWithoutConstituentInput>, ConstituentAddressUncheckedUpdateWithoutConstituentInput>
  }

  export type ConstituentCreateNestedOneWithoutConstituentAddressInput = {
    create?: XOR<ConstituentCreateWithoutConstituentAddressInput, ConstituentUncheckedCreateWithoutConstituentAddressInput>
    connectOrCreate?: ConstituentCreateOrConnectWithoutConstituentAddressInput
    connect?: ConstituentWhereUniqueInput
  }

  export type ConstituentUpdateOneRequiredWithoutConstituentAddressNestedInput = {
    create?: XOR<ConstituentCreateWithoutConstituentAddressInput, ConstituentUncheckedCreateWithoutConstituentAddressInput>
    connectOrCreate?: ConstituentCreateOrConnectWithoutConstituentAddressInput
    upsert?: ConstituentUpsertWithoutConstituentAddressInput
    connect?: ConstituentWhereUniqueInput
    update?: XOR<XOR<ConstituentUpdateToOneWithWhereWithoutConstituentAddressInput, ConstituentUpdateWithoutConstituentAddressInput>, ConstituentUncheckedUpdateWithoutConstituentAddressInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConstituentAddressCreateWithoutConstituentInput = {
    id?: string
    street1: string
    street2?: string | null
    street3?: string | null
    city: string
    state: string
    zip: string
  }

  export type ConstituentAddressUncheckedCreateWithoutConstituentInput = {
    id?: string
    street1: string
    street2?: string | null
    street3?: string | null
    city: string
    state: string
    zip: string
  }

  export type ConstituentAddressCreateOrConnectWithoutConstituentInput = {
    where: ConstituentAddressWhereUniqueInput
    create: XOR<ConstituentAddressCreateWithoutConstituentInput, ConstituentAddressUncheckedCreateWithoutConstituentInput>
  }

  export type ConstituentAddressUpsertWithoutConstituentInput = {
    update: XOR<ConstituentAddressUpdateWithoutConstituentInput, ConstituentAddressUncheckedUpdateWithoutConstituentInput>
    create: XOR<ConstituentAddressCreateWithoutConstituentInput, ConstituentAddressUncheckedCreateWithoutConstituentInput>
    where?: ConstituentAddressWhereInput
  }

  export type ConstituentAddressUpdateToOneWithWhereWithoutConstituentInput = {
    where?: ConstituentAddressWhereInput
    data: XOR<ConstituentAddressUpdateWithoutConstituentInput, ConstituentAddressUncheckedUpdateWithoutConstituentInput>
  }

  export type ConstituentAddressUpdateWithoutConstituentInput = {
    id?: StringFieldUpdateOperationsInput | string
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    street3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
  }

  export type ConstituentAddressUncheckedUpdateWithoutConstituentInput = {
    id?: StringFieldUpdateOperationsInput | string
    street1?: StringFieldUpdateOperationsInput | string
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    street3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
  }

  export type ConstituentCreateWithoutConstituentAddressInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConstituentUncheckedCreateWithoutConstituentAddressInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConstituentCreateOrConnectWithoutConstituentAddressInput = {
    where: ConstituentWhereUniqueInput
    create: XOR<ConstituentCreateWithoutConstituentAddressInput, ConstituentUncheckedCreateWithoutConstituentAddressInput>
  }

  export type ConstituentUpsertWithoutConstituentAddressInput = {
    update: XOR<ConstituentUpdateWithoutConstituentAddressInput, ConstituentUncheckedUpdateWithoutConstituentAddressInput>
    create: XOR<ConstituentCreateWithoutConstituentAddressInput, ConstituentUncheckedCreateWithoutConstituentAddressInput>
    where?: ConstituentWhereInput
  }

  export type ConstituentUpdateToOneWithWhereWithoutConstituentAddressInput = {
    where?: ConstituentWhereInput
    data: XOR<ConstituentUpdateWithoutConstituentAddressInput, ConstituentUncheckedUpdateWithoutConstituentAddressInput>
  }

  export type ConstituentUpdateWithoutConstituentAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConstituentUncheckedUpdateWithoutConstituentAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ConstituentDefaultArgs instead
     */
    export type ConstituentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConstituentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConstituentAddressDefaultArgs instead
     */
    export type ConstituentAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConstituentAddressDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}