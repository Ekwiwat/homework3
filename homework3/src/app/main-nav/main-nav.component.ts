import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  userSelect: boolean = true;
  wpSelect: boolean = false;

  @Output()
  OnUserSelected = new EventEmitter();
  @Output()
  OnWorkplaceSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  userSelected() {
    this.OnUserSelected.emit();
    this.userSelect = true;
    this.wpSelect = false;
  }

  workplaceSelected() {
    this.OnWorkplaceSelected.emit();
    this.userSelect = false;
    this.wpSelect = true;
  }


}
