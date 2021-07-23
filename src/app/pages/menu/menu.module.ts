import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { MenuRoutingModule } from './menu-routing.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
