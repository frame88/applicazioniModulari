import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';

@NgModule({
    declarations: [
        CatalogComponent,
        CatalogFormComponent,
        CatalogListComponent
    ],
    imports: [],
    providers: []
})
export class CatalogModule {}