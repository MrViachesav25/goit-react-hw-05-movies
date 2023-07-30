export function getToString(arr) {
    if (!arr) return '';
    return arr.map(item => item.name).join(', ');
};

export function getPoster(data) {
    if (data) return `https://image.tmdb.org/t/p/w300${data}`
    else return "No poster"
};

export function getInfo(arr) {
    for (const el of arr) {
        if (el) return el
    }
};
