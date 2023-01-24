import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { ActivationEnd, Router } from '@angular/router';
import { map,Subscription, filter } from 'rxjs';
import { CharactersService } from 'src/app/data/service/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  showBar = true;
  watcher!: Subscription;
  isMobile = false;
  expandedIndex = 0;
  routeTree:string='Buscar Personaje';
  @ViewChild('drawer') drawer!: any;


  constructor(private mediaObserver: MediaObserver,private dbService: CharactersService) {
    this.initializeWatcher();
  }
  ngOnDestroy(): void {
    this.watcher && this.watcher.unsubscribe();
  }

  changeShowBar() {
    this.showBar = !this.showBar;
  }

  MenuSelected(route:string){
    this.routeTree=route;
  }

  initializeWatcher(): void {
    this.watcher = this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        switch (change.mqAlias) {
          case 'xs':
            this.isMobile = true;
            break;
          case 'sm':
            this.isMobile = true;
            break;
          case 'md':
            this.isMobile = false;
            break;
          case 'lg':
            this.isMobile = false;
            break;
          default:
            this.isMobile = false;
            break;
        }
      });
  }

  drawerChange() {
    this.drawer.toggle();
    this.dbService.drawerOpen.next(this.drawer.opened);
  }





}
