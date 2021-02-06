// $(() => {
//   const templateScript = $("#equipment-template").html();
//   const myTemplate = Handlebars.compile(templateScript);

//   const equipment = [
//     {
//       Category: "Kitchen",
//       ItemName: "Stove And Fuel"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Matches/Light/Firestarter"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Cook Pots"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Frying Pan"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Eating Utensils"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Cooking Utensils"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Bottle Opener",
//       FIELD3: " Can Opener"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Sharp Knife"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Plates/Bowls"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Mugs/Cups"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Cutting Board"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Cooler"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Water Bottles"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Camp Sink"
//     },
//     {
//       Category: "Kitchen",
//       ItemName: "Soap"
//     },
//     {
//       Category: "Tools",
//       ItemName: "Multi-Tool"
//     },
//     {
//       Category: "Tools",
//       ItemName: "Duct Tape"
//     },
//     {
//       Category: "Tools",
//       ItemName: "Extra Cord"
//     },
//     {
//       Category: "Tools",
//       ItemName: "Mallet/Hammer"
//     },
//     {
//       Category: "Tools",
//       ItemName: "Saw/Axe"
//     },
//     {
//       Category: "Clothing",
//       ItemName: "Moisture Wicking Shirts/Pants/Undergarments"
//     },
//     {
//       Category: "Clothing",
//       ItemName: "Long Sleeves"
//     },
//     {
//       Category: "Clothing",
//       ItemName: "Jacket"
//     },
//     {
//       Category: "Clothing",
//       ItemName: "Boots/Shoes"
//     },
//     {
//       Category: "Clothing",
//       ItemName: "Socks"
//     },
//     {
//       Category: "Clothing",
//       ItemName: "Sleepwear"
//     },
//     {
//       Category: "Hygiene",
//       ItemName: "Toilet Paper"
//     },
//     {
//       Category: "Hygiene",
//       ItemName: "Hand Sanitizer"
//     },
//     {
//       Category: "Hygiene",
//       ItemName: "Toothbrush/Toothpaste"
//     },
//     {
//       Category: "Hygiene",
//       ItemName: "Towels"
//     },
//     {
//       Category: "Hygiene",
//       ItemName: "First Aid Kit/Supplies"
//     },
//     {
//       Category: "Hygiene",
//       ItemName: "Sunscreen"
//     },
//     {
//       Category: "Hygiene",
//       ItemName: "Bug Spray"
//     },
//     {
//       Category: "Hygiene",
//       ItemName: "Lip Balm"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Firewood"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Cots"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Grill"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Portable Coffee/Tea Maker"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Solar/Portable Power"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Binoculars"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Rain Gear"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Snow Gear"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Gloves/Mittens"
//     },
//     {
//       Category: "Optional",
//       ItemName: "Warm Hat"
//     }
//   ];

// const EQUIPMENT_METHOD = {
//   handlerData: function(resJSON) {
//     const templateSource = $("#equipment-template").html(),
//       template = Handlebars.compile(templateSource),
//       equipmentHTML = template(resJSON);

//     $("#my-container").html(equipmentHTML);
//   },
//   loadEquipmentData: function() {
//     $.ajax({
//       url: "./data/equipment.json",
//       method: "get",
//       success: this.handlerData
//     });
//   }
// };

// $(document).ready(() => {
//   EQUIPMENT_METHOD.loadEquipmentData();
// });

//   // Get the text for the Handlebars template from the script element.
//   const templateText = $("#selectEquipmentTemplate").html();

//   // Compile the Handlebars template.
//   const selectEquipmentTemplate = Handlebars.compile(templateText);

//   // Evaluate the template with an array of equipment.
//   const html = selectEquipmentTemplate({ equipment: equipment });

//   // Take the HTML that was created with the Handlebars template and
//   // set the HTML in the myForm div element.
//   $("#myForm").html(html);
// });

//   const compHTML = myTemplate(equipment);

//   $(".equipment-placeholder").html(compHTML);
// });

jQuery.getJSON("../equipment.json", data => {
    const source = $("#equipment-template").html();
    const template = Handlebars.compile(source);
    $.each(data, function() {
      const context = this;
      const show = template(context);
      $(".list").append(show);
    });
  });
  