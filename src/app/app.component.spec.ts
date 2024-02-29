import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'actor-angular-app'`, () => {
    fixture.detectChanges();
    expect(app.title).toEqual('actor-angular-app');
  });

  it('should contain router-outlet component', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

  it('should contain App Header component', () => {
    let de = fixture.debugElement.query(By.css('app-header'));
    expect(de).not.toBeNull();
  });
});
