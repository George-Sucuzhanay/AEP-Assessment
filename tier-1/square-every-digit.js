/**
@param {number} num
@returns {number}
*/
module.exports = function(num){
  //Solution goes here
  tmp_char = ""
  let new_num = num.toString();

  for(let i = 0; i < new_num.length; i++){
    let tmp_num = parseInt(new_num[i]) * parseInt(new_num[i])
    let tmp_word = tmp_num.toString()
    tmp_char += tmp_word
  }
  return parseInt(tmp_char)
}

