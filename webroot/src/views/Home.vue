<template>
  <div class="home">
      
    <h1>Task Manager</h1>
      <hr>
      
      
      
      
<div class="Task">

<div class="row">
  <div class="column left">
            <v-icon name="cog"/>


  </div>
    
  <div class="column middle">
    <h2>Task0</h2>     
<div class="container">
<div class="progress">
    <div class="progress-bar bg-info progress-bar-striped" style="width:30%">30%</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" style="width:40%">40%</div>
  </div>
</div>
  </div>
    
  <div class="column right">

 
      <v-icon name="play"/>

    </div></div><hr></div>

      <v-icon name="plus"/>
    
    </div>
</template>







<script>
    function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
    
    
</script>
