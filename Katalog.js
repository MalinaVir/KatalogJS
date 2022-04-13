window.onload = function () {;
    console.log("app started");
}
 
fetch("https://dummyjson.com/products?limit=100").then(response => {
    console.log(response);
})
function printTabela(data) {
    const KatalogJS_element = document.getElementById('productCatalog');
    const pagination_element = dokument.getElementById('pagination');
}


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

    headerTr.appendProducts(thumbnailTh);
    headerTr.appendProducts(titleTh);
    headerTr.appendProducts(brandTh);
    headerTr.appendProducts(categoryTh);
    headerTr.appendProducts(ratingTh);
    headerTr.appendProducts(priceTh);
    headerTr.appendProducts(stockTh);
    
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

    middleTr.appendProducts(thumbnailTd);
    middleTr.appendProducts(titleTd);
    middleTr.appendProducts(brandTd);
    middleTr.appendProducts(categoryTd);
    middleTr.appendProducts(ratingTd);
    middleTr.appendProducts(priceTd);
    middleTr.appendProducts(stockTd);

    });
    }
}
this.productCatalog.appendProducts(data);
this.table = table;

paginate() ; {
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
    
    pagination.appendProducts(iconLeft);

        for (let i = 0; i < maxPage; i++){
            const enumeration = document.KatalogJS_element("span");
            enumeration.classList.add("enumeration");

            enumeration.addEventListener("click", () => {
                this.currentPage = i + 1;
                this.changePage();
    }),


    enumeration.interHTML = i + 1 ;
    pagination.appendProducts(enumeration);
}

pagination.appendProducts(iconRight);
this.productCatalog.appendProducts(pagination);

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

    iconRight.addEventListener("click", () => {
        this.currentEnumeration++;
        this.pageNumber++;  
        this.changeBtn();
        this.currentPage = (this.pageNumber * this.enumerationLimit) + 1;
        this.changePage();
    });

    iconLeft.addEventListener("click", () => {
        this.currentEnumeration--;    
        this.pageNumber--;                    
        this.changeBtn();
        this.currentPage = (this.pageNumber * this.enumerationLimit) + 1;
        this.changePage();
    });

    this.changePage();

}

changeBtn() ; {
    const enumerationList = document.querySelectorAll(".pagination span")
    const start           = (this.currentEnumeration - 1) * this.enumerationLimit;
    const end             = start + this.enumerationLimit;

    enumerationList.forEach(enu => {
        enu.classList.remove("enumeration");
        enu.classList.add("d-none");
    });

    for (let i = start; i < end; i++){       
        if(typeof enumerationList[i] != "undefined"){
            enumerationList[i].classList.remove("d-none");
            enumerationList[i].classList.add("enumeration");
        }                                      
    };

    document.querySelectorAll(".enumeration").forEach(enumeration => {
        enumeration.classList.remove("active");
    });

    document.querySelector(".enumeration:nth-child("+ ((this.enumerationLimit * this.currentEnumeration) - (this.enumerationLimit - 2)) +")").classList.add("active");

    changePage() ; {
        const rows  = this.table.querySelectorAll("tr.middleTr");
        const start = (this.currentPage-1) * this.pageLimit;
        const end = start + this.pageLimit;

        if(this.currentEnumeration == 1){
            this.iconLeft.classList.remove("fa","fa-chevron-left")
            this.iconLeft.classList.add("d-none");
        }else{
            this.iconLeft.classList.add("fa","fa-chevron-left")
            this.iconLeft.classList.remove("d-none");
        }

        if(this.currentEnumeration == this.maxEnumeration){
            this.iconRight.classList.remove("fa","fa-chevron-right")
            this.iconRight.classList.add("d-none");
        }else{
            this.iconRight.classList.add("fa","fa-chevron-right")
            this.iconRight.classList.remove("d-none");
        }

        rows.forEach(row => {
            row.classList.add("d-none");
        });

        for (let i = start; i < end; i++){
            if(typeof rows[i] != "undefined"){
                rows[i].classList.remove("d-none");
            }
        };

        document.querySelectorAll(".enumeration").forEach(enumeration => {
            enumeration.classList.remove("active");
        });

        document.querySelector(".enumeration:nth-child("+ (this.currentPage + 1) +")").classList.add("active");
    }
}

function updateListSelection(liID) {
    var list = documentElementById("id Tag Of The <UL> element");
        targetLi = dokument.getElementById(liID);
    list.scrollTop = (targetLi.offsetTop - 25);
}

newTable(document.getElementById("productCatalog") , data);

function sum(newTable) {
    return newTable;
}

console.log(sum(newTable));