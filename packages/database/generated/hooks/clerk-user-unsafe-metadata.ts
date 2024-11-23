/* eslint-disable */
import type { Prisma, ClerkUserUnsafeMetadata } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateClerkUserUnsafeMetadata(options?: Omit<(UseMutationOptions<(ClerkUserUnsafeMetadata | undefined), DefaultError, Prisma.ClerkUserUnsafeMetadataCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUnsafeMetadataCreateArgs, DefaultError, ClerkUserUnsafeMetadata, true>('ClerkUserUnsafeMetadata', 'POST', `${endpoint}/clerkUserUnsafeMetadata/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUnsafeMetadataCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserUnsafeMetadata, Prisma.ClerkUserUnsafeMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserUnsafeMetadata, Prisma.ClerkUserUnsafeMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyClerkUserUnsafeMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserUnsafeMetadataCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUnsafeMetadataCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserUnsafeMetadata', 'POST', `${endpoint}/clerkUserUnsafeMetadata/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUnsafeMetadataCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/findMany`, args, options, fetch);
}

export function useInfiniteFindManyClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserUnsafeMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/findMany`, args, options, fetch);
}

export function useSuspenseFindManyClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserUnsafeMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/findMany`, args, options, fetch);
}

export function useFindUniqueClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataFindUniqueArgs, TQueryFnData = Prisma.ClerkUserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataFindUniqueArgs, TQueryFnData = Prisma.ClerkUserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/findUnique`, args, options, fetch);
}

export function useFindFirstClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataFindFirstArgs, TQueryFnData = Prisma.ClerkUserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataFindFirstArgs, TQueryFnData = Prisma.ClerkUserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/findFirst`, args, options, fetch);
}

export function useUpdateClerkUserUnsafeMetadata(options?: Omit<(UseMutationOptions<(ClerkUserUnsafeMetadata | undefined), DefaultError, Prisma.ClerkUserUnsafeMetadataUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUnsafeMetadataUpdateArgs, DefaultError, ClerkUserUnsafeMetadata, true>('ClerkUserUnsafeMetadata', 'PUT', `${endpoint}/clerkUserUnsafeMetadata/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUnsafeMetadataUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserUnsafeMetadata, Prisma.ClerkUserUnsafeMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserUnsafeMetadata, Prisma.ClerkUserUnsafeMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyClerkUserUnsafeMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserUnsafeMetadataUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUnsafeMetadataUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserUnsafeMetadata', 'PUT', `${endpoint}/clerkUserUnsafeMetadata/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUnsafeMetadataUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertClerkUserUnsafeMetadata(options?: Omit<(UseMutationOptions<(ClerkUserUnsafeMetadata | undefined), DefaultError, Prisma.ClerkUserUnsafeMetadataUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUnsafeMetadataUpsertArgs, DefaultError, ClerkUserUnsafeMetadata, true>('ClerkUserUnsafeMetadata', 'POST', `${endpoint}/clerkUserUnsafeMetadata/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUnsafeMetadataUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserUnsafeMetadata, Prisma.ClerkUserUnsafeMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserUnsafeMetadata, Prisma.ClerkUserUnsafeMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteClerkUserUnsafeMetadata(options?: Omit<(UseMutationOptions<(ClerkUserUnsafeMetadata | undefined), DefaultError, Prisma.ClerkUserUnsafeMetadataDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUnsafeMetadataDeleteArgs, DefaultError, ClerkUserUnsafeMetadata, true>('ClerkUserUnsafeMetadata', 'DELETE', `${endpoint}/clerkUserUnsafeMetadata/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUnsafeMetadataDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserUnsafeMetadata, Prisma.ClerkUserUnsafeMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserUnsafeMetadata, Prisma.ClerkUserUnsafeMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyClerkUserUnsafeMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserUnsafeMetadataDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserUnsafeMetadataDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserUnsafeMetadata', 'DELETE', `${endpoint}/clerkUserUnsafeMetadata/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserUnsafeMetadataDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserUnsafeMetadataDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataAggregateArgs, TQueryFnData = Prisma.GetClerkUserUnsafeMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataAggregateArgs, TQueryFnData = Prisma.GetClerkUserUnsafeMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/aggregate`, args, options, fetch);
}

export function useGroupByClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkUserUnsafeMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkUserUnsafeMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkUserUnsafeMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkUserUnsafeMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserUnsafeMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserUnsafeMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkUserUnsafeMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkUserUnsafeMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkUserUnsafeMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkUserUnsafeMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkUserUnsafeMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserUnsafeMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserUnsafeMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkUserUnsafeMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/groupBy`, args, options, fetch);
}

export function useCountClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkUserUnsafeMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/count`, args, options, fetch);
}

export function useSuspenseCountClerkUserUnsafeMetadata<TArgs extends Prisma.ClerkUserUnsafeMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkUserUnsafeMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserUnsafeMetadataCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/count`, args, options, fetch);
}

export function useCheckClerkUserUnsafeMetadata<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { userId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ClerkUserUnsafeMetadata', `${endpoint}/clerkUserUnsafeMetadata/check`, args, options, fetch);
}
