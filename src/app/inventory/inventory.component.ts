import { Component } from '@angular/core';
import { Item } from '../../item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  inventory: Item[] = [
    {
      "id":1,
      "name":"Cheeseburger",
      "brand":"McDeez",
      "inStock":5,
      "price":4.00,
      "image": 'https://i.etsystatic.com/13941551/r/il/9fc277/4586578866/il_1588xN.4586578866_ejt8.jpg',
      "featured":false,
      "qty": 0,
      },
      // "rating": "*"
      {
        "id":2,
        "name":"Orange Soda",
        "brand":"Orange Soda",
        "inStock":15,
        "price": 1.0,
        "image": 'https://png.pngtree.com/png-clipart/20220213/original/pngtree-orange-soda-can-png-image_7266805.png',
        "featured":false,
        "qty": 0,
      },

    {
      "id":3,
      "name":"French Fries",
      "brand":"Burger Jawn",
      "inStock":10,
      "price":.50,
      "image": 'https://i.etsystatic.com/13941551/r/il/f38df7/4589642546/il_1588xN.4589642546_tqmp.jpg',
      "featured":false,
      "qty": 0,
    },

    {
      "id":4,
      "name":"Hamburger",
      "brand":"Mini King",
      "inStock":5,
      "price":3.00,
      "image": 'https://www.creativefabrica.com/wp-content/uploads/2023/06/11/Hand-drawn-burger-vector-illustration-Graphics-71845967-1.jpg',
      "featured":false,
      "qty": 0,
      },

    {
      "id":5,
      "name":"AA Battery",
      "brand":"Double AA",
      "inStock":3,
      "price": 2.0,
      "image": 'https://img.freepik.com/premium-photo/double-battery-isolated-white-background_698953-10668.jpg?w=2000',
      "featured":false,
      "qty": 0,
    },


    {
      "id":6,
      "name":"Cola Soda",
      "brand":"Other",
      "inStock":7,
      "price": 1.0,
      "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNMFJqqnCtzy_DJBJAEfPeYQ8HEEZ5OffLQ&usqp=CAU',
      "featured":false,
      "qty": 0,
    },


  ]


  //Functions
  decreaseQty(i: any){
    if(i.qty > 0){
      i.qty --;
    }
  }

  increaseQty(i: any){
    if(i.qty <= i.inStock){
        i.qty++;
    }
  }

  qtyCount(){
    let sum = 0;
    for(let x = 0; x < this.inventory.length; x++){
        sum += this.inventory[x].qty;
        console.log('kkkkk');
    }
    return sum;
  }



}
