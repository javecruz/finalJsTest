Handlebars.registerHelper('sex', function(sexo,valor) {
  return (sexo==valor)?'checked':''
})
Handlebars.registerHelper('pagado', function(pagado,valor) {
  return (pagado==valor)?'checked':''
})