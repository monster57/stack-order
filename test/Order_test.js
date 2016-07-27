var assert = require('chai').assert;
var Order = require('../app/Order')


describe('test', function() {

    afterEach(function() {
       delete order;
    });

  	before(function() {
  		this.companyName = "ABC";
  		this.stockId = 1;
  		this.side = "buy";
  		this.quantity = 20;
        this.order = new Order(this.stockId, this.side, this.companyName, this.quantity);
    });



    describe('order', function(){
    	it('should give the stockId ', function () {
	      assert.equal(this.order.getStockId() , this.stockId);
	      // `afterEach` is invoked here, cleaning out `this`
	    });
    })
});