var a = "0";
var iter = "1"

function addRow() {
    // считываем значения с формы
    var name = document.getElementById('Date').value;
    var last = document.getElementById('description').value;

    // Если не пустые то
    // Если не пустые то
    if (name && last) {
        // id++
        a = +a + +iter;

        var tr = document.createElement('tr'); // создаем строку

        // создаем ячейки
        var td0 = document.createElement('td');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        // создаем Node текста для добавления в детей
        var text0 = document.createTextNode(a);
        var text1 = document.createTextNode(name);
        var text2 = document.createTextNode(last);

        // создаем кнопку и удаление с сигналом 
        var text3 = document.createElement("button");
        var buttext = document.createTextNode("Удалить");
        var atr = document.createAttribute('onclick');


        // пихаем все в кнопку
        atr.value = 'deleteRow(this);';
        text3.appendChild(buttext);
        text3.setAttributeNode(atr);

        // добавляем 
        td0.appendChild(text0);
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);

        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        // щётчик
        token(1);
        // получаем элементы и потом добавляем в таблицу
        var table = document.getElementById('table');
        table.appendChild(tr);
    }
}

function delAll() {
    // получаем значения из таблици
    var table = document.getElementById('table');
    // щётчик
    token(0);
    // проходимся циклом с конца и удаляем
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex; // получаем индекс удаляемой строки 
    document.getElementById("table").deleteRow(i); // удаляем
    // щётчик
    token(2);
}

var rez;
var n1e = 1;
function token(count) {
    // получаем значение
    var n1e = document.querySelector('input[name="n1"]').value;

    // условие
    if (count == 1){
    rez = +n1e + 1; // +
    }
    else if (count == 2) {
        rez = +n1e - 1; // -
    } else {
        rez = 0; // 0
    }
    // выводим
    var res_e = document.querySelector('input[name="n1"]');
    res_e.value = rez;
}