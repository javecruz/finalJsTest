var clientList = (function() {
    var url = "http://localhost/ClientesApp/API/"
    var clientes = []
    return {
        getAll: function() {
            $.post(url + 'consulta.php', { submit: 1 }, function(data) {
                data.forEach(function(elem) {
                    clientes[elem.id] = Client(elem)
                })
                events.publish("get-all", clientes);
                events.publish('show-client', { cliente: null, aceptar: "Guardar cliente", title: "Añadir cliente nuevo", cerrar: "Cancelar" });
            }, "json")
        },
        get: function(id) {
            $.post(url + 'actualizar.php', { id: id }, function(data) {
                events.publish("get-client", data);
            }, "json")
        },
        delete: function(id) {
            $.post(url + 'eliminar.php', { id: id }, function(data) {
                clientes.splice(id, 1);
                events.publish("get-all", clientes);
            }, "json")
        },
        update: function(json) {
            json.submit = 1
            $.post(url + 'actualizar.php', json, function(data) {
                //hay que actualizar el array de clientes
                json.id = data.id
                clientes[json.id] = Client(json)
                events.publish("get-all", clientes);
            }, "json")
        },
        create: function(json) {
            json.submit = 1
            $.post(url + 'nuevo.php', json, function(data) {
                json.id = data.id
                clientes[json.id] = Client(json)
                events.publish("get-all", clientes);
            }, "json")
        },
        init: function() {
            events.subscribe('update-client', this.update);
            events.subscribe('create-client', this.create);
            events.subscribe('delete-client', this.delete);
        },
        clientes: clientes
    };
})()