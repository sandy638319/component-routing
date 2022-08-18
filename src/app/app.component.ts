import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router){}

  choosePage: any;
  onSubmit(form: NgForm){
    console.log(form.value.componentName)
    this.choosePage = form.value.componentName;
    this.router.navigate([form.value.componentName]);
  }
}
