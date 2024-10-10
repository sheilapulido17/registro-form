import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html'
})
export class ModelDrivenComponent {
  registerForm: FormGroup;

  response: string = '';
  error: string = '';

  constructor(private apiService: ApiService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.apiService.registerUser(this.registerForm.value).subscribe({
        next: () => this.response = 'Registro exitoso',
        error: () => this.error = 'Error en el registro'
      });
    }
  }
}

