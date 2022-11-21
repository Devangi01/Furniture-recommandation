import "./styles.css";
import { useState } from "react";

function generateStarts(num) {
  let elementStr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      elementStr.push(
        <span class="fa fa-star" style={{ color: "red" }}></span>
      );
    } else {
      elementStr.push(<span class="fa fa-star"></span>);
    }
  }
  return <>{elementStr}</>;
}

var furniture = {
  Bedroom: [
    {
      name: "Use mirrors to give the illusion of added space.",
      image:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_1103/project%20prism%2Fcolor%20search%20archive%2F755e9bb6337739beeb60a785ee1c51aeb83fa249",
      description:
        "This popular design trick can totally work in your sleeping space, and is one of our favorite small bedroom ideas. Plus, a large and well-placed mirror will help filter extra light into your bedroom. A real win-win in our opinion",
      rating: "4"
    },
    {
      name: "Utilize below-the-bed storage",
      image:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_1100/at%2Fhouse%20tours%2F2019-12%2FLeslie%20S%2Fgirlsroom1",
      description:
        "There’s no better place to store extra belongings than below your bed. Since the bed is already taking up a lot of floor space, it just makes sense. Some options? Choose a bed with built-in storage, use wooden storage crates, design your own drawers or even use pretty baskets to corral clutter. ",
      rating: "3"
    },
    {
      name: "Get creative with foot-of-the-bed storage.",
      image:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_582/at%2Fhouse%20tours%2Farchive%2Fchicken%20cat%2F5081f64625d3cb9ee6c879b0cc9fca1bc6fd36fb",
      description:
        "Don’t limit yourself to plastic containers and closet storage cubes when there are so many types of storage available, particularly decorative pieces that you can leave out in plain view. Try an end-of-bed trunk or storage bench.",
      rating: "4"
    }
  ],
  Kitchen: [
    {
      name: "Storage Space Open Kitchen",
      image:
        "https://www.nobroker.in/blog/wp-content/uploads/2022/07/Storage-Space-Open-Kitchen-.jpg",
      description:
        "Storage is a critical aspect of every kitchen, and modern small kitchen ideas make the best use of the available space. Individuals who have a limited amount of room but need an attractive and practical kitchen might benefit from a one-wall kitchen. ‘ With a one-wall layout, you have the best of both worlds: efficiency and utility.",
      rating: "3"
    },
    {
      name: "Overhead Racks for Hanging Pots",
      image:
        "https://www.nobroker.in/blog/wp-content/uploads/2022/07/Overhead-Racks-For-Hanging-Pots.jpg",
      description:
        "It’s clear why more and more people are installing pot racks in their kitchens. They’re great for storing things since they provide you with more room. In addition to being visually appealing and useful, they have been made considerably more accessible. Keeping heavy pots and vessels in cupboards takes up a lot of counter space in kitchens designed for small spaces, which is already a problem in small kitchens. ",
      rating: "3"
    },
    {
      name: "Metallic Sheen Kitchen ",
      image:
        "https://www.nobroker.in/blog/wp-content/uploads/2022/07/Metallic-Sheen-Kitchen-.jpg",
      description:
        "For a limited space small modern kitchen design, the use of stainless steel provides the area with a very contemporary and trendy aspect. A sleek silvery sheen reflects the surrounding surroundings, making the area seem larger and more intriguing while adding dimension and depth to the small kitchen pop design.",
      rating: "4"
    }
  ],
  Storage: [
    {
      name: "Magazine Holders for Storing Veggies",
      image:
        "https://www.thespruce.com/thmb/RAH3OmyYvQN_nnXijRNyf9WCJP8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ftuytug-5c030aaa46e0fb0001cdfd69.jpeg",
      description:
        "Magazine holders are surprisingly versatile when it comes to home storage solutions. You can use them to store root vegetables in your cabinets or any other cool, dry place.",
      rating: "4"
    },
    {
      name: "Organize Your Water Bottles and Travel Mugs",
      image:
        "https://www.thespruce.com/thmb/mQiKgtMXTqDmGhptZUNWzlKccNo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PolishedHabitat-5921b4475f9b58f4c065cabb.jpg",
      description:
        "This storage idea may seem simple and obvious, but travel mugs and water bottles aren't the easiest things to organize. How often have you hunted through your cabinets looking for a travel coffee mug while on the way out the door? By labeling dishpans or shallow bins for smarter, more compact storage, you'll never waste time searching again.",
      rating: "3"
    },
    {
      name: "DIY Plastic Bag Dispenser",
      image:
        "https://www.thespruce.com/thmb/qK-IV2_0HY1XBl7GavMYYzHwppY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ertdr-5c030f8546e0fb00018ed6d9.jpeg",
      description:
        "The idea of repurposing an item rather than throwing it away is not a new concept, but when a good idea comes along, especially one so simple, it feels like a spark of genius. Save your empty tissue box to keep plastic bags organized and within easy reach.",
      rating: "4"
    }
  ]
};
var cities = Object.keys(furniture);

export default function App() {
  var [furnitureidea, setfurnitureidea] = useState("Bedroom");
  function onClickHandler(event) {
    var city = event.target.innerText;
    setfurnitureidea(city);
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
                cursor: "pointer",
                fontSize: "1.5rem",
                display: "inline-block",
                marginRight: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                backgroundColor:
                  furnitureidea === city ? "#d9f99d" : "transparent"
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
          {furniture[furnitureidea].map((furniture) => {
            return (
              <>
                <li
                  key={furniture.name}
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
                    {furniture.name}
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
                      alt={furniture.name}
                      src={furniture.image}
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
                      <p>{furniture.description}</p>
                      {generateStarts(furniture.rating)}
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
