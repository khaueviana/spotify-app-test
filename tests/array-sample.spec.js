const { expect } = require('chai');

describe('Main', () => {
  let arr;
  // // roda uma vez, antes do bloco
  // before(() => {
  // });

  // // roda uma vez, depois do bloco
  // after(() => {
  // });

  // roda todas as vezes, antes de cada bloco (IT)
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de cada bloco
  afterEach(() => {
  });

  // testar tipos ou se existe (smoke test)
  it('should be an array', () => {
    expect(arr).to.have.a('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', () => {
    const result = arr.pop() === 3;
    expect(result).to.be.true;
  });

  it('should have a size of 2 when pop a value form the array', () => {
    arr.pop();
    expect(arr).to.have.length(2);
  });
});
