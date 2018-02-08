var reciboList = (function(){
	var url = "http://localhost/ClientesApp/API/";
	var recibos = [];
    return{
    	get: function(id) {
            $.post(url + 'recibo.php', { id: id }, function(data) {
            	data.forEach( function(element, index) {
            		recibos[index] = data[index];
            	});

                events.publish("showRecibos",data);
            }, "json")
        },
        delete: function(id){

        	
            $.post(url + "eliminarRecibo.php",{id:id},function(){
                console.log("Recibo Eliminado id = " + id)
            })
        	

        },
        update:function(data){
            /*
                data = {
                    id:id,
                    pagado:"NO"
                }
            */

            $.post(url + "actualizarRecibo.php", data, function(){
                console.log("Recibo Actualizado");
            })
           
        },
        init: function() {
            events.subscribe('get-recibos', this.get);
            events.subscribe('delete-recibo', this.delete)
            events.subscribe('update-recibo', this.update)
        },
        recibos:recibos
    }
})()