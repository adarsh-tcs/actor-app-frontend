import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActorComponent } from './add-actor.component';
import { ActorService } from 'src/app/service/actor/actor-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddActorComponent', () => {
  let component: AddActorComponent;
  let fixture: ComponentFixture<AddActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddActorComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create Actor Form', () => {
    expect(component.addActorForm).toBeTruthy();
  });

  it('should create Actor Form Field', () => {
    expect(component.addActorForm).toBeTruthy();
  });
});
