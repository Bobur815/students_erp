let object={
    product: [ ['name', 'gilam' ], ['weight', 20] ],
    country: [ ['country', 'Turkey' ], ['city', 'Istanbul' ] ],
    laptop: [ ['name', 'Lenovo' ], ['weight', '2kg' ] ]
  };
  
  let result={};
  
  for (let key in object) {
    result[key]=Object.fromEntries(object[key]);
  }
  
  console.log(result);