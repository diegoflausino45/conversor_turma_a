$(document).ready(function() {

    $('.btn, .dropdown-item, .navbar-brand').click(function(e) {
        e.preventDefault()

        let url = $(this).attr('href')

        $('#conteudo').empty()
        $('#conteudo').load(url)
    })

})