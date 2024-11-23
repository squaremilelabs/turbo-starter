/* eslint-disable */
import type { Prisma, ClerkUserPrivateMetadata } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateClerkUserPrivateMetadata(options?: Omit<(UseMutationOptions<(ClerkUserPrivateMetadata | undefined), DefaultError, Prisma.ClerkUserPrivateMetadataCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPrivateMetadataCreateArgs, DefaultError, ClerkUserPrivateMetadata, true>('ClerkUserPrivateMetadata', 'POST', `${endpoint}/clerkUserPrivateMetadata/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPrivateMetadataCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserPrivateMetadata, Prisma.ClerkUserPrivateMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserPrivateMetadata, Prisma.ClerkUserPrivateMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyClerkUserPrivateMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserPrivateMetadataCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPrivateMetadataCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserPrivateMetadata', 'POST', `${endpoint}/clerkUserPrivateMetadata/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPrivateMetadataCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/findMany`, args, options, fetch);
}

export function useInfiniteFindManyClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserPrivateMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/findMany`, args, options, fetch);
}

export function useSuspenseFindManyClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserPrivateMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/findMany`, args, options, fetch);
}

export function useFindUniqueClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataFindUniqueArgs, TQueryFnData = Prisma.ClerkUserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataFindUniqueArgs, TQueryFnData = Prisma.ClerkUserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/findUnique`, args, options, fetch);
}

export function useFindFirstClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataFindFirstArgs, TQueryFnData = Prisma.ClerkUserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataFindFirstArgs, TQueryFnData = Prisma.ClerkUserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/findFirst`, args, options, fetch);
}

export function useUpdateClerkUserPrivateMetadata(options?: Omit<(UseMutationOptions<(ClerkUserPrivateMetadata | undefined), DefaultError, Prisma.ClerkUserPrivateMetadataUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPrivateMetadataUpdateArgs, DefaultError, ClerkUserPrivateMetadata, true>('ClerkUserPrivateMetadata', 'PUT', `${endpoint}/clerkUserPrivateMetadata/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPrivateMetadataUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserPrivateMetadata, Prisma.ClerkUserPrivateMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserPrivateMetadata, Prisma.ClerkUserPrivateMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyClerkUserPrivateMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserPrivateMetadataUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPrivateMetadataUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserPrivateMetadata', 'PUT', `${endpoint}/clerkUserPrivateMetadata/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPrivateMetadataUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertClerkUserPrivateMetadata(options?: Omit<(UseMutationOptions<(ClerkUserPrivateMetadata | undefined), DefaultError, Prisma.ClerkUserPrivateMetadataUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPrivateMetadataUpsertArgs, DefaultError, ClerkUserPrivateMetadata, true>('ClerkUserPrivateMetadata', 'POST', `${endpoint}/clerkUserPrivateMetadata/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPrivateMetadataUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserPrivateMetadata, Prisma.ClerkUserPrivateMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserPrivateMetadata, Prisma.ClerkUserPrivateMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteClerkUserPrivateMetadata(options?: Omit<(UseMutationOptions<(ClerkUserPrivateMetadata | undefined), DefaultError, Prisma.ClerkUserPrivateMetadataDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPrivateMetadataDeleteArgs, DefaultError, ClerkUserPrivateMetadata, true>('ClerkUserPrivateMetadata', 'DELETE', `${endpoint}/clerkUserPrivateMetadata/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPrivateMetadataDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserPrivateMetadata, Prisma.ClerkUserPrivateMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserPrivateMetadata, Prisma.ClerkUserPrivateMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyClerkUserPrivateMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserPrivateMetadataDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPrivateMetadataDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserPrivateMetadata', 'DELETE', `${endpoint}/clerkUserPrivateMetadata/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPrivateMetadataDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPrivateMetadataDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataAggregateArgs, TQueryFnData = Prisma.GetClerkUserPrivateMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataAggregateArgs, TQueryFnData = Prisma.GetClerkUserPrivateMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/aggregate`, args, options, fetch);
}

export function useGroupByClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkUserPrivateMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkUserPrivateMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkUserPrivateMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkUserPrivateMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserPrivateMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserPrivateMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkUserPrivateMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkUserPrivateMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkUserPrivateMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkUserPrivateMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkUserPrivateMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserPrivateMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserPrivateMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkUserPrivateMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/groupBy`, args, options, fetch);
}

export function useCountClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkUserPrivateMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/count`, args, options, fetch);
}

export function useSuspenseCountClerkUserPrivateMetadata<TArgs extends Prisma.ClerkUserPrivateMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkUserPrivateMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPrivateMetadataCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/count`, args, options, fetch);
}

export function useCheckClerkUserPrivateMetadata<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { userId?: string; api_key?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ClerkUserPrivateMetadata', `${endpoint}/clerkUserPrivateMetadata/check`, args, options, fetch);
}
