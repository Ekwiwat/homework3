import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TreeviewModule } from 'ngx-treeview';
import { TreeModule } from '@circlon/angular-tree-component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { WorkplaceMenuComponent } from './workplace-menu/workplace-menu.component';
import { ConfigPanelComponent } from './config-panel/config-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SearchComponent,
    MainComponent,
    LeftMenuComponent,
    UserMenuComponent,
    WorkplaceMenuComponent,
    ConfigPanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    TreeviewModule.forRoot(),
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
