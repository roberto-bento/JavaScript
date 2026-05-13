import { roberto,joao,maria,lucas } from "./people.js";

const people = [lucas, maria, joao, roberto];

function callback(value, index, array) {
    console.log('index: ', index);
    console.log('value: ', value.name);
    console.log("-----------------------------------")
}
const names = people.map((value) => {
    return value.name;
});
people.forEach(callback);
people.name = names;
console.log(people.name);