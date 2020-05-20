var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");
var btn = document.querySelector(".btn");
var input = document.querySelector(".input");



dropTarget.addEventListener("dragover",function(e){
    e.preventDefault();

});

dropTarget.addEventListener("drop",function(e){
    e.preventDefault();
    let target = e.target;
    
    let srcId = e.dataTransfer.getData("srcId");
    
    e.target.appendChild(document.getElementById(srcId));
    
   

});




btn.addEventListener('click',function(){
    var text  = input.value;
    if(text){
        var card = document.createElement('div');
        var btn = document.createElement('button');
        btn.classList = "task-btn";
        btn.addEventListener('click',function(e){
            var target = e.target.parentNode;
            if(target.classList.contains("task")){
            target.remove();
             }

        });
        card.classList.add('task');
        card.innerText = text;
        card.setAttribute("id", text);
        card.appendChild(btn);
        card.setAttribute("draggable", true);
        card.addEventListener('dragstart',function(e){
            e.dataTransfer.setData("srcId", e.target.id);
        });
        dropTarget.children[0].appendChild(card);
        input.value ="";
    }
});

document.addEventListener("keypress",function (event) {
    if (event.which == 13 || event.keyCode == 13) {
        //code to execute here
        var text  = input.value;
        if(text){
            var card = document.createElement('div');
            var btn = document.createElement('button');
            btn.classList = "task-btn";
            btn.addEventListener('click',function(e){
                var target = e.target.parentNode;
                if(target.classList.contains("task")){
                target.remove();
                 }
    
            });
            card.classList.add('task');
            card.innerText = text;
            card.setAttribute("id", text);
            card.appendChild(btn);
            card.setAttribute("draggable", true);
            card.addEventListener('dragstart',function(e){
                e.dataTransfer.setData("srcId", e.target.id);
            });
            dropTarget.children[0].appendChild(card);
            input.value ="";
        }
        
    }
    
});