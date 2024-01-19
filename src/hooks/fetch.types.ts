export type FetchData<Data> = {
    error: string | null;
    process: boolean;
    data: Data;
}