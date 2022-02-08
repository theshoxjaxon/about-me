let elHead = document.querySelector(".box__head");
let elDesc = document.querySelector(".box__desc");

myInfo.forEach((item) => {
  console.log(item);
  elHead.textContent = item.head;
  elDesc.textContent = item.desc;
});
// console.log(myInfo);
