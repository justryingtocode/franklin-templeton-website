import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    topPossition: any = null,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm' | 'lg' = 'sm'
  ): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationDialogComponent, {
      size: dialogSize,
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    console.log("Modal Data =>",{
      title,
      message,
      topPossition
    });
    if(topPossition){
      $(".modal-content").css({top: `${topPossition}px`});
    }

    return modalRef.result;
  }

}
