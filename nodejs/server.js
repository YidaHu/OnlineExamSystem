/**
 * Created by wuzhi on 2018/1/3.
 */
var app = require('express')();
var bodyParser = require('body-parser');
//成绩数据
var courseResultData = [
    {
        "results": [

            {
                "id":001,
                "school_name":"苏州科技大学",
                "student_name":"胡义达",
                "class_name":"计算机1411",
                "course_name":"Python",
                "results":"100",
            },
            {
                "id":002,
                "school_name":"苏州科技大学",
                "student_name":"张三",
                "class_name":"计算机1411",
                "course_name":"Python",
                "results":"99",
            },
            {
                "id":003,
                "school_name":"苏州科技大学",
                "student_name":"李四",
                "class_name":"计算机1411",
                "course_name":"Python",
                "results":"98",
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
//班级数据
var classData = [
    {
        "results": [

            {
                "id":001,
                "name":"计算机1411",
                "school_name":"苏州科技大学",
                "department_name":"计算机学院",
                "major_id":"计算机科学与技术"
            },
            {
                "id":002,
                "name":"生物1411",
                "school_name":"上海交通大学",
                "department_name":"生物学院",
                "major_id":"生物技术"
            },
            {
                "id":003,
                "name":"临床医学1511",
                "school_name":"苏州大学",
                "department_name":"医学院",
                "major_id":"临床医学"
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
//课程数据
var courseData = [
    {
        "results": [

            {
                "id":001,
                "course_name":"Java编程技术",
                "school_name":"苏州科技大学"
            },
            {
                "id":002,
                "course_name":"Python基础教程",
                "school_name":"上海交通大学"
            },
            {
                "id":003,
                "course_name":"机器学习",
                "school_name":"苏州大学"
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

//成绩分布数据
var resultData = [
    {
        "results": [

            {
                "id":001,
                "course_name":"人工智能",
                "school_name":"苏州科技大学"
            },
            {
                "id":002,
                "course_name":"Python基础教程",
                "school_name":"上海交通大学"
            },
            {
                "id":003,
                "course_name":"机器学习",
                "school_name":"苏州大学"
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

//学校查询
var school_all = [
    {
        "results": [

            {
                "id":1,
                "school_name":"苏州科技大学"
            },
            {
                "id":2,
                "school_name":"上海交通大学"
            },
            {
                "id":3,
                "school_name":"苏州大学"
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

//根据学校查询学院
var school2department = [
    {
        "results": [

            {
                "id":001,
                "department_name":"电子学院"
            },
            {
                "id":002,
                "department_name":"计算机学院"
            },
            {
                "id":003,
                "department_name":"医学院"
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
//查询学校
app.get('/api/school_all', function (req, res) {
   res.json(school_all);
});
//根据学校查询学院
app.post('/api/school2department', function (req, res) {
    console.log(req.body.school['school_name']);
   if(req.body.school['school_name'] == '苏州科技大学'){
        res.json(school2department);
        console.log('yes')
    }else{
        res.json("");
    }
});


app.post('/api/courseResult', function (req, res) {
   res.json(courseResultData);
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
app.post('/api/class', function (req, res) {
   res.json(classData);
});
app.post('/api/course', function (req, res) {
   res.json(courseData);
});


//数据分析
app.post('/api/getAnalysis', function (req, res) {
    if(req.body.department == '计算机学院' && req.body.student == '胡义达'){
        res.json({"success":true});
    }else{
        res.json({"success":false});
    }
});

app.listen(3000);