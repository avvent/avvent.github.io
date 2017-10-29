$(document).ready(function(){
	$('.ui.menu .dropdown').dropdown({on: 'hover',direction: 'upward',transition:'scale', action:'hide'});
	setTimeout(function() {
					GoToCenter(dot0.x,dot0.y,dot0.z,0); GoToModal('crd0');	
				}, 1250);
});


function GoToModal(modalID) {

	setTimeout(function(e) {
		$('#' + modalID).modal('setting', 'closable', false).modal('show');
	},500);
}

	
