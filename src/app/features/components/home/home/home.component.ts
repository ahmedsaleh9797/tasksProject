import { Component } from '@angular/core';
import { IconComponent } from '@app/shared/icons/icon/icon.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
@Component({
  selector: 'app-home',
  imports: [ScrollPanelModule,IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
