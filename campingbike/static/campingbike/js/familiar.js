$.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:8000/campingbike/json',
    success: function(data) {
        $.each(data, function (i, field) {
            if(field['tipus']=='F'){

                $('.comentaris').append('<tr>');
                $("tr:last").append("<td>" + " " + field['nom'] + " </td>");
                $("tr:last").append("<br>");
                $("tr:last").append("<td>" + " " + field['km'] + " </td>");
                $("tr:last").append("<td>" + " " + field['temps'] + " </td>");
            }
        });
    }
});
