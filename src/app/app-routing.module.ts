import { HomePageComponent } from './home-page/home-page.component';
import { FramePageComponent } from './frame-page/frame-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramelessPageComponent } from './frameless-page/frameless-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramelessPageComponent,
    children: [
      { path: '', component: LoginPageComponent },
      { path: 'login', component: LoginPageComponent }
    ]
  },
  {
    path: 'home',
    component: FramePageComponent,
    children: [
      { path: '', component: HomePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
