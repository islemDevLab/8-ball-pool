function canvas2d(){
	this._canvas = document.getElementById('screen');
	this._canvasContext = this._canvas.getContext('2d');




}

canvas2d.prototype.clear = function(){
	this._canvasContext.clearRect(0,0,this._canvas.width,this._canvas.height);
}

canvas2d.prototype.drawImage = function(image,position,size) {
	this._canvasContext.drawImage(image,position.x,position.y,size.width,size.height);
}
let canvas = new canvas2d();

// Testing
/*let image = new Image();
image.src = "./Assets/table.jpg";


setTimeout(() => {
	canvas.drawImage(image,{x:0,y:0},{width:1335,height:635});
	//canvas.clear();
},1000);*/