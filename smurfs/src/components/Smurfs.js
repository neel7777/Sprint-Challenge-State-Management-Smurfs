import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getData, removeSmurf } from '../actions';
import styled from 'styled-components';

const Card = styled.div `
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
color: white;
background-color: cornflowerblue;
width: 100%;
max-width: 18rem;
margin: 1rem;
padding: 20px;
border-radius: 5px;
box-shadow: 0 1px 6px -2px #000;
margin-bottom: 30px;
text-align: center;
`
const Each = styled.div `
display: flex;
flex-flow: row wrap;
position: absolute;
justify-content: space-between;
width: 100%;
min-height: 2rem;
max-height: 2rem;
`

const Smurfs = props => {
    const [rem, setRem]=useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    });
    const remove = e => {
        e.preventDefault();
        removeSmurf(rem);
    }
    return (
        <>
        <Each>
        {props.error ? (
            <div className="error"></div>
        ) : (
            
            props.village.map(smurf =>
            <Card key={smurf.id}>
            <h1>Name: {smurf.name}</h1>
            <h2>Age: {smurf.age}</h2>
            <h2>Height: {smurf.height}</h2>
            <button className="button" onClick={remove}>X</button>
                       
            </Card> 
            
            )
        )}
        </Each>
        </>
    )
}


const mapStateToProps = state => {
    return {
        village: state.village,
        error: state.error        
    }
};
export default connect(mapStateToProps,{ getData })(Smurfs)