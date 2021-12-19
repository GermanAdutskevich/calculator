import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PersonData } from '../PersonData';
import { TotalData } from '../TotalData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'SolidBranchRecrut';

  public products: PersonData[] = [];
  public total: TotalData[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.sendGetRequestPerson().subscribe(
      (data) => {
        this.products = data as PersonData[];
      },
      (error) => console.error(error)
    );

    const types = [
      ...new Set(this.products.map((item) => item.type)),
    ].sort((a, b) => (a > b ? 1 : -1));

    this.dataService.sendGetRequestNumber().subscribe(
      (data) => {
        this.total = data as TotalData[];
      },
      (error) => console.error(error)
    );
  }
}
