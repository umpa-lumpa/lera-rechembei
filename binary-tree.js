'use strict';



class BinaryTree {
	
constructor() {
	this.root=null;
}
insert(data) {
	var newel=new Node(data,null,null);
		if(this.root===null){
			this.root=newel;
		}
		else{
			var r=this.root;
			while(r!=null){
				var ro=r;
				var b=(r.data>data);
				if (b) r=r.left;
				else r=r.right;
			}	
			if(b) ro.left=newel;
			else  ro.right=newel;
		}
}
contains(data) {

	}

	
remove(data) {

	}

	
size() {

	}

	
isEmpty() {

	}

}
