function validate() {
  var apply = document.myform.apply.value;
  var name = document.myform.name.value;
  var sname = document.myform.sname.value;
  var num = document.myform.num.value;
  var adharno = document.myform.adharno.value;
  var panno = document.myform.panno.value;
  var voterid = document.myform.voterid.value;
  if (apply == null || apply == "number") {
    alert("apply the type");
    return false;
  } else if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (sname == null || sname == "") {
    alert("sname cannot be blank");
    return false;
  } else if (isNaN(num)) {
    alert("Enter the mobile no");
    return false;
  } else if (num.length < 10) {
    alert("Enter the 10 digits mob no");
    return false;
  } else if (isNaN(adharno)) {
    alert("Enter the adhar no");
    return false;
  } else if (adharno.length < 12) {
    alert("Enter the 12 digits adhar no");
    return false;
  } else if (panno.length < 10) {
    alert("Enter the 10 digits pan no");
    return false;
  } else if (voterid.length < 10) {
    alert("Enter the 10 digits voter id no");
    return false;
  }
}
