// Accordion

const accordionContent = document.querySelectorAll('.accordion-content')

accordionContent.forEach((item, i) => {
    let header = item.querySelector('header');
    header.addEventListener('click', () => {
        item.classList.toggle('open')

        let description = item.querySelector(".description");
        let activeBg = item.querySelector(".header")
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight + 72}px`;
            description.style.paddingTop = '30px'
            item.querySelector('i').classList.replace('bi-arrow-up-right', 'bi-arrow-down-right')
            activeBg.classList.add("bg")
        } else {
            description.style.height = '0px'
            description.style.paddingTop = '0px'
            item.querySelector('i').classList.replace('bi-arrow-down-right', 'bi-arrow-up-right')
            activeBg.classList.remove("bg")
        }
        removeOpen(i)
    })
})

const removeOpen = (i) => {
    accordionContent.forEach((item2, ind) => {
        if (i != ind) {
            item2.classList.remove('open');
            let des = item2.querySelector(".description")
            des.style.height = '0px'
            des.style.paddingTop = '0px'
            item2.querySelector('i').classList.replace('bi-arrow-down-right', 'bi-arrow-up-right')
            let activeBg = item2.querySelector(".header")
            activeBg.classList.remove("bg")
        }
    })
}