import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-f1',
  templateUrl: './list-f1.component.html',
  styleUrls: ['./list-f1.component.css']
})
export class ListF1Component implements OnInit {

  Coches: any= [];

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.getF1().subscribe(res =>{
      console.log(res);
      this.Coches = res;
    })
  }

  delete(id: any, i:any){
    console.log(id);
    if (window.confirm('Estas seguro de eliminarlo?')){
      this.crudService.deleteF1(id).subscribe((res) => {
        this.Coches.splice(i,1);
      })
    }
  }

}
