const openPop = document.getElementById('openPop')
const submit = document.getElementById('btn')


openPop.addEventListener('click',function(){
    document.body.classList.add('popup-active')
})

submit.addEventListener('click',function(){
    
    getPlay(event)
    document.body.classList.remove('popup-active')
})

let filter = document.getElementById('filter')
filter.addEventListener('change',filterData)

let sort = document.getElementById('sort')
sort.addEventListener('click', sortData)
const Data = []
const container = document.getElementById('container')

function getPlay(event){

    event.preventDefault()
     
    let movieName = document.getElementById('movie-name').value
    let imgLink = document.getElementById('img-link').value
    let rating = document.getElementById('rating').value
    let category = document.getElementById('select').value
    let youtubeLink = document.getElementById('trailer-link').value
    let Actor = document.getElementById('Actors-Name').value
    let director = document.getElementById('Director-Name').value

    let object = {
        head1 : movieName,
        imgLink : imgLink,
        head2: rating,
        head3: category,
        link: youtubeLink,
        head4: Actor,
        head5: director,
     }

     Data.push(object)
     showData(Data)

    }

    function filterData(){
        let val = filter.value
        let filteredData = Data.filter((d)=>{
        return d.head3 === val
        })
        showData(filteredData)
    }

    function sortData(){
        let sortdata = Data.sort((a,b)=>{
            return a.head2 - b.head2
        })
        showData(sortdata)
    }


    function showData(array){
        container.innerHTML = null
        array.map((d)=>{
            let div = document.createElement('div')
            let h1 = document.createElement('h1')
            let h2 = document.createElement('h2')
            let h3 = document.createElement('h2')
            let h4 = document.createElement('h2')
            let h5 = document.createElement('h2')
            let imglink = document.createElement('img')
            
            let youtubelink = document.createElement('a')
        
        
            
            youtubelink.setAttribute('href',d.link,'target',"_blank")
            
            h1.textContent = d.head1
            h2.textContent = d.head2
            h3.textContent = d.head3
            h4.textContent = d.head4
            h5.textContent = d.head5
            imglink.setAttribute("src",d.imgLink)

            imglink.style.width = "150px"
            imglink.style.height = "150px"
        
            youtubelink.innerText = "Play Trailer"
            
            
        
            div.append(h1,imglink,h2,h3,youtubelink,h4,h5)
        
            container.append(div)
        
        
        
        
        
        
        
          
        })
    }


     
   