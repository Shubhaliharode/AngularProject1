import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "newapplication";
  names = [
    { id: 102, product: "screen 4", stock: 0 },
    { id: 202, product: "screen 4.5", stock: 786 },
    { id: 302, product: "screen 5", stock: 0 },
    { id: 402, product: "screen 5.5", stock: 206 }
  ];
}
