function add()
{
    
    let msg=document.getElementById("msg").value;
    if(msg===""){
        alert("Enter a task!!");
        return;
    }
    let li=document.createElement("li");
    let span=document.createElement("span");//task text
   span.innerText=msg;
    let edit=document.createElement("button");//edit btn
    edit.innerText="Edit";
    let del=document.createElement("button");//del btn
    del.innerText="Delete";
    edit.onclick=function()
    {
        if (edit.innerText === "Edit") {

            let input = document.createElement("input");
            input.type = "text";
            input.value = span.innerText;//set value to textarea text in span

            span.innerText = "";
             span.appendChild(input);//add input box in span

            edit.innerText = "Update";
    }
    else{
        let input = span.querySelector("input");//find input vox in span
            span.innerText = input.value;

            edit.innerText = "Edit";
    }
};
    del.onclick=function()
    {
        alert("Do u want to remove the task!");
        li.remove();
    }
    li.appendChild(span);
    li.appendChild(edit);
    li.appendChild(del);
    document.getElementById("tlist").appendChild(li);
   document.getElementById("msg").value="";

}
