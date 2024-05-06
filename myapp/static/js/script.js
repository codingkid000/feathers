const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
$(document).ready(() => {
  if ($(document).innerWidth() > 550) {
    $(".toggler .material-symbols-outlined").addClass("active");
    $(".sider").css("width", "250px");
    $(".logo_section").css("width", "250px");
    $(".logo_section img").css("width", "250px");
    $(".nav_link .nav_text").css("display", "block");
    $(".logout_icon span").css("display", "block");
  } else {
    $(".toggler .material-symbols-outlined").removeClass("active");
    $(".sider").css("width", "60px");
    $(".logo_section").css("width", "60px");
    $(".logo_section img").css("width", "60px");
    $(".nav_link .nav_text").css("display", "none");
    $(".logout_icon span").css("display", "none");
  }
  $(".toggler").click(() => {
    //   console.log("clicked");
    if ($(".toggler .material-symbols-outlined").hasClass("active")) {
      $(".toggler .material-symbols-outlined").removeClass("active");

      $(".sider").css("width", "60px");
      $(".logo_section").css("width", "60px");
      $(".logo_section img").css("width", "60px");
      $(".nav_link .nav_text").css("display", "none");
    } else {
      $(".toggler .material-symbols-outlined").addClass("active");
      $(".sider").css("width", "250px");
      $(".logo_section").css("width", "250px");
      $(".logo_section img").css("width", "250px");
      $(".nav_link .nav_text").css("display", "block");
    }
  });
  $(".logout_icon").click(() => {
    // console.log('clicked')
    Swal.fire({
      title: "Are you sure want to logout",
      // text: "That thing is still around?",
      icon: "warning",
      showCancelButton: true,
      // confirmButtonColor: "#007991",
      confirmButtonText: `
     Logout!
  `,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      // console.log(result)
      if (result.isConfirmed) {
        // console.log("Saved!", "", "success");
      } else if (result.isDenied) {
        // console.log("Changes are not saved", "", "info");
      }
    });
  });
});
$(document).ready(() => {
 new DataTable("#user_table");
 new DataTable("#projects_table");
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  var today = now.getFullYear() + "-" + month + "-" + day;
  $("#daily_date").val(today);
});

// add expoense form add

$("#add_expense").click(() => {
  console.log($(".appended_expense").length);
  let i = $(".appended_expense").length;
  $(".add_expense_section").append(
    `<div class="appended_expense"><h3 class="text-center py-3">Expense ${
      i + 1
    }</h3><div class="form-group mb-3"><label for="expense_type">Select Project</label> <select class="form-select expense_type" id="expense_type"> <option  value="labour_expense" selected>Labour Expense</option><option value="material_expense">Material Expense</option><option value="additional_expense">Additional Expense</option></select></div><div class="dynamic_inputs"><div class="mb-3"><label for="labour_category">Select Labour Category</label> <select class="form-select labour_category" id="labour_category"> <option  value="painter" selected>Painter</option><option value="carpenter">Carpenter</option><option value="Mason">Mason</option></select></div><div class="mb-3"><label for="no_of_labours">No of Labours</label><Input type="number" class="form-control" /></div><div class="mb-3"><label for="salary_amount">Salary Amount</label><Input type="number" class="form-control" /></div><div class="mb-3"><label for="remarks">Remarks</label><textarea class="form-control"></textarea></div></div></div>`
  );

  // console.log( $('.expense_type'))
  $(".expense_type").each((index, el) => {
    // console.log(el)
    $(el).change((e) => {
      let labour = `<div class="mb-3"><label for="labour_category">Select Labour Category</label> <select class="form-select labour_category" id="labour_category"> <option  value="painter" selected>Painter</option><option value="carpenter">Carpenter</option><option value="Mason">Mason</option></select></div><div class="mb-3"><label for="no_of_labours">No of Labours</label><Input type="number" class="form-control" /></div><div class="mb-3"><label for="salary_amount">Salary Amount</label><Input type="number" class="form-control" /></div><div class="mb-3"><label for="remarks">Remarks</label><textarea class="form-control"></textarea></div>`;
      let material = `<div class="mb-3"><label for="material">Material Name</label><Input type="text" class="form-control" /></div><div class="mb-3"><label for="material_amount">Material Amount</label><Input type="number" class="form-control" /></div>`;
      let additional = `<div class="mb-3"><label for="additional_expense_type">Additional Expense Name</label><Input type="text" class="form-control" /></div><div class="mb-3"><label for="additional_expense_amount">Additioanl Expense Amount</label><Input type="number" class="form-control" /></div>`;
      console.log(e.target.value);
      console.log($(e.target).siblings(".dynamic_inputs"))
      if (e.target.value === "material_expense") {
        $(e.target).parent().siblings(".dynamic_inputs").html(material);
      } else if (e.target.value === "additional_expense") {
        $(e.target).parent().siblings(".dynamic_inputs").html(additional);
      }else{
        $(e.target).parent().siblings(".dynamic_inputs").html(labour);
      }
    });
  });
});
