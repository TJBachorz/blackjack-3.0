describe('My Counter', () => {
    it('should have a header', () => {
        cy.visit("http://localhost:3000")
        cy.contains("Header content here?")
    })

    it("should increment when the + button is clicked", () => {
        cy.visit("http://localhost:3000")
        cy.contains("+").click().click()
        cy.get("h1.count").should("have.text", 2)
    })

    it("should increment when the + button is clicked", () => {
        cy.visit("http://localhost:3000")
        cy.contains("-").click().click()
        cy.get("h1.count").should("have.text", -2)
    })
})