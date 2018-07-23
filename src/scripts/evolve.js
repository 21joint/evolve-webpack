$(document).ready(function () {

  $('.bwdash-nav--toggler').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('bwdash-nav--open');
  });

});


var buttonCheked = function (callback) {

  $(".bwdash-btn--rounded").on("click", function () {
    callback(true);
  });

};

buttonCheked(function (cheked) {
  if (cheked) {

    $(".dining-redeem-confirm--btn").css({"background-color": "#b8ea86"});
  } else {

  }
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
    $(".bwdash-list--item.cheked").css({"opacity": "0.3"});
  } else {
    //Acciones si el usuario no confirma
    $("#diningConfirmModalCenter").modal('hide');
  }
});
