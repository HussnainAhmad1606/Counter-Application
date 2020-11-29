let increaseBtn = document.querySelector("#increaseBtn");
let decreaseBtn = document.querySelector("#decreaseBtn");
let counterTimer = document.querySelector("#counterTimer");

increaseBtn.addEventListener("click", increaseValue);
decreaseBtn.addEventListener("click", decreaseValue);

function increaseValue() {
var initialValue = Number(counterTimer.innerHTML);
if (initialValue==1000000){
	initialValue = -1;
let error = document.querySelector("#error");
error.innerHTML = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>NOTICE!</strong> Maximum value of counter which is 1000000 has been reached. Counter is now started again from 0.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
    </div>
`;
}
var increasedValue = initialValue + 1;
counterTimer.innerHTML = increasedValue;
console.log("Value has been Increased");

}

function decreaseValue() {
var initialValue = Number(counterTimer.innerHTML);
if (initialValue==-1000000){
	initialValue = 1;
let error = document.querySelector("#error");
error.innerHTML = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>NOTICE!</strong> Minimum value of counter which is -1000000 has been reached. Counter is now started again from 0.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
    </div>
`;
}
var decreasedValue = initialValue - 1;
counterTimer.innerHTML = decreasedValue;
console.log("Value has been Decreased");
}
