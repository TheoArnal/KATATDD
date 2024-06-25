import {stringCalculator} from "./main";

describe('String calculator module', () => {
    test('should return 0 when empty string given', () => {
        expect(stringCalculator('')).toBe(0);
    });
    test('should return 1 when 1 in string given', () => {
        expect(stringCalculator('1')).toBe(1);
    });
    test('should return 3 when 1,2 string given', () => {
        expect(stringCalculator('1,2')).toBe(3);
    });
    test('should return 3 when 1,2,3 string given', () => {
        expect(stringCalculator('1,2,3')).toBe(3);
    });
});