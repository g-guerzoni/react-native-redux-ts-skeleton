import React from 'react';
import { connect } from 'react-redux';
import { AplicationStore } from '../../store/reducers';

import { IndexProps } from './model';

import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home: React.FC<IndexProps> = ({ coin, name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Olá, {name}</Text>
      <View style={styles.coinContainer}>
        <Text style={styles.coin}>{coin}</Text>
        <Icon name="coin" size={30} color="#FFA800" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  coinContainer: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  coin: {
    marginRight: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (store: AplicationStore) => ({
  coin: store.user.coin,
  name: store.user.name,
});

export default connect(mapStateToProps)(Home);
