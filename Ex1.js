let countries=[
    {
        name:"Spain",
        population:"500000",
        id:1,
    },
    {
        name:"England",
        population:"600000",
        id:2,
    },
    {
        name:"Germany",
        population:"700000",
        id:3,
    }
]
countries.sort((a,b)=>
{
    return a.population-b.population;
})
countries.forEach((e) => {
    console.log(`${e.id} ${e.name} ${e.population}`);
});