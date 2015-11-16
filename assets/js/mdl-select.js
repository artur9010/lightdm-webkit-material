$.fn.mdlselect = function(options){
  //  Function to provide a "material design" for the HTML <select> tag.
  //  Requires Google's mdl: http://www.getmdl.io/
  //  Places selected value in hidden field;
  //  id/name = "nameofthefieldfunctionisattachedto"_hidden

  var defaults = {
    value: [],
    label: [],
    fixedHeight: false,
    firstValueDefault: true,
    hoverColor: "#a8a8a8",
  };
  var options = $.extend(defaults, options);
  var field = this;
  var theHTML = "";

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.mdl-select-hoverable-action {background: ' + options.hoverColor + '}' +
                    '.mdl-select-hide {display: none}';
  document.getElementsByTagName('head')[0].appendChild(style);

  if (options.value.length == options.label.length && options.value.length > 0){
    theHTML =
      '<div id="mdl-select-container-' + field[0].id + '">' +
      '<input type="hidden" id="' + field[0].id + '_hidden" name="' + field[0].id + '_hidden" />' +
      '<button id="mdl_select_options_' + field[0].id +'" onclick="mdlSelectFieldFocus(this);" class="mdl-button mdl-js-button mdl-button--icon">' +
      	'<i id="show_mdl_select_options_icon_' + field[0].id +'" class="material-icons">keyboard_arrow_down</i>' +
      '</button>' +
      '<ul id="mdl-mdlselect-list-' + field[0].id +'" class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-select" for="mdl_select_options_' + field[0].id +'" style="width:30em; padding:1em;">';
    for (var selectLoop = 0; selectLoop < options.value.length; selectLoop++){
      theHTML +=
      '<li id="mdl-mdlselect-' + options.value[selectLoop] + '-' + field[0].id + '" class="mdl-mdlselect-hoverable" onclick="updateField(this);">' + options.label[selectLoop] + '</li>';
    }
      theHTML += '</ul></div>';
      //
      //                    Insert the content into DOM
      //
      var content = $(theHTML);
      content.css({"float": "right", "margin-top": ".75em;"});
      $(field.parent()).append(content);
      if (options.fixedHeight){
        $("#mdl-mdlselect-list-" + field[0].id).css({"height": options.fixedHeight, "overflow-y": "scroll"});
      }
  }

  //
  //                    Listeners
  //

  $("body").click(function(target){ //hides the options when a click happens outside of the select area
    if ($("#mdl-mdlselect-list-" + field[0].id).hasClass("mdl-select-hide") && target.target.id != field[0].id && $.inArray(target.target, autoComplete.find('.mdl-select')) < 0){
      $("#mdl-mdlselect-list-" + field[0].id).removeClass("is-visible");
    }
  });

  $(".mdl-mdlselect-hoverable").hover(
    function(e){
      $("#" + e.currentTarget.id).addClass("mdl-select-hoverable-action");
    },
    function(e){
      $("#" + e.currentTarget.id).removeClass("mdl-select-hoverable-action");
    }
  );
  if (options.firstValueDefault){
    updateDefaultField(options.value[0], options.label[0]);
  }
  $("#" + field[0].id).click(function(){openListOptions(field[0].id)});

  //
  //                    Functions, functions, what's your conjunction?
  //

  self.mdlSelectFieldFocus = function(incoming){
    var temp = incoming.id.split("_");
    if ($("#" + temp[3] + ":focus")){
			$("#" + temp[3]).focus();
		}
  }
  function updateDefaultField(value, label){
    $("#" + field[0].id + "_hidden").val(value);
		$(field).val(label);
		$(field).parent("div").addClass("is-dirty");
		$("#mdl-mdlselect-list").parent().removeClass("is-visible");
  }
  self.updateField = function(incoming){
    var temp = incoming.id.split("-");
    $("#" + field[0].id + "_hidden").val(temp[2]);
		$("#" + temp[3]).val($(incoming).text());
		$(field).parent("div").addClass("is-dirty");
		$("#mdl-mdlselect-list").parent().removeClass("is-visible");
  }
  self.openListOptions = function(incoming){
		simulateClick(incoming);
	}
	self.simulateClick = function(incoming){
    var evt = document.createEvent("MouseEvents");
  	evt.initMouseEvent("click", true, true, window,
    	0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var cb = document.getElementById('mdl_select_options_' + incoming);
  	cb.dispatchEvent(evt);
	}
}