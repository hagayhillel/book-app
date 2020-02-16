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
  public favBooks;
  ngOnInit() {
    this.favBooks = this.BooksService.favBooks;
  }

  removeFromFavorites(book) {
    this.BooksService.removeBookFromFav(book);
  }

  navigate() {
    this.router.navigate(["/home"]);
  }
}
