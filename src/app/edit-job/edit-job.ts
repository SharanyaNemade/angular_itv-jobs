import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  imports: [],
  templateUrl: './edit-job.html',
  styleUrl: './edit-job.css',
})



export class EditJob {
  title: string = '';
  description: string = '';
  openings: number = 0;



  //  Fetching query parameters from the route

  //  1.  Using queryParamMap

  constructor(private route: ActivatedRoute) {
    // this.title = this.route.snapshot.queryParamMap.get('title') || "";
    // this.description = this.route.snapshot.queryParamMap.get('description') || "";
    // this.openings = Number(this.route.snapshot.queryParamMap.get('openings')) || 0;





    // 2.  Using ParamMap instead of queryParamMap

    // this.title = this.route.snapshot.paramMap.get('title') || "";
    // this.description = this.route.snapshot.paramMap.get('description') || "";
    // this.openings = Number(this.route.snapshot.paramMap.get('openings')) || 0;

    

    // 3. Using state

    this.title = history.state.title || "";
    this.description = history.state.description || "";
    this.openings = history.state.openings || 0;

    
  }
}
