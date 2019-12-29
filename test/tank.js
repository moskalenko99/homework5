function Tank(){

	this.left = 20;
	this.top = 20;
	this.direction = 0; // up, left, right, down
	this.bullets = [];

	this.update = function(keys){
		if(keys[38]) {
			this.direction = 0;
			this.top -= 5;
		}
		if(keys[40]) {
			this.direction = 180;
			this.top += 5;
		}
		if(keys[37]) {
			this.direction = 270;
			this.left -= 5;
		}
		if(keys[39]) {
			this.direction = 90;
			this.left += 5;
		}

		this.bullets.forEach(function(bullet){
			bullet.update();
		});

	};

	this.fire = function(keys) {
		var bullet = new Bullet(this.left, this.top, this.direction);
		this.bullets.push(bullet);
	}

	this.render = function(){
		$(".rect").css({ "top": this.top, "left": this.left });
		$('.rect').css({"transform": "rotate(" + this.direction +"deg)"});
	
		this.bullets.forEach(function(bullet){
			bullet.render();
		});
		
	};

}