function merge(obj1,obj2)
{
    let merged={...obj1,...obj2};
    console.log(merged)
   
}
merge({'a': 1, 'b': 2},{'c': 3, 'd': 4})
