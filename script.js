var myStorage = window.localStorage, pageCount;
window.addEventListener('load', function(){
   if(!myStorage.getItem("pageCount")){
      myStorage.setItem('pageCount', 1);
   } else {
      pageCount = myStorage.getItem("pageCount");
      pageCount = pageCount + 1;
      myStorage.setItem('pageCount', pageCount );
   }
   console.log('Số lượt khách hàng ghé thăm trang ', myStorage.getItem("pageCount"));
});