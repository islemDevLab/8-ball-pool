let sprite = {}; //empty object
let assetsStillLoading = 0;
function assetsLoadingLoop(callback){
	if (assetsStillLoading) {
		requestAnimationFrame(assetsLoadingLoop.bind(this,callback));

	} else {

	}
}

function loadAssets(callback){

	function loadSprite(fileName){

		assetsStillLoading++;
		let spriteImage = new Image();
		spriteImage.src = "./assets"+fileName;
		spriteImage.onload = function () {
			// body...
			assetsStillLoading--;
		}
		return spriteImage;
	}
	sprites.background = loadSprite("table.png");
	sprite.stick = loadSprite("cue.png")
}