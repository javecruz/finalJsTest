var clientView = (function() {
    var modal = $("#client")

    function addEvents() {
        modal.on('click', '#aceptar', function() {
            var _client = Utils.QueryStringToJSON($('form').serialize()+ "&submit=1");
            if (_client.id > 0) events.publish('update-client', _client);
            else events.publish('create-client', _client);
            $("#client").modal('toggle')
        })
    }

    function showModal(data) {
        var div = $('#client div div');
        div.html(Utils.clientTemplate(data));
    }
    return {
        init: function() {
            addEvents();
            events.subscribe('show-client', showModal);
        }
    }
})()