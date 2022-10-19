import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/providers/service.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formularioDePersonas: FormGroup;
  elID: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private crudService: ServiceService,
    public formulario: FormBuilder,
    private ruteador: Router
  ) {
    this.elID = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.crudService.getPersona(this.elID).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formularioDePersonas.setValue({
          name: respuesta[0]['name'],
          apellidos: respuesta[0]['apellidos']
        });
      }
    );

    this.formularioDePersonas = this.formulario.group(
      {
        name: ['', Validators.required],
        apellidos: ['', Validators.required]
      }
    );

  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log(this.elID);
    console.log(this.formularioDePersonas.value);
    this.crudService.editPersona(this.elID, this.formularioDePersonas.value).subscribe(() => {
      this.ruteador.navigateByUrl('/listar');
    });
  }

}
