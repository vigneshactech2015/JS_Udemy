const convertTitleCase = function (title) {
    const capitzalize = str => str[0].toUpperCase() + str.slice(1);
  
    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  
    const titleCase = title
      .toLowerCase()
      .split(' ')
      .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
      .join(' ');
  
    return capitzalize(titleCase);
  };
  
  console.log(convertTitleCase('this is a nice title'));
  console.log(convertTitleCase('this is a LONG title but not too long'));
  console.log(convertTitleCase('and here is another title with an EXAMPLE'));