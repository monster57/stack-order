var Order = function(stockId, side, company, quantity ){
	this.stockId = stockId;
	this.side = side;
	this.company = company;
	this.quantity = quantity;
}

Order.prototype.getStockId = function(){
	return this.stockId;
}

Order.prototype.getSide = function(){
	return this.side;
}

Order.prototype.getCompanyName = function(){
	return this.company;
}

Order.prototype.getQuantity = function(){
	return this.quantity;
}


module.exports = Order;
