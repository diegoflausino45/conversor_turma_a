$(document).ready(function() {

    $('.btn-calcular').click(function(e) {
        e.preventDefault()

        var vlr01 = $('#vlr01').val()
        var conversao = $('#conversao').val()
        var dolar = parseFloat(5.59)
        var euro = parseFloat(6.61)
        var iene = parseFloat(0.053)
        var libra = parseFloat(7.23)

        switch (conversao) {
            case '1':
                var resultado = parseFloat(vlr01) / parseFloat(dolar)
                break
            case '2':
                var resultado = parseFloat(vlr01) / parseFloat(euro)
                break
            case '3':
                var resultado = parseFloat(vlr01) / parseFloat(iene)
                break
            case '4':
                var resultado = parseFloat(vlr01) / parseFloat(libra)
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