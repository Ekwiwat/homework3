import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { userMenus } from '../user-tree-menu';
import { workplaceMenus } from '../workplace-tree-menu';




@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],

})
export class LeftMenuComponent implements OnInit {
  uSerMenus: Menu[] = userMenus;
  workPlaceMenus: Menu[] = workplaceMenus;

  uSelected() {
    this.menuData = this.uSerMenus;
    console.log(this.menuData);
  }

  menuData: any
  options = {};

  ngOnInit() {

  }


  // public isCollapsed = false;

  constructor() {

  }

}



