const button=document.getElementById('button');

const input = document.getElementById('input');
const box = document.getElementById('box');

button.addEventListener('click',function(e){
    
      const entered_task=document.getElementById('input').value;
      
      if(entered_task ==="") alert("Please enter your task");
      else{ 
      // li styling
      //these styling can be added into css jaise ki del wale me kiya h
      const task= document.createElement('li');
      const del= document.createElement('span');
      task.className="taskId";
      task.style.backgroundColor="white";
      task.style.margin="5px";
       task.style.cursor="pointer";
      task.style.paddingLeft="10px";
      // task.style.height="30px";
      task.style.borderRadius="30px";
      task.style.display = "flex";
      task.style.justifyContent = "space-between";
      task.style.alignItems = "center";
      task.style.color="#0A400C"
      task.innerHTML=entered_task;
      document.getElementById('box').appendChild(task);
      task.appendChild(del);
      //input ko empty krne ke liye
      input.value="";
      
      
       del.innerHTML="\u00d7";
      // del styling
//       del.style.width="50px";
//       del.style.backgroundColor="blue";
//       del.style.borderRadius="30px";
//       del.style.justifyContent="center";
//       del.style.fontSize="20px";
//       del.style.cursor="pointer";

      del.addEventListener('click',function(){
            task.remove();
           
      })
      }
      

})
