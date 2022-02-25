import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail-f1',
  templateUrl: './detail-f1.component.html',
  styleUrls: ['./detail-f1.component.css']
})
export class DetailF1Component implements OnInit {

  idPassed: any;
  updateForm: FormGroup;
  

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public ngZone: NgZone,
    public routenow: ActivatedRoute,
    private crudService: CrudService,
  ) {
    this.updateForm = this.formBuilder.group({
      team: ['team'],
      championships: ['championships'],
      drivers: ['drivers'],
      foundation_date: ['foundation_date']
    })

    this.crudService.getF1(this.idPassed).subscribe(res => {
      this.updateForm = this.formBuilder.group({
        team: res.data.team,
        championships: res.data.championships,
        drivers: res.data.drivers,
        foundation_date: res.data.foundation_date
      })
    })
   }

  ngOnInit(): void {
    this.routenow.paramMap.subscribe(params => {
      this.idPassed = params.get("id")
    })
  }



    onUpdate(): any {
      
      this.crudService.updateF1(this.idPassed, this.updateForm.value)
      .subscribe(() => {
        console.log("Data updated!");
        this.updateForm.value
      }, (err) => {
        console.log(err);
      });
      this.ngZone.run(() => this.router.navigateByUrl('/allf1'))
    }


}