let show = reactive({
    titleShow1: true,
    catsShow1: true,
    catsShow2: true,
    catsShow3: false,
    catsShow4: false,
    catsShow5: false,
    catsShow6: false,
    titleShow2: false,
    shopShow1: false,
    shopShow2: false,
})

if(window.innerWidth < 768) {
    show.catsShow2 = false
}

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        show.catsShow2 = true
    }
})
window.addEventListener("scroll", function() {
    let scrollY = window.scrollY
    if(window.innerWidth >= 1065) {
        if(scrollY > 90) {
            show.catsShow3 = true
            show.catsShow4 = true
        }
        if(scrollY > 570) {
            show.catsShow5 = true
            show.catsShow6 = true
        }
        if(scrollY > 1050) {
            show.catsShow7 = true
        }
        if(scrollY > 1550) {
            show.titleShow2 = true
            show.shopShow1 = true
            show.shopShow2 = true
        }
    } else if(window.innerWidth >= 768){
        if(scrollY > 90) {
            show.catsShow3 = true
            show.catsShow4 = true
        }
        if(scrollY > 570) {
            show.catsShow5 = true
            show.catsShow6 = true
        }
        if(scrollY > 1050) {
            show.catsShow7 = true
        }
        if(scrollY > 1550) {
            show.titleShow2 = true
        }
        if(scrollY > 1600) {
            show.shopShow1 = true
        }
        if(scrollY > 2200) {
            show.shopShow2 = true
        }
    } else {
        if(scrollY > 90) {
            show.catsShow2 = true
        }
        if(scrollY > 570) {
            show.catsShow3 = true
        }
        if(scrollY > 1050) {
            show.catsShow4 = true
        }
        if(scrollY > 1630) {
            show.catsShow5 = true
        }
        if(scrollY > 2110) {
            show.catsShow6 = true
        }
        if(scrollY > 2590) {
            show.catsShow7 = true
        }
        if(scrollY > 3070) {
            show.titleShow2 = true
        }
        if(scrollY > 3170) {
            show.shopShow1 = true
        }
        if(scrollY > 3800) {
            show.shopShow2 = true
        }
    }
})
