import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='#5637DD' />
            <Text style = {styles.loadingText}>Loading . . .</Text>
        </View>
    )
} 

const styles = StyleSheet.create(
    {
        loadingView:{
            alignItems:'center',
            justifyContent:'center',
            flex: 1,
            marginTop:20,
            padding:10,
            
        },
        loadingText: {
            color:'#5637DD',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
)

export default Loading;