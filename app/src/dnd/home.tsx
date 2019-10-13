import React, { Component } from 'react';

interface Props {
    title: string;
    subtitle: string;
}

interface State {
    displayedBoolean: boolean;
};

export default class DnDApp extends Component<Props, State> {
    state: State = {
        displayedBoolean: false
    };

    changeStatus = () => {
        this.setState({displayedBoolean: (!this.state.displayedBoolean)})
    }

    render() {
        return(
            <div>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.subtitle}
                </div>
                <button onClick={this.changeStatus}>change state</button>
                <div>The state is {this.state.displayedBoolean ? "True" : "False"}</div>
            </div>
        )
    }


};


// https://github.com/microsoft/TypeScript-React-Starter