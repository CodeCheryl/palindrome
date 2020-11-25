function palindrome(str) {
    str = document.getElementById("str").value;
    let str1 = str
      .toLowerCase()
      .replaceAll(/\W|_/g, "-")
      .split("")
      .filter((ele) => !ele.includes("-"));
    let str2 = str1.slice().reverse();
  
    if (JSON.stringify(str1) === JSON.stringify(str2)) {
      alert("It's a palindrome!");
      return;
    } else {
      alert("It's not a palindrome.");
      return;
    }
  }

  document.getElementById("str").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
     event.preventDefault();
      palindrome();
    }
  });