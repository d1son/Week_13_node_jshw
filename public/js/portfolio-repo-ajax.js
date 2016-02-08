$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/d1son/repos",
    success: function(repos) {
      for(var i = 0; i < repos.length; i++) {
        var newListItem = buildListGroup(repos[i]);
        $(".list-group").append(newListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("There was an error! Sorry for the inconvenience");
    }
  });

  function buildListGroup(repoData) {
    var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repoData.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";

    var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("list-group-item")
      .addClass("col-md-4")
      .append(repoData.full_name);
    return newLink;
  }
});