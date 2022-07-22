class CustomList
{
    constructor(values)
    {
        this.values=values;
    }
    insertFirst(data)
    {
         this.values.unshift(data);
         return this.values;
    }
    insertLast(data)
    {
        this.values.push(data);
        return this.values;
    }
    getFirst()
    {
        return this.values[0]

    }
    getLast()
    {
        return this.values[this.values.length-1]

    }
}
let obj1=new CustomList([1,3,6,8,10]);

console.log(obj1.getFirst()+" "+obj1.getLast()+" "+obj1.insertFirst(5)+" "+obj1.insertLast(10));
//console.log(obj1.insertFirst(9));