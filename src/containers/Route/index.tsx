import React from 'react';

import Navigation from './navigation';

import { BottomNavigation } from 'react-native-paper';
import Home from '../Home';
import SlotMachine from '../SlotMachine';

class Routes extends React.Component {
  state = {
    index: 0,
    routes: [...Navigation],
  };

  handleIndexChange = (index: Number) => this.setState({ index });

  renderNavigation = BottomNavigation.SceneMap({
    home: Home,
    slotMachine: SlotMachine,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderNavigation}
      />
    );
  }
}

export default Routes;
