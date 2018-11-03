import TextableDate from '../../../src/domain/date/TextableDate';
describe('TextableDate のテスト.', () => {
  it('指定日付をテキストフォーマット出来る。', () => {
    const param = new Date(2018, 0, 1, 0, 0, 0);
    const sut = new TextableDate(param);

    const actual = sut.format();

    expect('2018-01-01').toEqual(actual);
  });

  it('うるう年などのエッジケースをテキストフォーマット出来る。', () => {
    const param = new Date(2012, 1, 29, 0, 0, 0);
    const sut = new TextableDate(param);

    const actual = sut.format();

    expect('2012-02-29').toEqual(actual);
  });
});
