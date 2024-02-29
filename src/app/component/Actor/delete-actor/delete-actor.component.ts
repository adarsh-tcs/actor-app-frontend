import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { ActorService } from 'src/app/service/actor/actor-service.service';

@Component({
  selector: 'app-delete-actor',
  templateUrl: './delete-actor.component.html',
  styleUrls: ['./delete-actor.component.css'],
})
export class DeleteActorComponent implements OnInit {
  deleteForm: FormGroup;
  actorList$;
  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.deleteForm = new FormGroup({
      mobile: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
    });

    // this.actorList$ = of(['abc', 'yttd']);

    this.actorList$ = this.actorService.fetchActorNameList();
    // console.log(this.actorService.fetchActorNameList$().subscribe());
  }

  deleteActorSubmit() {}
}
