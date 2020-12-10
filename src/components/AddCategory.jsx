import React, {useState} from 'react'
import PropTypes from 'prop-types';




const AddCategory = ( { setCategories } ) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e)=>{
        console.log(e.target);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');

        }
        
    }

    return (
        <form className="header" action="" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gift's"
                value={inputValue}
                onChange={handleInputChange}
                autoFocus
                />
        </form>

        
    )
    
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;

