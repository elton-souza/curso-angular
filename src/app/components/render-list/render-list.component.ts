import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css'],
})
export class RenderListComponent implements OnInit {
  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  listData: Animal[] = [
    {
      nome: 'elton',
      idade: '20',
    },
    {
      nome: 'sansan',
      idade: '19',
    },
    {
      nome: 'pepe',
      idade: '19',
    },
  ];

  handleRemoveItem(animal: Animal): void {
   this.listData = this.listService.remove(this.listData, animal)
  }
}
