import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'register/login',
        redirectTo: 'login'
    },
    {
        path: 'login/home',
        redirectTo: 'home'
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'home/shop',
        redirectTo: 'shop'
    },
    {
        path: 'product-details/:id',
        component: ProductDetailsComponent
    }

];
