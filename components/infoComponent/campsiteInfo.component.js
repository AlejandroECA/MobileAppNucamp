import React from 'react';
import {Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import {CAMPSITES} from '../dataFolder/campsites'



const RenderCampsite = ({campsite})=>{

    if (campsite) {
        return(
            <Card
                featuredTitle={campsite.name}
                image={require('../../shared/images/react-lake.jpg')}>
                <Text style={{margin:10}}>
                    {campsite.description}
                </Text>
            </Card>
        )
    } else{
        return <View />
    }
}


class CampsiteInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }


    static navigationOptions = {
        title:'Campsite Information'
    }
    render(){
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite =  this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        return(
            <RenderCampsite campsite={campsite} />
        )
    }

}

export default CampsiteInfo