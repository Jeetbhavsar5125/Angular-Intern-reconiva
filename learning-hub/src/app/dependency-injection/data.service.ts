import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn:'root'
})  
export class DataService{
    private messageSource = new BehaviorSubject<string>('Default Message from Service');
    currentMessage$ = this.messageSource.asObservable();
    changeMessage(newMessage: string) {
        this.messageSource.next(newMessage);
    }
}