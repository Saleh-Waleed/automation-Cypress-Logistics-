// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add('visitInsecure', (url) => {
//     cy.request({
//       url,
//       failOnStatusCode: false,
//     });      
//   });
/// <reference types="cypress" />
import { loginPage } from "../Pages/loginPage"
import loginData from '../fixtures/loginData.json'

Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://3.216.228.177/login')
    cy.get(':nth-child(2) > .bg-white').type(email)
    cy.get(':nth-child(3) > .bg-white').type(password)
    cy.get('.bg-primary').click()
})
            