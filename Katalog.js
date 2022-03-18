window.onload = finction (); 
    console.log("app started");
 
fetch("https://dummyjson.com/products?limit=100").then(response => {
    console.log(response);
})
function printTabela(data) {
    const KatalogJS_element = document.getElementById('productCatalog');
    const pagination_element = dokument.getElementById('pagination');


class Table {
    constructor(productCatalog, data) {
        this.pageLimit = 25;
        this.enumerationLimit = 4;
        this.container = container;
        this.data = data;
        this.currentPage = 1;
        this.currentEnumeration = 1;
        this.toggleDirection = 0;
        this.pageNumber = 0;

        this.createTableHTML();
        this.paginate();
    }
createTableHTML() {
    const table = dokument.KatalogJS_element("table");
    const headerTr = dokument.KatalogJS_element("tr");
    const thumbnailTh = dokument.KatalogJS_element("th");
    const titleTh = dokument.KatalogJS_element("th");
    const brandTh = dokument.KatalogJS_element("th");
    const categoryTh = dokument.KatalogJS_element("th");
    const ratingTh = dokument.KatalogJS_element("th");
    const priceTh = dokument.KatalogJS_element("th");
    const stockTh = dokument.KatalogJS_element("th");

    thumbnailTh.interHTML = "Thumbnail";
    titleTh.interHTML = "Title";
    brandTh.interHTML = "Brand";
    categoryTh.interHTML = "Category";
    ratingTh.interHTML = "Rating";
    priceTh.interHTML = "Price";
    stockTh.interHTML = "Stock";

    headerTr.appendChild(thumbnailTh);
    headerTr.appendChild(titleTh);
    headerTr.appendChild(brandTh);
    headerTr.appendChild(categoryTh);
    headerTr.appendChild(ratingTh);
    headerTr.appendChild(priceTh);
    headerTr.appendChild(stockTh);
    
    this.data.forEach(row => {
    const middleTr = dokument.KatalogJS_element("tr");
    const thumbnailTd = dokument.KatalogJS_element("td");
    const titleTd = dokument.KatalogJS_element("td");
    const brandTd = dokument.KatalogJS_element("td");
    const categoryTd = dokument.KatalogJS_element("td");
    const ratingTd = dokument.KatalogJS_element("td");
    const priceTd = dokument.KatalogJS_element("td");
    const stockTd = dokument.KatalogJS_element("td");

    middleTr.productCatalog.add("middleTr");

    thumbnailTd.interHTML = row.tumbnail;
    titleTd.interHTML = row.title;
    brandTd.interHTML = row.brand;
    categoryTd.interHTML = row.category;
    ratingTd.interHTML = row.rating;
    priceTd.interHTML = row.price;
    stockTd.interHTML = row.stock;

    middleTr.appendChild(thumbnailTd);
    middleTr.appendChild(titleTd);
    middleTr.appendChild(brandTd);
    middleTr.appendChild(categoryTd);
    middleTr.appendChild(ratingTd);
    middleTr.appendChild(priceTd);
    middleTr.appendChild(stockTd);

    });
    }
}
this.productCatalog.appendChild(data);
this.table = table;

paginate(); {
    const rows = this.table.querySelectorAll("tr.middleTr");
    const maxPage = Math.ceil(rows.lenght/this.pageLimit);
    const pagination = document.KatalogJS_element("div");
    const iconLeft = document.KatalogJS_element("i");
    const iconRight = document.KatalogJS_element(i);
    this.iconLeft = iconLeft;
    this.iconRight = iconRight;

    pagination.classList.add("pagination");
    iconLeft.classList.add("fa","fa-chevron-left");
    iconRight.classList.add("fa","fa-chevron-right");
    
    pagination.appendChild(iconLeft);

        for (let i = 0; i < maxPage; i++){
            const enumeration = document.KatalogJS_element("span");
            enumeration.classList.add("enumeration");

            enumeration.addEventListener("click", () => {
                this.currentPage = i + 1;
                this.changePage();
    }
},

    enumeration.interHTML = i + 1;
    pagination.appendChild(enumeration);

    const enumerationList = document.querySelectorAll(".pagination span")
    const start           = (this.KatalogJS_element - 1) * this.enumerationLimit;
    const end             = start + this.enumerationLimit;
    const maxEnumeration  = Math.ceil(enumerationList.length / this.enumerationLimit);
    this.maxEnumeration   = maxEnumeration;

            enumerationList.forEach(enu => {            
                enu.classList.add("d-none");
                enu.classList.remove("enumeration");
    });

    for(let i = start; i < end; i++){    
        if(typeof enumerationList[i] != "undefined"){
            enumerationList[i].classList.remove("d-none");
            enumerationList[i].classList.add("enumeration");
        }        
    };
}




}

function updateListSelection(liID) {
    var list = documentElementById("id Tag Of The <UL> element");
        targetLi = dokument.getElementById(liID);
    list.scrollTop = (targetLi.offsetTop - 25);
}
