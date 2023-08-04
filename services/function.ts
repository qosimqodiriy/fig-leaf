export default function formatPrice(price: number) {
  if (price == 0) {
    return price
  } else {
    let plus = true
    let myArray = [];

    if (price < 0) {
      plus = false
      price = -1 * price
    }

    if (price) {
      let num = price.toString().split('');
      num = num.reverse();

      for (let i = 0; i < num.length; i++) {
        if (i > 0 && i % 3 == 0) {
          myArray.unshift(' ')
        }
        myArray.unshift(num.slice(i, i + 1))
      }


      if (plus) {
        return myArray.join('');
      } else {
        return `-${myArray.join('')}`;
      }
    }
  }
}