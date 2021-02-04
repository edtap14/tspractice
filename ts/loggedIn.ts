import {getUsers} from './users'

export default function(){
    if(localStorage.username){
        document.getElementById('loginModalButtonContainer')!.innerHTML = `<span>Hola, ${getUsers()[0].username}</span>`
        document.getElementById('addGalleryItemButtonContainer')!.innerHTML = `<button class="btn btn-primary btn-block">Agregar foto</button>
                                                                              <button id="closeSessionButton" class="btn btn-danger btn-block">Cerrar Sesión</button>`
        $('#closeSessionButton').on('click', function(e){
            e.preventDefault()

            localStorage.clear()

            window.location.reload()
        })

    }
}