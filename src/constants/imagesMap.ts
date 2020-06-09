interface Images {
  [key: string]: Images;
}

const imageMap: Images = {
  apple: require('../../assets/fruits/apple.png'),
  banana: require('../../assets/fruits/banana.png'),
  cherry: require('../../assets/fruits/cherry.png'),
  lemon: require('../../assets/fruits/lemon.png'),
};

export default imageMap;
