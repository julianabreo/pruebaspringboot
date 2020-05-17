function eliminar(id) {
	swal({
		  title: "Esta seguro de Eliminar?",
		  text: "el registro sera eliminado definitivamente!",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((OK) => {
		  if (OK) {
			  $.ajax({
				 url:"/eliminar/"+id,
				 success: function(res){
					 console.log(res);
				 }
			  });
		    swal("Registro Eliminado!", {
		      icon: "success",
		    }).then((ok)=>{
		    	if(ok){
		    		location.href="/listar";
		    	}
		    });
		  } else {
		    swal("Resgistro no ha sido eliminado!");
		  }
		});
}