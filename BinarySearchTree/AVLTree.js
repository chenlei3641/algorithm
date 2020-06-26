function AvlNode(val,left,right,height){
    this.val=val;
    this.left=left;
    this.right=right;
    this.height=height;
    
    this.geth=function(t){
        return t==null? -1:t.height;
    }
    this.getdist=function(){
        var rh= this.right==null? -1:this.right.height;
        var lh= this.left==null? -1:this.left.height;

        return Math.abs(rh-lh);
    }
    this.insert=function(x,t){
        if(t==null)
            return new AvlNode(x,null,null,0);
        
        var r=x-t.val;
        if(r<0){//向左插入
            t.left=this.insert(x,t.left)
            //插入后判断是否需要旋转（左右子树高度差为2）(LL|LR)
            if(t.getdist()==2){
                //判断插入在L|R
                if(x-t.left.val>0){
                    //LR
                    this.doubleWithLeftChild()
                }else{
                    //LL
                    this.rorateWithLeftChild(t)
                }
            }
        }else if(r>0){
            t.right=this.insert(x,t.right)
            if(t.getdist()==2){
                 //判断插入在L|R
                 if(x-t.left.val>0){
                    //RR
                    this.rorateWithRightChild(t)
                }else{
                    //RL
                    this.doubleWithRightChild(t)
                }
            }
        }
    }
//         k2        ->|       k1
//     k1    (Z)     ->|  X        k2
// X      (Y)        ->|      (Y)      (Z)    
    this.rorateWithLeftChild=function(k2){//LL
        var k1=k2.left;
        k2.left=k1.right;
        k1.right=k2;
        //更新k2,k1的高度
        k2.height=Math.max(this.geth(k2.left),this.geth(k2.left))+1;
        k1.height=Math.max(this.geth(k1.left),k2.height)+1;
        return k1;
    }
//  k2            ->|       k1
//     k1         ->|  k2       X 
//        X       ->|         
    this.rorateWithRightChild=function(k2){//RR
        var k1=k2.right;
        k2.right=k1.left;
        k1.left=k2;
        //更新k2,k1的高度
        k2.height=Math.max(this.geth(k2.left),this.geth(k2.left))+1;
        k1.height=Math.max(this.geth(k1.right),k2.height)+1;
        return k1;
    }
    this.doubleWithLeftChild=function(k3){//RL
        k3.left=rorateWithRightChild(k3.left);
        return rorateWithLeftChild(k3);
    }
    this.doubleWithRightChild=function(k3){//LR
        k3.right=rorateWithLeftChild(k3.right);
        return rorateWithRightChild(k3);
    }
}