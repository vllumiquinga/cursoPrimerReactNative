import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { getPersonajes } from '../rickyMortiy';
import { CharacterCadr } from './CharacterCar';
import { ActivityIndicator, FlatList } from 'react-native-web';

export function Main() {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        console.log("Obteniendo");
        getPersonajes().then((data) => {
            setPersonajes(data);
            console.log(data);
        });
    }, []);


    return (
        <>
            {
            personajes.length === 0 ? (
                <ActivityIndicator size={"large"} />
            ) : (

                <FlatList
                    data={personajes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item, index }) => (
                            <CharacterCadr personaje={item} index={index}></CharacterCadr>
                        )
                    }></FlatList>
            )}
        </>
    );
}