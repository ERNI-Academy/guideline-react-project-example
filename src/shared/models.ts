import { GlobalData, Brastlewark } from "../interfaces/appInterfaces";

export interface BrastlewarkFromApi {
    id?: number;
    name?: string;
    thumbnail?: string;
    age?: number;
    weight?: number;
    height?: number;
    hair_color?: string;
    professions?: Array<string>;
    friends?: Array<string>;
}

export const parseToBrastlewark = (apiResponse: BrastlewarkFromApi): Brastlewark => {
    return {
        id: (typeof apiResponse.id === 'number') ? apiResponse.id : apiResponse.id || -1,
        name: apiResponse?.name || '',
        thumbnail: apiResponse?.thumbnail || '',
        age: apiResponse?.age || -1,
        weight: apiResponse?.weight || -1,
        height: apiResponse?.height || -1,
        hair_color: apiResponse?.hair_color || '',
        professions: apiResponse?.professions || [],
        friends: apiResponse?.friends || []
    }}

export const parseFromApiToBrastlewark = (apiResponse: GlobalData): Brastlewark[] => {
    const response: Brastlewark[] = apiResponse.Brastlewark || [];

    return response.map(parseToBrastlewark);
}