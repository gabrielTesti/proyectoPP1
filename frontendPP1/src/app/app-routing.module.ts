import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path: "", component: AuthComponent},
  {path: "auth", component: AuthComponent},
  {path: "producto", component: ProductoComponent},
  {path: '**', redirectTo: '' }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
