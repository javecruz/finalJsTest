(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['client'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " value=\""
    + container.escapeExpression((helpers.fecha || (depth0 && depth0.fecha) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.fechaNacimiento : stack1),{"name":"fecha","hash":{},"data":data}))
    + "\"\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                            value=''\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalVerticalLabel\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">×</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form>\r\n                        <input type=\"hidden\" class=\"form-control\" id=\"cliente_id\" name=\"id\" value="
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.id : stack1), depth0))
    + ">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"nombres\">Nombre</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"nombres\" name=\"nombres\" placeholder=\"Nombre y apellidos\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.nombres : stack1), depth0))
    + "\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"poblacion\">Ciudad</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"ciudad\" name=\"ciudad\" placeholder=\"Poblacion\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.ciudad : stack1), depth0))
    + "\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                             <label for=\"sex\">Sexo</label>\r\n                         </div>\r\n                         \r\n                            <div class=\"form-check form-check-inline col-5\">\r\n                               \r\n                                <label class=\"form-check-label\" for=\"sex\"><input class=\"form-check-input\" type=\"radio\" id=\"sexo\" value=\"H\" name=\"sexo\" "
    + alias4((helpers.sex || (depth0 && depth0.sex) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.sexo : stack1),"H",{"name":"sex","hash":{},"data":data}))
    + ">Hombre</label>\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline col-5\">\r\n                                \r\n                                <label class=\"form-check-label\" for=\"sex\"><input class=\"form-check-input\" type=\"radio\" id=\"sex2\" value=\"M\" name=\"sexo\" "
    + alias4((helpers.sex || (depth0 && depth0.sex) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.sexo : stack1),"M",{"name":"sex","hash":{},"data":data}))
    + ">Mujer</label>\r\n                            </div>\r\n                        \r\n                        <div class=\"form-group\">\r\n                            <label for=\"telefono\">Teléfono</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"telefono\" name=\"telefono\" placeholder=\"p.e. 600600600\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.telefono : stack1), depth0))
    + "\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"fechaNacimiento\">Fecha de Nacimiento</label>\r\n                            <input type=\"date\" class=\"form-control\" id=\"fechaNacimiento\" name=\"fechaNacimiento\" placeholder=\"Fecha de nacimiento\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.fechaNacimiento : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "                            >\r\n                        </div>\r\n                    </form>\r\n                    <div id=\"reciboList\"></div>\r\n\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div class=\"col-sm-4\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" id=\"aceptar\" name=\"submit\">"
    + alias4(((helper = (helper = helpers.aceptar || (depth0 != null ? depth0.aceptar : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aceptar","hash":{},"data":data}) : helper)))
    + "</button>\r\n                    </div>\r\n                    <div class=\"col-sm-4\"></div>\r\n                    <div class=\"col-sm-4\">\r\n                        <button type=\"button\" class=\"btn btn-secondary float-right\" data-dismiss=\"modal\">"
    + alias4(((helper = (helper = helpers.cerrar || (depth0 != null ? depth0.cerrar : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cerrar","hash":{},"data":data}) : helper)))
    + "</button>\r\n                    </div>\r\n                </div>\r\n            ";
},"useData":true});
})();