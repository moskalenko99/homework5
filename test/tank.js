function Tank(left, top){

	this.left = left;
	this.top = top;
	this.direction = 0; // up, left, right, down
	this.bullets = [];
	this.element = document.createElement('div');
	this.element.classList.add('rect');
	$("body").append(this.element);

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
		$(this.element).css({ "top": this.top, "left": this.left });
		$(this.element).css({"transform": "rotate(" + this.direction +"deg)"});
	
		this.bullets.forEach(function(bullet){
			bullet.render();
		});
		
	};
	this.update({});

}