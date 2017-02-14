var districtObj = {
	selectNode:$('.diqu select'),
	createOptionFun:function(json,num,text){//json表示插入的数据,num表示第几个select
		var _this = this;
		var sel = _this.selectNode.eq(num);
		var html = '<option value="">'+text+'</option>';
		sel.html(html);
		for(var i in json){
			var optionNode = $('<option value=""></option>');//创建option节点
			optionNode.val(i);
			optionNode.text(json[i]);
			sel.append(optionNode);
		}
		
		//console.log(_this.area)
		
	},
	init:function(){
		var _this = this;
		_this.area = areaJson;
		_this.createOptionFun(_this.area.province,0,'请选择省');
		_this.selectNode.eq(0).change(function(){
			var val = $(this).val();
			//console.log(_this.area['city'][val],val)
			var cityProvince = _this.area.province[val];
			if(cityProvince=='北京' || cityProvince=='上海' || cityProvince=='重庆' || cityProvince=='天津' || cityProvince=='澳门'  || cityProvince=='香港'){
				_this.createOptionFun(_this.area['city'][val],1,'请选择区');
				_this.selectNode.eq(2).hide();
			}
			else
			{
				_this.selectNode.eq(2).show();
				_this.createOptionFun(_this.area['city'][val],1,'请选择市');
			}
			//特殊的一个
			if(cityProvince=="台湾"){
				_this.selectNode.eq(2).hide();
			}

			
		})
		_this.selectNode.eq(1).change(function(){
			var val = $(this).val();
			_this.createOptionFun(_this.area['district'][val],2,'请选择区');
		})
	}
}
districtObj.init();