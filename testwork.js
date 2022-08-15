let count=0
setInterval(function(){
    count++;
    console.log('第'count + '次刷新页面');
    window.location.reload();
}, 390000);
