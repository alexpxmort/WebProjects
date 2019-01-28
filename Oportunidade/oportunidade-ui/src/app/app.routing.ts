import { FormeditarComponent } from './formeditar/formeditar.component';
import { PainelNegociacaoComponent } from './painel-negociacao/painel-negociacao.component';
import { ListagemDetalhesComponent } from './listagem-detalhes/listagem-detalhes.component';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [

  {path: 'oportunidade-detalhe/:id', component: ListagemDetalhesComponent}
  , {path: 'oportunidades', component: PainelNegociacaoComponent},
  {path: 'oportunidade-edicao/:id', component: FormeditarComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
