import React, {useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';


const AddTodo = ({addTodo}) => {
  const [text,setText]=useState('')

  // handel add

const handelAdd=(e)=>{
  e.preventDefault()
  
if(text){

const id=Math.random()
  addTodo({id,done:false,text})
  setText('')
}

}


  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Add New Todo</h2>
      <Form style={{ display: 'flex', alignItems: 'center', gap: '15px'}} onSubmit={handelAdd} >
        <FormControl 
          type='text' 
          value={text}
          onChange={e=>setText(e.target.value)}
          placeholder='What needs to be done?' 
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <Button type='submit' >Add</Button>
      </Form>
    </div>
  );
}

export default AddTodo;
