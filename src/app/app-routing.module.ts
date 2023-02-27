import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FormcardComponent } from './cards/formcard/formcard.component';

const routes: Routes = [
  {path: '', redirectTo:'/cards', pathMatch: 'full'},
  {path: 'cards', component: CardsComponent},
  {path: 'cards/form', component: FormcardComponent},
  {path: 'cards/form/:id', component: FormcardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
