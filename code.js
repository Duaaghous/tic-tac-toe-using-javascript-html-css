const URL ="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#fact")
const btnpara=document.querySelector("#btn")

// const getFact=async ()=>{

    //USING ASYNC 

//     console.log("getting data .....");
//     let response=await fetch(URL);
//     console.log(response);//json format
//     let data = await response.json();//readable bnata ha
//     factpara.innerText=data[1].text;
// }

 //USING PROMISES 
function getFact(){
fetch(URL).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    factpara.innerText=data[1].text
})


}
btnpara.addEventListener("click",getFact);