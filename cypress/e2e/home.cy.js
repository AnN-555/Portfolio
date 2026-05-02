describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the page with title", () => {
    cy.title().should("not.be.empty");
  });

  it("should display navigation bar", () => {
    cy.get("nav").should("be.visible");
    cy.get("nav").contains("MA");
  });

  it("should have navigation links", () => {
    cy.get("nav").within(() => {
      cy.contains("HOME").should("have.attr", "href", "#about");
      cy.contains("MY PROJECT").should("have.attr", "href", "#project");
      cy.contains("CONTACT").should("have.attr", "href", "#contact");
    });
  });

  it("should display hero section", () => {
    cy.get("#about").should("be.visible");
    cy.get("h1").contains("Minh An");
    cy.contains("From Medicine to Technology");
  });

  it("should display timeline data", () => {
    cy.contains("2017");
    cy.contains("Study Doctor of Preventive Medicine");
    cy.contains("2023");
  });

  it("should display Codingame link", () => {
    cy.contains("View Codingame Profile").should(
      "have.attr",
      "href",
      "https://www.codingame.com/profile/5a7ea1271aa1baf53ff992632107dd510604386"
    );
  });

  it("should display projects section", () => {
    cy.get("#project").should("be.visible");
    cy.contains("Selected Work");
    cy.contains("Low-code platform");
    cy.contains("Reliable data transfer");
  });

  it("should display project videos with correct titles", () => {
    cy.get('iframe[title="Low-code platform"]').should("exist");
    cy.get('iframe[title="Reliable data transfer"]').should("exist");
  });

  it("should display contact form", () => {
    cy.get("#contact").should("be.visible");
    cy.contains("Get in Touch");
    cy.get('input[name="email"]').should("exist");
    cy.get('textarea[name="message"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("should display footer", () => {
    cy.get("footer").should("be.visible");
    cy.contains("Minh An").should("be.visible");
    cy.contains("Ho Chi Minh City, Vietnam");
    cy.contains("lma75111@gmail.com");
    cy.contains("Facebook").should(
      "have.attr",
      "href",
      "https://www.facebook.com/an.lamminh"
    );
  });
});