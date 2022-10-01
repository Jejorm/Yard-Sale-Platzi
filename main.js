const menuEmail = document.querySelector( '.navbar-email' )
const desktopMenu = document.querySelector( '.desktop-menu' )
const menuCartIcon = document.querySelector( '.navbar-shopping-cart' )
const productDetailCloseIcon = document.querySelector( '.product-detail-close' )
const burgerMenu = document.querySelector( '.menu' )
const mobileMenu = document.querySelector( '.mobile-menu' )
const shoppingCartContainer = document.querySelector( '#shopping-cart-container' )
const productDetailContainer = document.querySelector( '#product-detail' )
const cardsContainer = document.querySelector( '.cards-container' )
const productDetailImage = document.querySelector( '#product-detail-image' )

const closeProductDetailAside = () => {
    productDetailContainer.classList.add( 'inactive' )
}

const openProductDetailAside = ( image ) => {

    shoppingCartContainer.classList.add( 'inactive' )

    productDetailContainer.classList.remove( 'inactive' )

    productDetailImage.setAttribute( 'src', image )
    productDetailImage.style.opacity = .8
}

const renderProducts = ( products ) => {
    for ( const product of products ) {

        const productCard = document.createElement( 'div' )
        productCard.classList.add( 'product-card' )

        const img = document.createElement( 'img' )
        img.setAttribute( 'src', product.image )
        img.addEventListener( 'click', () => openProductDetailAside( product.image ) )

        const productInfo = document.createElement( 'div' )
        productInfo.classList.add( 'product-info' )

        const detailsContainer = document.createElement( 'div' )

        const productPrice = document.createElement( 'p' )
        productPrice.innerText = '$' + product.price

        const productName = document.createElement( 'p' )
        productName.innerText = product.name

        detailsContainer.append( productPrice, productName )

        const figure = document.createElement( 'figure' )

        const cartIcon = document.createElement( 'img' )
        cartIcon.setAttribute( 'src', './icons/bt_add_to_cart.svg' )

        figure.append( cartIcon )

        productInfo.append( detailsContainer, figure )

        productCard.append( img, productInfo )

        cardsContainer.append( productCard )
    }
}

const productsList = []

productsList.push( {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
} )

productsList.push( {
    name: 'Display',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
} )

productsList.push( {
    name: 'Laptop',
    price: 720,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

} )

const handleToggleDesktopMenu = () => {

    const isAsideClosed = shoppingCartContainer.classList.contains( 'inactive' )

    if ( !isAsideClosed ) {
        shoppingCartContainer.classList.add( 'inactive' )
    }

    desktopMenu.classList.toggle( 'inactive' )
}

const handleToggleCartAside = () => {

    const isMobileMenuClosed = mobileMenu.classList.contains( 'inactive' )
    const isProductDetailClosed = productDetailContainer.classList.contains( 'inactive' )

    if ( !isMobileMenuClosed ) {
        mobileMenu.classList.add( 'inactive' )
    }

    if ( !isProductDetailClosed ) {
        productDetailContainer.classList.add( 'inactive' )
    }

    shoppingCartContainer.classList.toggle( 'inactive' )
}

const handleToggleMobileMenu = () => {

    const isAsideClosed = shoppingCartContainer.classList.contains( 'inactive' )

    if ( !isAsideClosed ) {
        shoppingCartContainer.classList.add( 'inactive' )
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle( 'inactive' )
}

menuEmail.addEventListener( 'click', handleToggleDesktopMenu )

menuCartIcon.addEventListener( 'click', handleToggleCartAside )

burgerMenu.addEventListener( 'click', handleToggleMobileMenu )

productDetailCloseIcon.addEventListener( 'click', closeProductDetailAside )

renderProducts( productsList )
