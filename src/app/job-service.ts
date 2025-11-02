import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  //  Sir API URL

  // apiUrl = "https://68fc69cc96f6ff19b9f508c6.mockapi.io/api/job";



  // My API URL

  apiUrl = "https://6907084cb1879c890ed89e7b.mockapi.io/jobs";




  constructor(private httpClient: HttpClient) { }


  getJobs(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  postJob(data: {
    title: string,
    description: string,
    openings: string
  }): Observable<any> {
    return this.httpClient.post(this.apiUrl, data);
  }


  deleteJob(jobId: string): Observable<any> {
    return this.httpClient.delete(this.apiUrl + "/" + jobId);
  }
}
