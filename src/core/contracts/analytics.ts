import { Capacitor, Plugins } from '@capacitor/core';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { FirebaseAnalytics } = Plugins;

export abstract class Analytics {
  /**
   * Platform: Android/iOS
   * Sets the current screen name, which specifies the current visual context in your app.
   *
   * @param screenName - name of the current screen to track
   *        nameOverride - name of the screen class to override
   * @returns instanceId - individual instance id value
   * https://firebase.google.com/docs/analytics/screenviews
   */
  protected screenTracking(screenName: string) {
    return (
      Capacitor.isNative &&
      FirebaseAnalytics.setScreenName({
        screenName,
        nameOverride: `${screenName}Screen`,
      })
    );
  }
  /**
   * Platform: Web/Android/iOS
   * Logs an app event.
   *
   * @param name - name of the event to log
   *        params - key/value pairs of properties (25 maximum per event)
   * @returns void
   */
  protected setEvent(
    name: string,
    data: any = {
      platform: Capacitor.platform,
    }
  ) {
    return (
      Capacitor.isNative && FirebaseAnalytics.logEvent({ name, params: data })
    );
  }
}
