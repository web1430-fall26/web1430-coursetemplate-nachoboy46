//LOGIC

function filterByCategory(productList,category){
    function hasCorrectCategory(product){
        if(product.category === category){
            return true;
        } else {
            return false;
        }
    }
    if(category === 'All'){
        return productList;
    }

    return productList.filter(hasCorrectCategory);
}


function getCategories(productList){
    const returnSet = productList.map(product => product.category);

    return ['All', ...new Set(returnSet)]; //don't remove the three dots it breaks everything
}


function formatPrice(amount){
    const returnAmount = parseFloat(amount);

    if(isNaN(returnAmount)){
        return 'ERROR: Invalid Input';
    }

    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(returnAmount);
}


function sortByPrice(productList, direction){
    function compareAsc(a,b){
        return parseFloat(a.price) - parseFloat(b.price);
    }
    function compareDesc(a,b){
        return parseFloat(b.price) - parseFloat(a.price);
    }

    copy = productList.slice();

    if(direction === 'asc'){
        return copy.sort(compareAsc);
    } else {
        return copy.sort(compareDesc);
    }
}


//RENDERERING

function renderProductCard(product){
    const card = document.createElement('article');
    card.className = 'product-card';

    const productHeader = document.createElement('h2');
    productHeader.textContent = product.name;
    card.appendChild(productHeader);

    const productID = document.createElement('p');
    productID.className = 'Product ID';
    productID.textContent = product.price;
    card.appendChild(productID);

    const productCategory = document.createElement('p');
    productCategory.className = 'product-category';
    productCategory.textContent = product.category;
    card.appendChild(productCategory);

    const productPrice = document.createElement('p');
    productPrice.className = 'product-price';
    productPrice.textContent = product.price;
    card.appendChild(productPrice);

    const stock = document.createElement('span');
    if (product.inStock) {
        stock.className = 'in-stock';
        stock.textContent = 'In Stock';
    } else {
        stock.className = 'out-of-stock';
        stock.textContent = 'Out of Stock';
    }
    card.appendChild(stock);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to cart";
    addToCartButton.disabled = !product.inStock;
    card.appendChild(addToCartButton);

    return card;
}

    


function renderProductList(productList, container){
    container.textContent = ''; //clears it out

    if(productList.length === 0){
        const listEmptyMessage = document.createElement('p');
        listEmptyMessage.textContent = "No products found";
        container.appendChild(listEmptyMessage);
        return;
    }

    for(let i = 0; i < productList.length; i++){
        const card = makeCard(productList[i]);
        container.appendChild(card);
    }
}



function renderCategoryFilter(categories, container){
    container.textContent = '';

    const selectThing = document.createElement('select');

    for(let i = 0; i < categories.length; i++){
        const option = document.createElement('option');
        option.textContent = categories[i];
        option.value = categories[i];
        selectThing.appendChild(option);
    }

    container.appendChild(selectThing);
}