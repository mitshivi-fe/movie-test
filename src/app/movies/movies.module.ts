import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieServiceService } from './movie-service.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: MovieListComponent
  }
]

@NgModule({
  declarations: [
    MovieListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [MovieServiceService]
})
export class MoviesModule { }
