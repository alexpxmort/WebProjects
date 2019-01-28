import { HttpClient } from 'selenium-webdriver/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageService} from 'primeng/api';
import {routing} from './app.routing';

import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';


import { AppComponent } from './app.component';
import { PainelNegociacaoComponent } from './painel-negociacao/painel-negociacao.component';
import { ListagemDetalhesComponent } from './listagem-detalhes/listagem-detalhes.component';
import { FormeditarComponent } from './formeditar/formeditar.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelNegociacaoComponent,
    ListagemDetalhesComponent,
    FormeditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,

    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
