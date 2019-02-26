import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private _http: HttpClient) { }
  getHeroes() {
    return this._http.get("http://localhost:5450/hero")
  }
  saveHeroes(hero){
    return this._http.post("http://localhost:5450/hero",hero);
  }
}
