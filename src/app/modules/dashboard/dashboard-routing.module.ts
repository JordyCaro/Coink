import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RequestCardComponent } from '../request-card/request-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'request-card',
        component: RequestCardComponent,
        data: { location: 'Solicitud de tarjetas' },
      },

      {
        path: '',
        redirectTo: 'request-card',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
