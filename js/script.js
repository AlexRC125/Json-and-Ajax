var pageCounter = 1;
var $animalContainer = $("#animal-info");
var $btn = $("#btn");

$btn.on("click", function() {
  $.ajax({
    url: 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json',
    method: 'GET',
    success: function(data) {
      renderHTML(data);
    },
    error: function() {
      console.log("Error: Could not retrieve data from the server.");
    }
  });

  pageCounter++;
  if (pageCounter > 3) {
    $btn.addClass("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (var i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

    for (var ii = 0; ii < data[i].foods.likes.length; ii++) {
      htmlString += (ii === 0 ? "" : " and ") + data[i].foods.likes[ii];
    }

    htmlString += " and dislikes ";

    for (var ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      htmlString += (ii === 0 ? "" : " and ") + data[i].foods.dislikes[ii];
    }

    htmlString += ".</p>";
  }

  $animalContainer.append(htmlString);
}
