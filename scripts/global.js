var whatsappNumber='447624170993';

var base_apiUrl = "t";
var urlDeal="/webApp/system/deal";
var print_debug=true;
var languageSliced;

var class_menu;

$( document ).ready(function() {
	print_console("INIT");

	//language
	if(navigator.language){languageSliced=navigator.language.slice(0, 2);print_console("navigator.language",navigator.language);}else languageSliced="en";
	if(!languageSliced || languageSliced=="")languageSliced="en";

	if ( $( ".pg-footer" ).length ){
		$( ".pg-footer" ).load( "../../globalDOM/footer.html", function() {
			print_console("LOAD FOOTER..");

		});
	}

	if ( $( ".pg-header" ).length ){
		$( ".pg-header" ).load( "../../globalDOM/header.html", function() {
			print_console("LOAD HEADER..");
			if(class_menu)$(class_menu).addClass("active");
		});
	}

});


function print_console(text,text1,text2,text3,text4,text5,text6) {
	if(print_debug && text!=null)console.log(text);
	if(print_debug && text1!=null)console.log(text1);
	if(print_debug && text2!=null)console.log(text2);
	if(print_debug && text3!=null)console.log(text3);
	if(print_debug && text4!=null)console.log(text4);
	if(print_debug && text5!=null)console.log(text5);
	if(print_debug && text6!=null)console.log(text6);
}

function api_post(urlParameter,dataParameter) {
	print_console("Sono in api_post",urlParameter,dataParameter);
	return new Promise(function (resolve,reject) {
		try{
			$.ajax({
				url:urlParameter,
				type: "POST",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(dataParameter),
				timeout : 15000,
				success:function(result){
					print_console("api riuscita",result);
					return resolve({status:200,response:result})
				},
				error: function(jqXHR,textStatus,errorThrown){
					//descrizione jqXHR https://www.packtpub.com/mapt/book/web_development/9781782163145/13/ch13lvl1sec102/using-the-jqxhr-object
					print_console("api non riuscita",jqXHR,textStatus,errorThrown);
					if(jqXHR && jqXHR.status){
						print_console("api non riuscita - status",jqXHR.status);
						return resolve({status:jqXHR.status,response:jqXHR.responseText});
					}else{
						return reject("api "+urlParameter+" not work...");
					}
				}
			});
		}catch (error){
			console.error(error);
		}
	});
}

function api_get(url) {
	print_console("Sono in api_get",url);
	return new Promise(function (resolve,reject) {
		try{
			$.ajax({
				url:url,
				type: "GET",
				timeout : 15000,
				headers: {
					"Access-Control-Allow-Origin":"*"
				},
				success:function(result){
					print_console("api riuscita",result);
					return resolve({status:200,response:result})
				},
				error: function(jqXHR,textStatus,errorThrown){
					//descrizione jqXHR https://www.packtpub.com/mapt/book/web_development/9781782163145/13/ch13lvl1sec102/using-the-jqxhr-object
					print_console("api non riuscita",jqXHR,textStatus,errorThrown);
					if(jqXHR && jqXHR.status){
						print_console("api non riuscita - status",jqXHR.status);
						return resolve({status:jqXHR.status,response:jqXHR.responseText});
					}else{
						return reject("api "+urlParameter+" not work...");
					}
				}
			});
		}catch (error){
			console.error(error);
		}
	});
}


function awaitTimeoutDemo(timer) {
	return new Promise(function (resolve,reject) {
		setTimeout(function () {
			return resolve();
		},timer)
	})
}


function go_home() {
	// 404 su Safari
	// location.replace("index.html"); //don't use location.href perchè se preme indietro lo riporta nei contatti...
	location.replace("index.html"); //don't use location.href perchè se preme indietro lo riporta nei contatti...
}

