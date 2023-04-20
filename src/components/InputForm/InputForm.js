import { React } from "react"
import { useState } from "react";
import css from './InputForm.module.css';
import { useDispatch } from "react-redux";
import { addContact } from "redux/actions";

export const InputForm = () => {
    const dispatch = useDispatch();
   
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const onInputHandler = (event) => {
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
    

        const submitForm = (e) => {
            e.preventDefault();
            dispatch(addContact(name, number));
            resetInput();
        }

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
    
 



    