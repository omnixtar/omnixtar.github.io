This demo shows the great number of JavaScript functions involved in simple HTML DOM manipulations:

2. create div with input id="drm"

3. output the value in input text box to the end of html body

// 1.a. create div
div ce:

// 1.b. getElementsByTagNames
body getn:

// 1.c. get item 0 from array
0 i:

// 1.d. text ih: set .innerHTML
do_re_mi ih:

// 1.e. ac: appendChild
body getn: 0 i: div ce: do_re_mi ih: ac:

// 2. create div with input id="drm"
body getn: 0 i: div ce: do_re_mi drm input: ih: ac:

// 3. geid (getElementById) .value 
drm geid: value:

// 4. append to end of body
body getn: 0 i: div ce: drm geid: value: ih: ac:



a b input: th tn: tr tn: table tn:

body getn: 0 i: div ce: a b input: th tn: tr tn: table tn: ih: ac:

document.getElementById('drm').value
"input created"

: cell a b input: th tn: tr tn: table tn: ;

: cell a b input: th tn: ; : row cell cell cell 3 ms: tr tn: ; body getn: 0 i: div ce: row row row 3 ms: table tn: ih: ac:


// 2021-03-07

f(': cell a b input: th tn: ; : row cell cell cell 3 ms: tr tn: ; body getn: 0 i: div ce: row row row 3 ms: table tn: ih: ac:')

: cell a b input: td tn: ;

https://stackoverflow.com/questions/14643617/create-table-using-javascript


// Phos Auth 2021-01-01
http://localhost/2020/PhosChat/auth/phos.html



function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 4; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode("Cell " + i + "," + j));
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}
addTable();

function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(var i = 0; i < 3; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl);
}
tableCreate();


function addTable() {
  
  var myTableDiv = document.body;
  // var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 4; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode("Cell " + i + "," + j));
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}
addTable();


  <input type="text" id="fname" name="fname">
  
  var div = document.createElement('div');
            div.setAttribute("id", "tbl");
            document.body.appendChild(div)
                document.getElementById("tbl").innerHTML = "<table border = '1'>" +
              '<tr>' +
                '<th>Header 1</th>' +
                '<th>Header 2</th> ' +
                '<th>Header 3</th>' +
              '</tr>' +
              '<tr>' +
                '<td>  <input type="text" id="fname" name="fname"> </td>' +
                '<td>Data 2</td>' +
                '<td>Data 3</td>' +
              '</tr>' +
              '<tr>' +
                '<td>Data 1</td>' +
                '<td>Data 2</td>' +
                '<td>Data 3</td>' +
              '</tr>' +
              '<tr>' +
                '<td>Data 1</td>' +
                '<td>Data 2</td>' +
                '<td>Data 3</td>' +
              '</tr>' 
              
              var div = document.createElement('div');
            div.setAttribute("id", "tbl");
            document.body.appendChild(div)
                document.getElementById("tbl").innerHTML = "<table border = '1'>" +
              '<tr>' +
                '<th> <input type="text" id="fname" name="fname" size=1> </th>' +
                '<th>Header 2</th> ' +
                '<th>Header 3</th>' +
              '</tr>' +
              '<tr>' +
                '<td>  <input type="text" id="fname" name="fname" size=5> </td>' +
                '<td>Data 2</td>' +
                '<td>Data 3</td>' +
              '</tr>' +
              '<tr>' +
                '<td>Data 1</td>' +
                '<td>Data 2</td>' +
                '<td>Data 3</td>' +
              '</tr>' +
              '<tr>' +
                '<td>Data 1</td>' +
                '<td>Data 2</td>' +
                '<td>Data 3</td>' +
              '</tr>' 
              
              
              
                           var div = document.createElement('div');
            div.setAttribute("id", "tbl");
            document.body.appendChild(div)
                document.getElementById("tbl").innerHTML = "<table border = '1'>" +
              '<tr>' +
                '<th> <input type="text" id="fname" name="fname" size=1> </th>' +
                '<th>Header 2</th> ' +
                '<th>Header 3</th>' +
              '</tr>' 
              
               var div = document.createElement('div');
            div.setAttribute("id", "tbl");
            document.body.appendChild(div)
                document.getElementById("tbl").innerHTML = "<table border = '1'>" +
              '<tr>' +
                '<th> <input type="text" id="fname" name="fname" size=1> </th>' +
              '</tr>' 
