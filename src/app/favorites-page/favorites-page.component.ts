import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/services/books.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-favorites-page",
  templateUrl: "./favorites-page.component.html",
  styleUrls: ["./favorites-page.component.scss"]
})
export class FavoritesPageComponent implements OnInit {
  constructor(private BooksService: BooksService, private router: Router) {}

  ngOnInit() {
    this.favBooks = this.BooksService.favBooks;
  }

  public favBooks;
}
