(function(d){
    console.log('test')
	let $a = d.querySelectorAll('.match-flex-0 .name'), $b = [],$c = '', $d = '';
	for(i=0; i<$a.length; i++){
		$b.push($a[i].innerText);
		$c += '<option>' + (($a[i].innerText)?$a[i].innerText:$a[i].children[0].value) + '</option>';
	};
	$d = '<div id="exL"><div class="wrap"><div class="inner"><div class="left"><select class="name saveobj" id="player_name_l">'+$c+'</select><input type="number" value="0" class="num saveobj" id="player_score_l" maxlength="1" min="0" max="9"><span id="up_L" class="numbtn nubup">+</span><span id="down_L" class="numbtn nubclr">0</span></div><div class="right"><select class="name saveobj" id="player_name_r">'+$c+'</select><input type="number" value="0" class="num saveobj" id="player_score_r" maxlength="1" min="0" max="9"><span id="up_R" class="numbtn nubup">+</span><span id="down_R" class="numbtn nubclr">0</span></div></div></div></div>';
    console.log('test2')
	d.body.insertAdjacentHTML('beforeend',$d);
	let $n = d.querySelectorAll('.num'), $nn = d.querySelectorAll('.nubup'), $nnn = d.querySelectorAll('.nubclr');
	$nn.forEach((trg)=>{
		trg.addEventListener('click',()=>{
			let $i = [].slice.call($nn).indexOf(trg); if($n[$i].value < 9)$n[$i].value = $n[$i].value - 0 + 1;
		});
	});
	$nnn.forEach((trg)=>{
		trg.addEventListener('click',()=>{
			let $i = [].slice.call($nnn).indexOf(trg); $n[$i].value = 0;
		});
	});
})(document);
/*******
Copyright(c) 2021 @gyokuran
Released under the MIT license
http://opensource.org/licenses/mit-license.php
*******/
