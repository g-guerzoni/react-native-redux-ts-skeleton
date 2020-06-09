import React from 'react';
import Spin from '../../utils/slotMachine';

import { connect } from 'react-redux';
import {
  actionUserUpdateCoinAdd,
  actionUserUpdateCoinRemove,
} from '../../store/actions/userActions';

import { IndexProps, IndexStates } from './model';
import { AplicationStore } from '../../store/reducers';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Reel from './Reel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SlotMachine extends React.Component<IndexProps, IndexStates> {
  constructor(props: IndexProps) {
    super(props);

    this.state = {
      reels: ['cherry', 'cherry', 'cherry'],
      message: '',
    };
  }

  handleSpin = () => {
    const { addCoin, removeCoin } = this.props;
    const spinResult = Spin();

    removeCoin();
    this.setState((prev) => ({ ...prev, reels: [] }));

    if (spinResult.prize) {
      addCoin(spinResult.prize);
    }

    setTimeout(() => {
      this.setState((prev) => ({ ...prev, reels: [spinResult.reel[0]] }));

      setTimeout(() => {
        this.setState((prev) => ({
          ...prev,
          reels: [...prev.reels, spinResult.reel[1]],
        }));
      }, 1000);

      setTimeout(() => {
        if (spinResult.prize) {
          this.setState((prev) => ({
            ...prev,
            reels: [...prev.reels, spinResult.reel[2]],
            message: `Congratulations you won ${spinResult.prize} coins`,
          }));

          addCoin(spinResult.prize);
        } else {
          this.setState((prev) => ({
            ...prev,
            reels: [...prev.reels, spinResult.reel[2]],
            message: `Sorry, but you haven't won. Try again!`,
          }));
        }
      }, 2000);
    }, 1000);
  };

  render() {
    const { coin } = this.props;
    const { reels, message } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.coinContainer}>
          <Text style={styles.coin}>{coin}</Text>
          <Icon name="coin" size={30} color="#FFA800" />
        </View>

        <View style={styles.reelContainer}>
          <Reel fruit={reels[0]} />
          <Reel fruit={reels[1]} />
          <Reel fruit={reels[2]} />
        </View>

        <View style={styles.coinContainer}>
          <Button
            mode="contained"
            loading={reels.length < 3}
            disabled={reels.length < 3}
            onPress={this.handleSpin}
          >
            SPIN
          </Button>
        </View>

        <View style={styles.coinContainer}>
          <Text>{message}</Text>
        </View>
      </View>
    );
  }
}

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
  reelContainer: {
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },
});

const mapStateToProps = (store: AplicationStore) => ({
  coin: store.user.coin,
});

export default connect(mapStateToProps, {
  addCoin: actionUserUpdateCoinAdd,
  removeCoin: actionUserUpdateCoinRemove,
})(SlotMachine);
