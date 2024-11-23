/* eslint-disable */
import type { Prisma, BackendClerkUser } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateBackendClerkUser(options?: Omit<(UseMutationOptions<(BackendClerkUser | undefined), DefaultError, Prisma.BackendClerkUserCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.BackendClerkUserCreateArgs, DefaultError, BackendClerkUser, true>('BackendClerkUser', 'POST', `${endpoint}/backendClerkUser/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.BackendClerkUserCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.BackendClerkUserCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, BackendClerkUser, Prisma.BackendClerkUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.BackendClerkUserCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, BackendClerkUser, Prisma.BackendClerkUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyBackendClerkUser(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.BackendClerkUserCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.BackendClerkUserCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('BackendClerkUser', 'POST', `${endpoint}/backendClerkUser/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.BackendClerkUserCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.BackendClerkUserCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.BackendClerkUserCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyBackendClerkUser<TArgs extends Prisma.BackendClerkUserFindManyArgs, TQueryFnData = Array<Prisma.BackendClerkUserGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/findMany`, args, options, fetch);
}

export function useInfiniteFindManyBackendClerkUser<TArgs extends Prisma.BackendClerkUserFindManyArgs, TQueryFnData = Array<Prisma.BackendClerkUserGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/findMany`, args, options, fetch);
}

export function useSuspenseFindManyBackendClerkUser<TArgs extends Prisma.BackendClerkUserFindManyArgs, TQueryFnData = Array<Prisma.BackendClerkUserGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyBackendClerkUser<TArgs extends Prisma.BackendClerkUserFindManyArgs, TQueryFnData = Array<Prisma.BackendClerkUserGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/findMany`, args, options, fetch);
}

export function useFindUniqueBackendClerkUser<TArgs extends Prisma.BackendClerkUserFindUniqueArgs, TQueryFnData = Prisma.BackendClerkUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueBackendClerkUser<TArgs extends Prisma.BackendClerkUserFindUniqueArgs, TQueryFnData = Prisma.BackendClerkUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/findUnique`, args, options, fetch);
}

export function useFindFirstBackendClerkUser<TArgs extends Prisma.BackendClerkUserFindFirstArgs, TQueryFnData = Prisma.BackendClerkUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstBackendClerkUser<TArgs extends Prisma.BackendClerkUserFindFirstArgs, TQueryFnData = Prisma.BackendClerkUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/findFirst`, args, options, fetch);
}

export function useUpdateBackendClerkUser(options?: Omit<(UseMutationOptions<(BackendClerkUser | undefined), DefaultError, Prisma.BackendClerkUserUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.BackendClerkUserUpdateArgs, DefaultError, BackendClerkUser, true>('BackendClerkUser', 'PUT', `${endpoint}/backendClerkUser/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.BackendClerkUserUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.BackendClerkUserUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, BackendClerkUser, Prisma.BackendClerkUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.BackendClerkUserUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, BackendClerkUser, Prisma.BackendClerkUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyBackendClerkUser(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.BackendClerkUserUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.BackendClerkUserUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('BackendClerkUser', 'PUT', `${endpoint}/backendClerkUser/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.BackendClerkUserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.BackendClerkUserUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.BackendClerkUserUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertBackendClerkUser(options?: Omit<(UseMutationOptions<(BackendClerkUser | undefined), DefaultError, Prisma.BackendClerkUserUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.BackendClerkUserUpsertArgs, DefaultError, BackendClerkUser, true>('BackendClerkUser', 'POST', `${endpoint}/backendClerkUser/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.BackendClerkUserUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.BackendClerkUserUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, BackendClerkUser, Prisma.BackendClerkUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.BackendClerkUserUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, BackendClerkUser, Prisma.BackendClerkUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteBackendClerkUser(options?: Omit<(UseMutationOptions<(BackendClerkUser | undefined), DefaultError, Prisma.BackendClerkUserDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.BackendClerkUserDeleteArgs, DefaultError, BackendClerkUser, true>('BackendClerkUser', 'DELETE', `${endpoint}/backendClerkUser/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.BackendClerkUserDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.BackendClerkUserDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, BackendClerkUser, Prisma.BackendClerkUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.BackendClerkUserDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, BackendClerkUser, Prisma.BackendClerkUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyBackendClerkUser(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.BackendClerkUserDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.BackendClerkUserDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('BackendClerkUser', 'DELETE', `${endpoint}/backendClerkUser/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.BackendClerkUserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.BackendClerkUserDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.BackendClerkUserDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateBackendClerkUser<TArgs extends Prisma.BackendClerkUserAggregateArgs, TQueryFnData = Prisma.GetBackendClerkUserAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateBackendClerkUser<TArgs extends Prisma.BackendClerkUserAggregateArgs, TQueryFnData = Prisma.GetBackendClerkUserAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/aggregate`, args, options, fetch);
}

export function useGroupByBackendClerkUser<TArgs extends Prisma.BackendClerkUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.BackendClerkUserGroupByArgs['orderBy'] } : { orderBy?: Prisma.BackendClerkUserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
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
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.BackendClerkUserGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.BackendClerkUserGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.BackendClerkUserGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.BackendClerkUserGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.BackendClerkUserGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByBackendClerkUser<TArgs extends Prisma.BackendClerkUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.BackendClerkUserGroupByArgs['orderBy'] } : { orderBy?: Prisma.BackendClerkUserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
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
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.BackendClerkUserGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.BackendClerkUserGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.BackendClerkUserGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.BackendClerkUserGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.BackendClerkUserGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/groupBy`, args, options, fetch);
}

export function useCountBackendClerkUser<TArgs extends Prisma.BackendClerkUserCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.BackendClerkUserCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/count`, args, options, fetch);
}

export function useSuspenseCountBackendClerkUser<TArgs extends Prisma.BackendClerkUserCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.BackendClerkUserCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.BackendClerkUserCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/count`, args, options, fetch);
}

export function useCheckBackendClerkUser<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; passwordEnabled?: boolean; totpEnabled?: boolean; backupCodeEnabled?: boolean; twoFactorEnabled?: boolean; banned?: boolean; locked?: boolean; createdAt?: number; updatedAt?: number; imageUrl?: string; hasImage?: boolean; primaryEmailAddressId?: string; primaryPhoneNumberId?: string; primaryWeb3WalletId?: string; lastSignInAt?: number; externalId?: string; username?: string; firstName?: string; lastName?: string; fullName?: string; lastActiveAt?: number; createOrganizationEnabled?: boolean; createOrganizationsLimit?: number; deleteSelfEnabled?: boolean; legalAcceptedAt?: number }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('BackendClerkUser', `${endpoint}/backendClerkUser/check`, args, options, fetch);
}
