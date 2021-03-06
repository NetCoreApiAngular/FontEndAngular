import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
export interface IRoutingState {
    getHistory(): string[];
    getPreviousUrl(): string;
}



@Injectable({
    providedIn: 'root'
})
export class RoutingState implements IRoutingState {
    private history: string[] = [];

    constructor(
        private router: Router
    ) { 
        this.loadRouting();
    }

    private loadRouting(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
                this.history = [...this.history, urlAfterRedirects];
            });
    }

    public getHistory(): string[] {
        return this.history;
    }

    public getPreviousUrl(): string {
        return this.history[this.history.length - 2] || null;
    }
}