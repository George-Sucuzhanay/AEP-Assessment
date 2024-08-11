/**
@param {number} num
@returns {number}
*/

module.exports = function(num){
  //Solution goes here
  let result = num.toString(2)

  let bit_count = 0
  for(let i =0; i < result.length; i++){
    if(result[i] == '1'){
      bit_count += 1
    }
  }
  return bit_count
}