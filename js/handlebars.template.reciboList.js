(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['reciboList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "    <div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title\">Importe: "
    + alias2(alias1((depth0 != null ? depth0.importe : depth0), depth0))
    + " €</h4>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">"
    + alias2(alias1((depth0 != null ? depth0.concepto : depth0), depth0))
    + "</h6>\r\n    <p class=\"card-text\">\r\n      Fecha recibo: "
    + alias2((helpers.fechaEsp || (depth0 && depth0.fechaEsp) || alias4).call(alias3,(depth0 != null ? depth0.fecha : depth0),{"name":"fechaEsp","hash":{},"data":data}))
    + "\r\n    </p>\r\n    \r\n    <div class=\"custom-control custom-checkbox\">\r\n  <input type=\"checkbox\" class=\"custom-control-input checkPagado\" id=\"checkPagado-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" "
    + alias2((helpers.pagado || (depth0 && depth0.pagado) || alias4).call(alias3,(depth0 != null ? depth0.pagado : depth0),"SI",{"name":"pagado","hash":{},"data":data}))
    + ">\r\n  <label class=\"custom-control-label\" for=\"checkPagado-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">Pagado</label>\r\n</div>\r\n<a href=\"#!\" class=\"card-link delete-recibo\" > Eliminar</a>\r\n  </div>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<div class=\"container-fluid\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.recibos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n\r\n";
},"useData":true});
})();