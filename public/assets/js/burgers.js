$(document).ready(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("burgerid");

        var updatedBurger = {
            devoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedBurger
        }).then(function () {
            console.log("changed burger", id);
            location.reload();
        });
    });
});