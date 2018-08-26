import { Routes } from "@angular/router";
import { InicialComponent } from "./inicial/inicial.component";

import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ComponentNoPadraoComponent } from "./component-no-padrao/component-no-padrao.component";
import { ComponentePrimarioComponent } from "./componente-primario/componente-primario.component";
import { CadastroPessoaComponent } from "./cadastro-pessoa/cadastro-pessoa.component";
import { CadastroEventoComponent } from "./cadastro-evento/cadastro-evento.component";
import { CadastroCidadeComponent } from "./cadastro-cidade/cadastro-cidade.component";

const routes: Routes = [
    { path: 'principal', component: ComponentePrimarioComponent , children: [
        { path:'evento', component: CadastroEventoComponent,outlet:'pri'},
        { path:'inicial', component: InicialComponent,outlet:'pri'},
        { path:'cidade', component: CadastroCidadeComponent,outlet:'pri'}
    ]},
    { path: 'secundario', component: ComponentNoPadraoComponent , children: [
        { path:'login', component: LoginComponent,outlet:'sec' },
        { path:'cadastro', component: CadastroPessoaComponent,outlet:'sec' }
    ] }
    ,{ path: "**", redirectTo:"/principal/(pri:inicial)"}
  ];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);