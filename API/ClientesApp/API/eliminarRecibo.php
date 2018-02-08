<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
$recibo_id=$_POST['id'];
//include all DAO files
require_once('include_dao.php');		
//start new transaction
$transaction = new Transaction();
$ReciboDAO=DAOFactory::getReciboDAO();
$deleteRecibo=$ReciboDAO->delete($recibo_id);
//commit transaction
$transaction->commit();
if( $deleteRecibo>0){
	echo json_encode(array("ok"=>1));
}else{
	echo json_encode(array("ok"=>0));
}
?>