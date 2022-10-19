import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ServiceService } from 'src/app/providers/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formularioDePersonas: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private crudService: ServiceService,
    private ruteador: Router
  ) {
    this.formularioDePersonas = this.formulario.group({
      name: ['', Validators.required],
      apellidos: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log("Me presionaste!");
    console.log(this.formularioDePersonas.value);
    this.crudService.addPersona(this.formularioDePersonas.value).subscribe(respuesta => {
      this.ruteador.navigateByUrl('/listar');
    });
  }

}
