import { Ville } from './ville';

export interface Agence {
    id: number;
    code?: string;
    name: string;
    ville?: string|Ville
}
