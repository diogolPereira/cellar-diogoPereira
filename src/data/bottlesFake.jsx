
let bottlesData = [
    {
        id:1,
        name:'Garrafa de Agua',
        price:'10',
    },
    {
        id:2,
        name:'Garrafa de Vinho Branco',
        price:'20',
    },
    {
        id:3,
        name:'Arroz',
        price:'1',
    },
    {
        id:4,
        name:'Bonecos',
        price:'4',
    },
]

export function getBottles(){
    return bottlesData;
}
export function getBottle(id){
    return bottlesData.find(bottle => bottle.id == id)
}
