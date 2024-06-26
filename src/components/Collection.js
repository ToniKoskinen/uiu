import { useState } from "react"

const Collection = () => {

    const [items, setItems] = useState([
        {//All except the first product are made by ChatGPT, I have added some details such as price and clicked
          id: "1",
          name: "Fanta 1.5l",
          manufacturer: "Sin(y)hoff",
          price: 2.79,
          clicked: false,
          showDesc: "",
          description: "Carbonated Water, Sugar, Acidifier: Citric Acid, Natural Orange Flavors, Preservative: Potassium Sorbate, Vitamin C, Color: Sunset Yellow*, Antioxidant: Calcium Disodium(EDTA). *This material may have a negative effect on activity and concentration in Children."
        
        },
        {
          id: "2",
          name: "Pi Lager",
          manufacturer: "Pi Brewing Co.",
          price: 2.89,
          clicked: false,
          description: "Pi Lager is an irrational but infinitely satisfying beer. Brewed with an infinite combination of malted barley, hops, and yeast, it's a never-ending delight for your taste buds."
        },
        {
          id: "3",
          name: "Theorem IPA",
          manufacturer: "Proof Brewing Co.",
          price: 3.79,
          clicked: false,
          description: "Theorem IPA is brewed using a complex formula of hops, malt, and yeast. It delivers a hoppy punch with a proof you can taste. Enjoy the mathematical precision of this refreshing brew!"
        },
        {
          id: "4",
          name: "Golden Ratio Pilsner",
          manufacturer: "Phi Breweries",
          price: 2.59,
          clicked: false,
          description: "Golden Ratio Pilsner is crafted using a precise balance of malt and hops that follows the golden ratio, resulting in a beer with divine proportions. Sip on perfection with every golden sip."
        },
        {
          id: "5",
          name: "Algebra Ale",
          manufacturer: "Variable Ventures",
          price: 2.65,
          clicked: false,
          description: "Algebra Ale is a variable concoction of malt, hops, and yeast. Its formula may change from batch to batch, but its deliciousness is always constant. Solve your thirst equation with Algebra Ale!"
        },
        {
          id: "6",
          name: "Gravity Stout",
          manufacturer: "PiSquared Brewing Co.",
          price: 2.19,
          clicked: false,
          description: "Gravity Stout is a bold brew with a gravitational pull that's out of this world. Brewed with the perfect balance of malt, hops, and the mathematical constant pi squared, it's the beer that defies gravity."
        },
        {
          id: "7",
          name: "Approximator's Lager",
          manufacturer: "Approksimaatioiden Arvostajat",
          price: 3.14,
          clicked: false,
          description: "Approximator's Lager is brewed by the Finnish Approximation Valuators community. With a blend of malt, hops, and an approximation of pi squared equals g, this lager will leave you with an approximation of pure joy."
        }
      ]);
    
    const listItems=items.map((item)=> 
        {return(
        <li class="collection-item avatar" style={{margin: "20px"}}>
              <i class="material-icons large square grey">image</i>
              <div class="left-align">
                    <h5><b>{item.name}</b></h5>
                    <p><b>Manufacturer: </b>{item.manufacturer}</p>
                    <p><b>Incredients: </b>{item.showDesc}<b>...show more</b></p>
              </div>

        </li>)})
    return (
        <div class="row">

            <ul class="collection">
                {listItems}
            </ul>
        </div>
        
    )
}
export default Collection