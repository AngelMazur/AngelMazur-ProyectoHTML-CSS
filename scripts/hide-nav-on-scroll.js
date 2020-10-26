// Scroll Listener 
let scrollPreviousPostion = window.pageYOffset

document.onscroll = (event) => {
    let scrollNewPostion = window.pageYOffset
    const navElement = document.getElementById('navbar')

    // We compare both scroll positions
    if (scrollNewPostion > scrollPreviousPostion) {
        // Hide nav
        console.log('postive')
        navElement.style.display = 'none'
    } else {
        console.log('negative')
        navElement.style.display = ''
    }
    console.log(scrollPreviousPostion, scrollNewPostion)
    
    // Update the previous scroll postion
    scrollPreviousPostion = window.pageYOffset
}