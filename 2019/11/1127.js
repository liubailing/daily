function brackets(str) {
    var strArr = str.split('');
 
    function decide(type) {
        switch(type) {
            case '(':
                return 1;
            case '[':
                return 2;
            case '{':
                return 3;
            case ')':
                return -1;
            case ']':
                return -2;
            case '}':
                return -3;
            default:
                break;
        }
    }
 
    var arr = [], flag = true;
 
    strArr.map(item => {
        var num = decide(item);
        
        if (num > 0) {
            arr.push(num);
        } else {
            var prev = arr.pop();
            if (Number(prev + num)) {
                flag = false;
            }
        }
    })
    return flag
}
 
var str1 = '{{{{}}}([)]}';
var str2 = '{{{{}}}[()]}';
console.log(cbrackets(str1)) // 返回f