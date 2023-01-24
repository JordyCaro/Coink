
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CharactersService } from 'src/app/data/service/characters.service';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {
  // query!: Query;
  dataTable!: any;
  page: number = 1;
  limit: number = 5;
  notFoundFilter: boolean = false;
  displayedColumns: string[] = ['user', 'requestedCards', 'date', 'status'];
  displayedColumnsMobile: string[] = ['user', 'requestedCards'];
  pagination: any;
  drawerOpen: boolean = true;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dbService: CharactersService) {}

  ngOnInit(): void {
    this.search();
    this.dbService.stateDrawer.subscribe((data: boolean) => {
      this.drawerOpen = data;
    })
  }

  search() {
    this.dbService
      .getAllCharacters(this.page, this.limit)
      .subscribe((data: any) => {
        console.log(data)
        this.dataTable = new MatTableDataSource(data.results);
        this.dataTable.sort = this.sort;
        this.pagination = data.info;
      });
  }


  clean(){
    this.search();
    this.notFoundFilter = false;
  }

  pageSelected(page: number) {
    if (this.pagination.next) {
      this.page = page;
      this.search();
    }
  }

  filter(data: any) {

    console.log(data);
    if (data?.date) {
      const formatedDate = new Date(data.date).toISOString();
      this.dataTable = new MatTableDataSource(
        this.dataTable.data.filter((item: any) => {
          const dateParsed = new Date(item.date).toISOString();
          return (
            dateParsed.includes(formatedDate)
          );
        })
      );
    }
    if (data?.user) {
      this.dataTable = new MatTableDataSource(
        this.dataTable.data.filter((item: any) => {
          return item.name.toLowerCase().includes(data.user.toLowerCase());
        })
      );
    }

    if (this.dataTable.data.length === 0) {
      this.notFoundFilter = true;
    } else {
      this.notFoundFilter = false;
    }
  }
}
