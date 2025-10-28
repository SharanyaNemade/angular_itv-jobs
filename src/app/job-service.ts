import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiUrl = "https://68fc69cc96f6ff19b9f508c6.mockapi.io/api/job";




    constructor(private httpClient: HttpClient) {}
      
    
    getJobs(): Observable<any> {
        return this.httpClient.get(this.apiUrl);
  }
}
