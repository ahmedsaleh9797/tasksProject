import { Component } from '@angular/core';
import { IconComponent } from '@app/shared/icons/icon/icon.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { ScrollPanelModule } from 'primeng/scrollpanel';
@Component({
  selector: 'app-home',
  imports: [ScrollPanelModule,SvgIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
