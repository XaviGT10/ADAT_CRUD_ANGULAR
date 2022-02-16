import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail-f1',
  templateUrl: './detail-f1.component.html',
  styleUrls: ['./detail-f1.component.css']
})
export class DetailF1Component implements OnInit {

  getId: any;
  updateForm: FormGroup


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService

  ) {
    this.getId = this.activatedRoute.snapshot.params.get('id');
    this.crudService.getF1(this.getId).subscribe(res => {
      this.updateForm.setValue({
        team: res['team'],
        championships: res['championships'],
        drivers: res['drivers'],
        foundation_date: res['foundation_date']
      })
    })

    this.updateForm = this.formBuilder.group({
      team: [''],
      championships: [''],
      drivers: [''],
      foundation_date: ['']
    })

  }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crudService.updateF1(this.getId, this.updateForm.value)
    .subscribe(() => {
      console.log('Datos cambiados satisfactoriamente')
      this.ngZone.run(() => this.router.navigateByUrl('/list-f1'))
    }, (err) => {
      console.log(err);
    });
  }

}
