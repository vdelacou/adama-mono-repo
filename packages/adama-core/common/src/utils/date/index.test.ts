import { getDateWithFormat } from '.';

describe('date', () => {
  it('should be defined', () => {
    expect(getDateWithFormat(new Date('2023-03-21'), 'yyyyMMdd')).toBe('20230321');
  });
});
