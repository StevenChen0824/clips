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
  }

  isModalOpen(id:string): boolean {
    return !!this.modals.find(modal => modal.id === id)?.visible
  }

  toggleModalOpen(id: string) {
    const modal = this.modals.find(modal => modal.id === id)

    if(modal) {
      modal.visible = !modal.visible
    }
  }
}
