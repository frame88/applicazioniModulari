import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoResultsComponent } from './no-results.component';

@NgModule({
    declarations: [
        CatalogComponent,
        CatalogListComponent,
        CatalogFormComponent,
        NoResultsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: CatalogComponent },
            { path: 'no-results', component: NoResultsComponent }
        ])
    ],
    providers: []
})
export class CatalogModule {}