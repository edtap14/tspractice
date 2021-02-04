"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
function default_1() {
    if (localStorage.username) {
        document.getElementById('loginModalButtonContainer').innerHTML = "<span>Hola, " + users_1.getUsers()[0].username + "</span>";
        document.getElementById('addGalleryItemButtonContainer').innerHTML = "<button class=\"btn btn-primary btn-block\">Agregar foto</button>\n                                                                              <button id=\"closeSessionButton\" class=\"btn btn-danger btn-block\">Cerrar Sesi\u00F3n</button>";
        $('#closeSessionButton').on('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
}
exports.default = default_1;
