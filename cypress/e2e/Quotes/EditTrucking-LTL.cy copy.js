
      
describe('template spec', () => {
    before(() => {
      cy.viewport(1446, 750);      
    });      
      // beforeEach(() => {
      //   cy.fixture("TestData-Quotes/AddLead").as("data")    // Load the data from the fixture file
      //   })                                                                                                                            
    // const { loginEmail } = this.data;
    it('Login', () => { 
      // const { loginEmail } = this.data; 
         
      // const quotes = new AddLead
      cy.on('uncaught:exception', (err, runnable) => {
  
         return false
        
         })                                                      
    //   Cypress.config('defaultCommandTimeout', 30000); // Set the timeout to 10 seconds
      cy.log()
      // cy.visit(Cypress.env('url'), { pageLoadTimeout: 80000})
 cy.visit('http://3.216.228.177/login')
       cy.wait(30000)
      // , headers: {"Accept-Encoding":"gzip, deflate"}));
    //   cy.wait(50000)
      cy.get(':nth-child(2) > .bg-white').type('Saleh.Waleed@newl.ca')
      //cy.get(':nth-child(2) > .bg-white').type(data.loginEmail)
      
      // cy.fixture('AddLead').then((data) => {
      //   return cy.get(':nth-child(2) > .bg-white').type(data.loginEmail);
      //   }) 
      
      cy.get(':nth-child(3) > .bg-white').type('123456')
       cy.get('.bg-primary').click()
      //  cy.get('[data-id="3"] > .vue-notification-template > .notification-title').should('have.text', 'Autentication Error');
  //  verify if we landed on the QUOTE page
       cy.contains('Quotes Directory').should('have.text', 'Quotes Directory');
       cy.wait(30000)

  //ADD Quote
  cy.get('.gap-3 > .bg-primary').click()
  
  cy.wait(30000)


  // //Verify if we landed on on the 'add quote' page
  cy.get(':nth-child(1) > .card-header > .flex > .ml-3').should('have.text', 'Quotes')
  
  //ADD the Lead - Customer LOCKUP
  cy.get('.flex > .multiselect > .multiselect__tags').click()  
  cy.wait(2000)
  cy.contains('Adam').click()
  
  //Assignment - OPS || SALES
  cy.get(':nth-child(2) > .mb-6 > .multiselect > .multiselect__tags').click()
  cy.contains('ammar').click({force: true})
  cy.get(':nth-child(3) > .mb-6 > .multiselect > .multiselect__tags').click()

  cy.wait(30000)


  //cy.contains('Demo1').click({force: true})
  // cy.get('.multiselect--active > .multiselect__content-wrapper > #listbox-null > #null-0 > .multiselect__option--highlight > span').click()
  //Selct QUOTES TYPE
  cy.get('.card-body > :nth-child(2) > .bg-primary').click()
  
  //SELCT THE LOCATION
  cy.get(':nth-child(1) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input').type('Rawalpindi')
  cy.contains('Rawalpindi').click()
  
  //2nd Location
  cy.get(':nth-child(2) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input').type('Islamabad')
  cy.contains('Islamabad').click()

  cy.wait(30000)

   
  //Load Details
  cy.get('#commodities').type('Test')
  
  //TRUCKING SERVICE
  cy.get('#truckingServiceltl').click()
  
  cy.wait(30000)

  // cy.get('#\'trucking-trailerClass-').click()
  // cy.contains('50').click()
  
  //PALET DEMINSION
  let pallets=10;
  let weight=100;
  
  cy.get('#quantity').type(pallets)
  cy.get('#length').type('40')
  cy.get('#width').type('50')
  cy.get('#height').type('25')
  cy.get('#weight').type(weight)

  cy.wait(30000)

  
  //Verify if PALLETS AND WEIGHT IS CORRECTLY REFLECTED
  cy.get('.font-md > .font-bold').should('have.text', '10 Pallets @ 100 KG')


  cy.wait(30000)

  // cy.get('.font-md > .font-bold').should('have.text', weight)
  
  //Service-Adds On
  cy.get('#appointment').click()
  
  //Date Picker
  // cy.get('#appointment').click()
  
  //Internal Notes
  cy.get('.ProseMirror').type('Internal notes')

  ////// UPLOADING THE FILES /////////////
  cy.get('input[type=file]')
  .selectFile('cypress/fixtures/Manifest.pdf', { force: true })
  
  cy.wait(30000)


  //Creating the QUOTE - SAVE
  cy.get('.actions > .bg-primary').click()
  
  cy.wait(12000)
  cy.wait(30000)

  //******************** Verify if the QUote is created********//
  
  //Go to the Quotes
  cy.get('.router-link-active > .ml-2').click()
  
  cy.wait(5000)
  cy.wait(30000)

  // Verify if the correct Quote is created
  cy.get('table tbody  tr:nth-child(1) td:nth-child(3)').should('have.text','ammar')


  /////////////////EDITING THE LTL QUOTES/////////////////////
  cy.get(':nth-child(1) > .text-sm > a').click()

  //EDIT BUTTON
  cy.get('.text-left > .gap-2 > .text-xs').click()

  cy.wait(30000)


//////////     ORIGIN   /////////////////////
// cy.get(':nth-child(1) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input').type('Lahore').clear()

/////////////   ENTERING THE NEW LOACTION DESTINATION   //////////////
cy.get(':nth-child(2) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input').clear()          
cy.get(':nth-child(2) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input').type('lahore')


  //service ADDS-ON
  cy.get('#trucking-tailgate-0').click()

  cy.wait(30000)


  cy.get('#trucking-commodities-0').type('Commodity').clear()

  ////////////////TRUCKING SERVICE///////////////
  cy.get('#trucking-truckingServiceftl-0').click()

  /////////////////INTERNAL NOTES///////////////
  cy.get('.ProseMirror > p').clear()
  cy.get('.ProseMirror > p').type('These internal notes are eidted one')

  cy.wait(30000)


////////////////// SAVING THE EDIT FTL TRUCKING  ////////////////////
cy.get('.gap-8 > .flex').click()


  /////////////////// VERIFY THE ORIGIN THAT SHOWS THAT EDIT FTL IS SUCCESSFUL  ////////////
  //// OPENNG THE QUOTES SECTION FROM THE TOP BAR ////////
  cy.get('.router-link-active > .ml-2').click()

  cy.wait(30000)


  ////// VERIFYING THAT EDIT QUOTE IS RIGHTLY SAVED OR NOT//////////
  cy.get('.text-xs.border > :nth-child(1) > :nth-child(6)').should('have.text', 'lahore')

  cy.wait(30000)

})
  })
