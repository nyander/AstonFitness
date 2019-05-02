describe('Array transforms',function(){
	describe('Map transform',function(){
		it('Can add one to all elements of an array',function(){
			var arr = [1,2,3];
		    var addOne = function(x){return x+1;};
			
			var actualResult = arr.map(addOne);
			var expectedResult = [2,3,4];
			
			expect(actualResult).to.deep.equal(expectedResult);
		});
		
		it('Can extract word counts from an array of objects',function(){
			var words = [
				{word:'internet',count:12},
				{word:'computing',count:5},
			];
			var extractCount = function(x){return x.count;};
			
			var actualResult = words.map(extractCount);
			var expectedResult = [12,5];
			
			expect(actualResult).to.deep.equal(expectedResult);
		});
	});
	
	describe('Filter transform',function(){
		it('Can filter out negative elements of an array',function(){
			var arr = [1,2,-3,4,-5];
		    var condition = function(x){return x>0;};
			
			var actualResult = arr.filter(condition);
			var expectedResult = [1,2,4];
			
			expect(actualResult).to.deep.equal(expectedResult);
		});
	});
	
	describe('Reduce transform',function(){
		it('Can sum up elements of an array',function(){
			var arr = [1,3,2,17];
		    var f = function(runningTotal,x){return runningTotal + x;};
			
			var actualResult = arr.reduce(f,0);
			var expectedResult = 23;
			
			expect(actualResult).to.deep.equal(expectedResult);
		});
	})
});
