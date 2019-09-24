import { Component, OnInit } from '@angular/core';
import { ArticlesService , Article } from '../../service/articles.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _articles ;

  constructor( private service: ArticlesService ) { }

  ngOnInit() {
     this.service.getPosts()
      .subscribe( (response: Array<Article>) => {
        this._articles = response.slice(0, 10) ;
      });
  }

}
