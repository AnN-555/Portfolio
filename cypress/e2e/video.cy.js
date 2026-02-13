describe("Project videos", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("First video is here and loaded", () => {
    cy.get(".video-section").first().scrollIntoView().should("be.visible");
    cy.get('iframe[title="Low-code platforms - Minh An"]')
      .should("have.attr", "src")
      .and("include", "tubefree.org/videos/embed/kbRggkn2AWdWVjStmHdZ5b");
  });

  it("Second video is here and loaded", () => {
    cy.get(".video-section").eq(1).scrollIntoView().should("be.visible");
    cy.get('iframe[title="Reliable data transfer - Minh An"]')
      .should("have.attr", "src")
      .and("https://tubefree.org/videos/embed/7twNW5MpEw8f2JKTGMePvE");
  });
});
