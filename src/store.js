import VapormaxFlyknit from '../src/Assets/vapuormax-flyknit.png'; 
import AdidasOzweego from '../src/Assets/adidas-ozweego.png'; 
import AirMax95 from '../src/Assets/airmax95.png'; 
import Vapormax2019 from '../src/Assets/vapormax2019.png'; 

class store {
    shoeList = [
        {
            id : 1,
            productName : 'Nike Air VaporMax 3',
            category : 'Men',
            size : '9',
            colour : 'Gry/Wht',
            status : 'ready',
            customerInitials : 'JH',
            image: VapormaxFlyknit
        },
        {
            id : 2,
            productName : 'adidas Originals OZWEEGO',
            category : 'Women',
            size : '4',
            colour : 'Black',
            status : 'ready',
            customerInitials : 'JD',
            image: AdidasOzweego,
        },
        {
            id : 3,
            productName : 'Nike Air Max 95 SE',
            category : 'Men',
            size : '10',
            colour : 'Blue',
            status : 'queue',
            customerInitials : 'GM',
            image: AirMax95,
        },
        {
            id : 4,
            productName : 'Nike Air VaporMax 2019',
            category : 'Junior',
            size : '3',
            colour : 'Black',
            status : 'oos',
            customerInitials : 'FP',
            image: Vapormax2019
        },
        {
            id : 5,
            productName : 'Nike Air VaporMax 3',
            category : 'Men',
            size : '9',
            colour : 'Gry/Wht',
            status : 'queue',
            customerInitials : 'AE',
            image: VapormaxFlyknit,
        },
        {
            id : 6,
            productName : 'adidas Originals Flux',
            category : 'Women',
            size : '5',
            colour : 'Blue',
            status : 'ready',
            customerInitials : 'PT',
            image: AdidasOzweego,
        },

        {
            id : 7,
            productName : 'Nike Air Max 95',
            category : 'Men',
            size : '11',
            colour : 'Red',
            status : 'otw',
            customerInitials : 'WD',
            image: AirMax95,
        },
        {

            id : 8,
            productName : 'Nike Air Max 98',
            category : 'Junior',
            size : '3',
            colour : 'Black',
            status : 'ready',
            customerInitials : 'HC',
            image: Vapormax2019,
        },
        {
            
            id : 9,
            productName : 'Nike Air VaporMax 1',
            category : 'Men',
            size : '11',
            colour : 'Gry',
            status : 'ready',
            customerInitials : 'SY',
            image: VapormaxFlyknit,
        },
        {
            id : 10,
            productName : 'adidas Originals ZX',
            category : 'Women',
            size : '5',
            colour : 'White',
            status : 'queue',
            customerInitials : 'JM',
            image: AdidasOzweego,
        },
        {
            id : 11,
            productName : 'Nike Air Max 97',
            category : 'Men',
            size : '8',
            colour : 'Red',
            status : 'ready',
            customerInitials : 'MB',
            image: AirMax95,
        },
        {
            id : 12,
            productName : 'Nike Air VaporMax 2018',
            category : 'Junior',
            size : '2',
            colour : 'Black',
            status : 'otw',
            customerInitials : 'OL',
            image: Vapormax2019,
        },
        ,
        {
            id : 13,
            productName : 'Nike AirMax 2017',
            category : 'Women',
            size : '6',
            colour : 'Red',
            status : 'queue',
            customerInitials : 'Pw',
            image: VapormaxFlyknit,
        },
    ]
}

export default new store()