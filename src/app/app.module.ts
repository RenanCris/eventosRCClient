import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PainelLogoComponent } from './painel-logo/painel-logo.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ListaEventoComponent } from './lista-evento/lista-evento.component';
import { QuadroGeralEventoComponent } from './quadro-geral-evento/quadro-geral-evento.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { InicialComponent } from './inicial/inicial.component';
import { routing } from './app.routing';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { LoginComponent } from './login/login.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { ComponentNoPadraoComponent } from './component-no-padrao/component-no-padrao.component';
import { ComponentePrimarioComponent } from './componente-primario/componente-primario.component';
import {NgxMaskModule} from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    PainelLogoComponent,
    PesquisaComponent,
    CarrinhoComponent,
    ListaEventoComponent,
    QuadroGeralEventoComponent,
    NavegacaoComponent,
    InicialComponent,
    CadastroEventoComponent,
    LoginComponent,
    CadastroPessoaComponent,
    CadastroCidadeComponent,
    ComponentNoPadraoComponent,
    ComponentePrimarioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
