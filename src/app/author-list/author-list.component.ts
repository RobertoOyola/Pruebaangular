import { Component, OnInit } from '@angular/core';
import { LibreriaServicesService } from '../services/libreria-services.service';
import { ModalObrasComponent } from '../modal-obras/modal-obras.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Libros } from '../interfaces/Libros';

@Component({
  selector: 'app-authorlist',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})

export class AuthorlistComponent implements OnInit {
  authors = [];
  obrasAleatorias: Libros[] = [];

  constructor(private libreriaService: LibreriaServicesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.libreriaService.getAuthors().subscribe((response: any) => {
      this.authors = response.authors;
    });
    this.libreriaService.getRandomLibros().subscribe((response: any) => {
      this.obrasAleatorias = response;
    });
  }

  openModal(author: string): void {
    const modalRef = this.modalService.open(ModalObrasComponent);
    modalRef.componentInstance.author = author;
  }
}