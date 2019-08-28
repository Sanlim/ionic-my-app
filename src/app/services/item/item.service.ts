import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../../model/item';

@Injectable()
export class ItemService {
  load(offset: number, limit: number): Observable<Item> {
    return of({
    offset: 0,
    limit: 0,
    total: 0,
    results: [],
    });
}
