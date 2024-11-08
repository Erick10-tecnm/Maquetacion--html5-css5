$(document).ready(function() {
    // Configuración de calendario
    $("#checkin").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,
        onSelect: function(selectedDate) {
            var minDate = $("#checkin").datepicker("getDate");
            minDate.setDate(minDate.getDate() + 1);
            $("#checkout").datepicker("option", "minDate", minDate);
        }
    });

    $("#checkout").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 1
    });

    // Validación del formulario
    $('#check-availability').on('click', function() {
        let checkin = $('#checkin').val();
        let checkout = $('#checkout').val();
        let adults = $('#adults').val();
        let children = $('#children').val();

        if (!checkin || !checkout || !adults) {
            alert("Por favor completa todos los campos obligatorios.");
            return false;
        }

        alert("Consulta realizada con éxito.");
    });
});
