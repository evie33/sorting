// beforeAll(function () {
//   spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
// it('getting to the center of tootsiepop involves exactly three licks', function () {
//   tootsiepop.getToCenter();
//   expect(tootsiepop.lick.calls.count()).toEqual(3);
// });



describe('Bubble Sort', function(){
 it('handles an empty array', function(){
   expect( bubbleSort([]) ).toEqual( [] );
 });

 it('handles a single item array', function(){
   expect( bubbleSort([2]) ).toEqual( [2] );
 });

 it('handles multiple items', function(){
   expect( bubbleSort([6,3,4,5,7]) ).toEqual( [3,4,5,6,7] );
 });
});
