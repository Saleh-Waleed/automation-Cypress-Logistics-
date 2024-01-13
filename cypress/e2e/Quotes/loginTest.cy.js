import commannd from '../../support/commands.js' 
import { loginPage } from "../../Pages/loginPage"; // importing login page class
import QuotesData from '../../fixtures/QuotesData.json'; // importing fixture data
import { QuotesPage } from '../../Pages/QuotesPage.js';
import loginData from '../../fixtures/loginData.json'
                                                 
 const QuotesForm = new QuotesPage()

describe('Login Test using valid credentials', () => {
    before(() => {
     cy.login(loginData.loginDetails.loginEmail, loginData.loginDetails.longinPassword);
    // cy.logUnexpectedError();
});     
  
                           
    it('Creating & Editing & Verifying the Trucking Quote', () => { 
        // Your test logic here
    QuotesForm.addQuote()
    QuotesForm.customersLookup(QuotesData.Trucking.customersLookup)
    QuotesForm.opsRep(QuotesData.Trucking.opsRep)
    QuotesForm.saleRep(QuotesData.Trucking.SalesRep)
    QuotesForm.quotesType()                                               
    QuotesForm.selectOrigin(QuotesData.Trucking.origin)
    QuotesForm.selectDestination(QuotesData.Trucking.destination)
    QuotesForm.enterComodity(QuotesData.Trucking.commodity)    
    QuotesForm.selectTruckingServiceFTL() 
    // QuotesForm.selectClass()
    // cy.get('label[for="Trucking Service"]').select('100{force:true}')
    QuotesForm.enterQuantity(QuotesData.Trucking.quantity)
    QuotesForm.enterLengths(QuotesData.Trucking.length)
    QuotesForm.enterWidth(QuotesData.Trucking.width)
    QuotesForm.enterHeight(QuotesData.Trucking.height)
    QuotesForm.enterWeight(QuotesData.Trucking.weight)
    QuotesForm.checkAppointment()
    QuotesForm.checkResidential()
    QuotesForm.datePicker(QuotesData.Trucking.pickDate)
    QuotesForm.enterNotes(QuotesData.Trucking.internalNotes)
    QuotesForm.fileAttach()
    QuotesForm.saveQuotes()
});
});
