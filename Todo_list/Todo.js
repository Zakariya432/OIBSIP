window.addEventListener('load',()=>{
    const form = document.querySelector("#new-form");
    const input = document.querySelector("#new-input");
    const list_element = document.querySelector("#todos");

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const todo = input.value;

        if(!todo){
            alert("Fill a Todo");
            return;
        }

        const todo_element = document.createElement("div");
        todo_element.classList.add("todo");

        const todo_contn_element = document.createElement("div");
        todo_contn_element.classList.add("contn");

        todo_element.appendChild(todo_contn_element);

        const todo_input_element = document.createElement("input");
        todo_input_element.classList.add("text");
        todo_input_element.type = "text";
        todo_input_element.value = todo;
        todo_input_element.setAttribute("readonly", "readonly");

         todo_contn_element.appendChild(todo_input_element);

         const todo_actn_element = document.createElement("div");
         todo_actn_element.classList.add("actn")

         const todo_edit_element = document.createElement("button");
         todo_edit_element.classList.add("edit");
         todo_edit_element.innerText = "Edit";

         const todo_delete_element = document.createElement("button");
         todo_delete_element.classList.add("delete");
         todo_delete_element.innerText = "Delete";

         todo_actn_element.appendChild(todo_edit_element);
         todo_actn_element.appendChild(todo_delete_element);

         todo_element.appendChild(todo_actn_element);

        list_element.appendChild(todo_element);

        input.value = "";

        todo_edit_element.addEventListener('click', (e)=>{
           if(todo_edit_element.innerText.toLowerCase() == "edit"){
                todo_edit_element.innerText = "Save";
                todo_input_element.removeAttribute("readonly");
                todo_input_element.focus();
           }
           else{
               todo_edit_element.innerText = "Edit";
               todo_input_element.setAttribute("readonly", "readonly");
           }
        });

        todo_delete_element.addEventListener('click', (e) =>{
            list_element.removeChild(todo_element);
        });
    });
});