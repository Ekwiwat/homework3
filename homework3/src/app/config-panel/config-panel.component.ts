import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';



@Component({
  selector: 'app-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.css']
})
export class ConfigPanelComponent implements OnInit {

  @Input()
  userMenu: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
