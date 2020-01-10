import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ComputerListComponent} from "./computer-list/computer-list.component";
import {ComputerFormComponent} from "./computer-form/computer-form.component";
import {VendorOptionsResolver} from "./resolver/vendor-options.resolver";
import {ShopOptionsResolver} from "./resolver/shop-options.resolver";
import {ComputerResolver} from "./resolver/computer.resolver";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  {path: '', redirectTo: 'computer-list', pathMatch: 'full'},
  { path: 'computer-list', component: ComputerListComponent, canActivate: [AuthGuard] },
  { path: 'computer-form', component: ComputerFormComponent, canActivate: [AuthGuard], resolve: {
      vendorOptions: VendorOptionsResolver,
      shopOptions: ShopOptionsResolver,
    } },
  {path: 'computer-form/:id', component: ComputerFormComponent, canActivate: [AuthGuard], resolve: {
      vendorOptions: VendorOptionsResolver,
      shopOptions: ShopOptionsResolver,
      computer: ComputerResolver,
    }},
  {path: 'login', component: LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
