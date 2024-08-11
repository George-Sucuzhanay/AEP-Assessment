/**
 * Definition for TreeNode.
 * 
  *class TreeNode {
  *  constructor(val, left, right){
  *    this.val = (val===undefined ? 0 : val)
  *    this.left = (left===undefined ? null : left)
  *    this.right = (right===undefined ? null : right)
  *  }
  *}
 * 
*/

/**
@param {TreeNode} list
@returns {number}
*/

module.exports = function countNodes(list){
  //Solution goes here
  // some type of linked list or binary search?
  if(!list){
    // base case
    return 0
  }
  // recursive call
  // something is off in the recursive call i don't know
  return 1 + countNodes(list.left) + countNodes(list.right);
  
}