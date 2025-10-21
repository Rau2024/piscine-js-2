function first(myArrOrString) {
  return myArrOrString[0];
}

function last(myArrOrString) {
  return myArrOrString[myArrOrString.length - 1];
}

function kiss(myArrOrString) {
  return [last(myArrOrString), first(myArrOrString)];
}
