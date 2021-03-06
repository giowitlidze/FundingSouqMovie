import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class HttpSettings {
    private _baseUrl: string;
    private _params: HttpParams;
    private _httpOptions: object;
    private _apiKey: string;
    private _apiKeyValue: string;

    constructor() {
        this._apiKey = "api_key";
        this._apiKeyValue = "0f367a670dcdae8ade7c81b2386a13a3"
        this._baseUrl = "https://api.themoviedb.org/3/";
        this._params = new HttpParams().set(this._apiKey, this._apiKeyValue);
        this._httpOptions = {};
        this.BuildHttpOptions();
    }

    get baseUrl() {
        return this._baseUrl;
    }

    get httpOptions() {
        return this._httpOptions;
    }

    HandleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }

        return throwError(
            'Something bad happened; please try again later.');
    }


    AddParams(newParamList: any[]) {
        newParamList.forEach(element => {
            this._params = this._params.set(element[0], element[1]);
        });

        this._params = this._params.append(this._apiKey, this._apiKeyValue)

        this.BuildHttpOptions();
    }

    private BuildHttpOptions() {
        this._httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            params: this._params
        };
    }
}
