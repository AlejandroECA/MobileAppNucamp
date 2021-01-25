import React from 'react';
import {Text, View} from 'react-native';
import { Card } from 'react-native-elements';


const RenderCampsite = ({campsite})=>{

    if (campsite) {
        return(
            <Card
                featuredTitle={campsite.name}
                image={require('../../shared/images/react-lake.jpg')}>
                <Text style={{margin:10}}>{campsite.description}</Text>
            </Card>
        )
    } else{
        return <View />
    }
}


const CampsiteInfo = (props) => {

    return(
        <RenderCampsite campsite={props.campsite} />
    )
}

export default CampsiteInfo