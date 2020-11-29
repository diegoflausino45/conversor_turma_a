$(document).ready(function() {

    $('.btn-calcular').click(function(e) {
        e.preventDefault()

        var Peso = $('#Peso').val()
        var Altura = $('#Altura').val()



        var PesoAtual= Peso / Math.pow(Altura, 2)
        

    
        

        $('#calcular').after(`
            <div class="alert alert-info alert-dismissible fade show" role="alert">
                <strong>${PesoAtual.toFixed(2).replace('.', ',')}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>`)

    })
})  