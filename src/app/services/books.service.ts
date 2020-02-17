import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  public bookSearchResults = [];
  public favBooks = [];

  searchBooks(bookName: string) {
    this.ifSearchBeenMade();
    this.httpClient
      .get(environment.SEARCH_BOOK_ENDPOINT + bookName + "&maxResults=40")
      .subscribe(
        (data: any) =>
          data.items.map((item: any) => {
            this.bookSearchResults.push([
              item.volumeInfo.title,
              item.volumeInfo.description,
              item.volumeInfo.imageLinks.smallThumbnail,
              item.id
            ]);
          }),
        err => alert(err)
      );

    return this.bookSearchResults;
  }

  ifSearchBeenMade() {
    if (this.bookSearchResults.length > 0) {
      this.bookSearchResults = [];
    }
  }

  addBookToFav(book: Array<any>) {
    this.favBooks.push(book);
  }

  removeBookFromFav(book: Array<any>) {
    for (let item = 0; item < this.favBooks.length; item++) {
      if (this.favBooks[item][3] === book[3]) {
        this.favBooks.splice(item, 1);
      }
    }
  }

  ifBookInFavOrNot(book: Array<any>) {
    for (let item = 0; item < this.favBooks.length; item++) {
      if (this.favBooks[item][3] === book[3]) {
        return true;
      }
    }
    return false;
  }
}
