export class loginPage{

weblocators = 
{
email: ':nth-child(2) > .bg-white',
password: ':nth-child(3) > .bg-white',
submitButton: '.bg-primary',
URL:  'http://3.216.228.177/login'
}
 
openURL(){
cy.visit(Cypress.env('URL'))
}

enterEmail(loginEmail){
cy.get(this.weblocators.email).type(loginEmail)
    }

enterPassword(loginPassword){
    cy.get(this.weblocators.password).type(loginPassword)
}

enterSubmit(){
    cy.get(this.weblocators.submitButton).click()
}

}