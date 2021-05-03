import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

export abstract class IRepository {
  constructor(protected http: HttpClient) {}

  protected fetchParams<T extends {}>(requestParams: T): HttpParams {
    let params = new HttpParams();
    for (const property in requestParams) {
      if (requestParams.hasOwnProperty(property)) {
        params = params.append(property, requestParams[property.toString()]);
      }
    }
    return params;
  }
  protected get header() {
    return {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };
  }

  protected get<T>(apiUrl: string) {
    return this.http.get<T>(apiUrl).pipe(
      map(
        (response: any) =>
          // TODO: add logic here!
          response
      )
    );
  }

  protected post<T>(apiUrl: string, params?: HttpParams) {
    return this.http.post<T>(apiUrl, params.toString(), this.header).pipe(
      map(
        (response: any) =>
          // TODO: add logic here!
          response
      )
    );
  }

  protected delete<T>(apiUrl: string) {
    return this.http.delete<T>(apiUrl).pipe(
      map(
        (response: any) =>
          // TODO: add logic here!
          response
      )
    );
  }
}
