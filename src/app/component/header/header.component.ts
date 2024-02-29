import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  routerLink1 = [
    { path: 'add-actor', label: 'Add Actor' },
    { path: 'search-actor', label: 'Search Actor' },
    { path: 'update-movie', label: 'Update Movie' },
    { path: 'delete-actor', label: 'Delete Actor' },
  ];
  // // routerLink1 = ['addactor', 'searchactor', 'updatemovie', 'deleteactor'];
  // routerLink1: routing[];

  @Input() value: string;

  arr: string[] = ['dascs', 'ascs'];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  // onAddActorTab() {
  //   this.router.navigate(['add-actor']);
  // }
}

export interface routing {
  path: string;
  label: string;
}
