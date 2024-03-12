import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => item.isComplete,
  (item : WishItem) => !item.isComplete,
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Typescript requires us to specify the data type, but using 'any' = turns TS into JS = no requirement for specific data type
  //Using ': any' -> array of anything (e.g., string, boolean)
  //Name of property/variable : Type of property

  //Property
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Get a Hair Cut')
  ];

  //set default to all wish items
  listFilter : any = '0';

  //reset the text box to empty
  newWishText = '';

  title = 'my wishlist2';

  // //create another array to implement filter effect
  // visibleItems : WishItem[] = this.items;
  //using JS to fix the bug -> instant list update after add new wish and update isComplete
  get visibleItems() : WishItem[] {
    let value = this.listFilter;
    return this.items.filter(filters[this.listFilter])
  }

  //Methods:
  addWish(){
    //1. add wish to the items array
    this.items.push(new WishItem(this.newWishText));
    //2. clear textbox
    this.newWishText = '';
    // this.items.push(new WishItem(wish))
  }

  toggleItem(item : WishItem){
    item.isComplete =!item.isComplete;
    console.log(item)
  }
}



