import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-formcard',
  templateUrl: './formcard.component.html',
  styleUrls: ['./formcard.component.css']
})
export class FormcardComponent implements OnInit{

  card:Card = new Card();

  titulo:string = "Registro de tarjeta";

  constructor(private cardService:CardService, private router:Router, private activaterRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activaterRoute.params.subscribe(
      e => {
        let idCard = e['id_card'];
        console.log(e);
        if(idCard) {
          this.cardService.get(idCard).subscribe(
            es => this.card = es
          )
        }
      }
    )
  }

  create():void{
    console.log(this.card);
    this.cardService.create(this.card).subscribe(
      res => this.router.navigate(['/cards'])
    );
  }

  update():void {
    this.cardService.update(this.card).subscribe(
      res => this.router.navigate(['/cards'])
    )
  }

}
