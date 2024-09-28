import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BonjourComponent } from './bonjour/bonjour.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'catalog',
        component: CatalogComponent,
    },
    {
        path: 'bonjour',
        component: BonjourComponent,
    }
];
