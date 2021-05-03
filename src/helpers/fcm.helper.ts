import { Injectable } from '@angular/core';
import {
  Capacitor,
  Device,
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken,
} from '@capacitor/core';
import { StorageItems } from 'src/core/enums/storage.enum';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { PushNotifications, Storage } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class PushNotificationHelper {
  constructor() {}
  async init() {
    const { uuid } = await Device.getInfo();
    Storage.set({
      key: StorageItems.uuid.toString(),
      value: uuid,
    });
    if (Capacitor.isNative) {
      this.handlePush();
    }
  }
  async saveToken() {
    try {
      const { value: token } = await Storage.get({
        key: StorageItems.fbToken.toString(),
      });
      const { value: uuid } = await Storage.get({
        key: StorageItems.uuid.toString(),
      });
      // TODO: save token in your API server
    } catch (e) {
      console.error('save token', e);
    }
  }
  private handlePush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        console.log('you dont have permissions');
      }
    });

    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        console.log('My token: ' + JSON.stringify(token.value));
        Storage.set({
          key: StorageItems.fbToken.toString(),
          value: token.value,
        });
      }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        //TODO handle navigation app
        console.log(
          'Action performed: ' + JSON.stringify(notification.notification)
        );
      }
    );
  }
}
