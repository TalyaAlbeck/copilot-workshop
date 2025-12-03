function fn(arr) {
    let r = 0;
    for (let i = 0; i < arr.length; i++) {
        r += arr[i];
    }
    return r;
}

const sAB = (l) => {
    let nl = [...l]
    let t = {}

    for (let i = 0; i < nl.length; i++) {
        for (let j = i + 1; j < nl.length; j++) {
            if (nl[i].name > nl[j].name) {
                t = nl[i];
                nl[i] = nl[j];
                nl[j] = t;
            }
        }
    }
    return nl
};
