import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

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
        path: 'contact-form', 
        component: ContactFormComponent
    },
    { 
        path: 'sign-up', 
        component: SignupFormComponent
    },
    { 
        path: 'login', 
        component: LoginFormComponent
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