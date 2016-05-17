
  clearAll()
  var x
  var operator
  var decimal
  
  function tilføj(tal) {
    document.getElementById("input").innerHTML += tal;
  }
  
  function plus(){
    operator = "plus"
    x = document.getElementById("input").innerHTML
    document.getElementById("input").innerHTML = ""
  }
  
  function gange(){
    operator = "gange"
    x = document.getElementById("input").innerHTML
    document.getElementById("input").innerHTML = ""
  }
  
  function divider(){
    operator = "divider"
    x = document.getElementById("input").innerHTML
    document.getElementById("input").innerHTML = ""
  }
  
  function komma(){
    decimal = true
    document.getElementById("input").innerHTML += "."
  }
  
  function beregn(){
    if (decimal == false)
    {
      input = parseInt(document.getElementById("input").innerHTML)
      x = parseInt(x)
    }
    else
    {
      input = parseFloat(document.getElementById("input").innerHTML)
      x = parseFloat(x)
    }
   
    if (operator == "plus")
    {
     document.getElementById("output").innerHTML = x + input
    }
    else if (operator == "gange")
    {
     document.getElementById("output").innerHTML = x * input
    }
    else if (operator == "divider")
    {
     document.getElementById("output").innerHTML = x / input
    }
  }
  
  function clearAll(){
    x = 0
    operator = ""
    decimal = false
    document.getElementById("output").innerHTML = ""
    document.getElementById("input").innerHTML = ""
  }