import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  Personas: any;

  constructor(
    private _service: ServiceService
  ) { }

  ngOnInit(): void {
    this._service.getAll().subscribe(response => {
      console.log(response);
      this.Personas = response;
    });
  }

  borrarRegistro(id: any, iControl: any) {
    if (window.confirm('Desea Borrar el registro?')) {
      this._service.delPersona(id).subscribe(response => {
        this.Personas.splice(iControl, 1);
      });
    }
  }

}
