<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");

	if(isset($_POST['id']) || isset($_GET['id'])){
		if(isset($_GET['id'])) $id=$_GET['id'];
		else $id=$_POST['id'];
		require_once('include_dao.php');
		$transaction = new Transaction();
		$ReciboDAO=DAOFactory::getReciboDAO();
		$recibo=$ReciboDAO->load($id);
		$recibo->pagado=$_POST['pagado'];
		$update=$ReciboDAO->update($recibo);
		//commit transaction
		$transaction->commit();
		if( $update>0){
			echo json_encode(array("ok"=>1));
		}else{
			echo json_encode(array("ok"=>0));
		}
	} else echo "error"

?>