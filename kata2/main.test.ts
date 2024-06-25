import {stringCalculator} from "./main";

describe('String calculator module', () => {
    test('should return 0 when empty string given', () => {
        expect(stringCalculator('')).toBe(0);
    });
});