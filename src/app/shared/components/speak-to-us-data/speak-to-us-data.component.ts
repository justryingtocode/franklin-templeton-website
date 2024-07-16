import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speak-to-us-data',
  templateUrl: './speak-to-us-data.component.html',
  styleUrls: ['./speak-to-us-data.component.scss']
})
export class SpeakToUsDataComponent {

  @Input() isSmall = false

}
