document.getElementById("searchForm").addEventListener("submit",function(t){t.preventDefault();const e=document.getElementById("searchQuery").value;e&&(localStorage.setItem("searchQuery",e),window.location.href="/Eatsy/searchResults")});
