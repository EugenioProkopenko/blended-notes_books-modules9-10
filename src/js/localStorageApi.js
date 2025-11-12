export function addTolocalStorage(key, value) {
    const dataStorage= JSON.stringify(value);
    localStorage.setItem(key, dataStorage);

};


export function getFromLocalStorage(key) {
    const getData = localStorage.getItem(key);
    if(getData === null) {
        return [];
    };

    const getDataParse = JSON.parse(getData);
    return getDataParse;

};
