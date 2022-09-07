import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './features/catalog/catalog.component';
import { LoginComponent } from './features/login/login.component';
import { ContactComponent } from './features/contact/contact.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'contacts', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
