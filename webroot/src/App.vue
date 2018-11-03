<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}   
    


    #plus   {

        position: fixed;
        bottom: 0;
        right: 0;
    }    

#Settings {
        float:left; 

}
    
    #Start {
        float:right; 

}
    
.home, .about {

    background-color: lightcyan;
    height: 100em;
    
        
}
    * {
    box-sizing: border-box;
}

/* Create three unequal columns that floats next to each other */
.column {
    float: left;   
    height: 10em;
}

.left, .right {
  width: 15%;
}

.middle {
  width: 70%;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}
.fa-icon {
  width: auto;
  height: 3em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}    
    
</style>
