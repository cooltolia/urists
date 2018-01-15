$(":input").inputmask();

/**
 * Calc button submit
 */
$(".calculator__submit").on("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    var contract_val_array = $("#e-date").val().split("/");
    var actual_val_array = $("#r-date").val().split("/");

    var flat_price = parseInt($("#price").val().split("/"));

    var contract_date = new Date(contract_val_array[2], contract_val_array[1], contract_val_array[0]);
    var actual_date = new Date(actual_val_array[2], actual_val_array[1], actual_val_array[0]);

    /**
     * hours*minutes*seconds*milliseconds
     * @type {number}
     */
    var oneDay = 24 * 60 * 60 * 1000;

    /**
     * Difference between two dates
     * @type {number}
     */
    var diffDays = Math.round(Math.abs((contract_date.getTime() - actual_date.getTime()) / (oneDay)));

    var refinancing = 9;

    var fine = ((flat_price * diffDays * refinancing) / (300 * 100)) * 2;
    var moral = 10000;
    var costs = 10000;

    $("#fee").val(fine);
    $("#moral").val(moral);
    $("#costs").val(costs);

    $("#result").val(costs + moral + fine);

});

/**
 * Format input in flat price input
 */
$("#price").on("keyup", function () {

    debugger;
    var value = $("#price").val();

    value = value.toString().replace(/[^\d]/g, "");
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    $("#price").val(value);

});