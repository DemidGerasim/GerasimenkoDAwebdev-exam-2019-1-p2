var d = document;
var date;
var description;
var a = 0;
function addRow()
{
    // считываем значени¤ с формы
    date = d.getElementById('date').value;
    description = d.getElementById('description').value;

    // находим нужную таблицу
    var tbody = d.getElementById('tab1').getElementsByTagName('TBODY')[0];

    // создаем строку таблицы и добавляем ее
    var row = d.createElement("TR");
    tbody.appendChild(row);

    // создаем ячейки в вышесозданной строке
    // и добавляем их
    var td1 = d.createElement("TD");
    var td2 = d.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);

    // наполняем ячейки
    td1.innerHTML =a+' ' + date+' '+description +'<a href="#" date-action="delete">X</a>';
    a++;

    return false;
}

document.addEventListener('click', function(event) {

    if (event.target.dataset!= undefined) { 
      event.target
    }

  });
