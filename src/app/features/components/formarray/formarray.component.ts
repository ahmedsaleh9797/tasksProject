import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-formarray',
  imports: [ButtonModule,RippleModule],
  templateUrl: './formarray.component.html',
  styleUrl: './formarray.component.scss',
})
export class FormarrayComponent {

}
