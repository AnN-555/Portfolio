describe("Projects", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.scrollToSection("#project");
  });

  it("should display all project videos", () => {
    cy.get("#project").within(() => {
      cy.get('iframe[title="Low-code platform"]').should("be.visible");
      cy.get('iframe[title="Reliable data transfer"]').should("be.visible");
    });
  });

  it("should have lazy loading on videos", () => {
    cy.get('iframe[title="Low-code platform"]').should(
      "have.attr",
      "loading",
      "lazy"
    );
  });
});