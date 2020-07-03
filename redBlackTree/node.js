const BLACK = false;
const RED = true;
class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = RED;
    }
}

module.exports={Node,RED,BLACK}
