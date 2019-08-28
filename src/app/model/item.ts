import { Item } from './item'
export interface Item{
    offset: number
    limit: number;
    total?: number;
    results: Item[];
}