// Accordion

const accordionContent = document.querySelectorAll('.accordion-content')

accordionContent.forEach((item, i) => {
    let header = item.querySelector('header');
    header.addEventListener('click', () => {
        item.classList.toggle('open')

        let description = item.querySelector(".description");
        let activeBg = item.querySelector(".header")
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight + 42}px`;
            description.style.paddingTop = '15px'
            item.querySelector('i').classList.replace('bi-plus', 'bi-dash')
            activeBg.classList.add("colorText")
        } else {
            description.style.height = '0px'
            description.style.paddingTop = '0px'
            item.querySelector('i').classList.replace('bi-dash', 'bi-plus')
            activeBg.classList.remove("colorText")
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
            item2.querySelector('i').classList.replace('bi-dash', 'bi-plus')
            let activeBg = item2.querySelector(".header")
            activeBg.classList.remove("colorText")
        }
    })
}