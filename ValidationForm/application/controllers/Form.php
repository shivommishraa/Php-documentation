<?php
  
   class Form extends CI_Controller { 
	
      public function index() { 
         /* Load form helper */ 
         $this->load->helper(array('Form'));
			
         /* Load form validation library */ 
         $this->load->library('form_validation');
			
         /* Set validation rule for name field in the form */ 
         $this->form_validation->set_rules('name', 'Name', 'required'); 
			
         if ($this->form_validation->run() == FALSE) 
         { 
         $this->load->view('myform'); 
         } 
         else { 
            $this->load->view('formsuccess'); 
         } 
      }
   }
?>