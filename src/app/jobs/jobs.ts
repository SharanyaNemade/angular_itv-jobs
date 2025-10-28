import { Component } from '@angular/core';
import { JobService } from '../job-service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  imports: [NgFor, NgIf],
  templateUrl: './jobs.html',
  styleUrl: './jobs.css',
})
export class Jobs {

  jobs: any = [];
  isLoading = false;
  hasError = false;

  constructor(private jobService: JobService, private router: Router) {
    this.isLoading = true;
    this.jobService.getJobs().subscribe({
      next: (data) => {
        this.jobs = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.hasError = true;
      }
    })
  }



  // Navigating to Edit Job component with query parameters



  editJob(title: string, description: string, openings: number) {
    // this.router.navigate(['edit-job'], {
    //   queryParams: {
    //     title,
    //     description,
    //     openings
    //   }
    // });




    // Navigating to Edit Job component with ParamMap


    // this.router.navigate(['edit-job', title, description, openings]);



    // Navigating to Edit Job component with state

    this.router.navigate(['edit-job'], {
      state: {
        title,
        description,
        openings
      }
    })


  }
}
