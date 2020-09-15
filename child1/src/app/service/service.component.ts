import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.css"],
})
export class ServiceComponent implements OnInit {
  show: boolean = false;

  ngOnInit() {
    console.log("i am service page");
  }

  updateShow() {
    this.show = !this.show;
  }
}
