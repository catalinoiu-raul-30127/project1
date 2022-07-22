//import fetch from ";
import fetch from 'node-fetch';
const fetchPromise = fetch('https://catfact.ninja/fact')
let res;
fetchPromise
  .then((res) => {
    return res.json();
  })
  .then((fact) => {
    console.log("fact second then", fact);
    res = fact;
  })
  .catch((error) => {
    console.log("Error", error);
  });

setTimeout(() => {
  console.log("response", res);
}, 5000);


///////////////////////////////
// const fct=async()=>{
//   try{
//     console.log("result",await fetchPromise);
//   }
//   catch(error){
//   console.log("err",error)
//   }
// };
// fct();