
function preView(e){
	var f = e.files[0];
	var FR = new FileReader();
	FR.readAsDataURL(f);
	FR.onload = function(f){
		var canvas = document.createElement('canvas');
		var img = new Image();
			img.src = this.result;
			img.onload = function(){ 
				var ctx = canvas.getContext("2d"); 
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);
				var src = canvas.toDataURL("image/jpeg");
				document.getElementById("js_preview").setAttribute("src",src);
			};
	};
}
function preView2(e){
	var f = e.files[0];
	var FR = new FileReader();
	FR.readAsDataURL(f);
	FR.onload = function(f){
		var canvas = document.createElement('canvas');
		var img = new Image();
			img.src = this.result;
			img.onload = function(){ 
				var ctx = canvas.getContext("2d"); 
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);
				var src = canvas.toDataURL("image/jpeg");
				document.getElementById("js_preview2").setAttribute("src",src);
			};
	};
}
function preView3(e){
	var f = e.files[0];
	var FR = new FileReader();
	FR.readAsDataURL(f);
	FR.onload = function(f){
		var canvas = document.createElement('canvas');
		var img = new Image();
			img.src = this.result;
			img.onload = function(){ 
				var ctx = canvas.getContext("2d"); 
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);
				var src = canvas.toDataURL("image/jpeg");
				document.getElementById("js_preview3").setAttribute("src",src);
			};
	};
}