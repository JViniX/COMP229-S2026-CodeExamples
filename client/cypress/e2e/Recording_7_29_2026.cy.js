describe("Recording 7/29/2026 at 7:30:18 PM", () => {
  it("tests Recording 7/29/2026 at 7:30:18 PM", () => {
    cy.viewport(1014, 945);
    cy.visit("http://localhost:5173/");
    cy.get("li:nth-of-type(6) > a").click();
    cy.get("#emailTextField").click();
    cy.get("#emailTextField").type("john@smith.ca");
    cy.get("#passwordTextField").click();
    cy.get("#passwordTextField").type("123456");
    cy.get("div:nth-of-type(2) button").click();
    cy.get("li.dropdown > a").click();
    cy.get("li.dropdown li:nth-of-type(1) > a").click();
    cy.get("main div:nth-of-type(1) > a").click();
    cy.get("#title").click();
    cy.get("#title").type("Test New Project");
    cy.get("#description").click();
    cy.get("#description").type("New Project Desc");
    cy.get("#completion").click();
    cy.get("#completion").type("2026-07-24");
    cy.get("button.btn-primary").click();
    cy.get("tr:nth-of-type(1) > td:nth-of-type(4) path").click();
    cy.get("#description").click();
    cy.get("#description").type("Edited Description.");
    cy.get("button.btn-primary").click();
    cy.get("li.dropdown > a").click();
    cy.get("li.dropdown li:nth-of-type(3) > a").click();
  });
});
