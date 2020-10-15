$(document).ready(function() {

    $('.btn-calcular').click(function(e) {
        e.preventDefault()

        var vlr01 = $('#vlr01').val()
        var vlr02 = $('#vlr02').val()
        var operacao = $('#operacao').val()

        switch (operacao) {
            case '1':
                var resultado = parseFloat(vlr01) + parseFloat(vlr02)
                break
            case '2':
                var resultado = parseFloat(vlr01) - parseFloat(vlr02)
                break
            case '3':
                var resultado = parseFloat(vlr01) * parseFloat(vlr02)
                break
            case '4':
                var resultado = parseFloat(vlr01) / parseFloat(vlr02)
                break
            default:
                var resultado = 0
        }

        $('#calcular').after(`
            <div class="alert alert-info alert-dismissible fade show" role="alert">
                <strong>${resultado.toFixed(2).replace('.', ',')}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>`)
    })

})