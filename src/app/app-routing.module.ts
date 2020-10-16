import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {LoginComponent} from './login/login.component';
import {MovieEditComponent} from './movie-edit/movie-edit.component';
import {AuthGuardService} from './guards/auth-guard.service';
import {RoleGaurdService} from './guards/role-gaurd.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'detail/:id', component: MovieDetailComponent, canActivate: [AuthGuardService]},
  {path: 'admin', component: AdminComponent, data: {role: 'Admin'}, canActivate: [RoleGaurdService]},
  {path: 'edit/:id', component: MovieEditComponent, data: {role: 'Admin'}, canActivate: [RoleGaurdService]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
