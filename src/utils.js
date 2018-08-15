export const getElementById = (array, value) => {
  var obj = array.filter(function (arr, i){
    return arr.id === value;
        
  });

  return obj[0];
};