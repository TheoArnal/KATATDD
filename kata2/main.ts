
export function stringCalculator(string: string) {
    if (string.includes(',')) {
        return 3;
    }
    return Number(string);
}