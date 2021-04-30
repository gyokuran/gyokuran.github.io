(function(d){
	if(!d.getElementById('exL')){
	let $css = '';
$css += 'body { padding-top:100px; }';
$css += '#exL { position:fixed; left:0; top:0; z-index:99999; width:100%; height:100px; background:#FFF; border-bottom:1px solid #222; }';
$css += '#exL * { margin:0; padding:0; line-height:1; font-size:0; box-sizing:border-box; appearance:none; }';
$css += '#exL input:focus,#exL select:focus { outline:none; }';
$css += '#exL .wrap { width:100%; padding:10px 0 0; }';
$css += '#exL .inner { display:flex; flex-wrap:nowrap; justify-content:space-between; width:100%; background:#FFF transparent; }';
$css += '#exL .left { display:flex; justify-content:space-between; width:calc(50% - 80px); position:relative; }';
$css += '#exL .right { display:flex; justify-content:space-between; width:calc(50% - 80px); position:relative; flex-direction:row-reverse; }';
$css += '#exL select.name { width:calc(100% - 45px); height:40px; font-size:20px; line-height:40px; color:#FFF; font-weight:bold; padding:0 15px; border:0; background:rgba(0,0,0,.87); overflow:hidden; cursor:pointer; }';
$css += '#exL select.name option { font-size:20px; }';
$css += '#exL input.num { width:45px; height:40px; font-size:32px; color:#FFF; line-height:40px; font-weight:bold; font-family:"Arial", sans-serif; text-align:center; padding:0; border:0; background:#FF6633; }';
$css += '#exL .right select.name { text-align:right; direction:rtl; }';
$css += '#exL .space { display:flex; justify-content:center; align-items:center; width:160px; position:relative; }';
$css += '#exL .space p { font-size:16px; color:#333; }';
$css += '#exL input[type="number"]::-webkit-outer-spin-button,#exL input[type="number"]::-webkit-inner-spin-button { -webkit-appearance:none; margin:0; width:0; height:0; overflow:hidden; }';
$css += '#exL input[type="number"] { -moz-appearance:textfield; }';
$css += '#exL input[type="color"] { cursor:pointer; }';
$css += '#exL .-reverse { }';
$css += '#exL .-reverse .inner { flex-direction:row-reverse; }';
$css += '#exL .-reverse .left { flex-direction:row-reverse; }';
$css += '#exL .-reverse .right { flex-direction:row; }';
$css += '#exL .-reverse .left select.name { text-align:right; direction:rtl; }';
$css += '#exL .-reverse .right select.name { text-align:left; direction:ltr; }';
$css += '#exL .numbtn { display:flex; width:30px; height:20px; justify-content:center; align-items:center; font-size:14px; cursor:pointer; border-radius:3px; background:#EEE; user-select:none; position:absolute; bottom:-25px; }';
$css += '#exL #up_L { right:35px; }';
$css += '#exL #down_L { right:0; }';
$css += '#exL #up_R { left:35px; }';
$css += '#exL #down_R { left:0; }';
$css += '#exL .-reverse #up_L { left:35px; right:initial; }';
$css += '#exL .-reverse #down_L { left:0; right:initial; }';
$css += '#exL .-reverse #up_R { right:35px; left:initial; }';
$css += '#exL .-reverse #down_R { right:0; left:initial; }';
$css += '#exL #exL_logo { display:block; width:100%; height:40px; background:no-repeat 50% 50%; background-size:cover; position:relative; overflow:hidden; cursor:pointer; }';
$css += '#exL #exL_logo input { position:absolute; left:-9999px; }';
$css += '#exL #exL_logo:before { content:"クリックして画像を設定"; display:inline-block; font-size:12px; color:#777; text-align:center; position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); }';
$css += '#exL #exL_logo.set:before { display:none; }';
$css += '#exL .gs { display:flex; justify-content:flex-end; padding:5px 5px 0 0; }';
$css += '#exL .gs input[type="text"] { width:150px height:30px; font-size:16px; line-height:30px; padding:0 5px; border:1px solid #CCC; }';
$css += '#exL .gs input[type="button"] { width:30px; height:30px; font-size:12px; border:1px solid #CCC; }';

	let $s = d.createElement('style'); $s.innerHTML = $css; d.body.prepend($s);
	}
	let $a = d.querySelectorAll('.match-flex-0 .name'), $b = [],$c = '',$c2 = '', $d = '';
	for(i=0; i<$a.length; i++){
		$b.push($a[i].innerText);
		let $name = ($a[i].innerText)?$a[i].innerText:$a[i].children[0].value, $id = '', $id2 = '';
		let $length = $name.indexOf('・');
		if( $length !== -1){
			console.log($length)
			console.log($name.split($length))
			$name = $name.split($length)[0];
			$id = ' - ' + $name.split($length)[1];
			$id2 = $name.split($length)[1] + ' - ';
		}
		$c += '<option>' + $name + $id + '</option>';
		$c2 += '<option>' + $id + $name + '</option>';
	};
	$d += '<div id="exL"><div class="wrap"><div class="inner">';
	$d += '<div class="left"><select class="name saveobj" id="player_name_l">'+$c+'</select><input type="number" value="0" class="num saveobj" id="player_score_l" maxlength="1" min="0" max="9"><span id="up_L" class="numbtn nubup">+</span><span id="down_L" class="numbtn nubclr">0</span></div>';
	$d += '<div class="space"><label id="exL_logo"><input type="file" accept="image/*" id="exL_file" onChange="$_pImg(this)"></label></div>';
	$d += '<div class="right"><select class="name saveobj" id="player_name_r">'+$c2+'</select><input type="number" value="0" class="num saveobj" id="player_score_r" maxlength="1" min="0" max="9"><span id="up_R" class="numbtn nubup">+</span><span id="down_R" class="numbtn nubclr">0</span></div>';
	$d += '</div>';
//	$d += '<div class="gs"><input type="text" class="csv saveobj" id="csvmaster" value="" placeholder="googleスプレッドシートID"><input type="button" class="submit" value="SET" onClick="$_BTN_getPL()"></div>';
	$d += '</div></div>';
	
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
const $_pImg = function(obj){
	let fileReader = new FileReader();
	fileReader.onload = (function(){
		document.getElementById('exL_logo').style.backgroundImage = 'url(' + fileReader.result + ')';
	});
	fileReader.readAsDataURL(obj.files[0]);
}

const $_BTN_getPL = function(){
	let $url = document.getElementById('csvmaster').value;
	if($url.length){ $_getPL($url) };
}
const $_getPL = function(trg){
	const xhr = new XMLHttpRequest();
	xhr.open('get', 'https://spreadsheets.google.com/feeds/cells/' + trg + '/od6/public/values?alt=json');
	xhr.send();
	xhr.onreadystatechange = function(){
		if( xhr.readyState === 4 && xhr.status === 200) {
			let $data = JSON.parse(this.response);
			console.log($data);
			let $json = $data.feed.entry;
			let $master = [], $A_items = [], $A_entry = [];
			for(let i = 0; i < $json.length; i++){
				if($json[i].gs$cell.row == 1){
					$A_items.push($json[i].gs$cell.$t);
					continue;
				}
				$A_entry[$A_items[i % $A_items.length]] = $json[i].gs$cell.$t
				if(i < $json.length - 1){
					if($json[i + 1].gs$cell.row > $json[i].gs$cell.row){
						$master.push($A_entry);
						$A_entry = [];
					}
				}
			}
			console.log($master);
/*
			let $player = '<option>- プレイヤー選択 -</option>';
			for(let i = 0; i < $master.length; i++){
				$player += '<option>' + $master[i][$A_items[0]] + '</option>';
			}
			$('#player_name_l').html($player);
			$('#player_name_r').html($player);
*/
		}
	}
}


/*******
Copyright(c) 2021 @gyokuran
Released under the MIT license
http://opensource.org/licenses/mit-license.php
*******/
