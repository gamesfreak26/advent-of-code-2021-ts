let report:string[] = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2'
]

export const task1 = (directionsArr: string[]) => {
  // array of arrays
  let splitdirectionsArr = directionsArr.map(val => val.split(' '));

  let horizontalPosition: number = 0;
  let verticalPosition: number = 0;

  splitdirectionsArr.map(directionPosition => {
    let direction: string = directionPosition[0];
    let positionString: string = directionPosition[1];

    let position: number = parseInt(positionString);

    switch (direction) {
      case 'forward':
        horizontalPosition += position;
        break;
      case 'up':
        verticalPosition -= position;
        break;
      case 'down':
        verticalPosition += position;
        break;
    }
  });

  return horizontalPosition * verticalPosition;
}

export const splitArrayByNewLines = (stringArr) => {
  return stringArr.split('\n');
} 
