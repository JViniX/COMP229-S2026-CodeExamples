describe("Edit a project", () => {
  it("tests Edit a project", () => {
    cy.viewport(1014, 945);
    cy.visit("http://localhost:5173/admin/projects");
    cy.visit("http://localhost:5173/admin/projects");
    cy.get("tr:nth-of-type(1) > td:nth-of-type(4) path").click();
    cy.get("#title").click();
    cy.get("#title").type("COMP229 - Assignment 02 - E");
    cy.get("#title").type("COMP229 - Assignment 02 - Edited");
    cy.get("button.btn-primary").click();
  });
});
