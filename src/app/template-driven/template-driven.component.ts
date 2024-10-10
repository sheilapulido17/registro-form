import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  user={
    name: '',
    email:'',
    password:''
  };

  response: string= '';
  error: string='';

  constructor(private apiService: ApiService){}

  onSubmit(form:any){
    this.apiService.registerUser(this.user).subscribe({
      next:()=> this.response ='Registro exitoso',
      error:() => this.error='Error en el registro'
    })
  }

}

