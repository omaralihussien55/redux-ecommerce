import ph1 from '../img/ph1.jpg'
import ph2 from '../img/ph2.jpg'
import ph3 from '../img/ph3.jpg'
import ph4 from '../img/ph4.jpg'
import ph5 from '../img/ph5.jpg'
import ph6 from '../img/ph6.png'
import ph7 from '../img/ph7.png'
import ph8 from '../img/ph8.png'
import ph9 from '../img/ph9.jpg'
import ph11 from '../img/ph11.jpg'
import ph12 from '../img/ph12.jpg'
import ph13 from '../img/ph13.jpg'
import ph14 from '../img/ph14.jpg'
import ph16 from '../img/ph16.jpg'

export const data = [
    {id:1,qun:1,price:2000,title:"tesla 1",total:null,photo:[ph1],inCart:false,inFav:false,catogry:"tesla",model:"2021",info:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {id:2,qun:1,price:2600,title:"iphone 2",total:null,photo:[ph2],inCart:false,inFav:false,catogry:"iphone",model:"2022",info:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {id:3,qun:1,price:4800,title:"sumsung 3",total:null,photo:[ph3],inCart:false,inFav:false,catogry:"sumsung",model:"2021",info:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {id:4,qun:1,price:8000,title:"lenovo 4",total:null,photo:[ph4],inCart:false,inFav:false,catogry:"lenovo",model:"2022",info:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {id:5,qun:1,price:1300,title:"sumsung 5",total:null,photo:[ph5],inCart:false,inFav:false,catogry:"sumsung",model:"2022",info:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {id:6,qun:1,price:2900,title:"tesla 6",total:null,photo:[ph6],inCart:false,inFav:false,catogry:"tesla",model:"2022",info:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {id:7,qun:1,price:3400,title:"iphone 7",total:null,photo:[ph7],inCart:false,inFav:false,catogry:"iphone",model:"2021",info:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {id:8,qun:1,price:7100,title:"lenovo 8",total:null,photo:[ph8],inCart:false,inFav:false,catogry:"lenovo",model:"2022",info:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {id:9,qun:1,price:5200,title:"tesla 9",total:null,photo:[ph9],inCart:false,inFav:false,catogry:"tesla",model:"2022",info:"Some quick example text to build on the card title and make up the bulk of the card's content"},

]

export const gallry = [
    {id:1,photo:[ph11]},
    {id:2,photo:[ph12]},
    {id:3,photo:[ph13]},
    {id:4,photo:[ph14]},
    {id:5,photo:[ph16]},
]

localStorage.setItem("products",JSON.stringify(data))