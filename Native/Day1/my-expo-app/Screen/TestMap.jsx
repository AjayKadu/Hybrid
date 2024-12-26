import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import MapView from 'react-native-maps';

function TestMap() {

const  [currentLocation, setCurrentLocation] = useState({
    latitude: 18.589077557371358,
    longitude: 73.70597675882912,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
});

const onRegionChange = (newLocation) => {
    setCurrentLocation(newLocation);
}

    return ( 
    <SafeAreaView>
    <View style={{flex: 1}}>
        <Text>Latitude: {currentLocation.latitude}</Text>
        <Text>Longitude: {currentLocation.longitude}</Text>
       <MapView style={{height: '100%', width: '100%'}} initialRegion={currentLocation} onRegionChange={onRegionChange}>

       </MapView>
    </View> 
    </SafeAreaView>);
}

export default TestMap;