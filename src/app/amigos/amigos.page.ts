import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  public amigos = [

    {
      name: 'Rafael',
      idade: 27,
      nivelAmizade: 5
    },
    {
      name: 'Matheus',
      idade: 21,
      nivelAmizade: 5
    },
    {
      name: 'Brener',
      idade: 20,
      nivelAmizade: 4
    },

    {
      name: 'Otavio',
      idade: 28,
      nivelAmizade: 5
    },

    {
      name: 'Gabriel',
      idade: 23,
      nivelAmizade: 3
    },







  ];

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }


  deleteAmigo(name: String) {
    var cont = 0;
    this.amigos.forEach(amigo => {
      cont++;
      if (amigo.name == name) {
        this.amigos[cont - 1] = null;
      }
    })
  }

  editarAmigo() {

  }

  cancelarAmigo() {

  }

  async presentActionSheet(name: String) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteAmigo(name);
        }
      }, {
        text: 'Editar',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}