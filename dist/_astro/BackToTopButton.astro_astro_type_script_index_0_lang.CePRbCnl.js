document.getElementById("searchForm").addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("searchQuery").value;t&&(sessionStorage.setItem("searchQuery",t),window.location.href="/Eatsy/searchResults")});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("btn-back-to-top");window.onscroll=function(){t()};function t(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"}e.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})});
