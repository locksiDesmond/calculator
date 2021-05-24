import { Solve } from './handleInput';

describe('Handle Input', () => {
  describe('Solve', () => {
    test('should correctly add', () => {
      expect(Solve('1+1')).toBe(2);
      expect(Solve('1000+1')).toBe(1001);
      expect(Solve('40+5700')).toBe(5740);
      expect(Solve('98+2')).toBe(100);
    });

    test('should correctly subtract', () => {
      expect(Solve('1-1')).toBe(0);
      expect(Solve('1000-1')).toBe(999);
      expect(Solve('34-56')).toBe(-22);
      expect(Solve('4012221112- 12222222')).toBe(3999998890);
      expect(Solve('0 - 0')).toBe(0);
    });

    test('should correctly multiply', () => {
      expect(Solve('1*1')).toBe(1);
      expect(Solve('1000*0')).toBe(0);
      expect(Solve('400*522')).toBe(208800);
      expect(Solve('-2*4')).toBe(-8);
      expect(Solve('0 * 0')).toBe(0);
    });

    test('should perform multiple operation correctly', () => {
      expect(Solve('1*1-1')).toBe(0);
      expect(Solve('1000*0+78-2')).toBe(76);
      expect(Solve('400*522-800')).toBe(208000);
      expect(Solve('7-2*4')).toBe(-1);
      expect(Solve('0 * 0-1+8*1*4')).toBe(31);
    });
  });
});
