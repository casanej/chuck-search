import { AxiosInstance } from 'axios';
import { apiCN } from '../../config';
import { ChuckNorrisJoke, ChuckNorrisResponse, ChuckNorrisResponsePaginated, ChuckNorrisSearch } from './models';

export class ChuckNorrisIO {
    private instance: AxiosInstance = apiCN;

    private async makeRequest<T>(url: string): Promise<ChuckNorrisResponse<T>> {
        try {
            const response = await this.instance.get(url);
            return {
                success: true,
                data: response.data,
            };
        } catch(error: any) {
            return {
                success: false,
                error: {
                    code: error.code,
                    message: error.message,
                },
            };
        }
    }

    public async getRandomJoke(): Promise<ChuckNorrisResponse<ChuckNorrisJoke>> {
        return await this.makeRequest<ChuckNorrisJoke>('/jokes/random');
    }

    public async getJokeById(id: string): Promise<ChuckNorrisResponse<ChuckNorrisJoke>> {
        return await this.makeRequest<ChuckNorrisJoke>(`/jokes/${id}`);
    }

    public async getJokesByCategory(category: string): Promise<ChuckNorrisResponse<ChuckNorrisJoke[]>> {
        return await this.makeRequest<ChuckNorrisJoke[]>(`/jokes/random?category=${category}`);
    }

    public async getCategories(): Promise<ChuckNorrisResponse<string[]>> {
        return await this.makeRequest<string[]>('/jokes/categories');
    }

    public async getJokesBySearch(search: string, perPage: number = 10, ): Promise<ChuckNorrisResponse<ChuckNorrisResponsePaginated>> {
        const response = await this.makeRequest<ChuckNorrisSearch>(`/jokes/search?query=${search}`);

        if (!response.success) return response;

        const jokesChunks = []
        const { result } = response.data;

        while (result.length > 0) jokesChunks.push(result.splice(0, perPage));

        return {
            success: true,
            data: {
                total: response.data.total,
                result: jokesChunks,
                totalPages: jokesChunks.length,
            },
        };
    }
}