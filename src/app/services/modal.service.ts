import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false

  constructor() { }

  isModalOpen() {
    return this.visible
  }

  toggleModalOpen() {
    this.visible = !this.visible
  }
}
