function userProgress(time){
    var start = 0;
    var time = Math.round(time*10);
    var progressElement = document.getElementById('user-progress');
     var intervalId = setInterval(function(){
        if (start>100){
            clearInterval(intervalId)
            userCallBack();
        }
        else{
            progressElement.value = start;
        }
        start++;
    }, time);
}


 function userCallBack(){
    document.querySelector('.hidden-block').style.display = 'block';
}
userProgress(2);