var data = {};
var localData = localStorage.getItem('list');
localData = localData && JSON.parse(localData);
if (!localData) {
    window.location.href = 'index.html';
}
init();

function init() {
    initData(localData);
    $('#save').on('click', function() {
        save();
    });
}

function initData() {
    var enter_num = localStorage.getItem('enter_num');
    if (enter_num) {
        for (var i = 0; i < localData.length; i++) {
            if (localData[i].enter_num == enter_num) {
                data = localData[i];
                break;
            }
        }
        for (var id in data) {
            setVal(id, data[id]);
        }
    } else {
        window.location.href = 'index.html';
    }
}

function preZero(num) {
    return num < 10 ? '0' + num : num;
}

function getVal(id) {
    return $('#' + id).val();
}

function setVal(id, value) {
    $('#' + id).val(value);
}

function save() {
    for (var id in data) {
        if ($('#' + id).length) {
            data[id] = getVal(id);
        }
    }
    localStorage.setItem('list', JSON.stringify(localData));
    alert('保存成功');
}