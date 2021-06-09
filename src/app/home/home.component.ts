import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  result = 0;
  actionBarNumber1 = 0;
  actionBarNumber2 = 10;
  actionBarNumber3 = 200;

  students = [
    {
      name: 'Boppin',
      status: 'N',
    },
    { name: 'Code', status: 'Y' },
  ];

  date = new Date();

  baht = 12343434;

  power = 12000450;

  pokemonNameFormControl = new FormControl();

  pokemon$ = this.pokemonNameFormControl.valueChanges.pipe(
    debounceTime(400),
    switchMap((pokemonName) => {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    })
  );

  // ditto$ = this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sumResult();
  }
  sumResult() {
    this.result =
      this.actionBarNumber1 + this.actionBarNumber2 + this.actionBarNumber3;
  }
}
