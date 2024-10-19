const express = require("express");
const router = express.Router();
const product3 = require("../models/product3");

router.get("/name", (req, res) => {
  res.send("Hello Chowmein3!");
});

router.get("/save", (req, res) => {
  const product31 = new product3({
    title: "South Indian",
    food: [
      {
        tag: ["veg", "all time snack"],
        name: "Dosa",
        price: 45,
        description: "A dosa is a thin flat bread originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
        imageurl: "Dosa.webp",
      },
      {
        tag: ["veg", "healthy snack"],
        name: "Idli",
        price: 15,
        description: "Idli or idly are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka.",
        imageurl: "Idli.webp",
      },
      {
        tag: ["veg", "South’s special"],
        name: "Vada",
        price: 15,
        description:
          "Vada is a category of savory fried snacks from India. Different types of vadas can be described as fritters, cutlets, donuts, or dumplings. Alternative names for this food include wada, vade, vadai, wadeh, and bara ",
        imageurl: "mirchivada.jpg",
      },
      {
        tag: ["veg", "Healthy all time snack"],
        name: "Appam",
        price: 25,
        description:
          "Appam is a type of pancake, originating from South India, made with fermented rice batter and coconut milk, common in Kerala, Sri Lanka, and Tamil Nadu. It is most frequently eaten for breakfast or dinner. Plain appam or vella appam are bowl-shaped thin pancakes made from fermented rice flour.",
        imageurl: "Appam.webp",
      },
      {
        tag: ["veg", "kids special"],
        name: "Puttu",
        price: 40,
        description:
          "Puttu principally consists of coarsely ground rice, grated coconut, a little salt, and water. It is often spiced with cumin but may have other spices. The Sri Lankan variant is usually made with wheat flour or red rice flour without cumin, whereas the Bhatkal recipes have plain coconut or masala variants made with mutton or shrimp-flavored grated coconut. ",
        imageurl: "Puttu.webp",
      },
      {
        tag: ["veg", "healthy evening snack"],
        name: "Pongal",
        price: 30,
        description:
          "Pongal, or huggi, is a popular South Indian rice dish. In Tamil “pongal” means “to boil” or “bubbling up”. In Telugu and Kannada, pongali is a dish of rice mixed with boiled milk and sugar. Huggi is derived from the Old Kannada word Puggi meaning “bubbled up or ballooned”. ",
        imageurl: "Pongal.webp",
      },
      {
        tag: ["veg", "morning breakfast"],
        name: "Malabar Parota",
        price: 45,
        description:
          "Porottas are often available as street food and in restaurants across Kozhikode, Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana. In some places, it is also served at weddings, religious festivals, and feasts. ",
        imageurl: "Parotta.webp",
      },
      {
        tag: ["veg", "tasty + healthy"],
        name: "Pesarattu",
        price: 25,
        description:
          " Pesarattu, pesara attu, pesara dosa (mung bean dosa), or cheeldo is crepe-like bread, originating in Andhra Pradesh, India, that is similar to dosa. It is made with green gram (moong dal) batter, but, unlike dosa, it does not contain urad dal. Pesarattu is eaten as breakfast and as a snack in Andhra Pradesh ",
        imageurl: "Pesarattu.webp",
      },
    ],
  });
  product31
    .save()
    .then((result) => {
      res.send(result);
      console.log("Successful");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
