import * as si from 'seamless-immutable';

const myReducer = (acc, name) => {
  const count = acc[name];
  // VORHER: acc[name] = count ? count + 1 : 1;
  const newAcc = acc.set(name, count ? count + 1 : 1);
  return newAcc;
};

describe('names reducer', () => {
  it('should count names', () => {

    const names = ['Karl', 'Micha', 'Anita', 'Alex', 'Karl', 'Micha'];

    const immutableAccumulator = si.from({});
    const actual = names.reduce(myReducer, immutableAccumulator);

    expect(actual).toEqual({
      Karl: 2,
      Micha: 2,
      Anita: 1,
      Alex: 1
    });
  });
});
