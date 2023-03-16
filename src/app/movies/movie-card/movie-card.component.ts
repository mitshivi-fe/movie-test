import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, OnChanges {
@Input() movie: any;
IMGPATH = "https://image.tmdb.org/t/p/w1280";



 // const { poster_path, title, vote_average, overview } = movie;
ngOnInit(){
  
}

ngOnChanges(changes: SimpleChanges): void {
  console.log('movie::', this.movie)
}

calculateStyle(avgVoting: number){

  return {
    
    'color': avgVoting> 8 ? 'green' : 'yellow'
  }
}

}
