function validateForm() {
    let name = document.forms["form"]["fname"] ["lname"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  }