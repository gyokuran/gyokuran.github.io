(function(d){

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
		document.getElementById('exL_logo').classList.add('set');
	});
	fileReader.readAsDataURL(obj.files[0]);
	document.cookie = 'logoimage=' + fileReader.result;
}
const $_BTN_getPL = function(){
	let $url = document.getElementById('csvmaster').value;
	if($url.length){ $_getPL($url) };
}
const $_BTN_reverse = function(){
	let $parent = document.getElementById('exL');
	if($parent.classList.contains('-reverse')){
		$parent.classList.remove('-reverse');
	} else {
		$parent.classList.add('-reverse');
	}
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
				$A_entry[$A_items[i % $A_items.length]] = $json[i].gs$cell.$t;
				if(i < $json.length - 1){
					if($json[i + 1].gs$cell.row - 0 > $json[i].gs$cell.row - 0 || i == $json.length - 2){
						$master.push($A_entry);
						$A_entry = [];
					}
				}
			}
			document.getElementById('player_team_l').onchange();
			document.getElementById('player_team_r').onchange();
			console.log($master);
		}
	}
}
const $_setTeam = function(trg){
	if(!$master.length){
		alert('先にスプレッドシートを読み込んでください。')
		return false;
	}
	for(let i = 0; i < $master.length; i++){
		let $namesSelect = trg.previousElementSibling;
		if($master[i]['チーム名'] == trg.value){
			let $namesOption = '<option>' + $master[i]['1人目'] + '</option>' + '<option>' + $master[i]['2人目'] + '</option>' + '<option>' + $master[i]['3人目'] + '</option>';
			$namesSelect.innerHTML = $namesOption;
			break;
		} else {
			if(i == $master.length - 1){
				alert('シートにないか or シートの表記と違うかも？');
				$namesSelect.innerHTML = '';
			}
		}
	}
}

/*******
Copyright(c) 2021 @gyokuran
Released under the MIT license
http://opensource.org/licenses/mit-license.php
*******/
