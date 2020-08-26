import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RessourceService} from '../service/ressource.service';
import { ToastrService } from 'ngx-toastr';
import { Ressource} from '../model/ressource';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  host :string = "http://localhost:8085";
  errorMessage = '';
  ressource: Ressource | undefined;
  url:string;
  pdf:any;
blob:Blob;
objectURL:any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private crudApi: RessourceService,
    private dom:DomSanitizer) {
  }
 
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getRessource(id);
     this.url='http://localhost:8085/api/Cvressources/'+id;
     this.pdf =
     this.dom.bypassSecurityTrustResourceUrl(this.url);
     this.blob = new Blob([this.url], {
      type: "application/pdf"
      });
      this.objectURL = URL.createObjectURL(this.blob);
      this.pdf = this.dom.bypassSecurityTrustResourceUrl(this.objectURL);
    }
    
  }
 
  getRessource(id: number) {
    this.crudApi.getData(id).subscribe(
      response =>{this.ressource = response;},
      error => this.errorMessage = <any>error);
  }
  
  onBack(): void {
    this.router.navigate(['/base/detailressource']);
  }
  variable_name=this.dom.bypassSecurityTrustUrl(this.url);
}
