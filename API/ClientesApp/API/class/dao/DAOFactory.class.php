<?php

/**
 * DAOFactory
 * @author: http://phpdao.com
 * @date: ${date}
 */
class DAOFactory{
	
	/**
	 * @return ClienteDAO
	 */
	public static function getClienteDAO(){
		return new ClienteMySqlExtDAO();
	}

	/**
	 * @return ReciboDAO
	 */
	public static function getReciboDAO(){
		return new ReciboMySqlExtDAO();
	}


}
?>