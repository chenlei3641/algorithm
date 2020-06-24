function DataUtils(){
    this.data=function(size){
        var data=[];
        for(var i=0;i<size;i++){
            data.push((1000*Math.random()).toFixed(0));
        }
        return data;
    }
}
module.exports=DataUtils;