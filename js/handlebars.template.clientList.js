(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clientList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "    <tr>\r\n      <th scope=\"row\">"
    + alias2(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "</th>\r\n      <td>"
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "</td>\r\n      <td>"
    + alias2(alias3((depth0 != null ? depth0.nombres : depth0), depth0))
    + "</td>\r\n      <td>"
    + alias2(alias3((depth0 != null ? depth0.sexo : depth0), depth0))
    + "</td>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.fechaNacimiento : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "      \r\n      <td>"
    + alias2(alias3((depth0 != null ? depth0.ciudad : depth0), depth0))
    + "</td>\r\n      <td>"
    + alias2(alias3((depth0 != null ? depth0.telefono : depth0), depth0))
    + "</td>\r\n      <td><a href=\"#\" data-toggle=\"modal\" data-target=\"#client\" class=\"update\"><i class=\"far fa-edit\"></a></td>\r\n      <td><a href=\"#\" class=\"delete\"><i class=\"far fa-trash-alt\" ></a></td>\r\n      \r\n    </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "     <td>"
    + container.escapeExpression((helpers.fechaEsp || (depth0 && depth0.fechaEsp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fechaNacimiento : depth0),{"name":"fechaEsp","hash":{},"data":data}))
    + "</td>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "    <td>NO data</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<div class=\"container-fluid\">\r\n  \r\n\r\n<table class=\"table\">\r\n  <thead class=\"thead-inverse\">\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Id</th>\r\n      <th>Cliente</th>\r\n      <th>Sexo</th>\r\n      <th>Fecha de Nacimiento</th>\r\n      <th>Población</th>\r\n      <th>Teléfono</th>\r\n      <th><a href=\"#\"><i class=\"far fa-edit\"></a></th>\r\n      <th><a href=\"#\" ><i class=\"far fa-trash-alt\"></a></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.clients : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </tbody>\r\n</table>\r\n</div>\r\n\r\n";
},"useData":true});
})();