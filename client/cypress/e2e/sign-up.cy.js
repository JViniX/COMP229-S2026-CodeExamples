describe("Recording 7/29/2026 at 7:36:23 PM", () => {
  it("tests Recording 7/29/2026 at 7:36:23 PM", () => {
    cy.viewport(1014, 945);
    cy.visit("http://localhost:5173/");
    cy.get("li:nth-of-type(6) > a").click();
    cy.get("a:nth-of-type(2)").click();
    cy.get("#firstnameTextField").type("James");
    cy.get("#lastnameTextField").type("Smith");
    cy.get("#emailTextField").type("james@smith.ca");
    cy.get("#passwordTextField").type("123456789");
    cy.get("#confirmPasswordTextField").type("123456789");
    cy.get("div:nth-of-type(2) button").click();
  });
});
