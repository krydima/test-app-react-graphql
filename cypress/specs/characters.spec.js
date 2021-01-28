describe('Characters', function () {
  before(() => {
    cy.visit('/characters');
  });
  it('showing main elements', () => {
    cy.get('[data-testid="characters-list-item"]').should(
      'contain',
      'Rick Sanchez'
    );
    cy.matchImageSnapshot();
  });

  it('should show second page', () => {
    cy.contains('Next').click();
    cy.get('[data-testid="characters-list-item"]').should(
      'contain',
      'Aqua Morty'
    );
  });

  it('should return back', () => {
    cy.contains('Prev').click();
    cy.get('[data-testid="characters-list-item"]').should(
      'contain',
      'Rick Sanchez'
    );
  });

  it('should open character page', () => {
    cy.get('[data-testid="characters-list-item"] a').first().click();

    cy.get('[data-testid="character-page"]').should('contain', 'Rick Sanchez');
    cy.matchImageSnapshot();
  });
});
