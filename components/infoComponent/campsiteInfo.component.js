import React from 'react';
import {Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';


import { connect } from 'react-redux';
import { baseUrl } from '../../shared/url/baseUrl'

import { postFavorite } from '../../redux/ActionCreators'

const RenderCampsite = (props)=>{

    const {campsite, favorite, markFavorite} = props

        if (campsite) {
        return(
            <Card
                featuredTitle={campsite.name}
                image={{uri: baseUrl + campsite.image}}>
                <Text style={{margin:10}}>
                    {campsite.description}
                </Text>
                <Icon 
                name={favorite? 'heart':'heart-o'}
                type='font-awesome'
                color={favorite? 'red':'lightblue'}
                raised
                reverse
                onPress={ markFavorite() }
                />
            </Card>

        )
    } else{
        return <View />
    }
}

const RenderComments = ({comments}) => {

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize:14}}>{item.text}</Text>
                <Text style={{fontSize:12}}>{item.rating} Stars</Text>
                <Text style={{fontSize:12}}>{` -- ${item.author}, ${item.date}`}</Text>
            </View>
        )
    }

    return (

        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>

    )

}


class CampsiteInfo extends React.Component {

    markFavorite = (campsiteId) => {
        this.props.postFavorite(campsiteId);
    }


    static navigationOptions = {
        title:'Campsite Information'
    }
    
    render(){
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite =  this.props.campsites.campsites.filter(campsite => campsite.id === campsiteId)[0];
        const comments = this.props.comments.comments.filter(comment => comment.campsiteId === campsiteId);

        return(

            <ScrollView>
                <RenderCampsite campsite={campsite} 
                favorite={this.props.favorites.includes(campsiteId)}
                markFavorite={() => this.markFavorite(campsiteId)} />
                <RenderComments comments={comments} />
            </ScrollView>

        )
    }

}

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: campsiteId => (postFavorite(campsiteId))
}

export default connect(mapStateToProps,mapDispatchToProps)(CampsiteInfo)