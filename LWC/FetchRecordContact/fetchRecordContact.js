import { LightningElement,track,api,wire } from 'lwc';
import getContactRecords from '@salesforce/apex/ContactController.getContactRecords'
const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
     { label: 'Last Name', fieldName: 'LastName' },
      { label: 'Email', fieldName: 'Email' },
      { label: 'Address Matched Status', fieldName: 'AddressCompare__c' },
];
export default class FetchRecordContact extends LightningElement {
@track columns = columns;
@track contactRecords;

@wire(getContactRecords)
    wiredContacts({ error, data }) {
        if (data) {
            this.contactRecords = data;
          // console.log(JSON.stringify(data));
        } else if (error) {
           console.log(JSON.stringify(error));
        }
    }
}