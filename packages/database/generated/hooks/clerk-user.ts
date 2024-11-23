/* eslint-disable */
import type { Prisma, ClerkUser } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateClerkUser(options?: Omit<(UseMutationOptions<(ClerkUser | undefined), DefaultError, Prisma.ClerkUserCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserCreateArgs, DefaultError, ClerkUser, true>('ClerkUser', 'POST', `${endpoint}/clerkUser/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUser, Prisma.ClerkUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUser, Prisma.ClerkUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyClerkUser(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUser', 'POST', `${endpoint}/clerkUser/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyClerkUser<TArgs extends Prisma.ClerkUserFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/findMany`, args, options, fetch);
}

export function useInfiniteFindManyClerkUser<TArgs extends Prisma.ClerkUserFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/findMany`, args, options, fetch);
}

export function useSuspenseFindManyClerkUser<TArgs extends Prisma.ClerkUserFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyClerkUser<TArgs extends Prisma.ClerkUserFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/findMany`, args, options, fetch);
}

export function useFindUniqueClerkUser<TArgs extends Prisma.ClerkUserFindUniqueArgs, TQueryFnData = Prisma.ClerkUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueClerkUser<TArgs extends Prisma.ClerkUserFindUniqueArgs, TQueryFnData = Prisma.ClerkUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/findUnique`, args, options, fetch);
}

export function useFindFirstClerkUser<TArgs extends Prisma.ClerkUserFindFirstArgs, TQueryFnData = Prisma.ClerkUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstClerkUser<TArgs extends Prisma.ClerkUserFindFirstArgs, TQueryFnData = Prisma.ClerkUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/findFirst`, args, options, fetch);
}

export function useUpdateClerkUser(options?: Omit<(UseMutationOptions<(ClerkUser | undefined), DefaultError, Prisma.ClerkUserUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUpdateArgs, DefaultError, ClerkUser, true>('ClerkUser', 'PUT', `${endpoint}/clerkUser/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUser, Prisma.ClerkUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUser, Prisma.ClerkUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyClerkUser(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUser', 'PUT', `${endpoint}/clerkUser/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertClerkUser(options?: Omit<(UseMutationOptions<(ClerkUser | undefined), DefaultError, Prisma.ClerkUserUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUpsertArgs, DefaultError, ClerkUser, true>('ClerkUser', 'POST', `${endpoint}/clerkUser/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUser, Prisma.ClerkUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUser, Prisma.ClerkUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteClerkUser(options?: Omit<(UseMutationOptions<(ClerkUser | undefined), DefaultError, Prisma.ClerkUserDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserDeleteArgs, DefaultError, ClerkUser, true>('ClerkUser', 'DELETE', `${endpoint}/clerkUser/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUser, Prisma.ClerkUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUser, Prisma.ClerkUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyClerkUser(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUser', 'DELETE', `${endpoint}/clerkUser/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateClerkUser<TArgs extends Prisma.ClerkUserAggregateArgs, TQueryFnData = Prisma.GetClerkUserAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateClerkUser<TArgs extends Prisma.ClerkUserAggregateArgs, TQueryFnData = Prisma.GetClerkUserAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/aggregate`, args, options, fetch);
}

export function useGroupByClerkUser<TArgs extends Prisma.ClerkUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkUserGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkUserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkUserGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkUserGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkUserGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByClerkUser<TArgs extends Prisma.ClerkUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkUserGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkUserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkUserGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkUserGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkUserGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/groupBy`, args, options, fetch);
}

export function useCountClerkUser<TArgs extends Prisma.ClerkUserCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkUserCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/count`, args, options, fetch);
}

export function useSuspenseCountClerkUser<TArgs extends Prisma.ClerkUserCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkUserCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUser', `${endpoint}/clerkUser/count`, args, options, fetch);
}

export function useCheckClerkUser<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; passwordEnabled?: boolean; totpEnabled?: boolean; backupCodeEnabled?: boolean; twoFactorEnabled?: boolean; banned?: boolean; locked?: boolean; createdAt?: number; updatedAt?: number; imageUrl?: string; hasImage?: boolean; primaryEmailAddressId?: string; primaryPhoneNumberId?: string; primaryWeb3WalletId?: string; lastSignInAt?: number; externalId?: string; username?: string; firstName?: string; lastName?: string; fullName?: string; lastActiveAt?: number; createOrganizationEnabled?: boolean; createOrganizationsLimit?: number; deleteSelfEnabled?: boolean; legalAcceptedAt?: number }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ClerkUser', `${endpoint}/clerkUser/check`, args, options, fetch);
}
