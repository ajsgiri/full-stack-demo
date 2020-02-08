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
    this.notable
      .getList()
      .subscribe( (data: { text: string}) => {
        this.text = data.text;
      });
  }
}
