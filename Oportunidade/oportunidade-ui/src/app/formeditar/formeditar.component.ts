import { OportunidadeService } from './../oportunidade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formeditar',
  templateUrl: './formeditar.component.html',
  styleUrls: ['./formeditar.component.css']
})
export class FormeditarComponent implements OnInit {

  oportunidade = {};
  id_Oportunidade;
  constructor(private oportunidadeService: OportunidadeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((obj: any ) => {
      this.id_Oportunidade = obj.id;
      this.id_Oportunidade = + obj['id'];
    });

    this.carregarOportunidade();
  }

  salvar() {

    this.oportunidadeService.editar(this.id_Oportunidade, this.oportunidade).subscribe(() => {
      this.oportunidade = {};


       console.log('Oportunidade Editada com Sucesso');
       window.location.href = 'http://localhost:4200/oportunidades';
    } ,
    resp => {
      let msg = ' Erro inesperado,Tente Novamente';

      if (resp.error.message) {
        msg = resp.error.message;

      }

   console.log(msg);
    }
  );
  }

  carregarOportunidade() {
    this.oportunidadeService.detalhes(this.id_Oportunidade).subscribe( resp => this.oportunidade = resp);
  }

}
