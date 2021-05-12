import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getFormView } from './getform/getForm.component';
import { createFormView } from './createform/createForm.component';

const appRoutes: Routes = [
  { path: 'getForm', component: getFormView },
  { path: 'create', component: createFormView }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
