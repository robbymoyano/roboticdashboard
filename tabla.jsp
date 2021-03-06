<!DOCTYPE html>
<html>
	<head>
		<title>Consulta Puntos</title>
		<meta charset="UTF-8">
		<script src="js/jquery-3.2.1.min.js"></script>

				 <link rel="stylesheet" href="css/animate.css">

		
		<script src="dist/js/bootstrap.js?v=4"></script>
		<link href="dist/css/bootstrap.css?v=4" rel="stylesheet" type="text/css" />
		<link href="css/docs.min.css?v=4" rel="stylesheet" type="text/css" />
		<script src="dist/js/dropdown.js"></script>
		<script src="dist/js/collapse.js"></script>
		<script src="dist/js/bootstrap.bundle.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

		<link rel="stylesheet" type="text/css"
			  href="datatables/dataTables.bootstrap4.css" />
		<script type="text/javascript" src="datatables/datatables.min.js"></script>

		<script type="text/javascript" src="datatables/dataTables.bootstrap4.js?v=1.1"></script>
		<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.2.1/js/dataTables.buttons.min.js"></script>
		<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.2.1/js/buttons.flash.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
		<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.2.1/js/buttons.html5.min.js"></script>
		<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.2.1/js/buttons.print.min.js"></script>




		<script src="js/getTabla.js?v=0.13"></script>
		<script src="js/jquery.color-2.1.2.js"></script>
		<!-- <link type="text/css" rel="stylesheet" href="css/mainConcept.css?v=1.0">-->

		<style>
			.dataTables_length{
				float: left;

			}

			table td, th{
				border: 1px solid #cbcbcb !important;
			}
			table{
				border-collapse: collapse !important;}

			.dt-buttons{
				float: left;
				padding-left: 30px;
				padding-top: 5px;

			}

			.dataTables_filter{
				float: right;
			}

			.dt-button{
				background: #dff0d8;
				margin-left: 10px;
				padding: 5px;
				border-radius: 6px;

			}

			body {
				padding-top: 70px;
			}
			#contenidoTabla td {
				cursor: pointer;
			}

			#example_wrapper{
				padding: 8px;
				border-radius: 5px;
			}

			#example{
				background-color: white;
			}

			.botonAmarillo{ 
				color: #936e39;
				background-color: #fcf8e3;
				border: 2px solid #f0ad4e;
				padding: 5px;
			}

			.OK{
				border: 0px solid #dff0d8;
				background-color: #5cb85c !important;
				text-align: center;
				color: #dff0d8;
				cursor: pointer;
				font-weight: bold;
			}

			.ERROR{
				border: 0px solid #d9534f;
				background-color: #d9534f !important;
				text-align: center;
				color: #f2dede;
				cursor: pointer;
				font-weight: bold;
			}

			.botonRojo{ 
				color: #d9534f;
				background-color: #f2dede;
				border: 2px solid #d9534f;
				padding: 5px;
			}

			.botonVerde{ 
				color: #599259;
				background-color: #dff0d8;
				border: 2px solid #599259;
				padding: 5px;
			}




		</style>

		<script>
			$(document).ready(
				function() {

					llamadaAjax();

					//	$('#example').DataTable().destroy();
					//	$('#example tbody').empty();
					$('#example').DataTable(

						{
							dom: 'lBfrtip',
							buttons: [
								'excel','print'
							],
							/*columnDefs: [
							{ width: 200, targets: 0 }
						],*/ //largo en función del contenido
							fixedColumns: true,
							"aaSorting": [[ 2, "desc" ]],
							"lengthMenu": [[25, 50,100, -1], [25, 50,100, "All"]

										  ]
						});
					$('#example').css("border-collapse", "collapse !important");
				});
		</script>
	</head>


	<body>


		<nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: rgb(177, 219, 250);">
			<a class="navbar-brand" href="#">Accenture</a>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active"><a class="nav-link" href="index.html">Monitoreo</a></li>
					<li class="nav-item"><a class="nav-link" href="help.html">Ayuda</a></li>
				</ul>
				<span class="navbar-text">
					Accenture Innovation
				</span>
			</div>
		</nav>



		<div class="container">
			<div class="row">
				<div class="col-md-12">

					<div class="title"> <a class="btn btn-secondary" href="index.html"><span class="glyphicon glyphicon-chevron-left
						"></span>< Volver </a><h3><%= request.getParameter("title") %></h3></div>


						</div>
					</div>

					<div class="row justify-content-md-center">
						<div class="col-md-auto"> 
							<table id="example" class="table table-hover table-bordered table-responsive animated fadeIn" cellspacing="0">
								<thead class="thead-default">
									<tr class="table-active">
										<th >Id Prueba</th>
										<th class="">Robot</th>
										<th class="">Fecha</th>
										<th class="">Servidor</th>
										<th class="">Resultado</th>
									</tr>
								</thead>
								<tbody id="contenidoTabla">

								</tbody>
							</table></div>
					</div>



				</div></div>
			</body>
		</html>