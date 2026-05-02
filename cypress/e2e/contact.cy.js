describe("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.scrollToSection("#contact");
  });

  it("should display contact form with all fields", () => {
    cy.get('input[name="email"]').should("be.visible");
    cy.get('textarea[name="message"]').should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
  });

  it("should have correct form action", () => {
    cy.get("form").should("have.attr", "action", "https://formspree.io/f/mkonenbl");
  });

  it("should validate email field as required", () => {
    cy.get('input[name="email"]').should("have.attr", "required");
  });

  it("should validate message field as required", () => {
    cy.get('textarea[name="message"]').should("have.attr", "required");
  });
});