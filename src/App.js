import "./styles.css";
import { useState } from "react";

function generateStarts(num) {
  let elementStr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      elementStr.push(
        <span class="fa fa-star" style={{ color: "orange" }}></span>
      );
    } else {
      elementStr.push(<span class="fa fa-star"></span>);
    }
  }
  return <>{elementStr}</>;
}

var foods = {
  Bedroom: [
    {
      name: "Khandavi",
      image:
        "https://www.gujarattourism.com/content/dam/gujrattourism/images/march/april/cuisine/khandvi/Khandvi.jpg",
      description:
        "Soft rolls made of gram flour and tempered with coconut, mustard seeds, and curry leaves, these melt-in-the-mouth snacks are extremely appetising. The yellow, bite-sized snack is also made in Maharashtra as Dahivadi and Suralichi Vadi.",
      rating: "4"
    },
    {
      name: "Khichu",
      image:
        "https://www.gujarattourism.com/content/gujrattourism/en/gujarati-cuisines/khichu/_jcr_content/root/responsivegrid/pagebanner.coreimg.jpeg/1594757315169/khichu-banner.jpeg",
      description:
        "A thick porridge-like mixture made from rice flour and seasoned with cumin seeds and green chilli, khichu is served with a splash of groundnut oil and cayenne pepper.The dough can also be used to make rice papads! ",
      rating: "3"
    },
    {
      name: "Dabeli",
      image:
        "https://www.gujarattourism.com/content/gujrattourism/en/gujarati-cuisines/dabeli/_jcr_content/root/responsivegrid/pagebanner.coreimg.jpeg/1594757321361/shutterstock-1111938869-min.jpeg",
      description:
        "This Kutchi cousin of the Mumbaiya vada pav is made by mixing mashed boiled potatoes with a special masala, and encasing the mixture in a ladi pav. The Kutchi Dabeli is garnished with pomegranate pearls and roasted peanuts.",
      rating: "4"
    }
  ],
  Kitchen: [
    {
      name: "Sandesh",
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Butterscotch_Ice_Cream_Sandesh_-_Rajarhat_-_North_24_Parganas_2013-06-15_0624_20170829124004.jpg",
      description:
        "this dish is made of khoya, a version of condensed milk and is heavenly in taste. This sweet is neither overly sweet thus allowing people with a non-sweet tooth to enjoy too.",
      rating: "3"
    },
    {
      name: "Shukto",
      image:
        "https://www.india.com/wp-content/uploads/2017/04/Vegetables_Curry_-_Kolkata_2011-03-10_1979.jpg",
      description:
        "Shukto is a vegetarian delicacy made from bitter gourd, plantains, potatoes and radishes, cooked in Bengali panch phorn or the signature five spices of Bengali cuisine. It’s basically a mixed vegetable preparation, the Bengali style.",
      rating: "3"
    },
    {
      name: "Luchi",
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Luchi(Puri),_Dum_Aloo_20170829121242.JPG",
      description:
        "A deep-fry delicacy, no Bengali household can ever complete a celebration without Luchis. Prepared with maida instead of the atta flour which is used to make chapattis, this delicacy looks like smaller sized, fluffy, deep-fried chapattis, with a golden glow.",
      rating: "4"
    }
  ],
  Storage: [
    {
      name: "Puran Poli",
      image:
        "https://www.holidify.com/blog/wp-content/uploads/2015/10/4906487062_16ab748874_z.jpg",
      description:
        "This delectable food item is a sweet version of the loving parantha. The stuffing is made from jaggery (gur), yellow gram (chana) dal, plain flour, cardamom powder and ghee (clarified butter)",
      rating: "4"
    },
    {
      name: "Misal Pav",
      image:
        "https://www.holidify.com/blog/wp-content/uploads/2015/11/Maharashtras_Misal_Pav.jpg",
      description:
        "It has a spicy and tangy lentil curry which is made with moth beans and is served with Pav bread. At times, it is eaten with yoghurt to lessen the spice. Although it is a breakfast food",
      rating: "3"
    },
    {
      name: "Ragda Pattice",
      image:
        "https://www.holidify.com/blog/wp-content/uploads/2015/11/Indian_cuisine-Ragda_contained_in_panipuri.jpg",
      description:
        "It is a yet another lip-smacking street food in Mumbai which is prepared by using curried dried peas and patties. These potato patties are dipped in the Ragda gravy and topped with chaat chutneys, finely chopped onions, tomatoes, crispy sev and cilantro.",
      rating: "4"
    }
  ]
};
var cities = Object.keys(foods);

export default function App() {
  var [foodCity, setFoodCity] = useState("Bedroom");
  function onClickHandler(event) {
    var city = event.target.innerText;
    setFoodCity(city);
  }
  return (
    <div className="App">
      <div
        className="container"
        style={{
          maxWidth: "600px",
          margin: "auto",
          textAlign: "left",
          fontSize: "1.5rem"
        }}
      >
        <h3 style={{}}>Furniture for the Home</h3>
        <hr
          style={{
            marginTop: "0.5rem",
            marginBottom: "2rem",
            height: "0.05rem",
            backgroundColor: "black"
          }}
        />
        {cities.map((city) => {
          return (
            <li
              style={{
                listStyle: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                display: "inline-block",
                marginRight: "0.5rem",
                padding: "0.5rem 1rem",
                border: "2px solid black",
                marginTop: "1rem",
                borderRadius: "0.5rem",
                backgroundColor: foodCity === city ? "#F8A802" : "transparent"
              }}
              key={city}
              onClick={onClickHandler}
            >
              {city}
            </li>
          );
        })}
        <ul
          style={{
            listStyle: "none",
            marginBlockStart: "0",
            marginBlockEnd: "0",
            paddingInlineStart: "0",
            marginTop: "2rem"
          }}
        >
          {foods[foodCity].map((food) => {
            return (
              <>
                <li
                  key={food.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-strt"
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      marginBlockStart: "0",
                      marginBlockEnd: "0"
                    }}
                  >
                    {food.name}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <img
                      alt={food.name}
                      src={food.image}
                      style={{
                        height: "150px",
                        width: "150px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        padding: "1rem"
                      }}
                    />
                    <div
                      style={{
                        textAlign: "justify",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        border: "2px solid black",
                        borderRadius: "0.5rem"
                      }}
                    >
                      <p>{food.description}</p>
                      {generateStarts(food.rating)}
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
