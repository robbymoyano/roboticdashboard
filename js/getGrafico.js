function llamadaAjax() {
	console.log('llamada a ajax para rescatar grafico');
	$.ajax({
		type : "GET",
		dataType : "xml",
		url : 'data/grafico.xml',
		cache:false,
		async : true, // blocks window close
		timeout: 120000, // sets timeout to 120 seconds
		success : function(xml) {
			$(xml).find('registro').each(
				function() {
					console.info('registro encontrado')
					
					title = $(this).find('title').text();
					console.log(title);
					
					subtitle = $(this).find('subtitle').text();
					
					categories = $(this).find('categories').text().split(",");
				
					serieOk = $.map($(xml).find('serieOk').text().split(","), function(value){
				return parseInt(value, 10);
			          });
					console.info(serieOk[0]);
					console.info(50);
					
					serieError = $.map($(xml).find('serieError').text().split(","), function(value){
				return parseInt(value, 10);
			          });

					var n = $(this).find('valores').text().split(",");
					var c = $(this).find('colores').text().split(",");


				});
			paintGraphic();
		},

		beforeSend : function() {

		},

		error : function() {

		}
	});
};