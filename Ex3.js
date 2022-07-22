function group(str)
{
    let obj={};

    for(let i=0;i<str.length;i++)
    {
        let current=str[i];
        let first=current.charAt(0).toLowerCase();
        let inner=[];
        if(obj[first]===undefined)
        {
            inner.push(current);
            obj[first]=inner;
        }
        else
        {
            obj[first].push(current)
        }


    }
    return obj;
}
console.log(group(['Alf', 'Alice', 'Ben']))