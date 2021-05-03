import { Component } from '@angular/core';
import { Plugins, Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    if (Capacitor.isNative) {
      SplashScreen.show({
        autoHide: false,
        fadeOutDuration: 500,
      });
      this.platform.ready().then(() => {
        SplashScreen.hide();
      });
    }
  }
}
