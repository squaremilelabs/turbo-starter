/* eslint-disable */
import type { Prisma, ClerkPhoneNumber } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateClerkPhoneNumber(options?: Omit<(UseMutationOptions<(ClerkPhoneNumber | undefined), DefaultError, Prisma.ClerkPhoneNumberCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkPhoneNumberCreateArgs, DefaultError, ClerkPhoneNumber, true>('ClerkPhoneNumber', 'POST', `${endpoint}/clerkPhoneNumber/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkPhoneNumberCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkPhoneNumber, Prisma.ClerkPhoneNumberGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkPhoneNumber, Prisma.ClerkPhoneNumberGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyClerkPhoneNumber(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkPhoneNumberCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkPhoneNumberCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkPhoneNumber', 'POST', `${endpoint}/clerkPhoneNumber/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkPhoneNumberCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberFindManyArgs, TQueryFnData = Array<Prisma.ClerkPhoneNumberGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/findMany`, args, options, fetch);
}

export function useInfiniteFindManyClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberFindManyArgs, TQueryFnData = Array<Prisma.ClerkPhoneNumberGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/findMany`, args, options, fetch);
}

export function useSuspenseFindManyClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberFindManyArgs, TQueryFnData = Array<Prisma.ClerkPhoneNumberGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberFindManyArgs, TQueryFnData = Array<Prisma.ClerkPhoneNumberGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/findMany`, args, options, fetch);
}

export function useFindUniqueClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberFindUniqueArgs, TQueryFnData = Prisma.ClerkPhoneNumberGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberFindUniqueArgs, TQueryFnData = Prisma.ClerkPhoneNumberGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/findUnique`, args, options, fetch);
}

export function useFindFirstClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberFindFirstArgs, TQueryFnData = Prisma.ClerkPhoneNumberGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberFindFirstArgs, TQueryFnData = Prisma.ClerkPhoneNumberGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/findFirst`, args, options, fetch);
}

export function useUpdateClerkPhoneNumber(options?: Omit<(UseMutationOptions<(ClerkPhoneNumber | undefined), DefaultError, Prisma.ClerkPhoneNumberUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkPhoneNumberUpdateArgs, DefaultError, ClerkPhoneNumber, true>('ClerkPhoneNumber', 'PUT', `${endpoint}/clerkPhoneNumber/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkPhoneNumberUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkPhoneNumber, Prisma.ClerkPhoneNumberGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkPhoneNumber, Prisma.ClerkPhoneNumberGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyClerkPhoneNumber(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkPhoneNumberUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkPhoneNumberUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkPhoneNumber', 'PUT', `${endpoint}/clerkPhoneNumber/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkPhoneNumberUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertClerkPhoneNumber(options?: Omit<(UseMutationOptions<(ClerkPhoneNumber | undefined), DefaultError, Prisma.ClerkPhoneNumberUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkPhoneNumberUpsertArgs, DefaultError, ClerkPhoneNumber, true>('ClerkPhoneNumber', 'POST', `${endpoint}/clerkPhoneNumber/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkPhoneNumberUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkPhoneNumber, Prisma.ClerkPhoneNumberGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkPhoneNumber, Prisma.ClerkPhoneNumberGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteClerkPhoneNumber(options?: Omit<(UseMutationOptions<(ClerkPhoneNumber | undefined), DefaultError, Prisma.ClerkPhoneNumberDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkPhoneNumberDeleteArgs, DefaultError, ClerkPhoneNumber, true>('ClerkPhoneNumber', 'DELETE', `${endpoint}/clerkPhoneNumber/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkPhoneNumberDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkPhoneNumber, Prisma.ClerkPhoneNumberGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkPhoneNumber, Prisma.ClerkPhoneNumberGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyClerkPhoneNumber(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkPhoneNumberDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkPhoneNumberDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkPhoneNumber', 'DELETE', `${endpoint}/clerkPhoneNumber/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkPhoneNumberDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkPhoneNumberDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberAggregateArgs, TQueryFnData = Prisma.GetClerkPhoneNumberAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberAggregateArgs, TQueryFnData = Prisma.GetClerkPhoneNumberAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/aggregate`, args, options, fetch);
}

export function useGroupByClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkPhoneNumberGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkPhoneNumberGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkPhoneNumberGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkPhoneNumberGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkPhoneNumberGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkPhoneNumberGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkPhoneNumberGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkPhoneNumberGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkPhoneNumberGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ClerkPhoneNumberGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkPhoneNumberGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkPhoneNumberGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkPhoneNumberGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkPhoneNumberGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/groupBy`, args, options, fetch);
}

export function useCountClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkPhoneNumberCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/count`, args, options, fetch);
}

export function useSuspenseCountClerkPhoneNumber<TArgs extends Prisma.ClerkPhoneNumberCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkPhoneNumberCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkPhoneNumberCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/count`, args, options, fetch);
}

export function useCheckClerkPhoneNumber<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; userId?: string; phoneNumber?: string; reservedForSecondFactor?: boolean; defaultSecondFactor?: boolean }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ClerkPhoneNumber', `${endpoint}/clerkPhoneNumber/check`, args, options, fetch);
}
