import { Component, OnInit,Inject } from '@angular/core';
import { RessourceService} from '../service/ressource.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router } from '@angular/router';
import { Ressource} from '../model/ressource';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-ressource',
  templateUrl: './add-ressource.component.html',
  styleUrls: ['./add-ressource.component.css']
})
export class AddRessourceComponent implements OnInit {

  wcode : string = '';
  userFile ;
  public imagePath;
  imgURL: any;
  public message: string;
  constructor(public crudApi: RessourceService ,public fb: FormBuilder,public toastr: ToastrService, private router : Router ,@Inject(MAT_DIALOG_DATA)  public data,
  public dialogRef:MatDialogRef<AddRessourceComponent>) { }
  get f() { return this.crudApi.dataForm.controls; }
  ngOnInit(): void {
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()};
    
  }
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
       
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required]],
        telephone: ['', [Validators.required]],
        type: ['', [Validators.required]]
      });
    }
    ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
    if (this.crudApi.choixmenu == "A")
    {
      this.addData();
    }
    else
    {
    this.updateData()
    }   
}
addData() {
  const formData = new  FormData();
  const ressource = this.crudApi.dataForm.value;
  formData.append('ressource',JSON.stringify(ressource));
  formData.append('file',this.userFile);
  this.crudApi.createData(formData).subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success');
    this.router.navigate(['/admin/lressource']); 
  });
}
  updateData()
  {
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
      this.dialogRef.close();
      this.router.navigate(['/admin/lressource']); 
    });
  }

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
    
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}
}
