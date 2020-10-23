import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserFlowService {

  constructor() { }

  // test data
  data = {
    'nodes': [
      {
        'node': 0,
        'name': 'HomeActivity',
        'drop': 2
      },
      {
        'node': 1,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 2,
        'name': 'BillPayMobile',
        'drop': 2
      },
      {
        'node': 3,
        'name': 'Cab',
        'drop': 0
      },
      {
        'node': 4,
        'name': 'Bus',
        'drop': 0
      },
      {
        'node': 5,
        'name': 'Hotels',
        'drop': 0
      },
      {
        'node': 6,
        'name': 'Homeactivity',
        'drop': 0
      },
      {
        'node': 7,
        'name': 'Hotels',
        'drop': 0
      },
      {
        'node': 8,
        'name': 'Bus',
        'drop': 0
      },
      {
        'node': 9,
        'name': 'Flight',
        'drop': 0
      },
      {
        'node': 10,
        'name': 'Homeactivity',
        'drop': 1
      },
      {
        'node': 11,
        'name': 'DataCradPrepaid',
        'drop': 0
      },
      {
        'node': 12,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 13,
        'name': 'Bus',
        'drop': 0
      },
      {
        'node': 14,
        'name': 'PayToMerchant',
        'drop': 0
      },
      {
        'node': 15,
        'name': 'DataCradPrepaid1',
        'drop': 0
      },
      {
        'node': 16,
        'name': 'HomeActivity',
        'drop': 2
      },
      {
        'node': 17,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 18,
        'name': 'DataCradPrepaid2',
        'drop': 0
      },
      {
        'node': 19,
        'name': 'HomeActivity',
        'drop': 0
      },
      {
        'node': 20,
        'name': 'BillPayEle',
        'drop': 0
      },
      {
        'node': 21,
        'name': 'DataCradPrepaid3',
        'drop': 0
      },
      {
        'node': 22,
        'name': 'BillPayEle1',
        'drop': 0
      },
      {
        'node': 23,
        'name': 'DataCradPrepaid4',
        'drop': 0
      },
      {
        'node': 24,
        'name': 'BillPayEle2',
        'drop': 1
      },
      {
        'node': 25,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 26,
        'name': 'PayToMerchant',
        'drop': 1
      },
      {
        'node': 27,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 28,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 29,
        'name': 'HomeActivity',
        'drop': 11
      },
      {
        'node': 30,
        'name': 'Bus',
        'drop': 0
      },
      {
        'node': 31,
        'name': 'Flight',
        'drop': 0
      },
      {
        'node': 32,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 33,
        'name': 'MainActivity',
        'drop': 0
      },
      {
        'node': 34,
        'name': 'Dashboard',
        'drop': 0
      },
      {
        'node': 35,
        'name': 'Notifaction',
        'drop': 0
      },
      {
        'node': 36,
        'name': 'HomeTab',
        'drop': 50
      },
      {
        'node': 37,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 38,
        'name': 'Main21',
        'drop': 0
      },
      {
        'node': 39,
        'name': 'ProfileSetting',
        'drop': 0
      },
      {
        'node': 40,
        'name': 'NoHome',
        'drop': 0
      },
      {
        'node': 41,
        'name': 'BillElec',
        'drop': 0
      },
      {
        'node': 42,
        'name': 'BillElec1',
        'drop': 0
      },
      {
        'node': 43,
        'name': 'BillElec2',
        'drop': 0
      },
      {
        'node': 44,
        'name': 'BillElec3',
        'drop': 0
      },
      {
        'node': 45,
        'name': 'Money',
        'drop': 0
      },
      {
        'node': 46,
        'name': 'CardPay',
        'drop': 20
      },
      {
        'node': 47,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 48,
        'name': 'MainActivity',
        'drop': 0
      },
      {
        'node': 49,
        'name': 'Main21',
        'drop': 0
      },
      {
        'node': 50,
        'name': 'Payment',
        'drop': 0
      },
      {
        'node': 51,
        'name': 'GoHome',
        'drop': 0
      },
      {
        'node': 52,
        'name': 'Newpayment',
        'drop': 0
      },
      {
        'node': 53,
        'name': 'Main21',
        'drop': 0
      },
      {
        'node': 54,
        'name': 'cab',
        'drop': 0
      },
      {
        'node': 55,
        'name': 'fight',
        'drop': 0
      },
      {
        'node': 56,
        'name': 'Bus',
        'drop': 0
      },
      {
        'node': 57,
        'name': 'Home123',
        'drop': 20
      },
      {
        'node': 58,
        'name': 'Send Money',
        'drop': 0
      },
      {
        'node': 59,
        'name': 'TabAct',
        'drop': 0
      },
      {
        'node': 60,
        'name': 'Tab1',
        'drop': 0
      },
      {
        'node': 61,
        'name': 'Tab2',
        'drop': 0
      },
      {
        'node': 62,
        'name': 'Tab3',
        'drop': 0
      },
      {
        'node': 63,
        'name': 'Dropout',
        'drop': 0
      },
      {
        'node': 64,
        'name': 'PageANR',
        'drop': 0
      },
      {
        'node': 65,
        'name': 'HomeTab',
        'drop': 0
      },
      {
        'node': 66,
        'name': 'Car',
        'drop': 0
      },
      {
        'node': 67,
        'name': 'Bus',
        'drop': 0
      },
      {
        'node': 68,
        'name': 'Train',
        'drop': 0
      },
      {
        'node': 69,
        'name': 'Home',
        'drop': 0
      },
      {
        'node': 70,
        'name': 'Main21',
        'drop': 0
      },
      {
        'node': 71,
        'name': 'NoDrop',
        'drop': 0
      },
      {
        'node': 72,
        'name': 'MainActivity',
        'drop': 0
      },
      {
        'node': 73,
        'name': 'NextActivity',
        'drop': 0
      },
      {
        'node': 74,
        'name': 'NoPayment',
        'drop': 20
      },
      {
        'node': 75,
        'name': 'Dropout',
        'drop': 0
      }
    ],
    'links': [
      {
        'source': 0,
        'target': 1,
        'value': 2
      },
      {
        'source': 0,
        'target': 2,
        'value': 2
      },
      {
        'source': 2,
        'target': 28,
        'value': 2
      },
      {
        'source': 0,
        'target': 3,
        'value': 3
      },
      {
        'source': 0,
        'target': 4,
        'value': 1
      },
      {
        'source': 0,
        'target': 5,
        'value': 1
      },
      {
        'source': 3,
        'target': 6,
        'value': 3
      },
      {
        'source': 4,
        'target': 6,
        'value': 1
      },
      {
        'source': 5,
        'target': 6,
        'value': 1
      },
      {
        'source': 6,
        'target': 7,
        'value': 3
      },
      {
        'source': 6,
        'target': 8,
        'value': 1
      },
      {
        'source': 6,
        'target': 9,
        'value': 1
      },
      {
        'source': 7,
        'target': 10,
        'value': 3
      },
      {
        'source': 8,
        'target': 10,
        'value': 1
      },
      {
        'source': 9,
        'target': 10,
        'value': 1
      },
      {
        'source': 10,
        'target': 11,
        'value': 2
      },
      {
        'source': 10,
        'target': 12,
        'value': 1
      },
      {
        'source': 10,
        'target': 13,
        'value': 1
      },
      {
        'source': 10,
        'target': 14,
        'value': 1
      },
      {
        'source': 11,
        'target': 15,
        'value': 2
      },
      {
        'source': 13,
        'target': 16,
        'value': 1
      },
      {
        'source': 14,
        'target': 16,
        'value': 1
      },
      {
        'source': 16,
        'target': 17,
        'value': 2
      },
      {
        'source': 15,
        'target': 18,
        'value': 2
      },
      {
        'source': 18,
        'target': 19,
        'value': 2
      },
      {
        'source': 19,
        'target': 20,
        'value': 1
      },
      {
        'source': 19,
        'target': 21,
        'value': 1
      },
      {
        'source': 20,
        'target': 22,
        'value': 1
      },
      {
        'source': 21,
        'target': 23,
        'value': 1
      },
      {
        'source': 22,
        'target': 24,
        'value': 1
      },
      {
        'source': 24,
        'target': 25,
        'value': 1
      },
      {
        'source': 23,
        'target': 26,
        'value': 1
      },
      {
        'source': 26,
        'target': 27,
        'value': 1
      },
      {
        'source': 29,
        'target': 30,
        'value': 101
      },
      {
        'source': 29,
        'target': 31,
        'value': 50
      },
      {
        'source': 29,
        'target': 32,
        'value': 11
      },
      {
        'source': 30,
        'target': 33,
        'value': 101
      },
      {
        'source': 31,
        'target': 33,
        'value': 51
      },
      {
        'source': 33,
        'target': 34,
        'value': 50
      },
      {
        'source': 33,
        'target': 35,
        'value': 50
      },
      {
        'source': 33,
        'target': 36,
        'value': 51
      },
      {
        'source': 36,
        'target': 37,
        'value': 51
      },
      {
        'source': 34,
        'target': 38,
        'value': 50
      },
      {
        'source': 35,
        'target': 38,
        'value': 50
      },
      {
        'source': 38,
        'target': 39,
        'value': 10
      },
      {
        'source': 38,
        'target': 40,
        'value': 90
      },
      {
        'source': 41,
        'target': 42,
        'value': 20
      },
      {
        'source': 41,
        'target': 43,
        'value': 20
      },
      {
        'source': 41,
        'target': 44,
        'value': 20
      },
      {
        'source': 42,
        'target': 45,
        'value': 20
      },
      {
        'source': 43,
        'target': 45,
        'value': 20
      },
      {
        'source': 44,
        'target': 46,
        'value': 20
      },
      {
        'source': 46,
        'target': 47,
        'value': 20
      },
      {
        'source': 45,
        'target': 48,
        'value': 40
      },
      {
        'source': 48,
        'target': 49,
        'value': 40
      },
      {
        'source': 50,
        'target': 51,
        'value': 20
      },
      {
        'source': 50,
        'target': 52,
        'value': 10
      },
      {
        'source': 51,
        'target': 53,
        'value': 20
      },
      {
        'source': 52,
        'target': 53,
        'value': 10
      },
      {
        'source': 53,
        'target': 54,
        'value': 15
      },
      {
        'source': 53,
        'target': 55,
        'value': 9
      },
      {
        'source': 53,
        'target': 56,
        'value': 6
      },
      {
        'source': 57,
        'target': 58,
        'value': 20
      },
      {
        'source': 57,
        'target': 59,
        'value': 20
      },
      {
        'source': 57,
        'target': 60,
        'value': 20
      },
      {
        'source': 57,
        'target': 61,
        'value': 20
      },
      {
        'source': 57,
        'target': 63,
        'value': 20
      },
      {
        'source': 57,
        'target': 62,
        'value': 20
      },
      {
        'source': 58,
        'target': 64,
        'value': 20
      },
      {
        'source': 59,
        'target': 65,
        'value': 20
      },
      {
        'source': 60,
        'target': 66,
        'value': 20
      },
      {
        'source': 61,
        'target': 67,
        'value': 20
      },
      {
        'source': 62,
        'target': 68,
        'value': 20
      },
      {
        'source': 66,
        'target': 69,
        'value': 20
      },
      {
        'source': 67,
        'target': 70,
        'value': 20
      },
      {
        'source': 68,
        'target': 71,
        'value': 20
      },
      {
        'source': 70,
        'target': 72,
        'value': 20
      },
      {
        'source': 71,
        'target': 73,
        'value': 20
      },
      {
        'source': 73,
        'target': 74,
        'value': 20
      },
      {
        'source': 74,
        'target': 75,
        'value': 20
      }
    ]
  };

  eventlist = [
    {
      name: 'Event1',
      value: 100
    },
    {
      name: 'Event2',
      value: 100
    },
    {
      name: 'Event3',
      value: 100
    },
    {
      name: 'Event4',
      value: 100
    },
    {
      name: 'Event5',
      value: 100
    },
    {
      name: 'Event6',
      value: 100
    },
    {
      name: 'Event7',
      value: 100
    },
    {
      name: 'Event8',
      value: 100
    },
    {
      name: 'Event9',
      value: 100
    },
    {
      name: 'Event10',
      value: 100
    },
    {
      name: 'Event11',
      value: 100
    },
    {
      name: 'Event12',
      value: 100
    },
    {
      name: 'Event13',
      value: 100
    },
    {
      name: 'Event14',
      value: 100
    },
    {
      name: 'Event15',
      value: 100
    },
  ];
  // end of test data

  fetchUserFlowData(): Observable<any> {
    return new Observable(observer => {
      const reqData = {
        resource: [],
      };
      reqData.resource.push({
        userFlowData: this.data
      });

      observer.next(reqData);
      observer.complete();
    });
  }

}
