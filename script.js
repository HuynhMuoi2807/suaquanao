var mySession = window.sessionStorage, pageCount;
window.addEventListener('load', function(){
   if(!mySession.getItem("pageCount")){
      mySession.setItem('pageCount', 1);
   } else {
      pageCount = mySession.getItem("pageCount");
      pageCount = pageCount + 1;
      mySession.setItem('pageCount', pageCount );
   }
   console.log('Số lượt khách hàng ghé thăm trang ', mySession.getItem("pageCount"));
});