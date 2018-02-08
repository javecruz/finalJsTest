Handlebars.registerHelper('fechaEsp', function(f) {
  return f.split(" ")[0].split('-').reverse().join('/')
})
Handlebars.registerHelper('fecha', function(f) {
  return f.split(" ")[0]
})