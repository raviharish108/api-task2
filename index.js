const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let result = document.getElementById("result");
const btn = document.getElementById("search-btn");

let word=document.getElementById("inp-word");

let getmeaning=async()=>{
    try{
     const response=await fetch(`${url}${word.value}`);
     const data=await response.json();
      result.innerHTML=`  <div class="word">
                       <h3>${word.value}</h3>
                       </div>
               <p class="word-meaning"> ${data[0].meanings[0].definitions[0].definition}</p>
              <p class="word-example">${data[0].meanings[0].definitions[0].example}</p>`;
     await console.log(data);
    }catch(err){
        result.innerHTML = `<h3 class=error>${err}</h3>`;
    }
}
 
btn.addEventListener("click",getmeaning);
