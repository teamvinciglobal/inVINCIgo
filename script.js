
const v_word = ['GABRIEL', 'DASH', 'LULLABY', 'IT BOYS', 'VINCENTER', 'VINNIE', 'RITCH BICH', 'NOVEMBER 19', 'VINCI TYPE', 
                'SCENTED CANDLE', 'TIKIM', 'GV KITCHEN', 'INVINCIBONG', 'CARROT CAKE', 'ENCHANTED'];
const i_word = ['VINCENT', 'LOVEY DOVEY', 'AWITIN MO', 'C-VISION', 'INVINCIBLE', 'VINSTER', 'NIGHTS & EVENINGS', 'THE BOYZ', 'IALWAYSVINCI',
                'DIPTYQUE', 'PLEASE BABY', 'GVFAM', 'SUNSET', 'CORNDOG', 'PILLOW TALK'];
const n_word = ['VINCI', 'TIGER', 'AMAZON', 'AMBIZION', 'INVINCIVILLE', 'DREIVINCI', 'MORNINGS & AFTERNOONS', 'NCT', 'VNCIVSUALS', 'H&M',
                'CROP TOP', 'VINCI SPECS', 'CAMERA', 'BICOL EXPRESS', 'UHAW'];
const g_word = ['MALIZON', 'SALAMAT', 'ODD EYE', 'EYE RISK', 'VINCI WITH U', 'HOLY TRINITY', 'AU REVOIR', 'BLACKPINK', 'ALL-ROUNDER',
                'ABS', 'LEADERNIM', 'ANTI-FRAGILE', 'SPOTIFY', 'COFFEE', 'JEALOUS'];
const o_word = ['DRAGON', 'TAKE MY HAND', 'DEJA VU', 'HORI7ON', 'VINCHANTED', 'HOLY FAMILY', 'SOFT(K)POP', 'DREAM MAKER', 'TOGETHER FOREVER',
                'FIREWORKS', 'BRATATATATA', 'ABOT-TANAW', 'BEANIE', 'STRAWBERRY JAM', 'SHUTDOWN'];

function genNum() {
  $v = v_word[Math.floor((Math.random()) * (v_word.length)) + 1];
  $i = i_word[Math.floor((Math.random()) * (i_word.length)) + 1];
  $n = n_word[Math.floor((Math.random()) * (n_word.length)) + 1];
  $g = g_word[Math.floor((Math.random()) * (g_word.length)) + 1];
  $o = o_word[Math.floor((Math.random()) * (o_word.length)) + 1];
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