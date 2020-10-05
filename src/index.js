module.exports = function check(str, bracketsConfig) {
    let copyStr = str;
    const bracketsConfigArr = bracketsConfig.map(pair => pair.join(""));

    let i = 0;
    while (i < bracketsConfigArr.length) {

        if (copyStr.includes(bracketsConfigArr[i])) {
            copyStr = copyStr.replace(bracketsConfigArr[i], "");
            i = 0;
        } else i++;

    }

    return copyStr.length === 0;
}
