Cypress.Commands.add("scrollToSection", (id) => {
  cy.get(id).scrollIntoView({ duration: 500 });
  cy.wait(300);
});