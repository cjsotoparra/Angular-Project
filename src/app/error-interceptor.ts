import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { ErrorComponent } from "./error/error.component";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

	constructor(private dialog: MatDialog){}

        intercept(req: HttpRequest<any>, next: HttpHandler){
                return next.handle(req).pipe(
			catchError((error: HttpErrorResponse) => {
				this.dialog.open(ErrorComponent);
				return throwError(error);
			})
		);
        }
}

