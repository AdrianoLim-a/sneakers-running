import { Routes } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CestaComponent } from './cesta/cesta.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { VitrineComponent } from './vitrine/vitrine.component';

export const routes: Routes = [
    {path:"cesta", component: CestaComponent},
    {path:"esqueci", component: EsqueciComponent},
    {path:"busca", component: BuscaComponent},
    {path:"detalhe", component: DetalheComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    {path:"logout",component:LogoutComponent}
];
