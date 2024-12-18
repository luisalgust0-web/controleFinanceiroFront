import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../shared/Models/MenuItem';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(
    private router: Router
  ) {}

  ListMenuItem = [
    {id: 1, label: 'Entrada', rota: 'entrada'},
  ] as MenuItem[];


  navegar(rota: string) {
    this.router.navigate([rota])
  }


}
