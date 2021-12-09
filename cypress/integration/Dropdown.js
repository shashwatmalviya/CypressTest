describe('Validating Dropown Functionality',function(){
    
	it('Visits the Website and then select option 2 from Dropdown',function(){
		
		//Visiting the Webpage
        cy.visit('http://the-internet.herokuapp.com/')
		
		//Clicking the link provided on the Webpage for Dropdown
        cy.contains('Dropdown').click()
		
		//Seleting option 2 from Dropdown and applying assert to check if Option 2 is selected or not
        cy.get('select').select('Option 2')
		.should('have.value','2')
		 
    })
})