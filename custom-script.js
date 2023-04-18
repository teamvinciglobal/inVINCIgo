const v_cword = [];
const i_cword = ['t', 'e', 's', 't', 'w'];
const n_cword = ['t', 'e', 's', 't', 'w'];
const g_cword = ['t', 'e', 's', 't', 'w'];
const o_cword = ['t', 'e', 's', 't', 'w'];
var ctr=0;


$("input[type='checkbox']").click(function() {
  checkboxesValidate();
})

function checkboxesValidate() {
 $("input[type='checkbox']:not(:checked)").attr("disabled", $("input[type='checkbox']:checked").length === 5);
}

function getwords() {
  let v_cword = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  for (let i = 0; i < checkboxes.length; i++) {
  v_cword.push(checkboxes[i].value)
  }
  alert(v_cword.toString());
}

function genNum() {
  $v = v_cword[$x+1];
  $i = i_cword[$x+1];
  $n = n_cword[$x+1];
  $g = g_cword[$x+1];
  $o = o_cword[$x+1];
}

function makeNum() {
  genNum();
  if ($y == 1) $num = $v;
  if ($y == 2) $num = $i;
  if ($y == 3) $num = $n;
  if ($y == 4) $num = $g;
  if ($y == 5) $num = $o;
  $numList.push($num);
  for ($c = 0; $c <= $count; $c++) {
    if ($num != $numList[$c - 1]) {
      $good = 1;
    } else {
      $good = 0;
      makeNum();
    }
  }
}

$('button').click(function() {
  $('.column').empty();
  getwords(); 
  $numList = [];
  $count = 1;
  for ($x = 1; $x <= 5; $x++) {
    for ($y = 1; $y <= 5; $y++) {
      makeNum();
      if ($good == 1) {
        $('.' + $y).append("<div class='number column-" + $count + "'><span>" + $num + "</span></div>");
      }
      $count++;
    }
  }

  $('.column-13').empty();
  $(".column-13").prepend('<img id="theImg" src="./images/TVG.svg" width="80%" height="auto" />');
});