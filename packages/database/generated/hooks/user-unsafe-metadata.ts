/* eslint-disable */
import type { Prisma, UserUnsafeMetadata } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateUserUnsafeMetadata(options?: Omit<(UseMutationOptions<(UserUnsafeMetadata | undefined), DefaultError, Prisma.UserUnsafeMetadataCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserUnsafeMetadataCreateArgs, DefaultError, UserUnsafeMetadata, true>('UserUnsafeMetadata', 'POST', `${endpoint}/userUnsafeMetadata/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserUnsafeMetadataCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserUnsafeMetadata, Prisma.UserUnsafeMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserUnsafeMetadata, Prisma.UserUnsafeMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyUserUnsafeMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserUnsafeMetadataCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserUnsafeMetadataCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('UserUnsafeMetadata', 'POST', `${endpoint}/userUnsafeMetadata/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserUnsafeMetadataCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/findMany`, args, options, fetch);
}

export function useInfiniteFindManyUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserUnsafeMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/findMany`, args, options, fetch);
}

export function useSuspenseFindManyUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataFindManyArgs, TQueryFnData = Array<Prisma.UserUnsafeMetadataGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/findMany`, args, options, fetch);
}

export function useFindUniqueUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataFindUniqueArgs, TQueryFnData = Prisma.UserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataFindUniqueArgs, TQueryFnData = Prisma.UserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/findUnique`, args, options, fetch);
}

export function useFindFirstUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataFindFirstArgs, TQueryFnData = Prisma.UserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataFindFirstArgs, TQueryFnData = Prisma.UserUnsafeMetadataGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/findFirst`, args, options, fetch);
}

export function useUpdateUserUnsafeMetadata(options?: Omit<(UseMutationOptions<(UserUnsafeMetadata | undefined), DefaultError, Prisma.UserUnsafeMetadataUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserUnsafeMetadataUpdateArgs, DefaultError, UserUnsafeMetadata, true>('UserUnsafeMetadata', 'PUT', `${endpoint}/userUnsafeMetadata/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserUnsafeMetadataUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserUnsafeMetadata, Prisma.UserUnsafeMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserUnsafeMetadata, Prisma.UserUnsafeMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyUserUnsafeMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserUnsafeMetadataUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserUnsafeMetadataUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('UserUnsafeMetadata', 'PUT', `${endpoint}/userUnsafeMetadata/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserUnsafeMetadataUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertUserUnsafeMetadata(options?: Omit<(UseMutationOptions<(UserUnsafeMetadata | undefined), DefaultError, Prisma.UserUnsafeMetadataUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserUnsafeMetadataUpsertArgs, DefaultError, UserUnsafeMetadata, true>('UserUnsafeMetadata', 'POST', `${endpoint}/userUnsafeMetadata/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserUnsafeMetadataUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserUnsafeMetadata, Prisma.UserUnsafeMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserUnsafeMetadata, Prisma.UserUnsafeMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteUserUnsafeMetadata(options?: Omit<(UseMutationOptions<(UserUnsafeMetadata | undefined), DefaultError, Prisma.UserUnsafeMetadataDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserUnsafeMetadataDeleteArgs, DefaultError, UserUnsafeMetadata, true>('UserUnsafeMetadata', 'DELETE', `${endpoint}/userUnsafeMetadata/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserUnsafeMetadataDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserUnsafeMetadata, Prisma.UserUnsafeMetadataGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserUnsafeMetadata, Prisma.UserUnsafeMetadataGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyUserUnsafeMetadata(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserUnsafeMetadataDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserUnsafeMetadataDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('UserUnsafeMetadata', 'DELETE', `${endpoint}/userUnsafeMetadata/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserUnsafeMetadataDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserUnsafeMetadataDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataAggregateArgs, TQueryFnData = Prisma.GetUserUnsafeMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataAggregateArgs, TQueryFnData = Prisma.GetUserUnsafeMetadataAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/aggregate`, args, options, fetch);
}

export function useGroupByUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserUnsafeMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserUnsafeMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.UserUnsafeMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.UserUnsafeMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.UserUnsafeMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.UserUnsafeMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.UserUnsafeMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserUnsafeMetadataGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserUnsafeMetadataGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.UserUnsafeMetadataGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.UserUnsafeMetadataGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.UserUnsafeMetadataGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.UserUnsafeMetadataGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.UserUnsafeMetadataGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/groupBy`, args, options, fetch);
}

export function useCountUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.UserUnsafeMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/count`, args, options, fetch);
}

export function useSuspenseCountUserUnsafeMetadata<TArgs extends Prisma.UserUnsafeMetadataCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.UserUnsafeMetadataCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserUnsafeMetadataCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/count`, args, options, fetch);
}

export function useCheckUserUnsafeMetadata<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; userId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('UserUnsafeMetadata', `${endpoint}/userUnsafeMetadata/check`, args, options, fetch);
}