import React from 'react';
import Directory from '../directory.component/directory.component'
import {CAMPSITES} from '../dataFolder/campsites'
import CampsiteInfo from '../infoComponent/campsiteInfo.component'
import { View } from 'react-native'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            campsites: CAMPSITES,
            selectedCampsite: null
        }
    }

    onCampsiteSelect(campsiteId) {
        this.setState({
            selectedCampsite: campsiteId
        })
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Directory 
                    campsites={this.state.campsites}
                    onPress={campsiteId => this.onCampsiteSelect(campsiteId)}
                />
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite=> campsite.id === this.state.selectedCampsite)[0]}
                />

            </View>
        )
    }
}

export default Main