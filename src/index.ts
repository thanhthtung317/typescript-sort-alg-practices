import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";

const collection = new NumberCollection([23,-23,10,1]);
const characters = new CharacterCollection('Xaba')

collection.sort()
characters.sort()
console.log(collection.collection);
console.log(characters.collection);
