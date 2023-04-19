import { React } from "react"
import { useState } from "react";
import css from './InputForm.module.css';
//import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { addContact } from "redux/actions";

export const InputForm = () => {
    const dispatch = useDispatch();
    // state = {       
    //     name: '',
    //     number: ''
    // }
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const onInputHandler = (event) => {
        // this.setState({ [event.target.name]: event.target.value })
        const {name, value } = event.target;
       
        switch (name){
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break
            default: return;
        }
    
        }
    
        //   const  submitForm = e => {
        //         e.preventDefault();
        //         const newContact = {
        //             name: this.state.name,
        //             id: nanoid(),
        //             number: this.state.number,
        //         };
        
        //         this.props.onSubmit(newContact);
        
       
        //         restart();
        //     } 
        const submitForm = (e) => {
            e.preventDefault();
            dispatch(addContact(name, number));
            
            resetInput();
            //const form = e.target;
            
            
            //dispatch(addContact(form.elements.name.value));
            //dispatch(addContact(form.elements.number.value));
             console.log(name)
            console.log(number)
            
        }

        //    const restart = () => {
        //         setTimeout(() => {
        //             this.setState({ name: "", number: "" })
        //         }, 500);
        //     }
    
    const resetInput = () => {
        setName('');
        setNumber('');
    }
        return (
            <form
                className={css.form}
                onSubmit={submitForm}>
                <label htmlFor='name' className={css.label_form}>
                    <span>Name</span>
                    <input
                        onChange={onInputHandler}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.input}
                    />
                </label>
                <label htmlFor='number' className={css.label_form}>
                    <span>Number</span>
                    <input
                        onChange={onInputHandler}
                        type="tel"
                        name="number"
                        value={number}
                        className={css.input}
                    />
                </label>
                
                <button type="submit" className={css.addBtn}>Add contact</button>
                      
            </form>        
        ) 
    }; 
    
 


// InputForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
    