import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../../modules/client/components/shared/loader/loader.service';

@Injectable()
export class HttpService extends HttpClient {

    private createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', `Basic ${localStorage.authKey}`);
    }

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        private loaderService: LoaderService
    ) {
        super(backend, defaultOptions);
    }
    get(url: string): Observable<any> {
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        this.showLoader();

        return super.get(url, { headers: headers })
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            });

    }
    post(url, data, option?) {
        this.showLoader();
        if (option) {
            this.createAuthorizationHeader(option.headers);
        } else {
            const headers = new Headers();
            this.createAuthorizationHeader(headers);
            option = { headers: headers };
        }
        return super.post(url, data, option).catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            });
    }
    put(url, data, option?) {
        this.showLoader();
        if (option) {
            this.createAuthorizationHeader(option.headers);
        } else {
            const headers = new Headers();
            this.createAuthorizationHeader(headers);
            option = { headers: headers };
        }
        return super.put(url, data, option).catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            });
    }
    delete(url, option?) {
        this.showLoader();
        if (option) {
            this.createAuthorizationHeader(option.headers);
        } else {
            const headers = new Headers();
            this.createAuthorizationHeader(headers);
            option = { headers: headers };
        }
        return super.delete(url, option).catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            });
    }
    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }
    private onSuccess(res: Response): void {
        this.hideLoader();
    }

    private onError(res: Response): void {
        console.log('Error :: ', res.status);
        this.hideLoader();
    }

    private onEnd(): void {
        this.hideLoader();
    }
    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }
}


