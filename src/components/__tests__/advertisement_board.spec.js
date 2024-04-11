describe('Advertisement Board', () => {
    it('allows adding, editing, and deleting advertisements', () => {
      cy.visit('/');
      
      cy.get('input[type="text"]').type('New Advertisement');
      cy.contains('Добавить рекламу').click();
      cy.contains('New Advertisement').should('exist');
      
      cy.contains('New Advertisement').parent().within(() => {
        cy.contains('Редактировать').click();
        cy.get('input[type="text"]').clear().type('Edited Advertisement');
        cy.contains('Сохранять').click();
      });
      cy.contains('Edited Advertisement').should('exist');
  
      cy.contains('Edited Advertisement').parent().within(() => {
        cy.contains('Удалить').click();
      });
      cy.contains('Edited Advertisement').should('not.exist');
    });
  });
  