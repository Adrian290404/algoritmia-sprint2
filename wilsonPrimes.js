function amIWilson(p) {
    let factorial = BigInt(1)
    for (let i = 2; i < p; i++) {
        factorial *= BigInt(i)
    }
    return (factorial + BigInt(1)) % BigInt(p * p) === BigInt(0);
}