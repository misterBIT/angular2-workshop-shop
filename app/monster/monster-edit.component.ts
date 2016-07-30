import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES, FormControl} from '@angular/forms';
import {MonsterService} from './monster.service';
import {MonsterModel} from './monster.model';
import {UploadDemoComponent} from '../shared/upload-demo/upload-demo.component'
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

@Component({
  moduleId: module.id,
  // selector: 'monster-edit',
  templateUrl: 'monster-edit.component.html',
  directives: [FILE_UPLOAD_DIRECTIVES,REACTIVE_FORM_DIRECTIVES, UploadDemoComponent]
})
export class MonsterEditComponent implements OnInit {

  private frmMonster: FormGroup;
  private monsterToEdit: MonsterModel;
  public uploader:FileUploader;

  constructor(  private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private monsterService: MonsterService) {
        this.uploader = new FileUploader({url: monsterService.url});
        // console.log('this.uploader', this.uploader);
        
    }

  ngOnInit() {
    // console.log('this.route.params', this.route.params);
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
      // if there is a file to upload, use the uploader to update both file and form data
      if (this.uploader.getNotUploadedItems().length) {
          this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
              form.append('name', this.frmMonster.value.name);
              form.append('power', this.frmMonster.value.power);
          };
          //   console.log('Uploading Both Data and Files...');
          this.uploader.uploadAll();
           
      } else {
          // if file upload support is not needed, go regular:
          const monsterId = (this.monsterToEdit) ? this.monsterToEdit.id : undefined;
          this.monsterService.save(this.frmMonster.value, monsterId)
              .then(() => {
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
