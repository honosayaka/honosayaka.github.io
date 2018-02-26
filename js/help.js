$(document).ready(function(){
			$(".usehelp").hide();
			$("button").click(function(){
				$(".term").hide(1000);
				$(".usehelp").show(1000);
			});
		});