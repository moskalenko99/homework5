function Aplication(){
	var self = this;

	this.keyMap = {};
    this.tank = new Tank(20, 20);
	this.tank2 = new Tank(100, 100);

	this.start = function(){
		$(document).ready(function(){
			$(document).on('keydown', function(event){
				self.keyMap[event.keyCode] = true;
			});

			$(document).on('keypress', function(event){
				if(event.keyCode == 32){
					self.tank.fire();
				}
			});

			$(document).on('keyup', function(event){
				delete self.keyMap[event.keyCode];
				// up 38
				// down 40
				// left 37
				// right 39
			});

			setInterval(function(){
			  self.tank.update(self.keyMap);
			  self.tank.render();
			  self.tank2.render();
			}, 15);
	  	})
	}

}