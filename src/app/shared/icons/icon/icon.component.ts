import { Component, Input, Type } from '@angular/core';
import { ICONS } from '../icon.registry';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-icon',
  imports: [NgComponentOutlet],
  templateUrl: './icon.component.html',
  host: {
    class: 'inline-block'
  }
})
export class IconComponent {

  @Input() name!: keyof typeof ICONS;

  @Input() size = 24;

  get component(): Type<any> | null {
    return ICONS[this.name] ?? null;
  }
}