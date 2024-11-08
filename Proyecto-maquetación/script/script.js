$(document).ready(function() {
    // Configuración de calendario para las fechas de entrada y salida
    $("#checkin").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0, // No se pueden seleccionar fechas anteriores a hoy
        onSelect: function(selectedDate) {
            var minDate = $("#checkin").datepicker("getDate");
            minDate.setDate(minDate.getDate() + 1);
            $("#checkout").datepicker("option", "minDate", minDate);
        }
    });
    
    $("#checkout").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 1 // La fecha de salida debe ser al menos un día después de la fecha de entrada
    });

    // Sincronizar selects y campos de texto
    $('#adults').on('change', function() {
        $('#adults-text').val($(this).val());
    });
    $('#adults-text').on('input', function() {
        $('#adults').val($(this).val());
    });

    $('#children').on('change', function() {
        $('#children-text').val($(this).val());
    });
    $('#children-text').on('input', function() {
        $('#children').val($(this).val());
    });

    // Validación del formulario al hacer clic en "Check"
    $('#check-availability').on('click', function() {
        let checkin = $('#checkin').val();
        let checkout = $('#checkout').val();
        let adults = $('#adults').val() || $('#adults-text').val();
        let children = $('#children').val() || $('#children-text').val();

        if (!checkin || !checkout || !adults) {
            alert("Por favor completa todos los campos obligatorios.");
            return false;
        }

        alert("Consulta realizada con éxito.");
    });
});
