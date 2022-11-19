const cats = ["Milo", "Otis", "Garfield"];

// Write your solution here!
/* cats.push("Kitty");*/
/*console.log(cats);*/
// This function should append a cat to the end of the array, destructively.
/*function destructivelyAppendCat(name) {
    cats.push(name);
}*/

// this function should prepend a cat to the beginning of the cats array, destructively.
/*function destructivelyPrependCat(name) {
    cats.unshift(name);
}
cats.unshift("Kitty");
console.log(cats);*/

// this function should remove the last cat from the cats array, destructively.
/*cats.pop();
console.log(cats);

function destructivelyRemoveLastCat() {
    cats.pop();
}*/

// this function should remove the first cat from the cats array, destructively.
/*cats.shift();
console.log(cats);
/*function destructivelyRemoveFirstCat() {
    cats.shift();
}*/

// this function should append a cat to the cats array and return a new array, leaving the cats array unchanged
/*const copyOfCats = [...cats, "Kitty"];
/*console.log(copyOfCats);*/

/*function copyOfCats(name) {
    return [...cats, name];
}*/

// this function should prepend a cat to the cats array and return a new array, leaving the cats array unchanged
/*const prependCat = ["Kitty", ...cats];
console.log(prependCat);*/
/*function prependCat(name) {
    return [name, ...cats];
}*/
    
// this function should remove the last cat in the cats array and return a new array, leaving the cats array unchanged
/*cats.slice(0, cats.length - 1);
console.log(cats)*/
/*function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}*/

// this function should remove the first cat from the cats array and return a new array, leaving the cats array unchanged
cats.slice(1);
console.log(cats.slice(1));
/*function removeFirstCat() {
    return cats.slice(1);
}*/