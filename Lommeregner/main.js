var x
var operator

function tilføj(tal) {
  document.getElementById("input").innerHTML += tal;
}

function plus(){
  operator = "plus"
  x = parseInt(document.getElementById("input").innerHTML)
  document.getElementById("input").innerHTML = ""
}

function beregn(){
  input = parseInt(document.getElementById("input").innerHTML)
  if (operator == "plus")
  {
   document.getElementById("output").innerHTML = x + input
  }
}