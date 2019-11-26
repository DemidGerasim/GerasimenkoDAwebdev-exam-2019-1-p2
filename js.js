var date;
var description;

function add()
{
    // считываем значени¤ с формы
    date = d.getElementById('date').value;
    description = d.getElementById('description').value;

    // находим нужную таблицу
    var tbody = d.getElementById('t1').getElementsByTagName('TBODY')[0];

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
    td1.innerHTML = date+' '+description;
}