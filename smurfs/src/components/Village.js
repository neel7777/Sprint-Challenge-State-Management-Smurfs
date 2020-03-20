import React from 'react';
import { connect } from "react-redux";
import { getData } from '../actions';


const Village = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };
    return (
        <>
        {props.isFetchingData? (<div>generating smurfs...</div>) : (<button onClick={handleGetData}>GIVE ME SMURFS!</button>)
        }
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
}

export default connect(
    mapStateToProps, { getData })
    (Village);