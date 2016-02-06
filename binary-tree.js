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
if(this.contains(data)){
	var ps=this.root, pr=this.root,w,v;
	while(ps.data!=data){
		pr=ps;
		if(data>ps.data) ps=ps.right;
		else ps=ps.left;
	}
	if((ps.left===null) && (ps.right===null)){
		if(pr===ps)
			this.root=null;
		else if(pr.right===ps) 
			pr.right=null;
		else 
			pr.left=null;
	}
	else if (ps.right===null){
		if(pr===ps){
			ps=ps.left;
			this.root=ps;}
		else if(pr.right===ps) 
			pr.right=ps.left;
		else 
			pr.left=ps.left;
	}
	else if(ps.left===null){
		if (pr===ps){
			ps=ps.right;
			this.root=ps;}
		else if (pr.right===ps)
			pr.right=ps.right;
		else
			pr.left=ps.right;
	}
	else{
		w=ps.left;
		if(w.right===null)
			w.right=ps.right;
		else{
			while(w.right!=null){
				v=w;
				w=w.right;
			}
			v.right=w.left;
			w.right=ps.right;
			w.left=ps.left;
		}
		if(ps===pr)
			this.root=w;
		else if (pr.left===ps)
			pr.left=w;
		else 
			pr.right=w;
	}
}
}	
size() {

	}

	
isEmpty() {

	}

}
