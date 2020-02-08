import { Component, OnInit } from "@angular/core";
import { NotableApiService } from "../services/notable-api.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
  private text;
  constructor(private notable: NotableApiService) {}

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.notable.getProviders().subscribe(data => {
      console.log(data);
    });
    this.notable.getProviderAppointments(1).subscribe(data => {
      console.log(data);
    });
  }
}
