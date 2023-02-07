<?php
require_once("todo.class.php");

class TodoController {
    private const PATH = __DIR__."/todo.json";
    private array $todos = [];

    public function __construct() {
        $content = file_get_contents(self::PATH);
        if ($content === false) {
            throw new Exception(self::PATH . " does not exist");
        }  
        $dataArray = json_decode($content);
        if (!json_last_error()) {
            foreach($dataArray as $data) {
                if (isset($data->id) && isset($data->title))
                $this->todos[] = new Todo($data->id, $data->title, $data->description, $data->done);
            }
        }
    }

    public function loadAll() : array {
        return $this->todos;
    }

    public function load(string $id) : Todo | bool {
        foreach($this->todos as $todo) {
            if ($todo->id == $id) {
                return $todo;
            }
        }
        return false;
    }

    public function create(Todo $todo) : bool {
        // implement your code here
        if(!empty($todo)){ 
         
            if(!empty($this->todos[])){ 
                array_push($this->todos, $todo); 
            }else{ 
                $this->todos[] = new Todo($todo->id, $todo->title, $todo->description, $todo->done); 
            } 
            
            $insert = file_put_contents($this->PATH, json_encode($this->todos)); 
             
            return $insert?true:false; 
        }else{ 
            return false; 
        } 
        
    }

    public function update(string $id, Todo $todo) : bool {
        // implement your code here
        if(!empty($todo) && !empty($id)){ 
             
            foreach($this->todos as $todoExisting) {
            if ($todoExisting->id == $id) {
                $todoExisting->title = $todo->title;
                $todoExisting->description = $todo->description;
                $todoExisting->done = $todo->done;    
                return $todoExisting;
            }
                 
            $update = file_put_contents($this->PATH, json_encode($todos)); 
             
            return $update?true:false; 
        }else{ 
            return false; 
        } 
    }

    public function delete(string $id) : bool {
        // implement your code here
        $content = file_get_contents($this->PATH); 
        
        if ($content === false) {
            throw new Exception(self::PATH . " does not exist");
        }  
        
        $dataArray = json_decode($content);
        
        $newData = array_filter($dataArray, function ($var) use ($id) { 
            return ($var['id'] != $id); 
        }); 
        
        $delete = file_put_contents($this->PATH, json_encode($newData)); 
        
        return $delete?true:false;
    }

    // add any additional functions you need below
}
