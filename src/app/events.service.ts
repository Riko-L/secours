import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Events } from '../app/events';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  dbcouch: string = "https://alf74.alwaysdata.net/data/alf74_agenda_papeteries/";

  all_docs: string = "_all_docs?include_docs=true"

  constructor(private http: HttpClient) {
    this.setTimerRequest();
  }

  getAllEvents() {
    return this.http.get(this.dbcouch + this.all_docs).pipe(
      map(events => {
        return events.rows.map(ev=> {
          return ev.doc;
        }) ;
      }),
      catchError(this.handleError('getAllEvents', []))
    );
  }

  setTimerRequest() {
    let nbr = 0;
    let interVal = setInterval(() => {
      console.log("J'ai mis a jour les données %s fois", ++nbr)
      this.getAllEvents();
    }, 1000 * 3600)
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
