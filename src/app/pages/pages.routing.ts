import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent }  from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        // Rutas hijas
        // Estas rutas se condicionan a los estilos mas que nada
        children: [
          { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
          { path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBar'} },
          { path: 'grafica1', component: Grafica1Component, data: {titulo: 'Grafica #1'} },
          { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Theme'} },
          { path: 'promesas', component: PromisesComponent, data: {titulo: 'Promesas'} },
          { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'} },
          // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
      },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
