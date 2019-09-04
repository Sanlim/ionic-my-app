import { Observable } from 'rxjs';
import { Item } from './item';

export interface Items {
    offset: number;
    limit: number;
    total?: number;
    results: Observable<Item>[];
}