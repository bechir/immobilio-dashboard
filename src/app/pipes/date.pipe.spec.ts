import { DateFormatFRPipe, DateFormatENPipe } from './date.pipe';

describe('DateFormatFRPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFormatFRPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('DateFormatENPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFormatENPipe();
    expect(pipe).toBeTruthy();
  });
});
