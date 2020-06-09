import React from 'react';
import ImageMap from '../../constants/imagesMap';
import { ReelProps } from './model';

import { StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

const Reel: React.FC<ReelProps> = ({ fruit }) => {
  const renderReel = () => {
    if (!fruit) {
      return (
        <Image
          source={require(`../../../assets/fruits/animated-reel.gif`)}
          style={styles.reelImage}
        />
      );
    }

    return (
      <Image
        style={styles.reelImage}
        source={ImageMap[fruit] || require('../../../assets/fruits/lemon.png')}
      />
    );
  };

  return (
    <Card style={styles.card}>
      <Card.Content>{renderReel()}</Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: 100,
    marginVertical: 5,
    alignItems: 'center',
    alignContent: 'center',
  },
  reelImage: {
    width: 60,
    height: 60,
  },
});

export default Reel;
