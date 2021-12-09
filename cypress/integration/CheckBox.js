describe('Validating Checkbox Functionality',function(){
    
	it('Visits the Website and then checks the checkboxes',function(){
		
		//Visiting the Webpage
        cy.visit('http://the-internet.herokuapp.com/')
		
		//Clicking the link provided on the Webpage for Checkboxes
        cy.contains('Checkboxes').click()
		
		//Checking all the checkbox from Checkbox list and applying assert to check if all are checked
        cy.get('[type="checkbox"]').check()
        .should('be.checked')		
    })
})