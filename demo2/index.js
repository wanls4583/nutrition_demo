var localData = localStorage.getItem('list2');
localData = localData && JSON.parse(localData);
if (!localData) {
    localData = [];
    for (var i = 0; i < 10; i++) {
        var obj = {
            enter_num: Mock.Random.string('0123456789', 4, 4),
            name: Mock.Random.cfirst() + Mock.Random.clast(),
            department: '营养科',
            area: '营养区',
            bed_num: Mock.Random.string('0123456789', 4, 4),
            sex: Mock.Random.string('男女', 1, 1),
            height: '1' + Mock.Random.string('5678', 2, 2) + 'cm',
            weight: '5' + Mock.Random.string('0123456789', 1, 1) + 'kg',
            id_card: '4' + Mock.Random.string('0123456789', 15, 20),
            address: Mock.Random.province() + Mock.Random.city(),
            phone: '13' + Mock.Random.string('0123456789', 9, 9),
            history: '无',
            status: 0,
            degree: 0,
            total_score: 0,
            executor: Mock.Random.cfirst() + Mock.Random.clast(),
            nrs_result: '',
            diagnose_name: Mock.Random.cfirst() + Mock.Random.clast(),
            diagnose_result: '',
            jilu_nickname: '',
            jilu_name: Mock.Random.cfirst() + Mock.Random.clast(),
            jilu_result: ''
        }
        var age = Mock.Random.integer(16, 40);
        obj.age = age;
        obj.birth = (2019 - age) + '-' + preZero(Mock.Random.integer(1, 12)) + '-' + preZero(Mock.Random.integer(1, 29));
        obj.enter_date = '2017' + '-' + preZero(Mock.Random.integer(1, 4)) + '-' + preZero(Mock.Random.integer(1, 29));
        obj.leave_date = '2017' + '-' + preZero(Mock.Random.integer(5, 12)) + '-' + preZero(Mock.Random.integer(1, 29));
        obj.nrs_date = '2017' + '-' + preZero(Mock.Random.integer(1, 12)) + '-' + preZero(Mock.Random.integer(1, 29));
        obj.diagnose_date = '2017' + '-' + preZero(Mock.Random.integer(1, 12)) + '-' + preZero(Mock.Random.integer(1, 29));
        obj.jilu_date = '2017' + '-' + preZero(Mock.Random.integer(1, 12)) + '-' + preZero(Mock.Random.integer(1, 29));
        localData.push(obj)
    }
    localStorage.setItem('list2', JSON.stringify(localData));
}
init();

function init() {
    initData(localData);
    $('#search').on('click', function() {
        var name = getVal('name');
        var enter_num = getVal('enter_num');
        var result = [];
        for (var i = 0; i < localData.length; i++) {
            var item = localData[i];
            if ((!name || name && item.name.indexOf(name) > -1) && (!enter_num || enter_num && item.enter_num.indexOf(enter_num) > -1)) {
                result.push(item);
            }
        }
        initData(result);
    })
}

function initData(list) {
    var $table = $('#list');
    var tr = '<tr>\
                <th>入院时间</th>\
                <th>入院号</th>\
                <th>姓名</th>\
                <th>年龄</th>\
                <th>科室</th>\
                <th>病区</th>\
                <th>床号</th>\
                <th>病人信息</th>\
            </tr>';
    for (var i = 0; i < list.length; i++) {
        tr += '<tr>';
        tr += '<td>' + list[i].enter_date + '</td>';
        tr += '<td>' + list[i].enter_num + '</td>';
        tr += '<td>' + list[i].name + '</td>';
        tr += '<td>' + list[i].age + '</td>';
        tr += '<td>' + list[i].department + '</td>';
        tr += '<td>' + list[i].area + '</td>';
        tr += '<td>' + list[i].bed_num + '</td>';
        tr += '<td><a href="#" onclick="gotoDangan(\''+list[i].enter_num+'\');">病人信息</a></td>';
        tr += '</tr>'
    }
    $table.html(tr);
}

function preZero(num) {
    return num < 10 ? '0' + num : num;
}

function getVal(id) {
    return $('#' + id).val();
}

function gotoDangan(enter_num) {
	localStorage.setItem('enter_num2', enter_num);
	location.href = 'dangan.html';
}