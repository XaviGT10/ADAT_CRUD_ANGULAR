import { Injectable } from '@angular/core';
import { F1 } from './f1';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // RUTA DE CONEXION A EXPRESS SERVER API
  REST_API: String = 'http://localhost:8000/api';

  // HTTP HEADER API
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');




  constructor(
    private httpClient: HttpClient
  ) { }


  // INSERTAR COCHE
  AddF1(data: F1): Observable<any> {
    let API_URL = `${this.REST_API}/createf1`;
    return this.httpClient.post(API_URL,data)
    .pipe(
      catchError(this.handleError)
    )
  }


  // COGER TODOS LOS OBJETOS

  getF1s(){
    return this.httpClient.get(`${this.REST_API}/allf1`);
  }

  getF1(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/findf1/${id}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
    .pipe(map((res: any) => {
      return res || {}
    }),
    catchError(this.handleError))
  }

  // UPDATE F1
  updateF1(id:any, data:any): Observable<any> {
     let API_URL = `${this.REST_API}/updatef1/${id}`;
     return this.httpClient.delete(API_URL, {headers: this.httpHeaders}).pipe(
       catchError(this.handleError)
     )
  }




  // BORRAR F1

  deleteF1(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/removef1/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }


  // ERROR

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    } else{
      // Handle server error

      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage)
  }


}
