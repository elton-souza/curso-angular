import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  testeRender:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.testeRender = !this.testeRender;
  }

}
