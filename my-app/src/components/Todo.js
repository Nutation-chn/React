import Backdrop from "./Backdrop";
import Modal from "./Modal";
import {useState, useEffect} from 'react';
function Todo(props) {
    //a react hook, useState always return an array with two elements
    //first is the boolean value, second is the fucntion change the first
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
      setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    useEffect(()=>{
        console.log('todo');
    })
  return(  
  <div className="card">
  <h2>{props.text}</h2>
  <div className='actions'>
    <button className='btn' onClick={deleteHandler}>delete</button>
  </div>
  {modalIsOpen && <Modal onCancel = {closeModalHandler} onConfirm ={closeModalHandler}/> }
  {modalIsOpen && <Backdrop  onClick={closeModalHandler}/>}
</div>);
}
export default Todo;
