describe("DetailsPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.intercept(
      {
        method: "GET",
        pathname: "/api/games",
      },
      { fixture: "games.json" }
    );
    cy.intercept(
      {
        method: "GET",
        pathname: "/api/games",
        query: {
          platform: "browser",
        },
      },
      {
        fixture: "games-browser.json",
      }
    );
  });

  it("should navigate to the details page of the game after click 'View More' link", () => {
    cy.get('[data-cy="game-item"]')
      .first()
      .within(() => {
        cy.get('[data-cy="game-item-view-more"]').click();
      });
  });

  it("should display title and subtitle", () => {
    cy.get('[data-cy="header-title"]').should(
      "contain",
      "Find & track the best free-to-play games!"
    );
    cy.get('[data-cy="header-subtitle"]').should(
      "contain",
      "Search for what to play next!"
    );
  });

  it("should show table with requirements", () => {
    cy.get('[data-cy="game-item"]')
      .first()
      .within(() => {
        cy.get('[data-cy="game-item-view-more"]').click();
      });
    cy.get('[data-cy="game-details-requirements"]').should("be.visible");
  });

  it("should show gellry with 3 images for 1st game", () => {
    cy.get('[data-cy="game-item"]')
      .first()
      .within(() => {
        cy.get('[data-cy="game-item-view-more"]').click();
      });
    cy.get('[data-cy="game-details-gallery"]').should("be.visible");
    cy.get('[data-cy="game-details-gallery"] > img').should("have.length", 3);
  });
});
