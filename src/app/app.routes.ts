import { Routes } from '@angular/router';
import { Jobs } from './jobs/jobs';
import { AddJob } from './add-job/add-job';
import { NotFound } from './not-found/not-found';
import { EditJob as editjob } from './edit-job/edit-job';

export const routes: Routes = [
    {
        path: '',
        component: Jobs
    },
    {
        path: 'home',
        component: Jobs
    },
    {
        path: 'add-job',
        component: AddJob
    },


    // 1.  Navigating to Edit Job component with ParamMap


    // {
    //     path: 'edit-job',
    //     component: editjob
    // },




    // 2.  Navigating to Edit Job component with ParamMap



    // {
    //     path: 'edit-job/:title/:description/:openings',
    //     component: editjob
    // },


    // 3.  Navigating to Edit Job component with state

    {
        path: 'edit-job',
        component: editjob
    },


    {
        path: '**',
        component: NotFound
    },
];
