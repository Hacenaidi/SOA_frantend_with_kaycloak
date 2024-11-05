import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {path: 'evenements', component: EvenementsComponent,canActivate:[AuthGuard],
    data : {roles:['ADMIN']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
