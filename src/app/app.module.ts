import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { CatalogModule } from './features/catalog/catalog.module';
import { CatalogFormComponent } from './features/catalog/components/catalog-form/catalog-form.component';
import { CatalogListComponent } from './features/catalog/components/catalog-list/catalog-list.component';
import { LoginModule } from './features/login/login.module';
import { ContactsModule } from './features/contacts/contacts.module';
import { ContactComponent } from './features/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    LoginModule,
    ContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
