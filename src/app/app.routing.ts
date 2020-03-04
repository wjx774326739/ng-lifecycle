import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy1',
    loadChildren: () => import('./lazy1/lazy1.module').then(m => m.Lazy1Module)
  },
  {
    path: 'lazy2',
    loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
