import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '../shared/overlays/SimpleDialog'
import Form from './SignupForm';

function trigger() {
    return <button type="submit" block className="btn btn-block btn-outline btn-white btn-default btn-lg">Signup</button>
}

function renderBrand() {
    return <img src={require("../../assets/images/logo_ngo.png")} style={{marginLeft: '10px'}} className="brand-logo" /> 
}

function getTitle() {
    return (
        <h4 className='font-thin no-margins text-center'>{renderBrand()} <div style={{display: 'inline-block'}} className=' text-center'>Signup!! Become a volunteer</div></h4>
    )
}

var Modals = React.createClass({
    handleConfirm() {
        alert('confirm button pressed')
    },

    handleCancel() {
        alert('cancel button pressed')
    },

    render: function () {
        return (
            <Dialog trigger={trigger}
                handleConfirm={this.handleConfirm}
                handleCancel={this.handleCancel}
                title={getTitle()}>
                <Form/>
                <p className="card-text text-center text-muted">Become a part of the intiative and contribute.</p>
            </Dialog>
        );
    }

});

export default Modals;