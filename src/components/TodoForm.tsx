import React, { useState } from 'react'

interface Props {
    title: string;
    description: string;
}

// useForm functional component
const useForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ 
            ...values,
            [event.target.name]: event.target.value 
        });
    };

    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback(); // triggering the callback
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
    };

}

export const TodoForm: React.FC<Props> = ({title, description}) => {
    return (
        <div>
            <form>
                <input 
                    name="title" 
                    type="text" 
                    id="todo-title" />
                <input 
                    name="description" 
                    type="text" 
                    id="todo-description" />
            </form>
        </div>
    );
}