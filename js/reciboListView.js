var reciboListView = (function(){


	function show(recibos){
		$('#reciboList').html(Utils.reciboListTemplate({ recibos:recibos }));

		var cards = $('.card-body');

		// para update el PAGO
		recibos.forEach( function(element, index) {
			var card = cards.eq(index);
			var id;

			card.on("click",".checkPagado", function(){

				//id = $(this).attr('id')

				var check = $(this).prop("checked");

				if(check){
					check = "SI";
				}else{	
					check = "NO";
				}
				
				var data = {
					id:element.id,
					pagado:check
				}

				// llamo a la api
				events.publish("update-recibo", data)
			})

			card.on("click",".delete-recibo", function(){


				//llamo a la api
				events.publish("delete-recibo",element.id)

				//borro el recibo
				$(this).closest("div.card-body").remove()
				
			})

		});

		





	}

	 return {
        init: function() {
            events.subscribe('showRecibos', show);
        }
    }
})()