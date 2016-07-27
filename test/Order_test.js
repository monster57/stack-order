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
	    });

	    it('should give the side ', function () {
	      assert.equal(this.order.getSide() , this.side );
	    });

	    it('should give the company name ', function () {
	      assert.equal(this.order.getCompanyName() , this.companyName);
	    });

	    it('should give the quantity of item ', function () {
	      assert.equal(this.order.getQuantity() , this.quantity);
	    });
    })
});