import { Component, OnInit,Inject } from '@angular/core';
import { MediasService} from '../service/medias.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router } from '@angular/router';
import { Medias} from '../model/medias';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-medias',
  templateUrl: './edit-medias.component.html',
  styleUrls: ['./edit-medias.component.css']
})
export class EditMediasComponent implements OnInit {

  wcode : string = '';
  userFile1 ;

  public imagePath1;

  imgURL1: any;
 
  public message: string;
  constructor(public crudApi: MediasService ,public fb: FormBuilder,public toastr: ToastrService, private router : Router ,@Inject(MAT_DIALOG_DATA)  public data,) { }
  get f() { return this.crudApi.dataForm.controls; }
  ngOnInit(): void {
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()};
    
  }
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
       
        type : ['', [Validators.required]],
        titre : ['', [Validators.required]]
       
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
  const medias = this.crudApi.dataForm.value;
  formData.append('medias',JSON.stringify(medias));
  formData.append('file1',this.userFile1);
  this.crudApi.createData(formData).subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success');
    this.userFile1="";
    formData.delete('file1');
    this.crudApi.dataForm.reset();
    this.router.navigate(['/admin/lmedias']); 
  },
  err =>{
    alert("erreur");
  }
  );
}
  updateData()
  {
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
      this.router.navigate(['/admin/lmedias']); 
    });
  }

  onSelectFile1(event) {
    if (event.target.files.length > 0)
    {
      const file1 = event.target.files[0];
     
      this.userFile1 = file1;
      
    
 
    var mimeType1 = event.target.files[0].type;
    if (mimeType1.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    
    var reader = new FileReader();
    
    this.imagePath1 = file1;
    reader.readAsDataURL(file1); 
    reader.onload = (_event) => { 
      this.imgURL1 = reader.result; 
    }

    
  }
}


}
