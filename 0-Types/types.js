// NOTE: types questions
// console.log(typeof undefined); // 'undefined'
// console.log(typeof 0); // 'number'
// console.log(typeof true); // 'boolean'
// console.log(typeof "foo"); // 'string'
// console.log(typeof {}); // 'object'
// console.log(typeof []); // 'object'
// console.log(typeof null); // 'null' || 'object'
// console.log(typeof function () {}); // 'function' || 'object'
// console.log(typeof (() => {})()); // 'object' || 'function'
// console.log(typeof Symbol()); // 'symbol'
// console.log(window); // 'string'


// NOTE: Как провалидировать объект?

/* Answers */
{
  // function checkObject(object) {
  //   const proto = Object.prototype.toString.call(object)

  //   if (proto === '[object Object]') {
  //      console.log('It is an object')
  //   }

  //   else console.log('It is not an object, it is', proto)
  // }
  
  // printObject(Symbol())
}

// NOTE: Training

/* Types questions */
{
  // console.log({} === {}); // false
  // console.log({} == {}); //false
  // console.log([] == {}); // false
  // console.log([] === []); // false

  // console.log({ valueOf: () => 3 } == 3); // false
  // console.log([] == ![]); // false || true
  // console.log([1, 2, 3] == '1,2,3'); // true

  console.log('0' == 0); // true
  console.log(true == 1); // true
  console.log(true == 2); // true
  console.log(0 == -0); // true
  console.log(false == 0); // true
  console.log(false == -0); // true
  console.log(NaN == false); // false | true
  console.log(NaN == NaN ); // false

  // console.log(NaN + 1);
  // console.log(undefined + 1);
  // console.log(null + 1);
  // console.log(null + 'null');
  // console.log('undefined' + undefined);
  // console.log([] + 'hello');

  // console.log(String([[], [[1], 2]]));
  // console.log(Number([[], [[1], 2]]));
  // console.log(Number({ valueOf: () => 4 }));
  // console.log(String([[[[]]]]));
  // console.log(String({ valueOf: () => 2 }));
  // console.log(String({ valueOf: () => 'string' }));
  // console.log(String({ toString: () => 'i am object' }));
  // console.log(Number({ toString: () => 'old unused number' }));
  // console.log(String({ toString: () => 1 }));
  // console.log(String([{ toString: () => 'object number 1' }, { toString: () => 'object number 2' }]));
  // console.log(Boolean(new Boolean(false)));

  // console.log(1 > 2);
  // console.log(1 < 2);
  // console.log(1 < 2 < 3);
  // console.log(3 > 2 > 1);

  // console.log(1 && 2);
  // console.log(1 || 2);
  // console.log();

}

// NOTE: Реализуйте полифилл для Object.is

/* Answers */ {
  function objectIs(x, y) {
    // SameValue algorithm
    if (x === y) {
      // return true if x and y are not 0, OR
      // if x and y are both 0 of the same sign.
      // This checks for cases 1 and 2 above.
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // return true if both x AND y evaluate to NaN.
      // The only possibility for a variable to not be strictly equal to itself
      // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
      // This checks for case 3.
      return x !== x && y !== y;
    }
  }
}

// function objectIs(val1, val2) {
//   // ...напишите код здесь
// }

