const inputBox=document.getElementById("input-box");
const ulList=document.getElementById("list-containar");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        ulList.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value="";
    saveData()
}

ulList.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }


},false)


function saveData(){
    localStorage.setItem("data",ulList.innerHTML)
}
saveData()

function showTask(){
    ulList.innerHTML=localStorage.getItem("data")
}
showTask();

