//JavaScript数组的常用方法

//Array.prototype.join 将数组转为字符串


var arr = [1,2,3];
console.log(arr.join());
console.log(arr.join("_"));

function repeatString(str,n){
    return new Array(n+1).join(str)
}

console.log(new Array(2).join("js"));

console.log(repeatString("a.",4));
console.log(repeatString("hello_",6));



//Array.prototype.reverse 逆序


var arr = [1,2,3,4,5];
arr.reverse();
console.log(arr);


//Array.prototype.sort 排序


var arr = ['c','a','b','e'];
var sortArr = arr.sort();
console.log(arr);
console.log(sortArr);

//默认转字符串排序
arr = [12,3,14,43,5];
console.log(arr.sort());

//可以通过下面的方式实现数字排序
var numberSortArr = arr.sort(function(a,b){
    return a - b;
});
console.log(numberSortArr);

//对象属性排序
var arr = [{age:25},{age:20},{age:30}];
arr.sort(function(a,b){
    return a.age - b.age;
});
arr.forEach(function(item){
    console.log('age',item.age);
});



//Array.prototype.concat 合并数组


var arr = [1,2,3];
console.log(arr.concat(4,5));
console.log(arr);

//合并时只拆一级
console.log(arr.concat([12,33],14));
console.log(arr.concat([1,2,3,[4,5]]));



//Array.prototype.slice 截取数组


//右不包含
var arr = [1,2,3,4,5,6];
console.log(arr.slice(1,4));
console.log(arr.slice(-1));
console.log(arr.slice(-4,4));
console.log(arr.slice(-4,-1));



//Array.prototype.splice 数组拼接


//删除元素
var arr = [1,2,3,4,5];
console.log(arr.splice(2));
console.log(arr);

arr = [1,2,3,4,5];
console.log(arr.splice(2,2));
console.log(arr);

//拼接
arr = [1,2,3,4,5];
console.log(arr.splice(1,1,'a','b'));
console.log(arr);




//Array.prototype.forEach 遍历


//x:值  index:索引 a:数组本身
var arr = [1,2,3,4,5];
arr.forEach(function(x,index,a){
    console.log(x + '|' + index + '|' + (a === arr));
});


//Array.prototype.map 映射


//原数组不变
var arr = [1,2,3,4,5];
var mapArr = arr.map(function(x){
    return x + 10;
});

console.log(mapArr);
console.log(arr);


//Array.prototype.filter  过滤


var arr = [1,2,3,4,5,6,7];
var filterArr = arr.filter(function(x,index){
    return index % 2 === 0 || x > 4
});

console.log(filterArr);
console.log(arr);



//Array.prototype.every & some  数组判断


var arr = [1,2,3,4,5];
//判断是否所有元素都小于10
console.log(arr.every(function(x){
    return x < 10;
}));

//判断是否所有元素都大于5
console.log(arr.every(function(x){
    return x > 5;
}));


//是否有元素等于3
console.log(arr.some(function(x){
    return x === 3;
}));

//是否有元素等于10
console.log(arr.some(function(x){
    return x === 10;
}));





//Array.prototype.reduce & reduceRight  元素之间运算


var arr = [1,2,3];
//0+1 1+2 3+3
var sum = arr.reduce(function(x,y){
    return x + y;
},0);

console.log(sum);
console.log(arr);


arr = [3,6,9];
var max = arr.reduce(function(x,y){
    console.log(x + "|" + y);
    return x > y ? x : y;
});

console.log(max);

var arr = [3,6,9];
var max = arr.reduceRight(function(x,y){
    console.log(x + "|" + y);
    return x > y ? x : y;
});

console.log(max);




//Array.prototype.indexOf&lastIndexOf 检索


var arr = [1,2,3,4,1,2];
console.log(arr.indexOf(2));
console.log(arr.indexOf(10));
console.log(arr.indexOf(1,1));
console.log(arr.indexOf(1,-3));
console.log(arr.indexOf(2,-1));

console.log(arr.lastIndexOf(2));
console.log(arr.lastIndexOf(2,-2));





//Array.isArray 判断是否是数组

console.log(Array.isArray([]));

console.log([] instanceof Array);

console.log(({}).toString.apply([]) === '[object Array]');

console.log([].constructor === Array);