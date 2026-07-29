describe("Add a new project", () => {
  it("tests Add a new project", () => {
    cy.viewport(1014, 945);
    cy.visit("http://localhost:5173/admin/projects");
    cy.visit("http://localhost:5173/admin/projects");
    cy.get("main div:nth-of-type(1) > a").click();
    cy.get("#title").click();
    cy.get("#title").type("T");
    cy.get("#title").type("Test 01");
    cy.get("#description").type("T");
    cy.get("#description").type("Test 01 - D");
    cy.get("#description").type("Test 01 - Description");
    cy.get("#completion").click();
    cy.get("#completion").type("2026-07-20");
    cy.get("button.btn-primary").click();
  });
});
