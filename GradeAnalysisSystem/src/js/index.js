/**
 * Created by huyd on 2017/12/7.
 */
//JavaScript代码区域
layui.use('element', function () {
    var element = layui.element;

});
layui.use('form', function () {
    var form = layui.form;

    //监听提交
    form.on('submit(formDemo)', function (data) {
        // layer.msg(JSON.stringify(data));
        $(".searchTable").removeClass("searchTable");
        return false;
    });
});
$(function () {
    //选考排名
    var chooseRanging1 = echarts.init(document.getElementById('chooseRanging1'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '分数段'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["0-20", "20-40", "40-60", "60-80", "80-100"]
        },
        yAxis: {},
        series: [{
            name: '分段',
            type: 'bar',
            data: [5, 20, 36, 10, 10]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    chooseRanging1.setOption(option);

    var chooseRanging2 = echarts.init(document.getElementById('chooseRanging2'));
    var option = {
        title: {
            text: '等级占比',
            subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['优秀', '良好', '及格', '不及格']
        },
        series: [
            {
                name: '等级占比',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 10, name: '优秀-10'},
                    {value: 310, name: '良好-310'},
                    {value: 234, name: '及格-234'},
                    {value: 135, name: '不及格-135'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    chooseRanging2.setOption(option);
    var chooseRanging3 = echarts.init(document.getElementById('chooseRanging3'));
    var option = option = {
        title : {
            text: '年级区间分区',
            // subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'right',
            y : 'bottom',
            data:['0-60','60-80','80-90','90-100']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'难度面积',
                type:'pie',
                radius : [30, 110],
                center : ['60%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'0-60'},
                    {value:5, name:'60-80'},
                    {value:15, name:'80-90'},
                    {value:25, name:'90-100'}
                ]
            }
        ]
    };
    chooseRanging3.setOption(option);
    var chooseRanging4 = echarts.init(document.getElementById('chooseRanging4'));
    var option = option = {
        title : {
            text: '专业区间分区',
            // subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'right',
            y : 'bottom',
            data:['0-60','60-80','80-90','90-100']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'难度面积',
                type:'pie',
                radius : [30, 110],
                center : ['60%', '50%'],
                roseType : 'area',
                data:[
                    {value:55, name:'0-60'},
                    {value:57, name:'60-80'},
                    {value:65, name:'80-90'},
                    {value:25, name:'90-100'}
                ]
            }
        ]
    };
    chooseRanging4.setOption(option);
    var chooseRanging5 = echarts.init(document.getElementById('chooseRanging5'));
    var option = option = {
        title : {
            text: '班级区间分区',
            // subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'right',
            y : 'bottom',
            data:['0-60','60-80','80-90','90-100']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'难度面积',
                type:'pie',
                radius : [30, 110],
                center : ['60%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'0-60'},
                    {value:54, name:'60-80'},
                    {value:15, name:'80-90'},
                    {value:25, name:'90-100'}
                ]
            }
        ]
    };
    chooseRanging5.setOption(option);
    //专业统计
    var fachstatistik1 = echarts.init(document.getElementById('fachstatistik1'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '13-02期专业统计'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["0-20", "20-40", "40-60", "60-80", "80-100"]
        },
        yAxis: {},
        series: [{
            name: '分段',
            type: 'bar',
            data: [5, 20, 36, 10, 10]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    fachstatistik1.setOption(option);

    var fachstatistik2 = echarts.init(document.getElementById('fachstatistik2'));
    var option = {
        title: {
            text: '等级占比',
            subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['优秀', '良好', '及格', '不及格']
        },
        series: [
            {
                name: '等级占比',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 10, name: '优秀-10'},
                    {value: 310, name: '良好-310'},
                    {value: 234, name: '及格-234'},
                    {value: 135, name: '不及格-135'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    fachstatistik2.setOption(option);
    //质量分析
    var qualityAna1 = echarts.init(document.getElementById('qualityAna1'));
    var option = {
        title: {
            text: '***专业科目质量分析',
            subtext: '统计分析'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data:['最高气温','最低气温']
            data: []
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0-20', '20-40', '40-60', '60-80', '80-100']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 人'
            }
        },
        series: [
            {
                name: '当前人数',
                type: 'line',
                data: [11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    qualityAna1.setOption(option);
    //快捷统计
    var quickStatistics1 = echarts.init(document.getElementById('quickStatistics1'));
    var option = {
        title: {
            text: 'java成绩分析',
            x: 'right',
        },
        tooltip: {},
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['年级平均值', '班级平均值']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5],
                    margin: 5
                }
            },
            indicator: [
                {name: '1班', max: 6500},
                {name: '2班', max: 16000},
                {name: '3班', max: 30000},
                {name: '4班', max: 38000},
                {name: '5班', max: 52000},
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000],
                    name: '年级平均值'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000],
                    name: '班级平均值'
                }
            ]
        }]
    };
    quickStatistics1.setOption(option);
    //综合统计
    var generalStatistics1 = echarts.init(document.getElementById('generalStatistics1'));
    var option = option = {
        title: {
            text: '***测试得分率'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: []
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7','8','9','10' ]
        },
        yAxis: {
            type: 'value'
        },
        label:{normal: {
            show: true
        }},
        series: [
            {
                name: '得分率',
                type: 'line',
                stack: '得分率',
                data: [0.1,0.6,0.5,0.8,1,0.3,0.6,0.7,0.4,0.1 ]
            }
        ]
    };
    generalStatistics1.setOption(option);
    var generalStatistics2 = echarts.init(document.getElementById('generalStatistics2'));
    var option = {
        title:{
            text:"需要讲的题目"
        },
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : [1, 3, 5, 6, 8, 11, 14],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'错误人数',
                type:'bar',
                barWidth: '60%',
                data:[1, 3, 5, 6, 8, 11, 14]
            }
        ]
    };
    generalStatistics2.setOption(option);
    var generalStatistics3 = echarts.init(document.getElementById('generalStatistics3'));
    var option = option = {
        title : {
            text: '试题分布',
            // subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'right',
            y : 'bottom',
            data:['难度1','难度2','难度3','难度4','难度5','难度6']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'难度面积',
                type:'pie',
                radius : [30, 110],
                center : ['60%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'难度1'},
                    {value:5, name:'难度2'},
                    {value:15, name:'难度3'},
                    {value:25, name:'难度4'},
                    {value:20, name:'难度5'},
                    {value:35, name:'难度6'},
                ]
            }
        ]
    };
    generalStatistics3.setOption(option);
})

//table初始化
// $(function(){

    // //1.初始化Table
    // var oTable = new TableInit(url,columns);
    // oTable.Init();
    //
    // //2.初始化Button的点击事件
    // var oButtonInit = new ButtonInit();
    // oButtonInit.Init();
// })
//信息管理
function manager(value){
    $('.table-striped').html('')
    $(".modules").css("display", "none");
    $('#manage').css('display','block');
    $('#canvas').css('display','none');
    var url = './src/json/g1.json';
    var columns = [];
    if(value == 'xueyuan') {
        columns = [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号'
            }, {
                field: 'college ',
                title: '学院'
            }, {
                field: 'leader',
                title: '领导'
            }, {
                field: 'beginTime',
                title: '创建时间'
            }, {
                field: 'endTime',
                title: '更新时间'
            }, {
                field: 'des',
                title: '描述'
            }
        ];
    }else if(value == 'banji'){
        columns = [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号'
            }, {
                field: 'college ',
                title: '学院'
            }, {
                field: 'banji',
                title: '班级'
            },{
                field:'leader',
                title:'班主任'
            },
            {
                field: 'beginTime',
                title: '创建时间'
            },{
                field:'endTime',
                title:'更新时间'
            },{
                field:'des',
                title:'描述'
            }
        ];
    }else if(value == 'kecheng'){
        columns = [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号'
            }, {
                field: 'college ',
                title: '学院'
            }, {
                field: 'kecheng',
                title: '课程'
            }, {
                field: 'beginTime',
                title: '创建时间'
            },{
                field:'endTime',
                title:'更新时间'
            },{
                field:'des',
                title:'描述'
            }
        ];
    }else if(value == 'jiaoshi'){
        columns = [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号'
            }, {
                field: 'college ',
                title: '学院'
            }, {
                field: 'jiaoshi',
                title: '老师'
            }, {
                field: 'beginTime',
                title: '创建时间'
            },{
                field:'endTime',
                title:'更新时间'
            },{
                field:'des',
                title:'描述'
            }
        ];
    }else{
        columns = [
            {
                checkbox: true
            }, {
                field: 'id',
                title: '序号'
            }, {
                field: 'college ',
                title: '学院'
            }, {
                field: 'banji',
                title: '班级'
            },{
                field:'leader',
                title:'班主任'
                },
            {
                field: 'beginTime',
                title: '创建时间'
            },{
                field:'endTime',
                title:'更新时间'
            },{
                field:'des',
                title:'描述'
            }
        ];
    }
    //1.初始化Table
    var oTable = new TableInit(url,columns);
    oTable.Init();

    //2.初始化Button的点击事件
    var oButtonInit = new ButtonInit();
    oButtonInit.Init();

}

