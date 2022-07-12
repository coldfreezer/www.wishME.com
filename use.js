function required() {
  var empt = document.forms["form1"]["text1"].value;
  if (empt == "") {
    alert("Please enter your name");
    return false;
  } else {
    alert("your name is " + empt);
    return true;
  }
}

function lettersonly(input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}

function print() {
  var rad1 = document.getElementById("rad1").value;

  // Storing the value above into localStorage
  localStorage.setItem("rad1", rad1);

  return true;
}

//  document.getElementById("output").innerHTML=rad1;
