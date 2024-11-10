/* eslint-disable */
import type { Prisma, UserPublicMetadata } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateUserPublicMetadata(options?: Omit<(UseMutationOptions<(UserPublicMetadata | undefined), DefaultError, Prisma.UserPublicMetadataCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPublicMetadataCreateArgs, DefaultError, UserPublicMetadata, true>('UserPublicMetadata', 'POST', `${endpoint}/userPublicMetadata/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPublicMetadataCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPublicMetadataCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserPublicMetadata, Prisma.UserPublicMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserPublicMetadataCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserPublicMetadata, Prisma.UserPublicMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyUserPublicMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserPublicMetadataCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPublicMetadataCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('UserPublicMetadata', 'POST', `${endpoint}/userPublicMetadata/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPublicMetadataCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPublicMetadataCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserPublicMetadataCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/findMany`, args, options, fetch);
}

export function useInfiniteFindManyUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserPublicMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/findMany`, args, options, fetch);
}

export function useSuspenseFindManyUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserPublicMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/findMany`, args, options, fetch);
}

export function useFindUniqueUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataFindUniqueArgs, TQueryFnData = Prisma.UserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataFindUniqueArgs, TQueryFnData = Prisma.UserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/findUnique`, args, options, fetch);
}

export function useFindFirstUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataFindFirstArgs, TQueryFnData = Prisma.UserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataFindFirstArgs, TQueryFnData = Prisma.UserPublicMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/findFirst`, args, options, fetch);
}

export function useUpdateUserPublicMetadata(options?: Omit<(UseMutationOptions<(UserPublicMetadata | undefined), DefaultError, Prisma.UserPublicMetadataUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPublicMetadataUpdateArgs, DefaultError, UserPublicMetadata, true>('UserPublicMetadata', 'PUT', `${endpoint}/userPublicMetadata/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPublicMetadataUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPublicMetadataUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserPublicMetadata, Prisma.UserPublicMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserPublicMetadataUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserPublicMetadata, Prisma.UserPublicMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyUserPublicMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserPublicMetadataUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPublicMetadataUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('UserPublicMetadata', 'PUT', `${endpoint}/userPublicMetadata/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPublicMetadataUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPublicMetadataUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserPublicMetadataUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertUserPublicMetadata(options?: Omit<(UseMutationOptions<(UserPublicMetadata | undefined), DefaultError, Prisma.UserPublicMetadataUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPublicMetadataUpsertArgs, DefaultError, UserPublicMetadata, true>('UserPublicMetadata', 'POST', `${endpoint}/userPublicMetadata/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPublicMetadataUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPublicMetadataUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserPublicMetadata, Prisma.UserPublicMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserPublicMetadataUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserPublicMetadata, Prisma.UserPublicMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteUserPublicMetadata(options?: Omit<(UseMutationOptions<(UserPublicMetadata | undefined), DefaultError, Prisma.UserPublicMetadataDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPublicMetadataDeleteArgs, DefaultError, UserPublicMetadata, true>('UserPublicMetadata', 'DELETE', `${endpoint}/userPublicMetadata/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPublicMetadataDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPublicMetadataDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserPublicMetadata, Prisma.UserPublicMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserPublicMetadataDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserPublicMetadata, Prisma.UserPublicMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyUserPublicMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserPublicMetadataDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPublicMetadataDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('UserPublicMetadata', 'DELETE', `${endpoint}/userPublicMetadata/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPublicMetadataDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPublicMetadataDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserPublicMetadataDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataAggregateArgs, TQueryFnData = Prisma.GetUserPublicMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataAggregateArgs, TQueryFnData = Prisma.GetUserPublicMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/aggregate`, args, options, fetch);
}

export function useGroupByUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserPublicMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserPublicMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.UserPublicMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.UserPublicMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.UserPublicMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.UserPublicMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.UserPublicMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserPublicMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserPublicMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.UserPublicMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.UserPublicMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.UserPublicMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.UserPublicMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.UserPublicMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/groupBy`, args, options, fetch);
}

export function useCountUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.UserPublicMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/count`, args, options, fetch);
}

export function useSuspenseCountUserPublicMetadata<TArgs extends Prisma.UserPublicMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.UserPublicMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPublicMetadataCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/count`, args, options, fetch);
}

export function useCheckUserPublicMetadata<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; user_id?: string; is_super_admin?: boolean }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('UserPublicMetadata', `${endpoint}/userPublicMetadata/check`, args, options, fetch);
}
