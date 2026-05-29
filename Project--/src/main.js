const nav = document.querySelectorAll('#nav li a')
const ham = document.querySelector('#ham')
ham.addEventListener('click', function () {
    nav.forEach((e, i) => {
        e.classList.toggle('hidden')
    })
    const li = this.querySelectorAll('p')
    li[0].classList.toggle('rotate-45')
    li[0].classList.toggle('origin-top-right')
    li[1].classList.toggle('-rotate-45')
})

for (let el of nav) {
    el.addEventListener('click', function () {
        nav.forEach(e => {
            e.classList.remove('md:border-b-2', 'md:border-lime-500', 'pb-5', 'font-medium', 'text-gray-900')
            e.classList.add('text-gray-500', 'hover:text-gray-500/75')
        })
        this.classList.remove('text-gray-500', 'hover:text-gray-500/75')
        this.classList.add('md:border-b-2', 'md:border-lime-500', 'pb-5', 'font-medium', 'text-gray-900')
        let path = ''
        let path1 = ''
        const nav2 = document.querySelector('#nav2')
        const content = document.querySelector('#content')
        if (this.innerText === 'Dashboard') {
            content.innerText = ''
            path = `
            <li>
            <a href="app.html" class="block transition hover:text-gray-700 dark:hover:text-gray-100">
                    <span class="sr-only"> Home </span>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-4 md:size-7" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    </a>
                    </li>
                    
                    <li class="rtl:rotate-180">
                    <span class="text-gray-400 dark:text-gray-500">/</span>
                    </li>
                    <li>
            <span id='home' class="block transition hover:text-gray-700 dark:hover:text-gray-100"> Home </span>
            </li>
                    `
            path1 = `
                    <div class="text-center w-full bg-green-300 text-xl font-action">
            <h1>Selamat Datang</h1>
        </div>
        <div class="m-5 mt-20 p-6 grid grid-cols-2 gap-2">
            <div class="bg-slate-200 p-2">
                <h1 class="font-robot text-lg pl-2 font-bold">Judul</h1>
                <p class="font-medium font-action pl-4 text-md">Sub Judul
                    <hr>
                </p>
                <div class="container font-mono mt-2.5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis minima dolor odit
                        sapiente eaque sunt sint voluptatum excepturi possimus quibusdam similique alias sequi, quaerat
                        tempora molestiae. Ipsa, corporis dolores.</p>
                </div>
            </div>
        </div>
                    `
        } else if (this.innerText === 'Projects') {
            content.innerText = ''
            path = `
                    <li>
                    <a href="app.html" class="block transition hover:text-gray-700 dark:hover:text-gray-100">
                    <span class="sr-only"> Home </span>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-workspace size-4 md:size-7" viewBox="0 0 16 16">
  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
</svg>
                    </a>
                    </li>
                    
                    <li class="rtl:rotate-180">
                    <span class="text-gray-400 dark:text-gray-500">/</span>
            </li>
            
            <li>
            <span id='projek' class="block transition hover:text-gray-700 dark:hover:text-gray-100"> Projects </span>
            </li>
            `
            path1 = `
            <h1>halaman Projects</h1>
            `
        } else if (this.innerText === 'About') {
            content.innerText = ''
            path = `
        <li>
                <a href="app.html" class="block transition hover:text-gray-700 dark:hover:text-gray-100">
                    <span class="sr-only"> Home </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-file-earmark-person-fill size-4 md:size-7" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755"/>
</svg>
                </a>
            </li>

            <li class="rtl:rotate-180">
                <span class="text-gray-400 dark:text-gray-500">/</span>
            </li>

            <li>
                <span id='about' class="block transition hover:text-gray-700 dark:hover:text-gray-100"> About </span>
            </li>
        `
            path1 = `
        <h1 class=''>About</h1>
        `
        }
        nav2.innerHTML = path
        content.innerHTML = path1
    })

    //     let path2 = ''
    //     let path3 = ''
    //     const nav2 = document.querySelector('#nav2')
    //     const content = document.querySelector('#content')

    //     const spanProjek = document.querySelector('#nav2 li #projek')
    //     const spanAbout = document.querySelector('#nav2 li #about')
    //     if (spanProjek) {
    //         console.log(spanProjek)
    //         nav2.innerHTML = path
    //         content.innerHTML = path1
    //         spanProjek.addEventListener('click', function () {
    //             path2 = `
    //                 <li>
    //                 <a href="app.html" class="block transition hover:text-gray-700 dark:hover:text-gray-100">
    //                 <span class="sr-only"> Home </span>

    //                 <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24"
    //                 stroke="currentColor">
    //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    //                 d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    //                 </svg>
    //                 </a>
    //                 </li>

    //                 <li class="rtl:rotate-180">
    //                 <span class="text-gray-400 dark:text-gray-500">/</span>
    //         </li>

    //         <li>
    //         <span id='projek' class="block transition hover:text-gray-700 dark:hover:text-gray-100"> Projects </span>
    //         </li>
    //         `
    //             path3 = `
    //         <h1>halaman Projects</h1>
    //         `
    //             console.log('projek ada')
    //         })
    //     }
    //     if (spanAbout) {
    //         console.log(spanAbout)
    //         spanAbout.addEventListener('click', function () {
    //             path2 = `
    //     <li>
    //             <a href="app.html" class="block transition hover:text-gray-700 dark:hover:text-gray-100">
    //                 <span class="sr-only"> Home </span>

    //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
    //   <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755"/>
    // </svg>
    //             </a>
    //         </li>

    //         <li class="rtl:rotate-180">
    //             <span class="text-gray-400 dark:text-gray-500">/</span>
    //         </li>

    //         <li>
    //             <span id='about' class="block transition hover:text-gray-700 dark:hover:text-gray-100"> About </span>
    //         </li>
    //     `
    //             path3 = `
    //     <h1>FILE About</h1>
    //     `
    //             console.log('about ada')
    //         })
    //         nav2.innerHTML = path2
    //         content.innerHTML = path3
    //     }
}