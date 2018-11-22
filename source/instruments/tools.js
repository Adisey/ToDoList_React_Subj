export const msToHMS = (ms, showMs = false) => {
    let seconds = showMs ? ms / 1000 : Math.round(ms/ 1000);
    const hours = parseInt(seconds / 3600);

    seconds %= 3600;
    const minutes = parseInt(seconds / 60);

    seconds %= 60;

    return `${hours}:${num2string(minutes)}:${num2string(seconds)}`;
};

export const num2string = (num, size=2) => {
    let outString = String(num);

    while (outString.length < size) {
        outString = `0${outString}`;
    }

    return outString;
};
