import {Injectable, TemplateRef} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({textOrTpl, ...options});
  }

  showSuccess(textOrTpl: string) {
    let opt = {
      classname: 'bg-success text-light',
      delay: 5000
    };
    this.toasts.push({textOrTpl, ...opt});
  }

  showError(textOrTpl: string) {
    let opt = {
      classname: 'bg-danger text-light',
      delay: 5000
    };
    this.toasts.push({textOrTpl, ...opt});
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
