import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  moviesData: any;
  imgPath: string = 'https://image.tmdb.org/t/p/w1280';
  constructor(private movieService: MovieServiceService){}

  ngOnInit(): void {
    console.log('heelo')
    this.getMoviesData();
  }

  // export const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  // const { poster_path, title, vote_average, overview } = movie;

  private getMoviesData(){
    this.movieService.getMoviesData().subscribe(res=>{
      this.moviesData = res.results;
      this.moviesData.map((movie: any)=>{
        movie.imgSrc = `${this.imgPath}/${movie.poster_path}`;
      })
      console.log(this.moviesData);
    })
  }
}
