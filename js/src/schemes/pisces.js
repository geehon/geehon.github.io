// build time:Fri Feb 01 2019 19:48:15 GMT+0800 (GMT+08:00)
$(document).ready(function(){var t=$(".sidebar-inner");var i=CONFIG.sidebar.offset||12;function e(){return $(".header-inner").height()+i}function a(){var t=$("#footer");var i=$(".footer-inner");var e=t.outerHeight()-i.outerHeight();var a=t.outerHeight()+e;return a}function r(){var r=e();var o=a();var f=$("#sidebar").height()+NexT.utils.getSidebarb2tHeight();var n=$("#content").height();if(r+f<n){t.affix({offset:{top:r-i,bottom:o}});t.affix("checkPosition")}$("#sidebar").css({"margin-top":r,"margin-left":"auto"})}function o(){$(window).off(".affix");t.removeData("bs.affix").removeClass("affix affix-top affix-bottom");r()}function f(){var t=window.matchMedia("(min-width: 992px)");t.addListener(function(t){if(t.matches){o()}})}r();f()});
//rebuild by neat 