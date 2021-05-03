import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { StorageItems } from 'src/core/enums/storage.enum';
import { StorageHelper } from 'src/helpers/storage.helper';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {
  constructor(private storage: StorageHelper, private router: Router) {}

  canLoad() {
    const isAuthenticated = !!+this.storage.get(StorageItems.isAuthenticated);
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/', {
        skipLocationChange: true,
        replaceUrl: true,
      });
    }
  }
}
