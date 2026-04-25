
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Services
 * 
 */
export type Services = $Result.DefaultSelection<Prisma.$ServicesPayload>
/**
 * Model ClientRequest
 * 
 */
export type ClientRequest = $Result.DefaultSelection<Prisma.$ClientRequestPayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model Negotiate
 * 
 */
export type Negotiate = $Result.DefaultSelection<Prisma.$NegotiatePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserTypeEnum: {
  INDIVIDUAL: 'INDIVIDUAL',
  CORPORATE: 'CORPORATE'
};

export type UserTypeEnum = (typeof UserTypeEnum)[keyof typeof UserTypeEnum]


export const Status: {
  Active: 'Active',
  InActive: 'InActive'
};

export type Status = (typeof Status)[keyof typeof Status]


export const serviceStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type serviceStatus = (typeof serviceStatus)[keyof typeof serviceStatus]


export const ClientRequestStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  ALL: 'ALL'
};

export type ClientRequestStatus = (typeof ClientRequestStatus)[keyof typeof ClientRequestStatus]


export const ProposalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DECLINED: 'DECLINED',
  NEGOTIATING: 'NEGOTIATING',
  ACCEPTED: 'ACCEPTED'
};

export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus]


export const ProjectStatus: {
  PLANNING: 'PLANNING',
  IN_PROGRESS: 'IN_PROGRESS',
  ON_HOLD: 'ON_HOLD',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]

}

export type UserTypeEnum = $Enums.UserTypeEnum

export const UserTypeEnum: typeof $Enums.UserTypeEnum

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type serviceStatus = $Enums.serviceStatus

export const serviceStatus: typeof $Enums.serviceStatus

export type ClientRequestStatus = $Enums.ClientRequestStatus

export const ClientRequestStatus: typeof $Enums.ClientRequestStatus

export type ProposalStatus = $Enums.ProposalStatus

