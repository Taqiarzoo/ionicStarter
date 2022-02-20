import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { GeneralAlert } from '../interfaces/generalAlert';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(
    public toastController: ToastController,
    private alertCtrl: AlertController
  ) {}

  /**
   * global tost method this method will display the tost to the user with the message passed in argument
   * this method implements the ToastController
   * @param message message to show
   */
  async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      icon: 'information-circle',
      position: 'bottom',
      color: 'danger',
      buttons: [
        {
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    toast.present();
  }

  /**
   * this method is used to show Alerts
   * it implements AlertController of ionic, it accept Generalalert Object and a method which execute on action
   * @param alertString GenerAlert Object
   * @param handler Function to execute on Action
   */
  async popUp(alertString: GeneralAlert, handler: Function) {
    this.alertCtrl
      .create({
        header: alertString.header,
        message: alertString.message,
        buttons: [
          { text: alertString.cancleButtonText, role: 'cancle' },
          {
            text: alertString.actionButtonText,
            handler: () => {
              handler();
            },
          },
        ],
      })
      .then((alertEle) => {
        alertEle.present();
      });
  }
}
