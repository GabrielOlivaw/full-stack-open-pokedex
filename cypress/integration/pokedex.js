/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('Front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Pokemon page can be accessed from main page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('squirtle').click()
    cy.contains('rain dish')
  })
})