/* document.getElementsBy*("*").foreach( function ); */
HTMLCollection.prototype.foreach=function(f){for(var i=0;i<this.length;i++){f(this.item(i),i,this);}};
