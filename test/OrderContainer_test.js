var assert = require('chai').assert;
var OrderContainer = require('../app/OrderContainer');
var Order = require('../app/Order');


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

    describe('after adding Order', function(){
    	afterEach(function(){
    		delete order;
	       	delete companyName;
	       	delete stockId;
	       	delete quantity;
	       	delete side;
    	});

    	before(function(){
    		this.companyName = "ABC";
	  		this.stockId = 1;
	  		this.side = "buy";
	  		this.quantity = 20;
	        this.order = new Order(this.stockId, this.side, this.companyName, this.quantity);
    		this.orderContainer = new OrderContainer();
    	});

    	it('should give the container length more than zero after adding order', function(){
    		assert.deepEqual(this.orderContainer.getContainer().length , 0);
    		this.orderContainer.addOrder(this.order);
    		assert.deepEqual(this.orderContainer.getContainer().length , 1);
    	})

    })
});