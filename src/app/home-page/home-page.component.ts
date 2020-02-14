import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/services/books.service";
import { MatAccordion } from "@angular/material";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  constructor(private BooksService: BooksService) {}
  private booksServiceSearchDuplicate;
  panelOpenState = false;
  ngOnInit() {}

  private search = new FormControl("", Validators.required);

  searchBook(bookName: string) {
    this.booksServiceSearchDuplicate = this.BooksService.searchBooks(bookName);
  }
}
