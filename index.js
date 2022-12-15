// Write your solution here!
/*
function cats(cats) {
    cats = ["Milo", "Otis", "Garfield"];
    return cats
};
*/

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats
};

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats
};

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats
};

function appendCat(name) {
    const newCats = [
    ...cats,
    name,
    ];

    return newCats
};

function prependCat(name) {
    const newCats = [
    name,
    ...cats,
    ];

    return newCats
};

function removeLastCat(name) {
    const newCats = cats.slice(0,-1);

    return newCats
};

function removeFirstCat(name) {
    const newCats = cats.slice(1, cats.length);

    return newCats
};