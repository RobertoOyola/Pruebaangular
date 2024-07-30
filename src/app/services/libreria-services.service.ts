import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Libros } from '../interfaces/Libros';

@Injectable({
  providedIn: 'root'
})
export class LibreriaServicesService {

  private apiUrl = 'https://poetrydb.org';

  constructor(private http: HttpClient) { }

  getAuthors(): any {
    return this.http.get(`${this.apiUrl}/authors`).pipe(
      tap((response: any) => console.log(response))
    );
  }

  getTitlesByAuthor(author: string): any {
    return this.http.get(`${this.apiUrl}/author/${author}/title`);
  }

  getPoemByAuthorAndTitle(author: string, title: string): any {
    return this.http.get(`${this.apiUrl}/author,title/${author};${title}`);
  }

  getRandomLibros(): any {
    return this.http.get(`${this.apiUrl}/random/25/author,title.json`).pipe(
      map(response => Object.values(response)),
      map(books => books.filter(book => book.author && book.title))
    );
  }

}