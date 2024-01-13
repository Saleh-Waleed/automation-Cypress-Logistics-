
      
describe('template spec', () => {
    before(() => {
      cy.viewport(1446, 750);      
    });      
      
    it('Login', () => {    
      cy.on('uncaught:exception', (err, runnable) => {                                                                                                
         return false
         })          
  
      Cypress.config('defaultCommandTimeout', 10000); // Set the timeout to 10 seconds

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
  cy.get('.card-body > :nth-child(2) > .bg-primary').click()
  
  // //SELCT THE LOCATION
  cy.get(':nth-child(1) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input').type('Rawalpindi')
  cy.contains('Rawalpindi').click()
  
  // //2nd Location
  cy.get(':nth-child(2) > .mb-2 > .relative > .p-autocomplete > .p-autocomplete-input').type('Islamabad')
  cy.contains('Islamabad').click()
   
  // //Load Details
  cy.get('#commodities').type('Test')
  
  // //TRUCKING SERVICE ---- FTL
  cy.get('#truckingServiceftl').click()
    
  cy.get('input[type=number]').type(100)
  // cy.get('#\'trucking-trailerClass-').click()
  // cy.contains('50').click()
  
  // //PALET DEMINSION
  let pallets=10;
  let weight=100;
  
  cy.get('#quantity').type(pallets)
  cy.get('#length').type('40')
  cy.get('#width').type('50')
  cy.get('#height').type('25')
  cy.get('#weight').type(weight)
   
  // //Verify if PALLETS AND WEIGHT IS CORRECTLY REFLECTED
  cy.get('.font-md > .font-bold').should('have.text', '10 Pallets @ 100 KG')
  // cy.get('.font-md > .font-bold').should('have.text', weight)
  
  // //Service-Adds On
  cy.get('#tailgate').click()
  
  // //Date Picker
  cy.get('#appointment').click()
  
  // //Internal Notes
  cy.get('.ProseMirror').type('Internal notes')
  
//// UPLOADING THE FILE /////
cy.get('input[type=file]')
  .selectFile('cypress/fixtures/Manifest.pdf', { force: true })

  // //Creating the QUOTE - SAVE
  cy.get('.actions > .bg-primary').click()
  
  cy.wait(14000)

  let originalText;
      
  cy.get('.gap-20 > :nth-child(1) > .font-bold').invoke('text').then((text) => {
    // Save the text for later comparison
    originalText = text;
  
    // Log the original text to the Cypress console
    cy.log('Original Text:', originalText);
    
    // Perform other actions or assertions
    cy.get('.flex > :nth-child(2) > .router-link-active').click() 
        cy.wait(5000)
                                                    
                 
    // Later in your test, you can use the saved text for comparison
    cy.get('.text-xs.border > :nth-child(1) > .text-sm').invoke('text').then((newText) => {
    //   // Compare the new text with the saved original text
      expect(newText).to.equal(originalText);
      cy.log('Texts Match!');
    });
  });
    })                      
                                       
  })
     