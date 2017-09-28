import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

export interface IHttpErrorMessage {
    code: string;
    message: string;
    field: string;
    value: string;
}

export interface IHttpReponse<T> {
    data?: T;
    status: string;
    error?: IHttpErrorMessage;
}

@Injectable()
export class HttpService {
    private base = 'https://api.worldoftanks.ru';
    private guid = '474c83b4bd32c84a2246fcbbe1e7544e';

    constructor(private http: Http) {
    }

    public getBasicEndpoint(path: string): string {
        return this.base + path + '?application_id=' + this.guid;
    }

    public getEndpointForAccount(path: string, accountId: number): string {
        const url = this.getBasicEndpoint(path) + '&account_id=' + accountId.toString();
        return url;
    }

    public getSecureUrl(path: string, accountId: number, accessToken: string): string {
        return this.getEndpointForAccount(path, accountId) + '&access_token=' + accessToken;
    }

    public getData<T>(url: string): Observable<IHttpReponse<T>> {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    protected parseJson<T>(text: string): T {
        const jObject = JSON.parse(text) as T;
        return jObject;
    }

    protected parseJsonArray<T>(text: string): T[] {
        const jArray = JSON.parse(text) as T[];
        return jArray;
    }
}
