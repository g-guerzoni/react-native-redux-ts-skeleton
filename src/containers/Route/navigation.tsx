import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Navigation {
  key: string;
  title?: string;
  icon?: React.ReactNode;
}

const navigation: Array<Navigation> = [
  {
    key: 'home',
    title: 'Home',
    icon: () => <Icon name="home" size={20} color="#FFFFFF" />,
  },
  {
    key: 'slotMachine',
    title: 'Slot Machine',
    icon: () => <Icon name="gamepad" size={20} color="#FFFFFF" />,
  },
];

export default navigation;
