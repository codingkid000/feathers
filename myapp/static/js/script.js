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
    `<div class="appended_expense"><div class="d-flex justify-content-between"><h3 class="text-center py-3">Expense ${
      i + 1
    }</h3><button type="button" class="btn btn-text text-primary"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#041d56" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button></div><div class="form-group mb-3"><label for="expense_type">Select Expense</label> <select class="form-select expense_type" required name="expense_type[]" id="expense_type"> <option  value="labour_expense" selected>Labour Expense</option><option value="material_expense">Material Expense</option><option value="additional_expense">Additional Expense</option></select></div><div class="dynamic_inputs"><div class="mb-3"><label for="labour_category">Select Labour Category</label> <select name='labour_category_add[]' required class="form-select labour_category" id="labour_category"> <option  value="painter" selected>Painter</option><option value="carpenter">Carpenter</option><option value="mason">Mason</option></select></div><div class="dynamic_labours">
    <div class="mb-3"><label for="no_of_painters">No of Painters</label><input required name="no_of_painters" type="number" class="form-control" /></div><div class="mb-3"><label for="painter_salary">Salary Amount</label><input required name="painter_salary" type="number" class="form-control" /></div><div class="mb-3"><label for="painter_remarks">Remarks</label><textarea name="painter_remarks" required class="form-control"></textarea></div></div></div>`
  );
  $(".labour_category").each((index, el) => {
    $(el).change((e) => {
      console.log(e.target.value);
      let painter = ` <div class="mb-3"><label for="no_of_painters">No of Painters</label><input required name="no_of_painters" type="number" class="form-control" /></div><div class="mb-3"><label for="painter_salary">Salary Amount</label><input required name="painter_salary" type="number" class="form-control" /></div><div class="mb-3"><label for="painter_remarks">Remarks</label><textarea name="painter_remarks" required class="form-control"></textarea></div>`
      let mason = ` <div class="mb-3"><label for="no_of_mason">No of Mason</label><input required name="no_of_mason" type="number" class="form-control" /></div><div class="mb-3"><label for="mason_salary">Salary Amount</label><input required name="mason_salary" type="number" class="form-control" /></div><div class="mb-3"><label for="mason_remarks">Remarks</label><textarea name="mason_remarks" required class="form-control"></textarea></div>`
      let carpenter = ` <div class="mb-3"><label for="no_of_carpenters">No of Carpenters</label><input required name="no_of_carpenters" type="number" class="form-control" /></div><div class="mb-3"><label for="carpenter_salary">Salary Amount</label><input required name="carpenter_salary" type="number" class="form-control" /></div><div class="mb-3"><label for="carpenter_remarks">Remarks</label><textarea name="carpenter_remarks" required class="form-control"></textarea></div>`
      console.log($(e.target),$(e.target).parent().siblings()[0])
      if(e.target.value === 'carpenter'){
      
        $($(e.target).parent().siblings()[0]).html(carpenter)
      }
      if(e.target.value === 'mason'){
        $($(e.target).parent().siblings()[0]).html(mason)
      }
      if(e.target.value === 'painter'){
        $($(e.target).parent().siblings()[0]).html(painter)
      }
    });
  });
  // console.log( $('.expense_type'))
  $(".expense_type").each((index, el) => {
    // console.log(el)
    $(el).change((e) => {
      let labour = `<div class="mb-3"><label for="labour_category">Select Labour Category</label> <select required class="form-select labour_category" name='labour_category_add[]' id="labour_category"> <option  value="painter" selected>Painter</option><option value="carpenter">Carpenter</option><option value="Mason">Mason</option></select></div><div class="dynamic_labours">
      <div class="mb-3"><label for="no_of_painters">No of Painters</label><input required name="no_of_painters" type="number" class="form-control" /></div><div class="mb-3"><label for="painter_salary">Salary Amount</label><input required name="painter_salary" type="number" class="form-control" /></div><div class="mb-3"><label for="painter_remarks">Remarks</label><textarea name="painter_remarks" required class="form-control"></textarea></div></div>`;
      let material = `<div class="mb-3"><label for="material">Material Name</label><input type="text" required class="form-control" name="material_name[]" /></div><div class="mb-3"><label for="material_amount">Material Amount</label><input name="material_amount[]"  type="number" required class="form-control" /></div>`;
      let additional = `<div class="mb-3"><label for="additional_expense_type">Additional Expense Name</label><input type="text" name="additional_name[]"  required class="form-control" /></div><div class="mb-3"><label for="additional_expense_amount">Additioanl Expense Amount</label><input type="number" name="additional_amount[]" required class="form-control" /></div>`;
      console.log(e.target.value);
      console.log($(e.target).siblings(".dynamic_inputs"));
      if (e.target.value === "material_expense") {
        $(e.target).parent().siblings(".dynamic_inputs").html(material);
      } else if (e.target.value === "additional_expense") {
        $(e.target).parent().siblings(".dynamic_inputs").html(additional);
      } else {
        $(e.target).parent().siblings(".dynamic_inputs").html(labour);
      }
    });
  });
});

$(document).ready(() => {
  $("#project_update_form").submit((e) => {
    e.preventDefault();
    let data = $("#project_update_form").serializeArray();

    console.log(data);
    var indexed_array = {};
    $.each(data, function () {
      if (indexed_array[this.name]) {
        if (!indexed_array[this.name].push) {
          indexed_array[this.name] = [indexed_array[this.name]];
        }
        indexed_array[this.name].push(this.value || "");
      } else {
        indexed_array[this.name] = this.value || "";
      }
    });
    console.log(indexed_array);
    alert(JSON.stringify(indexed_array))
  });
});
