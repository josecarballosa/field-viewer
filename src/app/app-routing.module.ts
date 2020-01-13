import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '@app/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fields' },
  {
    path: 'fields',
    loadChildren: () =>
      import('./fields/fields.module').then(m => m.FieldsModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
