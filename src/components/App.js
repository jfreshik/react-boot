import React from 'react';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    render(){
        return (
            <div>
                <button onClick={()=> {this.setState({name: 'jfreshik'})}}>ClickMe</button>
                <div>Hello@@!dfszzzd!! {this.state.name}</div>
            </div>
            
        );
    }
}

export default App;