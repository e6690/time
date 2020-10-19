import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimerForm from './TimerForm';
import Button from './Button';



// creer le composant
class ActionContainer extends Component {
    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired
    }
    state = {
        isFormOpen: false
    }
    handleFormOpen = () => {
        this.setState({ isFormOpen: true});
    }
    handleFormClose = () => {
        this.setState({ isFormOpen: false});
    }
    onFormSubmit = ({ title, projet }) => {
        this.handleFormClose()
        this.props.onFormSubmit({ title, projet });
    } 
    render() {
        if(this.state.isFormOpen) {
            return (
            <TimerForm 
                 onFormSubmit={this.onFormSubmit} 
                 onCloseForm={this.handleFormClose}
              />
            )
        } else {
            return <Button handleFormOpen={this.handleFormOpen}/>
        }
    }
} 

//exporter le composant
export default ActionContainer;