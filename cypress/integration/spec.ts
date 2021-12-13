describe('Purchase products', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')

    cy.contains('Bienvenue sur Zenika Ecommerce')
  })

  it('should add a product and update the total', () => {
    cy.visit('/')

    cy.contains(`Votre panier s'élève à €0.00`)

    cy.get('button').contains('Ajoutez au panier').click()

    cy.contains(`Votre panier s'élève à €20.00`)
  })

  it('should checkout the basket and reset the total', () => {
    cy.visit('/')

    cy.contains(`Votre panier s'élève à €0.00`)

    cy.get('button').contains('Ajoutez au panier').click()
    cy.get('button').eq(1).contains('Ajoutez au panier').click()

    cy.contains(`Votre panier s'élève à €38.00`)

    cy.get('a').contains('Voir mon panier').click()
    cy.get('button').contains('Validate').click()

    cy.contains(`Votre panier s'élève à €0.00`)
  })
})
