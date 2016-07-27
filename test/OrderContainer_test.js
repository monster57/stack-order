var assert = require('chai').assert;
var OrderContainer = require('../app/OrderContainer');


describe('OrderContainer', function() {

    describe('after Initialization', function(){
    	afterEach(function() {
	       delete orderContainer;
	       delete emptyContainer;
	    });

	  	before(function() {
	  		this.emptyContainer = [];
	        this.orderContainer = new OrderContainer();
	    });

    	it('should give emptyContainer', function () {
	      assert.deepEqual(this.orderContainer.getContainer(), this.emptyContainer);
	    });
    })
});