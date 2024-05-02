import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
        ,title:"Home"

    },
    {
        path: "single-product/:id"
        , component: SingleProductComponent
        ,title:"Single Product"

    },
    {
        path: "cart",
        component: CartComponent
        ,title:"Cart"

    },
    {
        path: "login"
        , component: LoginComponent
        ,title:"Login"
    },
    {
        path: "register",
        component: RegisterComponent
        ,title:"Register"

    },
    {
        path: "**",
        component: NotFoundComponent
        ,title:"Not Found"

    }
];
