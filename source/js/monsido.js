var monsidoBridge = (function(){


	return{

		getToken : function(){

			$.ajax({
		        url: "https://app.monsido.com/oauth/token",
		        type: "POST",
		        data: { 
		        	code: "", 
		        	client_id: "",
		        	client_secret: "",
		        	grant_type: "authorization_code",
		        	redirect_uri: "urn:ietf:wg:oauth:2.0:oob"
		        },
		        dataType: "json",
		        success: function (result) {
		        	console.log("AJAX success", result)
		            return result;
		        },
		        error: function (xhr, ajaxOptions, thrownError) {
			        alert(xhr.status);
			        alert(thrownError);
		        }
		    });
		},


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
	module.exports.monsidoBridge = monsidoBridge();
}catch(err){}

//https://app.monsido.com/api/domains/8751/pages?notifications=true&page=1&page_size=10&sort_by=priority_score&sort_dir=desc&access_token=fbf40d08947df381bb2f7ef435212dbbaa1afeffe9c6ef6ebc018f5c6172bbb3
    
