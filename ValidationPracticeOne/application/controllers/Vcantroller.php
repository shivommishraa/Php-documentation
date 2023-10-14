<?php
/**
 * 
 */
class Vcantroller extends CI_Controller
{
	public function index()
	{
		$this->load->helper(array('Form','url'));
		$this->load->library('form_validation');
		$this->form_validation->set_rules('name','Name','required|min_length[2]|max_length[12]');
		$this->form_validation->set_rules('fname','Fname','required|min_length[2]|max_length[12]');
		$this->form_validation->set_rules('mname','Mname','required|min_length[2]|max_length[12]');
		$this->form_validation->set_rules('email','Email','required|valid_email');
		$this->form_validation->set_rules('password','Password','required|min_length[2]|max_length[12]');
		$this->form_validation->set_rules('confirmpassword','confirmpassword','required|matches[password]');
		$this->form_validation->set_rules('address','Address','required|min_length[2]');
		$this->form_validation->set_rules('image','image','required');

		if($this->form_validation->run()==FALSE)
		{
		$this->load->view('Ragistration');
		}
		else
		{
			$this->load->view('SuccessPage'); 
		}
}
}
?>