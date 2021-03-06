import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat} from '../model/candidat'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
   
    choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    constructor(private http: HttpClient) { }
   
   
    getData(id: number): Observable<Object> {
      return this.http.get(`http://localhost:8085/api/candidats/${id}`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8085/api/candidats', info);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8085/api/candidats/${id}`, value);
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8085/api/candidats/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8085/api/candidats');
    }


 
}