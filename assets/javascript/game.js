document.addEventListener("DOMContentLoaded", function() {
  var yoda = $("<img>");
  yoda.addClass("pc");
  yoda.attr("id", "yoda");
  yoda.attr("src", "./assets/images/yoda.jpg");
  yoda.attr("data-attack", 8);
  yoda.attr("data-ca", 20);
  yoda.attr("data-hp", 100);
  $(".players").append(yoda);
  console.log(yoda);

  var chewy = $("<img>");
  chewy.addClass("pc");
  chewy.attr("id", "chewy");
  chewy.attr("src", "./assets/images/chewbacca.jpg");
  chewy.attr("data-attack", 25);
  chewy.attr("data-ca", 30);
  chewy.attr("data-hp", 130);
  $(".players").append(chewy);

  var darth = $("<img>");
  darth.addClass("pc");
  darth.attr("id", "darth");
  darth.attr("src", "./assets/images/darth-vader-lamp.jpg");
  darth.attr("data-attack", 5);
  darth.attr("data-ca", 25);
  darth.attr("data-hp", 125);
  $(".players").append(darth);

  var luke = $("<img>");
  luke.addClass("pc");
  luke.attr("id", "luke");
  luke.attr("src", "./assets/images/lukeskywalker.jpg");
  luke.attr("data-attack", 10);
  luke.attr("data-ca", 15);
  luke.attr("data-hp", 115);
  $(".players").append(luke);

  var pc = [yoda, chewy, darth, luke];
  var charSelect = false;
  var myPlayer;
  var attackIncrease = 0;
  var enemyHealth;
  if (charSelect == false) {
    $(document).on("click", ".pc", function() {
      myPlayer = this;
      //  ea this.addClass("mine");
      $(myPlayer).addClass("mine");
      //   console.log(myPlayer + "20202");
      attackIncrease = $(".mine").attr("data-attack");

      $(".pc:not(.mine)").addClass("others");
      $(".pc:not(.mine)").appendTo(".enemies");
      //   for (i = 0; i < pc.length; i++) {
      //     if (pc[i] !== myPlayer) {
      //       console.log(pc[i], "is not my player");
      //     }
      //   }
      charSelect = true;
    });
  }
  var enemySelect = false;
  if (enemySelect == false) {
    $(document).on("click", ".others", function() {
      $(this).prependTo(".opponent");
      enemyHealth = $(this).attr("data-hp");
      enemySelect = true;
      $(".enemy-health").text("HP: " + enemyHealth);
    });
  }

  $(document).on("click", ".attack", function() {
    enemyHealth = $(".opponent > .others").attr("data-hp");
    var playerAttack = $(".mine").attr("data-attack");
    var playerHealth = $(".mine").attr("data-hp");
    var enemyAttack = $(".opponent > .others").attr("data-ca");

    enemyHealth -= playerAttack;
    playerAttack += attackIncrease;
    playerHealth -= enemyAttack;

    $(".mine").attr("data-attack", playerAttack);
    $(".opponent > .others").attr("data-hp", enemyHealth);
    $(".enemy-health").text("HP: " + enemyHealth);
  });
});
