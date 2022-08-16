///////////////////////////////////////
// Destructuring Objects

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours : {
        fri: {
          open: 12,
          close: 22,
        },
        sat: {
          open: 11,
          close: 23,
        },
        tues: {
          open: 0, // Open 24 hours
          close: 24,
        },
      }
    }  

  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);

  //to change the names
  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);
  
  // Default values
  const { menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters);
  
  // Mutating variables
  let a = 111;
  let b = 999;
  const obj = { a: 23, b: 7, c: 14 };
  ({ a, b } = obj);
  console.log(a, b);
  
  // Nested objects
  const {
    fri: { open: o, close: c },
  } = openingHours;
  console.log(o, c);
  
  
  
  
  
  ///////////////////////////////////////
  // Destructuring Arrays
  const arr = [2, 3, 4];

  const [x, y, z] = arr;
  console.log(x, y, z);
  console.log(arr);



  let [main, , secondary] = restaurant.categories;
  console.log(main, secondary);
  // Switching variables
  // const temp = main;
  // main = secondary;
  // secondary = temp;
  // console.log(main, secondary);
  [main, secondary] = [secondary, main];
  console.log(main, secondary);
  // Receive 2 return values from a function
  const [starter, mainCourse] = restaurant.order(2, 0);
  console.log(starter, mainCourse);
  // Nested destructuring
  const nested = [2, 4, [5, 6]];
  // const [i, , j] = nested;
  const [i, , [j, k]] = nested;
  console.log(i, j, k);
  // Default values
  const [p = 1, q = 1, r = 1] = [8, 9];
  console.log(p, q, r);