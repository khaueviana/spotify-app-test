describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      // it.skip('should happen blabla', () => {
      it('should happen blabla', () => {
        // espera que aconteça
        // Entrada de dados / método sum(2,2)
        // Espera retornar true ou falso
      });
    });

    // context.only('Case 2', () => {
    context('Case 2', () => {
      it('should happen blabla', () => {
        // espera que aconteça
        // Entrada de dados / método sum(2,2)
        // Espera retornar true ou falso
      });

      it('should happen mimi', () => {
        // espera que aconteça
        // Entrada de dados / método sum(2,2)
        // Espera retornar true ou falso
      });
    });
  });

  describe('Method B', () => {
    it('should happen blabla', () => {
      // espera que aconteça
      // Entrada de dados / método sum(2,2)
      // Espera retornar true ou falso
    });
  });
});
