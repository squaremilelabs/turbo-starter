/* eslint-disable */
import type { Prisma, ClerkUserPublicMetadata } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateClerkUserPublicMetadata(options?: Omit<(UseMutationOptions<(ClerkUserPublicMetadata | undefined), DefaultError, Prisma.ClerkUserPublicMetadataCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPublicMetadataCreateArgs, DefaultError, ClerkUserPublicMetadata, true>('ClerkUserPublicMetadata', 'POST', `${endpoint}/clerkUserPublicMetadata/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPublicMetadataCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserPublicMetadata, Prisma.ClerkUserPublicMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserPublicMetadata, Prisma.ClerkUserPublicMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyClerkUserPublicMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserPublicMetadataCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPublicMetadataCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserPublicMetadata', 'POST', `${endpoint}/clerkUserPublicMetadata/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPublicMetadataCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/findMany`, args, options, fetch);
}

export function useInfiniteFindManyClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserPublicMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/findMany`, args, options, fetch);
}

export function useSuspenseFindManyClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserPublicMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/findMany`, args, options, fetch);
}

export function useFindUniqueClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataFindUniqueArgs, TQueryFnData = Prisma.ClerkUserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataFindUniqueArgs, TQueryFnData = Prisma.ClerkUserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/findUnique`, args, options, fetch);
}

export function useFindFirstClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataFindFirstArgs, TQueryFnData = Prisma.ClerkUserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataFindFirstArgs, TQueryFnData = Prisma.ClerkUserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/findFirst`, args, options, fetch);
}

export function useUpdateClerkUserPublicMetadata(options?: Omit<(UseMutationOptions<(ClerkUserPublicMetadata | undefined), DefaultError, Prisma.ClerkUserPublicMetadataUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPublicMetadataUpdateArgs, DefaultError, ClerkUserPublicMetadata, true>('ClerkUserPublicMetadata', 'PUT', `${endpoint}/clerkUserPublicMetadata/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPublicMetadataUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserPublicMetadata, Prisma.ClerkUserPublicMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserPublicMetadata, Prisma.ClerkUserPublicMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyClerkUserPublicMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserPublicMetadataUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPublicMetadataUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserPublicMetadata', 'PUT', `${endpoint}/clerkUserPublicMetadata/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPublicMetadataUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertClerkUserPublicMetadata(options?: Omit<(UseMutationOptions<(ClerkUserPublicMetadata | undefined), DefaultError, Prisma.ClerkUserPublicMetadataUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPublicMetadataUpsertArgs, DefaultError, ClerkUserPublicMetadata, true>('ClerkUserPublicMetadata', 'POST', `${endpoint}/clerkUserPublicMetadata/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPublicMetadataUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserPublicMetadata, Prisma.ClerkUserPublicMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserPublicMetadata, Prisma.ClerkUserPublicMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteClerkUserPublicMetadata(options?: Omit<(UseMutationOptions<(ClerkUserPublicMetadata | undefined), DefaultError, Prisma.ClerkUserPublicMetadataDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPublicMetadataDeleteArgs, DefaultError, ClerkUserPublicMetadata, true>('ClerkUserPublicMetadata', 'DELETE', `${endpoint}/clerkUserPublicMetadata/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPublicMetadataDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserPublicMetadata, Prisma.ClerkUserPublicMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserPublicMetadata, Prisma.ClerkUserPublicMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyClerkUserPublicMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserPublicMetadataDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserPublicMetadataDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserPublicMetadata', 'DELETE', `${endpoint}/clerkUserPublicMetadata/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserPublicMetadataDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserPublicMetadataDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataAggregateArgs, TQueryFnData = Prisma.GetClerkUserPublicMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataAggregateArgs, TQueryFnData = Prisma.GetClerkUserPublicMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/aggregate`, args, options, fetch);
}

export function useGroupByClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkUserPublicMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkUserPublicMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkUserPublicMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkUserPublicMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserPublicMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserPublicMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkUserPublicMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkUserPublicMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkUserPublicMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkUserPublicMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkUserPublicMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserPublicMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserPublicMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkUserPublicMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/groupBy`, args, options, fetch);
}

export function useCountClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkUserPublicMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/count`, args, options, fetch);
}

export function useSuspenseCountClerkUserPublicMetadata<TArgs extends Prisma.ClerkUserPublicMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkUserPublicMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserPublicMetadataCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/count`, args, options, fetch);
}

export function useCheckClerkUserPublicMetadata<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { userId?: string; is_super_admin?: boolean }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ClerkUserPublicMetadata', `${endpoint}/clerkUserPublicMetadata/check`, args, options, fetch);
}
