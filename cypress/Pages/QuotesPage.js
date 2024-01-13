export class QuotesPage{
    
    webLocators =
    { 
      createQuote: ".gap-3 > .bg-primary",
      customerLookup: ".flex > .multiselect > .multiselect__tags",
      opsReps: ":nth-child(2) > .mb-6 > .multiselect > .multiselect__tags",
      saleReps: ":nth-child(3) > .mb-6 > .multiselect > .multiselect__tags",
      quoteType: ".card-body > :nth-child(2) > .bg-primary",
      locationOrigin: ":nth-child(1) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input",
      firstOriginLocation: "#pv_id_1_0",
      locationDestination: ":nth-child(2) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input",
      firstDestinationLocation: "#pv_id_2_0",
      commodity: "#commodities",
      truckingServicesFTL: ".gap-3 > :nth-child(2) > .flex",
      class: "#\'trucking-trailerClass-",
      quantity: "#quantity",
      totalLength: "#length",
      width: "#width",
      height: "#height",
      weight: "#weight",
      appointmentCheckbox: "#appointment",
      residentialCheckbox: "#residential",
      ReadyDate: "#expirationDate",
      internalNote: ".ProseMirror",
      attachFile: ".fs-droppable",
      quoteSaveContain: "Save"
    }

     addQuote(){
        cy.get(this.webLocators.createQuote).click()
     }

    customersLookup(customerLookup){
        cy.get(this.webLocators.customerLookup).type(customerLookup)
    }

    opsRep(opsRep){
        cy.get(this.webLocators.opsReps).type(opsRep)
    }

    saleRep(SalesRep){
        cy.get(this.webLocators.saleReps).type(SalesRep)
    }

    quotesType(){
        cy.get(this.webLocators.quoteType).click()
    }       

    selectOrigin(origin){
        cy.get(this.webLocators.locationOrigin).type(origin)
        cy.get(this.webLocators.firstOriginLocation).click()
        cy.wait(1000)
    }

    selectDestination(destination){   
        cy.get(this.webLocators.locationDestination).type(destination)
         cy.get(this.webLocators.firstDestinationLocation).click()
        
    }

    enterComodity(commodity){
        cy.get(this.webLocators.commodity).type(commodity)        
    }                                     
    
    selectTruckingServiceFTL(){
    cy.get(this.webLocators.truckingServicesFTL).click()
    }
                
    selectClass(){
   // cy.get(this.webLocators.class).select('100')
   cy.get('select[name="trucking-trailerClass-"]').select('100')
    }

   enterQuantity(quantity){
    cy.get(this.webLocators.quantity).type(quantity)
   }

   enterLengths(length){
    cy.get(this.webLocators.totalLength).type(length)
   // cy.get('#length').type(length)
   }

   enterWidth(width){
    cy.get(this.webLocators.width).type(width)
   } 
     
   enterHeight(height){  
    cy.get(this.webLocators.height).type(height)
   }

   enterWeight(weight){
    cy.get(this.webLocators.weight).type(weight)
   }

   checkAppointment(){
    cy.get(this.webLocators.appointmentCheckbox).click()
   }

   checkResidential(){
   cy.get(this.webLocators.residentialCheckbox).click()
   }
   
   datePicker(pickDate){
    cy.get(this.webLocators.ReadyDate).clear().type(pickDate);
   }

   enterNotes(internalNotes){
    cy.get(this.webLocators.internalNote).type(internalNotes)
   }

   fileAttach(){
    cy.get('input[type=file]').selectFile('cypress/fixtures/Bill_of_Lading.pdf', { force: true })
   }
      
   saveQuotes(){
    cy.contains(this.webLocators.quoteSaveContain).click()
   }
}
                                                                    