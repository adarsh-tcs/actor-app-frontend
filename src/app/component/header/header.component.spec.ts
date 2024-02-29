import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import {
  RouterOutlet,
  RouterLinkWithHref,
  RouterLinkActive,
  RouterLink,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterLink, RouterTestingModule],
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have 2 nav element', () => {
    let de = fixture.debugElement.queryAll(By.css('nav'));
    expect(de.length).toBe(2);
  });

  it('should contain some heading in 1st navbar', () => {
    let de = fixture.debugElement.query(By.css('nav a'));
    expect(de.nativeElement.innerText).not.toBeNull();
  });

  it('should have 4 navigation tabs in 2nd navbar', () => {
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.navbar2 a')).length).toBe(4);
    expect(component.routerLink1.length).toBe(4);
    expect(
      fixture.debugElement.queryAll(By.directive(RouterLinkActive)).length
    ).toBe(4);
    expect(
      fixture.debugElement.queryAll(By.directive(RouterLinkWithHref)).length
    ).toBe(4);
  });
});
