function x(a, b) {
    return a.reduce((c, d) => c + (b.includes(d) ? 1 : 0), 0);
}
