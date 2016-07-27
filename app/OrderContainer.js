var OrderContainer = function(){
	this.container = [];
}

OrderContainer.prototype.getContainer = function(){
	return this.container;
}

OrderContainer.prototype.addOrder = function(order){
	this.container.push(order);
}

module.exports = OrderContainer;