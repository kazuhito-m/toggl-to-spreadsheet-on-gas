import TextableDate from '../../../src/domain/date/TextableDate';
import DateRange from '../../../src/domain/date/DateRange';
describe('DateRange のテスト.', () => {
  it('「その月の月初日と月末日」を取得、返すことが出来る。', () => {
    const mockNow = new Date(2012, 1, 14, 0, 0, 0); // うるう年の２月
    DateRange.generator = { now: () => mockNow };

    const actual = DateRange.nowMonth();

    expect('2012-02-01').toEqual(actual.start.format());
    expect('2012-02-29').toEqual(actual.end.format());
  });

  it('当月から「ひと月前の月初・月末」を取得、返すことが出来る。', () => {
    const mockNow = new Date(2012, 1, 14, 0, 0, 0); // うるう年の２月
    DateRange.generator = { now: () => mockNow };
    const nowMonth = DateRange.nowMonth();

    const actual = nowMonth.previousMonth();

    expect('2012-01-01').toEqual(actual.start.format());
    expect('2012-01-31').toEqual(actual.end.format());
  });
});
