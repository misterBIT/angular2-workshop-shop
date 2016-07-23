import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES, FormControl} from '@angular/forms';
import {MonsterService} from './monster.service';
import {MonsterModel} from './monster.model';

@Component({
  moduleId: module.id,
  // selector: 'monster-edit',
  templateUrl: 'monster-edit.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class MonsterEditComponent implements OnInit {

  private frmMonster: FormGroup;
  private monsterToEdit: MonsterModel;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private monsterService: MonsterService) { }

  ngOnInit() {
    console.log('this.route.params', this.route.params);
    this.prepareForm();
    this.route.params.subscribe(params => {
        const id = params['id'];
        // This means EDIT mode
        if (id) {
          this.monsterService.get(id)
            .then((monster) =>{

                this.monsterToEdit = monster;
                console.log('in edit, ajax returned : ',  this.monsterToEdit,  this.frmMonster.controls );
                (<FormControl>this.frmMonster.controls['name']).updateValue(monster.name);
                (<FormControl>this.frmMonster.controls['power']).updateValue(monster.power);
            });
        }
      });
  }
  save() {

    if (this.monsterToEdit) {
      // updating a monster
      this.monsterService.save(this.frmMonster.value, this.monsterToEdit.id)
      .then(()=>{
          this.router.navigate(['/monster']);
      });
    } else {
      // a new monster
      console.log('Monster Created', this.frmMonster.value);
      this.monsterService.save(this.frmMonster.value)
        .then((monster : MonsterModel)=>{
          // alert(`Monster with id ${monster.id} was created`);
          this.router.navigate(['/monster']);
        });
    }

  }

  prepareForm() {
     this.frmMonster = this.formBuilder.group({
      name: ['',
              Validators.compose([Validators.required,
                                  Validators.minLength(3),
                                  Validators.maxLength(100)])],
      power: [5, Validators.required]
    });
  }

}
