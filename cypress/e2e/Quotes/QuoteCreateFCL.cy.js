
         
describe('template spec', () => {
    before(() => {
      cy.viewport(1446, 750);      
    });      
        
    it('Login', () => {        
      cy.on('uncaught:ex   ception', (err, runnable) => {                                                                                                
         return false 
         })   
                    
      Cypress.config('defaultCommandTimeout', 10000); // Set the timeout tklo 10 seconds                                                                                                          
      cy.visit('http://3.216.228.177/login')   
      cy.wait(10000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      cy.get(':nth-child(2) > .bg-white').type('Saleh.Waleed@newl.ca')
      cy.get(':nth-child(3) > .bg-white').type('123456')
       cy.get('.bg-primary').click()               
       cy.contains('Quotes Directory').should('have.text', 'Quotes Directory');
           
                      
  //ADD Quote
  cy.get('.gap-3 > .bg-primary').click()
      
  // //Verify if we landed on on the 'add quote' page
  cy.get(':nth-child(1) > .card-header > .flex > .ml-3').should('have.text', 'Quotes')
  
  cy.wait(2000)
  //ADD the Lead - Customer LOCKUP
  cy.get('.flex > .multiselect > .multiselect__tags').type('Adam{Enter}')
   cy.wait(2000)
      
  // //Assignment - OPS || SALES
  cy.get(':nth-child(2) > .mb-6 > .multiselect > .multiselect__tags').type('Alee{Enter}')
                           
    // //Selct QUOTES TYPE
    //////// OCEAN TYPE /////
    cy.get('.card-body > :nth-child(2) > :nth-child(2)').click()
  
  // //SELCT THE LOCATION
  cy.get(':nth-child(1) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input').type('toronto')

   /////////////ORIGIN //////////
   cy.get('#pv_id_3_0').contains('Canada').click();   
   
  //  ///////////// Destination /////////
   cy.get('.\!shadow-none').type('Quebec')
   cy.get('#pv_id_4_0').contains('Canada').click()

   ///////////  LCL TYPE SELECTION /////////
   cy.get('label[for="oceanServiceFCL"]').click()

  //  /////// COMMODITIES ///////
   cy.get('#commodities').type('Test Commodities')

   ///// INCOTEMRS //////
   cy.get(':nth-child(1) > .mt-3 > #truckType').select('EXW')


  ////////  SERVICES DROPDOWN ////////////
  cy.get(':nth-child(2) > .mt-3 > #truckType').select('Port to Port').should('have.value','port_to_port')

  //// PALLETS DEMINSIONS ///////

let Weight =100;

  cy.get('#quantity').type('20')
  cy.get('#length').type('50')
  cy.get('#width').type('30')
  cy.get('#height').type('40')
  cy.get('#weight').type(Weight)
          
let TotalWeight
                   
  ///  VERIFYING TOTAL WEIGHT /////
  cy.get(':nth-child(9) > .gap-4 > :nth-child(2)').invoke('text').then((text) =>{
TotalWeight = text
expect(TotalWeight).to.equal(' Total weight : ' + Weight + ' KG')
})
////// ADDING THE INTERNAL NOTES  //////
cy.get('.ProseMirror').type('Internal Notes ')

///// UPLOADING THE FILE
cy.get('input[type=file]')
  .selectFile('cypress/fixtures/Manifest.pdf', { force: true })

  //////////////////// SAVING THE QUOTE ///////////
  cy.get('.actions > .bg-primary').click()

  cy.wait(12000)

///// FETCHING THE QUOTE NUMBER AND VERIFYING INTO THE QUOTE DIRECTORY ///////////
  let QuoteNumber
  cy.get('.gap-20 > :nth-child(1) > .font-bold').invoke('text').then((newtext) =>{
  QuoteNumber = newtext
  })     

  cy.wait(2000)
       
////////// GOING TO THE QUOTE DIRECTORY ////////
cy.get('.router-link-active > .ml-2').click()

//////// VERIFYING INTO THE QUOTE DIRECTORY ///////////
let QuotesNumber
  cy.get(':nth-child(1) > .text-sm > a').invoke('text').then((NewText) =>{
QuotesNumber = NewText
expect(QuotesNumber).to.equal(QuoteNumber)
  })
  })
   })
