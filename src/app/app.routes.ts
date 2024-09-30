import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    { 
        path: 'article/:id', 
        component: ArticlePageComponent 
    },
    {
        path: 'bonjour',
        component: BonjourComponent,
    },
    { 
        path: 'cart', 
        component: CartComponent 
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }