import { Component } from '@angular/core';
import { STATIC_CONTENT } from '../../../../shared/commonConstant';
@Component({
  selector: 'app-our-people',
  templateUrl: './our-people.component.html',
  styleUrls: ['./our-people.component.scss']
})
export class OurPeopleComponent {
  membersList= STATIC_CONTENT.membersList;


}
