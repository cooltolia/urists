(function($){
  /* ---------набор функций--------------- */

  //автоувеличение ширины инпута
  function resizeInput() {
    var l =  $(this).val().length
    $(this).css('width', (l*16)+3);
  }
  //автоувеличение ширины инпута

  //получить ральный верхний левый угол обьекта в рекурсии
  var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);

    return {
      top: top,
      left: left
    };
  }; 
  //получить ральный верхний левый угол обьекта в рекурсии

  /* биндим контекст */
  function bind(func, context) { // первое перменная - функция, второе контекст
    return function() { // возвращаем анаонимную функцию, при ее вызове выоветься func.apply с уже имеющимя контекстом из переменной context
      return func.apply(context, arguments); //arguments любое кол во аргументов. такой вызов свяжет функцию с ранее переданным аргументом
    };
  }

  /* ---------ннабор функций---------н */



  $(document).ready(function(){
    $("body").removeClass("pageload");

    //scroll-to  - прокрутчик
    $(".scroll-to").click(function() {
      var id = $(this).attr("rel");
      var to = $("#"+id).offset().top-10;
      $('html, body').animate({
        scrollTop: to
      }, 500);
    });

    //f-ajax   - отправка форм
    $('.f-ajax').on('submit', function(event){
      event.preventDefault();
      var $form = $(this);

      var data = $form.serialize();
      data['token'] = "tnbm567sgfg4556sdfDSg";

      $.ajax({
        url: $form.attr("action"),
        type: 'POST',
        data: '',
        success: function(result) {
          if(result == "OK"){
            alert("Заявка отправлена!");       
          }
          else
            alert("Произошла ошибка!");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          alert("Произошла ошибка!");
        }
      });
    });

    

    
    

    
    

    
    $(":input").inputmask();

    

    /**

     * Calc button submit

     */

    $(".calculator__submit").on("click", function (event) {

    

        event.preventDefault();

        event.stopPropagation();

    

        var submit = $('.calculator__submit');

        var button = $('.calculator__button');

    

        submit.addClass('disabled');

        submit.attr('disabled', true);

    

        button.addClass('active');

        button.attr('data-target', '#modal1');

        button.attr('href', '#modal1');

    

        var contract_val_array = $("#e-date").val().split("/");

        var actual_val_array = $("#r-date").val().split("/");

    

        var flat_price = $("#price").val();

        flat_price = flat_price.replace(/ /g, '');

        flat_price = parseInt(flat_price, 10);

    

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

    

        //debugger;

        var value = $("#price").val();

    

        value = value.toString().replace(/[^\d]/g, "");

        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    

        $("#price").val(value);

    

    });

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    
  });

})(jQuery)