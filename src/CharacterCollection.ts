import { Sorter } from "./Sorter"


export class CharacterCollection extends Sorter{
    constructor(public collection:string){
        super()
    }

    get length():number{
        return this.collection.length
    }

    compare(leftIndex:number, rightIndex:number):boolean{
        return this.collection[leftIndex].toLocaleLowerCase() >= this.collection[rightIndex].toLocaleLowerCase()
    }

    swap(leftIndex:number, rightIndex:number):void{
        const characters = this.collection.split('')

        const temp = characters[leftIndex]

        characters[leftIndex] = characters[rightIndex]

        characters[rightIndex] = temp

        this.collection = characters.join('')
    }
}