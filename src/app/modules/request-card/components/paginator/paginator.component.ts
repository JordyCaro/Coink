import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() page!: number;
  @Input() totalPages!: number;
  @Input() limit!: number;
  @Output() OnPageSelected: EventEmitter<number> = new EventEmitter<number>();
  pages!: number[];

  constructor() {}

  ngOnInit(): void {
    this.pages = new Array(this.limit).fill(0).map((_, i) => i + 1);

  }

  previousPage() {
    if (this.pages[0] > 1) {
      this.pages = this.pages.map((page) => page - 1);
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.pages = this.pages.map((page) => page + 1);
    }
  }

  selectPage(page: number) {
    this.OnPageSelected.emit(page);
  }
}
