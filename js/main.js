let shoesList = document.querySelector('.coffee_cards_cont')
let filterSelectorPrice = document.querySelector('.section_three_title_coff')
let filterSelectorCategory = document.querySelector('.main__assort-select-category')
let filterSelectorGender = document.querySelector('.main__assort-select-gender')


let  url = 'http://localhost:3000/products?'
let filterPrice = ''
let filterCategory = ''
let filterGender = ''

const getShoes = () => {
    shoesList.innerHTML = ''
    fetch(url + `${filterPrice.length ? '_sort=price&_order=' + filterPrice + '&' : ''}${filterCategory.length ? 'category='  + filterCategory + '&' : ''}${filterGender.length ? 'gender='  + filterGender + '&' : ''}`)
    .then((resolve) => resolve.json())
    .then((resolve) => {
        resolve.forEach((item) => {
                shoesList.innerHTML += `          
                <div class="coffee_cards_brown">

                <div class="coffee_cards_contents">
                    <div class="coffee_cards_price_cat">
                        <div class="coffee_cards_titles">
                            <p>Title1</p>
                        </div>
                        <div class="coffee_cards_price_right">
                            <select class="gramm">
                                <option value="select1">250g</option>
                                <option value="select2">100g</option>
                            </select>
                        </div>
                    </div>
                    <div class="coffee_cards_main_content">
                        <div class="coffee_cards_images">
                            <img style="width: 150px; height: 320px;" src="${item.thumbnail}" alt="product image" class="coffee_cards_images_mains">
                        </div>
                        <div class="coffee_cards_specfic">
                            <div class="coffee_cards_star">
                                <img src="/Assets/Group 78.svg" alt="">
                            </div>
                            <div class="coffee_cards_feedback">
                                <p class="coffee_cards_estimation">${item.rating}</p>
                                <p class="coffee_cards_estVotes">(${item.ratingVotes} отзыва)</p>
                            </div>
                            <div class="coffee_cards_grains">
                                <img src="/Assets/Group 98.svg" alt="">
                            </div>
                            <p class="characters">Клиника</p>
                            <div class="coffee_cards_orange_circle">
                                <img src="/Assets/Group 76.svg" alt="">
                            </div>
                            <p class="characters">Клиника</p>
                            <div class="coffee_cards_orange_circle">
                                <img src="/Assets/Group 76.svg" alt="">
                            </div>
                            <p class="characters">Клиника</p>
                            <div class="coffee_cards_orange_circle">
                                <img src="/Assets/Group 76.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="coffee_cards_title_footer">
                        <h4>${item.title}</h4>
                        <p class="title_footer_cards">Lorem ipsum dolor sit>${item.description}</p>
                    </div>
                    <div class="coffee_cards_price_trash">
                        <div class="coffee_cards_price_footer">${item.price}$</div>
                        <button class="cards_footer_trash">В корзину</button>
                    </div>
                </div>
            </div>
                `
        })
    })
    .catch((err) => alert(err))
}

getShoes();


filterSelectorPrice.addEventListener('change', (e) => {
    filterPrice = e.target.value
    getShoes()
})

// filterSelectorCategory.addEventListener('change', (e) => {
//     filterCategory = e.target.value
//     getShoes()
// })

// filterSelectorGender.addEventListener('change', (e) => {
//     filterGender = e.target.value
//     getShoes()
// })

