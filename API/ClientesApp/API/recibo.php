<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");

	if(isset($_POST['id']) || isset($_GET['id'])){
		if(isset($_GET['id'])) $id=$_GET['id'];
		else $id=$_POST['id'];
		require_once('include_dao.php');
		$transaction = new Transaction();
		$ReciboDAO=DAOFactory::getReciboDAO();
		$recibos=$ReciboDAO->queryByIdCliente($id);
		//commit transaction
		$transaction->commit();
		echo json_encode($recibos);
	} else echo "error"

?>