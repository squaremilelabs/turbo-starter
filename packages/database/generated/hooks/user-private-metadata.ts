/* eslint-disable */
import type { Prisma, UserPrivateMetadata } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateUserPrivateMetadata(options?: Omit<(UseMutationOptions<(UserPrivateMetadata | undefined), DefaultError, Prisma.UserPrivateMetadataCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPrivateMetadataCreateArgs, DefaultError, UserPrivateMetadata, true>('UserPrivateMetadata', 'POST', `${endpoint}/userPrivateMetadata/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPrivateMetadataCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPrivateMetadataCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserPrivateMetadata, Prisma.UserPrivateMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserPrivateMetadataCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserPrivateMetadata, Prisma.UserPrivateMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyUserPrivateMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserPrivateMetadataCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPrivateMetadataCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('UserPrivateMetadata', 'POST', `${endpoint}/userPrivateMetadata/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPrivateMetadataCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPrivateMetadataCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserPrivateMetadataCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/findMany`, args, options, fetch);
}

export function useInfiniteFindManyUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserPrivateMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/findMany`, args, options, fetch);
}

export function useSuspenseFindManyUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserPrivateMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/findMany`, args, options, fetch);
}

export function useFindUniqueUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataFindUniqueArgs, TQueryFnData = Prisma.UserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataFindUniqueArgs, TQueryFnData = Prisma.UserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/findUnique`, args, options, fetch);
}

export function useFindFirstUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataFindFirstArgs, TQueryFnData = Prisma.UserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataFindFirstArgs, TQueryFnData = Prisma.UserPrivateMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/findFirst`, args, options, fetch);
}

export function useUpdateUserPrivateMetadata(options?: Omit<(UseMutationOptions<(UserPrivateMetadata | undefined), DefaultError, Prisma.UserPrivateMetadataUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPrivateMetadataUpdateArgs, DefaultError, UserPrivateMetadata, true>('UserPrivateMetadata', 'PUT', `${endpoint}/userPrivateMetadata/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPrivateMetadataUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPrivateMetadataUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserPrivateMetadata, Prisma.UserPrivateMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserPrivateMetadataUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserPrivateMetadata, Prisma.UserPrivateMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyUserPrivateMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserPrivateMetadataUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPrivateMetadataUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('UserPrivateMetadata', 'PUT', `${endpoint}/userPrivateMetadata/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPrivateMetadataUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPrivateMetadataUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserPrivateMetadataUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertUserPrivateMetadata(options?: Omit<(UseMutationOptions<(UserPrivateMetadata | undefined), DefaultError, Prisma.UserPrivateMetadataUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPrivateMetadataUpsertArgs, DefaultError, UserPrivateMetadata, true>('UserPrivateMetadata', 'POST', `${endpoint}/userPrivateMetadata/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPrivateMetadataUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPrivateMetadataUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserPrivateMetadata, Prisma.UserPrivateMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserPrivateMetadataUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserPrivateMetadata, Prisma.UserPrivateMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteUserPrivateMetadata(options?: Omit<(UseMutationOptions<(UserPrivateMetadata | undefined), DefaultError, Prisma.UserPrivateMetadataDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPrivateMetadataDeleteArgs, DefaultError, UserPrivateMetadata, true>('UserPrivateMetadata', 'DELETE', `${endpoint}/userPrivateMetadata/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPrivateMetadataDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPrivateMetadataDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserPrivateMetadata, Prisma.UserPrivateMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserPrivateMetadataDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserPrivateMetadata, Prisma.UserPrivateMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyUserPrivateMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserPrivateMetadataDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserPrivateMetadataDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('UserPrivateMetadata', 'DELETE', `${endpoint}/userPrivateMetadata/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserPrivateMetadataDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserPrivateMetadataDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserPrivateMetadataDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataAggregateArgs, TQueryFnData = Prisma.GetUserPrivateMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataAggregateArgs, TQueryFnData = Prisma.GetUserPrivateMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/aggregate`, args, options, fetch);
}

export function useGroupByUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserPrivateMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserPrivateMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.UserPrivateMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.UserPrivateMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.UserPrivateMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.UserPrivateMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.UserPrivateMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserPrivateMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserPrivateMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.UserPrivateMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.UserPrivateMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.UserPrivateMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.UserPrivateMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.UserPrivateMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/groupBy`, args, options, fetch);
}

export function useCountUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.UserPrivateMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/count`, args, options, fetch);
}

export function useSuspenseCountUserPrivateMetadata<TArgs extends Prisma.UserPrivateMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.UserPrivateMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserPrivateMetadataCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/count`, args, options, fetch);
}

export function useCheckUserPrivateMetadata<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; user_id?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('UserPrivateMetadata', `${endpoint}/userPrivateMetadata/check`, args, options, fetch);
}
