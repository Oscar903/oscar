import { Component, OnInit } from '@angular/core';
import { PtientService } from 'src/app/services/ptient.service';
import { Router } from '@angular/router';
import { Ptient } from 'src/app/models/ptient';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  providers: [PtientService]
})
export class PacienteComponent implements OnInit {

  public ptient: Ptient;

  public arrayOne(n: number): any[] {
    return Array(n);
  }

  public total;
  public select: number = 1;
  public visNext: boolean = true;
  public visPrevt: boolean = true;
  public vTab: boolean = true;

  constructor(public _ptientService: PtientService, private router: Router) {
    this.ptient = new Ptient('', '', '', '', '', '');
  }

  ngOnInit(): void {

    this.getPtient(this.select);
  }

  btnRegistro(){
    console.log(this.ptient);
    if(this.ptient._id == ""){
    this._ptientService.register(this.ptient).subscribe(
      response =>{
        this.getPtient(this.select);
        alert("Se registro correctamente");
      },
      error =>{
        console.log(error.message);
      },
    );
    }
    else{

      this._ptientService.update(this.ptient).subscribe(
        response =>{
          this.getPtient(this.select);
          alert("Actualizado");
        },
        error =>{
          console.log(error.message);
        },
      );
      
    }
    
    }

  getPtient(page) {
    this.vTab = true;
    this.select = page;
    this.visPrevt = this.select == 1 ? false : true;
    console.log(this.visPrevt);
    this._ptientService.getPtient(page)
      .subscribe(res => {
        this.total = Math.ceil((JSON.parse(JSON.stringify(res)).pages) / 7);
        console.log(this.total);
        this._ptientService.ptients = JSON.parse(JSON.stringify(res)).ptients;
      });
  }

  


  next() {
    this.select = this.select + 1;
    this._ptientService.getPtient(this.select).subscribe((res) => {
      this._ptientService.ptients = JSON.parse(JSON.stringify(res)).ptients;
      this.visPrevt = this.select == 1 ? false : true;
      this.visNext = this.select == this.total ? false : true;

    });
  }
  back() {
    this.select = this.select - 1;
    this._ptientService.getPtient(this.select).subscribe((res) => {
      this._ptientService.ptients = JSON.parse(JSON.stringify(res)).ptients;
      this.visPrevt = this.select == 1 ? false : true;
      this.visNext = this.select == this.total ? false : true;
    });
  }

  editPtients(ptient: Ptient) {
    this.vTab = false;
    this.ptient = ptient;
  }


  public btnDelete(ptient: Ptient) {
    if (confirm('Seguro de eliminar?')) {
      console.log(this.ptient);
      this._ptientService.delete(ptient).subscribe(
        response => {
          this.getPtient(this.select);
          alert("Se elimino correctamente!");
        },
        error => {
          console.log(error.message);
        },
      );
    }
  }

  cancela() {
    this.vTab = true;
    this.ptient.nombre = "";
    this.ptient.apellido = "";
    this.ptient._id = "";
    this.ptient.fecha = "";
    this.ptient.tipoConsulta;
    this.ptient.doctor
  }

  public find() {
    console.log(this.ptient);
    this._ptientService.search(this.ptient).subscribe(
      (response) => {
        console.log(response);

        this._ptientService.ptients = JSON.parse(
          JSON.stringify(response)
        ).ptients;

        console.log(this._ptientService.ptients);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
