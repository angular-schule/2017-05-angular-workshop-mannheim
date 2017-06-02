let myReducer = (acc, name) => {
  const count = acc[name];
  acc[name] = count ? count + 1 : 1;
  return acc;
};

describe('names reducer', () => {
  it('should count names', () => {

    const names = ['Karl', 'Micha', 'Anita', 'Alex', 'Karl', 'Micha'];
    const actual = names.reduce(myReducer, {});

    expect(actual).toEqual({
      Karl: 2,
      Micha: 2,
      Anita: 1,
      Alex: 1
    });
  });
});
