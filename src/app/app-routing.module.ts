import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'cards', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) }, 
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: '**', loadChildren: () => import('./pages/notFound/not-found.module').then(m => m.NotFoundModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
