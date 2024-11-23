/* eslint-disable */
import type { Prisma, ClerkVerification } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateClerkVerification(options?: Omit<(UseMutationOptions<(ClerkVerification | undefined), DefaultError, Prisma.ClerkVerificationCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkVerificationCreateArgs, DefaultError, ClerkVerification, true>('ClerkVerification', 'POST', `${endpoint}/clerkVerification/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkVerificationCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkVerificationCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkVerification, Prisma.ClerkVerificationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkVerificationCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkVerification, Prisma.ClerkVerificationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyClerkVerification(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkVerificationCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkVerificationCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkVerification', 'POST', `${endpoint}/clerkVerification/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkVerificationCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkVerificationCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkVerificationCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyClerkVerification<TArgs extends Prisma.ClerkVerificationFindManyArgs, TQueryFnData = Array<Prisma.ClerkVerificationGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/findMany`, args, options, fetch);
}

export function useInfiniteFindManyClerkVerification<TArgs extends Prisma.ClerkVerificationFindManyArgs, TQueryFnData = Array<Prisma.ClerkVerificationGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/findMany`, args, options, fetch);
}

export function useSuspenseFindManyClerkVerification<TArgs extends Prisma.ClerkVerificationFindManyArgs, TQueryFnData = Array<Prisma.ClerkVerificationGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyClerkVerification<TArgs extends Prisma.ClerkVerificationFindManyArgs, TQueryFnData = Array<Prisma.ClerkVerificationGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/findMany`, args, options, fetch);
}

export function useFindUniqueClerkVerification<TArgs extends Prisma.ClerkVerificationFindUniqueArgs, TQueryFnData = Prisma.ClerkVerificationGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueClerkVerification<TArgs extends Prisma.ClerkVerificationFindUniqueArgs, TQueryFnData = Prisma.ClerkVerificationGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/findUnique`, args, options, fetch);
}

export function useFindFirstClerkVerification<TArgs extends Prisma.ClerkVerificationFindFirstArgs, TQueryFnData = Prisma.ClerkVerificationGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstClerkVerification<TArgs extends Prisma.ClerkVerificationFindFirstArgs, TQueryFnData = Prisma.ClerkVerificationGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/findFirst`, args, options, fetch);
}

export function useUpdateClerkVerification(options?: Omit<(UseMutationOptions<(ClerkVerification | undefined), DefaultError, Prisma.ClerkVerificationUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkVerificationUpdateArgs, DefaultError, ClerkVerification, true>('ClerkVerification', 'PUT', `${endpoint}/clerkVerification/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkVerificationUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkVerificationUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkVerification, Prisma.ClerkVerificationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkVerificationUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkVerification, Prisma.ClerkVerificationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyClerkVerification(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkVerificationUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkVerificationUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkVerification', 'PUT', `${endpoint}/clerkVerification/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkVerificationUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkVerificationUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkVerificationUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertClerkVerification(options?: Omit<(UseMutationOptions<(ClerkVerification | undefined), DefaultError, Prisma.ClerkVerificationUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkVerificationUpsertArgs, DefaultError, ClerkVerification, true>('ClerkVerification', 'POST', `${endpoint}/clerkVerification/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkVerificationUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkVerificationUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkVerification, Prisma.ClerkVerificationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkVerificationUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkVerification, Prisma.ClerkVerificationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteClerkVerification(options?: Omit<(UseMutationOptions<(ClerkVerification | undefined), DefaultError, Prisma.ClerkVerificationDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkVerificationDeleteArgs, DefaultError, ClerkVerification, true>('ClerkVerification', 'DELETE', `${endpoint}/clerkVerification/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkVerificationDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkVerificationDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkVerification, Prisma.ClerkVerificationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkVerificationDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkVerification, Prisma.ClerkVerificationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyClerkVerification(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkVerificationDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkVerificationDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkVerification', 'DELETE', `${endpoint}/clerkVerification/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkVerificationDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkVerificationDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkVerificationDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateClerkVerification<TArgs extends Prisma.ClerkVerificationAggregateArgs, TQueryFnData = Prisma.GetClerkVerificationAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateClerkVerification<TArgs extends Prisma.ClerkVerificationAggregateArgs, TQueryFnData = Prisma.GetClerkVerificationAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/aggregate`, args, options, fetch);
}

export function useGroupByClerkVerification<TArgs extends Prisma.ClerkVerificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkVerificationGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkVerificationGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkVerificationGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkVerificationGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkVerificationGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkVerificationGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkVerificationGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByClerkVerification<TArgs extends Prisma.ClerkVerificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkVerificationGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkVerificationGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkVerificationGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkVerificationGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkVerificationGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkVerificationGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkVerificationGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/groupBy`, args, options, fetch);
}

export function useCountClerkVerification<TArgs extends Prisma.ClerkVerificationCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkVerificationCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/count`, args, options, fetch);
}

export function useSuspenseCountClerkVerification<TArgs extends Prisma.ClerkVerificationCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkVerificationCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkVerificationCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkVerification', `${endpoint}/clerkVerification/count`, args, options, fetch);
}
import type { ClerkVerificationStatus } from '@prisma/client';

export function useCheckClerkVerification<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; emailAddressId?: string; phoneNumberId?: string; status?: ClerkVerificationStatus }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ClerkVerification', `${endpoint}/clerkVerification/check`, args, options, fetch);
}
