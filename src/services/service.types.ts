export type FilterType =
    'equal'
    | 'match';

export type Filter<Type> = {
    [Key in keyof Partial<Type>]: {
        value: Type[Key],
        type: Type[Key] extends string ? FilterType : 'equal',
    }
}

export type Options<Type> = {
    limit: number,
    offset: number,
    sort: [ keyof Type, 'asc' | 'desc' ] | [],
}

export type MultiplyResponse<Type> = {
    count: number,
    options: Options<Type>,
    items: Type[],
}