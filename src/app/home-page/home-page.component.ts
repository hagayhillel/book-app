import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/services/books.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  constructor(private BooksService: BooksService) {}
  private booksServiceSearchDuplicate;
  ngOnInit() {}

  searchBook(bookName: string) {
    this.booksServiceSearchDuplicate = this.BooksService.searchBooks(bookName);
  }
}
