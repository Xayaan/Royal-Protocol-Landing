/// <reference types="cypress" />

describe ( "Landing Page", () => {
    it('Should have a correct page title', () => {
        cy.visit('https://royalprotocol.io/');
        cy.title().should('eq', 'Home | Royal Protocol')
    })

    it('Should contain correct homepage banner subtext', () => {
        cy.get(".copy > p").should('have.text',"Royal Protocol is a community Defi token, ushering in the next generation of gaming. With an nuanced ecosystem, Royal Protocol truly is Gaming Evolved.")
    })

    it("Should click 'BUY NOW' button and redirects to PancakeSwap", () => {
        cy.get('.btn.bg-blue-gradient')
        .should('have.attr', 'href', 'https://pancakeswap.finance/swap/0xdCE27D41b4Ff72B55a876c621f5A5Fef8537c99D')
    })

    it("Should have correct 'Gaming Evolved' section heading", () => {
        cy.get('.text-center.text-5xl.text-royalBlue-500.mt-8.mb-4.ProximaNovaBlack')
        .should('have.text', "Gaming Evolved")
        .should('have.css', 'color', 'rgb(12, 38, 62)')
        .should('have.css', 'font', '48px / 48px ProximaNovaBlack, sans-serif');
    })

    it("Should have correct 'Gaming Evolved' section subtext", () => {
        cy.get('.mx-auto > .max-w-xl')
        .should('have.text', "Technology in the 21st century is advancing more rapidly than ever before. With groundbreaking innovations making products smaller, smarter, and more efficient, many of them are progressing faster than consumers can keep up. So why has digital gaming remained largely unchanged?")
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font', '16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"')
    })

    it("Should have correct 'Game for Gamers' section heading", () => {
        cy.get(".ProximaNovaBlack.text-center.lg:text-left.text-5xl.text-royalBlue-500.mb-4")
        .should('have.text', 'Changing the Game for Gamers')
    })

})