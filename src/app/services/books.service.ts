import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  public bookIdCache = [];
  public bookSearchResults = [];
  public favBooks = [];

  searchBooks(bookName: string) {
    this.ifSearchBeenMade();
    this.httpClient
      .get(environment.SEARCH_BOOK_ENDPOINT + bookName)
      .subscribe((data: any) =>
        data.items.map((item: any) => {
          this.bookSearchResults.push([
            item.volumeInfo.title,
            item.volumeInfo.description,
            item.volumeInfo.imageLinks.smallThumbnail
          ]),
            this.bookIdCache.push(item.id);
        })
      );
    return this.bookSearchResults;
  }

  ifSearchBeenMade() {
    if (this.bookSearchResults.length > 0) {
      this.bookSearchResults = [];
    }
  }

  addBookToFav(bookIndex: string) {
    this.favBooks.push(this.bookSearchResults[bookIndex]);
  }

  removeBookFromFav(bookIndex: string) {
    this.favBooks = this.favBooks.filter(
      id => this.bookSearchResults[bookIndex] == id
    );
  }

  ifBookInFavOrNot(bookIndex: string) {
    return this.bookIdCache.includes(bookIndex);
  }
}
