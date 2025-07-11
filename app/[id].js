
import { loadPartialConfig } from "@babel/core";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function EpisodePage() {
    const { id } = useLocalSearchParams(); // Obtiene el parámetro dinámico
    const [episode, setEpisode] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {

        const fecthEpisodeDetails = async () => {
            try {
                setLoading(true);
                const episodeData = await getEpisodeDetails(id);
                setEpisode(episodeData);


            } catch (error) {

                console.error('Error fetching episode:', error);
                Alert.alert(
                    'Error',
                    'No se pudieron cargar los detalles del episodio',
                    [{ text: 'OK' }]
                );

            } finally {
                setLoading(false);
            }

        };

        if (id) {
            fetchEpisodeDetails();
        }

    }, []);



}
