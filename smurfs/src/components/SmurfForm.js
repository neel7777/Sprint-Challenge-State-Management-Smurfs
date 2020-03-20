import React, { useState } from 'react';
import { addSmurf, removeSmurf } from '../actions'
import { connect } from "react-redux";






const SmurfForm = props => {
    const [data, setData] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()

    });

    const handleName = event => {
        setData({...data, name: event.target.value});
        
        
      };

    const handleAge = event => {
        setData({...data, age: event.target.value});
        
        
      };

    const handleHeight = event => {
        setData({...data, height: event.target.value});
        
        
      };

    const addNew = e => {
        e.preventDefault();        
        props.addSmurf(data);
        
    }
    
    
    return(
        <div>
            <form className="addSmurf">
            <br/>
            <br/>
            <input type="text"
                
                value={data.name}
                name="name"
                
                className="prompt"
                placeholder="name"
                onChange={handleName}
                
            />
            <br/>
            <br/>
            <input type="text"
                
                value={data.age}
                name="age"
                
                className="prompt"
                placeholder="age"
                onChange={handleAge}
                
            />
            <br/>
            <br/>
            <input type="text"
                
                value={data.height}
                name="height"
                
                className="prompt"
                placeholder="height"
                onChange={handleHeight}
                
            />
            <br/>
            <br/>
            <button onClick={addNew} >Add a new Smurf!</button>
            
                
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.village.name,
        age: state.village.age,
        height: state.village.height,
        id: state.village.id

    };
}

export default connect(
    mapStateToProps, { addSmurf })
    (SmurfForm);