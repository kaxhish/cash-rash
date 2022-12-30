window.onload = () => {
    const billAmount = document.querySelector(".bill");
    const cashAmount = document.querySelector(".cash");
    const checkBtn = document.querySelector(".check");
    const htmlnote = document.querySelectorAll(".everynote");
    const notes = [2000, 500, 200, 100, 50, 1];
  
    checkBtn.addEventListener("click", function () {
        if(Number(cashAmount.value) === Number(billAmount.value)){
            alert("bill value cant be equal to given money");
        }
      if (billAmount.value > 0) {
        if (Number(cashAmount.value) >= Number(billAmount.value)) {
          const returnMoney = Number(cashAmount.value) - Number(billAmount.value);
          returning(returnMoney);
        }
        else{
          alert("give more cash,,bill is not complete");
        }
      } else {
        alert("bill amout is not enough..please pay bill");
      }
     
    });
  
    function returning(money) {
      for (let i = 0; i <= notes.length; i++) {
        const moneyNotes = Math.trunc(money / notes[i]);
        money = money % notes[i];
        htmlnote[i].innerText = moneyNotes;
      }
    }
  };
  