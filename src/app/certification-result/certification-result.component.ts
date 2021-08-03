import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import * as queryString from 'query-string';
import {checkTrue} from '../utils/common.result';

@Component({
  selector: 'app-certification-result',
  templateUrl: './certification-result.component.html',
  styleUrls: ['./certification-result.component.css', '../styles/common.result.scss']
})
export class CertificationResultComponent implements OnInit {
  location: Location;

  resultData = {
    merchantUid: '',
    errorMsg: '',
    impUid: '',
    isSuccess: false,
  };

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
    const query = queryString.parse(location.search);
    const { merchant_uid, error_msg, imp_uid, success, imp_success } = query;

    const isSuccess = checkTrue(imp_success) || checkTrue(success);

    this.resultData = {
      merchantUid: merchant_uid as string,
      errorMsg: error_msg as string,
      impUid: imp_uid as string,
      isSuccess,
    };

    console.log(this.resultData);
  }
}
