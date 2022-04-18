import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(listData: Animal[], animal: Animal) {
    return listData.filter(animals => animals.nome !== animal.nome)
  }
}
