let form = document.getElementById("addForm");
let listItem = document.getElementById("list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.getElementById("input").value;
//   console.log(input);
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = input;
  
  let button = document.createElement("button");
  button.innerHTML = "X";
  button.className = "btn btn-danger float-end";
  
  li.appendChild(button);
  
  listItem.appendChild(li);
});
// let input = document.getElementById("input").value;

listItem.addEventListener('click', (e)=>{
// console.log(e.target);
if(e.target.classList.contains('btn')){
   let  li=e.target.parentElement;
   console.log(li);
    listItem.removeChild(li);
}
})
