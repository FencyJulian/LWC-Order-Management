import { LightningElement, wire } from 'lwc';

import getProducts from '@salesforce/apex/productService.getRecords';

export default class ProductsCard extends LightningElement {

    mapMarkers;
    error;
    @wire(getProducts)
    wiredHouses({ error,data }){
        if(data){
            this.mapMarkers = data.map((element)=>{
                return {
                    Name : element.Name,
                    Number : element.AccountNumber
                }
            })
            this.error = undefined;
        }
        else{
            this.error = error;
            this.mapMarkers = undefined
        }
            
    }

    handleSubmit(){
        alert("Add to cart button pressed")
    }
}