import React from 'react';

import Dialogs from '../components/Dialogs.js';

class AppDialog extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Dialogs addList={(s) => {this.props.addList(s)}}/>
            </div>
        );
    }
}

export default AppDialog;