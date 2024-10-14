export default function getNeighborhoodsList() {
    
    sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    
    addNeighborhood = add() = newNeighborhood => {
      sanFranciscoNeighborhoods.push(newNeighborhood);
      return sanFranciscoNeighborhoods;
    };
  }