import { Injectable } from '@angular/core';

@Injectable()
export class SharingHelper {
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
}
