/* eslint-disable */
import type { Prisma, ClerkEmailAddress } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateClerkEmailAddress(options?: Omit<(UseMutationOptions<(ClerkEmailAddress | undefined), DefaultError, Prisma.ClerkEmailAddressCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkEmailAddressCreateArgs, DefaultError, ClerkEmailAddress, true>('ClerkEmailAddress', 'POST', `${endpoint}/clerkEmailAddress/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkEmailAddressCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkEmailAddressCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkEmailAddress, Prisma.ClerkEmailAddressGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkEmailAddressCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkEmailAddress, Prisma.ClerkEmailAddressGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyClerkEmailAddress(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkEmailAddressCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkEmailAddressCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkEmailAddress', 'POST', `${endpoint}/clerkEmailAddress/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkEmailAddressCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkEmailAddressCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkEmailAddressCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressFindManyArgs, TQueryFnData = Array<Prisma.ClerkEmailAddressGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/findMany`, args, options, fetch);
}

export function useInfiniteFindManyClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressFindManyArgs, TQueryFnData = Array<Prisma.ClerkEmailAddressGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/findMany`, args, options, fetch);
}

export function useSuspenseFindManyClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressFindManyArgs, TQueryFnData = Array<Prisma.ClerkEmailAddressGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressFindManyArgs, TQueryFnData = Array<Prisma.ClerkEmailAddressGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/findMany`, args, options, fetch);
}

export function useFindUniqueClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressFindUniqueArgs, TQueryFnData = Prisma.ClerkEmailAddressGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressFindUniqueArgs, TQueryFnData = Prisma.ClerkEmailAddressGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/findUnique`, args, options, fetch);
}

export function useFindFirstClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressFindFirstArgs, TQueryFnData = Prisma.ClerkEmailAddressGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressFindFirstArgs, TQueryFnData = Prisma.ClerkEmailAddressGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/findFirst`, args, options, fetch);
}

export function useUpdateClerkEmailAddress(options?: Omit<(UseMutationOptions<(ClerkEmailAddress | undefined), DefaultError, Prisma.ClerkEmailAddressUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkEmailAddressUpdateArgs, DefaultError, ClerkEmailAddress, true>('ClerkEmailAddress', 'PUT', `${endpoint}/clerkEmailAddress/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkEmailAddressUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkEmailAddressUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkEmailAddress, Prisma.ClerkEmailAddressGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkEmailAddressUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkEmailAddress, Prisma.ClerkEmailAddressGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyClerkEmailAddress(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkEmailAddressUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkEmailAddressUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkEmailAddress', 'PUT', `${endpoint}/clerkEmailAddress/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkEmailAddressUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkEmailAddressUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkEmailAddressUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertClerkEmailAddress(options?: Omit<(UseMutationOptions<(ClerkEmailAddress | undefined), DefaultError, Prisma.ClerkEmailAddressUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkEmailAddressUpsertArgs, DefaultError, ClerkEmailAddress, true>('ClerkEmailAddress', 'POST', `${endpoint}/clerkEmailAddress/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkEmailAddressUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkEmailAddressUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkEmailAddress, Prisma.ClerkEmailAddressGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkEmailAddressUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkEmailAddress, Prisma.ClerkEmailAddressGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteClerkEmailAddress(options?: Omit<(UseMutationOptions<(ClerkEmailAddress | undefined), DefaultError, Prisma.ClerkEmailAddressDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkEmailAddressDeleteArgs, DefaultError, ClerkEmailAddress, true>('ClerkEmailAddress', 'DELETE', `${endpoint}/clerkEmailAddress/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkEmailAddressDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkEmailAddressDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkEmailAddress, Prisma.ClerkEmailAddressGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkEmailAddressDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkEmailAddress, Prisma.ClerkEmailAddressGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyClerkEmailAddress(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkEmailAddressDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkEmailAddressDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkEmailAddress', 'DELETE', `${endpoint}/clerkEmailAddress/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkEmailAddressDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkEmailAddressDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkEmailAddressDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressAggregateArgs, TQueryFnData = Prisma.GetClerkEmailAddressAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressAggregateArgs, TQueryFnData = Prisma.GetClerkEmailAddressAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/aggregate`, args, options, fetch);
}

export function useGroupByClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkEmailAddressGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkEmailAddressGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkEmailAddressGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkEmailAddressGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkEmailAddressGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkEmailAddressGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkEmailAddressGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkEmailAddressGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkEmailAddressGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkEmailAddressGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkEmailAddressGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkEmailAddressGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkEmailAddressGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkEmailAddressGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/groupBy`, args, options, fetch);
}

export function useCountClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkEmailAddressCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/count`, args, options, fetch);
}

export function useSuspenseCountClerkEmailAddress<TArgs extends Prisma.ClerkEmailAddressCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkEmailAddressCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkEmailAddressCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/count`, args, options, fetch);
}

export function useCheckClerkEmailAddress<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; userId?: string; emailAddress?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ClerkEmailAddress', `${endpoint}/clerkEmailAddress/check`, args, options, fetch);
}
