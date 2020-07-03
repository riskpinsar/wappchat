

$( document ).ready(function() {
	print_console("i'm on sendDeal");

	$( "#bottone_richiesta" ).show();
	$( "#loading_richiesta" ).hide();
	$( "#alert_richiesta_ok" ).hide();
	$( "#alert_richiesta_ko" ).hide();


	//per form contatti
	$( "#contact-form" ).submit( function( event ) {
		print_console("i'm on sendDeal EVENT");
		event.preventDefault();//cos� non parte la funzione di default del form, il form rimane per fare i controlli che tutto sia ok
		event.stopPropagation();
		print_console('form form-contatti');

		$( "#loading_richiesta" ).show();
		$( "#bottone_richiesta" ).hide();

		// $( "#title_esito_invio" ).html('INVIO EMAIL');
		// $( "#testo_esito_invio" ).html('Invio in corso...'+'<img src="images/loading.gif">');
		print_console("languageSliced",languageSliced);

		api_deal($('#form-email').val(),languageSliced,$('#form-msg').val()).then(function () {
			awaitTimeoutDemo(500).then(function () {
				$( "#bottone_richiesta" ).hide();
				$( "#loading_richiesta" ).hide();
				$( "#alert_richiesta_ok" ).show();
				$( "#alert_richiesta_ko" ).hide();
				//conversioni_utenti_demo();
				setTimeout(function () {
					//gtag_report_conversion("https://app.trackingram.chat/index.html?landing=true");
					location.replace("../../thanks-deal.html"); //don't use location.href perchè se preme indietro lo riporta nei contatti...
				},200);
			})
		}).catch(function () {
			awaitTimeoutDemo(22).then(function () {
				$( "#bottone_richiesta" ).hide();
				$( "#loading_richiesta" ).hide();
				$( "#alert_richiesta_ok" ).hide();
				$( "#alert_richiesta_ko" ).show();
			})
		});
	});
});
function api_deal(email,language,request) {
	try {
		return new Promise(function (resolve,reject) {
			print_console("i'm on api_deal")
			api_post(base_apiUrl+urlDeal,
				{
					"language":language,
					"email":email?email.toString():"",
					"request":request?request.toString():""
				}).then(function (response) {
				print_console("response api_deal",response,response.status);
				if(response && response.status==200){
					return resolve();
				}
				return reject();
			}).catch(function (error) {
				print_console("error api_deal",error)
				return reject();
			});
		});
	}catch (error){
		print_console("error api_deal",error);
	}

}
