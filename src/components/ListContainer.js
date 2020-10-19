import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';


// creer le composant
const renderContainer = props => {
    
        return props.timers.map((timer =>{
          return (
          <Container 
                onFormSubmit={props.onFormSubmit}
                onDelete= {props.onDelete}
                key={timer.id}
                onPlay={props.onPlay}
                onPause={props.onPause} 
                {...timer} 
                />
              )
        }))
    }
    const ListContainer = (props) => {
        return (
            
                <div className="list--container">
                     {renderContainer(props)}
                    
                </div>
            

        )
    }
ListContainer.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    timers: PropTypes.array.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
}

//exporter le composant
export default ListContainer;