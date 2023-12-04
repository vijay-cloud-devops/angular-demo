import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AssetDetailsComponent} from "./components/asset-details/asset-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: AssetDetailsComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
