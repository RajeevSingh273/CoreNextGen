import { Router } from '@angular/router';
import { ConfigService } from '@ngx-config/core';

export class BaseComponent {
    protected isDevEnvironment: boolean;
    protected productionLoginUrl: string;
    constructor(protected configService: ConfigService,
        protected router: Router) {
        const config = configService.getSettings('authentication');
        this.productionLoginUrl = config.loginUrl;
        this.isDevEnvironment = config.isDevEnvironment;
    }
    public handleError(error?: any, next?: Function) {
        if (error) {
            if (error.status && (error.status === 401)) {
                delete localStorage.authKey;
                if (this.isDevEnvironment === true) {
                    this.router.navigate(['login']);
                } else {
                    window.location.assign(this.productionLoginUrl);
                }
            } else if (!error) {
                delete localStorage.authKey;
                if (this.isDevEnvironment === true) {
                    this.router.navigate(['login']);
                } else {
                    window.location.assign(this.productionLoginUrl);
                }
            } else if (next) {
                next(error);
            }
        }
    }
}
