import { TestBed } from '@angular/core/testing';

import { ActorService } from './actor-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ActorServiceService', () => {
  let service: ActorService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of actor names', () => {
    http = TestBed.inject(HttpClient);
    const actorList = ['abc', 'qwerrt', 'ytdytdt','hdhgcgh'];

    spyOn(http, 'get').and.returnValue(of(actorList));
    service = TestBed.inject(ActorService);
    const spy = jasmine.createSpy('spy');
    service.fetchActorNameList$().subscribe();

    expect(spy).toHaveBeenCalledWith(actorList);
    expect(http.get).toHaveBeenCalledWith('/getActorList');
  });
});
