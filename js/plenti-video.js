
				$(document).ready(function(){
	

	brightcoveGallery.init();
		
	// VIDEO
    //videoButton on click, animate to the videoContainer and play the video. 
	$('#fcVideoOverlayButton').click(function(){
		TweenMax.to($(' #fcVideoContain'), .4, {css:{autoAlpha:1, display:'block'}, onComplete:playVid});
		
	});
	//videoBackGround- on click, stop the video. don't show the videoContainer or the VideoPoster
	$('#fcVideoBG').click(function(){
		modVP.stop();
		TweenMax.to($('#fcVideoContain, #fcVideoPoster'), .4, {css:{autoAlpha:0, display:'none'}});
		
	});
	//videoPoster on click, play the video.  fyi:the videoPoster is the image
	$('#fcVideoPoster').click(function(){
		TweenMax.to($(this), .4, {css:{autoAlpha:0, display:'none'}, onComplete:playVid});
		MACYS.coremetrics.cmCreatePageElementTag('Watch Video', 'video overlay testing - Video', 'video', ''); 
		
	});
	
	//playVid uses the video id of the video in brightcove. upload video to get video id in media console.
	function playVid(){
		//2033921064001 is video id for wow clinton kelly video
		$(this).playPortraitVid(2033921064001);
	}
				
	//========= start the video loading - change use #fcVideoOverlayButton button to start video code 
	window.onload = function(){
		videoPortraitInit();
		TweenMax.to($('#fcLoader'), .3, {css:{autoAlpha:0}});
		//show/don't show the video container
		$('#fcVideoContain').css({'visibility': 'visibility'});
		playVid();
		
	}
	
});


//BRIGHTCOVE  stuff. don't touch! =====
function videoPortraitInit(){
	brightcove.createExperiencesPostLoad();
}

var bcExp;
var modVP;
var modExp;
var modCon;
var vidInit = 0;

//call this where needed. this stores a reference to the player and modules. currently set when template loads.
//event listeners added 

function onTemplateLoad(experienceID) {
  bcExp = brightcove.brightcove.api.getExperience(experienceID);
  modVP = bcExp.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
  modExp = bcExp.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
  modCon = bcExp.getModule(brightcove.api.modules.APIModules.CONTENT);
  
  modVP.addEventListener(BCVideoEvent.VIDEO_COMPLETE, onVideoComplete);
}
//before the video loads, show the still image VideoPoster. video will load on top of videoPoster
function onVideoComplete(){
	TweenMax.to($('#fcVideoPoster'), .3, {css:{autoAlpha:1, display:'block'}});
}
//when the video player is ready, get the api stuff loaded
function onTemplateReady(event) {
	if($.browser.msie && parseInt($.browser.version, 10) < 9) {
		bcExp = brightcove.brightcove.api.getExperience(experienceID);
		modVP = bcExp.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
		modExp = bcExp.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
		modCon = bcExp.getModule(brightcove.api.modules.APIModules.CONTENT);
	}
}

////when the video player is engaged, run the brightcove script to get it goin.
function initPlayer() {
  runMobileCompatibilityScript('myExperience');
  brightcove.createExperiences();
}
//make a var for the video id to store the video .playPortraitVid 
var vid_id;
jQuery.fn.playPortraitVid = function (vid) {
	vid_id = vid;
    return this.each(function () {
		brightcove.createExperiencesPostLoad();
		if(modVP != undefined){
			modVP.loadVideo(vid);	
		}
    });
}
//start the video and capture its coremetrics
function startVid(){
	modVP.loadVideo(vid_id);
	MACYS.coremetrics.cmCreatePageElementTag('ca-POC-oVerlayvideo.video', 'ca-POC-oVerlayvideo.video', 'video', '');
	
}

//turn the param into smart api video capable and embed video id into the player
var brightcoveGallery = (function($) { 
  this.embedVideo = function(videoId) {
      var html = [
      '<object id="myExperience', videoId, '"class="BrightcoveExperience">'
      , '<param name="bgcolor"          value="#ccc" />'
	  ,  '<param name="wmode"			value="transparent" />'
      , '<param name="width"            value="900" />'
      , '<param name="height"           value="540" />'
      , '<param name="playerKey"        value="AQ~~,AAAABc9dTfk~,hXE_DZAsiSkO-ooThBpjlpRO-VQDAQKT" />' 
      , '<param name="playerID"         value="3974030194001" />' // replace this with the video playerID (not video ID)
      , '<param name="isVid"            value="true" />'
      , '<param name="isUI"             value="true" />'
      , '<param name="videoSmoothing"   value="true" />'
      , '<param name="@videoPlayer"     value="' + videoId + '" />' // this is the videoID (this is not the player ID)
      , '<param name="dynamicStreaming" value="true" />'
	  , '<param name="autoStart"        value="true" />'
	  , '<param name="includeAPI" 		value="true" />'
      , '<param name="includeAPI" value="true" />'
  	  , '<param name="templateLoadHandler" value="onTemplateLoad" />'
      , '<param name="templateReadyHandler" value="onTemplateReady" />'
      //force html for testing
      //, '<param name="forceHTML" value="true" />'
    , '</object>'
    ];	
    // videoPlayer is where the video will appear 
    return $(html.join('')).appendTo('#fcVideoPlayer'); 
	var APIModules = brightcove.api.modules.APIModules;
	var videoPlayer = experience.getModule(APIModules.VIDEO_PLAYER);
	videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, myCompleteHandler);
  };
  this.init = function() {
  	//Clinton Kelly: 2033921064001
    this.embedVideo(2683640709001);	// this is the actual video ID 
  }

  return this;

}).call({}, jQuery);

