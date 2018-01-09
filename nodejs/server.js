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

app.listen(3000);