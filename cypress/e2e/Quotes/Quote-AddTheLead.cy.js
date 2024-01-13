// {/* <reference types="Cypress" /> */}
//import AddLead from './AddLead'

                                     
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
                                                                                                                      
    Cypress.config('defaultCommandTimeout', 100000); // Set the timeout to 10 seconds
    cy.log()     
    cy.visit('http://3.216.228.177/login')
    cy.wait(10000)
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
//ADD Quote       
cy.get('.gap-3 > .bg-primary').click()

// //Verify if we landed on on the 'add quote' page
cy.get(':nth-child(1) > .card-header > .flex > .ml-3').should('have.text', 'Quotes')


//Customer lockup - add lead
cy.get('.flex > .multiselect > .multiselect__tags').click()
                                                                         
// //Quotes - lead 
cy.get('.py-1').click();          
                                                                
// //Add lead Details_----------------
// //company name
let QuoteLeadName= 'companyTest';
cy.get(':nth-child(1) > :nth-child(2) > .h-10').type(QuoteLeadName)
// //First name
cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > .h-10').type('Saleh')
// //Last Name
cy.get(':nth-child(3) > :nth-child(2) > .h-10').type('Waleed')
// //contact number
cy.get(':nth-child(3) > .h-10').type('123456')
// //email
cy.get(':nth-child(3) > :nth-child(4) > .h-10').type('abcd@gmail.com')
// //Address
cy.get(':nth-child(4) > .px-3 > .h-10').type('Newyork, America')
// //City
cy.get(':nth-child(5) > :nth-child(1) > .p-autocomplete > .p-autocomplete-input').type('Newyork')
// //State
cy.get(':nth-child(2) > .p-autocomplete > .p-autocomplete-input').type('New york')
cy.get('#pv_id_4_0').click()
// //country
cy.get(':nth-child(3) > .p-autocomplete > .p-autocomplete-input').type('US')
cy.contains('United States').click() 
// //zip code
cy.get(':nth-child(5) > :nth-child(4) > .h-10').type('024')
// //save lead
cy.get('.pb-2 > .bg-primary').click()

// //////////////////////////////////////////////////////////////////////
// //////////////      Verify the Quootes in Customer Section ///////////
cy.get('.flex > :nth-child(4) > a').click()                 

// ///verify that we have landed on the customer section
cy.get('.pl-2').should('have.text', 'Customers')
// ///// verify if the LEAD IS ADDED in the CUSTOMER SECTION
cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', QuoteLeadName)

    })
  })