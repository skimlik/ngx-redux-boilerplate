import { Injectable } from '@angular/core';
import { HttpService, IHttpReponse } from '../core/http/http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WgtvTagsService {
    private endpoint = '/wgn/wgtv/tags/';

    constructor(private httpBase: HttpService) {
    }

    public getTags(): Observable<IHttpReponse<IWgtvTags>> {
        const url = this.httpBase.getBasicEndpoint(this.endpoint);
        return this.httpBase.getData(url);
    }
}

export interface IWgtvTags {
    categories: IWgtvCategories[];
    programs: IWgtvPrograms[];
    projects: IWgtvProjects[];
}

export interface IWgtvCategories {
    category_id: number;
    name: string;
    order: number;
}

export interface IWgtvProjects {
    project_id: number;
    name: string;
    order: number;
}

export interface IWgtvPrograms {
    program_id: number;
    name: string;
    order: number;
}