var TableInit = function (url,columns) {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        console.log(columns,'-')
        $('#tb_departments').bootstrapTable({
            url: url,         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            columns:columns
            // columns: [{
            //     checkbox: true
            // }, {
            //     field: 'Name',
            //     title: '部门名称'
            // }, {
            //     field: 'ParentName',
            //     title: '上级部门'
            // }, {
            //     field: 'Level',
            //     title: '部门级别'
            // }, {
            //     field: 'Desc',
            //     title: '描述'
            // }, ]
        });
        $('#tb_departments').bootstrapTable('refresh');
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            departmentname: $("#txt_search_departmentname").val(),
            statu: $("#txt_search_statu").val()
        };
        return temp;
    };
    return oTableInit;
};


var ButtonInit = function () {
    var oInit = new Object();
    var postdata = {};

    oInit.Init = function () {
        //初始化页面上面的按钮事件
    };

    return oInit;
};


//链接
function skip(value) {
    $('#manage').css('display','none');
    $(".modules").css("display", "none");
    if (value == 'kongzhitai') {
        $('#canvas').css("display", "block");
        return;
    }
    $('#canvas').css("display", "none");
    $(value).css("display", "block");
}
$('#btn_add').click(function () {
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.open({
            title:'信息添加',
            skin: 'demo-class',
            type: 1,
            content: $('#ss') //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
        });
    });
})