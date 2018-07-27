$(document).ready(function () {

  $('.bwdash-nav--toggler').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('bwdash-nav--open');
  });

  $(".bwdash-list--item").on("click", function () {

    $(".dining-redeem-confirm--btn").addClass("bg-green-cheked");
  });

});


var modalConfirm = function (callback) {

  $("#modal-btn-yes").on("click", function () {
    callback(true);
    $("#diningConfirmModalCenter").modal('hide');
  });

  $("#modal-btn-no").on("click", function () {
    callback(false);
    $("#diningConfirmModalCenter").modal('hide');
  });
};

modalConfirm(function (confirm) {
  if (confirm) {
    //Acciones si el usuario confirma
    $(".bwdash-list--item").css({"opacity": "0.3"});
  } else {
    //Acciones si el usuario no confirma
    $("#diningConfirmModalCenter").modal('hide');
  }
});
