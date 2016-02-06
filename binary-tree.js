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
	if(this.root===null){
		return false;
	}
	else{
		var r=this.root;
		while(r!=null){
			if(r.data===data){
				return true;
			}
			else{
				if(data<r.data) r=r.left;
				else r=r.right;
			}		
		}
		return false;
	}		
}	
remove(data) {

	}

	
size() {

	}

	
isEmpty() {

	}

}
