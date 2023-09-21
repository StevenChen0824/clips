import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      visible: true
    })
    console.log(this.modals)
  }

  isModalOpen() {
    return true
  }

  toggleModalOpen() {
    // this.visible = !this.visible
  }
}
