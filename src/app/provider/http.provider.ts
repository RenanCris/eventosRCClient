import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
 
 intercept(
  req: HttpRequest<any>,
  next: HttpHandler,
 ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token");
    const dupReq = req.clone({
    headers: req.headers.set('Content-Type','application/json').set('Authorization','bearer ' + token),
 });
 return next.handle(dupReq);
 }
}