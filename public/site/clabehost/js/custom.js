/* 	Theme Name: Cube Host
	Author: Redcheap Theme
	Author URI:http://www.rctheme.com
    Version:1.0.0
    Created: 27 March 2019
*/

//SSL Certificate Plan Select start


$(document).ready(function(){
	"use strict";
    $("select#comodo-ssl").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".comodo-ssl").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".comodo-ssl").hide();
            }
        });
    }).change();
});

$(document).ready(function(){
	"use strict";
    $("select#positive-ssl").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".positive-ssl").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".positive-ssl").hide();
            }
        });
    }).change();
});

$(document).ready(function(){
	"use strict";
    $("select#wildcard-ssl").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".wildcard-ssl").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".wildcard-ssl").hide();
            }
        });
    }).change();
});

$(document).ready(function(){
	"use strict";
    $("select#ev-ssl").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".ev-ssl").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".ev-ssl").hide();
            }
        });
    }).change();
});


//SSL Certificate Plan Select End



$(document).ready(function(){
	"use strict";
    $("select#stellar").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".stellar").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".stellar").hide();
            }
        });
    }).change();
});


$(document).ready(function(){
	"use strict";
    $("select#stellar-plus").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".stellar-plus").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".stellar-plus").hide();
            }
        });
    }).change();
});

$(document).ready(function(){
	"use strict";
    $("select#stellar-business").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".stellar-business").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".stellar-business").hide();
            }
        });
    }).change();
});



$(document).ready(function(){
	"use strict";
    $("select#w-basic").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".w-basic").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".w-basic").hide();
            }
        });
    }).change();
});


$(document).ready(function(){
	"use strict";
    $("select#w-deluxe").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".w-deluxe").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".w-deluxe").hide();
            }
        });
    }).change();
});


$(document).ready(function(){
	"use strict";
    $("select#w-ultimate").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".w-ultimate").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".w-ultimate").hide();
            }
        });
    }).change();
});


$(document).ready(function(){
	"use strict";
    $("select#w-pro").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".w-pro").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".w-pro").hide();
            }
        });
    }).change();
});


$(document).ready(function(){
	"use strict";
    $("select#d-economy").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".d-economy").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".d-economy").hide();
            }
        });
    }).change();
});


$(document).ready(function(){
	"use strict";
    $("select#d-value").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".d-value").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".d-value").hide();
            }
        });
    }).change();
});


$(document).ready(function(){
	"use strict";
    $("select#d-deluxe").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".d-deluxe").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".d-deluxe").hide();
            }
        });
    }).change();
});



$(document).ready(function(){
	"use strict";
    $("select#r-starter").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".r-starter").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".r-starter").hide();
            }
        });
    }).change();
});


$(document).ready(function(){
	"use strict";
    $("select#r-economy").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".r-economy").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".r-economy").hide();
            }
        });
    }).change();
});


$(document).ready(function(){
	"use strict";
    $("select#r-deluxe").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".r-deluxe").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".r-deluxe").hide();
            }
        });
    }).change();
});



$(document).ready(function(){
	"use strict";
    $("select#r-ultimate").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".r-ultimate").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".r-ultimate").hide();
            }
        });
    }).change();
});


//Plan Tabbing JS

$(function() {
	"use strict";
  var $tabButtonItem = $('#tab-button li'),
      $tabSelect = $('#tab-select'),
      $tabContents = $('.tab-contents'),
      activeClass = 'is-active';

  $tabButtonItem.first().addClass(activeClass);
  $tabContents.not(':first').hide();

  $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
  });

  $tabSelect.on('change', function() {
    var target = $(this).val(),
        targetSelectNum = $(this).prop('selectedIndex');

    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
  });
});



