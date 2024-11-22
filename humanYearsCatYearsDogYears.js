const humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears >= 1 && Number.isInteger(humanYears)) {
        let catYears = 15
        let dogYears = 15
        if (humanYears >= 2) {
            catYears += 9
            dogYears += 9
            if (humanYears >= 3) {
                catYears += 4 * (humanYears - 2)
                dogYears += 5 * (humanYears - 2)
            }
        }
        return [humanYears, catYears, dogYears]
    }
    return "Incorrect human years"
}

// BETTER SOLUTION

// const humanYearsCatYearsDogYears = function(y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }