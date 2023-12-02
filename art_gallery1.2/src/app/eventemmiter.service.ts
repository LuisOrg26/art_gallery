import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EventemmiterService {
  private dataSubject = new Subject<string>();
  public data$ = this.dataSubject.asObservable();

  sendData(data: string): void {
    this.dataSubject.next(data);
  }
}
