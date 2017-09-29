import { Injectable } from '@angular/core';
import { HttpService, IHttpReponse } from '../core/http/http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WgtvService {
    private endpoint = '/wgn/wgtv/videos/';

    constructor(private httpBase: HttpService) {
    }

    public list(args: IWgtvSearchArgs = { date_from: 0, page_no: 1 }): Observable<IHttpReponse<IWgtvList[]>> {
        let url = this.httpBase.getBasicEndpoint(this.endpoint);
        url += this.httpBase.queryString(args);
        return this.httpBase.getData(url);
    }
}

export interface IWgtvSearchArgs {
    date_from?: number;
    important?: number;
    language?: string;
    limit?: number;
    page_no?: number;
    program_id?: number;
    project_id?: number;
    q?: string;
    vehicle_id?: number;
    video_id?: number;
}

export interface IWgtvList {
    category_id: number[];
    description: string;
    title: string;
    video_url: string;
    video_id: string;
    important: boolean;
    duration: number;
    project_id: number[];
    ext_title: string;
    thumbnails: {
        'default': IThumbnail
    };
}

export interface IThumbnail {
    url: string;
    width: number;
    height: number;
}
