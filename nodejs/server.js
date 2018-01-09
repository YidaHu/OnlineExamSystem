/**
 * Created by wuzhi on 2018/1/3.
 */
var app = require('express')();
var bodyParser = require('body-parser');
var tableData = [
    {
        "results": [

            {
                "id":001,
                "name":"生物技术",
                "department_id":"计算机学院",
                "school_id":"苏州科技大学",
                "is_adult":true
            },
            {
                "id":002,
                "name":"生物技术",
                "department_id":"计算机学院",
                "school_id":"苏州科技大学",
                "is_adult":true
            },
            {
                "id":003,
                "name":"生物技术",
                "department_id":"计算机学院",
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
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.post('/api', function (req, res) {
    if(req.body.userName == 'admin' && req.body.password == 'admin'){
        res.json({"success":true});
    }else{
        res.json({"success":false});
    }
});
app.post('/api/table', function (req, res) {
   res.json(tableData);
});
app.post('/api/school', function(req, res) {
    /*optional stuff to do after success */
    res.json(schoolData);
});

app.listen(3000);