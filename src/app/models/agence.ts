import { City } from './city';

export interface Agence {
    id: number;
    code?: string;
    name: string;
    city?: string|City
}