export const ProposalStatus: typeof $Enums.ProposalStatus

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **Services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.ServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientRequest`: Exposes CRUD operations for the **ClientRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientRequests
    * const clientRequests = await prisma.clientRequest.findMany()
    * ```
    */
  get clientRequest(): Prisma.ClientRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.negotiate`: Exposes CRUD operations for the **Negotiate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Negotiates
    * const negotiates = await prisma.negotiate.findMany()
    * ```
    */
  get negotiate(): Prisma.NegotiateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Role: 'Role',
    Services: 'Services',
    ClientRequest: 'ClientRequest',
    Proposal: 'Proposal',
    Negotiate: 'Negotiate',
    Project: 'Project'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "services" | "clientRequest" | "proposal" | "negotiate" | "project"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Services: {
        payload: Prisma.$ServicesPayload<ExtArgs>
        fields: Prisma.ServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findFirst: {
            args: Prisma.ServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findMany: {
            args: Prisma.ServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          create: {
            args: Prisma.ServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          createMany: {
            args: Prisma.ServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          delete: {
            args: Prisma.ServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          update: {
            args: Prisma.ServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          deleteMany: {
            args: Prisma.ServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          upsert: {
            args: Prisma.ServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.ServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      ClientRequest: {
        payload: Prisma.$ClientRequestPayload<ExtArgs>
        fields: Prisma.ClientRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          findFirst: {
            args: Prisma.ClientRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          findMany: {
            args: Prisma.ClientRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>[]
          }
          create: {
            args: Prisma.ClientRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          createMany: {
            args: Prisma.ClientRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>[]
          }
          delete: {
            args: Prisma.ClientRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          update: {
            args: Prisma.ClientRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          deleteMany: {
            args: Prisma.ClientRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>[]
          }
          upsert: {
            args: Prisma.ClientRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          aggregate: {
            args: Prisma.ClientRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientRequest>
          }
          groupBy: {
            args: Prisma.ClientRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ClientRequestCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      Negotiate: {
        payload: Prisma.$NegotiatePayload<ExtArgs>
        fields: Prisma.NegotiateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NegotiateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NegotiateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload>
          }
          findFirst: {
            args: Prisma.NegotiateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NegotiateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload>
          }
          findMany: {
            args: Prisma.NegotiateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload>[]
          }
          create: {
            args: Prisma.NegotiateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload>
          }
          createMany: {
            args: Prisma.NegotiateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NegotiateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload>[]
          }
          delete: {
            args: Prisma.NegotiateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload>
          }
          update: {
            args: Prisma.NegotiateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload>
          }
          deleteMany: {
            args: Prisma.NegotiateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NegotiateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NegotiateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload>[]
          }
          upsert: {
            args: Prisma.NegotiateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegotiatePayload>
          }
          aggregate: {
            args: Prisma.NegotiateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNegotiate>
          }
          groupBy: {
            args: Prisma.NegotiateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NegotiateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NegotiateCountArgs<ExtArgs>
            result: $Utils.Optional<NegotiateCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    services?: ServicesOmit
    clientRequest?: ClientRequestOmit
    proposal?: ProposalOmit
    negotiate?: NegotiateOmit
    project?: ProjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    service: number
    client: number
    Proposal: number
    Negotiation: number
    project: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | UserCountOutputTypeCountServiceArgs
    client?: boolean | UserCountOutputTypeCountClientArgs
    Proposal?: boolean | UserCountOutputTypeCountProposalArgs
    Negotiation?: boolean | UserCountOutputTypeCountNegotiationArgs
    project?: boolean | UserCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNegotiationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NegotiateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ServicesCountOutputType
   */

  export type ServicesCountOutputType = {
    Negotiation: number
    clientRequest: number
    Proposal: number
    Project: number
  }

  export type ServicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Negotiation?: boolean | ServicesCountOutputTypeCountNegotiationArgs
    clientRequest?: boolean | ServicesCountOutputTypeCountClientRequestArgs
    Proposal?: boolean | ServicesCountOutputTypeCountProposalArgs
    Project?: boolean | ServicesCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesCountOutputType
     */
    select?: ServicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountNegotiationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NegotiateWhereInput
  }

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountClientRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientRequestWhereInput
  }

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ClientRequestCountOutputType
   */

  export type ClientRequestCountOutputType = {
    proposals: number
  }

  export type ClientRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposals?: boolean | ClientRequestCountOutputTypeCountProposalsArgs
  }

  // Custom InputTypes
  /**
   * ClientRequestCountOutputType without action
   */
  export type ClientRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequestCountOutputType
     */
    select?: ClientRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientRequestCountOutputType without action
   */
  export type ClientRequestCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }


  /**
   * Count Type ProposalCountOutputType
   */

  export type ProposalCountOutputType = {
    Negotiate: number
    Project: number
  }

  export type ProposalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Negotiate?: boolean | ProposalCountOutputTypeCountNegotiateArgs
    Project?: boolean | ProposalCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * ProposalCountOutputType without action
   */
  export type ProposalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalCountOutputType
     */
    select?: ProposalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProposalCountOutputType without action
   */
  export type ProposalCountOutputTypeCountNegotiateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NegotiateWhereInput
  }

  /**
   * ProposalCountOutputType without action
   */
  export type ProposalCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password: string | null
    country: string | null
    companyName: string | null
    contactPerson: string | null
    fullName: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    companyWebsite: string | null
    industry: string | null
    type: $Enums.UserTypeEnum | null
    roleId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password: string | null
    country: string | null
    companyName: string | null
    contactPerson: string | null
    fullName: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    companyWebsite: string | null
    industry: string | null
    type: $Enums.UserTypeEnum | null
    roleId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    password: number
    country: number
    companyName: number
    contactPerson: number
    fullName: number
    firstName: number
    middleName: number
    lastName: number
    companyWebsite: number
    industry: number
    type: number
    roleId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    country?: true
    companyName?: true
    contactPerson?: true
    fullName?: true
    firstName?: true
    middleName?: true
    lastName?: true
    companyWebsite?: true
    industry?: true
    type?: true
    roleId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    country?: true
    companyName?: true
    contactPerson?: true
    fullName?: true
    firstName?: true
    middleName?: true
    lastName?: true
    companyWebsite?: true
    industry?: true
    type?: true
    roleId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    country?: true
    companyName?: true
    contactPerson?: true
    fullName?: true
    firstName?: true
    middleName?: true
    lastName?: true
    companyWebsite?: true
    industry?: true
    type?: true
    roleId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    phone: string | null
    password: string | null
    country: string | null
    companyName: string | null
    contactPerson: string | null
    fullName: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    companyWebsite: string | null
    industry: string | null
    type: $Enums.UserTypeEnum | null
    roleId: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    country?: boolean
    companyName?: boolean
    contactPerson?: boolean
    fullName?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    companyWebsite?: boolean
    industry?: boolean
    type?: boolean
    roleId?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    service?: boolean | User$serviceArgs<ExtArgs>
    client?: boolean | User$clientArgs<ExtArgs>
    Proposal?: boolean | User$ProposalArgs<ExtArgs>
    Negotiation?: boolean | User$NegotiationArgs<ExtArgs>
    project?: boolean | User$projectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    country?: boolean
    companyName?: boolean
    contactPerson?: boolean
    fullName?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    companyWebsite?: boolean
    industry?: boolean
    type?: boolean
    roleId?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    country?: boolean
    companyName?: boolean
    contactPerson?: boolean
    fullName?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    companyWebsite?: boolean
    industry?: boolean
    type?: boolean
    roleId?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    country?: boolean
    companyName?: boolean
    contactPerson?: boolean
    fullName?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    companyWebsite?: boolean
    industry?: boolean
    type?: boolean
    roleId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "password" | "country" | "companyName" | "contactPerson" | "fullName" | "firstName" | "middleName" | "lastName" | "companyWebsite" | "industry" | "type" | "roleId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    service?: boolean | User$serviceArgs<ExtArgs>
    client?: boolean | User$clientArgs<ExtArgs>
    Proposal?: boolean | User$ProposalArgs<ExtArgs>
    Negotiation?: boolean | User$NegotiationArgs<ExtArgs>
    project?: boolean | User$projectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      service: Prisma.$ServicesPayload<ExtArgs>[]
      client: Prisma.$ClientRequestPayload<ExtArgs>[]
      Proposal: Prisma.$ProposalPayload<ExtArgs>[]
      Negotiation: Prisma.$NegotiatePayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phone: string | null
      password: string | null
      country: string | null
      companyName: string | null
      contactPerson: string | null
      fullName: string | null
      firstName: string | null
      middleName: string | null
      lastName: string | null
      companyWebsite: string | null
      industry: string | null
      type: $Enums.UserTypeEnum | null
      roleId: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends User$serviceArgs<ExtArgs> = {}>(args?: Subset<T, User$serviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends User$clientArgs<ExtArgs> = {}>(args?: Subset<T, User$clientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Proposal<T extends User$ProposalArgs<ExtArgs> = {}>(args?: Subset<T, User$ProposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Negotiation<T extends User$NegotiationArgs<ExtArgs> = {}>(args?: Subset<T, User$NegotiationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends User$projectArgs<ExtArgs> = {}>(args?: Subset<T, User$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly contactPerson: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly companyWebsite: FieldRef<"User", 'String'>
    readonly industry: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserTypeEnum'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.service
   */
  export type User$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    cursor?: ServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * User.client
   */
  export type User$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    where?: ClientRequestWhereInput
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    cursor?: ClientRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * User.Proposal
   */
  export type User$ProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * User.Negotiation
   */
  export type User$NegotiationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    where?: NegotiateWhereInput
    orderBy?: NegotiateOrderByWithRelationInput | NegotiateOrderByWithRelationInput[]
    cursor?: NegotiateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NegotiateScalarFieldEnum | NegotiateScalarFieldEnum[]
  }

  /**
   * User.project
   */
  export type User$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    status: number
    createdAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    status: $Enums.Status
    createdAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "createdAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.Status
      createdAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly status: FieldRef<"Role", 'Status'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    ServiceName: string | null
    Description: string | null
    status: $Enums.serviceStatus | null
    createdAt: Date | null
    DateCreated: Date | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    ServiceName: string | null
    Description: string | null
    status: $Enums.serviceStatus | null
    createdAt: Date | null
    DateCreated: Date | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    clientId: number
    ServiceName: number
    Description: number
    status: number
    createdAt: number
    DateCreated: number
    _all: number
  }


  export type ServicesMinAggregateInputType = {
    id?: true
    clientId?: true
    ServiceName?: true
    Description?: true
    status?: true
    createdAt?: true
    DateCreated?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    clientId?: true
    ServiceName?: true
    Description?: true
    status?: true
    createdAt?: true
    DateCreated?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    clientId?: true
    ServiceName?: true
    Description?: true
    status?: true
    createdAt?: true
    DateCreated?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to aggregate.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type ServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithAggregationInput | ServicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: ServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: string
    clientId: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt: Date
    DateCreated: Date
    _count: ServicesCountAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends ServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type ServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    ServiceName?: boolean
    Description?: boolean
    status?: boolean
    createdAt?: boolean
    DateCreated?: boolean
    client?: boolean | Services$clientArgs<ExtArgs>
    Negotiation?: boolean | Services$NegotiationArgs<ExtArgs>
    clientRequest?: boolean | Services$clientRequestArgs<ExtArgs>
    Proposal?: boolean | Services$ProposalArgs<ExtArgs>
    Project?: boolean | Services$ProjectArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    ServiceName?: boolean
    Description?: boolean
    status?: boolean
    createdAt?: boolean
    DateCreated?: boolean
    client?: boolean | Services$clientArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    ServiceName?: boolean
    Description?: boolean
    status?: boolean
    createdAt?: boolean
    DateCreated?: boolean
    client?: boolean | Services$clientArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectScalar = {
    id?: boolean
    clientId?: boolean
    ServiceName?: boolean
    Description?: boolean
    status?: boolean
    createdAt?: boolean
    DateCreated?: boolean
  }

  export type ServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "ServiceName" | "Description" | "status" | "createdAt" | "DateCreated", ExtArgs["result"]["services"]>
  export type ServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Services$clientArgs<ExtArgs>
    Negotiation?: boolean | Services$NegotiationArgs<ExtArgs>
    clientRequest?: boolean | Services$clientRequestArgs<ExtArgs>
    Proposal?: boolean | Services$ProposalArgs<ExtArgs>
    Project?: boolean | Services$ProjectArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Services$clientArgs<ExtArgs>
  }
  export type ServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Services$clientArgs<ExtArgs>
  }

  export type $ServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Services"
    objects: {
      client: Prisma.$UserPayload<ExtArgs> | null
      Negotiation: Prisma.$NegotiatePayload<ExtArgs>[]
      clientRequest: Prisma.$ClientRequestPayload<ExtArgs>[]
      Proposal: Prisma.$ProposalPayload<ExtArgs>[]
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string | null
      ServiceName: string
      Description: string
      status: $Enums.serviceStatus
      createdAt: Date
      DateCreated: Date
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type ServicesGetPayload<S extends boolean | null | undefined | ServicesDefaultArgs> = $Result.GetResult<Prisma.$ServicesPayload, S>

  type ServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface ServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Services'], meta: { name: 'Services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {ServicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicesFindUniqueArgs>(args: SelectSubset<T, ServicesFindUniqueArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicesFindFirstArgs>(args?: SelectSubset<T, ServicesFindFirstArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicesFindManyArgs>(args?: SelectSubset<T, ServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {ServicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends ServicesCreateArgs>(args: SelectSubset<T, ServicesCreateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicesCreateManyArgs>(args?: SelectSubset<T, ServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Services.
     * @param {ServicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends ServicesDeleteArgs>(args: SelectSubset<T, ServicesDeleteArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {ServicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicesUpdateArgs>(args: SelectSubset<T, ServicesUpdateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicesDeleteManyArgs>(args?: SelectSubset<T, ServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicesUpdateManyArgs>(args: SelectSubset<T, ServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Services.
     * @param {ServicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends ServicesUpsertArgs>(args: SelectSubset<T, ServicesUpsertArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServicesCountArgs>(
      args?: Subset<T, ServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesGroupByArgs} args - Group by arguments.
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
      T extends ServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicesGroupByArgs['orderBy'] }
        : { orderBy?: ServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Services model
   */
  readonly fields: ServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Services$clientArgs<ExtArgs> = {}>(args?: Subset<T, Services$clientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Negotiation<T extends Services$NegotiationArgs<ExtArgs> = {}>(args?: Subset<T, Services$NegotiationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientRequest<T extends Services$clientRequestArgs<ExtArgs> = {}>(args?: Subset<T, Services$clientRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Proposal<T extends Services$ProposalArgs<ExtArgs> = {}>(args?: Subset<T, Services$ProposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Project<T extends Services$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, Services$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Services model
   */
  interface ServicesFieldRefs {
    readonly id: FieldRef<"Services", 'String'>
    readonly clientId: FieldRef<"Services", 'String'>
    readonly ServiceName: FieldRef<"Services", 'String'>
    readonly Description: FieldRef<"Services", 'String'>
    readonly status: FieldRef<"Services", 'serviceStatus'>
    readonly createdAt: FieldRef<"Services", 'DateTime'>
    readonly DateCreated: FieldRef<"Services", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Services findUnique
   */
  export type ServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findUniqueOrThrow
   */
  export type ServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findFirst
   */
  export type ServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findFirstOrThrow
   */
  export type ServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findMany
   */
  export type ServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services create
   */
  export type ServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Services.
     */
    data: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
  }

  /**
   * Services createMany
   */
  export type ServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Services createManyAndReturn
   */
  export type ServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Services update
   */
  export type ServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Services.
     */
    data: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
    /**
     * Choose, which Services to update.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services updateMany
   */
  export type ServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Services updateManyAndReturn
   */
  export type ServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Services upsert
   */
  export type ServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Services to update in case it exists.
     */
    where: ServicesWhereUniqueInput
    /**
     * In case the Services found by the `where` argument doesn't exist, create a new Services with this data.
     */
    create: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
    /**
     * In case the Services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
  }

  /**
   * Services delete
   */
  export type ServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter which Services to delete.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services deleteMany
   */
  export type ServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Services.client
   */
  export type Services$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Services.Negotiation
   */
  export type Services$NegotiationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    where?: NegotiateWhereInput
    orderBy?: NegotiateOrderByWithRelationInput | NegotiateOrderByWithRelationInput[]
    cursor?: NegotiateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NegotiateScalarFieldEnum | NegotiateScalarFieldEnum[]
  }

  /**
   * Services.clientRequest
   */
  export type Services$clientRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    where?: ClientRequestWhereInput
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    cursor?: ClientRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * Services.Proposal
   */
  export type Services$ProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Services.Project
   */
  export type Services$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Services without action
   */
  export type ServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
  }


  /**
   * Model ClientRequest
   */

  export type AggregateClientRequest = {
    _count: ClientRequestCountAggregateOutputType | null
    _min: ClientRequestMinAggregateOutputType | null
    _max: ClientRequestMaxAggregateOutputType | null
  }

  export type ClientRequestMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    clientId: string | null
    request_status: $Enums.ClientRequestStatus | null
    createdAt: Date | null
  }

  export type ClientRequestMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    clientId: string | null
    request_status: $Enums.ClientRequestStatus | null
    createdAt: Date | null
  }

  export type ClientRequestCountAggregateOutputType = {
    id: number
    serviceId: number
    clientId: number
    request_status: number
    createdAt: number
    _all: number
  }


  export type ClientRequestMinAggregateInputType = {
    id?: true
    serviceId?: true
    clientId?: true
    request_status?: true
    createdAt?: true
  }

  export type ClientRequestMaxAggregateInputType = {
    id?: true
    serviceId?: true
    clientId?: true
    request_status?: true
    createdAt?: true
  }

  export type ClientRequestCountAggregateInputType = {
    id?: true
    serviceId?: true
    clientId?: true
    request_status?: true
    createdAt?: true
    _all?: true
  }

  export type ClientRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientRequest to aggregate.
     */
    where?: ClientRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientRequests to fetch.
     */
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientRequests
    **/
    _count?: true | ClientRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientRequestMaxAggregateInputType
  }

  export type GetClientRequestAggregateType<T extends ClientRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateClientRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientRequest[P]>
      : GetScalarType<T[P], AggregateClientRequest[P]>
  }




  export type ClientRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientRequestWhereInput
    orderBy?: ClientRequestOrderByWithAggregationInput | ClientRequestOrderByWithAggregationInput[]
    by: ClientRequestScalarFieldEnum[] | ClientRequestScalarFieldEnum
    having?: ClientRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientRequestCountAggregateInputType | true
    _min?: ClientRequestMinAggregateInputType
    _max?: ClientRequestMaxAggregateInputType
  }

  export type ClientRequestGroupByOutputType = {
    id: string
    serviceId: string
    clientId: string
    request_status: $Enums.ClientRequestStatus
    createdAt: Date
    _count: ClientRequestCountAggregateOutputType | null
    _min: ClientRequestMinAggregateOutputType | null
    _max: ClientRequestMaxAggregateOutputType | null
  }

  type GetClientRequestGroupByPayload<T extends ClientRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ClientRequestGroupByOutputType[P]>
        }
      >
    >


  export type ClientRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    clientId?: boolean
    request_status?: boolean
    createdAt?: boolean
    client?: boolean | ClientRequest$clientArgs<ExtArgs>
    service?: boolean | ClientRequest$serviceArgs<ExtArgs>
    proposals?: boolean | ClientRequest$proposalsArgs<ExtArgs>
    _count?: boolean | ClientRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientRequest"]>

  export type ClientRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    clientId?: boolean
    request_status?: boolean
    createdAt?: boolean
    client?: boolean | ClientRequest$clientArgs<ExtArgs>
    service?: boolean | ClientRequest$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["clientRequest"]>

  export type ClientRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    clientId?: boolean
    request_status?: boolean
    createdAt?: boolean
    client?: boolean | ClientRequest$clientArgs<ExtArgs>
    service?: boolean | ClientRequest$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["clientRequest"]>

  export type ClientRequestSelectScalar = {
    id?: boolean
    serviceId?: boolean
    clientId?: boolean
    request_status?: boolean
    createdAt?: boolean
  }

  export type ClientRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "clientId" | "request_status" | "createdAt", ExtArgs["result"]["clientRequest"]>
  export type ClientRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientRequest$clientArgs<ExtArgs>
    service?: boolean | ClientRequest$serviceArgs<ExtArgs>
    proposals?: boolean | ClientRequest$proposalsArgs<ExtArgs>
    _count?: boolean | ClientRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientRequest$clientArgs<ExtArgs>
    service?: boolean | ClientRequest$serviceArgs<ExtArgs>
  }
  export type ClientRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientRequest$clientArgs<ExtArgs>
    service?: boolean | ClientRequest$serviceArgs<ExtArgs>
  }

  export type $ClientRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientRequest"
    objects: {
      client: Prisma.$UserPayload<ExtArgs> | null
      service: Prisma.$ServicesPayload<ExtArgs> | null
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      clientId: string
      request_status: $Enums.ClientRequestStatus
      createdAt: Date
    }, ExtArgs["result"]["clientRequest"]>
    composites: {}
  }

  type ClientRequestGetPayload<S extends boolean | null | undefined | ClientRequestDefaultArgs> = $Result.GetResult<Prisma.$ClientRequestPayload, S>

  type ClientRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientRequestCountAggregateInputType | true
    }

  export interface ClientRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientRequest'], meta: { name: 'ClientRequest' } }
    /**
     * Find zero or one ClientRequest that matches the filter.
     * @param {ClientRequestFindUniqueArgs} args - Arguments to find a ClientRequest
     * @example
     * // Get one ClientRequest
     * const clientRequest = await prisma.clientRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientRequestFindUniqueArgs>(args: SelectSubset<T, ClientRequestFindUniqueArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientRequestFindUniqueOrThrowArgs} args - Arguments to find a ClientRequest
     * @example
     * // Get one ClientRequest
     * const clientRequest = await prisma.clientRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestFindFirstArgs} args - Arguments to find a ClientRequest
     * @example
     * // Get one ClientRequest
     * const clientRequest = await prisma.clientRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientRequestFindFirstArgs>(args?: SelectSubset<T, ClientRequestFindFirstArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestFindFirstOrThrowArgs} args - Arguments to find a ClientRequest
     * @example
     * // Get one ClientRequest
     * const clientRequest = await prisma.clientRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientRequests
     * const clientRequests = await prisma.clientRequest.findMany()
     * 
     * // Get first 10 ClientRequests
     * const clientRequests = await prisma.clientRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientRequestWithIdOnly = await prisma.clientRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientRequestFindManyArgs>(args?: SelectSubset<T, ClientRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientRequest.
     * @param {ClientRequestCreateArgs} args - Arguments to create a ClientRequest.
     * @example
     * // Create one ClientRequest
     * const ClientRequest = await prisma.clientRequest.create({
     *   data: {
     *     // ... data to create a ClientRequest
     *   }
     * })
     * 
     */
    create<T extends ClientRequestCreateArgs>(args: SelectSubset<T, ClientRequestCreateArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientRequests.
     * @param {ClientRequestCreateManyArgs} args - Arguments to create many ClientRequests.
     * @example
     * // Create many ClientRequests
     * const clientRequest = await prisma.clientRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientRequestCreateManyArgs>(args?: SelectSubset<T, ClientRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientRequests and returns the data saved in the database.
     * @param {ClientRequestCreateManyAndReturnArgs} args - Arguments to create many ClientRequests.
     * @example
     * // Create many ClientRequests
     * const clientRequest = await prisma.clientRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientRequests and only return the `id`
     * const clientRequestWithIdOnly = await prisma.clientRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientRequest.
     * @param {ClientRequestDeleteArgs} args - Arguments to delete one ClientRequest.
     * @example
     * // Delete one ClientRequest
     * const ClientRequest = await prisma.clientRequest.delete({
     *   where: {
     *     // ... filter to delete one ClientRequest
     *   }
     * })
     * 
     */
    delete<T extends ClientRequestDeleteArgs>(args: SelectSubset<T, ClientRequestDeleteArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientRequest.
     * @param {ClientRequestUpdateArgs} args - Arguments to update one ClientRequest.
     * @example
     * // Update one ClientRequest
     * const clientRequest = await prisma.clientRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientRequestUpdateArgs>(args: SelectSubset<T, ClientRequestUpdateArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientRequests.
     * @param {ClientRequestDeleteManyArgs} args - Arguments to filter ClientRequests to delete.
     * @example
     * // Delete a few ClientRequests
     * const { count } = await prisma.clientRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientRequestDeleteManyArgs>(args?: SelectSubset<T, ClientRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientRequests
     * const clientRequest = await prisma.clientRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientRequestUpdateManyArgs>(args: SelectSubset<T, ClientRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientRequests and returns the data updated in the database.
     * @param {ClientRequestUpdateManyAndReturnArgs} args - Arguments to update many ClientRequests.
     * @example
     * // Update many ClientRequests
     * const clientRequest = await prisma.clientRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientRequests and only return the `id`
     * const clientRequestWithIdOnly = await prisma.clientRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientRequest.
     * @param {ClientRequestUpsertArgs} args - Arguments to update or create a ClientRequest.
     * @example
     * // Update or create a ClientRequest
     * const clientRequest = await prisma.clientRequest.upsert({
     *   create: {
     *     // ... data to create a ClientRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientRequest we want to update
     *   }
     * })
     */
    upsert<T extends ClientRequestUpsertArgs>(args: SelectSubset<T, ClientRequestUpsertArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestCountArgs} args - Arguments to filter ClientRequests to count.
     * @example
     * // Count the number of ClientRequests
     * const count = await prisma.clientRequest.count({
     *   where: {
     *     // ... the filter for the ClientRequests we want to count
     *   }
     * })
    **/
    count<T extends ClientRequestCountArgs>(
      args?: Subset<T, ClientRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientRequestAggregateArgs>(args: Subset<T, ClientRequestAggregateArgs>): Prisma.PrismaPromise<GetClientRequestAggregateType<T>>

    /**
     * Group by ClientRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestGroupByArgs} args - Group by arguments.
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
      T extends ClientRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientRequestGroupByArgs['orderBy'] }
        : { orderBy?: ClientRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientRequest model
   */
  readonly fields: ClientRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientRequest$clientArgs<ExtArgs> = {}>(args?: Subset<T, ClientRequest$clientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service<T extends ClientRequest$serviceArgs<ExtArgs> = {}>(args?: Subset<T, ClientRequest$serviceArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proposals<T extends ClientRequest$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, ClientRequest$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClientRequest model
   */
  interface ClientRequestFieldRefs {
    readonly id: FieldRef<"ClientRequest", 'String'>
    readonly serviceId: FieldRef<"ClientRequest", 'String'>
    readonly clientId: FieldRef<"ClientRequest", 'String'>
    readonly request_status: FieldRef<"ClientRequest", 'ClientRequestStatus'>
    readonly createdAt: FieldRef<"ClientRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientRequest findUnique
   */
  export type ClientRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequest to fetch.
     */
    where: ClientRequestWhereUniqueInput
  }

  /**
   * ClientRequest findUniqueOrThrow
   */
  export type ClientRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequest to fetch.
     */
    where: ClientRequestWhereUniqueInput
  }

  /**
   * ClientRequest findFirst
   */
  export type ClientRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequest to fetch.
     */
    where?: ClientRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientRequests to fetch.
     */
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientRequests.
     */
    cursor?: ClientRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientRequests.
     */
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * ClientRequest findFirstOrThrow
   */
  export type ClientRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequest to fetch.
     */
    where?: ClientRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientRequests to fetch.
     */
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientRequests.
     */
    cursor?: ClientRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientRequests.
     */
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * ClientRequest findMany
   */
  export type ClientRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequests to fetch.
     */
    where?: ClientRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientRequests to fetch.
     */
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientRequests.
     */
    cursor?: ClientRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientRequests.
     */
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * ClientRequest create
   */
  export type ClientRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientRequest.
     */
    data: XOR<ClientRequestCreateInput, ClientRequestUncheckedCreateInput>
  }

  /**
   * ClientRequest createMany
   */
  export type ClientRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientRequests.
     */
    data: ClientRequestCreateManyInput | ClientRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientRequest createManyAndReturn
   */
  export type ClientRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ClientRequests.
     */
    data: ClientRequestCreateManyInput | ClientRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientRequest update
   */
  export type ClientRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientRequest.
     */
    data: XOR<ClientRequestUpdateInput, ClientRequestUncheckedUpdateInput>
    /**
     * Choose, which ClientRequest to update.
     */
    where: ClientRequestWhereUniqueInput
  }

  /**
   * ClientRequest updateMany
   */
  export type ClientRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientRequests.
     */
    data: XOR<ClientRequestUpdateManyMutationInput, ClientRequestUncheckedUpdateManyInput>
    /**
     * Filter which ClientRequests to update
     */
    where?: ClientRequestWhereInput
    /**
     * Limit how many ClientRequests to update.
     */
    limit?: number
  }

  /**
   * ClientRequest updateManyAndReturn
   */
  export type ClientRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * The data used to update ClientRequests.
     */
    data: XOR<ClientRequestUpdateManyMutationInput, ClientRequestUncheckedUpdateManyInput>
    /**
     * Filter which ClientRequests to update
     */
    where?: ClientRequestWhereInput
    /**
     * Limit how many ClientRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientRequest upsert
   */
  export type ClientRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientRequest to update in case it exists.
     */
    where: ClientRequestWhereUniqueInput
    /**
     * In case the ClientRequest found by the `where` argument doesn't exist, create a new ClientRequest with this data.
     */
    create: XOR<ClientRequestCreateInput, ClientRequestUncheckedCreateInput>
    /**
     * In case the ClientRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientRequestUpdateInput, ClientRequestUncheckedUpdateInput>
  }

  /**
   * ClientRequest delete
   */
  export type ClientRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter which ClientRequest to delete.
     */
    where: ClientRequestWhereUniqueInput
  }

  /**
   * ClientRequest deleteMany
   */
  export type ClientRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientRequests to delete
     */
    where?: ClientRequestWhereInput
    /**
     * Limit how many ClientRequests to delete.
     */
    limit?: number
  }

  /**
   * ClientRequest.client
   */
  export type ClientRequest$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ClientRequest.service
   */
  export type ClientRequest$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    where?: ServicesWhereInput
  }

  /**
   * ClientRequest.proposals
   */
  export type ClientRequest$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * ClientRequest without action
   */
  export type ClientRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    pricing: number | null
  }

  export type ProposalSumAggregateOutputType = {
    pricing: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id: string | null
    client_request_id: string | null
    service_id: string | null
    client_id: string | null
    contract_id: string | null
    scope: string | null
    deliverables: string | null
    timeline: string | null
    pricing: number | null
    status: $Enums.ProposalStatus | null
    termsAndConditions: string | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: string | null
    client_request_id: string | null
    service_id: string | null
    client_id: string | null
    contract_id: string | null
    scope: string | null
    deliverables: string | null
    timeline: string | null
    pricing: number | null
    status: $Enums.ProposalStatus | null
    termsAndConditions: string | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    client_request_id: number
    service_id: number
    client_id: number
    contract_id: number
    scope: number
    deliverables: number
    timeline: number
    pricing: number
    status: number
    termsAndConditions: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    pricing?: true
  }

  export type ProposalSumAggregateInputType = {
    pricing?: true
  }

  export type ProposalMinAggregateInputType = {
    id?: true
    client_request_id?: true
    service_id?: true
    client_id?: true
    contract_id?: true
    scope?: true
    deliverables?: true
    timeline?: true
    pricing?: true
    status?: true
    termsAndConditions?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    client_request_id?: true
    service_id?: true
    client_id?: true
    contract_id?: true
    scope?: true
    deliverables?: true
    timeline?: true
    pricing?: true
    status?: true
    termsAndConditions?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    client_request_id?: true
    service_id?: true
    client_id?: true
    contract_id?: true
    scope?: true
    deliverables?: true
    timeline?: true
    pricing?: true
    status?: true
    termsAndConditions?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: string
    client_request_id: string
    service_id: string
    client_id: string
    contract_id: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_request_id?: boolean
    service_id?: boolean
    client_id?: boolean
    contract_id?: boolean
    scope?: boolean
    deliverables?: boolean
    timeline?: boolean
    pricing?: boolean
    status?: boolean
    termsAndConditions?: boolean
    clientRequest?: boolean | ClientRequestDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
    Negotiate?: boolean | Proposal$NegotiateArgs<ExtArgs>
    Project?: boolean | Proposal$ProjectArgs<ExtArgs>
    _count?: boolean | ProposalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_request_id?: boolean
    service_id?: boolean
    client_id?: boolean
    contract_id?: boolean
    scope?: boolean
    deliverables?: boolean
    timeline?: boolean
    pricing?: boolean
    status?: boolean
    termsAndConditions?: boolean
    clientRequest?: boolean | ClientRequestDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_request_id?: boolean
    service_id?: boolean
    client_id?: boolean
    contract_id?: boolean
    scope?: boolean
    deliverables?: boolean
    timeline?: boolean
    pricing?: boolean
    status?: boolean
    termsAndConditions?: boolean
    clientRequest?: boolean | ClientRequestDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectScalar = {
    id?: boolean
    client_request_id?: boolean
    service_id?: boolean
    client_id?: boolean
    contract_id?: boolean
    scope?: boolean
    deliverables?: boolean
    timeline?: boolean
    pricing?: boolean
    status?: boolean
    termsAndConditions?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_request_id" | "service_id" | "client_id" | "contract_id" | "scope" | "deliverables" | "timeline" | "pricing" | "status" | "termsAndConditions", ExtArgs["result"]["proposal"]>
  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientRequest?: boolean | ClientRequestDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
    Negotiate?: boolean | Proposal$NegotiateArgs<ExtArgs>
    Project?: boolean | Proposal$ProjectArgs<ExtArgs>
    _count?: boolean | ProposalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientRequest?: boolean | ClientRequestDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientRequest?: boolean | ClientRequestDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      clientRequest: Prisma.$ClientRequestPayload<ExtArgs>
      service: Prisma.$ServicesPayload<ExtArgs>
      client: Prisma.$UserPayload<ExtArgs>
      Negotiate: Prisma.$NegotiatePayload<ExtArgs>[]
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      client_request_id: string
      service_id: string
      client_id: string
      contract_id: string | null
      scope: string
      deliverables: string
      timeline: string
      pricing: number
      status: $Enums.ProposalStatus
      termsAndConditions: string
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {ProposalCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals and returns the data updated in the database.
     * @param {ProposalUpdateManyAndReturnArgs} args - Arguments to update many Proposals.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
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
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientRequest<T extends ClientRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientRequestDefaultArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicesDefaultArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Negotiate<T extends Proposal$NegotiateArgs<ExtArgs> = {}>(args?: Subset<T, Proposal$NegotiateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Project<T extends Proposal$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, Proposal$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'String'>
    readonly client_request_id: FieldRef<"Proposal", 'String'>
    readonly service_id: FieldRef<"Proposal", 'String'>
    readonly client_id: FieldRef<"Proposal", 'String'>
    readonly contract_id: FieldRef<"Proposal", 'String'>
    readonly scope: FieldRef<"Proposal", 'String'>
    readonly deliverables: FieldRef<"Proposal", 'String'>
    readonly timeline: FieldRef<"Proposal", 'String'>
    readonly pricing: FieldRef<"Proposal", 'Int'>
    readonly status: FieldRef<"Proposal", 'ProposalStatus'>
    readonly termsAndConditions: FieldRef<"Proposal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal createManyAndReturn
   */
  export type ProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal updateManyAndReturn
   */
  export type ProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to delete.
     */
    limit?: number
  }

  /**
   * Proposal.Negotiate
   */
  export type Proposal$NegotiateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    where?: NegotiateWhereInput
    orderBy?: NegotiateOrderByWithRelationInput | NegotiateOrderByWithRelationInput[]
    cursor?: NegotiateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NegotiateScalarFieldEnum | NegotiateScalarFieldEnum[]
  }

  /**
   * Proposal.Project
   */
  export type Proposal$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
  }


  /**
   * Model Negotiate
   */

  export type AggregateNegotiate = {
    _count: NegotiateCountAggregateOutputType | null
    _min: NegotiateMinAggregateOutputType | null
    _max: NegotiateMaxAggregateOutputType | null
  }

  export type NegotiateMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    proposal_id: string | null
    serviceId: string | null
    NegotiatingText: string | null
  }

  export type NegotiateMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    proposal_id: string | null
    serviceId: string | null
    NegotiatingText: string | null
  }

  export type NegotiateCountAggregateOutputType = {
    id: number
    clientId: number
    proposal_id: number
    serviceId: number
    NegotiatingText: number
    _all: number
  }


  export type NegotiateMinAggregateInputType = {
    id?: true
    clientId?: true
    proposal_id?: true
    serviceId?: true
    NegotiatingText?: true
  }

  export type NegotiateMaxAggregateInputType = {
    id?: true
    clientId?: true
    proposal_id?: true
    serviceId?: true
    NegotiatingText?: true
  }

  export type NegotiateCountAggregateInputType = {
    id?: true
    clientId?: true
    proposal_id?: true
    serviceId?: true
    NegotiatingText?: true
    _all?: true
  }

  export type NegotiateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Negotiate to aggregate.
     */
    where?: NegotiateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negotiates to fetch.
     */
    orderBy?: NegotiateOrderByWithRelationInput | NegotiateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NegotiateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negotiates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negotiates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Negotiates
    **/
    _count?: true | NegotiateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NegotiateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NegotiateMaxAggregateInputType
  }

  export type GetNegotiateAggregateType<T extends NegotiateAggregateArgs> = {
        [P in keyof T & keyof AggregateNegotiate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNegotiate[P]>
      : GetScalarType<T[P], AggregateNegotiate[P]>
  }




  export type NegotiateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NegotiateWhereInput
    orderBy?: NegotiateOrderByWithAggregationInput | NegotiateOrderByWithAggregationInput[]
    by: NegotiateScalarFieldEnum[] | NegotiateScalarFieldEnum
    having?: NegotiateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NegotiateCountAggregateInputType | true
    _min?: NegotiateMinAggregateInputType
    _max?: NegotiateMaxAggregateInputType
  }

  export type NegotiateGroupByOutputType = {
    id: string
    clientId: string
    proposal_id: string
    serviceId: string
    NegotiatingText: string
    _count: NegotiateCountAggregateOutputType | null
    _min: NegotiateMinAggregateOutputType | null
    _max: NegotiateMaxAggregateOutputType | null
  }

  type GetNegotiateGroupByPayload<T extends NegotiateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NegotiateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NegotiateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NegotiateGroupByOutputType[P]>
            : GetScalarType<T[P], NegotiateGroupByOutputType[P]>
        }
      >
    >


  export type NegotiateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    proposal_id?: boolean
    serviceId?: boolean
    NegotiatingText?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["negotiate"]>

  export type NegotiateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    proposal_id?: boolean
    serviceId?: boolean
    NegotiatingText?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["negotiate"]>

  export type NegotiateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    proposal_id?: boolean
    serviceId?: boolean
    NegotiatingText?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["negotiate"]>

  export type NegotiateSelectScalar = {
    id?: boolean
    clientId?: boolean
    proposal_id?: boolean
    serviceId?: boolean
    NegotiatingText?: boolean
  }

  export type NegotiateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "proposal_id" | "serviceId" | "NegotiatingText", ExtArgs["result"]["negotiate"]>
  export type NegotiateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }
  export type NegotiateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }
  export type NegotiateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }

  export type $NegotiatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Negotiate"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      proposal: Prisma.$ProposalPayload<ExtArgs>
      service: Prisma.$ServicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      proposal_id: string
      serviceId: string
      NegotiatingText: string
    }, ExtArgs["result"]["negotiate"]>
    composites: {}
  }

  type NegotiateGetPayload<S extends boolean | null | undefined | NegotiateDefaultArgs> = $Result.GetResult<Prisma.$NegotiatePayload, S>

  type NegotiateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NegotiateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NegotiateCountAggregateInputType | true
    }

  export interface NegotiateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Negotiate'], meta: { name: 'Negotiate' } }
    /**
     * Find zero or one Negotiate that matches the filter.
     * @param {NegotiateFindUniqueArgs} args - Arguments to find a Negotiate
     * @example
     * // Get one Negotiate
     * const negotiate = await prisma.negotiate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NegotiateFindUniqueArgs>(args: SelectSubset<T, NegotiateFindUniqueArgs<ExtArgs>>): Prisma__NegotiateClient<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Negotiate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NegotiateFindUniqueOrThrowArgs} args - Arguments to find a Negotiate
     * @example
     * // Get one Negotiate
     * const negotiate = await prisma.negotiate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NegotiateFindUniqueOrThrowArgs>(args: SelectSubset<T, NegotiateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NegotiateClient<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Negotiate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegotiateFindFirstArgs} args - Arguments to find a Negotiate
     * @example
     * // Get one Negotiate
     * const negotiate = await prisma.negotiate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NegotiateFindFirstArgs>(args?: SelectSubset<T, NegotiateFindFirstArgs<ExtArgs>>): Prisma__NegotiateClient<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Negotiate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegotiateFindFirstOrThrowArgs} args - Arguments to find a Negotiate
     * @example
     * // Get one Negotiate
     * const negotiate = await prisma.negotiate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NegotiateFindFirstOrThrowArgs>(args?: SelectSubset<T, NegotiateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NegotiateClient<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Negotiates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegotiateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Negotiates
     * const negotiates = await prisma.negotiate.findMany()
     * 
     * // Get first 10 Negotiates
     * const negotiates = await prisma.negotiate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const negotiateWithIdOnly = await prisma.negotiate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NegotiateFindManyArgs>(args?: SelectSubset<T, NegotiateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Negotiate.
     * @param {NegotiateCreateArgs} args - Arguments to create a Negotiate.
     * @example
     * // Create one Negotiate
     * const Negotiate = await prisma.negotiate.create({
     *   data: {
     *     // ... data to create a Negotiate
     *   }
     * })
     * 
     */
    create<T extends NegotiateCreateArgs>(args: SelectSubset<T, NegotiateCreateArgs<ExtArgs>>): Prisma__NegotiateClient<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Negotiates.
     * @param {NegotiateCreateManyArgs} args - Arguments to create many Negotiates.
     * @example
     * // Create many Negotiates
     * const negotiate = await prisma.negotiate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NegotiateCreateManyArgs>(args?: SelectSubset<T, NegotiateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Negotiates and returns the data saved in the database.
     * @param {NegotiateCreateManyAndReturnArgs} args - Arguments to create many Negotiates.
     * @example
     * // Create many Negotiates
     * const negotiate = await prisma.negotiate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Negotiates and only return the `id`
     * const negotiateWithIdOnly = await prisma.negotiate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NegotiateCreateManyAndReturnArgs>(args?: SelectSubset<T, NegotiateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Negotiate.
     * @param {NegotiateDeleteArgs} args - Arguments to delete one Negotiate.
     * @example
     * // Delete one Negotiate
     * const Negotiate = await prisma.negotiate.delete({
     *   where: {
     *     // ... filter to delete one Negotiate
     *   }
     * })
     * 
     */
    delete<T extends NegotiateDeleteArgs>(args: SelectSubset<T, NegotiateDeleteArgs<ExtArgs>>): Prisma__NegotiateClient<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Negotiate.
     * @param {NegotiateUpdateArgs} args - Arguments to update one Negotiate.
     * @example
     * // Update one Negotiate
     * const negotiate = await prisma.negotiate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NegotiateUpdateArgs>(args: SelectSubset<T, NegotiateUpdateArgs<ExtArgs>>): Prisma__NegotiateClient<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Negotiates.
     * @param {NegotiateDeleteManyArgs} args - Arguments to filter Negotiates to delete.
     * @example
     * // Delete a few Negotiates
     * const { count } = await prisma.negotiate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NegotiateDeleteManyArgs>(args?: SelectSubset<T, NegotiateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Negotiates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegotiateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Negotiates
     * const negotiate = await prisma.negotiate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NegotiateUpdateManyArgs>(args: SelectSubset<T, NegotiateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Negotiates and returns the data updated in the database.
     * @param {NegotiateUpdateManyAndReturnArgs} args - Arguments to update many Negotiates.
     * @example
     * // Update many Negotiates
     * const negotiate = await prisma.negotiate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Negotiates and only return the `id`
     * const negotiateWithIdOnly = await prisma.negotiate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NegotiateUpdateManyAndReturnArgs>(args: SelectSubset<T, NegotiateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Negotiate.
     * @param {NegotiateUpsertArgs} args - Arguments to update or create a Negotiate.
     * @example
     * // Update or create a Negotiate
     * const negotiate = await prisma.negotiate.upsert({
     *   create: {
     *     // ... data to create a Negotiate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Negotiate we want to update
     *   }
     * })
     */
    upsert<T extends NegotiateUpsertArgs>(args: SelectSubset<T, NegotiateUpsertArgs<ExtArgs>>): Prisma__NegotiateClient<$Result.GetResult<Prisma.$NegotiatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Negotiates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegotiateCountArgs} args - Arguments to filter Negotiates to count.
     * @example
     * // Count the number of Negotiates
     * const count = await prisma.negotiate.count({
     *   where: {
     *     // ... the filter for the Negotiates we want to count
     *   }
     * })
    **/
    count<T extends NegotiateCountArgs>(
      args?: Subset<T, NegotiateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NegotiateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Negotiate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegotiateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NegotiateAggregateArgs>(args: Subset<T, NegotiateAggregateArgs>): Prisma.PrismaPromise<GetNegotiateAggregateType<T>>

    /**
     * Group by Negotiate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegotiateGroupByArgs} args - Group by arguments.
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
      T extends NegotiateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NegotiateGroupByArgs['orderBy'] }
        : { orderBy?: NegotiateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NegotiateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNegotiateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Negotiate model
   */
  readonly fields: NegotiateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Negotiate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NegotiateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proposal<T extends ProposalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProposalDefaultArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicesDefaultArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Negotiate model
   */
  interface NegotiateFieldRefs {
    readonly id: FieldRef<"Negotiate", 'String'>
    readonly clientId: FieldRef<"Negotiate", 'String'>
    readonly proposal_id: FieldRef<"Negotiate", 'String'>
    readonly serviceId: FieldRef<"Negotiate", 'String'>
    readonly NegotiatingText: FieldRef<"Negotiate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Negotiate findUnique
   */
  export type NegotiateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    /**
     * Filter, which Negotiate to fetch.
     */
    where: NegotiateWhereUniqueInput
  }

  /**
   * Negotiate findUniqueOrThrow
   */
  export type NegotiateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    /**
     * Filter, which Negotiate to fetch.
     */
    where: NegotiateWhereUniqueInput
  }

  /**
   * Negotiate findFirst
   */
  export type NegotiateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    /**
     * Filter, which Negotiate to fetch.
     */
    where?: NegotiateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negotiates to fetch.
     */
    orderBy?: NegotiateOrderByWithRelationInput | NegotiateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Negotiates.
     */
    cursor?: NegotiateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negotiates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negotiates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Negotiates.
     */
    distinct?: NegotiateScalarFieldEnum | NegotiateScalarFieldEnum[]
  }

  /**
   * Negotiate findFirstOrThrow
   */
  export type NegotiateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    /**
     * Filter, which Negotiate to fetch.
     */
    where?: NegotiateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negotiates to fetch.
     */
    orderBy?: NegotiateOrderByWithRelationInput | NegotiateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Negotiates.
     */
    cursor?: NegotiateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negotiates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negotiates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Negotiates.
     */
    distinct?: NegotiateScalarFieldEnum | NegotiateScalarFieldEnum[]
  }

  /**
   * Negotiate findMany
   */
  export type NegotiateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    /**
     * Filter, which Negotiates to fetch.
     */
    where?: NegotiateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negotiates to fetch.
     */
    orderBy?: NegotiateOrderByWithRelationInput | NegotiateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Negotiates.
     */
    cursor?: NegotiateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negotiates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negotiates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Negotiates.
     */
    distinct?: NegotiateScalarFieldEnum | NegotiateScalarFieldEnum[]
  }

  /**
   * Negotiate create
   */
  export type NegotiateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    /**
     * The data needed to create a Negotiate.
     */
    data: XOR<NegotiateCreateInput, NegotiateUncheckedCreateInput>
  }

  /**
   * Negotiate createMany
   */
  export type NegotiateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Negotiates.
     */
    data: NegotiateCreateManyInput | NegotiateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Negotiate createManyAndReturn
   */
  export type NegotiateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * The data used to create many Negotiates.
     */
    data: NegotiateCreateManyInput | NegotiateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Negotiate update
   */
  export type NegotiateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    /**
     * The data needed to update a Negotiate.
     */
    data: XOR<NegotiateUpdateInput, NegotiateUncheckedUpdateInput>
    /**
     * Choose, which Negotiate to update.
     */
    where: NegotiateWhereUniqueInput
  }

  /**
   * Negotiate updateMany
   */
  export type NegotiateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Negotiates.
     */
    data: XOR<NegotiateUpdateManyMutationInput, NegotiateUncheckedUpdateManyInput>
    /**
     * Filter which Negotiates to update
     */
    where?: NegotiateWhereInput
    /**
     * Limit how many Negotiates to update.
     */
    limit?: number
  }

  /**
   * Negotiate updateManyAndReturn
   */
  export type NegotiateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * The data used to update Negotiates.
     */
    data: XOR<NegotiateUpdateManyMutationInput, NegotiateUncheckedUpdateManyInput>
    /**
     * Filter which Negotiates to update
     */
    where?: NegotiateWhereInput
    /**
     * Limit how many Negotiates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Negotiate upsert
   */
  export type NegotiateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    /**
     * The filter to search for the Negotiate to update in case it exists.
     */
    where: NegotiateWhereUniqueInput
    /**
     * In case the Negotiate found by the `where` argument doesn't exist, create a new Negotiate with this data.
     */
    create: XOR<NegotiateCreateInput, NegotiateUncheckedCreateInput>
    /**
     * In case the Negotiate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NegotiateUpdateInput, NegotiateUncheckedUpdateInput>
  }

  /**
   * Negotiate delete
   */
  export type NegotiateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
    /**
     * Filter which Negotiate to delete.
     */
    where: NegotiateWhereUniqueInput
  }

  /**
   * Negotiate deleteMany
   */
  export type NegotiateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Negotiates to delete
     */
    where?: NegotiateWhereInput
    /**
     * Limit how many Negotiates to delete.
     */
    limit?: number
  }

  /**
   * Negotiate without action
   */
  export type NegotiateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negotiate
     */
    select?: NegotiateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negotiate
     */
    omit?: NegotiateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegotiateInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    progress: number | null
  }

  export type ProjectSumAggregateOutputType = {
    progress: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    service_id: string | null
    proposal_id: string | null
    client_id: string | null
    title: string | null
    projectStatus: $Enums.ProjectStatus | null
    endDate: Date | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    service_id: string | null
    proposal_id: string | null
    client_id: string | null
    title: string | null
    projectStatus: $Enums.ProjectStatus | null
    endDate: Date | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    service_id: number
    proposal_id: number
    client_id: number
    title: number
    projectStatus: number
    endDate: number
    progress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    progress?: true
  }

  export type ProjectSumAggregateInputType = {
    progress?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    service_id?: true
    proposal_id?: true
    client_id?: true
    title?: true
    projectStatus?: true
    endDate?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    service_id?: true
    proposal_id?: true
    client_id?: true
    title?: true
    projectStatus?: true
    endDate?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    service_id?: true
    proposal_id?: true
    client_id?: true
    title?: true
    projectStatus?: true
    endDate?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    service_id: string
    proposal_id: string
    client_id: string
    title: string | null
    projectStatus: $Enums.ProjectStatus
    endDate: Date | null
    progress: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    proposal_id?: boolean
    client_id?: boolean
    title?: boolean
    projectStatus?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    proposal_id?: boolean
    client_id?: boolean
    title?: boolean
    projectStatus?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    proposal_id?: boolean
    client_id?: boolean
    title?: boolean
    projectStatus?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    service_id?: boolean
    proposal_id?: boolean
    client_id?: boolean
    title?: boolean
    projectStatus?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service_id" | "proposal_id" | "client_id" | "title" | "projectStatus" | "endDate" | "progress" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      service: Prisma.$ServicesPayload<ExtArgs>
      proposal: Prisma.$ProposalPayload<ExtArgs>
      client: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service_id: string
      proposal_id: string
      client_id: string
      title: string | null
      projectStatus: $Enums.ProjectStatus
      endDate: Date | null
      progress: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicesDefaultArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proposal<T extends ProposalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProposalDefaultArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly service_id: FieldRef<"Project", 'String'>
    readonly proposal_id: FieldRef<"Project", 'String'>
    readonly client_id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly projectStatus: FieldRef<"Project", 'ProjectStatus'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly progress: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    password: 'password',
    country: 'country',
    companyName: 'companyName',
    contactPerson: 'contactPerson',
    fullName: 'fullName',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    companyWebsite: 'companyWebsite',
    industry: 'industry',
    type: 'type',
    roleId: 'roleId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    ServiceName: 'ServiceName',
    Description: 'Description',
    status: 'status',
    createdAt: 'createdAt',
    DateCreated: 'DateCreated'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const ClientRequestScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    clientId: 'clientId',
    request_status: 'request_status',
    createdAt: 'createdAt'
  };

  export type ClientRequestScalarFieldEnum = (typeof ClientRequestScalarFieldEnum)[keyof typeof ClientRequestScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    client_request_id: 'client_request_id',
    service_id: 'service_id',
    client_id: 'client_id',
    contract_id: 'contract_id',
    scope: 'scope',
    deliverables: 'deliverables',
    timeline: 'timeline',
    pricing: 'pricing',
    status: 'status',
    termsAndConditions: 'termsAndConditions'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const NegotiateScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    proposal_id: 'proposal_id',
    serviceId: 'serviceId',
    NegotiatingText: 'NegotiatingText'
  };

  export type NegotiateScalarFieldEnum = (typeof NegotiateScalarFieldEnum)[keyof typeof NegotiateScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    service_id: 'service_id',
    proposal_id: 'proposal_id',
    client_id: 'client_id',
    title: 'title',
    projectStatus: 'projectStatus',
    endDate: 'endDate',
    progress: 'progress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserTypeEnum'
   */
  export type EnumUserTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserTypeEnum'>
    


  /**
   * Reference to a field of type 'UserTypeEnum[]'
   */
  export type ListEnumUserTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserTypeEnum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'serviceStatus'
   */
  export type EnumserviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'serviceStatus'>
    


  /**
   * Reference to a field of type 'serviceStatus[]'
   */
  export type ListEnumserviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'serviceStatus[]'>
    


  /**
   * Reference to a field of type 'ClientRequestStatus'
   */
  export type EnumClientRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientRequestStatus'>
    


  /**
   * Reference to a field of type 'ClientRequestStatus[]'
   */
  export type ListEnumClientRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientRequestStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProposalStatus'
   */
  export type EnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus'>
    


  /**
   * Reference to a field of type 'ProposalStatus[]'
   */
  export type ListEnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    contactPerson?: StringNullableFilter<"User"> | string | null
    fullName?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    companyWebsite?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    type?: EnumUserTypeEnumNullableFilter<"User"> | $Enums.UserTypeEnum | null
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    service?: ServicesListRelationFilter
    client?: ClientRequestListRelationFilter
    Proposal?: ProposalListRelationFilter
    Negotiation?: NegotiateListRelationFilter
    project?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    service?: ServicesOrderByRelationAggregateInput
    client?: ClientRequestOrderByRelationAggregateInput
    Proposal?: ProposalOrderByRelationAggregateInput
    Negotiation?: NegotiateOrderByRelationAggregateInput
    project?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    contactPerson?: StringNullableFilter<"User"> | string | null
    fullName?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    companyWebsite?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    type?: EnumUserTypeEnumNullableFilter<"User"> | $Enums.UserTypeEnum | null
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    service?: ServicesListRelationFilter
    client?: ClientRequestListRelationFilter
    Proposal?: ProposalListRelationFilter
    Negotiation?: NegotiateListRelationFilter
    project?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    contactPerson?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyWebsite?: StringNullableWithAggregatesFilter<"User"> | string | null
    industry?: StringNullableWithAggregatesFilter<"User"> | string | null
    type?: EnumUserTypeEnumNullableWithAggregatesFilter<"User"> | $Enums.UserTypeEnum | null
    roleId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    status?: EnumStatusFilter<"Role"> | $Enums.Status
    createdAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    status?: EnumStatusFilter<"Role"> | $Enums.Status
    createdAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    status?: EnumStatusWithAggregatesFilter<"Role"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type ServicesWhereInput = {
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    id?: StringFilter<"Services"> | string
    clientId?: StringNullableFilter<"Services"> | string | null
    ServiceName?: StringFilter<"Services"> | string
    Description?: StringFilter<"Services"> | string
    status?: EnumserviceStatusFilter<"Services"> | $Enums.serviceStatus
    createdAt?: DateTimeFilter<"Services"> | Date | string
    DateCreated?: DateTimeFilter<"Services"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Negotiation?: NegotiateListRelationFilter
    clientRequest?: ClientRequestListRelationFilter
    Proposal?: ProposalListRelationFilter
    Project?: ProjectListRelationFilter
  }

  export type ServicesOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    ServiceName?: SortOrder
    Description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    DateCreated?: SortOrder
    client?: UserOrderByWithRelationInput
    Negotiation?: NegotiateOrderByRelationAggregateInput
    clientRequest?: ClientRequestOrderByRelationAggregateInput
    Proposal?: ProposalOrderByRelationAggregateInput
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type ServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    clientId?: StringNullableFilter<"Services"> | string | null
    ServiceName?: StringFilter<"Services"> | string
    Description?: StringFilter<"Services"> | string
    status?: EnumserviceStatusFilter<"Services"> | $Enums.serviceStatus
    createdAt?: DateTimeFilter<"Services"> | Date | string
    DateCreated?: DateTimeFilter<"Services"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Negotiation?: NegotiateListRelationFilter
    clientRequest?: ClientRequestListRelationFilter
    Proposal?: ProposalListRelationFilter
    Project?: ProjectListRelationFilter
  }, "id">

  export type ServicesOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    ServiceName?: SortOrder
    Description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    DateCreated?: SortOrder
    _count?: ServicesCountOrderByAggregateInput
    _max?: ServicesMaxOrderByAggregateInput
    _min?: ServicesMinOrderByAggregateInput
  }

  export type ServicesScalarWhereWithAggregatesInput = {
    AND?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    OR?: ServicesScalarWhereWithAggregatesInput[]
    NOT?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Services"> | string
    clientId?: StringNullableWithAggregatesFilter<"Services"> | string | null
    ServiceName?: StringWithAggregatesFilter<"Services"> | string
    Description?: StringWithAggregatesFilter<"Services"> | string
    status?: EnumserviceStatusWithAggregatesFilter<"Services"> | $Enums.serviceStatus
    createdAt?: DateTimeWithAggregatesFilter<"Services"> | Date | string
    DateCreated?: DateTimeWithAggregatesFilter<"Services"> | Date | string
  }

  export type ClientRequestWhereInput = {
    AND?: ClientRequestWhereInput | ClientRequestWhereInput[]
    OR?: ClientRequestWhereInput[]
    NOT?: ClientRequestWhereInput | ClientRequestWhereInput[]
    id?: StringFilter<"ClientRequest"> | string
    serviceId?: StringFilter<"ClientRequest"> | string
    clientId?: StringFilter<"ClientRequest"> | string
    request_status?: EnumClientRequestStatusFilter<"ClientRequest"> | $Enums.ClientRequestStatus
    createdAt?: DateTimeFilter<"ClientRequest"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServicesNullableScalarRelationFilter, ServicesWhereInput> | null
    proposals?: ProposalListRelationFilter
  }

  export type ClientRequestOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    request_status?: SortOrder
    createdAt?: SortOrder
    client?: UserOrderByWithRelationInput
    service?: ServicesOrderByWithRelationInput
    proposals?: ProposalOrderByRelationAggregateInput
  }

  export type ClientRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientRequestWhereInput | ClientRequestWhereInput[]
    OR?: ClientRequestWhereInput[]
    NOT?: ClientRequestWhereInput | ClientRequestWhereInput[]
    serviceId?: StringFilter<"ClientRequest"> | string
    clientId?: StringFilter<"ClientRequest"> | string
    request_status?: EnumClientRequestStatusFilter<"ClientRequest"> | $Enums.ClientRequestStatus
    createdAt?: DateTimeFilter<"ClientRequest"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServicesNullableScalarRelationFilter, ServicesWhereInput> | null
    proposals?: ProposalListRelationFilter
  }, "id">

  export type ClientRequestOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    request_status?: SortOrder
    createdAt?: SortOrder
    _count?: ClientRequestCountOrderByAggregateInput
    _max?: ClientRequestMaxOrderByAggregateInput
    _min?: ClientRequestMinOrderByAggregateInput
  }

  export type ClientRequestScalarWhereWithAggregatesInput = {
    AND?: ClientRequestScalarWhereWithAggregatesInput | ClientRequestScalarWhereWithAggregatesInput[]
    OR?: ClientRequestScalarWhereWithAggregatesInput[]
    NOT?: ClientRequestScalarWhereWithAggregatesInput | ClientRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientRequest"> | string
    serviceId?: StringWithAggregatesFilter<"ClientRequest"> | string
    clientId?: StringWithAggregatesFilter<"ClientRequest"> | string
    request_status?: EnumClientRequestStatusWithAggregatesFilter<"ClientRequest"> | $Enums.ClientRequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"ClientRequest"> | Date | string
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: StringFilter<"Proposal"> | string
    client_request_id?: StringFilter<"Proposal"> | string
    service_id?: StringFilter<"Proposal"> | string
    client_id?: StringFilter<"Proposal"> | string
    contract_id?: StringNullableFilter<"Proposal"> | string | null
    scope?: StringFilter<"Proposal"> | string
    deliverables?: StringFilter<"Proposal"> | string
    timeline?: StringFilter<"Proposal"> | string
    pricing?: IntFilter<"Proposal"> | number
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    termsAndConditions?: StringFilter<"Proposal"> | string
    clientRequest?: XOR<ClientRequestScalarRelationFilter, ClientRequestWhereInput>
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    Negotiate?: NegotiateListRelationFilter
    Project?: ProjectListRelationFilter
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    client_request_id?: SortOrder
    service_id?: SortOrder
    client_id?: SortOrder
    contract_id?: SortOrderInput | SortOrder
    scope?: SortOrder
    deliverables?: SortOrder
    timeline?: SortOrder
    pricing?: SortOrder
    status?: SortOrder
    termsAndConditions?: SortOrder
    clientRequest?: ClientRequestOrderByWithRelationInput
    service?: ServicesOrderByWithRelationInput
    client?: UserOrderByWithRelationInput
    Negotiate?: NegotiateOrderByRelationAggregateInput
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    client_request_id?: StringFilter<"Proposal"> | string
    service_id?: StringFilter<"Proposal"> | string
    client_id?: StringFilter<"Proposal"> | string
    contract_id?: StringNullableFilter<"Proposal"> | string | null
    scope?: StringFilter<"Proposal"> | string
    deliverables?: StringFilter<"Proposal"> | string
    timeline?: StringFilter<"Proposal"> | string
    pricing?: IntFilter<"Proposal"> | number
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    termsAndConditions?: StringFilter<"Proposal"> | string
    clientRequest?: XOR<ClientRequestScalarRelationFilter, ClientRequestWhereInput>
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    Negotiate?: NegotiateListRelationFilter
    Project?: ProjectListRelationFilter
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    client_request_id?: SortOrder
    service_id?: SortOrder
    client_id?: SortOrder
    contract_id?: SortOrderInput | SortOrder
    scope?: SortOrder
    deliverables?: SortOrder
    timeline?: SortOrder
    pricing?: SortOrder
    status?: SortOrder
    termsAndConditions?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _avg?: ProposalAvgOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
    _sum?: ProposalSumOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proposal"> | string
    client_request_id?: StringWithAggregatesFilter<"Proposal"> | string
    service_id?: StringWithAggregatesFilter<"Proposal"> | string
    client_id?: StringWithAggregatesFilter<"Proposal"> | string
    contract_id?: StringNullableWithAggregatesFilter<"Proposal"> | string | null
    scope?: StringWithAggregatesFilter<"Proposal"> | string
    deliverables?: StringWithAggregatesFilter<"Proposal"> | string
    timeline?: StringWithAggregatesFilter<"Proposal"> | string
    pricing?: IntWithAggregatesFilter<"Proposal"> | number
    status?: EnumProposalStatusWithAggregatesFilter<"Proposal"> | $Enums.ProposalStatus
    termsAndConditions?: StringWithAggregatesFilter<"Proposal"> | string
  }

  export type NegotiateWhereInput = {
    AND?: NegotiateWhereInput | NegotiateWhereInput[]
    OR?: NegotiateWhereInput[]
    NOT?: NegotiateWhereInput | NegotiateWhereInput[]
    id?: StringFilter<"Negotiate"> | string
    clientId?: StringFilter<"Negotiate"> | string
    proposal_id?: StringFilter<"Negotiate"> | string
    serviceId?: StringFilter<"Negotiate"> | string
    NegotiatingText?: StringFilter<"Negotiate"> | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    proposal?: XOR<ProposalScalarRelationFilter, ProposalWhereInput>
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
  }

  export type NegotiateOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    proposal_id?: SortOrder
    serviceId?: SortOrder
    NegotiatingText?: SortOrder
    client?: UserOrderByWithRelationInput
    proposal?: ProposalOrderByWithRelationInput
    service?: ServicesOrderByWithRelationInput
  }

  export type NegotiateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NegotiateWhereInput | NegotiateWhereInput[]
    OR?: NegotiateWhereInput[]
    NOT?: NegotiateWhereInput | NegotiateWhereInput[]
    clientId?: StringFilter<"Negotiate"> | string
    proposal_id?: StringFilter<"Negotiate"> | string
    serviceId?: StringFilter<"Negotiate"> | string
    NegotiatingText?: StringFilter<"Negotiate"> | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    proposal?: XOR<ProposalScalarRelationFilter, ProposalWhereInput>
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
  }, "id">

  export type NegotiateOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    proposal_id?: SortOrder
    serviceId?: SortOrder
    NegotiatingText?: SortOrder
    _count?: NegotiateCountOrderByAggregateInput
    _max?: NegotiateMaxOrderByAggregateInput
    _min?: NegotiateMinOrderByAggregateInput
  }

  export type NegotiateScalarWhereWithAggregatesInput = {
    AND?: NegotiateScalarWhereWithAggregatesInput | NegotiateScalarWhereWithAggregatesInput[]
    OR?: NegotiateScalarWhereWithAggregatesInput[]
    NOT?: NegotiateScalarWhereWithAggregatesInput | NegotiateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Negotiate"> | string
    clientId?: StringWithAggregatesFilter<"Negotiate"> | string
    proposal_id?: StringWithAggregatesFilter<"Negotiate"> | string
    serviceId?: StringWithAggregatesFilter<"Negotiate"> | string
    NegotiatingText?: StringWithAggregatesFilter<"Negotiate"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    service_id?: StringFilter<"Project"> | string
    proposal_id?: StringFilter<"Project"> | string
    client_id?: StringFilter<"Project"> | string
    title?: StringNullableFilter<"Project"> | string | null
    projectStatus?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    progress?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
    proposal?: XOR<ProposalScalarRelationFilter, ProposalWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    service_id?: SortOrder
    proposal_id?: SortOrder
    client_id?: SortOrder
    title?: SortOrderInput | SortOrder
    projectStatus?: SortOrder
    endDate?: SortOrderInput | SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServicesOrderByWithRelationInput
    proposal?: ProposalOrderByWithRelationInput
    client?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proposal_id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    service_id?: StringFilter<"Project"> | string
    client_id?: StringFilter<"Project"> | string
    title?: StringNullableFilter<"Project"> | string | null
    projectStatus?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    progress?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
    proposal?: XOR<ProposalScalarRelationFilter, ProposalWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "proposal_id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    service_id?: SortOrder
    proposal_id?: SortOrder
    client_id?: SortOrder
    title?: SortOrderInput | SortOrder
    projectStatus?: SortOrder
    endDate?: SortOrderInput | SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    service_id?: StringWithAggregatesFilter<"Project"> | string
    proposal_id?: StringWithAggregatesFilter<"Project"> | string
    client_id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectStatus?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    progress?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    service?: ServicesCreateNestedManyWithoutClientInput
    client?: ClientRequestCreateNestedManyWithoutClientInput
    Proposal?: ProposalCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateCreateNestedManyWithoutClientInput
    project?: ProjectCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    roleId: string
    createdAt?: Date | string
    service?: ServicesUncheckedCreateNestedManyWithoutClientInput
    client?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutClientInput
    project?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    service?: ServicesUpdateManyWithoutClientNestedInput
    client?: ClientRequestUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUpdateManyWithoutClientNestedInput
    project?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUncheckedUpdateManyWithoutClientNestedInput
    client?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUncheckedUpdateManyWithoutClientNestedInput
    project?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    roleId: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesCreateInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    client?: UserCreateNestedOneWithoutServiceInput
    Negotiation?: NegotiateCreateNestedManyWithoutServiceInput
    clientRequest?: ClientRequestCreateNestedManyWithoutServiceInput
    Proposal?: ProposalCreateNestedManyWithoutServiceInput
    Project?: ProjectCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutServiceInput
    clientRequest?: ClientRequestUncheckedCreateNestedManyWithoutServiceInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutServiceInput
    Project?: ProjectUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutServiceNestedInput
    Negotiation?: NegotiateUpdateManyWithoutServiceNestedInput
    clientRequest?: ClientRequestUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUpdateManyWithoutServiceNestedInput
    Project?: ProjectUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    Negotiation?: NegotiateUncheckedUpdateManyWithoutServiceNestedInput
    clientRequest?: ClientRequestUncheckedUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutServiceNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServicesCreateManyInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
  }

  export type ServicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestCreateInput = {
    id?: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
    client?: UserCreateNestedOneWithoutClientInput
    service?: ServicesCreateNestedOneWithoutClientRequestInput
    proposals?: ProposalCreateNestedManyWithoutClientRequestInput
  }

  export type ClientRequestUncheckedCreateInput = {
    id?: string
    serviceId: string
    clientId: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutClientRequestInput
  }

  export type ClientRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutClientNestedInput
    service?: ServicesUpdateOneWithoutClientRequestNestedInput
    proposals?: ProposalUpdateManyWithoutClientRequestNestedInput
  }

  export type ClientRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutClientRequestNestedInput
  }

  export type ClientRequestCreateManyInput = {
    id?: string
    serviceId: string
    clientId: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
  }

  export type ClientRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateInput = {
    id?: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    clientRequest: ClientRequestCreateNestedOneWithoutProposalsInput
    service: ServicesCreateNestedOneWithoutProposalInput
    client: UserCreateNestedOneWithoutProposalInput
    Negotiate?: NegotiateCreateNestedManyWithoutProposalInput
    Project?: ProjectCreateNestedManyWithoutProposalInput
  }

  export type ProposalUncheckedCreateInput = {
    id?: string
    client_request_id: string
    service_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    Negotiate?: NegotiateUncheckedCreateNestedManyWithoutProposalInput
    Project?: ProjectUncheckedCreateNestedManyWithoutProposalInput
  }

  export type ProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    clientRequest?: ClientRequestUpdateOneRequiredWithoutProposalsNestedInput
    service?: ServicesUpdateOneRequiredWithoutProposalNestedInput
    client?: UserUpdateOneRequiredWithoutProposalNestedInput
    Negotiate?: NegotiateUpdateManyWithoutProposalNestedInput
    Project?: ProjectUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_request_id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    Negotiate?: NegotiateUncheckedUpdateManyWithoutProposalNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type ProposalCreateManyInput = {
    id?: string
    client_request_id: string
    service_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
  }

  export type ProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_request_id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
  }

  export type NegotiateCreateInput = {
    id?: string
    NegotiatingText: string
    client: UserCreateNestedOneWithoutNegotiationInput
    proposal: ProposalCreateNestedOneWithoutNegotiateInput
    service: ServicesCreateNestedOneWithoutNegotiationInput
  }

  export type NegotiateUncheckedCreateInput = {
    id?: string
    clientId: string
    proposal_id: string
    serviceId: string
    NegotiatingText: string
  }

  export type NegotiateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
    client?: UserUpdateOneRequiredWithoutNegotiationNestedInput
    proposal?: ProposalUpdateOneRequiredWithoutNegotiateNestedInput
    service?: ServicesUpdateOneRequiredWithoutNegotiationNestedInput
  }

  export type NegotiateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
  }

  export type NegotiateCreateManyInput = {
    id?: string
    clientId: string
    proposal_id: string
    serviceId: string
    NegotiatingText: string
  }

  export type NegotiateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
  }

  export type NegotiateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServicesCreateNestedOneWithoutProjectInput
    proposal: ProposalCreateNestedOneWithoutProjectInput
    client: UserCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    service_id: string
    proposal_id: string
    client_id: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUpdateOneRequiredWithoutProjectNestedInput
    proposal?: ProposalUpdateOneRequiredWithoutProjectNestedInput
    client?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    service_id: string
    proposal_id: string
    client_id: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserTypeEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypeEnum | EnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserTypeEnum[] | ListEnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserTypeEnum[] | ListEnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeEnumNullableFilter<$PrismaModel> | $Enums.UserTypeEnum | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ServicesListRelationFilter = {
    every?: ServicesWhereInput
    some?: ServicesWhereInput
    none?: ServicesWhereInput
  }

  export type ClientRequestListRelationFilter = {
    every?: ClientRequestWhereInput
    some?: ClientRequestWhereInput
    none?: ClientRequestWhereInput
  }

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type NegotiateListRelationFilter = {
    every?: NegotiateWhereInput
    some?: NegotiateWhereInput
    none?: NegotiateWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NegotiateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    country?: SortOrder
    companyName?: SortOrder
    contactPerson?: SortOrder
    fullName?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    companyWebsite?: SortOrder
    industry?: SortOrder
    type?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    country?: SortOrder
    companyName?: SortOrder
    contactPerson?: SortOrder
    fullName?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    companyWebsite?: SortOrder
    industry?: SortOrder
    type?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    country?: SortOrder
    companyName?: SortOrder
    contactPerson?: SortOrder
    fullName?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    companyWebsite?: SortOrder
    industry?: SortOrder
    type?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypeEnum | EnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserTypeEnum[] | ListEnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserTypeEnum[] | ListEnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserTypeEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserTypeEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumUserTypeEnumNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumserviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.serviceStatus | EnumserviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumserviceStatusFilter<$PrismaModel> | $Enums.serviceStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ServicesCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    ServiceName?: SortOrder
    Description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    DateCreated?: SortOrder
  }

  export type ServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    ServiceName?: SortOrder
    Description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    DateCreated?: SortOrder
  }

  export type ServicesMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    ServiceName?: SortOrder
    Description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    DateCreated?: SortOrder
  }

  export type EnumserviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.serviceStatus | EnumserviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumserviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.serviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumserviceStatusFilter<$PrismaModel>
    _max?: NestedEnumserviceStatusFilter<$PrismaModel>
  }

  export type EnumClientRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientRequestStatus | EnumClientRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientRequestStatus[] | ListEnumClientRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientRequestStatus[] | ListEnumClientRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientRequestStatusFilter<$PrismaModel> | $Enums.ClientRequestStatus
  }

  export type ServicesNullableScalarRelationFilter = {
    is?: ServicesWhereInput | null
    isNot?: ServicesWhereInput | null
  }

  export type ClientRequestCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    request_status?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    request_status?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientRequestMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    request_status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumClientRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientRequestStatus | EnumClientRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientRequestStatus[] | ListEnumClientRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientRequestStatus[] | ListEnumClientRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumClientRequestStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type ClientRequestScalarRelationFilter = {
    is?: ClientRequestWhereInput
    isNot?: ClientRequestWhereInput
  }

  export type ServicesScalarRelationFilter = {
    is?: ServicesWhereInput
    isNot?: ServicesWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    client_request_id?: SortOrder
    service_id?: SortOrder
    client_id?: SortOrder
    contract_id?: SortOrder
    scope?: SortOrder
    deliverables?: SortOrder
    timeline?: SortOrder
    pricing?: SortOrder
    status?: SortOrder
    termsAndConditions?: SortOrder
  }

  export type ProposalAvgOrderByAggregateInput = {
    pricing?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    client_request_id?: SortOrder
    service_id?: SortOrder
    client_id?: SortOrder
    contract_id?: SortOrder
    scope?: SortOrder
    deliverables?: SortOrder
    timeline?: SortOrder
    pricing?: SortOrder
    status?: SortOrder
    termsAndConditions?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    client_request_id?: SortOrder
    service_id?: SortOrder
    client_id?: SortOrder
    contract_id?: SortOrder
    scope?: SortOrder
    deliverables?: SortOrder
    timeline?: SortOrder
    pricing?: SortOrder
    status?: SortOrder
    termsAndConditions?: SortOrder
  }

  export type ProposalSumOrderByAggregateInput = {
    pricing?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type ProposalScalarRelationFilter = {
    is?: ProposalWhereInput
    isNot?: ProposalWhereInput
  }

  export type NegotiateCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    proposal_id?: SortOrder
    serviceId?: SortOrder
    NegotiatingText?: SortOrder
  }

  export type NegotiateMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    proposal_id?: SortOrder
    serviceId?: SortOrder
    NegotiatingText?: SortOrder
  }

  export type NegotiateMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    proposal_id?: SortOrder
    serviceId?: SortOrder
    NegotiatingText?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    proposal_id?: SortOrder
    client_id?: SortOrder
    title?: SortOrder
    projectStatus?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    proposal_id?: SortOrder
    client_id?: SortOrder
    title?: SortOrder
    projectStatus?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    proposal_id?: SortOrder
    client_id?: SortOrder
    title?: SortOrder
    projectStatus?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type ServicesCreateNestedManyWithoutClientInput = {
    create?: XOR<ServicesCreateWithoutClientInput, ServicesUncheckedCreateWithoutClientInput> | ServicesCreateWithoutClientInput[] | ServicesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutClientInput | ServicesCreateOrConnectWithoutClientInput[]
    createMany?: ServicesCreateManyClientInputEnvelope
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
  }

  export type ClientRequestCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput> | ClientRequestCreateWithoutClientInput[] | ClientRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientInput | ClientRequestCreateOrConnectWithoutClientInput[]
    createMany?: ClientRequestCreateManyClientInputEnvelope
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
  }

  export type ProposalCreateNestedManyWithoutClientInput = {
    create?: XOR<ProposalCreateWithoutClientInput, ProposalUncheckedCreateWithoutClientInput> | ProposalCreateWithoutClientInput[] | ProposalUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientInput | ProposalCreateOrConnectWithoutClientInput[]
    createMany?: ProposalCreateManyClientInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type NegotiateCreateNestedManyWithoutClientInput = {
    create?: XOR<NegotiateCreateWithoutClientInput, NegotiateUncheckedCreateWithoutClientInput> | NegotiateCreateWithoutClientInput[] | NegotiateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutClientInput | NegotiateCreateOrConnectWithoutClientInput[]
    createMany?: NegotiateCreateManyClientInputEnvelope
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ServicesUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ServicesCreateWithoutClientInput, ServicesUncheckedCreateWithoutClientInput> | ServicesCreateWithoutClientInput[] | ServicesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutClientInput | ServicesCreateOrConnectWithoutClientInput[]
    createMany?: ServicesCreateManyClientInputEnvelope
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
  }

  export type ClientRequestUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput> | ClientRequestCreateWithoutClientInput[] | ClientRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientInput | ClientRequestCreateOrConnectWithoutClientInput[]
    createMany?: ClientRequestCreateManyClientInputEnvelope
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProposalCreateWithoutClientInput, ProposalUncheckedCreateWithoutClientInput> | ProposalCreateWithoutClientInput[] | ProposalUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientInput | ProposalCreateOrConnectWithoutClientInput[]
    createMany?: ProposalCreateManyClientInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type NegotiateUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<NegotiateCreateWithoutClientInput, NegotiateUncheckedCreateWithoutClientInput> | NegotiateCreateWithoutClientInput[] | NegotiateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutClientInput | NegotiateCreateOrConnectWithoutClientInput[]
    createMany?: NegotiateCreateManyClientInputEnvelope
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumUserTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.UserTypeEnum | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type ServicesUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServicesCreateWithoutClientInput, ServicesUncheckedCreateWithoutClientInput> | ServicesCreateWithoutClientInput[] | ServicesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutClientInput | ServicesCreateOrConnectWithoutClientInput[]
    upsert?: ServicesUpsertWithWhereUniqueWithoutClientInput | ServicesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServicesCreateManyClientInputEnvelope
    set?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    disconnect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    delete?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    update?: ServicesUpdateWithWhereUniqueWithoutClientInput | ServicesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServicesUpdateManyWithWhereWithoutClientInput | ServicesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
  }

  export type ClientRequestUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput> | ClientRequestCreateWithoutClientInput[] | ClientRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientInput | ClientRequestCreateOrConnectWithoutClientInput[]
    upsert?: ClientRequestUpsertWithWhereUniqueWithoutClientInput | ClientRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientRequestCreateManyClientInputEnvelope
    set?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    disconnect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    delete?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    update?: ClientRequestUpdateWithWhereUniqueWithoutClientInput | ClientRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientRequestUpdateManyWithWhereWithoutClientInput | ClientRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
  }

  export type ProposalUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProposalCreateWithoutClientInput, ProposalUncheckedCreateWithoutClientInput> | ProposalCreateWithoutClientInput[] | ProposalUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientInput | ProposalCreateOrConnectWithoutClientInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutClientInput | ProposalUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProposalCreateManyClientInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutClientInput | ProposalUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutClientInput | ProposalUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type NegotiateUpdateManyWithoutClientNestedInput = {
    create?: XOR<NegotiateCreateWithoutClientInput, NegotiateUncheckedCreateWithoutClientInput> | NegotiateCreateWithoutClientInput[] | NegotiateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutClientInput | NegotiateCreateOrConnectWithoutClientInput[]
    upsert?: NegotiateUpsertWithWhereUniqueWithoutClientInput | NegotiateUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: NegotiateCreateManyClientInputEnvelope
    set?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    disconnect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    delete?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    update?: NegotiateUpdateWithWhereUniqueWithoutClientInput | NegotiateUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: NegotiateUpdateManyWithWhereWithoutClientInput | NegotiateUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: NegotiateScalarWhereInput | NegotiateScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ServicesUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServicesCreateWithoutClientInput, ServicesUncheckedCreateWithoutClientInput> | ServicesCreateWithoutClientInput[] | ServicesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutClientInput | ServicesCreateOrConnectWithoutClientInput[]
    upsert?: ServicesUpsertWithWhereUniqueWithoutClientInput | ServicesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServicesCreateManyClientInputEnvelope
    set?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    disconnect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    delete?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    update?: ServicesUpdateWithWhereUniqueWithoutClientInput | ServicesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServicesUpdateManyWithWhereWithoutClientInput | ServicesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
  }

  export type ClientRequestUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput> | ClientRequestCreateWithoutClientInput[] | ClientRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientInput | ClientRequestCreateOrConnectWithoutClientInput[]
    upsert?: ClientRequestUpsertWithWhereUniqueWithoutClientInput | ClientRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientRequestCreateManyClientInputEnvelope
    set?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    disconnect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    delete?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    update?: ClientRequestUpdateWithWhereUniqueWithoutClientInput | ClientRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientRequestUpdateManyWithWhereWithoutClientInput | ClientRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProposalCreateWithoutClientInput, ProposalUncheckedCreateWithoutClientInput> | ProposalCreateWithoutClientInput[] | ProposalUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientInput | ProposalCreateOrConnectWithoutClientInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutClientInput | ProposalUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProposalCreateManyClientInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutClientInput | ProposalUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutClientInput | ProposalUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type NegotiateUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<NegotiateCreateWithoutClientInput, NegotiateUncheckedCreateWithoutClientInput> | NegotiateCreateWithoutClientInput[] | NegotiateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutClientInput | NegotiateCreateOrConnectWithoutClientInput[]
    upsert?: NegotiateUpsertWithWhereUniqueWithoutClientInput | NegotiateUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: NegotiateCreateManyClientInputEnvelope
    set?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    disconnect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    delete?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    update?: NegotiateUpdateWithWhereUniqueWithoutClientInput | NegotiateUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: NegotiateUpdateManyWithWhereWithoutClientInput | NegotiateUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: NegotiateScalarWhereInput | NegotiateScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutServiceInput = {
    create?: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceInput
    connect?: UserWhereUniqueInput
  }

  export type NegotiateCreateNestedManyWithoutServiceInput = {
    create?: XOR<NegotiateCreateWithoutServiceInput, NegotiateUncheckedCreateWithoutServiceInput> | NegotiateCreateWithoutServiceInput[] | NegotiateUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutServiceInput | NegotiateCreateOrConnectWithoutServiceInput[]
    createMany?: NegotiateCreateManyServiceInputEnvelope
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
  }

  export type ClientRequestCreateNestedManyWithoutServiceInput = {
    create?: XOR<ClientRequestCreateWithoutServiceInput, ClientRequestUncheckedCreateWithoutServiceInput> | ClientRequestCreateWithoutServiceInput[] | ClientRequestUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutServiceInput | ClientRequestCreateOrConnectWithoutServiceInput[]
    createMany?: ClientRequestCreateManyServiceInputEnvelope
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
  }

  export type ProposalCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProposalCreateWithoutServiceInput, ProposalUncheckedCreateWithoutServiceInput> | ProposalCreateWithoutServiceInput[] | ProposalUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutServiceInput | ProposalCreateOrConnectWithoutServiceInput[]
    createMany?: ProposalCreateManyServiceInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput> | ProjectCreateWithoutServiceInput[] | ProjectUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutServiceInput | ProjectCreateOrConnectWithoutServiceInput[]
    createMany?: ProjectCreateManyServiceInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type NegotiateUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<NegotiateCreateWithoutServiceInput, NegotiateUncheckedCreateWithoutServiceInput> | NegotiateCreateWithoutServiceInput[] | NegotiateUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutServiceInput | NegotiateCreateOrConnectWithoutServiceInput[]
    createMany?: NegotiateCreateManyServiceInputEnvelope
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
  }

  export type ClientRequestUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ClientRequestCreateWithoutServiceInput, ClientRequestUncheckedCreateWithoutServiceInput> | ClientRequestCreateWithoutServiceInput[] | ClientRequestUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutServiceInput | ClientRequestCreateOrConnectWithoutServiceInput[]
    createMany?: ClientRequestCreateManyServiceInputEnvelope
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProposalCreateWithoutServiceInput, ProposalUncheckedCreateWithoutServiceInput> | ProposalCreateWithoutServiceInput[] | ProposalUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutServiceInput | ProposalCreateOrConnectWithoutServiceInput[]
    createMany?: ProposalCreateManyServiceInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput> | ProjectCreateWithoutServiceInput[] | ProjectUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutServiceInput | ProjectCreateOrConnectWithoutServiceInput[]
    createMany?: ProjectCreateManyServiceInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EnumserviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.serviceStatus
  }

  export type UserUpdateOneWithoutServiceNestedInput = {
    create?: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceInput
    upsert?: UserUpsertWithoutServiceInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServiceInput, UserUpdateWithoutServiceInput>, UserUncheckedUpdateWithoutServiceInput>
  }

  export type NegotiateUpdateManyWithoutServiceNestedInput = {
    create?: XOR<NegotiateCreateWithoutServiceInput, NegotiateUncheckedCreateWithoutServiceInput> | NegotiateCreateWithoutServiceInput[] | NegotiateUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutServiceInput | NegotiateCreateOrConnectWithoutServiceInput[]
    upsert?: NegotiateUpsertWithWhereUniqueWithoutServiceInput | NegotiateUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: NegotiateCreateManyServiceInputEnvelope
    set?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    disconnect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    delete?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    update?: NegotiateUpdateWithWhereUniqueWithoutServiceInput | NegotiateUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: NegotiateUpdateManyWithWhereWithoutServiceInput | NegotiateUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: NegotiateScalarWhereInput | NegotiateScalarWhereInput[]
  }

  export type ClientRequestUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ClientRequestCreateWithoutServiceInput, ClientRequestUncheckedCreateWithoutServiceInput> | ClientRequestCreateWithoutServiceInput[] | ClientRequestUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutServiceInput | ClientRequestCreateOrConnectWithoutServiceInput[]
    upsert?: ClientRequestUpsertWithWhereUniqueWithoutServiceInput | ClientRequestUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ClientRequestCreateManyServiceInputEnvelope
    set?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    disconnect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    delete?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    update?: ClientRequestUpdateWithWhereUniqueWithoutServiceInput | ClientRequestUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ClientRequestUpdateManyWithWhereWithoutServiceInput | ClientRequestUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
  }

  export type ProposalUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProposalCreateWithoutServiceInput, ProposalUncheckedCreateWithoutServiceInput> | ProposalCreateWithoutServiceInput[] | ProposalUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutServiceInput | ProposalCreateOrConnectWithoutServiceInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutServiceInput | ProposalUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProposalCreateManyServiceInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutServiceInput | ProposalUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutServiceInput | ProposalUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput> | ProjectCreateWithoutServiceInput[] | ProjectUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutServiceInput | ProjectCreateOrConnectWithoutServiceInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutServiceInput | ProjectUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProjectCreateManyServiceInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutServiceInput | ProjectUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutServiceInput | ProjectUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type NegotiateUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<NegotiateCreateWithoutServiceInput, NegotiateUncheckedCreateWithoutServiceInput> | NegotiateCreateWithoutServiceInput[] | NegotiateUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutServiceInput | NegotiateCreateOrConnectWithoutServiceInput[]
    upsert?: NegotiateUpsertWithWhereUniqueWithoutServiceInput | NegotiateUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: NegotiateCreateManyServiceInputEnvelope
    set?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    disconnect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    delete?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    update?: NegotiateUpdateWithWhereUniqueWithoutServiceInput | NegotiateUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: NegotiateUpdateManyWithWhereWithoutServiceInput | NegotiateUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: NegotiateScalarWhereInput | NegotiateScalarWhereInput[]
  }

  export type ClientRequestUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ClientRequestCreateWithoutServiceInput, ClientRequestUncheckedCreateWithoutServiceInput> | ClientRequestCreateWithoutServiceInput[] | ClientRequestUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutServiceInput | ClientRequestCreateOrConnectWithoutServiceInput[]
    upsert?: ClientRequestUpsertWithWhereUniqueWithoutServiceInput | ClientRequestUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ClientRequestCreateManyServiceInputEnvelope
    set?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    disconnect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    delete?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    update?: ClientRequestUpdateWithWhereUniqueWithoutServiceInput | ClientRequestUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ClientRequestUpdateManyWithWhereWithoutServiceInput | ClientRequestUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProposalCreateWithoutServiceInput, ProposalUncheckedCreateWithoutServiceInput> | ProposalCreateWithoutServiceInput[] | ProposalUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutServiceInput | ProposalCreateOrConnectWithoutServiceInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutServiceInput | ProposalUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProposalCreateManyServiceInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutServiceInput | ProposalUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutServiceInput | ProposalUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput> | ProjectCreateWithoutServiceInput[] | ProjectUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutServiceInput | ProjectCreateOrConnectWithoutServiceInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutServiceInput | ProjectUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProjectCreateManyServiceInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutServiceInput | ProjectUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutServiceInput | ProjectUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInput
    connect?: UserWhereUniqueInput
  }

  export type ServicesCreateNestedOneWithoutClientRequestInput = {
    create?: XOR<ServicesCreateWithoutClientRequestInput, ServicesUncheckedCreateWithoutClientRequestInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutClientRequestInput
    connect?: ServicesWhereUniqueInput
  }

  export type ProposalCreateNestedManyWithoutClientRequestInput = {
    create?: XOR<ProposalCreateWithoutClientRequestInput, ProposalUncheckedCreateWithoutClientRequestInput> | ProposalCreateWithoutClientRequestInput[] | ProposalUncheckedCreateWithoutClientRequestInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientRequestInput | ProposalCreateOrConnectWithoutClientRequestInput[]
    createMany?: ProposalCreateManyClientRequestInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutClientRequestInput = {
    create?: XOR<ProposalCreateWithoutClientRequestInput, ProposalUncheckedCreateWithoutClientRequestInput> | ProposalCreateWithoutClientRequestInput[] | ProposalUncheckedCreateWithoutClientRequestInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientRequestInput | ProposalCreateOrConnectWithoutClientRequestInput[]
    createMany?: ProposalCreateManyClientRequestInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type EnumClientRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClientRequestStatus
  }

  export type UserUpdateOneWithoutClientNestedInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInput
    upsert?: UserUpsertWithoutClientInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientInput, UserUpdateWithoutClientInput>, UserUncheckedUpdateWithoutClientInput>
  }

  export type ServicesUpdateOneWithoutClientRequestNestedInput = {
    create?: XOR<ServicesCreateWithoutClientRequestInput, ServicesUncheckedCreateWithoutClientRequestInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutClientRequestInput
    upsert?: ServicesUpsertWithoutClientRequestInput
    disconnect?: ServicesWhereInput | boolean
    delete?: ServicesWhereInput | boolean
    connect?: ServicesWhereUniqueInput
    update?: XOR<XOR<ServicesUpdateToOneWithWhereWithoutClientRequestInput, ServicesUpdateWithoutClientRequestInput>, ServicesUncheckedUpdateWithoutClientRequestInput>
  }

  export type ProposalUpdateManyWithoutClientRequestNestedInput = {
    create?: XOR<ProposalCreateWithoutClientRequestInput, ProposalUncheckedCreateWithoutClientRequestInput> | ProposalCreateWithoutClientRequestInput[] | ProposalUncheckedCreateWithoutClientRequestInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientRequestInput | ProposalCreateOrConnectWithoutClientRequestInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutClientRequestInput | ProposalUpsertWithWhereUniqueWithoutClientRequestInput[]
    createMany?: ProposalCreateManyClientRequestInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutClientRequestInput | ProposalUpdateWithWhereUniqueWithoutClientRequestInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutClientRequestInput | ProposalUpdateManyWithWhereWithoutClientRequestInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutClientRequestNestedInput = {
    create?: XOR<ProposalCreateWithoutClientRequestInput, ProposalUncheckedCreateWithoutClientRequestInput> | ProposalCreateWithoutClientRequestInput[] | ProposalUncheckedCreateWithoutClientRequestInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientRequestInput | ProposalCreateOrConnectWithoutClientRequestInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutClientRequestInput | ProposalUpsertWithWhereUniqueWithoutClientRequestInput[]
    createMany?: ProposalCreateManyClientRequestInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutClientRequestInput | ProposalUpdateWithWhereUniqueWithoutClientRequestInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutClientRequestInput | ProposalUpdateManyWithWhereWithoutClientRequestInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ClientRequestCreateNestedOneWithoutProposalsInput = {
    create?: XOR<ClientRequestCreateWithoutProposalsInput, ClientRequestUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: ClientRequestCreateOrConnectWithoutProposalsInput
    connect?: ClientRequestWhereUniqueInput
  }

  export type ServicesCreateNestedOneWithoutProposalInput = {
    create?: XOR<ServicesCreateWithoutProposalInput, ServicesUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutProposalInput
    connect?: ServicesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProposalInput = {
    create?: XOR<UserCreateWithoutProposalInput, UserUncheckedCreateWithoutProposalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalInput
    connect?: UserWhereUniqueInput
  }

  export type NegotiateCreateNestedManyWithoutProposalInput = {
    create?: XOR<NegotiateCreateWithoutProposalInput, NegotiateUncheckedCreateWithoutProposalInput> | NegotiateCreateWithoutProposalInput[] | NegotiateUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutProposalInput | NegotiateCreateOrConnectWithoutProposalInput[]
    createMany?: NegotiateCreateManyProposalInputEnvelope
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutProposalInput = {
    create?: XOR<ProjectCreateWithoutProposalInput, ProjectUncheckedCreateWithoutProposalInput> | ProjectCreateWithoutProposalInput[] | ProjectUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProposalInput | ProjectCreateOrConnectWithoutProposalInput[]
    createMany?: ProjectCreateManyProposalInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type NegotiateUncheckedCreateNestedManyWithoutProposalInput = {
    create?: XOR<NegotiateCreateWithoutProposalInput, NegotiateUncheckedCreateWithoutProposalInput> | NegotiateCreateWithoutProposalInput[] | NegotiateUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutProposalInput | NegotiateCreateOrConnectWithoutProposalInput[]
    createMany?: NegotiateCreateManyProposalInputEnvelope
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutProposalInput = {
    create?: XOR<ProjectCreateWithoutProposalInput, ProjectUncheckedCreateWithoutProposalInput> | ProjectCreateWithoutProposalInput[] | ProjectUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProposalInput | ProjectCreateOrConnectWithoutProposalInput[]
    createMany?: ProjectCreateManyProposalInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProposalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProposalStatus
  }

  export type ClientRequestUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<ClientRequestCreateWithoutProposalsInput, ClientRequestUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: ClientRequestCreateOrConnectWithoutProposalsInput
    upsert?: ClientRequestUpsertWithoutProposalsInput
    connect?: ClientRequestWhereUniqueInput
    update?: XOR<XOR<ClientRequestUpdateToOneWithWhereWithoutProposalsInput, ClientRequestUpdateWithoutProposalsInput>, ClientRequestUncheckedUpdateWithoutProposalsInput>
  }

  export type ServicesUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<ServicesCreateWithoutProposalInput, ServicesUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutProposalInput
    upsert?: ServicesUpsertWithoutProposalInput
    connect?: ServicesWhereUniqueInput
    update?: XOR<XOR<ServicesUpdateToOneWithWhereWithoutProposalInput, ServicesUpdateWithoutProposalInput>, ServicesUncheckedUpdateWithoutProposalInput>
  }

  export type UserUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<UserCreateWithoutProposalInput, UserUncheckedCreateWithoutProposalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalInput
    upsert?: UserUpsertWithoutProposalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProposalInput, UserUpdateWithoutProposalInput>, UserUncheckedUpdateWithoutProposalInput>
  }

  export type NegotiateUpdateManyWithoutProposalNestedInput = {
    create?: XOR<NegotiateCreateWithoutProposalInput, NegotiateUncheckedCreateWithoutProposalInput> | NegotiateCreateWithoutProposalInput[] | NegotiateUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutProposalInput | NegotiateCreateOrConnectWithoutProposalInput[]
    upsert?: NegotiateUpsertWithWhereUniqueWithoutProposalInput | NegotiateUpsertWithWhereUniqueWithoutProposalInput[]
    createMany?: NegotiateCreateManyProposalInputEnvelope
    set?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    disconnect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    delete?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    update?: NegotiateUpdateWithWhereUniqueWithoutProposalInput | NegotiateUpdateWithWhereUniqueWithoutProposalInput[]
    updateMany?: NegotiateUpdateManyWithWhereWithoutProposalInput | NegotiateUpdateManyWithWhereWithoutProposalInput[]
    deleteMany?: NegotiateScalarWhereInput | NegotiateScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutProposalNestedInput = {
    create?: XOR<ProjectCreateWithoutProposalInput, ProjectUncheckedCreateWithoutProposalInput> | ProjectCreateWithoutProposalInput[] | ProjectUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProposalInput | ProjectCreateOrConnectWithoutProposalInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProposalInput | ProjectUpsertWithWhereUniqueWithoutProposalInput[]
    createMany?: ProjectCreateManyProposalInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProposalInput | ProjectUpdateWithWhereUniqueWithoutProposalInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProposalInput | ProjectUpdateManyWithWhereWithoutProposalInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type NegotiateUncheckedUpdateManyWithoutProposalNestedInput = {
    create?: XOR<NegotiateCreateWithoutProposalInput, NegotiateUncheckedCreateWithoutProposalInput> | NegotiateCreateWithoutProposalInput[] | NegotiateUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: NegotiateCreateOrConnectWithoutProposalInput | NegotiateCreateOrConnectWithoutProposalInput[]
    upsert?: NegotiateUpsertWithWhereUniqueWithoutProposalInput | NegotiateUpsertWithWhereUniqueWithoutProposalInput[]
    createMany?: NegotiateCreateManyProposalInputEnvelope
    set?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    disconnect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    delete?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    connect?: NegotiateWhereUniqueInput | NegotiateWhereUniqueInput[]
    update?: NegotiateUpdateWithWhereUniqueWithoutProposalInput | NegotiateUpdateWithWhereUniqueWithoutProposalInput[]
    updateMany?: NegotiateUpdateManyWithWhereWithoutProposalInput | NegotiateUpdateManyWithWhereWithoutProposalInput[]
    deleteMany?: NegotiateScalarWhereInput | NegotiateScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutProposalNestedInput = {
    create?: XOR<ProjectCreateWithoutProposalInput, ProjectUncheckedCreateWithoutProposalInput> | ProjectCreateWithoutProposalInput[] | ProjectUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProposalInput | ProjectCreateOrConnectWithoutProposalInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProposalInput | ProjectUpsertWithWhereUniqueWithoutProposalInput[]
    createMany?: ProjectCreateManyProposalInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProposalInput | ProjectUpdateWithWhereUniqueWithoutProposalInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProposalInput | ProjectUpdateManyWithWhereWithoutProposalInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNegotiationInput = {
    create?: XOR<UserCreateWithoutNegotiationInput, UserUncheckedCreateWithoutNegotiationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNegotiationInput
    connect?: UserWhereUniqueInput
  }

  export type ProposalCreateNestedOneWithoutNegotiateInput = {
    create?: XOR<ProposalCreateWithoutNegotiateInput, ProposalUncheckedCreateWithoutNegotiateInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutNegotiateInput
    connect?: ProposalWhereUniqueInput
  }

  export type ServicesCreateNestedOneWithoutNegotiationInput = {
    create?: XOR<ServicesCreateWithoutNegotiationInput, ServicesUncheckedCreateWithoutNegotiationInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutNegotiationInput
    connect?: ServicesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNegotiationNestedInput = {
    create?: XOR<UserCreateWithoutNegotiationInput, UserUncheckedCreateWithoutNegotiationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNegotiationInput
    upsert?: UserUpsertWithoutNegotiationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNegotiationInput, UserUpdateWithoutNegotiationInput>, UserUncheckedUpdateWithoutNegotiationInput>
  }

  export type ProposalUpdateOneRequiredWithoutNegotiateNestedInput = {
    create?: XOR<ProposalCreateWithoutNegotiateInput, ProposalUncheckedCreateWithoutNegotiateInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutNegotiateInput
    upsert?: ProposalUpsertWithoutNegotiateInput
    connect?: ProposalWhereUniqueInput
    update?: XOR<XOR<ProposalUpdateToOneWithWhereWithoutNegotiateInput, ProposalUpdateWithoutNegotiateInput>, ProposalUncheckedUpdateWithoutNegotiateInput>
  }

  export type ServicesUpdateOneRequiredWithoutNegotiationNestedInput = {
    create?: XOR<ServicesCreateWithoutNegotiationInput, ServicesUncheckedCreateWithoutNegotiationInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutNegotiationInput
    upsert?: ServicesUpsertWithoutNegotiationInput
    connect?: ServicesWhereUniqueInput
    update?: XOR<XOR<ServicesUpdateToOneWithWhereWithoutNegotiationInput, ServicesUpdateWithoutNegotiationInput>, ServicesUncheckedUpdateWithoutNegotiationInput>
  }

  export type ServicesCreateNestedOneWithoutProjectInput = {
    create?: XOR<ServicesCreateWithoutProjectInput, ServicesUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutProjectInput
    connect?: ServicesWhereUniqueInput
  }

  export type ProposalCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProposalCreateWithoutProjectInput, ProposalUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutProjectInput
    connect?: ProposalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ServicesUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<ServicesCreateWithoutProjectInput, ServicesUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutProjectInput
    upsert?: ServicesUpsertWithoutProjectInput
    connect?: ServicesWhereUniqueInput
    update?: XOR<XOR<ServicesUpdateToOneWithWhereWithoutProjectInput, ServicesUpdateWithoutProjectInput>, ServicesUncheckedUpdateWithoutProjectInput>
  }

  export type ProposalUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<ProposalCreateWithoutProjectInput, ProposalUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutProjectInput
    upsert?: ProposalUpsertWithoutProjectInput
    connect?: ProposalWhereUniqueInput
    update?: XOR<XOR<ProposalUpdateToOneWithWhereWithoutProjectInput, ProposalUpdateWithoutProjectInput>, ProposalUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserTypeEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypeEnum | EnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserTypeEnum[] | ListEnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserTypeEnum[] | ListEnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeEnumNullableFilter<$PrismaModel> | $Enums.UserTypeEnum | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserTypeEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypeEnum | EnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserTypeEnum[] | ListEnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserTypeEnum[] | ListEnumUserTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserTypeEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserTypeEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumUserTypeEnumNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumserviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.serviceStatus | EnumserviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumserviceStatusFilter<$PrismaModel> | $Enums.serviceStatus
  }

  export type NestedEnumserviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.serviceStatus | EnumserviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.serviceStatus[] | ListEnumserviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumserviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.serviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumserviceStatusFilter<$PrismaModel>
    _max?: NestedEnumserviceStatusFilter<$PrismaModel>
  }

  export type NestedEnumClientRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientRequestStatus | EnumClientRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientRequestStatus[] | ListEnumClientRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientRequestStatus[] | ListEnumClientRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientRequestStatusFilter<$PrismaModel> | $Enums.ClientRequestStatus
  }

  export type NestedEnumClientRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientRequestStatus | EnumClientRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientRequestStatus[] | ListEnumClientRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientRequestStatus[] | ListEnumClientRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumClientRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type ServicesCreateWithoutClientInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    Negotiation?: NegotiateCreateNestedManyWithoutServiceInput
    clientRequest?: ClientRequestCreateNestedManyWithoutServiceInput
    Proposal?: ProposalCreateNestedManyWithoutServiceInput
    Project?: ProjectCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateWithoutClientInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutServiceInput
    clientRequest?: ClientRequestUncheckedCreateNestedManyWithoutServiceInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutServiceInput
    Project?: ProjectUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesCreateOrConnectWithoutClientInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutClientInput, ServicesUncheckedCreateWithoutClientInput>
  }

  export type ServicesCreateManyClientInputEnvelope = {
    data: ServicesCreateManyClientInput | ServicesCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientRequestCreateWithoutClientInput = {
    id?: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
    service?: ServicesCreateNestedOneWithoutClientRequestInput
    proposals?: ProposalCreateNestedManyWithoutClientRequestInput
  }

  export type ClientRequestUncheckedCreateWithoutClientInput = {
    id?: string
    serviceId: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutClientRequestInput
  }

  export type ClientRequestCreateOrConnectWithoutClientInput = {
    where: ClientRequestWhereUniqueInput
    create: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput>
  }

  export type ClientRequestCreateManyClientInputEnvelope = {
    data: ClientRequestCreateManyClientInput | ClientRequestCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProposalCreateWithoutClientInput = {
    id?: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    clientRequest: ClientRequestCreateNestedOneWithoutProposalsInput
    service: ServicesCreateNestedOneWithoutProposalInput
    Negotiate?: NegotiateCreateNestedManyWithoutProposalInput
    Project?: ProjectCreateNestedManyWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutClientInput = {
    id?: string
    client_request_id: string
    service_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    Negotiate?: NegotiateUncheckedCreateNestedManyWithoutProposalInput
    Project?: ProjectUncheckedCreateNestedManyWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutClientInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutClientInput, ProposalUncheckedCreateWithoutClientInput>
  }

  export type ProposalCreateManyClientInputEnvelope = {
    data: ProposalCreateManyClientInput | ProposalCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type NegotiateCreateWithoutClientInput = {
    id?: string
    NegotiatingText: string
    proposal: ProposalCreateNestedOneWithoutNegotiateInput
    service: ServicesCreateNestedOneWithoutNegotiationInput
  }

  export type NegotiateUncheckedCreateWithoutClientInput = {
    id?: string
    proposal_id: string
    serviceId: string
    NegotiatingText: string
  }

  export type NegotiateCreateOrConnectWithoutClientInput = {
    where: NegotiateWhereUniqueInput
    create: XOR<NegotiateCreateWithoutClientInput, NegotiateUncheckedCreateWithoutClientInput>
  }

  export type NegotiateCreateManyClientInputEnvelope = {
    data: NegotiateCreateManyClientInput | NegotiateCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutClientInput = {
    id?: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServicesCreateNestedOneWithoutProjectInput
    proposal: ProposalCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutClientInput = {
    id?: string
    service_id: string
    proposal_id: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutClientInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectCreateManyClientInputEnvelope = {
    data: ProjectCreateManyClientInput | ProjectCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesUpsertWithWhereUniqueWithoutClientInput = {
    where: ServicesWhereUniqueInput
    update: XOR<ServicesUpdateWithoutClientInput, ServicesUncheckedUpdateWithoutClientInput>
    create: XOR<ServicesCreateWithoutClientInput, ServicesUncheckedCreateWithoutClientInput>
  }

  export type ServicesUpdateWithWhereUniqueWithoutClientInput = {
    where: ServicesWhereUniqueInput
    data: XOR<ServicesUpdateWithoutClientInput, ServicesUncheckedUpdateWithoutClientInput>
  }

  export type ServicesUpdateManyWithWhereWithoutClientInput = {
    where: ServicesScalarWhereInput
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyWithoutClientInput>
  }

  export type ServicesScalarWhereInput = {
    AND?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
    OR?: ServicesScalarWhereInput[]
    NOT?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
    id?: StringFilter<"Services"> | string
    clientId?: StringNullableFilter<"Services"> | string | null
    ServiceName?: StringFilter<"Services"> | string
    Description?: StringFilter<"Services"> | string
    status?: EnumserviceStatusFilter<"Services"> | $Enums.serviceStatus
    createdAt?: DateTimeFilter<"Services"> | Date | string
    DateCreated?: DateTimeFilter<"Services"> | Date | string
  }

  export type ClientRequestUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientRequestWhereUniqueInput
    update: XOR<ClientRequestUpdateWithoutClientInput, ClientRequestUncheckedUpdateWithoutClientInput>
    create: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput>
  }

  export type ClientRequestUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientRequestWhereUniqueInput
    data: XOR<ClientRequestUpdateWithoutClientInput, ClientRequestUncheckedUpdateWithoutClientInput>
  }

  export type ClientRequestUpdateManyWithWhereWithoutClientInput = {
    where: ClientRequestScalarWhereInput
    data: XOR<ClientRequestUpdateManyMutationInput, ClientRequestUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientRequestScalarWhereInput = {
    AND?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
    OR?: ClientRequestScalarWhereInput[]
    NOT?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
    id?: StringFilter<"ClientRequest"> | string
    serviceId?: StringFilter<"ClientRequest"> | string
    clientId?: StringFilter<"ClientRequest"> | string
    request_status?: EnumClientRequestStatusFilter<"ClientRequest"> | $Enums.ClientRequestStatus
    createdAt?: DateTimeFilter<"ClientRequest"> | Date | string
  }

  export type ProposalUpsertWithWhereUniqueWithoutClientInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutClientInput, ProposalUncheckedUpdateWithoutClientInput>
    create: XOR<ProposalCreateWithoutClientInput, ProposalUncheckedCreateWithoutClientInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutClientInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutClientInput, ProposalUncheckedUpdateWithoutClientInput>
  }

  export type ProposalUpdateManyWithWhereWithoutClientInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutClientInput>
  }

  export type ProposalScalarWhereInput = {
    AND?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    OR?: ProposalScalarWhereInput[]
    NOT?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    id?: StringFilter<"Proposal"> | string
    client_request_id?: StringFilter<"Proposal"> | string
    service_id?: StringFilter<"Proposal"> | string
    client_id?: StringFilter<"Proposal"> | string
    contract_id?: StringNullableFilter<"Proposal"> | string | null
    scope?: StringFilter<"Proposal"> | string
    deliverables?: StringFilter<"Proposal"> | string
    timeline?: StringFilter<"Proposal"> | string
    pricing?: IntFilter<"Proposal"> | number
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    termsAndConditions?: StringFilter<"Proposal"> | string
  }

  export type NegotiateUpsertWithWhereUniqueWithoutClientInput = {
    where: NegotiateWhereUniqueInput
    update: XOR<NegotiateUpdateWithoutClientInput, NegotiateUncheckedUpdateWithoutClientInput>
    create: XOR<NegotiateCreateWithoutClientInput, NegotiateUncheckedCreateWithoutClientInput>
  }

  export type NegotiateUpdateWithWhereUniqueWithoutClientInput = {
    where: NegotiateWhereUniqueInput
    data: XOR<NegotiateUpdateWithoutClientInput, NegotiateUncheckedUpdateWithoutClientInput>
  }

  export type NegotiateUpdateManyWithWhereWithoutClientInput = {
    where: NegotiateScalarWhereInput
    data: XOR<NegotiateUpdateManyMutationInput, NegotiateUncheckedUpdateManyWithoutClientInput>
  }

  export type NegotiateScalarWhereInput = {
    AND?: NegotiateScalarWhereInput | NegotiateScalarWhereInput[]
    OR?: NegotiateScalarWhereInput[]
    NOT?: NegotiateScalarWhereInput | NegotiateScalarWhereInput[]
    id?: StringFilter<"Negotiate"> | string
    clientId?: StringFilter<"Negotiate"> | string
    proposal_id?: StringFilter<"Negotiate"> | string
    serviceId?: StringFilter<"Negotiate"> | string
    NegotiatingText?: StringFilter<"Negotiate"> | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
  }

  export type ProjectUpdateManyWithWhereWithoutClientInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutClientInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    service_id?: StringFilter<"Project"> | string
    proposal_id?: StringFilter<"Project"> | string
    client_id?: StringFilter<"Project"> | string
    title?: StringNullableFilter<"Project"> | string | null
    projectStatus?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    progress?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    createdAt?: Date | string
    service?: ServicesCreateNestedManyWithoutClientInput
    client?: ClientRequestCreateNestedManyWithoutClientInput
    Proposal?: ProposalCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateCreateNestedManyWithoutClientInput
    project?: ProjectCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    createdAt?: Date | string
    service?: ServicesUncheckedCreateNestedManyWithoutClientInput
    client?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutClientInput
    project?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    contactPerson?: StringNullableFilter<"User"> | string | null
    fullName?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    companyWebsite?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    type?: EnumUserTypeEnumNullableFilter<"User"> | $Enums.UserTypeEnum | null
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutServiceInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    client?: ClientRequestCreateNestedManyWithoutClientInput
    Proposal?: ProposalCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateCreateNestedManyWithoutClientInput
    project?: ProjectCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutServiceInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    roleId: string
    createdAt?: Date | string
    client?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutClientInput
    project?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutServiceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput>
  }

  export type NegotiateCreateWithoutServiceInput = {
    id?: string
    NegotiatingText: string
    client: UserCreateNestedOneWithoutNegotiationInput
    proposal: ProposalCreateNestedOneWithoutNegotiateInput
  }

  export type NegotiateUncheckedCreateWithoutServiceInput = {
    id?: string
    clientId: string
    proposal_id: string
    NegotiatingText: string
  }

  export type NegotiateCreateOrConnectWithoutServiceInput = {
    where: NegotiateWhereUniqueInput
    create: XOR<NegotiateCreateWithoutServiceInput, NegotiateUncheckedCreateWithoutServiceInput>
  }

  export type NegotiateCreateManyServiceInputEnvelope = {
    data: NegotiateCreateManyServiceInput | NegotiateCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ClientRequestCreateWithoutServiceInput = {
    id?: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
    client?: UserCreateNestedOneWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutClientRequestInput
  }

  export type ClientRequestUncheckedCreateWithoutServiceInput = {
    id?: string
    clientId: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutClientRequestInput
  }

  export type ClientRequestCreateOrConnectWithoutServiceInput = {
    where: ClientRequestWhereUniqueInput
    create: XOR<ClientRequestCreateWithoutServiceInput, ClientRequestUncheckedCreateWithoutServiceInput>
  }

  export type ClientRequestCreateManyServiceInputEnvelope = {
    data: ClientRequestCreateManyServiceInput | ClientRequestCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProposalCreateWithoutServiceInput = {
    id?: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    clientRequest: ClientRequestCreateNestedOneWithoutProposalsInput
    client: UserCreateNestedOneWithoutProposalInput
    Negotiate?: NegotiateCreateNestedManyWithoutProposalInput
    Project?: ProjectCreateNestedManyWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutServiceInput = {
    id?: string
    client_request_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    Negotiate?: NegotiateUncheckedCreateNestedManyWithoutProposalInput
    Project?: ProjectUncheckedCreateNestedManyWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutServiceInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutServiceInput, ProposalUncheckedCreateWithoutServiceInput>
  }

  export type ProposalCreateManyServiceInputEnvelope = {
    data: ProposalCreateManyServiceInput | ProposalCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutServiceInput = {
    id?: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    proposal: ProposalCreateNestedOneWithoutProjectInput
    client: UserCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutServiceInput = {
    id?: string
    proposal_id: string
    client_id: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutServiceInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput>
  }

  export type ProjectCreateManyServiceInputEnvelope = {
    data: ProjectCreateManyServiceInput | ProjectCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutServiceInput = {
    update: XOR<UserUpdateWithoutServiceInput, UserUncheckedUpdateWithoutServiceInput>
    create: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServiceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServiceInput, UserUncheckedUpdateWithoutServiceInput>
  }

  export type UserUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    client?: ClientRequestUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUpdateManyWithoutClientNestedInput
    project?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUncheckedUpdateManyWithoutClientNestedInput
    project?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type NegotiateUpsertWithWhereUniqueWithoutServiceInput = {
    where: NegotiateWhereUniqueInput
    update: XOR<NegotiateUpdateWithoutServiceInput, NegotiateUncheckedUpdateWithoutServiceInput>
    create: XOR<NegotiateCreateWithoutServiceInput, NegotiateUncheckedCreateWithoutServiceInput>
  }

  export type NegotiateUpdateWithWhereUniqueWithoutServiceInput = {
    where: NegotiateWhereUniqueInput
    data: XOR<NegotiateUpdateWithoutServiceInput, NegotiateUncheckedUpdateWithoutServiceInput>
  }

  export type NegotiateUpdateManyWithWhereWithoutServiceInput = {
    where: NegotiateScalarWhereInput
    data: XOR<NegotiateUpdateManyMutationInput, NegotiateUncheckedUpdateManyWithoutServiceInput>
  }

  export type ClientRequestUpsertWithWhereUniqueWithoutServiceInput = {
    where: ClientRequestWhereUniqueInput
    update: XOR<ClientRequestUpdateWithoutServiceInput, ClientRequestUncheckedUpdateWithoutServiceInput>
    create: XOR<ClientRequestCreateWithoutServiceInput, ClientRequestUncheckedCreateWithoutServiceInput>
  }

  export type ClientRequestUpdateWithWhereUniqueWithoutServiceInput = {
    where: ClientRequestWhereUniqueInput
    data: XOR<ClientRequestUpdateWithoutServiceInput, ClientRequestUncheckedUpdateWithoutServiceInput>
  }

  export type ClientRequestUpdateManyWithWhereWithoutServiceInput = {
    where: ClientRequestScalarWhereInput
    data: XOR<ClientRequestUpdateManyMutationInput, ClientRequestUncheckedUpdateManyWithoutServiceInput>
  }

  export type ProposalUpsertWithWhereUniqueWithoutServiceInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutServiceInput, ProposalUncheckedUpdateWithoutServiceInput>
    create: XOR<ProposalCreateWithoutServiceInput, ProposalUncheckedCreateWithoutServiceInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutServiceInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutServiceInput, ProposalUncheckedUpdateWithoutServiceInput>
  }

  export type ProposalUpdateManyWithWhereWithoutServiceInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutServiceInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutServiceInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutServiceInput, ProjectUncheckedUpdateWithoutServiceInput>
    create: XOR<ProjectCreateWithoutServiceInput, ProjectUncheckedCreateWithoutServiceInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutServiceInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutServiceInput, ProjectUncheckedUpdateWithoutServiceInput>
  }

  export type ProjectUpdateManyWithWhereWithoutServiceInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutClientInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    service?: ServicesCreateNestedManyWithoutClientInput
    Proposal?: ProposalCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateCreateNestedManyWithoutClientInput
    project?: ProjectCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutClientInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    roleId: string
    createdAt?: Date | string
    service?: ServicesUncheckedCreateNestedManyWithoutClientInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutClientInput
    project?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutClientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
  }

  export type ServicesCreateWithoutClientRequestInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    client?: UserCreateNestedOneWithoutServiceInput
    Negotiation?: NegotiateCreateNestedManyWithoutServiceInput
    Proposal?: ProposalCreateNestedManyWithoutServiceInput
    Project?: ProjectCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateWithoutClientRequestInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutServiceInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutServiceInput
    Project?: ProjectUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesCreateOrConnectWithoutClientRequestInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutClientRequestInput, ServicesUncheckedCreateWithoutClientRequestInput>
  }

  export type ProposalCreateWithoutClientRequestInput = {
    id?: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    service: ServicesCreateNestedOneWithoutProposalInput
    client: UserCreateNestedOneWithoutProposalInput
    Negotiate?: NegotiateCreateNestedManyWithoutProposalInput
    Project?: ProjectCreateNestedManyWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutClientRequestInput = {
    id?: string
    service_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    Negotiate?: NegotiateUncheckedCreateNestedManyWithoutProposalInput
    Project?: ProjectUncheckedCreateNestedManyWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutClientRequestInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutClientRequestInput, ProposalUncheckedCreateWithoutClientRequestInput>
  }

  export type ProposalCreateManyClientRequestInputEnvelope = {
    data: ProposalCreateManyClientRequestInput | ProposalCreateManyClientRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientInput = {
    update: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
  }

  export type UserUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    service?: ServicesUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUpdateManyWithoutClientNestedInput
    project?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUncheckedUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUncheckedUpdateManyWithoutClientNestedInput
    project?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ServicesUpsertWithoutClientRequestInput = {
    update: XOR<ServicesUpdateWithoutClientRequestInput, ServicesUncheckedUpdateWithoutClientRequestInput>
    create: XOR<ServicesCreateWithoutClientRequestInput, ServicesUncheckedCreateWithoutClientRequestInput>
    where?: ServicesWhereInput
  }

  export type ServicesUpdateToOneWithWhereWithoutClientRequestInput = {
    where?: ServicesWhereInput
    data: XOR<ServicesUpdateWithoutClientRequestInput, ServicesUncheckedUpdateWithoutClientRequestInput>
  }

  export type ServicesUpdateWithoutClientRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutServiceNestedInput
    Negotiation?: NegotiateUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUpdateManyWithoutServiceNestedInput
    Project?: ProjectUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateWithoutClientRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    Negotiation?: NegotiateUncheckedUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutServiceNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ProposalUpsertWithWhereUniqueWithoutClientRequestInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutClientRequestInput, ProposalUncheckedUpdateWithoutClientRequestInput>
    create: XOR<ProposalCreateWithoutClientRequestInput, ProposalUncheckedCreateWithoutClientRequestInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutClientRequestInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutClientRequestInput, ProposalUncheckedUpdateWithoutClientRequestInput>
  }

  export type ProposalUpdateManyWithWhereWithoutClientRequestInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutClientRequestInput>
  }

  export type ClientRequestCreateWithoutProposalsInput = {
    id?: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
    client?: UserCreateNestedOneWithoutClientInput
    service?: ServicesCreateNestedOneWithoutClientRequestInput
  }

  export type ClientRequestUncheckedCreateWithoutProposalsInput = {
    id?: string
    serviceId: string
    clientId: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
  }

  export type ClientRequestCreateOrConnectWithoutProposalsInput = {
    where: ClientRequestWhereUniqueInput
    create: XOR<ClientRequestCreateWithoutProposalsInput, ClientRequestUncheckedCreateWithoutProposalsInput>
  }

  export type ServicesCreateWithoutProposalInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    client?: UserCreateNestedOneWithoutServiceInput
    Negotiation?: NegotiateCreateNestedManyWithoutServiceInput
    clientRequest?: ClientRequestCreateNestedManyWithoutServiceInput
    Project?: ProjectCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateWithoutProposalInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutServiceInput
    clientRequest?: ClientRequestUncheckedCreateNestedManyWithoutServiceInput
    Project?: ProjectUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesCreateOrConnectWithoutProposalInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutProposalInput, ServicesUncheckedCreateWithoutProposalInput>
  }

  export type UserCreateWithoutProposalInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    service?: ServicesCreateNestedManyWithoutClientInput
    client?: ClientRequestCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateCreateNestedManyWithoutClientInput
    project?: ProjectCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutProposalInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    roleId: string
    createdAt?: Date | string
    service?: ServicesUncheckedCreateNestedManyWithoutClientInput
    client?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutClientInput
    project?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutProposalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProposalInput, UserUncheckedCreateWithoutProposalInput>
  }

  export type NegotiateCreateWithoutProposalInput = {
    id?: string
    NegotiatingText: string
    client: UserCreateNestedOneWithoutNegotiationInput
    service: ServicesCreateNestedOneWithoutNegotiationInput
  }

  export type NegotiateUncheckedCreateWithoutProposalInput = {
    id?: string
    clientId: string
    serviceId: string
    NegotiatingText: string
  }

  export type NegotiateCreateOrConnectWithoutProposalInput = {
    where: NegotiateWhereUniqueInput
    create: XOR<NegotiateCreateWithoutProposalInput, NegotiateUncheckedCreateWithoutProposalInput>
  }

  export type NegotiateCreateManyProposalInputEnvelope = {
    data: NegotiateCreateManyProposalInput | NegotiateCreateManyProposalInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutProposalInput = {
    id?: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServicesCreateNestedOneWithoutProjectInput
    client: UserCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProposalInput = {
    id?: string
    service_id: string
    client_id: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutProposalInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProposalInput, ProjectUncheckedCreateWithoutProposalInput>
  }

  export type ProjectCreateManyProposalInputEnvelope = {
    data: ProjectCreateManyProposalInput | ProjectCreateManyProposalInput[]
    skipDuplicates?: boolean
  }

  export type ClientRequestUpsertWithoutProposalsInput = {
    update: XOR<ClientRequestUpdateWithoutProposalsInput, ClientRequestUncheckedUpdateWithoutProposalsInput>
    create: XOR<ClientRequestCreateWithoutProposalsInput, ClientRequestUncheckedCreateWithoutProposalsInput>
    where?: ClientRequestWhereInput
  }

  export type ClientRequestUpdateToOneWithWhereWithoutProposalsInput = {
    where?: ClientRequestWhereInput
    data: XOR<ClientRequestUpdateWithoutProposalsInput, ClientRequestUncheckedUpdateWithoutProposalsInput>
  }

  export type ClientRequestUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutClientNestedInput
    service?: ServicesUpdateOneWithoutClientRequestNestedInput
  }

  export type ClientRequestUncheckedUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesUpsertWithoutProposalInput = {
    update: XOR<ServicesUpdateWithoutProposalInput, ServicesUncheckedUpdateWithoutProposalInput>
    create: XOR<ServicesCreateWithoutProposalInput, ServicesUncheckedCreateWithoutProposalInput>
    where?: ServicesWhereInput
  }

  export type ServicesUpdateToOneWithWhereWithoutProposalInput = {
    where?: ServicesWhereInput
    data: XOR<ServicesUpdateWithoutProposalInput, ServicesUncheckedUpdateWithoutProposalInput>
  }

  export type ServicesUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutServiceNestedInput
    Negotiation?: NegotiateUpdateManyWithoutServiceNestedInput
    clientRequest?: ClientRequestUpdateManyWithoutServiceNestedInput
    Project?: ProjectUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    Negotiation?: NegotiateUncheckedUpdateManyWithoutServiceNestedInput
    clientRequest?: ClientRequestUncheckedUpdateManyWithoutServiceNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserUpsertWithoutProposalInput = {
    update: XOR<UserUpdateWithoutProposalInput, UserUncheckedUpdateWithoutProposalInput>
    create: XOR<UserCreateWithoutProposalInput, UserUncheckedCreateWithoutProposalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProposalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProposalInput, UserUncheckedUpdateWithoutProposalInput>
  }

  export type UserUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    service?: ServicesUpdateManyWithoutClientNestedInput
    client?: ClientRequestUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUpdateManyWithoutClientNestedInput
    project?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUncheckedUpdateManyWithoutClientNestedInput
    client?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUncheckedUpdateManyWithoutClientNestedInput
    project?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type NegotiateUpsertWithWhereUniqueWithoutProposalInput = {
    where: NegotiateWhereUniqueInput
    update: XOR<NegotiateUpdateWithoutProposalInput, NegotiateUncheckedUpdateWithoutProposalInput>
    create: XOR<NegotiateCreateWithoutProposalInput, NegotiateUncheckedCreateWithoutProposalInput>
  }

  export type NegotiateUpdateWithWhereUniqueWithoutProposalInput = {
    where: NegotiateWhereUniqueInput
    data: XOR<NegotiateUpdateWithoutProposalInput, NegotiateUncheckedUpdateWithoutProposalInput>
  }

  export type NegotiateUpdateManyWithWhereWithoutProposalInput = {
    where: NegotiateScalarWhereInput
    data: XOR<NegotiateUpdateManyMutationInput, NegotiateUncheckedUpdateManyWithoutProposalInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutProposalInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutProposalInput, ProjectUncheckedUpdateWithoutProposalInput>
    create: XOR<ProjectCreateWithoutProposalInput, ProjectUncheckedCreateWithoutProposalInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutProposalInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutProposalInput, ProjectUncheckedUpdateWithoutProposalInput>
  }

  export type ProjectUpdateManyWithWhereWithoutProposalInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProposalInput>
  }

  export type UserCreateWithoutNegotiationInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    service?: ServicesCreateNestedManyWithoutClientInput
    client?: ClientRequestCreateNestedManyWithoutClientInput
    Proposal?: ProposalCreateNestedManyWithoutClientInput
    project?: ProjectCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutNegotiationInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    roleId: string
    createdAt?: Date | string
    service?: ServicesUncheckedCreateNestedManyWithoutClientInput
    client?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutClientInput
    project?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutNegotiationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNegotiationInput, UserUncheckedCreateWithoutNegotiationInput>
  }

  export type ProposalCreateWithoutNegotiateInput = {
    id?: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    clientRequest: ClientRequestCreateNestedOneWithoutProposalsInput
    service: ServicesCreateNestedOneWithoutProposalInput
    client: UserCreateNestedOneWithoutProposalInput
    Project?: ProjectCreateNestedManyWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutNegotiateInput = {
    id?: string
    client_request_id: string
    service_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    Project?: ProjectUncheckedCreateNestedManyWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutNegotiateInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutNegotiateInput, ProposalUncheckedCreateWithoutNegotiateInput>
  }

  export type ServicesCreateWithoutNegotiationInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    client?: UserCreateNestedOneWithoutServiceInput
    clientRequest?: ClientRequestCreateNestedManyWithoutServiceInput
    Proposal?: ProposalCreateNestedManyWithoutServiceInput
    Project?: ProjectCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateWithoutNegotiationInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    clientRequest?: ClientRequestUncheckedCreateNestedManyWithoutServiceInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutServiceInput
    Project?: ProjectUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesCreateOrConnectWithoutNegotiationInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutNegotiationInput, ServicesUncheckedCreateWithoutNegotiationInput>
  }

  export type UserUpsertWithoutNegotiationInput = {
    update: XOR<UserUpdateWithoutNegotiationInput, UserUncheckedUpdateWithoutNegotiationInput>
    create: XOR<UserCreateWithoutNegotiationInput, UserUncheckedCreateWithoutNegotiationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNegotiationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNegotiationInput, UserUncheckedUpdateWithoutNegotiationInput>
  }

  export type UserUpdateWithoutNegotiationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    service?: ServicesUpdateManyWithoutClientNestedInput
    client?: ClientRequestUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUpdateManyWithoutClientNestedInput
    project?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutNegotiationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUncheckedUpdateManyWithoutClientNestedInput
    client?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutClientNestedInput
    project?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProposalUpsertWithoutNegotiateInput = {
    update: XOR<ProposalUpdateWithoutNegotiateInput, ProposalUncheckedUpdateWithoutNegotiateInput>
    create: XOR<ProposalCreateWithoutNegotiateInput, ProposalUncheckedCreateWithoutNegotiateInput>
    where?: ProposalWhereInput
  }

  export type ProposalUpdateToOneWithWhereWithoutNegotiateInput = {
    where?: ProposalWhereInput
    data: XOR<ProposalUpdateWithoutNegotiateInput, ProposalUncheckedUpdateWithoutNegotiateInput>
  }

  export type ProposalUpdateWithoutNegotiateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    clientRequest?: ClientRequestUpdateOneRequiredWithoutProposalsNestedInput
    service?: ServicesUpdateOneRequiredWithoutProposalNestedInput
    client?: UserUpdateOneRequiredWithoutProposalNestedInput
    Project?: ProjectUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutNegotiateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_request_id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type ServicesUpsertWithoutNegotiationInput = {
    update: XOR<ServicesUpdateWithoutNegotiationInput, ServicesUncheckedUpdateWithoutNegotiationInput>
    create: XOR<ServicesCreateWithoutNegotiationInput, ServicesUncheckedCreateWithoutNegotiationInput>
    where?: ServicesWhereInput
  }

  export type ServicesUpdateToOneWithWhereWithoutNegotiationInput = {
    where?: ServicesWhereInput
    data: XOR<ServicesUpdateWithoutNegotiationInput, ServicesUncheckedUpdateWithoutNegotiationInput>
  }

  export type ServicesUpdateWithoutNegotiationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutServiceNestedInput
    clientRequest?: ClientRequestUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUpdateManyWithoutServiceNestedInput
    Project?: ProjectUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateWithoutNegotiationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    clientRequest?: ClientRequestUncheckedUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutServiceNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServicesCreateWithoutProjectInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    client?: UserCreateNestedOneWithoutServiceInput
    Negotiation?: NegotiateCreateNestedManyWithoutServiceInput
    clientRequest?: ClientRequestCreateNestedManyWithoutServiceInput
    Proposal?: ProposalCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateWithoutProjectInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutServiceInput
    clientRequest?: ClientRequestUncheckedCreateNestedManyWithoutServiceInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesCreateOrConnectWithoutProjectInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutProjectInput, ServicesUncheckedCreateWithoutProjectInput>
  }

  export type ProposalCreateWithoutProjectInput = {
    id?: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    clientRequest: ClientRequestCreateNestedOneWithoutProposalsInput
    service: ServicesCreateNestedOneWithoutProposalInput
    client: UserCreateNestedOneWithoutProposalInput
    Negotiate?: NegotiateCreateNestedManyWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutProjectInput = {
    id?: string
    client_request_id: string
    service_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
    Negotiate?: NegotiateUncheckedCreateNestedManyWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutProjectInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutProjectInput, ProposalUncheckedCreateWithoutProjectInput>
  }

  export type UserCreateWithoutProjectInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    service?: ServicesCreateNestedManyWithoutClientInput
    client?: ClientRequestCreateNestedManyWithoutClientInput
    Proposal?: ProposalCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    roleId: string
    createdAt?: Date | string
    service?: ServicesUncheckedCreateNestedManyWithoutClientInput
    client?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
    Proposal?: ProposalUncheckedCreateNestedManyWithoutClientInput
    Negotiation?: NegotiateUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type ServicesUpsertWithoutProjectInput = {
    update: XOR<ServicesUpdateWithoutProjectInput, ServicesUncheckedUpdateWithoutProjectInput>
    create: XOR<ServicesCreateWithoutProjectInput, ServicesUncheckedCreateWithoutProjectInput>
    where?: ServicesWhereInput
  }

  export type ServicesUpdateToOneWithWhereWithoutProjectInput = {
    where?: ServicesWhereInput
    data: XOR<ServicesUpdateWithoutProjectInput, ServicesUncheckedUpdateWithoutProjectInput>
  }

  export type ServicesUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutServiceNestedInput
    Negotiation?: NegotiateUpdateManyWithoutServiceNestedInput
    clientRequest?: ClientRequestUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    Negotiation?: NegotiateUncheckedUpdateManyWithoutServiceNestedInput
    clientRequest?: ClientRequestUncheckedUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ProposalUpsertWithoutProjectInput = {
    update: XOR<ProposalUpdateWithoutProjectInput, ProposalUncheckedUpdateWithoutProjectInput>
    create: XOR<ProposalCreateWithoutProjectInput, ProposalUncheckedCreateWithoutProjectInput>
    where?: ProposalWhereInput
  }

  export type ProposalUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProposalWhereInput
    data: XOR<ProposalUpdateWithoutProjectInput, ProposalUncheckedUpdateWithoutProjectInput>
  }

  export type ProposalUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    clientRequest?: ClientRequestUpdateOneRequiredWithoutProposalsNestedInput
    service?: ServicesUpdateOneRequiredWithoutProposalNestedInput
    client?: UserUpdateOneRequiredWithoutProposalNestedInput
    Negotiate?: NegotiateUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_request_id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    Negotiate?: NegotiateUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    service?: ServicesUpdateManyWithoutClientNestedInput
    client?: ClientRequestUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUncheckedUpdateManyWithoutClientNestedInput
    client?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ServicesCreateManyClientInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    createdAt?: Date | string
    DateCreated?: Date | string
  }

  export type ClientRequestCreateManyClientInput = {
    id?: string
    serviceId: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
  }

  export type ProposalCreateManyClientInput = {
    id?: string
    client_request_id: string
    service_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
  }

  export type NegotiateCreateManyClientInput = {
    id?: string
    proposal_id: string
    serviceId: string
    NegotiatingText: string
  }

  export type ProjectCreateManyClientInput = {
    id?: string
    service_id: string
    proposal_id: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    Negotiation?: NegotiateUpdateManyWithoutServiceNestedInput
    clientRequest?: ClientRequestUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUpdateManyWithoutServiceNestedInput
    Project?: ProjectUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    Negotiation?: NegotiateUncheckedUpdateManyWithoutServiceNestedInput
    clientRequest?: ClientRequestUncheckedUpdateManyWithoutServiceNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutServiceNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUpdateOneWithoutClientRequestNestedInput
    proposals?: ProposalUpdateManyWithoutClientRequestNestedInput
  }

  export type ClientRequestUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutClientRequestNestedInput
  }

  export type ClientRequestUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    clientRequest?: ClientRequestUpdateOneRequiredWithoutProposalsNestedInput
    service?: ServicesUpdateOneRequiredWithoutProposalNestedInput
    Negotiate?: NegotiateUpdateManyWithoutProposalNestedInput
    Project?: ProjectUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_request_id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    Negotiate?: NegotiateUncheckedUpdateManyWithoutProposalNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_request_id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
  }

  export type NegotiateUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
    proposal?: ProposalUpdateOneRequiredWithoutNegotiateNestedInput
    service?: ServicesUpdateOneRequiredWithoutNegotiationNestedInput
  }

  export type NegotiateUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
  }

  export type NegotiateUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUpdateOneRequiredWithoutProjectNestedInput
    proposal?: ProposalUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password?: string | null
    country?: string | null
    companyName?: string | null
    contactPerson?: string | null
    fullName?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    companyWebsite?: string | null
    industry?: string | null
    type?: $Enums.UserTypeEnum | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUpdateManyWithoutClientNestedInput
    client?: ClientRequestUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUpdateManyWithoutClientNestedInput
    project?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUncheckedUpdateManyWithoutClientNestedInput
    client?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
    Proposal?: ProposalUncheckedUpdateManyWithoutClientNestedInput
    Negotiation?: NegotiateUncheckedUpdateManyWithoutClientNestedInput
    project?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumUserTypeEnumFieldUpdateOperationsInput | $Enums.UserTypeEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NegotiateCreateManyServiceInput = {
    id?: string
    clientId: string
    proposal_id: string
    NegotiatingText: string
  }

  export type ClientRequestCreateManyServiceInput = {
    id?: string
    clientId: string
    request_status: $Enums.ClientRequestStatus
    createdAt?: Date | string
  }

  export type ProposalCreateManyServiceInput = {
    id?: string
    client_request_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
  }

  export type ProjectCreateManyServiceInput = {
    id?: string
    proposal_id: string
    client_id: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NegotiateUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
    client?: UserUpdateOneRequiredWithoutNegotiationNestedInput
    proposal?: ProposalUpdateOneRequiredWithoutNegotiateNestedInput
  }

  export type NegotiateUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
  }

  export type NegotiateUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
  }

  export type ClientRequestUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutClientRequestNestedInput
  }

  export type ClientRequestUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutClientRequestNestedInput
  }

  export type ClientRequestUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    request_status?: EnumClientRequestStatusFieldUpdateOperationsInput | $Enums.ClientRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    clientRequest?: ClientRequestUpdateOneRequiredWithoutProposalsNestedInput
    client?: UserUpdateOneRequiredWithoutProposalNestedInput
    Negotiate?: NegotiateUpdateManyWithoutProposalNestedInput
    Project?: ProjectUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    Negotiate?: NegotiateUncheckedUpdateManyWithoutProposalNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUpdateOneRequiredWithoutProjectNestedInput
    client?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposal_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateManyClientRequestInput = {
    id?: string
    service_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ProposalStatus
    termsAndConditions: string
  }

  export type ProposalUpdateWithoutClientRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    service?: ServicesUpdateOneRequiredWithoutProposalNestedInput
    client?: UserUpdateOneRequiredWithoutProposalNestedInput
    Negotiate?: NegotiateUpdateManyWithoutProposalNestedInput
    Project?: ProjectUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutClientRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    Negotiate?: NegotiateUncheckedUpdateManyWithoutProposalNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateManyWithoutClientRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
  }

  export type NegotiateCreateManyProposalInput = {
    id?: string
    clientId: string
    serviceId: string
    NegotiatingText: string
  }

  export type ProjectCreateManyProposalInput = {
    id?: string
    service_id: string
    client_id: string
    title?: string | null
    projectStatus?: $Enums.ProjectStatus
    endDate?: Date | string | null
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NegotiateUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
    client?: UserUpdateOneRequiredWithoutNegotiationNestedInput
    service?: ServicesUpdateOneRequiredWithoutNegotiationNestedInput
  }

  export type NegotiateUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
  }

  export type NegotiateUncheckedUpdateManyWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    NegotiatingText?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUpdateOneRequiredWithoutProjectNestedInput
    client?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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