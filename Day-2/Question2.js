

function numAdd(n,k){
    if(n===1) return 0
  
    let parent=numAdd(n-1,k/2)
    console.log("parent",parent)
    let isOdd=k%2===1
    if (parent === 0) {
          return isOdd ? 0 : 1;
      } else {
          return isOdd ? 1 : 0;
      }
    
  }
  
  function num(n, k) {
      if (n === 1) {
          return 0;
      }
      let length = Math.pow(2, n - 1);
      let mid = length / 2;
      if (k <= mid) {
          return kthGrammar(n - 1, k);
      } else {
          return 1 - kthGrammar(n - 1, k - mid);
      }
  };
  
  console.log(num(4,5))

  var kthGrammar = function(n, k) {
    if (n === 1) {
        return 0;
    }
    let length = Math.pow(2, n - 1);
    let mid = length / 2;
    if (k <= mid) {
        return kthGrammar(n - 1, k);
    } else {
        return 1 - kthGrammar(n - 1, k - mid);
    }
};
