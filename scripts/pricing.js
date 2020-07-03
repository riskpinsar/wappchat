
// Jquery's "document .ready"
$( document ).ready(function() {
	class_menu=".pg-header .nv-pricing";
});


function toggleAnswerCollapse(el) {
  el = el.parentElement; // native Javascript

  let answer = $($(el).find(".answer"));
  let q_icon = $(el).find(".question .ico");

  // events

  answer.on('show.bs.collapse', () => {
    q_icon.html("arrow_drop_down");
  });
  answer.on('hide.bs.collapse', () => {
    q_icon.html("arrow_right");
  });

  // collpase toggle

  answer.collapse('toggle');
  $(q_icon).toggleClass('opened');
}

