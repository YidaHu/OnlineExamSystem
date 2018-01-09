/**
 * Created by wuzhi on 2018/1/3.
 */
var app = require('express')();
var bodyParser = require('body-parser');
//管理员数据
var adminData = [
    {
        "results": [

            {
                "id":001,
                "login_name":"admin",
                "password":"admin",
                "role_id":"1",
                "school_name":"苏州科技大学",
                "department_id":"计算机学院",
                "class_name":"计算机1411",
                "real_name":"老王",
                "gender":"男",
                "wrong_question_num":100,
                "created_time":"2017-12-18",
                "update_time":"2018-01-06"
            },
            {
                "id":002,
                "login_name":"huyd",
                "password":"123456",
                "role_id":"2",
                "school_name":"清华大学",
                "department_id":"计算机学院",
                "class_name":"计算机1411",
                "real_name":"胡义达",
                "gender":"男",
                "wrong_question_num":100,
                "created_time":"2017-12-18",
                "update_time":"2018-01-06"
            },
            {
                "id":003,
                "login_name":"zhe",
                "password":"88888",
                "role_id":"2",
                "school_name":"浙江大学",
                "department_id":"计算机学院",
                "class_name":"计算机1501",
                "real_name":"小静",
                "gender":"女",
                "wrong_question_num":150,
                "created_time":"2017-12-18",
                "update_time":"2018-01-06"
            }
        ],
        "info": {
            "seed": "de714be58ddcbe07",
            "results": 10,
            "page": 1,
            "version": "1.1",
            "total":100
        }
    }
];
//专业数据
var majorData = [
    {
        "results": [

            {
                "id":001,
                "name":"计算机科学",
                "department_id":"计算机学院",
                "school_id":"苏州科技大学",
                "is_adult":true
            },
            {
                "id":002,
                "name":"环境科学",
                "department_id":"环境学院",
                "school_id":"苏州科技大学",
                "is_adult":true
            },
            {
                "id":003,
                "name":"生物科学",
                "department_id":"生物学院",
                "school_id":"苏州科技大学",
                "is_adult":true
            }
        ],
        "info": {
            "seed": "de714be58ddcbe07",
            "results": 10,
            "page": 1,
            "version": "1.1",
            "total":100
        }
    }
];
//学校数据
var schoolData = [
    {
        "results": [

            {
                "id":001,
                "school_name":"苏州科技大学",
                "teacher_num":500,
                "is_adult":true
            },
            {
                "id":002,
                "school_name":"苏州大学",
                "teacher_num":600,
                "is_adult":true
            },
            {
                "id":003,
                "school_name":"西交利物浦大学",
                "teacher_num":450,
                "is_adult":true
            }
        ],
        "info": {
            "seed": "de714be58ddcbe07",
            "results": 10,
            "page": 1,
            "version": "1.1",
            "total":100
        }
    }
];
//学院数据
var departmentData = [
    {
        "results": [

            {
                "id":001,
                "department_name":"计算机学院",
                "school_name":"苏州科技大学",
                "is_adult":true
            },
            {
                "id":002,
                "department_name":"生物学院",
                "school_name":"苏州大学",
                "is_adult":true
            },
            {
                "id":003,
                "department_name":"外语学院",
                "school_name":"西交利物浦大学",
                "is_adult":true
            },
            {
                "id":004,
                "department_name":"物理学院",
                "school_name":"东南大学",
                "is_adult":true
            },
            {
                "id":005,
                "department_name":"航天学院",
                "school_name":"北京航空航天大学",
                "is_adult":true
            },
            {
                "id":006,
                "department_name":"兵器学院",
                "school_name":"国防科技大学",
                "is_adult":true
            },
            {
                "id":007,
                "department_name":"计算机学院",
                "school_name":"苏州科技大学",
                "is_adult":true
            }
        ],
        "info": {
            "seed": "de714be58ddcbe07",
            "results": 10,
            "page": 1,
            "version": "1.1",
            "total":100
        }
    }
];
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.post('/api', function (req, res) {
    if(req.body.userName == 'admin' && req.body.password == 'admin'){
        res.json({"success":true});
    }else{
        res.json({"success":false});
    }
});
app.post('/api/admin', function (req, res) {
   res.json(adminData);
});
app.post('/api/major', function (req, res) {
   res.json(majorData);
});
app.post('/api/school', function(req, res) {
    /*optional stuff to do after success */
    res.json(schoolData);
});
app.post('/api/department', function(req, res) {
    /*optional stuff to do after success */
    res.json(departmentData);
});

app.listen(3000);