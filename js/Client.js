var Client = function(json) {

    var id = json.id
    var nombres = json.nombres
    var fechaNacimiento = json.fechaNacimiento
    var sexo = json.sexo
    var telefono = json.telefono
    var ciudad = json.ciudad
    return {
        id: id,
        nombres: nombres,
        fechaNacimiento: fechaNacimiento,
        sexo: sexo,
        telefono: telefono,
        ciudad: ciudad,
        toJson: function() {
            return { id: id, nombres: nombres, fechaNacimiento: fechaNacimiento, sexo: sexo, telefono: telefono, ciudad: ciudad }
        }

    };


};