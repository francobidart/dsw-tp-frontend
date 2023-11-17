describe('Ingreso a la información de un producto', () => {
  beforeEach(() => {
    cy.visit('/producto/4')
  });

  it('Debe ingresar a un producto, verificar que tenga inventario y generar un pedido sobre ese producto', () => {
    cy.title().should('equal', 'MICROPROCESADOR INTEL CELERON G5905 TRAY OEM BULK 3.50GHZ 4MB 1200');
    cy.get('.unidades-disponibles').then($value => {
      let unidades = parseInt($value[0].innerHTML);
      if (unidades > 0) {
        cy.get('#comprarAhora').contains('Comprar ahora').click()
        cy.location('pathname').should('equal', '/login')
        cy.get('#username').type('test@test.com')
        cy.get('#password').type('admin')
        cy.get('span').contains('Ingresar').click()
        cy.location('pathname').should('equal', '/checkout')
        cy.get('div').contains('Confirmar pedido').click()
      } else {
        cy.get('a').contains('No hay unidades disponibles')
      }
    })
  });
});
