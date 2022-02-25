import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-f1',
  templateUrl: './add-f1.component.html',
  styleUrls: ['./add-f1.component.css']
})
export class AddF1Component implements OnInit {

  f1Form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.f1Form = this.formBuilder.group({
      team: [''],
      championships: [''],
      drivers: [''],
      foundation_date: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.AddF1(this.f1Form.value)
    .subscribe(() => {
      console.log('Envio satisfactorio de los datos.')
      this.ngZone.run(() => this.router.navigateByUrl('/createf1'))
    }, (err) => {
      console.log(err);
    });
  }
}
