$(function(){
	$('#sure').css('height',$(document).height()+'px');
	$('#sure').css('width',$(document).width()+'px');
	var schedule = 0; //题目数量
	var keyword={};  //答案
	var selectsObj = {}; //记录多选题选择数量
	var markObj = {} //记录标记
	var titleNum = 0;
	var id = null; //纠错题的id
	var errorWord = ''; //纠错题的错误
		$.ajax({
			type:"get",
			url:"../../json/select.json",
			async:true
		}).then(function(data){
			//单题目
			var html = template('selectHtml',data);
			document.getElementById('con_select').innerHTML = html;
			//多选题
			html = template('selectsHtml',data);
			document.getElementById('con_selects').innerHTML = html;
			//对应的选择序号
				//单选
			html = template('orderHtml',data);
			document.getElementById('select').innerHTML = html;
				//多选
			html = template('ordersHtml',data);
			document.getElementById('selects').innerHTML = html;	
			//进度
			schedule = data.selectList.length + data.selectsList.length;
			$("#scheduNum").html( titleNum +'/' + schedule);
			
			//答题(单)监听
			$('#con_select .con_key').on('click',function(){
				if(!$(this).parent().find('.y').length){
					if(titleNum == schedule)
						return ;
					titleNum++;
					$("#scheduNum").html( titleNum +'/'+schedule);
					$('.scheduleLength').css('width',change( titleNum /schedule*250));
				}
				$(this).siblings('div').children('span').eq(0).removeClass('y');
				$(this).children('span').eq(0).addClass('y');
				keyword[$(this).parent().attr('name')] = $(this).children('span').eq(0).html();
				$('#select a').eq($(this).parent().attr('name')-1).addClass('y');
				
			})
			//答题(多)监听
			var values;
			$('#con_selects .con_key').on('click',function(){
				var exsitClass = $(this).children('span').eq(0).hasClass('y'); //y类
				if(!selectsObj[$(this).parent().attr('name')]){
					//初始化该题的选择答案的数量
					selectsObj[$(this).parent().attr('name')] = 1;
					keyword[$(this).parent().attr('name')] = [];
					keyword[$(this).parent().attr('name')].push($(this).children('span').eq(0).html());
					$('#selects a').eq($(this).parent().attr('name')-1-data.selectList.length ).addClass('y');
					$(this).children('span').eq(0).addClass('y');
					titleNum++;
					$("#scheduNum").html( titleNum +'/'+schedule);
					if(titleNum > schedule){
						return ;
					}else if(titleNum < schedule){
						$('.scheduleLength').css('width',change( titleNum /schedule*250));
					}else{
						$('.scheduleLength').css('width','250px');
					}
					
				}else{
					values = keyword[$(this).parent().attr('name')];
					//只有一个选项、并且应景选择过了(fanzheng)
						if(exsitClass && selectsObj[$(this).parent().attr('name')]!=1){
							selectsObj[$(this).parent().attr('name')] = selectsObj[$(this).parent().attr('name')] -  1;
							values = removeByValue(values,$(this).children('span').eq(0).html());
							$(this).children('span').eq(0).removeClass('y');
						}else if(!exsitClass){
							selectsObj[$(this).parent().attr('name')] = selectsObj[$(this).parent().attr('name')]+1;
							values = values.push($(this).children('span').eq(0).html());
							$(this).children('span').eq(0).addClass('y');
						}
				}
				console.log(keyword)
			})
			var markIndex,selectId,markIndex = 0;
			//标记
			$('.click_mark').on('click',function(){
				markIndex = $(this).parent().attr('name');
				selectId = markIndex<=data.selectList.length?'#select a':'#selects a';
				markIndex = markIndex<=data.selectList.length?(markIndex-1):(markIndex-1-data.selectList.length);
				if( !markObj[markIndex] ){
					markObj[markIndex] = true;
					$(selectId).eq(markIndex).addClass('marks');
				}else{
					markObj[markIndex] = false;
					$(selectId).eq(markIndex).removeClass('marks');
				}
			});
			//纠错
			$('.click_error').on('click',function(){
			    layer.open({
			      type: 1,
			      title:"纠错试题",
			      area: ['500px', '280px'],
			      shadeClose: true, //点击遮罩关闭
			      content:$('.mistake').html()
			    });
				id = $(this).parent().attr('name');
				$('#sure').css('display','block');
				$('#titleId').val('第'+ id +'题');
			})
			$('#submit').on('click',function(){
				if(!$('#titleError').val().trim())
				return ;
				//此处发送请求后续在写
				$('#sure').css('display','none');
			})
			//提交答案
			$('#submitTile').on('click',function(){
				if(titleNum == schedule){
					layer.open({
					  title: '答案提交'
					  ,content: '考试已完成，你的得分为100分'
					}); 
				}else{
					layer.open({
					  title: '答题提醒'
					  ,content: '您还有题目未完成'
					});     
  
				}
			})
			
		});
	//设置内容右侧
	var height = $(document).height();
	var scrolltopHeight = $(document).scrollTop();
	$(document).on('scroll',function(){
		scrolltopHeight = $(document).scrollTop();
		if(scrolltopHeight>100){
			$('.con_right').addClass('con_right_scroll')		
		}else{
			$('.con_right').removeClass('con_right_scroll')
		}
	})
	//多选题去除
	function removeByValue(arr, val) {
	  for(var i=0; i<arr.length; i++) {
	    if(arr[i] == val) {
	      arr.splice(i, 1);
	      break;
	    }
	  }
	}
	//小数转换为百分比
	function change(a){
		return a.toFixed(2)+'px';
	}
	
})
