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
    test('should return 6 when 1,2,3 string given', () => {
        expect(stringCalculator('1,2,3')).toBe(6);
    });
    test('should return 6 when 1,2,3 string given', () => {
        expect(stringCalculator('1,2\n3')).toBe(6);
    });
    test('should throw an error when string ends with a comma', () => {
        expect(() => stringCalculator('1,2\n3,')).toThrow();
    });
    test('should return 4 when //;\n1;3 given', () => {
        expect(stringCalculator('//;\n1;3')).toBe(4)
    });
    test('should return 6 when //|\n1|2|3 given', () => {
        expect(stringCalculator('//|\n1|2|3')).toBe(6)
    });
    test('should return 7 when //sep\n2sep5 given', () => {
        expect(stringCalculator('//sep\n2sep5')).toBe(7)
    });
});