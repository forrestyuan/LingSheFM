				$('audio').bind('play',function(){
					$('#album_img').addClass('run');
					$('#playState').removeClass('glyphicon-play').addClass('glyphicon-pause');
				});
				$('audio').bind('pause',function(){
					$('#album_img').removeClass('run');
					$('#playState').removeClass('glyphicon-pause').addClass('glyphicon-play');
				});
				var play_clickTimes=1;
				$('#playState').bind('click',function(){
					play_clickTimes++;
					if(play_clickTimes%2==0){
						var ply=document.getElementById('audio_player');
							ply.play();
						$('#album_img').addClass('run');
						$('#playState').removeClass('glyphicon-play').addClass('glyphicon-pause');
					}else{
						var ply=document.getElementById('audio_player');
							ply.pause();
						$('#album_img').removeClass('run');
						$('#playState').removeClass('glyphicon-pause').addClass('glyphicon-play');
					}
				});
				
				$('.music_panle').animate({'left':'-439px'},2000);
				var pullPanelTimes=1;
				$('#btn_pullout_panel').click(function(){
					pullPanelTimes++;
					if(pullPanelTimes%2==0){
						$('.music_panle').animate({'left':'0px'},2000);
						$('#btn_pullout_panel i').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-left');
					}else{
						$('.music_panle').animate({'left':'-439px'},2000);
						$('#btn_pullout_panel i').removeClass('glyphicon-chevron-left').addClass('glyphicon-chevron-right');
					}
				});