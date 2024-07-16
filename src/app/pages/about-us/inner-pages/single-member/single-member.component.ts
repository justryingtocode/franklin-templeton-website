import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { STATIC_CONTENT } from '../../../../shared/commonConstant';
@Component({
  selector: 'app-single-member',
  templateUrl: './single-member.component.html',
  styleUrls: ['./single-member.component.scss']
})
export class SingleMemberComponent {

  membersList= STATIC_CONTENT.membersList;
  memberDetails: any={};

  constructor(private activatedRoute: ActivatedRoute, private location:Location) { }

  ngOnInit() {
    // Reading path parameters
    this.activatedRoute.params.subscribe(params => {
      const memberId = params['memberId'] || 2; // Accessing the 'id' parameter
      
      this.memberDetails = this.membersList.find( d => d.memberId == memberId);

      console.log('member ID:', memberId, this.memberDetails);
    });
  }

}
