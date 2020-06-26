var BinaryNode = require('./BinaryNode');
var DataUtils= require('../base/DataUtils')
function BinartSearchTree(){
    this.root=null;
    this.makeEmpty=function(){
        this.root=null;
    }
    this.isEmpty=function(){
        return this.root==null;
    }
    this.contains=function(x){
        return contains(x,this.root);
    }
    function contains(x,root){
        //当节点（子节点）不存在，查找结束
        if(!x) return false;
        var compareResult=x-root.val;
        if(compareResult<0){
            //如果x比节点的值小，则向左子节点查询
            return contains(x,root.left);
        }else if(compareResult>0){
            return contains(x,root.right);
        }else{
            return true;
        }
    }
    this.findMin=function(){
        return findMin(this.root).val;
    }
    function findMin(t){
        if(t==null)
            return null;
        else if (t.left==null)
            return t;
        return findMin(t.left);
    }
    this.findMax=function(){
        return findMax(this.root).val;
    }
    function findMax(t){
        if(t==null)
            return null;
        else if (t.right==null)
            return t;
        return findMax(t.right);
    }
    function insert(x,t){
        if(t==null)
            return new BinaryNode(x,null,null);
        
        var compareResult=x-t.val;
        if(compareResult<0)
            t.left=insert(x,t.left);
        else if(compareResult>0)
            t.right=insert(x,t.right);
        
        return t;
        
    }
    this.insert=function(x){
        this.root=insert(x,this.root)
    }
    function remove(x,t){
        if(t==null)
            return t;
        var compareResult=x-t.val;
        if(compareResult<0)
         t.left=remove(x,t.left);
        else if(compareResult>0)
         t.right=remove(x,t.right);
        else if(t.left !=null && t.right !=null){
            //找到要删除节点后，如果有左右子节点
            //找到最小的节点并替换要删除节点后再将min node 删除
            t.val=findMin(t.right).val;
            t.right=remove(t.val,t.right)
        }else{
            //如果是单个子节点或者没有子节点
            //将子节点替换到删除节点
            t=t.left !=null? t.left:t.right
        }
        return t;
    }
    this.remove=function(x){
        this.root=remove(x,this.root);
    }
    this.printTree=function(){
        if(this.isEmpty())
            console.log('empty')
        else
            printTree(this.root)
    }
    function printTree(t){
        if(t==null) return;
        printTree(t.left)
        console.log(t.val);
        printTree(t.right)
    }
 
}
var tree=new BinartSearchTree();
var data=new DataUtils().data(10);
data.forEach(val => {
    tree.insert(val)
});
tree.printTree();
