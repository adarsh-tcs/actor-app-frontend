import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActorComponent } from './delete-actor.component';
import { By } from '@angular/platform-browser';
import { ActorService } from 'src/app/service/actor/actor-service.service';
import { of } from 'rxjs';
import { spyOnClass } from 'jasmine-es6-spies';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

describe('DeleteActorComponent', () => {
  let component: DeleteActorComponent;
  let fixture: ComponentFixture<DeleteActorComponent>;
  let actorService: ActorService;
  // let actorService: jasmine.SpyObj<ActorService>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DeleteActorComponent],
      // providers: [
      //   {
      //     provide: ActorService,
      //     useFactory: () => spyOnClass(ActorService),
      //   },
      // ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    actorService = TestBed.inject(ActorService);
    spyOn(actorService, 'fetchActorNameList').and.returnValue(
      of(['jjvb', 'jfj'])
    );
    fixture.detectChanges();
  });
  it('should create form', () => {
    expect(fixture.debugElement.query(By.css('form'))).toBeTruthy();

    // console.log(fixture.debugElement.query(By.directive(FormGroup)));
    // expect().toBeTruthy();
  });

  it('should contain Mobile no field in the Form Group', () => {
    let mobileField = component.deleteForm.controls['mobile'];
    expect(mobileField).toBeTruthy();
  });

  it('should contain Name no field in the Form Group', () => {
    let nameField = component.deleteForm.controls['name'];
    expect(nameField).toBeTruthy();
  });

  it('should contain Mobile no field in the form', () => {
    let mobileField = fixture.debugElement.query(By.css('form #mobile'));
    expect(mobileField).toBeTruthy();
  });

  it('should contain Name dropdown field in the Form', () => {
    let nameField = fixture.debugElement.query(By.css('form #name'));
    expect(nameField).toBeTruthy();
    expect(
      fixture.debugElement.queryAll(By.css('form #name option')).length
    ).toBe(3);
  });

});
