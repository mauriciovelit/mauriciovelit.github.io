function displayTestimonial(value) {
  var testimonial = ["testimonialQuote1", "testimonialQuote2", "testimonialQuote3", "testimonialQuote4"];
  var employee = ["speaker1", "speaker2", "speaker3", "speaker4"];
  var role = ["companyRole1", "companyRole2", "companyRole3", "companyRole4"];


  for (var i = 0; i < testimonial.length; i++) {
    var testimonialIndex = document.getElementById(testimonial[i]);
    testimonialIndex.style.display = "none";
  }
  for (var j = 0; j < employee.length; j++) {
    var employeeIndex = document.getElementById(employee[j]);
    employeeIndex.style.display = "none";
  }

  for (var k = 0; k < role.length; k++) {
    var roleIndex = document.getElementById(role[k]);
    roleIndex.style.display = "none";
}

  var showTestimonial = document.getElementById(testimonial[value]);
  showTestimonial.style.display = "block";

  var showEmployee = document.getElementById(employee[value]);
  showEmployee.style.display = "block";

  var showRole = document.getElementById(role[value]);
  showRole.style.display = "block";
}

/*

*/