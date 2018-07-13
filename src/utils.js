export const getEmployee = (array, value) => {
  var obj = array.filter(function (arr, i){
    return arr.id === value;
        
  });

  return obj[0];
};