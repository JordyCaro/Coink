import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { TreeRoutesComponent } from '../home/components/tree-routes/tree-routes.component';
import { RequestCardComponent } from '../request-card/request-card.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { FilterTableComponent } from '../request-card/components/filter-table/filter-table.component';
import { PaginatorComponent } from '../request-card/components/paginator/paginator.component';
import { CharactersService } from 'src/app/data/service/characters.service';




@NgModule({
  declarations: [
    HomeComponent,
    RequestCardComponent,
    ListItemsComponent,
    TreeRoutesComponent,
    FilterTableComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers:[CharactersService]
})
export class DashboardModule { }
