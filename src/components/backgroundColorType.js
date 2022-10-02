const backgroundColorType = (type) => {
  switch (type) {
    case 'normal':
      return { backgroundColor: 'hsl(11, 0%, 40%)' };
    case 'fighting':
      return { backgroundColor: 'hsl(11, 80%, 40%)' };
    case 'flying':
      return { backgroundColor: 'hsl(189, 71%, 30%)' };
    case 'poison':
      return { backgroundColor: 'hsl(292, 71%, 30%)' };
    case 'ground':
      return { backgroundColor: 'hsl(11, 80%, 20%)' };
    case 'rock':
      return { backgroundColor: 'hsl(11, 80%, 10%)' };
    case 'bug':
      return { backgroundColor: 'hsl(109, 100%, 20%)' };
    case 'ghost':
      return { backgroundColor: 'hsl(292, 71%, 20%)' };
    case 'steel':
      return { backgroundColor: 'hsl(11, 0%, 20%)' };
    case 'fire':
      return { backgroundColor: 'hsl(343, 100%, 26%)' };
    case 'water':
      return { backgroundColor: 'hsl(189, 71%, 40%)' };
    case 'grass':
      return { backgroundColor: 'hsl(109, 100%, 25%)' };
    case 'electric':
      return { backgroundColor: 'hsl(58, 78%, 35%)' };
    case 'psychic':
      return { backgroundColor: 'hsl(312, 88%, 30%)' };
    case 'ice':
      return { backgroundColor: 'hsl(189, 71%, 30%)' };
    case 'dragon':
      return { backgroundColor: 'hsl(343, 100%, 18%)' };
    case 'dark':
      return { backgroundColor: 'hsl(312, 0%, 10%)' };
    case 'fairy':
      return { backgroundColor: 'hsl(302, 100%, 40%)' };
    case 'unknown':
      return { backgroundColor: 'hsl(11, 0%, 50%)' };
    case 'shadow':
      return { backgroundColor: 'hsl(312, 0%, 20%)' };
    default:
      return { backgroundColor: 'hsl(218, 19%, 23%)' };
  }
};

export default backgroundColorType;
