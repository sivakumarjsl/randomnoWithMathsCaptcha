function randomNoWithMathsCaptcha(value1, value2, value3, option) {
    if(option) {
        var addition = value1 + value2;
        var subtraction = value3 - value2;
        const data = {addition, subtraction};
        return data
    } else {
        if(value3) {
            return Math.floor((Math.random() * value2) + value1);
        } else {
            return Math.floor((Math.random() * value2 - 1) + value1);
        }
    }
}
module.exports = randomNoWithMathsCaptcha;

