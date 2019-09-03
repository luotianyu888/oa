//公共函数

export default{
    
    //检测对象各属性是否都为空
    check_obj(obj){
        let array = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] === null || obj[key] === '' || obj[key] === undefined) {
                    array.push('a');
                } else {
                    array.push('b');
                }
            }
        }
        return array.indexOf('b')
    },
    
    //获取当前时间 Y-m-d H:i:s
    nowdate(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        return `${year}-${month+1}-${day} ${h}:${m}:${s}`;
    },
    

}
