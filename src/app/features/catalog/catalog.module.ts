import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@NgModule({
    declarations: [
        CatalogComponent,
        CatalogListComponent,
        CatalogFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: []
})
export class CatalogModule {}