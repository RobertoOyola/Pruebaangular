import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LibreriaServicesService } from '../services/libreria-services.service';

interface Title {
  title: string;
}

@Component({
  selector: 'app-modal-obras',
  templateUrl: './modal-obras.component.html',
  styleUrls: ['./modal-obras.component.css']
})
export class ModalObrasComponent implements OnInit {
  author: string = '';
  titles: Title[] = [];

  constructor(public activeModal: NgbActiveModal, private libreriaService: LibreriaServicesService) { }

  ngOnInit(): void {
    this.libreriaService.getTitlesByAuthor(this.author).subscribe((response: any) => {
      this.titles = response;
    });
  }

  closeModal(): void {
    this.activeModal.close();
  }
}