describe("HomePage", () => {
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

  it("should display search input", () => {
    cy.get('[data-cy="search-input"]').should("be.visible");
  });

  it("should display games list", () => {
    cy.get('[data-cy="games-list"]').should("be.visible");
  });

  it("should display 5 games witout search and filters", () => {
    cy.get('[data-cy="games-list"] > [data-cy="game-item"]').should(
      "have.length",
      5
    );
  });

  it('should display 1 game with search "over"', () => {
    cy.get('[data-cy="search-input"]').type("over");
    cy.get('[data-cy="games-list"] > [data-cy="game-item"]').should(
      "have.length",
      1
    );
  });

  it('should clear search field after choose filter "browser" and display 2 games', () => {
    cy.get('[data-cy="search-input"]').type("over");
    cy.get('[data-cy="platform-filter"]').select("browser");
    cy.get('[data-cy="search-input"]').should("have.value", "");
    cy.get('[data-cy="games-list"] > [data-cy="game-item"]').should(
      "have.length",
      2
    );
  });
});
