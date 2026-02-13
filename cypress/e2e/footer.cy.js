describe('Scroll to bottom of homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Footer with facebook link and mail address', () => {
    cy.scrollTo('bottom');
    cy.get('footer.footer').should('be.visible');
    cy.get('.footer-social a[href*="facebook.com"]').should('exist');
    cy.get('.footer-social a[href^="mailto:"]').should('exist');
  });
});
