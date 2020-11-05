function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("table"); 
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function dropdown(name) {
      var element = document.getElementsByClassName(name);
      for(var i = 0; i < element.length; i++) {
          if(element[i].style.display === 'block'){
            element[i].style.display = 'none';
          } else {
            element[i].style.display = 'block';
          }
      }
  }

  function filter(btn){
    var div;
    div = document.getElementsByClassName("all");
    if (btn == "all") btn = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (var i = 0; i < div.length; i++) {
      div[i].style.display = 'none';
      if (div[i].className.indexOf(btn) > -1) div[i].style.display = '';
    }
  }
function show(name) {
    var div;
    div = document.getElementsByClassName("source-buttons");
    if(name == 'all') name = "";
    for (var i = 0; i < div.length; i++) {
      div[i].style.display = 'none';
      if (div[i].className.indexOf(name) > -1) div[i].style.display = '';
}
}
