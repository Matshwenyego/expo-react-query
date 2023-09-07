import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import styles from './styles';
import Button from '../../components/button';

const Home = () => {
    const { data, isError, isFetching, isLoading, error, refetch } = useQuery(['random'], () => {
        return fetch("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new")
            .then((response) => {
            if (response.status !== 200) {
                throw new Error(`Something went wrong. Try again.`);
            }
            return response.text();
        })
    });

    if (isError) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{error.message}</Text>
            </View>
        )
        
    }
    
    return (
        <View style={styles.container}>
            {isLoading || isFetching ? 
                (<ActivityIndicator animating size={'large'} />):
                (<Text>Random number: {data}</Text>)
            }
            <Button onPress={() => refetch()} text={'Randomize'} />
        </View>
    )

}

export default Home;