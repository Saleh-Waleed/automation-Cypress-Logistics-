
      
describe('template spec', () => {
  before(() => {
    cy.viewport(1446, 750);      
  });      
      
  it('Login', () => { 
       
    cy.on('uncaught:exception', (err, runnable) => {
       return false
       })          
 
    Cypress.config('defaultCommandTimeout', 10000); // Set the timeout to 10 seconds
    cy.log()  
    cy.visit('http://3.216.228.177/login')
    cy.wait(10000)
    cy.get(':nth-child(2) > .bg-white').type('Saleh.Waleed@newl.ca')
   
    cy.get(':nth-child(3) > .bg-white').type('123456')
     cy.get('.bg-primary').click()
    //  cy.get('[data-id="3"] > .vue-notification-template > .notification-title').should('have.text', 'Autentication Error');
//  verify if we landed on the QUOTE page
     cy.contains('Quotes Directory').should('have.text', 'Quotes Directory');
//ADD Quote n    
cy.get('.gap-3 > .bg-primary').click() 
 
// //Verify if we landed on on the 'add quote' page
cy.get(':nth-child(1) > .card-header > .flex > .ml-3').should('have.text', 'Quotes')

//ADD the Lead - Customer LOCKUP
cy.get('.flex > .multiselect > .multiselect__tags').click()  

cy.contains('Adam').click()
 
//Assignment - OPS || SALES
cy.get(':nth-child(2) > .mb-6 > .multiselect > .multiselect__tags').click()
cy.contains('companyTest').click({force: true})
cy.get(':nth-child(3) > .mb-6 > .multiselect > .multiselect__tags').click()
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
 
//Load Details
cy.get('#commodities').type('Test', { force: true });

//TRUCKING SERVICE
cy.get('#truckingServiceltl').click({force:true})


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

//Verify if PALLETS AND WEIGHT IS CORRECTLY REFLECTED
cy.get('.font-md > .font-bold').should('have.text', '10 Pallets @ 100 KG')
// cy.get('.font-md > .font-bold').should('have.text', weight)

//Service-Adds On
cy.get('#appointment').click()

//Date Picker
// cy.get('#appointment').click()

//Internal Notes
cy.get('.ProseMirror').type('Internal notes')

//////// UPLOADING THE FILE //////
cy.get('input[type=file]')
  .selectFile('cypress/fixtures/Manifest.pdf', { force: true })

//Creating the QUOTE - SAVE
cy.get('.actions > .bg-primary').click()

cy.wait(12000)
//******************** Verify if the QUote is created********//

//Go to the Quotes
cy.get('.router-link-active > .ml-2').click()

cy.wait(5000)
// Verify if the correct Quote is created
cy.get('table tbody  tr:nth-child(1) td:nth-child(3)').should('have.text','companyTest')
})
})