// Month name & number of days using switch-case

function monthInfo(month) {
  switch (month) {
    case 1:
      console.log('January, 31 days');
      break;

    case 2:
      console.log('February, 28 days (29 in a leap year)');
      break;

    case 3:
      console.log('March, 31 days');
      break;

    case 4:
      console.log('April, 30 days');
      break;

    case 5:
      console.log('May, 31 days');
      break;

    case 6:
      console.log('June, 30 days');
      break;

    case 7:
      console.log('July, 31 days');
      break;

    case 8:
      console.log('August, 31 days');
      break;

    case 9:
      console.log('September, 30 days');
      break;

    case 10:
      console.log('October, 31 days');
      break;

    case 11:
      console.log('November, 30 days');
      break;

    case 12:
      console.log('December, 31 days');
      break;

    default:
      console.log('Invalid month!');
  }
}

monthInfo(3); // March, 31 days
