module.exports = function reverse (n) {
    n = Math.abs(n);
    n = Number(n.toString().split('').reverse().join(''));
    return n;
}
