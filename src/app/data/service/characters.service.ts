import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  drawerOpen: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public baseUrl = environment.API_URL;
  constructor(private httpClient: HttpClient) {}

  public getAllCharacters(page: number, limit: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/character/?page=${page}&limit=${limit}`);
  }
  public getCharacter(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/character/?name=${name}`);
  }

  get stateDrawer(){
    return this.drawerOpen.asObservable();
  }
}
