var Reb = new Array();
Reb["Biceps"] = "https://www.youtube.com/watch?v=Pu-_Eqsbblk";
Reb["Ryg"] = "https://www.youtube.com/watch?v=Eq_ArlGoZac";
Reb["Triceps"] = "https://www.youtube.com/watch?v=KHfkC4Atxh0";

var Håndvægt = new Array();
Håndvægt["Biceps"] = "https://www.youtube.com/watch?v=taoKFgbH0dQ";
Håndvægt["Ryg"] = "https://www.youtube.com/watch?v=iMj2hTaxqu4";
Håndvægt["Triceps"] = "https://www.youtube.com/watch?v=c0FYn7y-TG0";

var Værktøjer = new Array();
Værktøjer["Reb"] = Reb;
Værktøjer["Håndvægt"] = Håndvægt;

function myFunction() {
    var x = $('#sel1').val();
    var y = $('#sel2').val();
    //alert(x[0]);
    
    var z = 0;
    var html = "";
    var i;
    var j;
    for (j = 0; j < y.length ;j++) {
      for (i = 0; i < x.length ;i++) {
        html += '<tr class="success">';
        html += '<td>' + x[i] + '</td>';
        html += '<td>' + y[j] + '</td>';
        z = Værktøjer[x[i]];
        html += '<td>' + '<a href=' + z[y[j]] + '>Øvelse Link</a>' + '</td>';
        html += '</tr>';
      }
    }
    document.getElementById("myOutput").innerHTML = html;
}
