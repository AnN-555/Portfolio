describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.scrollToSection("footer");
  });

  it("should display footer with all sections", () => {
    cy.get("footer").within(() => {
      cy.contains("Minh An").should("be.visible");
      cy.contains("Contact").should("be.visible");
      cy.contains("Connect").should("be.visible");
    });
  });

  it("should display contact information", () => {
    cy.get("footer").within(() => {
      cy.contains("Ho Chi Minh City, Vietnam");
      cy.contains("+84 981 121 857").should(
        "have.attr",
        "href",
        "tel:+84981121857"
      );
      cy.contains("lma75111@gmail.com").should(
        "have.attr",
        "href",
        "mailto:lma75111@gmail.com"
      );
    });
  });

  it("should display Facebook link", () => {
    cy.get("footer")
      .contains("Facebook")
      .should("have.attr", "href", "https://www.facebook.com/an.lamminh")
      .should("have.attr", "target", "_blank")
      .should("have.attr", "rel", "noopener noreferrer");
  });

  it("should display copyright", () => {
    cy.get("footer").contains("© 2025 Minh An");
  });
});