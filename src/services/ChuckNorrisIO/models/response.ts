export type ChuckNorrisResponse<TData = any> = ChuckNorrisResponseSuccess<TData> | ChuckNorrisResponseError;


export interface ChuckNorrisResponseSuccess<TData = any> {
    success: true;
    data: TData;
}

export interface ChuckNorrisResponseError {
    success: false;
    error: {
        code: string;
        message: string;
    };
}