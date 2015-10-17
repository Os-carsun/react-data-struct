import React from 'react';
import FullWidthSection from "../FullWidthSection.jsx";
let { List, ListItem ,RaisedButton } = require('material-ui');

import AboutAction from "../../actions/AboutAction.js";
import AboutStore from "../../stores/AboutStore.js";

class About extends React.Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            allInfo: AboutStore.getState().allInfo
        }
    }

    componentDidMount() {
        AboutStore.listen(this.onChange);
    }

    onChange() {
        console.log("Change!!");
        this.setState({
            allInfo: AboutStore.getState().allInfo
        });
    }

    handleGetInfo(){
        AboutAction.getInfo();
    }

    render() {
        let InfoList = this.state.allInfo.map((data, index) => {
            let name = `${data.fname} ${data.lname}`;
            return (<div><RaisedButton key={index} label={name} secondary={true} /></div>)
        });
        console.log(InfoList);
        return (
            <FullWidthSection>
                <h1>About</h1>
                <RaisedButton label="Get Info" primary={true}
                              onClick={this.handleGetInfo.bind(this)}/>
                { InfoList }
            </FullWidthSection>
        );
    }
}
export default About;
