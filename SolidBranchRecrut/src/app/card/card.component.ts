import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PersonData } from '../PersonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public data: PersonData[] = [];
  public types: Array<string> = [];
  public numberOfType: number = 0;
  public numbers: Array<number> = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.sendGetRequestPerson().subscribe(
      (data) => {
        this.data = data as PersonData[];
        this.types = [
          ...new Set(this.data.map((item) => item.type)),
        ].sort((a, b) => (a > b ? 1 : -1));

        for (let i = 0; i < this.types.length; i++) {
          this.numbers.push(
            (this.numberOfType = [
              ...new Set(
                this.data.filter((item) => item.type === this.types[i])
              ),
            ].length)
          );
        }
      },
      (error) => console.error(error)
    );
  }
}
