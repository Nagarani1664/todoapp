let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let itm=document.createElement("li");
    itm.innerText=inp.value;
    let deletebtn=document.createElement("button");

     deletebtn.innerText="delete";
     itm.classList.add("delete");
     itm.appendChild(deletebtn);
     
    ul.appendChild(itm);
    inp.value="";
});
// let bts=document.querySelectorAll(".delete");
// for(delbt of bts){
//     delbt.addEventListener("click",function(){
//       let parent=this.parentElement;
//       parent.remove();

//     });
// } // with this we are not able to delete the new added button .we are able to delete only the previos list elements
//i am triggering the outer most element this leads to the triggering of inner element  also
ul.addEventListener("click",function(event){
      console.dir(event.target.nodeName);
      console.log("button clicked");
     if(event.target.nodeName=="BUTTON") {
         let listName=event.target.parentElement;
         listName.remove();
         console.log("delete");
     }
});