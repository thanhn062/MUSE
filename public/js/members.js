$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.lastName + " " + data.firstName);
    $(".user-bio").text(data.bio);
    $(".member-id").text(data.id);
    console.log(data);
  });
});

// Nav Bar
$(".histBtn").on("click", function () {
  histLoad();
});
$(".pwBtn").on("click", function () {
  pwLoad();
});
// Shows Pages
function histLoad() {
  $("#memberPage").hide();
  $("#pwChange").hide();
  $("#searchHist").show();
};
function pwLoad() {
  $("#memberPage").hide();
  $("#searchHist").hide();
  $("#pwChange").show();
};
