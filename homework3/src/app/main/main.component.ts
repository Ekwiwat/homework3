import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { userMenus } from '../user-tree-menu';
import { workplaceMenus } from '../workplace-tree-menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userMENU: Menu[] = userMenus;
  wpMENU: Menu[] = workplaceMenus;

  toggleUser = true;
  toggleWp = false;

  ngOnInit(): void {
  }
  userSelected() {
    this.toggleUser = true;
    this.toggleWp = false;
  }
  wpSelect() {
    this.toggleUser = false;
    this.toggleWp = true;
  }
}
