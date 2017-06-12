$(window).load(function(){
	var sug=$('.suggest-item');
	for(var i=0;i<sug.length;i++){
		sug[i].onclick=function(e){
			$('#seac').val(e.target.innerHTML);
		};
	}
	$('#closeLog').click(function(){
		$('.zhezhaoceng').css("display","none")
	});
});
function suggest_list_toggle(){
	$('#ul-suggest-list').slideToggle().css({"border":"solid 1px lightblue"});
}
function upload_list_toggle(){
	$('#upload_list').toggle();
}
function playMusic(data){
	alert(data);
	var ply=document.getElementById('audio_player');
		ply.src=data;
		ply.play();
	$('#song_name').text("歌曲名:"+data);
}
function showLogBig(){
	$('.zhezhaoceng').css({"display":"block"});
}
