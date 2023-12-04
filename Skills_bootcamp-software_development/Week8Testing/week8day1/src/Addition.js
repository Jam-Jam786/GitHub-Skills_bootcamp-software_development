export class Calculator
{
    constructor(augend, addend)
    {
        this.augend = augend
        this.addend = addend
    }
    multiplication()
    {
        return this.augend * this.addend;
    }
    addition()
    {
        return this.augend + this.addend;    
    }
    changeInputs(x, y)
    {
        this.augend = x;
        this.addend = y;
    }
    divide()
    {
        return this.augend / this.addend;
    }
    subtraction()
    {
        return this.augend - this.addend;
    }
}



module.exports = {Calculator};