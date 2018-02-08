var clientListView = (function() {
    function createDiv() {
        var div = $('<div id="clienteList">');
        $('body').append(div);
        $('body').on('click', '.add', function() {
            events.publish('show-client', { cliente: null, aceptar: "Guardar cliente", title: "Añadir cliente nuevo", cerrar: "Cancelar" });
        })

    }

    function showTable(clientes) {
        $('#clienteList').html(Utils.clientListingTemplate({ clients: clientes }));
        var cont = 1
        var trs = $("table tr")
        
        clientes.forEach(function(elem, index) {
            var tr = trs.eq(cont)
            tr.on('click', '.delete', function() {

                events.publish('delete-client', elem.id)
            })
            tr.on('click', '.update', function() {
                events.publish('show-client', { cliente: elem, aceptar: "Guardar cambios", title: "Modificar cliente", cerrar: "Cancelar modificación" });
                //llamo a la api para cargar los recibos
                events.publish('get-recibos',elem.id)
                //una vez viene la api pinto los recibos
               
            })
            console.log(elem.id + " " + cont)
            cont++
        })
    }
    return {
        init: function() {
            createDiv();
            events.subscribe('get-all', showTable);
        }
    }
})()