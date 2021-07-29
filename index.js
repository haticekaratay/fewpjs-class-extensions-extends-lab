class Polygon{
    constructor(arr){
        this.sides = arr;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
       return this.sides.reduce((sum,side) => sum+side,0)
    }
}

class Triangle extends Polygon{
    get isValid(){
         return !(this.sides[0] + this.sides[1]<=this.sides[2] || this.sides[1] + this.sides[2]<=this.sides[0] || this.sides[0] + this.sides[2] <= this.sides[1])
    }
}

class Square extends Polygon{
    get area(){
        return this.sides[0]*this.sides[0]
    }
    get isValid(){
        return this.sides.every(side=> this.perimeter/this.countSides === side)
    }
}
