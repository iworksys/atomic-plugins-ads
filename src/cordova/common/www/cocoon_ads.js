!function(){var e=window.Cocoon;!e&&window.cordova&&"undefined"!=typeof require&&(e=cordova.require("com.ludei.cocoon.common.Cocoon")),e.define("Cocoon.Ad",function(i){"use strict";function t(e){var t=e[0],n=e[1],s=e.slice(2),a=i.activeAds[n];a&&("load"===t&&s.length>0&&(a.width=s[0],a.height=s[1],s=s.slice(2)),a.signal.emit(t,null,s))}i.serviceName="AdService",i.activeAds={},i.BannerLayout={TOP_CENTER:"TOP_CENTER",BOTTOM_CENTER:"BOTTOM_CENTER",CUSTOM:"CUSTOM"},i.BannerSize={SMART:"SMART",BANNER:"BANNER",MEDIUM_RECT:"MEDIUM_RECT",LEADERBOARD:"LEADERBOARD"},i.Banner=function(i,t){this.id=i,this.serviceName=t,this.signal=new e.Signal,this.width=0,this.height=0},i.Banner.prototype={show:function(){e.exec(this.serviceName,"showBanner",[this.id])},hide:function(){e.exec(this.serviceName,"hideBanner",[this.id])},setLayout:function(i){e.exec(this.serviceName,"setBannerLayout",[this.id,i])},setPosition:function(i,t){e.exec(this.serviceName,"setBannerPosition",[this.id,i,t])},load:function(){e.exec(this.serviceName,"loadBanner",[this.id])},on:function(e,i){this.signal.on(e,i)}},i.Interstitial=function(i,t){this.id=i,this.serviceName=t,this.signal=new e.Signal},i.Interstitial.prototype={show:function(){e.exec(this.serviceName,"showInterstitial",[this.id])},load:function(){e.exec(this.serviceName,"loadInterstitial",[this.id])},on:function(e,i){this.signal.on(e,i)}};var n=0;return i.init=function(){this.initialized||(e.exec(this.serviceName,"setBannerListener",[],t),e.exec(this.serviceName,"setInterstitialListener",[],t),this.initialized=!0)},i.configure=function(i){var t=e.getPlatform();t===e.PlatformType.AMAZON&&i[e.PlatformType.ANDROID]&&(t=e.PlatformType.ANDROID),i[t]&&(i=i[t]),e.exec(this.serviceName,"configure",[i])},i.createBanner=function(t,s){this.init();var a=n++;e.exec(this.serviceName,"createBanner",[a,t,s]);var r=new i.Banner(a,this.serviceName);return this.activeAds[a]=r,r},i.releaseBanner=function(i){e.exec(this.serviceName,"releaseBanner",[i.id]),delete this.activeAds[id]},i.createInterstitial=function(t){this.init();var s=n++;e.exec(this.serviceName,"createInterstitial",[s,t]);var a=new i.Interstitial(s,this.serviceName);return this.activeAds[s]=a,a},i.releaseInterstitial=function(i){e.exec(this.serviceName,"releaseInterstitial",[i.id]),delete this.activeAds[i.id]},i})}();