import { OportunidadeService } from './../oportunidade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem-detalhes',
  templateUrl: './listagem-detalhes.component.html',
  styleUrls: ['./listagem-detalhes.component.css']
})
export class ListagemDetalhesComponent implements OnInit {

  id_Atual;
  oportunidade = {};

  constructor(private oportunidadeService: OportunidadeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((obj: any ) => {
      this.id_Atual = obj.id;
      this.id_Atual = + obj['id'];
    });

    this.detalhes(this.id_Atual);
  }

  detalhes(id) {
    this.oportunidadeService.detalhes(id).subscribe( resp => this.oportunidade = resp);
  }

}
