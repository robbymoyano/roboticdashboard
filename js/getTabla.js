function llamadaAjax() {
	 $('#example tbody').empty();
    $.ajax({
        type : "GET",
        dataType : "xml",
        url : 'data/tabla.xml',
        cache:false,
        async : false, // blocks window close
        timeout: 120000, // sets timeout to 120 seconds
        success : function(xml) {
            $(xml).find('registro').each(
				
                function() {
					console.info('elemento encontrado');
                    var id = $(this).find('id').text();
                    var flujo = $(this).find('flujo').text();
					var fecha = $(this).find('fecha').text();
					var dispositivo = $(this).find('dispositivo').text();
					var resultado = $(this).find('resultado').text();
					
                    $("#contenidoTabla").append(
                        '<tr id="'+id+'">'
						+'<td class="success grupo">'+id+'</td>'
						+'<td>' + flujo+'</td>'
						+'<td>' + fecha+'</td>'
						+'<td>' + dispositivo+'</td>'
						+'<td class="'+resultado+'">' + resultado+'</td>'
						+'</tr>').fadeIn(
                        'slow');
                });

			$("#contenidoTabla td").click(function(){
			    var idtest= $(this).parents('tr').attr('id');
				window.open("test.html?id="+idtest,"_self")
			});
           
        },

        beforeSend : function() {

        },

        error : function() {
            
        }
    });
};