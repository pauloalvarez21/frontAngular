import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
 titulo:string = "Lista de tarjetas";

 cards:Card[] = [];

 constructor(private cardService:CardService){}

  ngOnInit(): void {
    this.cardService.getAll().subscribe(
      c => this.cards = c
    );
  }

  delete(card:Card):void {
    console.log('Delete');
    this.cardService.delete(card.id).subscribe(
      res => this.cardService.getAll().subscribe(
        response => this.cards = response
      )
    )
  }
}
