import React, { Component } from 'react';
import http from 'https';
import { any } from 'prop-types';

interface Props {
    title: string;
    subtitle: string;
}

interface State {
    displayedBoolean: boolean;
    headerWord: string;
    searchValue: string;
};

export default class DnDApp extends Component<Props, State> {
    state: State = {
        displayedBoolean: false,
        headerWord: 'Classes',
        searchValue: ''
    };

    changeStatus = () => {
        this.setState({displayedBoolean: (!this.state.displayedBoolean)});
    }

    keywordSearch():any {
        var key : HTMLElement | null = document.getElementById("keyword");
        if ((key == null) || (key.value == null)) {return};
        this.test(this.state.headerWord + "/" + key.value);
    }

    test(key:string):any { 
        this.setState({headerWord: key.charAt(0).toUpperCase() + key.slice(1)});
        http.get('https://api.open5e.com/' + key, (resp:any) => {
          let data = '';
    
          // A chunk of data has been recieved.
          resp.on('data', (chunk:any) => {
            data += chunk;
          });
    
          // The whole response has been received. Print out the result.
          resp.on('end', () => {
            alert(data);
          });
    
        }).on("error", (err:any) => {
          console.log("Error: " + err.message);
        });
    }

    render() {
        return(
            <div>
                <div>
                    <h2>{this.state.headerWord}</h2>
                </div>
                <div>
                    <input type="text" id="keyword" ref="keyword" value={this.state.searchValue}></input>
                    <button onClick={() => {this.keywordSearch()}}>Search</button>
                </div>
                <button onClick={() => {this.test("classes")}}>Classes</button>
                <button onClick={() => {this.test("races")}}>Races</button>
                <button onClick={() => {this.test("monsters")}}>Monsters</button>
                <button onClick={() => {this.test("weapons")}}>Weapons</button>
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