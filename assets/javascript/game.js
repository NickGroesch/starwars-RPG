document.addEventListener("DOMContentLoaded", function() {
  var yoda = $("<img>");
  yoda.addClass("pc");
  yoda.attr("id", "yoda");
  yoda.attr("src", "./assets/images/yoda.jpg");
  yoda.attr("data-attack", 8);
  yoda.attr("data-ca", 20);
  $(".players").append(yoda);
  console.log(yoda);

  var chewy = $("<img>");
  chewy.addClass("pc");
  chewy.attr("id", "chewy");
  chewy.attr("src", "./assets/images/chewbacca.jpg");
  chewy.attr("data-attack", 25);
  chewy.attr("data-ca", 30);
  $(".players").append(chewy);

  var darth = $("<img>");
  darth.addClass("pc");
  darth.attr("id", "darth");
  darth.attr("src", "./assets/images/darth-vader-lamp.jpg");
  darth.attr("data-attack", 5);
  darth.attr("data-ca", 25);
  $(".players").append(darth);

  var luke = $("<img>");
  luke.addClass("pc");
  luke.attr("id", "luke");
  luke.attr("src", "./assets/images/lukeskywalker.jpg");
  luke.attr("data-attack", 10);
  luke.attr("data-ca", 15);
  $(".players").append(luke);

  var pc = [yoda, chewy, darth, luke];
  var charSelect = false;
  var myPlayer;
  if (charSelect == false) {
    $(document).on("click", ".pc", function() {
      myPlayer = this;
      //   myPlayer.addClass("mine");
      console.log(myPlayer);
      for (i = 0; i < pc.length; i++) {
        if (pc[i] != myPlayer) {
          console.log(this, "is not my player");
        }
      }
    });
  }
});
