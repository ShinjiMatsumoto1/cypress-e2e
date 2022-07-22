describe('Check the display of the first page', () => {

    beforeEach(() => {
      cy.visit("https://aig-pre-sqa-web.sssiotpfs.com/");
    })
  
    it('Being able to transition to the sign-in page', () => {

        // class header__lower class search 'Sign in'
        // cy.get('.header__lower').contains('Sign In').click()
        // id="signIn"
        cy.get('[id="signIn"]').click()

        cy.location().should((loc) => {
            expect(loc.origin).to.eq('https://auth-sqa.sssiotpfs.com')
            expect(loc.pathname).to.eq('/oauth2/default/v1/authorize')
            })

        // cy.get('[id="input27"]').type('glossary1823@example.com');
        // cy.get('[id="input27"]').should('have.value', 'glossary1823@example.com')
        cy.get('[id="input27"]').type('Shinji.Matsumoto@sony.com');
        cy.get('[id="input27"]').should('have.value', 'Shinji.Matsumoto@sony.com')
    
        // cy.get('[id="input35"]').type('rnw-s3#rL?9t77uX');
        // cy.get('[id="input35"]').should('have.value', 'rnw-s3#rL?9t77uX')
        cy.get('[id="input35"]').type('Tsurushima@01');
        cy.get('[id="input35"]').should('have.value', 'Tsurushima@01')

        cy.screenshot('login-input',{
            capture: "fullPage"
            });
    
        // class auth-content class search 'Sign in'
        cy.get('.auth-content').contains('Sign in').click();

        // https://aig-pre-sqa-web.sssiotpfs.com/user/myProfile
        cy.location().should((loc) => {
            expect(loc.href).to.eq('https://aig-pre-sqa-web.sssiotpfs.com/user/myProfile')
            })

        // cy.contains('ユーザーID情報')

        cy.screenshot('userID-information',{
          capture: "fullPage"
        });
    })

	afterEach(function(){

        cy.wait(1000);
        // Click User information Icon 
        cy.get('[id="headerMenuBtn"]').click()

        cy.wait(1000);
        // Click Sign Out
        cy.get('[id="signOut"]').click()

        // https://aig-pre-sqa-web.sssiotpfs.com/
        // cy.location().should((loc) => {
        //     expect(loc.href).to.eq('https://aig-pre-sqa-web.sssiotpfs.com/')
        //     })
    });    
})
