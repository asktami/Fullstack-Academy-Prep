// ### Taco Cat Inc.

// You run an insanely profitable business making gourmet tacos for cats. Given an
// object that represents the inventory of your company, add a method
// 'currentInventory' to your object that returns the current value of your
// company's inventory.

// Then, add a sale method that takes an order object, returns the price of the
// order, updates the inventory of the purchased items, and adds the price of the
// order to the company's cash property.

// Heads up: This problem is a bit more involved than anything you'd see on an
// admissions assessment or interview. Besides being a fun challenge, it's
// intended to show how you can use objects and their methods to store and change
// state.


let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,








// YOUR CODE BELOW

  currentInventory: function() {
// always calculates inventory after any sales

    // 'currentInventory' to your object that returns the current value of your
    // company's inventory.

    let inventoryTotal = 0;

    for (let key in this){ 

      if(key !== 'cash') {
        let foodObj = this[key];

          for (let key in foodObj) {
            let foodItem = foodObj[key];
            inventoryTotal += foodItem.cost * foodItem.quantity;
          }
      }
    }
      return inventoryTotal;
    },

  sale: function(order) {
    let finalPrice = 0;
    
      // loop through all of the categories in the ORDER
        for (let category in order) {
    
        // the choices are the keys in the order object
          let choice = order[category];
    
        // add the cost of the choice to the final price
          finalPrice += this[category][choice].cost;    // THIS
    
        // also add the cost of the choice to the cash property
          this.cash += this[category][choice].cost;     // THIS
    
        // also subtract one from the quantity of the chosen item
          this[category][choice].quantity--;            // THIS
        }
    
      return finalPrice;
    }
};







// ****************************************************
// ALTERNATIVES USING ARRAYS
// ****************************************************

let tacoCatIncALT = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,


// ****************************************
// ALTERNATIVE for currentInventory:
// ALWAYS RETURNS original inventory of 1710
  currentInventory: function() {

  let inventoryTotal = 0; 

// make an array of the objects
  const ourInventory = [
    this.gourmetShell,
    this.gourmetFishFilling,
    this.gourmetVeggie,
    this.gourmetSeasoning,
  ];

  // loop thru this array
  for (let i = 0; i < ourInventory.length; i++) {
    let currentItem = ourInventory[i];

    // want cost and quantity
    let CostQtyValues = Object.values(currentItem);
    
    for (let j = 0; j < CostQtyValues.length; j++) {

    // use spreading to get Cost and quantity
    // array destructuring assignment
      let [cost, quantity] = CostQtyValues[j];
      let itemCost = cost * quantity;

      inventoryTotal += itemCost;
    }
  }

 return inventoryTotal;
  },


// ****************************************
// ATERNATIVE for Sale
  sale: function(order) {
  // qty is always 1

    let saleTotal = 0;

    let orderItems = Object.entries(order);

    for (let i = 0; i < orderItems.length; i++) {

    // use spreading to get itemCategory and itemName
    // array destructuring assignment
    let [itemCategory, itemName] = orderItems[i];
      
      let itemValues = this[itemCategory][itemName];

      if(itemValues.quantity > 1) {
        saleTotal += itemValues.cost;
        this[itemCategory][itemName].quantity -= 1;
      }
    }

    this.cash += saleTotal;
    return saleTotal;
  }
}


// TESTS
// do 1 test at a time
 tacoCatInc.currentInventory(); // => 1710

let order = {
  gourmetShell: 'hard treat shell',
  gourmetFishFilling: 'salmon'
};

 // tacoCatInc.sale(order); // => 7