// se debe agregar el routermodule para poder exportar la ruta
import {RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

// se crea una constante que contendrá un arreglo de rutas, que debiesen ser principales
// aqui progress y graficas no son principales, por lo que se deberían sacar del arreglo
// se ponen las condiciones en caso que si ingrese cualquier ruta no definida para que lleve a nopagefound
// para que funcione el login con un estilo diferente se utilizara ruta hija
// y el dashboard debiese direccionar al pagescomponent que ahora tiene todos los estilos que tenia appcomponent
// cualquier ruta lleva a pagescomponent
const appRoutes: Routes = [
    {path: '',
    component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'graficas1', component: Graficas1Component},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', component: NopagefoundComponent}
];

// se utiliza forroot ya que son rutas principales. recomienda usar hash
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
