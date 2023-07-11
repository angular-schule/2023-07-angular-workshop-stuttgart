import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private title: Title) { super(); }

  updateTitle(routerState: RouterStateSnapshot) {
    let title = '🅰️ Book Rating';
    const extra = this.buildTitle(routerState);
    if (extra) {
      title =  title + ': ' + extra;
    }
    this.title.setTitle(title);
  }
}
