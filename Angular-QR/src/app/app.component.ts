import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Murali";
  increaseSize(){
      document.getElementById("qrcode").style.display = "block";
      document.getElementsByTagName("img")[0].style.width = "300px";
      document.getElementsByTagName("img")[0].style.height = "300px";
  }
}
