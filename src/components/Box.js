import React, { Component } from "react";
import uuid from 'uuid';
import  ListContainer  from "./ListContainer";
import  ActionContainer  from "./ActionContainer";



class Box extends Component {
  state = {
    timers: [
      {
        title: "Apprendre React",
        projet: "Développement Web",
        elapsed: 5609620,
        id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
        runningSince: null
      },
      {
        title: "Apprendre Angular",
        project: "Développement Web",
        elapsed: 1349620,
        id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d4",
        runningSince: null
      }
    ]
  };
  handleEditTimer = ({ id, title, project}) => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === id) {
          return {
            ...timer,
            title,
            project
          };
        }
        return { ...timer };
      })
    });
  }
  handleCreateTimer = ({ title, project }) => {
    const timer = {
      title,
      project,
      id: uuid.v4(),
      elapsed: 0,
      runningSince: null
    };
    this.setState({ 
        timers: [...this.state.timers, timer] });
  };
  handleEditFormOpen = ({ id, title, project }) => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === id) {
          return {
            ...timer,
            title,
            project
          };
        }
        return { ...timer };
      })
    });
  };
  handleDelete = id => {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== id)
    }); 
    }

  handlePause = id => {
    console.log('pause');
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map(timer => {
        if(id === timer.id) {
          const nextElapsed = now - timer.runningSince;
          return {
            ...timer,
            runningSince: null,
            elapsed: timer.elapsed + nextElapsed
          }
        } else {
          return { ...timer };
        }
      })
    });
  };
  handlePlay = id => {
    console.log('play');
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map(timer => {
        if(id === timer.id) {
          return {
            ...timer,
            runningSince: now
          }
        } else {
          return { ...timer };
        }
      })
    });
  };
  render() {
    return (
      <div className="boxed--view">
        <div className="boxed--view__box">
          <ListContainer
            timers={this.state.timers}
            onFormSubmit={this.handleEditTimer}
            onDelete={this.handleDelete}
            onPause={this.handlePause}
            onPlay={this.handlePlay}
          />
          <ActionContainer onFormSubmit={this.handleCreateTimer} />
        </div>
      </div>
    );
  }
}

export default Box ;
