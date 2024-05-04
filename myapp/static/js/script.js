

      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
      $(document).ready(() => {
        
        if ($(document).innerWidth() > 550) {
          $(".toggler .material-symbols-outlined").addClass("active");
          $(".sider").css("width", "250px");
          $('.logo_section').css('width','250px')
          $('.logo_section img').css('width','250px')
          $(".nav_link .nav_text").css("display", "block");
          $(".logout_icon span").css("display", "block");
        } else {
          $(".toggler .material-symbols-outlined").removeClass("active");
          $(".sider").css("width", "60px");
          $('.logo_section').css('width','60px')
          $('.logo_section img').css('width','60px')
          $(".nav_link .nav_text").css("display", "none");
          $(".logout_icon span").css("display", "none");
        }
        $(".toggler").click(() => {
          //   console.log("clicked");
          if ($(".toggler .material-symbols-outlined").hasClass("active")) {
            $(".toggler .material-symbols-outlined").removeClass("active");

            $(".sider").css("width", "60px");
            $('.logo_section').css('width','60px')
            $('.logo_section img').css('width','60px')
            $(".nav_link .nav_text").css("display", "none");
         
          } else {
            $(".toggler .material-symbols-outlined").addClass("active");
            $(".sider").css("width", "250px");
            $('.logo_section').css('width','250px')
            $('.logo_section img').css('width','250px')
            $(".nav_link .nav_text").css("display", "block");
          }
        });
        $('.logout_icon').click(()=>{
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
        })
      });
$(document).ready(()=>{
    new DataTable('#example');
})