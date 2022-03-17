window.onload = finction (); 
    console.log("app started");
 
fetch("https://dummyjson.com/products?limit=100").then(response => {
    console.log(response);
})
function printTabela(data) {
    const KatalogJS_element = document.getElementById('productCatalog');
    const pagination_element = dokument.getElementById('pagination');

let current_page = 1;
let rows = 25;

function productCatalog () {
    wrapper. interHTML = "";
    page--;
}}