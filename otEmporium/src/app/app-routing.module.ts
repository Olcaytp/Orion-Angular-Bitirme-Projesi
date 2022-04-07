import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[GuardService]},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'food/:id', component:FoodPageComponent},
  {path: 'cart-page', component:CartPageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
