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
$css += '#exL .team { display:flex; flex-direction:column; width:calc(100% - 45px); position:relative; }';
$css += '#exL select.name { width:100%; height:25px; font-size:18px; line-height:1; color:#FFF; font-weight:bold; padding:2px 15px 1px; border:0; background:#000; overflow:hidden; cursor:pointer; }';
$css += '#exL select.name option { font-size:18px; }';
$css += '#exL select.name option.def { font-size:14px; color:#DDD; }';
$css += '#exL select.team { width:100%; height:20px; font-size:16px; line-height:20px; color:#FFF; font-weight:bold; padding:0 15px 2px; border:0; background:#222; overflow:hidden; cursor:pointer; }';
$css += '#exL select.team option { font-size:16px; }';
$css += '#exL input.num { width:45px; height:45px; font-size:32px; color:#FFF; line-height:40px; font-weight:bold; font-family:"Arial", sans-serif; text-align:center; padding:0; border:0; background:#FF6633; }';
$css += '#exL .right select.name { text-align:right; direction:rtl; }';
$css += '#exL .right select.team { text-align:right; direction:rtl; }';
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
$css += '#exL .-reverse .left select.team { text-align:right; direction:rtl; }';
$css += '#exL .-reverse .right select.team { text-align:left; direction:ltr; }';
$css += '#exL .numbtn { display:flex; width:30px; height:20px; justify-content:center; align-items:center; font-size:14px; cursor:pointer; border-radius:3px; background:#EEE; user-select:none; position:absolute; bottom:-25px; }';
$css += '#exL #up_L { right:35px; }';
$css += '#exL #down_L { right:0; }';
$css += '#exL #up_R { left:35px; }';
$css += '#exL #down_R { left:0; }';
$css += '#exL .-reverse #up_L { left:35px; right:initial; }';
$css += '#exL .-reverse #down_L { left:0; right:initial; }';
$css += '#exL .-reverse #up_R { right:35px; left:initial; }';
$css += '#exL .-reverse #down_R { right:0; left:initial; }';
$css += '#exL #exL_logo { display:block; width:100%; height:45px; background:no-repeat 50% 50%; background-size:cover; position:relative; overflow:hidden; cursor:pointer; }';
$css += '#exL #exL_logo input { position:absolute; left:-9999px; }';
$css += '#exL .gs { display:flex; justify-content:flex-end; padding:5px 5px 0 0; }';
$css += '#exL .gs input[type="text"] { width:150px height:30px; font-size:16px; line-height:30px; padding:0 5px; border:1px solid #CCC; }';
$css += '#exL .gs input[type="button"] { width:30px; height:30px; font-size:12px; border:1px solid #CCC; }';

	let $s = d.createElement('style'); $s.innerHTML = $css; d.body.prepend($s);
	}
	let $a = d.querySelectorAll('.match-flex-0 .name'), $b = [], $c = '', $d = '', $t = '';
	for(i=0; i<$a.length; i++){
		var $name = ($a[i].innerText)?$a[i].innerText:$a[i].children[0].value;
		if($name.length){
			$b.push($a[i].innerText);
			$t += '<option>' + (($a[i].innerText)?$a[i].innerText:$a[i].children[0].value) + '</option>';
		}
	};
	$d += '<div id="exL"><div class="wrap"><div class="inner">';
	$d += '<div class="left"><div class="team"><select class="name saveobj" id="player_name_l"><option class="def">チームを選択してください</option></select><select class="team saveobj" id="player_team_l" onChange="$_setTeam(this)">'+$t+'</select></div><input type="number" value="0" class="num saveobj" id="player_score_l" maxlength="1" min="0" max="9"><span id="up_L" class="numbtn nubup">+</span><span id="down_L" class="numbtn nubclr">0</span></div>';
	$d += '<div class="space"><label id="exL_logo"><input type="file" accept="image/*" id="exL_file" onChange="$_pImg(this)"></label></div>';
	$d += '<div class="right"><div class="team"><select class="name saveobj" id="player_name_r"><option class="def">チームを選択してください</option></select><select class="team saveobj" id="player_team_r" onChange="$_setTeam(this)">'+$t+'</select></div><input type="number" value="0" class="num saveobj" id="player_score_r" maxlength="1" min="0" max="9"><span id="up_R" class="numbtn nubup">+</span><span id="down_R" class="numbtn nubclr">0</span></div>';
	$d += '</div>';
	$d += '<div class="gs"><input type="text" class="csv saveobj" id="csvmaster" value="" placeholder="googleスプレッドシートID"><input type="button" class="submit" value="SET" onClick="$_BTN_getPL()"></div>';
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
$master = [];
const $_getPL = function(trg){
	const xhr = new XMLHttpRequest();
	xhr.open('get', 'https://spreadsheets.google.com/feeds/cells/' + trg + '/od6/public/values?alt=json');
	xhr.send();
	xhr.onreadystatechange = function(){
		if( xhr.readyState === 4 && xhr.status === 200) {
			let $data = JSON.parse(this.response);
			console.log($data);
			let $json = $data.feed.entry;
			let $A_items = [], $A_entry = [];
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
		}
	}
}
const $_setTeam = function(trg){
	if(!$master.length){
		alert('先にリストを読み込んでください。')
		return false;
	}
	console.log($master.length + ' | ' + trg.value);
	for(let i = 0; i < $master.length; i++){
		if($master[i]['チーム名'] == trg.value){
			let $namesSelect = trg.previousElementSibling;
			let $namesOption = '<option>' + $master[i]['1人目'] + '</option>' + '<option>' + $master[i]['2人目'] + '</option>' + '<option>' + $master[i]['3人目'] + '</option>';
			$namesSelect.innerHtml = $namesOption;
			break;
		} else {
			if(i == $master.length - 1){
				alert('リストにないか or リストの表記と違うかも？');
			}
		}
	}
}

/*******
Copyright(c) 2021 @gyokuran
Released under the MIT license
http://opensource.org/licenses/mit-license.php
*******/
