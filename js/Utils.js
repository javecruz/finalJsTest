Utils = (function() {
    function clientTemplate(data) {
        return Handlebars.templates.client(data)
    }

    function clientListingTemplate(data) {
        this.positionCounter = 1;
        return Handlebars.templates.clientList(data)
    }

    function reciboListTemplate(data){
        return Handlebars.templates.reciboList(data);
    }

    function QueryStringToJSON(query) {
        var pairs = query.split('&');
        var result = {};
        pairs.forEach(function(pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        });
        return JSON.parse(JSON.stringify(result));
    }
    return {
        QueryStringToJSON: QueryStringToJSON,
        clientListingTemplate: clientListingTemplate,
        clientTemplate: clientTemplate,
        positionCounter: 1,
        reciboListTemplate:reciboListTemplate
    }
})()