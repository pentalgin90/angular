import {Component, Input, OnInit} from '@angular/core'
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() card: Card
  @Input() index: number

  title: string = 'My Card Title'
  text: string = 'My Card Text'

  cardDate: Date = new Date()

  textColor: string = 'black'

  ngOnInit() {
  }

  changeTitle() {
    this.card.title = 'This title has been changed!'
  }

  inputHandler(value: string){
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }

}
