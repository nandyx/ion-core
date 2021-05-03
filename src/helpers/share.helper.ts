import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { Share } = Plugins;

@Injectable()
export class ShareHelper {
  call(phoneNumber: string) {
    phoneNumber = encodeURIComponent(phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
  email(email: string, options?: { subject: string; body: string }) {
    let data: string;
    if (options) {
      data = `${email}?subject=${options.subject}&body=${options.body}`;
    }
    window.location.href = 'mailto:' + data;
  }
  async socialSharing(
    title: string,
    text: string,
    url?: string,
    dialogTitle?: string
  ) {
    return await Share.share({
      title,
      text,
      url,
      dialogTitle,
    });
  }
}
