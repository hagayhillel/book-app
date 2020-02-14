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
    this.httpClient
      .get(environment.SEARCH_BOOK_ENDPOINT + bookName)
      .subscribe((data: any) =>
        data.items.map((item: any) => {
          this.bookSearchResults.push(item.volumeInfo.title),
            this.bookIdCache.push(item.id);
        })
      );
    return this.bookSearchResults;
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
