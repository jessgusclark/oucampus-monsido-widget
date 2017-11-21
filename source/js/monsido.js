var monsido = (function(){


	return{

		getPrioritizedContent : function(token, domain){

			var url = "https://app.monsido.com/api/domains/" + domain + "/pages?notifications=true&page=1&page_size=10&sort_by=priority_score&sort_dir=desc&access_token=" + token

			$.getJSON(url, function( data ) {
				return data;
			});
		}

	}

})

// for testing:
try{
	module.exports.monsido = monsido();
}catch(err){}

//https://app.monsido.com/api/domains/8751/pages?notifications=true&page=1&page_size=10&sort_by=priority_score&sort_dir=desc&access_token=fbf40d08947df381bb2f7ef435212dbbaa1afeffe9c6ef6ebc018f5c6172bbb3
    
