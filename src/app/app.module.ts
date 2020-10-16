import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

import {AdminComponent} from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { LoginComponent } from './login/login.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import {AuthGuardService} from './guards/auth-guard.service';
import {RoleGaurdService} from './guards/role-gaurd.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MovieDetailComponent,
    DashboardComponent,
    MovieSearchComponent,
    LoginComponent,
    MovieEditComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuardService, RoleGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
