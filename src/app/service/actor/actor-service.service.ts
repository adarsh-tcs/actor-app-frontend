import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorModel } from 'src/app/model/actorModel';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  baseUrl: string = 'http://localhost:8086/v1/api/public';
  constructor(private http: HttpClient) {}

  saveActorsDetailsService(actor: ActorModel) {
    return this.http.post(this.baseUrl + '/addActor', actor);
  }

  fetchActorNameList() {
    return this.http.get(this.baseUrl + '/getActorList');
  }

  fetchMovieList(requestBody: { [key: string]: string }) {
    let httpParams = new HttpParams()
      .append('name', requestBody['name'])
      .append('mobile', requestBody['mobile']);
    return this.http.get(this.baseUrl + '/getMovieList', {
      params: httpParams,
    });
  }

  fetchActorNameList$() {
    return this.http.get(this.baseUrl + '/getActorList');
  }

  deleteActor() {
    return this.http.delete(`${this.baseUrl}/actor`);
  }
}
