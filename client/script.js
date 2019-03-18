var title = document.getElementById('title');
var lists = document.getElementById('list');
var listArray = [
    'Variables',
    'Functions',
    'Loops',
    'Conditional Statements',
    'Conditional Operators'
];

title.innerHTML = 'Title generated by javascript';

for (var i = 0; listArray.length > i; i++){

    var listArr = listArray[i];
    var list = document.createElement('li');

    if (listArr === 'Functions'){
        var bold = document.createElement('b');
        bold.innerHTML = listArr;
        list.append(bold);
    } else {
        list.innerHTML = listArr;
    }

    lists.appendChild(list);
}
