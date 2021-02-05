import React from 'react';
import { FlatList , Text, View} from 'react-native';

import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../../shared/url/baseUrl';

import Loading from '../loading/Loading.Component';

class Directory extends React.Component{

    static navigationOptions = {
        title: 'Directory'
    }

    render(){

    const {navigate} = this.props.navigation

    const renderDirectoryItem = ({item}) => {
        return(
            <Tile
                title={item.name}
                caption={item.description}
                featured
                onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                imageSrc={{uri: baseUrl + item.image}}
            /> 
        )
    }

    if (this.props.campsites.isLoading) {
        return <Loading />;
    }

    if (this.props.campsites.errMess) {
        return (
            <View>
                <Text>{this.props.campsites.errMess}</Text>
            </View>
        );
    }

    return(
        <FlatList
            data={this.props.campsites.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={ item => item.id.toString()}
        />
    )}
}

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    };
};

export default connect(mapStateToProps)(Directory)

