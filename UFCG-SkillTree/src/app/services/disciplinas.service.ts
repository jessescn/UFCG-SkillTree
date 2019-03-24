import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DisciplinasService {
   
    private readonly API = 'http://localhost:8080/v1';

    constructor(private http: HttpClient){}

    list(){
        return this.http.get(this.API + '/subjects');
    }
}