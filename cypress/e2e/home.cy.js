describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Index is loaded", () => {
    cy.title().should("not.be.empty");
    cy.get("h1, h2").should("exist");
  });

  it("Footer is loaded", () => {
    cy.get(".footer-social").should("exist");
    cy.get('.footer-infor a[href*="facebook.com"]').should("have.attr", "href");
    cy.get('.footer-infor a[href^="mailto:"]').should("have.attr", "href");
  });

  it("Video section is loaded", () => {
    cy.get("#project").should("exist");
    cy.get('iframe[title="Low-code platforms - Minh An"]').should(
      "have.attr",
      "src"
    );
    cy.get('iframe[title="Reliable data transfer - Minh An"]').should(
      "have.attr",
      "src"
    );
  });
});
