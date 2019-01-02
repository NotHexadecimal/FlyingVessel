//dark theme
chrome.storage.local.get(['theme'], function(result){
	//console.log(result.theme);
	style = document.createElement('style');
	if (result.theme == true)
	style.innerHTML = ".page-wrapper .route-wrapper{background:#192638} \
	.video-feed-wrapper{background:#192638} \
	.channel-intro-wrapper .channel-intro-content .channel-intro-width-wrapper .channel-nav {background:#000; box-shadow: inset 0 -1px 0 #000, -1px 0 0 #000, 1px 0 0 #000;} \
	.channel-intro-wrapper .channel-intro-content .channel-intro-width-wrapper .channel-nav .channel-nav-item.active{color: #00afec} \
	.generic-wrapper .generic-block, .generic-wrapper .generic-block-padded{background: #000; border: 1px solid #404040} \
	.markdown-body h1{border-bottom: 1px solid #404040; color: #fff} \
	.markdown-body p{color: #fff} \
	.sidebar{background: #093469} \
	.video-content-wrapper .video-description-wrapper .video-description-header .channel-info .channel-title{color: #fff} \
	.video-content-wrapper .video-description-wrapper .video-description-header .video-title{color: #fff} \
	.video-release-date{color: #999} \
	.video-content-wrapper .textarea-wrapper textarea{background: #000; color: #fff; border: 1px solid #404040} \
	.video-content-wrapper .comments-wrapper .comment .comment-header .header-text .author{color: #fff} \
	.video-content-wrapper .comments-wrapper .comment .reply-header .header-text .author{color: #fff} \
	.video-content-wrapper .comments-wrapper .comment .comment-header .header-text .score.positive{color: #5fef5f} \
	.video-content-wrapper .comments-wrapper .comment .comment-header .header-text .score.negative{color: #ef5f5f} \
	.video-content-wrapper .comments-wrapper .comment .reply-header .header-text .score.positive{color: #5fef5f} \
	.video-content-wrapper .comments-wrapper .comment .reply-header .header-text .score.negative{color: #ef5f5f} \
	.video-content-wrapper .video-list .video-list-item .video-item-title{color: #fff} \
	.video-content-wrapper .video-description-wrapper .video-description:after{background: linear-gradient(to top,#000 0%,rgba(255,255,255,0) 70%)} \
	.video-content-wrapper .video-list .video-list-item+.video-list-item{border-top: 1px solid #404040} \
	.video-content-wrapper .video-description-wrapper .video-description a{color: #00afec} \
	.activity-feed .activity-feed-period .feed-list .feed-item .item-caption a{color: #00afec} \
	.activity-feed .activity-feed-period .feed-list{color: #fff} \
	.tabs-wrapper .nav{background: #000; box-shadow: inset 0 -1px 0 #404040} \
	.tabs-wrapper .nav .nav-item.active{color: #00afec} \
	.video-player-wrapper{background: #000} \
	.floaty{padding: 10px; background: #555; position: fixed; bottom: 30px; right: 30px; color: #000; cursor: pointer; -webkit-user-select: none; transition: .3s;} \
	.floaty:hover{background: #888;}";
	else
	style.innerHTML = ".video-player-wrapper{background: #000} \
	.floaty{padding: 10px; background: #ccc; position: fixed; bottom: 30px; right: 30px; color: #000; cursor: pointer; -webkit-user-select: none; transition: .3s;} \
	.floaty:hover{background: #888;}";
	document.head.appendChild(style);
})

floating = document.createElement('div');
floating.className = "floaty";
floating.innerHTML = "<i class=\"material-icons\">invert_colors</i>";
floating.onclick = function(){
	chrome.storage.local.get(['theme'], function(result){
		if (result.theme !== undefined)chrome.storage.local.set({theme: !result.theme})
		else chrome.storage.local.set({theme: true})
		location.reload()
	})
}
document.body.appendChild(floating);

//player tweaks
window.onkeyup = function(e){
	if (!/http[s]?:\/\/(www.)?floatplane.com\/video\/[^\/]+/.test(window.location.href)) return;
	pTweaks = document.getElementsByTagName('video')[0];
	if (document.activeElement.tagName == 'TEXTAREA') return;
    switch(e.keyCode){
		case 74:
			pTweaks.currentTime -= 10;
			break;
		case 75:
			pTweaks.paused?pTweaks.play():pTweaks.pause();
			break;
		case 76:
			pTweaks.currentTime += 10;
			break;
		case 188:
			if(e.shiftKey && pTweaks.playbackRate > .5) pTweaks.playbackRate -= .25;
			break;
		case 190:
			if(e.shiftKey && pTweaks.playbackRate < 2) pTweaks.playbackRate += .25;
			break;
	}
}