
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
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model ProjectReview
 * 
 */
export type ProjectReview = $Result.DefaultSelection<Prisma.$ProjectReviewPayload>

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
  INACTIVE: 'INACTIVE',
  REQUESTED: 'REQUESTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type serviceStatus = (typeof serviceStatus)[keyof typeof serviceStatus]


export const ProposalStatus: {
  PENDING: 'PENDING',
  DRAFT: 'DRAFT',
  SENT: 'SENT',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  REJECTED: 'REJECTED'
};

export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus]


export const ProjectStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const ReviewStatus: {
  DRAFTN: 'DRAFTN',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  NEGOTIATING: 'NEGOTIATING'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]

}

export type UserTypeEnum = $Enums.UserTypeEnum

export const UserTypeEnum: typeof $Enums.UserTypeEnum

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type serviceStatus = $Enums.serviceStatus

export const serviceStatus: typeof $Enums.serviceStatus

export type ProposalStatus = $Enums.ProposalStatus

export const ProposalStatus: typeof $Enums.ProposalStatus

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectReview`: Exposes CRUD operations for the **ProjectReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectReviews
    * const projectReviews = await prisma.projectReview.findMany()
    * ```
    */
  get projectReview(): Prisma.ProjectReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    Proposal: 'Proposal',
    ProjectReview: 'ProjectReview'
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
      modelProps: "user" | "role" | "services" | "proposal" | "projectReview"
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
      ProjectReview: {
        payload: Prisma.$ProjectReviewPayload<ExtArgs>
        fields: Prisma.ProjectReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload>
          }
          findFirst: {
            args: Prisma.ProjectReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload>
          }
          findMany: {
            args: Prisma.ProjectReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload>[]
          }
          create: {
            args: Prisma.ProjectReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload>
          }
          createMany: {
            args: Prisma.ProjectReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload>[]
          }
          delete: {
            args: Prisma.ProjectReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload>
          }
          update: {
            args: Prisma.ProjectReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload>
          }
          deleteMany: {
            args: Prisma.ProjectReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload>[]
          }
          upsert: {
            args: Prisma.ProjectReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectReviewPayload>
          }
          aggregate: {
            args: Prisma.ProjectReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectReview>
          }
          groupBy: {
            args: Prisma.ProjectReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectReviewCountAggregateOutputType> | number
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
    proposal?: ProposalOmit
    projectReview?: ProjectReviewOmit
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
    projectReview: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | UserCountOutputTypeCountServiceArgs
    client?: boolean | UserCountOutputTypeCountClientArgs
    projectReview?: boolean | UserCountOutputTypeCountProjectReviewArgs
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
    where?: ProposalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectReviewWhereInput
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
    proposal: number
    ProjectReview: number
  }

  export type ServicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | ServicesCountOutputTypeCountProposalArgs
    ProjectReview?: boolean | ServicesCountOutputTypeCountProjectReviewArgs
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
  export type ServicesCountOutputTypeCountProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountProjectReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectReviewWhereInput
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
    projectReview?: boolean | User$projectReviewArgs<ExtArgs>
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
    projectReview?: boolean | User$projectReviewArgs<ExtArgs>
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
      client: Prisma.$ProposalPayload<ExtArgs>[]
      projectReview: Prisma.$ProjectReviewPayload<ExtArgs>[]
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
    client<T extends User$clientArgs<ExtArgs> = {}>(args?: Subset<T, User$clientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectReview<T extends User$projectReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$projectReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.projectReview
   */
  export type User$projectReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    where?: ProjectReviewWhereInput
    orderBy?: ProjectReviewOrderByWithRelationInput | ProjectReviewOrderByWithRelationInput[]
    cursor?: ProjectReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectReviewScalarFieldEnum | ProjectReviewScalarFieldEnum[]
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
    DateCreated: Date | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    ServiceName: string | null
    Description: string | null
    status: $Enums.serviceStatus | null
    DateCreated: Date | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    clientId: number
    ServiceName: number
    Description: number
    status: number
    DateCreated: number
    _all: number
  }


  export type ServicesMinAggregateInputType = {
    id?: true
    clientId?: true
    ServiceName?: true
    Description?: true
    status?: true
    DateCreated?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    clientId?: true
    ServiceName?: true
    Description?: true
    status?: true
    DateCreated?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    clientId?: true
    ServiceName?: true
    Description?: true
    status?: true
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
    DateCreated?: boolean
    client?: boolean | Services$clientArgs<ExtArgs>
    proposal?: boolean | Services$proposalArgs<ExtArgs>
    ProjectReview?: boolean | Services$ProjectReviewArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    ServiceName?: boolean
    Description?: boolean
    status?: boolean
    DateCreated?: boolean
    client?: boolean | Services$clientArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    ServiceName?: boolean
    Description?: boolean
    status?: boolean
    DateCreated?: boolean
    client?: boolean | Services$clientArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectScalar = {
    id?: boolean
    clientId?: boolean
    ServiceName?: boolean
    Description?: boolean
    status?: boolean
    DateCreated?: boolean
  }

  export type ServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "ServiceName" | "Description" | "status" | "DateCreated", ExtArgs["result"]["services"]>
  export type ServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Services$clientArgs<ExtArgs>
    proposal?: boolean | Services$proposalArgs<ExtArgs>
    ProjectReview?: boolean | Services$ProjectReviewArgs<ExtArgs>
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
      proposal: Prisma.$ProposalPayload<ExtArgs>[]
      ProjectReview: Prisma.$ProjectReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string | null
      ServiceName: string
      Description: string
      status: $Enums.serviceStatus
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
    proposal<T extends Services$proposalArgs<ExtArgs> = {}>(args?: Subset<T, Services$proposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProjectReview<T extends Services$ProjectReviewArgs<ExtArgs> = {}>(args?: Subset<T, Services$ProjectReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Services.proposal
   */
  export type Services$proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Services.ProjectReview
   */
  export type Services$ProjectReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    where?: ProjectReviewWhereInput
    orderBy?: ProjectReviewOrderByWithRelationInput | ProjectReviewOrderByWithRelationInput[]
    cursor?: ProjectReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectReviewScalarFieldEnum | ProjectReviewScalarFieldEnum[]
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
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    clientId: string | null
    proposal_status: $Enums.ProposalStatus | null
    createdAt: Date | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    clientId: string | null
    proposal_status: $Enums.ProposalStatus | null
    createdAt: Date | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    serviceId: number
    clientId: number
    proposal_status: number
    createdAt: number
    _all: number
  }


  export type ProposalMinAggregateInputType = {
    id?: true
    serviceId?: true
    clientId?: true
    proposal_status?: true
    createdAt?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    serviceId?: true
    clientId?: true
    proposal_status?: true
    createdAt?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    serviceId?: true
    clientId?: true
    proposal_status?: true
    createdAt?: true
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
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: string
    serviceId: string
    clientId: string
    proposal_status: $Enums.ProposalStatus
    createdAt: Date
    _count: ProposalCountAggregateOutputType | null
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
    serviceId?: boolean
    clientId?: boolean
    proposal_status?: boolean
    createdAt?: boolean
    client?: boolean | Proposal$clientArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    clientId?: boolean
    proposal_status?: boolean
    createdAt?: boolean
    client?: boolean | Proposal$clientArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    clientId?: boolean
    proposal_status?: boolean
    createdAt?: boolean
    client?: boolean | Proposal$clientArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectScalar = {
    id?: boolean
    serviceId?: boolean
    clientId?: boolean
    proposal_status?: boolean
    createdAt?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "clientId" | "proposal_status" | "createdAt", ExtArgs["result"]["proposal"]>
  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Proposal$clientArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Proposal$clientArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Proposal$clientArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      client: Prisma.$UserPayload<ExtArgs> | null
      service: Prisma.$ServicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      clientId: string
      proposal_status: $Enums.ProposalStatus
      createdAt: Date
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
    client<T extends Proposal$clientArgs<ExtArgs> = {}>(args?: Subset<T, Proposal$clientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'String'>
    readonly serviceId: FieldRef<"Proposal", 'String'>
    readonly clientId: FieldRef<"Proposal", 'String'>
    readonly proposal_status: FieldRef<"Proposal", 'ProposalStatus'>
    readonly createdAt: FieldRef<"Proposal", 'DateTime'>
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
   * Proposal.client
   */
  export type Proposal$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model ProjectReview
   */

  export type AggregateProjectReview = {
    _count: ProjectReviewCountAggregateOutputType | null
    _avg: ProjectReviewAvgAggregateOutputType | null
    _sum: ProjectReviewSumAggregateOutputType | null
    _min: ProjectReviewMinAggregateOutputType | null
    _max: ProjectReviewMaxAggregateOutputType | null
  }

  export type ProjectReviewAvgAggregateOutputType = {
    pricing: number | null
  }

  export type ProjectReviewSumAggregateOutputType = {
    pricing: number | null
  }

  export type ProjectReviewMinAggregateOutputType = {
    id: string | null
    service_id: string | null
    client_id: string | null
    contract_id: string | null
    scope: string | null
    deliverables: string | null
    timeline: string | null
    pricing: number | null
    status: $Enums.ReviewStatus | null
    termsAndConditions: string | null
  }

  export type ProjectReviewMaxAggregateOutputType = {
    id: string | null
    service_id: string | null
    client_id: string | null
    contract_id: string | null
    scope: string | null
    deliverables: string | null
    timeline: string | null
    pricing: number | null
    status: $Enums.ReviewStatus | null
    termsAndConditions: string | null
  }

  export type ProjectReviewCountAggregateOutputType = {
    id: number
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


  export type ProjectReviewAvgAggregateInputType = {
    pricing?: true
  }

  export type ProjectReviewSumAggregateInputType = {
    pricing?: true
  }

  export type ProjectReviewMinAggregateInputType = {
    id?: true
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

  export type ProjectReviewMaxAggregateInputType = {
    id?: true
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

  export type ProjectReviewCountAggregateInputType = {
    id?: true
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

  export type ProjectReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectReview to aggregate.
     */
    where?: ProjectReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectReviews to fetch.
     */
    orderBy?: ProjectReviewOrderByWithRelationInput | ProjectReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectReviews
    **/
    _count?: true | ProjectReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectReviewMaxAggregateInputType
  }

  export type GetProjectReviewAggregateType<T extends ProjectReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectReview[P]>
      : GetScalarType<T[P], AggregateProjectReview[P]>
  }




  export type ProjectReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectReviewWhereInput
    orderBy?: ProjectReviewOrderByWithAggregationInput | ProjectReviewOrderByWithAggregationInput[]
    by: ProjectReviewScalarFieldEnum[] | ProjectReviewScalarFieldEnum
    having?: ProjectReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectReviewCountAggregateInputType | true
    _avg?: ProjectReviewAvgAggregateInputType
    _sum?: ProjectReviewSumAggregateInputType
    _min?: ProjectReviewMinAggregateInputType
    _max?: ProjectReviewMaxAggregateInputType
  }

  export type ProjectReviewGroupByOutputType = {
    id: string
    service_id: string
    client_id: string
    contract_id: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
    _count: ProjectReviewCountAggregateOutputType | null
    _avg: ProjectReviewAvgAggregateOutputType | null
    _sum: ProjectReviewSumAggregateOutputType | null
    _min: ProjectReviewMinAggregateOutputType | null
    _max: ProjectReviewMaxAggregateOutputType | null
  }

  type GetProjectReviewGroupByPayload<T extends ProjectReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectReviewGroupByOutputType[P]>
        }
      >
    >


  export type ProjectReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    client_id?: boolean
    contract_id?: boolean
    scope?: boolean
    deliverables?: boolean
    timeline?: boolean
    pricing?: boolean
    status?: boolean
    termsAndConditions?: boolean
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectReview"]>

  export type ProjectReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    client_id?: boolean
    contract_id?: boolean
    scope?: boolean
    deliverables?: boolean
    timeline?: boolean
    pricing?: boolean
    status?: boolean
    termsAndConditions?: boolean
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectReview"]>

  export type ProjectReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    client_id?: boolean
    contract_id?: boolean
    scope?: boolean
    deliverables?: boolean
    timeline?: boolean
    pricing?: boolean
    status?: boolean
    termsAndConditions?: boolean
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectReview"]>

  export type ProjectReviewSelectScalar = {
    id?: boolean
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

  export type ProjectReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service_id" | "client_id" | "contract_id" | "scope" | "deliverables" | "timeline" | "pricing" | "status" | "termsAndConditions", ExtArgs["result"]["projectReview"]>
  export type ProjectReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServicesDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectReview"
    objects: {
      service: Prisma.$ServicesPayload<ExtArgs>
      client: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service_id: string
      client_id: string
      contract_id: string | null
      scope: string
      deliverables: string
      timeline: string
      pricing: number
      status: $Enums.ReviewStatus
      termsAndConditions: string
    }, ExtArgs["result"]["projectReview"]>
    composites: {}
  }

  type ProjectReviewGetPayload<S extends boolean | null | undefined | ProjectReviewDefaultArgs> = $Result.GetResult<Prisma.$ProjectReviewPayload, S>

  type ProjectReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectReviewCountAggregateInputType | true
    }

  export interface ProjectReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectReview'], meta: { name: 'ProjectReview' } }
    /**
     * Find zero or one ProjectReview that matches the filter.
     * @param {ProjectReviewFindUniqueArgs} args - Arguments to find a ProjectReview
     * @example
     * // Get one ProjectReview
     * const projectReview = await prisma.projectReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectReviewFindUniqueArgs>(args: SelectSubset<T, ProjectReviewFindUniqueArgs<ExtArgs>>): Prisma__ProjectReviewClient<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectReviewFindUniqueOrThrowArgs} args - Arguments to find a ProjectReview
     * @example
     * // Get one ProjectReview
     * const projectReview = await prisma.projectReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectReviewClient<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectReviewFindFirstArgs} args - Arguments to find a ProjectReview
     * @example
     * // Get one ProjectReview
     * const projectReview = await prisma.projectReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectReviewFindFirstArgs>(args?: SelectSubset<T, ProjectReviewFindFirstArgs<ExtArgs>>): Prisma__ProjectReviewClient<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectReviewFindFirstOrThrowArgs} args - Arguments to find a ProjectReview
     * @example
     * // Get one ProjectReview
     * const projectReview = await prisma.projectReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectReviewClient<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectReviews
     * const projectReviews = await prisma.projectReview.findMany()
     * 
     * // Get first 10 ProjectReviews
     * const projectReviews = await prisma.projectReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectReviewWithIdOnly = await prisma.projectReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectReviewFindManyArgs>(args?: SelectSubset<T, ProjectReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectReview.
     * @param {ProjectReviewCreateArgs} args - Arguments to create a ProjectReview.
     * @example
     * // Create one ProjectReview
     * const ProjectReview = await prisma.projectReview.create({
     *   data: {
     *     // ... data to create a ProjectReview
     *   }
     * })
     * 
     */
    create<T extends ProjectReviewCreateArgs>(args: SelectSubset<T, ProjectReviewCreateArgs<ExtArgs>>): Prisma__ProjectReviewClient<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectReviews.
     * @param {ProjectReviewCreateManyArgs} args - Arguments to create many ProjectReviews.
     * @example
     * // Create many ProjectReviews
     * const projectReview = await prisma.projectReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectReviewCreateManyArgs>(args?: SelectSubset<T, ProjectReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectReviews and returns the data saved in the database.
     * @param {ProjectReviewCreateManyAndReturnArgs} args - Arguments to create many ProjectReviews.
     * @example
     * // Create many ProjectReviews
     * const projectReview = await prisma.projectReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectReviews and only return the `id`
     * const projectReviewWithIdOnly = await prisma.projectReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectReview.
     * @param {ProjectReviewDeleteArgs} args - Arguments to delete one ProjectReview.
     * @example
     * // Delete one ProjectReview
     * const ProjectReview = await prisma.projectReview.delete({
     *   where: {
     *     // ... filter to delete one ProjectReview
     *   }
     * })
     * 
     */
    delete<T extends ProjectReviewDeleteArgs>(args: SelectSubset<T, ProjectReviewDeleteArgs<ExtArgs>>): Prisma__ProjectReviewClient<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectReview.
     * @param {ProjectReviewUpdateArgs} args - Arguments to update one ProjectReview.
     * @example
     * // Update one ProjectReview
     * const projectReview = await prisma.projectReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectReviewUpdateArgs>(args: SelectSubset<T, ProjectReviewUpdateArgs<ExtArgs>>): Prisma__ProjectReviewClient<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectReviews.
     * @param {ProjectReviewDeleteManyArgs} args - Arguments to filter ProjectReviews to delete.
     * @example
     * // Delete a few ProjectReviews
     * const { count } = await prisma.projectReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectReviewDeleteManyArgs>(args?: SelectSubset<T, ProjectReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectReviews
     * const projectReview = await prisma.projectReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectReviewUpdateManyArgs>(args: SelectSubset<T, ProjectReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectReviews and returns the data updated in the database.
     * @param {ProjectReviewUpdateManyAndReturnArgs} args - Arguments to update many ProjectReviews.
     * @example
     * // Update many ProjectReviews
     * const projectReview = await prisma.projectReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectReviews and only return the `id`
     * const projectReviewWithIdOnly = await prisma.projectReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectReview.
     * @param {ProjectReviewUpsertArgs} args - Arguments to update or create a ProjectReview.
     * @example
     * // Update or create a ProjectReview
     * const projectReview = await prisma.projectReview.upsert({
     *   create: {
     *     // ... data to create a ProjectReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectReview we want to update
     *   }
     * })
     */
    upsert<T extends ProjectReviewUpsertArgs>(args: SelectSubset<T, ProjectReviewUpsertArgs<ExtArgs>>): Prisma__ProjectReviewClient<$Result.GetResult<Prisma.$ProjectReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectReviewCountArgs} args - Arguments to filter ProjectReviews to count.
     * @example
     * // Count the number of ProjectReviews
     * const count = await prisma.projectReview.count({
     *   where: {
     *     // ... the filter for the ProjectReviews we want to count
     *   }
     * })
    **/
    count<T extends ProjectReviewCountArgs>(
      args?: Subset<T, ProjectReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectReviewAggregateArgs>(args: Subset<T, ProjectReviewAggregateArgs>): Prisma.PrismaPromise<GetProjectReviewAggregateType<T>>

    /**
     * Group by ProjectReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectReviewGroupByArgs} args - Group by arguments.
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
      T extends ProjectReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectReviewGroupByArgs['orderBy'] }
        : { orderBy?: ProjectReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectReview model
   */
  readonly fields: ProjectReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicesDefaultArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectReview model
   */
  interface ProjectReviewFieldRefs {
    readonly id: FieldRef<"ProjectReview", 'String'>
    readonly service_id: FieldRef<"ProjectReview", 'String'>
    readonly client_id: FieldRef<"ProjectReview", 'String'>
    readonly contract_id: FieldRef<"ProjectReview", 'String'>
    readonly scope: FieldRef<"ProjectReview", 'String'>
    readonly deliverables: FieldRef<"ProjectReview", 'String'>
    readonly timeline: FieldRef<"ProjectReview", 'String'>
    readonly pricing: FieldRef<"ProjectReview", 'Int'>
    readonly status: FieldRef<"ProjectReview", 'ReviewStatus'>
    readonly termsAndConditions: FieldRef<"ProjectReview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectReview findUnique
   */
  export type ProjectReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProjectReview to fetch.
     */
    where: ProjectReviewWhereUniqueInput
  }

  /**
   * ProjectReview findUniqueOrThrow
   */
  export type ProjectReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProjectReview to fetch.
     */
    where: ProjectReviewWhereUniqueInput
  }

  /**
   * ProjectReview findFirst
   */
  export type ProjectReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProjectReview to fetch.
     */
    where?: ProjectReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectReviews to fetch.
     */
    orderBy?: ProjectReviewOrderByWithRelationInput | ProjectReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectReviews.
     */
    cursor?: ProjectReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectReviews.
     */
    distinct?: ProjectReviewScalarFieldEnum | ProjectReviewScalarFieldEnum[]
  }

  /**
   * ProjectReview findFirstOrThrow
   */
  export type ProjectReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProjectReview to fetch.
     */
    where?: ProjectReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectReviews to fetch.
     */
    orderBy?: ProjectReviewOrderByWithRelationInput | ProjectReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectReviews.
     */
    cursor?: ProjectReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectReviews.
     */
    distinct?: ProjectReviewScalarFieldEnum | ProjectReviewScalarFieldEnum[]
  }

  /**
   * ProjectReview findMany
   */
  export type ProjectReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProjectReviews to fetch.
     */
    where?: ProjectReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectReviews to fetch.
     */
    orderBy?: ProjectReviewOrderByWithRelationInput | ProjectReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectReviews.
     */
    cursor?: ProjectReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectReviews.
     */
    distinct?: ProjectReviewScalarFieldEnum | ProjectReviewScalarFieldEnum[]
  }

  /**
   * ProjectReview create
   */
  export type ProjectReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectReview.
     */
    data: XOR<ProjectReviewCreateInput, ProjectReviewUncheckedCreateInput>
  }

  /**
   * ProjectReview createMany
   */
  export type ProjectReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectReviews.
     */
    data: ProjectReviewCreateManyInput | ProjectReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectReview createManyAndReturn
   */
  export type ProjectReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectReviews.
     */
    data: ProjectReviewCreateManyInput | ProjectReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectReview update
   */
  export type ProjectReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectReview.
     */
    data: XOR<ProjectReviewUpdateInput, ProjectReviewUncheckedUpdateInput>
    /**
     * Choose, which ProjectReview to update.
     */
    where: ProjectReviewWhereUniqueInput
  }

  /**
   * ProjectReview updateMany
   */
  export type ProjectReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectReviews.
     */
    data: XOR<ProjectReviewUpdateManyMutationInput, ProjectReviewUncheckedUpdateManyInput>
    /**
     * Filter which ProjectReviews to update
     */
    where?: ProjectReviewWhereInput
    /**
     * Limit how many ProjectReviews to update.
     */
    limit?: number
  }

  /**
   * ProjectReview updateManyAndReturn
   */
  export type ProjectReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * The data used to update ProjectReviews.
     */
    data: XOR<ProjectReviewUpdateManyMutationInput, ProjectReviewUncheckedUpdateManyInput>
    /**
     * Filter which ProjectReviews to update
     */
    where?: ProjectReviewWhereInput
    /**
     * Limit how many ProjectReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectReview upsert
   */
  export type ProjectReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectReview to update in case it exists.
     */
    where: ProjectReviewWhereUniqueInput
    /**
     * In case the ProjectReview found by the `where` argument doesn't exist, create a new ProjectReview with this data.
     */
    create: XOR<ProjectReviewCreateInput, ProjectReviewUncheckedCreateInput>
    /**
     * In case the ProjectReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectReviewUpdateInput, ProjectReviewUncheckedUpdateInput>
  }

  /**
   * ProjectReview delete
   */
  export type ProjectReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
    /**
     * Filter which ProjectReview to delete.
     */
    where: ProjectReviewWhereUniqueInput
  }

  /**
   * ProjectReview deleteMany
   */
  export type ProjectReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectReviews to delete
     */
    where?: ProjectReviewWhereInput
    /**
     * Limit how many ProjectReviews to delete.
     */
    limit?: number
  }

  /**
   * ProjectReview without action
   */
  export type ProjectReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectReview
     */
    select?: ProjectReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectReview
     */
    omit?: ProjectReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectReviewInclude<ExtArgs> | null
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
    DateCreated: 'DateCreated'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    clientId: 'clientId',
    proposal_status: 'proposal_status',
    createdAt: 'createdAt'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const ProjectReviewScalarFieldEnum: {
    id: 'id',
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

  export type ProjectReviewScalarFieldEnum = (typeof ProjectReviewScalarFieldEnum)[keyof typeof ProjectReviewScalarFieldEnum]


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
   * Reference to a field of type 'ProposalStatus'
   */
  export type EnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus'>
    


  /**
   * Reference to a field of type 'ProposalStatus[]'
   */
  export type ListEnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'ReviewStatus[]'
   */
  export type ListEnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus[]'>
    


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
    client?: ProposalListRelationFilter
    projectReview?: ProjectReviewListRelationFilter
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
    client?: ProposalOrderByRelationAggregateInput
    projectReview?: ProjectReviewOrderByRelationAggregateInput
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
    client?: ProposalListRelationFilter
    projectReview?: ProjectReviewListRelationFilter
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
    DateCreated?: DateTimeFilter<"Services"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    proposal?: ProposalListRelationFilter
    ProjectReview?: ProjectReviewListRelationFilter
  }

  export type ServicesOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    ServiceName?: SortOrder
    Description?: SortOrder
    status?: SortOrder
    DateCreated?: SortOrder
    client?: UserOrderByWithRelationInput
    proposal?: ProposalOrderByRelationAggregateInput
    ProjectReview?: ProjectReviewOrderByRelationAggregateInput
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
    DateCreated?: DateTimeFilter<"Services"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    proposal?: ProposalListRelationFilter
    ProjectReview?: ProjectReviewListRelationFilter
  }, "id">

  export type ServicesOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    ServiceName?: SortOrder
    Description?: SortOrder
    status?: SortOrder
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
    DateCreated?: DateTimeWithAggregatesFilter<"Services"> | Date | string
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: StringFilter<"Proposal"> | string
    serviceId?: StringFilter<"Proposal"> | string
    clientId?: StringFilter<"Proposal"> | string
    proposal_status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    proposal_status?: SortOrder
    createdAt?: SortOrder
    client?: UserOrderByWithRelationInput
    service?: ServicesOrderByWithRelationInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    serviceId?: StringFilter<"Proposal"> | string
    clientId?: StringFilter<"Proposal"> | string
    proposal_status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    proposal_status?: SortOrder
    createdAt?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proposal"> | string
    serviceId?: StringWithAggregatesFilter<"Proposal"> | string
    clientId?: StringWithAggregatesFilter<"Proposal"> | string
    proposal_status?: EnumProposalStatusWithAggregatesFilter<"Proposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
  }

  export type ProjectReviewWhereInput = {
    AND?: ProjectReviewWhereInput | ProjectReviewWhereInput[]
    OR?: ProjectReviewWhereInput[]
    NOT?: ProjectReviewWhereInput | ProjectReviewWhereInput[]
    id?: StringFilter<"ProjectReview"> | string
    service_id?: StringFilter<"ProjectReview"> | string
    client_id?: StringFilter<"ProjectReview"> | string
    contract_id?: StringNullableFilter<"ProjectReview"> | string | null
    scope?: StringFilter<"ProjectReview"> | string
    deliverables?: StringFilter<"ProjectReview"> | string
    timeline?: StringFilter<"ProjectReview"> | string
    pricing?: IntFilter<"ProjectReview"> | number
    status?: EnumReviewStatusFilter<"ProjectReview"> | $Enums.ReviewStatus
    termsAndConditions?: StringFilter<"ProjectReview"> | string
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectReviewOrderByWithRelationInput = {
    id?: SortOrder
    service_id?: SortOrder
    client_id?: SortOrder
    contract_id?: SortOrderInput | SortOrder
    scope?: SortOrder
    deliverables?: SortOrder
    timeline?: SortOrder
    pricing?: SortOrder
    status?: SortOrder
    termsAndConditions?: SortOrder
    service?: ServicesOrderByWithRelationInput
    client?: UserOrderByWithRelationInput
  }

  export type ProjectReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectReviewWhereInput | ProjectReviewWhereInput[]
    OR?: ProjectReviewWhereInput[]
    NOT?: ProjectReviewWhereInput | ProjectReviewWhereInput[]
    service_id?: StringFilter<"ProjectReview"> | string
    client_id?: StringFilter<"ProjectReview"> | string
    contract_id?: StringNullableFilter<"ProjectReview"> | string | null
    scope?: StringFilter<"ProjectReview"> | string
    deliverables?: StringFilter<"ProjectReview"> | string
    timeline?: StringFilter<"ProjectReview"> | string
    pricing?: IntFilter<"ProjectReview"> | number
    status?: EnumReviewStatusFilter<"ProjectReview"> | $Enums.ReviewStatus
    termsAndConditions?: StringFilter<"ProjectReview"> | string
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectReviewOrderByWithAggregationInput = {
    id?: SortOrder
    service_id?: SortOrder
    client_id?: SortOrder
    contract_id?: SortOrderInput | SortOrder
    scope?: SortOrder
    deliverables?: SortOrder
    timeline?: SortOrder
    pricing?: SortOrder
    status?: SortOrder
    termsAndConditions?: SortOrder
    _count?: ProjectReviewCountOrderByAggregateInput
    _avg?: ProjectReviewAvgOrderByAggregateInput
    _max?: ProjectReviewMaxOrderByAggregateInput
    _min?: ProjectReviewMinOrderByAggregateInput
    _sum?: ProjectReviewSumOrderByAggregateInput
  }

  export type ProjectReviewScalarWhereWithAggregatesInput = {
    AND?: ProjectReviewScalarWhereWithAggregatesInput | ProjectReviewScalarWhereWithAggregatesInput[]
    OR?: ProjectReviewScalarWhereWithAggregatesInput[]
    NOT?: ProjectReviewScalarWhereWithAggregatesInput | ProjectReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectReview"> | string
    service_id?: StringWithAggregatesFilter<"ProjectReview"> | string
    client_id?: StringWithAggregatesFilter<"ProjectReview"> | string
    contract_id?: StringNullableWithAggregatesFilter<"ProjectReview"> | string | null
    scope?: StringWithAggregatesFilter<"ProjectReview"> | string
    deliverables?: StringWithAggregatesFilter<"ProjectReview"> | string
    timeline?: StringWithAggregatesFilter<"ProjectReview"> | string
    pricing?: IntWithAggregatesFilter<"ProjectReview"> | number
    status?: EnumReviewStatusWithAggregatesFilter<"ProjectReview"> | $Enums.ReviewStatus
    termsAndConditions?: StringWithAggregatesFilter<"ProjectReview"> | string
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
    client?: ProposalCreateNestedManyWithoutClientInput
    projectReview?: ProjectReviewCreateNestedManyWithoutClientInput
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
    client?: ProposalUncheckedCreateNestedManyWithoutClientInput
    projectReview?: ProjectReviewUncheckedCreateNestedManyWithoutClientInput
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
    client?: ProposalUpdateManyWithoutClientNestedInput
    projectReview?: ProjectReviewUpdateManyWithoutClientNestedInput
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
    client?: ProposalUncheckedUpdateManyWithoutClientNestedInput
    projectReview?: ProjectReviewUncheckedUpdateManyWithoutClientNestedInput
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
    DateCreated?: Date | string
    client?: UserCreateNestedOneWithoutServiceInput
    proposal?: ProposalCreateNestedManyWithoutServiceInput
    ProjectReview?: ProjectReviewCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    DateCreated?: Date | string
    proposal?: ProposalUncheckedCreateNestedManyWithoutServiceInput
    ProjectReview?: ProjectReviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutServiceNestedInput
    proposal?: ProposalUpdateManyWithoutServiceNestedInput
    ProjectReview?: ProjectReviewUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUncheckedUpdateManyWithoutServiceNestedInput
    ProjectReview?: ProjectReviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServicesCreateManyInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    DateCreated?: Date | string
  }

  export type ServicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateInput = {
    id?: string
    proposal_status: $Enums.ProposalStatus
    createdAt?: Date | string
    client?: UserCreateNestedOneWithoutClientInput
    service: ServicesCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateInput = {
    id?: string
    serviceId: string
    clientId: string
    proposal_status: $Enums.ProposalStatus
    createdAt?: Date | string
  }

  export type ProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutClientNestedInput
    service?: ServicesUpdateOneRequiredWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateManyInput = {
    id?: string
    serviceId: string
    clientId: string
    proposal_status: $Enums.ProposalStatus
    createdAt?: Date | string
  }

  export type ProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectReviewCreateInput = {
    id?: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
    service: ServicesCreateNestedOneWithoutProjectReviewInput
    client: UserCreateNestedOneWithoutProjectReviewInput
  }

  export type ProjectReviewUncheckedCreateInput = {
    id?: string
    service_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
  }

  export type ProjectReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    service?: ServicesUpdateOneRequiredWithoutProjectReviewNestedInput
    client?: UserUpdateOneRequiredWithoutProjectReviewNestedInput
  }

  export type ProjectReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectReviewCreateManyInput = {
    id?: string
    service_id: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
  }

  export type ProjectReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
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

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type ProjectReviewListRelationFilter = {
    every?: ProjectReviewWhereInput
    some?: ProjectReviewWhereInput
    none?: ProjectReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectReviewOrderByRelationAggregateInput = {
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
    DateCreated?: SortOrder
  }

  export type ServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    ServiceName?: SortOrder
    Description?: SortOrder
    status?: SortOrder
    DateCreated?: SortOrder
  }

  export type ServicesMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    ServiceName?: SortOrder
    Description?: SortOrder
    status?: SortOrder
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

  export type EnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type ServicesScalarRelationFilter = {
    is?: ServicesWhereInput
    isNot?: ServicesWhereInput
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    proposal_status?: SortOrder
    createdAt?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    proposal_status?: SortOrder
    createdAt?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    proposal_status?: SortOrder
    createdAt?: SortOrder
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

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectReviewCountOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProjectReviewAvgOrderByAggregateInput = {
    pricing?: SortOrder
  }

  export type ProjectReviewMaxOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProjectReviewMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProjectReviewSumOrderByAggregateInput = {
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

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
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

  export type ProposalCreateNestedManyWithoutClientInput = {
    create?: XOR<ProposalCreateWithoutClientInput, ProposalUncheckedCreateWithoutClientInput> | ProposalCreateWithoutClientInput[] | ProposalUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientInput | ProposalCreateOrConnectWithoutClientInput[]
    createMany?: ProposalCreateManyClientInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProjectReviewCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectReviewCreateWithoutClientInput, ProjectReviewUncheckedCreateWithoutClientInput> | ProjectReviewCreateWithoutClientInput[] | ProjectReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectReviewCreateOrConnectWithoutClientInput | ProjectReviewCreateOrConnectWithoutClientInput[]
    createMany?: ProjectReviewCreateManyClientInputEnvelope
    connect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
  }

  export type ServicesUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ServicesCreateWithoutClientInput, ServicesUncheckedCreateWithoutClientInput> | ServicesCreateWithoutClientInput[] | ServicesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutClientInput | ServicesCreateOrConnectWithoutClientInput[]
    createMany?: ServicesCreateManyClientInputEnvelope
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProposalCreateWithoutClientInput, ProposalUncheckedCreateWithoutClientInput> | ProposalCreateWithoutClientInput[] | ProposalUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutClientInput | ProposalCreateOrConnectWithoutClientInput[]
    createMany?: ProposalCreateManyClientInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProjectReviewUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectReviewCreateWithoutClientInput, ProjectReviewUncheckedCreateWithoutClientInput> | ProjectReviewCreateWithoutClientInput[] | ProjectReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectReviewCreateOrConnectWithoutClientInput | ProjectReviewCreateOrConnectWithoutClientInput[]
    createMany?: ProjectReviewCreateManyClientInputEnvelope
    connect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
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

  export type ProjectReviewUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectReviewCreateWithoutClientInput, ProjectReviewUncheckedCreateWithoutClientInput> | ProjectReviewCreateWithoutClientInput[] | ProjectReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectReviewCreateOrConnectWithoutClientInput | ProjectReviewCreateOrConnectWithoutClientInput[]
    upsert?: ProjectReviewUpsertWithWhereUniqueWithoutClientInput | ProjectReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectReviewCreateManyClientInputEnvelope
    set?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    disconnect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    delete?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    connect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    update?: ProjectReviewUpdateWithWhereUniqueWithoutClientInput | ProjectReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectReviewUpdateManyWithWhereWithoutClientInput | ProjectReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectReviewScalarWhereInput | ProjectReviewScalarWhereInput[]
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

  export type ProjectReviewUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectReviewCreateWithoutClientInput, ProjectReviewUncheckedCreateWithoutClientInput> | ProjectReviewCreateWithoutClientInput[] | ProjectReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectReviewCreateOrConnectWithoutClientInput | ProjectReviewCreateOrConnectWithoutClientInput[]
    upsert?: ProjectReviewUpsertWithWhereUniqueWithoutClientInput | ProjectReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectReviewCreateManyClientInputEnvelope
    set?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    disconnect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    delete?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    connect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    update?: ProjectReviewUpdateWithWhereUniqueWithoutClientInput | ProjectReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectReviewUpdateManyWithWhereWithoutClientInput | ProjectReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectReviewScalarWhereInput | ProjectReviewScalarWhereInput[]
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

  export type ProposalCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProposalCreateWithoutServiceInput, ProposalUncheckedCreateWithoutServiceInput> | ProposalCreateWithoutServiceInput[] | ProposalUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutServiceInput | ProposalCreateOrConnectWithoutServiceInput[]
    createMany?: ProposalCreateManyServiceInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProjectReviewCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProjectReviewCreateWithoutServiceInput, ProjectReviewUncheckedCreateWithoutServiceInput> | ProjectReviewCreateWithoutServiceInput[] | ProjectReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectReviewCreateOrConnectWithoutServiceInput | ProjectReviewCreateOrConnectWithoutServiceInput[]
    createMany?: ProjectReviewCreateManyServiceInputEnvelope
    connect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProposalCreateWithoutServiceInput, ProposalUncheckedCreateWithoutServiceInput> | ProposalCreateWithoutServiceInput[] | ProposalUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutServiceInput | ProposalCreateOrConnectWithoutServiceInput[]
    createMany?: ProposalCreateManyServiceInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProjectReviewUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProjectReviewCreateWithoutServiceInput, ProjectReviewUncheckedCreateWithoutServiceInput> | ProjectReviewCreateWithoutServiceInput[] | ProjectReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectReviewCreateOrConnectWithoutServiceInput | ProjectReviewCreateOrConnectWithoutServiceInput[]
    createMany?: ProjectReviewCreateManyServiceInputEnvelope
    connect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
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

  export type ProjectReviewUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProjectReviewCreateWithoutServiceInput, ProjectReviewUncheckedCreateWithoutServiceInput> | ProjectReviewCreateWithoutServiceInput[] | ProjectReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectReviewCreateOrConnectWithoutServiceInput | ProjectReviewCreateOrConnectWithoutServiceInput[]
    upsert?: ProjectReviewUpsertWithWhereUniqueWithoutServiceInput | ProjectReviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProjectReviewCreateManyServiceInputEnvelope
    set?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    disconnect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    delete?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    connect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    update?: ProjectReviewUpdateWithWhereUniqueWithoutServiceInput | ProjectReviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProjectReviewUpdateManyWithWhereWithoutServiceInput | ProjectReviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProjectReviewScalarWhereInput | ProjectReviewScalarWhereInput[]
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

  export type ProjectReviewUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProjectReviewCreateWithoutServiceInput, ProjectReviewUncheckedCreateWithoutServiceInput> | ProjectReviewCreateWithoutServiceInput[] | ProjectReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectReviewCreateOrConnectWithoutServiceInput | ProjectReviewCreateOrConnectWithoutServiceInput[]
    upsert?: ProjectReviewUpsertWithWhereUniqueWithoutServiceInput | ProjectReviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProjectReviewCreateManyServiceInputEnvelope
    set?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    disconnect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    delete?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    connect?: ProjectReviewWhereUniqueInput | ProjectReviewWhereUniqueInput[]
    update?: ProjectReviewUpdateWithWhereUniqueWithoutServiceInput | ProjectReviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProjectReviewUpdateManyWithWhereWithoutServiceInput | ProjectReviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProjectReviewScalarWhereInput | ProjectReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInput
    connect?: UserWhereUniqueInput
  }

  export type ServicesCreateNestedOneWithoutProposalInput = {
    create?: XOR<ServicesCreateWithoutProposalInput, ServicesUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutProposalInput
    connect?: ServicesWhereUniqueInput
  }

  export type EnumProposalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProposalStatus
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

  export type ServicesUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<ServicesCreateWithoutProposalInput, ServicesUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutProposalInput
    upsert?: ServicesUpsertWithoutProposalInput
    connect?: ServicesWhereUniqueInput
    update?: XOR<XOR<ServicesUpdateToOneWithWhereWithoutProposalInput, ServicesUpdateWithoutProposalInput>, ServicesUncheckedUpdateWithoutProposalInput>
  }

  export type ServicesCreateNestedOneWithoutProjectReviewInput = {
    create?: XOR<ServicesCreateWithoutProjectReviewInput, ServicesUncheckedCreateWithoutProjectReviewInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutProjectReviewInput
    connect?: ServicesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectReviewInput = {
    create?: XOR<UserCreateWithoutProjectReviewInput, UserUncheckedCreateWithoutProjectReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectReviewInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type ServicesUpdateOneRequiredWithoutProjectReviewNestedInput = {
    create?: XOR<ServicesCreateWithoutProjectReviewInput, ServicesUncheckedCreateWithoutProjectReviewInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutProjectReviewInput
    upsert?: ServicesUpsertWithoutProjectReviewInput
    connect?: ServicesWhereUniqueInput
    update?: XOR<XOR<ServicesUpdateToOneWithWhereWithoutProjectReviewInput, ServicesUpdateWithoutProjectReviewInput>, ServicesUncheckedUpdateWithoutProjectReviewInput>
  }

  export type UserUpdateOneRequiredWithoutProjectReviewNestedInput = {
    create?: XOR<UserCreateWithoutProjectReviewInput, UserUncheckedCreateWithoutProjectReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectReviewInput
    upsert?: UserUpsertWithoutProjectReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectReviewInput, UserUpdateWithoutProjectReviewInput>, UserUncheckedUpdateWithoutProjectReviewInput>
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

  export type NestedEnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
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

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
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

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
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
    DateCreated?: Date | string
    proposal?: ProposalCreateNestedManyWithoutServiceInput
    ProjectReview?: ProjectReviewCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateWithoutClientInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    DateCreated?: Date | string
    proposal?: ProposalUncheckedCreateNestedManyWithoutServiceInput
    ProjectReview?: ProjectReviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesCreateOrConnectWithoutClientInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutClientInput, ServicesUncheckedCreateWithoutClientInput>
  }

  export type ServicesCreateManyClientInputEnvelope = {
    data: ServicesCreateManyClientInput | ServicesCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProposalCreateWithoutClientInput = {
    id?: string
    proposal_status: $Enums.ProposalStatus
    createdAt?: Date | string
    service: ServicesCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutClientInput = {
    id?: string
    serviceId: string
    proposal_status: $Enums.ProposalStatus
    createdAt?: Date | string
  }

  export type ProposalCreateOrConnectWithoutClientInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutClientInput, ProposalUncheckedCreateWithoutClientInput>
  }

  export type ProposalCreateManyClientInputEnvelope = {
    data: ProposalCreateManyClientInput | ProposalCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProjectReviewCreateWithoutClientInput = {
    id?: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
    service: ServicesCreateNestedOneWithoutProjectReviewInput
  }

  export type ProjectReviewUncheckedCreateWithoutClientInput = {
    id?: string
    service_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
  }

  export type ProjectReviewCreateOrConnectWithoutClientInput = {
    where: ProjectReviewWhereUniqueInput
    create: XOR<ProjectReviewCreateWithoutClientInput, ProjectReviewUncheckedCreateWithoutClientInput>
  }

  export type ProjectReviewCreateManyClientInputEnvelope = {
    data: ProjectReviewCreateManyClientInput | ProjectReviewCreateManyClientInput[]
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
    DateCreated?: DateTimeFilter<"Services"> | Date | string
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
    serviceId?: StringFilter<"Proposal"> | string
    clientId?: StringFilter<"Proposal"> | string
    proposal_status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
  }

  export type ProjectReviewUpsertWithWhereUniqueWithoutClientInput = {
    where: ProjectReviewWhereUniqueInput
    update: XOR<ProjectReviewUpdateWithoutClientInput, ProjectReviewUncheckedUpdateWithoutClientInput>
    create: XOR<ProjectReviewCreateWithoutClientInput, ProjectReviewUncheckedCreateWithoutClientInput>
  }

  export type ProjectReviewUpdateWithWhereUniqueWithoutClientInput = {
    where: ProjectReviewWhereUniqueInput
    data: XOR<ProjectReviewUpdateWithoutClientInput, ProjectReviewUncheckedUpdateWithoutClientInput>
  }

  export type ProjectReviewUpdateManyWithWhereWithoutClientInput = {
    where: ProjectReviewScalarWhereInput
    data: XOR<ProjectReviewUpdateManyMutationInput, ProjectReviewUncheckedUpdateManyWithoutClientInput>
  }

  export type ProjectReviewScalarWhereInput = {
    AND?: ProjectReviewScalarWhereInput | ProjectReviewScalarWhereInput[]
    OR?: ProjectReviewScalarWhereInput[]
    NOT?: ProjectReviewScalarWhereInput | ProjectReviewScalarWhereInput[]
    id?: StringFilter<"ProjectReview"> | string
    service_id?: StringFilter<"ProjectReview"> | string
    client_id?: StringFilter<"ProjectReview"> | string
    contract_id?: StringNullableFilter<"ProjectReview"> | string | null
    scope?: StringFilter<"ProjectReview"> | string
    deliverables?: StringFilter<"ProjectReview"> | string
    timeline?: StringFilter<"ProjectReview"> | string
    pricing?: IntFilter<"ProjectReview"> | number
    status?: EnumReviewStatusFilter<"ProjectReview"> | $Enums.ReviewStatus
    termsAndConditions?: StringFilter<"ProjectReview"> | string
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
    client?: ProposalCreateNestedManyWithoutClientInput
    projectReview?: ProjectReviewCreateNestedManyWithoutClientInput
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
    client?: ProposalUncheckedCreateNestedManyWithoutClientInput
    projectReview?: ProjectReviewUncheckedCreateNestedManyWithoutClientInput
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
    client?: ProposalCreateNestedManyWithoutClientInput
    projectReview?: ProjectReviewCreateNestedManyWithoutClientInput
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
    client?: ProposalUncheckedCreateNestedManyWithoutClientInput
    projectReview?: ProjectReviewUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutServiceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput>
  }

  export type ProposalCreateWithoutServiceInput = {
    id?: string
    proposal_status: $Enums.ProposalStatus
    createdAt?: Date | string
    client?: UserCreateNestedOneWithoutClientInput
  }

  export type ProposalUncheckedCreateWithoutServiceInput = {
    id?: string
    clientId: string
    proposal_status: $Enums.ProposalStatus
    createdAt?: Date | string
  }

  export type ProposalCreateOrConnectWithoutServiceInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutServiceInput, ProposalUncheckedCreateWithoutServiceInput>
  }

  export type ProposalCreateManyServiceInputEnvelope = {
    data: ProposalCreateManyServiceInput | ProposalCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProjectReviewCreateWithoutServiceInput = {
    id?: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
    client: UserCreateNestedOneWithoutProjectReviewInput
  }

  export type ProjectReviewUncheckedCreateWithoutServiceInput = {
    id?: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
  }

  export type ProjectReviewCreateOrConnectWithoutServiceInput = {
    where: ProjectReviewWhereUniqueInput
    create: XOR<ProjectReviewCreateWithoutServiceInput, ProjectReviewUncheckedCreateWithoutServiceInput>
  }

  export type ProjectReviewCreateManyServiceInputEnvelope = {
    data: ProjectReviewCreateManyServiceInput | ProjectReviewCreateManyServiceInput[]
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
    client?: ProposalUpdateManyWithoutClientNestedInput
    projectReview?: ProjectReviewUpdateManyWithoutClientNestedInput
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
    client?: ProposalUncheckedUpdateManyWithoutClientNestedInput
    projectReview?: ProjectReviewUncheckedUpdateManyWithoutClientNestedInput
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

  export type ProjectReviewUpsertWithWhereUniqueWithoutServiceInput = {
    where: ProjectReviewWhereUniqueInput
    update: XOR<ProjectReviewUpdateWithoutServiceInput, ProjectReviewUncheckedUpdateWithoutServiceInput>
    create: XOR<ProjectReviewCreateWithoutServiceInput, ProjectReviewUncheckedCreateWithoutServiceInput>
  }

  export type ProjectReviewUpdateWithWhereUniqueWithoutServiceInput = {
    where: ProjectReviewWhereUniqueInput
    data: XOR<ProjectReviewUpdateWithoutServiceInput, ProjectReviewUncheckedUpdateWithoutServiceInput>
  }

  export type ProjectReviewUpdateManyWithWhereWithoutServiceInput = {
    where: ProjectReviewScalarWhereInput
    data: XOR<ProjectReviewUpdateManyMutationInput, ProjectReviewUncheckedUpdateManyWithoutServiceInput>
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
    projectReview?: ProjectReviewCreateNestedManyWithoutClientInput
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
    projectReview?: ProjectReviewUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutClientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
  }

  export type ServicesCreateWithoutProposalInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    DateCreated?: Date | string
    client?: UserCreateNestedOneWithoutServiceInput
    ProjectReview?: ProjectReviewCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateWithoutProposalInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    DateCreated?: Date | string
    ProjectReview?: ProjectReviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesCreateOrConnectWithoutProposalInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutProposalInput, ServicesUncheckedCreateWithoutProposalInput>
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
    projectReview?: ProjectReviewUpdateManyWithoutClientNestedInput
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
    projectReview?: ProjectReviewUncheckedUpdateManyWithoutClientNestedInput
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
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutServiceNestedInput
    ProjectReview?: ProjectReviewUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectReview?: ProjectReviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServicesCreateWithoutProjectReviewInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    DateCreated?: Date | string
    client?: UserCreateNestedOneWithoutServiceInput
    proposal?: ProposalCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateWithoutProjectReviewInput = {
    id?: string
    clientId?: string | null
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    DateCreated?: Date | string
    proposal?: ProposalUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesCreateOrConnectWithoutProjectReviewInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutProjectReviewInput, ServicesUncheckedCreateWithoutProjectReviewInput>
  }

  export type UserCreateWithoutProjectReviewInput = {
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
    client?: ProposalCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutProjectReviewInput = {
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
    client?: ProposalUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutProjectReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectReviewInput, UserUncheckedCreateWithoutProjectReviewInput>
  }

  export type ServicesUpsertWithoutProjectReviewInput = {
    update: XOR<ServicesUpdateWithoutProjectReviewInput, ServicesUncheckedUpdateWithoutProjectReviewInput>
    create: XOR<ServicesCreateWithoutProjectReviewInput, ServicesUncheckedCreateWithoutProjectReviewInput>
    where?: ServicesWhereInput
  }

  export type ServicesUpdateToOneWithWhereWithoutProjectReviewInput = {
    where?: ServicesWhereInput
    data: XOR<ServicesUpdateWithoutProjectReviewInput, ServicesUncheckedUpdateWithoutProjectReviewInput>
  }

  export type ServicesUpdateWithoutProjectReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutServiceNestedInput
    proposal?: ProposalUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateWithoutProjectReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserUpsertWithoutProjectReviewInput = {
    update: XOR<UserUpdateWithoutProjectReviewInput, UserUncheckedUpdateWithoutProjectReviewInput>
    create: XOR<UserCreateWithoutProjectReviewInput, UserUncheckedCreateWithoutProjectReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectReviewInput, UserUncheckedUpdateWithoutProjectReviewInput>
  }

  export type UserUpdateWithoutProjectReviewInput = {
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
    client?: ProposalUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectReviewInput = {
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
    client?: ProposalUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ServicesCreateManyClientInput = {
    id?: string
    ServiceName: string
    Description: string
    status: $Enums.serviceStatus
    DateCreated?: Date | string
  }

  export type ProposalCreateManyClientInput = {
    id?: string
    serviceId: string
    proposal_status: $Enums.ProposalStatus
    createdAt?: Date | string
  }

  export type ProjectReviewCreateManyClientInput = {
    id?: string
    service_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
  }

  export type ServicesUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUpdateManyWithoutServiceNestedInput
    ProjectReview?: ProjectReviewUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUncheckedUpdateManyWithoutServiceNestedInput
    ProjectReview?: ProjectReviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ServiceName?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    status?: EnumserviceStatusFieldUpdateOperationsInput | $Enums.serviceStatus
    DateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServicesUpdateOneRequiredWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectReviewUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    service?: ServicesUpdateOneRequiredWithoutProjectReviewNestedInput
  }

  export type ProjectReviewUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectReviewUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
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
    client?: ProposalUpdateManyWithoutClientNestedInput
    projectReview?: ProjectReviewUpdateManyWithoutClientNestedInput
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
    client?: ProposalUncheckedUpdateManyWithoutClientNestedInput
    projectReview?: ProjectReviewUncheckedUpdateManyWithoutClientNestedInput
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

  export type ProposalCreateManyServiceInput = {
    id?: string
    clientId: string
    proposal_status: $Enums.ProposalStatus
    createdAt?: Date | string
  }

  export type ProjectReviewCreateManyServiceInput = {
    id?: string
    client_id: string
    contract_id?: string | null
    scope: string
    deliverables: string
    timeline: string
    pricing: number
    status: $Enums.ReviewStatus
    termsAndConditions: string
  }

  export type ProposalUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutClientNestedInput
  }

  export type ProposalUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposal_status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectReviewUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
    client?: UserUpdateOneRequiredWithoutProjectReviewNestedInput
  }

  export type ProjectReviewUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectReviewUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    contract_id?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    deliverables?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    termsAndConditions?: StringFieldUpdateOperationsInput | string
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