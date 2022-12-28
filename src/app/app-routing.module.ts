import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './admin/user/user.component';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(x => x.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
