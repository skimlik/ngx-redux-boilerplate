import { Injectable } from '@angular/core';
import { HttpService, IHttpReponse } from '../../core/http/http.service';
import { IGameInfo } from './models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameInfoService {
    private endpoint = '/wot/encyclopedia/info/';

    constructor(private httpBase: HttpService) {
    }

    public getInfo(): Observable<IHttpReponse<IGameInfo>> {
        const url = this.httpBase.getBasicEndpoint(this.endpoint);
        return this.httpBase.getData<IGameInfo>(url)
            .map(m => m);
    }
}
