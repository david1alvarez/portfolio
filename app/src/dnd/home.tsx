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
};

export default class DnDApp extends Component<Props, State> {
    state: State = {
        displayedBoolean: false,
        headerWord: 'Classes'
    };

    changeStatus = () => {
        this.setState({displayedBoolean: (!this.state.displayedBoolean)});
    }

    keywordSearch():any {
        var key : string | null = (document.getElementById("keyword") as HTMLInputElement).value;
        if (key == null) {return};
        this.test(this.state.headerWord.charAt(0).toLowerCase() + this.state.headerWord.slice(1) + "/" + key, false);
        var sub : HTMLElement | null= document.getElementById("subspec");
        if (sub == null) {return};
        sub.innerHTML = key;
    }

    test(key:string, onload:boolean):any { 
        if (onload) {
            this.setState({headerWord: key.charAt(0).toUpperCase() + key.slice(1)});
        }
        http.get('https://api.open5e.com/' + key, (resp:any) => {
          let data = '';
    
          // A chunk of data has been recieved.
          resp.on('data', (chunk:any) => {
            data += chunk;
          });
    
          // The whole response has been received. Print out the result.
          resp.on('end', () => {
            alert(data);
            if (!onload) {
                alert(data.desc);
            }
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
                <button onClick={() => {this.test("classes", true)}}>Classes</button>
                <button onClick={() => {this.test("races", true)}}>Races</button>
                <button onClick={() => {this.test("monsters", true)}}>Monsters</button>
                <button onClick={() => {this.test("weapons", true)}}>Weapons</button>
                <button onClick={() => {this.test("spells", true)}}>Spells</button>
                <div>
                    <input type="text" id="keyword" ref="keyword"></input>
                    <button onClick={() => {this.keywordSearch()}}>Search</button>
                </div>
                <div>
                    <h1 id="subspec"></h1>
                    <p id="details"></p>
                </div>
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