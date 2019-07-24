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
    $('input[type="radio"]').on('click', function() {
        var status = $('input[name="status"]:checked').attr('data');
        var degree = $('input[name="degree"]:checked').attr('data');
        $('#total_score').val(Number(status) + Number(degree));
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
        $('input[name="status"][data="'+data.status+'"]')[0].checked = true;
        $('input[name="degree"][data="'+data.degree+'"]')[0].checked = true;
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
    data.status = $('input[name="status"]:checked').attr('data');
    data.degree = $('input[name="degree"]:checked').attr('data');
    data.total_score = Number(data.status) + Number(data.degree);
    localStorage.setItem('list', JSON.stringify(localData));
    alert('保存成功')
}