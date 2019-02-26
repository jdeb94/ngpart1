import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.model';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: '`app-heroes`',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private _heroesService:HeroesService) { }

  ngOnInit() {
  }
  getHeroes() {
    this._heroesService.getHeroes()
      .subscribe(
        response => this.heroes=<Hero[]>(response),
        error => console.log(error)
        
      );
  }

}
