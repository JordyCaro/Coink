import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent implements OnInit {
  @Output() OnMenuSelected: EventEmitter<string> = new EventEmitter();
  menus = [{ name: 'Personajes Rick & Morty',
              items: [{ name: 'Crear Personaje' }, { name: 'Monitorear y Editar Personajes' }, { name: 'Buscar Personaje' }],}]
  constructor() {}

  ngOnInit(): void {}

  selectedMenu(menu: string) {
    this.OnMenuSelected.emit(menu);
  }
}
