$(document).ready(function() {
  $("#quiz").submit(function(event) {
    var company = $("input:radio[name=company]:checked").val();
    var developer = $("input:radio[name=developer]:checked").val();
    var difficulty = $("input:radio[name=difficult]:checked").val();
    var speed = $("input:radio[name=speed]:checked").val();
    var popular = $("input:radio[name=popular]:checked").val();
    var c = 0;
    var ruby = 0;
    var php = 0;

    if(company === "yes"){
      c += 1;
    } else {
      ruby += 1;
    }
    if(developer === "yes"){
      php += 1;
    } else {
      c += 1;
    }
    if(difficulty === "yes"){
      php += 1;
    } else {
      c += 1;
    }
    if(speed === "yes"){
      ruby += 1;
    } else {
      php += 1;
    }
    if(popular === "yes"){
      ruby += 1;
    } else {
      php += 1;
    }

    $(".result").show()
    $("#php").text(php);
    $("#ruby").text(ruby);
    $("#c").text(c);

    event.preventDefault();

  });
});
