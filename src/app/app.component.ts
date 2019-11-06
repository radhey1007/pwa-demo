import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-demo';
  update:boolean=false;
  jokes: any;

  constructor(public updates : SwUpdate,private dataService:DataService){
    updates.available.subscribe( event => {
      this.update = true;

      updates.activateUpdate().then(() => {
        document.location.reload();
      })
      
    })
  }

  ngOnInit() {
    this.dataService.gimmeJokes().subscribe(res => {
      console.log(res);
      this.jokes = res;
    })
  }

}
