import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DogsModel} from "./dogs.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<DogsModel[]> {
    return this.http.get<DogsModel[]>(`/assets/api-response.json`);
  }
}
