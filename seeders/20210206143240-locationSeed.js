"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Locations", [
      {
        url: "https://www.nps.gov/abli/index.htm",
        parkname: "Abraham Lincoln Birthplace National Historical Park",
        address: "2995 Lincoln Farm Road Hodgenville 42748",
        description:
          "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln. His early life on Kentucky's frontier shaped his character and prepared him to lead the nation through Civil War. The country's first memorial to Lincoln, built with donations from young and old, enshrines the symbolic birthplace cabin.",
        weather_description:
          "There are four distinct seasons in Central Kentucky. However, temperature and weather conditions can vary widely within those seasons. Spring and Fall are generally pleasant with frequent rain showers. Summer is usually hot and humid. Winter is moderately cold with mixed precipitation.",
        state: "KY",
        parkCode: "abli",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/acad/index.htm",
        parkname: "Acadia National Park",
        address: "25 Visitor Center Road Bar Harbor 04609",
        description:
          "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 3.5 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
        weather_description:
          "Located on Mount Desert Island in Maine, Acadia experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C).",
        state: "ME",
        parkCode: "acad",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/adam/index.htm",
        parkname: "Adams National Historical Park",
        address: "1250 Hancock Street Quincy 02169",
        description:
          "From the sweet little farm at the foot of Penn’s Hill to the gentleman’s country estate at Peace field, Adams National Historical Park is the story of “heroes, statesman, philosophers … and learned women” whose ideas and actions helped to transform thirteen disparate colonies into one united nation.",
        weather_description:
          "Be prepared for hot, humid weather. The historic homes are not air conditioned. While the visitor center remains open all year, the historic homes are closed from November 1 through April 30.",
        state: "MA",
        parkCode: "adam",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/afam/index.htm",
        parkname: "African American Civil War Memorial",
        address: "1925 Vermont Avenue Northwest Washington 20001",
        description:
          "Over 200,000 African-American soldiers and sailors served in the U.S. Army and Navy during the Civil War. Their service helped to end the war and free over four million slaves. The African American Civil War Memorial honors their service and sacrifice.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "afam",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/afbg/index.htm",
        parkname: "African Burial Ground National Monument",
        address: "African Burial Ground National Monument New York 10007",
        description:
          "African Burial Ground is the oldest and largest known excavated burial ground in North America for both free and enslaved Africans. It protects the historic role slavery played in building New York",
        weather_description:
          "http://forecast.weather.gov/MapClick.php?CityName=New+York&state=NY&site=OKX&lat=40.7198&lon=-73.993#.Vqj8OvkrJlZ",
        state: "NY",
        parkCode: "afbg",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/agfo/index.htm",
        parkname: "Agate Fossil Beds National Monument",
        address: "301 River Road Harrison 69346",
        description:
          "During the 1890s, scientists rediscovered what the Lakota Sioux already knew—bones preserved in one of the world's most significant Miocene Epoch mammal sites. Yet, this place called 'Agate' is a landscape that reflects many influences—from early animals roaming the valleys and hills, to tribal nations calling the High Plains home, to explorers passing through or settling in the American West.",
        weather_description:
          "Summers can be very warm, high 90's to 100 with the possibility of thunderstorms late afternoons. Winter temperatures can dip as low as -20 with some snow and wind. Heaviest snows can be expected in late Spring.",
        state: "NE",
        parkCode: "agfo",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/alka/index.htm",
        parkname: "Ala Kahakai National Historic Trail",
        address: "Superintendent Kailua-Kona 96740",
        description:
          "Established in 2000 to preserve, protect and interpret traditional Native Hawaiian culture and natural resources, Ala Kahakai National Historic Trail is a 175 mile corridor encompassing a network of culturally and historically significant trails. This 'trail by the sea' traverses wahi pana (storied landscapes), ancient Hawaiian sites and over 200 ahupuaʻa (traditional land divisions). Connect now!",
        weather_description:
          "Island weather is unpredictable. Visitors should be prepared for rain and wear layers of clothing to ensure their comfort while exploring the park.",
        state: "HI",
        parkCode: "alka",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/alag/index.htm",
        parkname: "Alagnak Wild River",
        address: "1000 Silver St., Bldg. 603 King Salmon 99613",
        description:
          "The headwaters of Alagnak Wild River lie within the rugged Aleutian Range of neighboring Katmai National Park and Preserve. Meandering west towards Bristol Bay and the Bering Sea, the Alagnak traverses the beautiful Alaska Peninsula, providing an unparalleled opportunity to experience the unique wilderness, wildlife, and cultural heritage of southwest Alaska.",
        weather_description:
          "Located between the stormy north Pacific Ocean and the even stormier Bering Sea, the Alagnak Wild River is often a battleground between weather systems. When you visit, be prepared to encounter all types of weather.  On average, wet and cool conditions predominate in spring, summer, and fall. Winters are drier and colder.",
        state: "AK",
        parkCode: "alag",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/anch/index.htm",
        parkname: "Alaska Public Lands",
        address: "605 West 4th Avenue Anchorage 99501",
        description:
          "Alaska’s parks, forests, and refuges are rich and varied. The Anchorage Interagency Visitor Center helps visitors and residents to have meaningful, safe, enjoyable experiences on public lands, and encourages them to sustain the natural and cultural resources of Alaska. This center and three others statewide provide trip-planning, interpretation, and education for all ages.",
        weather_description:
          "Visitors center is located inside the Federal Building and weather conditions are seasonal conditions of the Anchorage area, outside the facility.",
        state: "AK",
        parkCode: "anch",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/alca/index.htm",
        parkname: "Alcatraz Island",
        address: "Alcatraz Island San Francisco Bay 94133",
        description:
          "Alcatraz reveals stories of American incarceration, justice, and our common humanity. This small island was once a fort, a military prison, and a maximum security federal penitentiary. In 1969, the Indians of All Tribes occupied Alcatraz for 19 months in the name of freedom and Native American civil rights. We invite you to explore Alcatraz's complex history and natural beauty.",
        weather_description:
          "The climate on Alcatraz is unpredictable and can change suddenly. Cold, foggy mornings may give way to sunny afternoons, which in turn can shift quickly back to more fog and blustery winds. The most pleasant weather usually occurs in spring and fall. Summers tend to be cool and foggy, winter is our rainy season. Temperatures on Alcatraz seldom rise above 75°F (24°C) or fall below 38°",
        state: "CA",
        parkCode: "alca",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/aleu/index.htm",
        parkname: "Aleutian Islands World War II National Historic Area",
        address: "Affiliated Areas, Alaska Regional Office Anchorage 99501",
        description:
          "During World War II the remote Aleutian Islands, home to the Unangax̂ (Aleut) people for over 8,000 years, became a fiercely contested battleground in the Pacific. This thousand-mile-long archipelago saw invasion by Japanese forces, the occupation of two islands; a mass relocation of Unangax̂ civilians; a 15-month air war; and one of the deadliest battles in the Pacific Theater.",
        weather_description:
          "The Aleutian Islands are known for unpredictable and stormy weather. Rain, fog, and wind are common. Dress warmly and carry rain gear even in summer. Summer temperatures range from 45 to 65 degrees F. Early summer and fall often have clear sunny days with spectacular views of the surrounding volcanoes. See forecast: https://forecast.weather.gov/MapClick.php?lon=-166.52406692504883&lat=53.91748321582622#.X0aTYsi6OUk",
        state: "AK",
        parkCode: "aleu",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/alfl/index.htm",
        parkname: "Alibates Flint Quarries National Monument",
        address: "37084 Alibates Rd. Potter County 79036",
        description:
          "13,000 years ago, this site was well-known by mammoth hunters as a source of flint for tools. Centuries passed but the colorful flint never lost its value and usefulness in the Texas Panhandle. Gain a sense of how integral this site was to the survival, commerce and culture of the High Plains. Visit Alibates Flint Quarries to see the many colors of the beautiful Alibates Flint.",
        weather_description:
          "The Texas Panhandle experiences a wide variety of weather conditions throughout the year. Winters are cold and windy, and summers are hot and dry. It is usually a good idea to bring a jacket with you if you are planning on hiking to the quarries with a ranger because the mesa gets very windy, even in the summer.",
        state: "TX",
        parkCode: "alfl",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/alpo/index.htm",
        parkname: "Allegheny Portage Railroad National Historic Site",
        address: "110 Federal Park Road Gallitzin 16641",
        description:
          "The first railroad to circumvent the Allegheny Mountains, the Allegheny Portage Railroad was the finishing piece of the Pennsylvania Mainline Canal. 'The Portage,' opened in 1834, marking the first time that there was one, direct route between Philadelphia and Pittsburgh. All things to all people, it served merchants, passengers, slaves in pursuit of freedom, and soldiers from the Mexican War.",
        weather_description:
          "The park is located in Cambria County, PA, and is at the summit of the Allegheny Mountains. Therefore, the park often takes on winter extremes. If planning on traveling from a long distance, please contact the park beforehand to ensure that the facilities are open. Please consult weather forecasts to ensure conditions are safe to travel in. Spring, summer, and fall are generally uneventful, but severe thunderstorms can occur.",
        state: "PA",
        parkCode: "alpo",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/amme/index.htm",
        parkname: "American Memorial Park",
        address: "Beach Road Saipan 96950",
        description:
          "American Memorial Park honors the American and Marianas people who gave their lives during the Marianas Campaign of World War II. At the park, memorials stand in tribute to the courage and sacrifice of the US Servicemen and Chamorro and Carolinian civilians who were killed in the battles between the United States and Japan that took place on Saipan, Tinian, and the Philippine Sea in 1944.",
        weather_description:
          "The temperature varies from 75°F to 88°F and is rarely below 73°F or above 90°F.The climate is tropical, hot and humid throughout the year, with a relatively cool and dry season from December to June, and a warmer and rainy season from July to November. The temperatures are stable throughout the year.",
        state: "MP",
        parkCode: "amme",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/amis/index.htm",
        parkname: "Amistad National Recreation Area",
        address: "10477 Highway 90 West Del Rio 78840",
        description:
          "An oasis in the desert, Amistad National Recreation Area consists of the US portion of the International Amistad Reservoir. Amistad, whose name comes from the Spanish word meaning friendship, is best known for excellent water-based recreation, camping, hiking, rock art viewing, and its rich cultural history. Amistad is also home to a wide variety of plant and animal life above and below the water.",
        weather_description:
          "Weather in Southwest Texas can change in a matter of minutes. It is best to check the local weather report. Amistad National Recreation Area usually has hot summers and mild winters. For more information, please visit our Weather page at https://www.nps.gov/amis/planyourvisit/weather.htm.",
        state: "TX",
        parkCode: "amis",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/anac/index.htm",
        parkname: "Anacostia Park",
        address: "1900 Anacostia Drive, S.E. Washington 20020",
        description:
          "Welcome to Anacostia Park, your neighborhood national park in the heart of Washington, DC! Enjoy exercise along the river trail or relax by the water, Anacostia Park is a breath of fresh air and a space to unwind amid a bustling city.",
        weather_description:
          "Spring brings mild temperatures and a light breeze along with springtime flower blooms. Summer can be hot and humid. Fall cools down and changing of the seasons brings changing of the colors in leaves. Winter gets cold and temperatures may drop below freezing.",
        state: "DC",
        parkCode: "anac",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/ande/index.htm",
        parkname: "Andersonville National Historic Site",
        address: "Andersonville National Cemetery Andersonville 31711",
        description:
          "The Camp Sumter military prison at Andersonville was one of the largest Confederate military prisons during the Civil War. During the 14 months the prison existed, more than 45,000 Union soldiers were confined here. Of these, almost 13,000 died here. Today, Andersonville National Historic Site is a memorial to all American prisoners of war throughout the nation's history.",
        weather_description:
          "Summer temperatures reach highs in the 80s-90s and high humidity. Winter temperatures tend to be in the 40s and below. Snow can occur but is rare. Average annual precipitation is 46.24 inches and is fairly evenly distributed throughout the year. The National Prisoner of War Museum is maintained at a cool temperature to help preserve artifacts; dressing in layers is recommended.",
        state: "GA",
        parkCode: "ande",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/anjo/index.htm",
        parkname: "Andrew Johnson National Historic Site",
        address: "Andrew Johnson NHS Greeneville 37743",
        description:
          "Andrew Johnson's complex presidency (1865-69) illustrates the Constitution at work following the Civil War. As the President and Congress disagreed on Reconstruction methods, the Constitution served as their guide on balance of powers, vetoes, and impeachment. In the end, it evolved as a living document with pivotal amendments on freedom, citizenship, and voting rights - topics still vital today.",
        weather_description:
          "There are four distinct seasons in East Tennessee, but temperature and weather conditions can vary widely within those seasons. Spring and Fall are generally pleasant with frequent rain showers. Summer and Winter ranges can be extreme. The President's Homestead is not climate controlled and may be closed at times during excessive highs or lows in the summer and winter.",
        state: "TN",
        parkCode: "anjo",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/ania/index.htm",
        parkname: "Aniakchak National Monument & Preserve",
        address: "1000 Silver St., Bldg. 603 KIng Salmon 99613",
        description:
          "Given its remote location and challenging weather conditions, Aniakchak is one of the most wild and least visited places in the National Park System. This landscape is a vibrant reminder of Alaska's location in the volcanically active 'Ring of Fire,' as it is home to an impressive six mile (10 km) wide, 2,500 ft (762 m) deep caldera formed during a massive volcanic eruption 3,500 years ago.",
        weather_description:
          "When you visit, be prepared to encounter all types of weather. On average, wet and cool conditions predominate in spring, summer, and fall. Strong winds can delay the departure and arrival of boats and floatplanes.",
        state: "AK",
        parkCode: "ania",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/anti/index.htm",
        parkname: "Antietam National Battlefield",
        address: "5831 Dunker Church Rd. Sharpsburg 21782",
        description:
          "23,000 soldiers were killed, wounded or missing after twelve hours of savage combat on September 17, 1862. The Battle of Antietam ended the Confederate Army of Northern Virginia's first invasion into the North and led Abraham Lincoln to issue the preliminary Emancipation Proclamation.",
        weather_description:
          "The weather is fairly mild. Summers can be very warm and humid and winters cold and snowy. We have four distinct seasons with the fall and spring being the best times to visit the battlefield.",
        state: "MD",
        parkCode: "anti",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/apis/index.htm",
        parkname: "Apostle Islands National Lakeshore",
        address: "415 Washington Avenue Bayfield 54814",
        description:
          "Imagine that moment, being in that perfect spot as the sun rises, and everything comes into focus. A rocky shoreline suddenly reflects the world around you. Waiting for you among the water, land, forests, and history is that moment. How will the islands inspire you?",
        weather_description:
          "Lake Superior is renowned for its cold temperatures, rough seas, fog, and sudden squalls. Boaters and paddlers should monitor marine weather forecasts and be constantly alert to changing conditions. Average daytime high temperatures range from 60 degrees Fahrenheit in May, to the upper 80s in mid-summer, to the mid-60s in September. Average lows vary from 40 degrees in May, to the upper 50s in mid-summer, to 50 degrees in September. Average water temperatures in May and June are only in the 40s.",
        state: "WI",
        parkCode: "apis",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/appa/index.htm",
        parkname: "Appalachian National Scenic Trail",
        address: "Appalachian Trail Park Office Harpers Ferry 25425",
        description:
          "The Appalachian Trail is a 2,180+ mile long public footpath that traverses the scenic, wooded, pastoral, wild, and culturally resonant lands of the Appalachian Mountains. Conceived in 1921, built by private citizens, and completed in 1937, today the trail is managed by the National Park Service, US Forest Service, Appalachian Trail Conservancy, numerous state agencies and thousands of volunteers.",
        weather_description:
          "It is your responsibility to be prepared for all weather conditions, including extreme and unexpected weather changes year-round. As the trail runs from Georgia to Maine there will be different weather conditions depending on your location. For weather along specific sections of the trail and at specific shelters, please refer to: http://www.atweather.org/",
        state: "CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV",
        parkCode: "appa",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/apco/index.htm",
        parkname: "Appomattox Court House National Historical Park",
        address:
          "Appomattox Court House National Historical Park Appomattox 24522",
        description:
          "On April 9, 1865, the surrender of the Army of Northern Virginia in the McLean House in the village of Appomattox Court House, Virginia signaled the end of the nation's largest war. Two important questions about its future were answered. Could the nation survive a civil war intact, and would that nation exist without slavery? The answer to both was yes and a new nation was born.",
        weather_description:
          "The park may close due to emergency weather conditions (typically snow or ice). For updated information about possible closure or altered hours due to weather, please call 434-352-8987 ext. 245.",
        state: "VA",
        parkCode: "apco",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/arch/index.htm",
        parkname: "Arches National Park",
        address: "5 Miles north of Moab, Utah, on US 191 Moab 84532",
        description:
          "Visit Arches to discover a landscape of contrasting colors, land forms and textures unlike any other in the world. The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.",
        weather_description:
          "Arches is part of the Colorado Plateau, a 'high desert' region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day. The temperate (and most popular) seasons are spring (April-May) and fall (mid-September-October), when daytime highs average 60 to 80 F and lows average 30 to 50 F. Summer temperatures often exceed 100 F, making strenuous exercise difficult. Winters are cold, with highs averaging 30 to 50 F, and lows averaging 0 to 20 F.",
        state: "UT",
        parkCode: "arch",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/arpo/index.htm",
        parkname: "Arkansas Post National Memorial",
        address: "1741 Old Post Road Gillett 72055",
        description:
          "Located at the confluence of two rivers, Arkansas Post has served as a gathering place for many cultures throughout human history - it represents cultural cooperation, conflict, synthesis, and diversity.",
        weather_description:
          "Arkansas shares the same climate classification as the rest of the southeastern United States: humid subtropical. This type of climate features relatively mild winters and hot, steamy summers.",
        state: "AR",
        parkCode: "arpo",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/arho/index.htm",
        parkname: "Arlington House, The Robert E. Lee Memorial",
        address: "Arlington House, The Robert E. Lee Memorial Arlington 22211",
        description:
          "Arlington House is the nation’s memorial to Robert E. Lee. It honors him for specific reasons, including his role in promoting peace and reunion after the Civil War. In a larger sense it exists as a place of study and contemplation of the meaning of some of the most difficult aspects of American History: military service; sacrifice; citizenship; duty; loyalty; slavery and freedom.",
        weather_description:
          "Summers on the parkway are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit and scattered afternoon thunderstorms. Please carry water while participating in physical activity and be prepared to take shelter from lightning. Winters on the parkway are generally cold, with nighttime lows frequently near freezing and occasional snowfall. Please be alert for snowplows and icy spots on roadways. Weather during spring and fall is generally moderate, but can change quickly.",
        state: "VA",
        parkCode: "arho",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/asis/index.htm",
        parkname: "Assateague Island National Seashore",
        address: "7206 National Seashore Lane Berlin 21811",
        description:
          "Want to live on the edge? Visit a place recreated each day by ocean wind and waves. Life on Assateague Island has adapted to an existence on the move. Explore sandy beaches, salt marshes, maritime forests and coastal bays. Rest, relax, recreate and enjoy some time on the edge of the continent.",
        weather_description:
          "Spring: Often windy and cool with lows in the 40's and highs in the 60's. Summer: Hot and humid with lows in the 60's and highs in the 80's. Fall: Warm with lows in the 50's and highs in the 70's. Winter: Damp cold and often windy. Lows in the 20's, highs in the 40's.",
        state: "MD,VA",
        parkCode: "asis",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/azru/index.htm",
        parkname: "Aztec Ruins National Monument",
        address: "725 Ruins Road Aztec 87410",
        description:
          "Pueblo people describe this site as part of their migration journey. Today you can follow their ancient passageways to a distant time. Explore a 900-year old ancestral Pueblo Great House of over 400 masonry rooms. Look up and see original timbers holding up the roof. Search for the fingerprints of ancient workers in the mortar. Listen for an echo of ritual drums in the reconstructed Great Kiva.",
        weather_description:
          "Summer High temperatures range between 80°F and 99°F degrees with a few days over 100°F. Afternoon thunderstorms usually cool things down in late July and August. Fall Usually pleasant, with mild days and crisp nights. Winter Daytime temperatures range between 20°F and 50°F with cold nights that can reach 0°F. Snow is periodic, but accumulations are typically only 1-2 inches. Spring Weather is especially unpredictable: it can be windy, cold, and wet, or still, warm, and dry.",
        state: "NM",
        parkCode: "azru",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/badl/index.htm",
        parkname: "Badlands National Park",
        address: "25216 Ben Reifel Road Interior 57750",
        description:
          "The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient horses and rhinos once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.",
        weather_description:
          "The Badlands weather is variable and unpredictable with temperature extremes ranging from 116° F to -40° F. Summers are hot and dry with occasional violent thunderstorms. Hailstorms and occasional tornadoes can descend on the Badlands with sudden fury. Winters are typically cold with 12 to 24 inches of total snowfall.",
        state: "SD",
        parkCode: "badl",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/bawa/index.htm",
        parkname: "Baltimore-Washington Parkway",
        address: "Baltimore Washington Parkway Greenbelt 20770",
        description:
          "This 29-mile highway connects Baltimore, MD and Washington, D.C. The parkway has carried visitors to and from the capital city since 1954.",
        weather_description:
          "The Washington, D.C. area has a four-season Mid-Atlantic climate. Summertime is warm and humid, while winter can be cold and snowy. Spring: During these months of transition, the weather can alternate from warm, humid air coming from the south to cold, dry air coming from the northwest. Be prepared for changing conditions. Summer: The warmest months are June, July, and August, with average highs in the 80s (~31 ?) combined with high humidity. Temperatures often climb into the 90s (~34?).",
        state: "MD",
        parkCode: "bawa",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/band/index.htm",
        parkname: "Bandelier National Monument",
        address: "Bandelier National Monument Los Alamos 87544",
        description:
          "Bandelier National Monument protects over 33,000 acres of rugged but beautiful canyon and mesa country as well as evidence of a human presence here going back over 11,000 years. Petroglyphs, dwellings carved into the soft rock cliffs, and standing masonry walls pay tribute to the early days of a culture that still survives in the surrounding communities.",
        weather_description:
          "Spring daytime temperatures in the 70's can be followed by a snow storm with wet heavy snow and daytime temperatures in the 40's. Summer s dry with June usually being the hottest month of the year. Days in July, August and September often end with thunderstorms that can drop heavy localized rain and are often accompanied by lightning. Autumn weather is usually sunny with turquoise blue skies and warm (but not hot) days and cool nights. Winter average snowfall 25'. Snow and ice can close trails and roads.",
        state: "NM",
        parkCode: "band",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/bepa/index.htm",
        parkname: "Belmont-Paul Women's Equality National Monument",
        address: "144 Constitution Ave NE Washington 20002",
        description:
          "Home to the National Woman's Party for more than 90 years, this was the epicenter of the struggle for women's rights. From this house in the shadow of the U.S. Capitol and Supreme Court, Alice Paul and the NWP developed innovative strategies and tactics to advocate for the Equal Rights Amendment and equality for women. President Barack Obama designated the national monument on April 12, 2016.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "bepa",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/beol/index.htm",
        parkname: "Bent's Old Fort National Historic Site",
        address: "35110 State Highway 194 E. La Junta 81050",
        description:
          "Bent's Old Fort National Historic Site features a reconstructed 1840s adobe fur trading post on the mountain branch of the Santa Fe Trail where traders, trappers, travelers, and the Cheyenne and Arapaho tribes came together in peaceful terms for trade. Today, living historians recreate the sights, sounds, and smells of the past with guided tours, demonstrations and special events.",
        weather_description:
          "Summer temperatures are are often in the high 90s and low 100s. Weather is generally fair in the fall and spring. Winter temperatures can be below freezing. Most of the fort is unheated and does not have modern cooling systems, so dress accordingly.",
        state: "CO",
        parkCode: "beol",
        createdAt: "2021-02-06T13:28:36.480",
        updatedAt: "2021-02-06T13:28:36.480",
      },
      {
        url: "https://www.nps.gov/bela/index.htm",
        parkname: "Bering Land Bridge National Preserve",
        address: "214 Front St. Nome 99762",
        description:
          "Bering Land Bridge National Preserve lies at the continental crossroads that greatly influenced the distribution of life in the Western Hemisphere during the Pleistocene Epoch. It is a vital landscape for indigenous communities who depend on the land just as their ancestors did for many generations. It is a wild and ecologically healthy landscape unlike any other.",
        weather_description:
          "Weather in the Seward Peninsula is generally characterized by long freezing winters and short, cool summers. Coastal areas typically have mild weather, while the interior has greater seasonal variation in temperature and precipitation.",
        state: "AK",
        parkCode: "bela",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/bibe/index.htm",
        parkname: "Big Bend National Park",
        address: "1 Panther Junction Big Bend National Park 79834",
        description:
          "There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend...",
        weather_description:
          "Big Bend is a desert park, so be prepared for extreme conditions. SPRING: From February through April the park abounds with pleasant and comfortable temperatures. SUMMER: May through September is very hot. Temperatures exceed 100 degrees in the lower elevations by late morning, and often exceed 110 along the Rio Grande. Afternoon thunderstorms can be a welcome respite. WINTER: October through January temperatures are cooler; the weather can quickly turn cold at any time during these months.",
        state: "TX",
        parkCode: "bibe",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/bicy/index.htm",
        parkname: "Big Cypress National Preserve",
        address: "33100 Tamiami Trail East Ochopee 34141",
        description:
          "The freshwaters of the Big Cypress Swamp, essential to the health of the neighboring Everglades, support the rich marine estuaries along Florida's southwest coast. Protecting over 729,000 acres of this vast swamp, Big Cypress National Preserve contains a mixture of tropical and temperate plant communities that are home to a diversity of wildlife, including the elusive Florida panther.",
        weather_description:
          "Big Cypress National Preserve experiences two predominant seasons- wet and dry. RAINY SEASON (May through October) While visiting during this season you may find daily afternoon thunderstorms, high humidity, temperatures in the mid - to - high 80s and a multitude of mosquitoes. DRY SEASON (November through April) Falling water levels within the Big Cypress make this a pleasant time to hike, camp, and watch wildlife. For more information visit http://www.nps.gov/bicy/planyourvisit/weather.htm",
        state: "FL",
        parkCode: "bicy",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/biho/index.htm",
        parkname: "Big Hole National Battlefield",
        address: "16425 Highway 43 West Wisdom 59761",
        description:
          "On August 9, 1877 gun shots shattered a chilly dawn on a sleeping camp of Nez Perce. By the time the smoke cleared on August 10, almost 90 Nez Perce were dead along with 31 soldiers and volunteers. Big Hole National Battlefield was created to honor all who were there.",
        weather_description:
          "This climatic region is typified by large seasonal temperature differences, with warm to hot (and often humid) summers and cold (sometimes severely cold) winters. Wisdom has a humid continental climate.",
        state: "MT",
        parkCode: "biho",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/biso/index.htm",
        parkname: "Big South Fork National River & Recreation Area",
        address: "4564 Leatherwood Road Oneida 37841",
        description:
          "Encompassing 125,000 acres of the Cumberland Plateau, Big South Fork National River and Recreation Area protects the free-flowing Big South Fork of the Cumberland River and its tributaries. The area boasts miles of scenic gorges and sandstone bluffs, is rich with natural and historic features and has been developed to provide visitors with a wide range of outdoor recreational activities.",
        weather_description:
          "The weather along the Cumberland Plateau can be best described as unpredictable. Each season brings its own weather patterns. Summers are generally hot and humid, with high temperatures sometimes eclipsing 90 degrees. The low temperatures in winter often dip below freezing. Spring sees the most amount of precipitation, but rainfall can occur in various amounts throughout the year.",
        state: "KY,TN",
        parkCode: "biso",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/bith/index.htm",
        parkname: "Big Thicket National Preserve",
        address: "6102 FM 420 Kountze 77625",
        description:
          "Life of all types abounds in the Big Thicket. This national preserve protects the incredible diversity of life found where multiple habitats converge in southeast Texas. Hiking trails and waterways meander through nine different ecosystems, from longleaf pine forests to cypress-lined bayous. It is a place of discovery, a place to wander and explore, a place to marvel at the richness of nature.",
        weather_description:
          "Southeast Texas is generally very hot and humid during late spring and summer. Fall brings comfortable temperatures. Winters are mild. Snow and subfreezing temperatures are uncommon. The Big Thicket region averages 55 inches of rainfall per year. Occasional tropical storms and hurricanes from the Gulf of Mexico bring powerful wind, rain, and flooding to the region. Hurricane season lasts from June 1 to November 30, with peak activity typically in September.",
        state: "TX",
        parkCode: "bith",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/bica/index.htm",
        parkname: "Bighorn Canyon National Recreation Area",
        address:
          "Bighorn Canyon National Recreation Area South District Visitor Center Lovell 82431",
        description:
          "The vast, wild landscape of Bighorn Canyon National Recreation Area offers visitors unparalleled opportunities to immerse themselves in the natural world, and experience the wonders of this extraordinary place. With over 120,000 acres, one can find an astounding diversity in ecosystems, wildlife, and more than 10,000 years of human history to explore.",
        weather_description:
          "North District: Semi-arid, receiving 18 to 20 inches of rain annually. South District: High-desert, receiving 6 to 10 inches of rain annually. Summer temperatures: Highs in the 80s (F) and 90s (F), lows in the 50s (F) and 60s (F). Summer temperatures can peak over 100 degrees. Winter temperatures: Range in the 20s and 30s with low temperatures averaging the 10s (F) and 20s (F). During the winter the thermometer can drop below 0 (F) with extreme wind chill factors.",
        state: "MT,WY",
        parkCode: "bica",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/bicr/index.htm",
        parkname: "Birmingham Civil Rights National Monument",
        address: "1510 5th Ave N Birmingham 35203",
        description:
          "In 1963, images of snarling police dogs unleashed against non-violent protesters and of children being sprayed with high-pressure hoses appeared in print and television news around the world. These dramatic scenes of violent police aggression against civil rights protesters in Birmingham, Alabama were vivid examples of segregation and racial injustice in America.",
        weather_description: "No weather info provided",
        state: "AL",
        parkCode: "bicr",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/bisc/index.htm",
        parkname: "Biscayne National Park",
        address: "9700 SW 328th Street Homestead 33033",
        description:
          "Within sight of downtown Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Here too is evidence of 10,000 years of human history, from pirates and shipwrecks to pineapple farmers and presidents. Outdoors enthusiasts can boat, snorkel, camp, watch wildlife…or simply relax in a rocking chair gazing out over the bay.",
        weather_description:
          "The park is situated in a subtropical climate, which ensures sunshine year-round. Winters are normally dry and mild, with occasional fronts bringing wind and little rain. Summer brings hot and humid weather with scattered thunderstorms in the afternoons. The average temperature in January is 68 degrees Fahrenheit and 82 in July. The average rainfall for the area is 2.17 inches in January and 3.95 inches in July. June to November is hurricane season.",
        state: "FL",
        parkCode: "bisc",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/blca/index.htm",
        parkname: "Black Canyon Of The Gunnison National Park",
        address: "South Rim Visitor Center Montrose 81401",
        description:
          "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.",
        weather_description:
          "Today's Weather: http://www.weather.com/weather/today/l/NPBLCA:13:US CLIMATE Weather can vary greatly throughout the day. Summer daytime temperatures range between 55 to 90F (13 to 32C), nights 45 to 60F (7 to 16C). Winter daytime temperatures range between 15 to 40F (-9 to 4C), nights 10 to 20F (-12 to -6C). Afternoon thunderstorms are common during the summer. Snow accumulation varies greatly year to year. Layered clothing appropriate for the season is recommended.",
        state: "CO",
        parkCode: "blca",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/blrv/index.htm",
        parkname: "Blackstone River Valley National Historical Park",
        address: "282 North Main Street Providence 02903",
        description:
          "The Blackstone River powered America's entry into the Age of Industry. The success of Samuel Slater's cotton spinning mill in Pawtucket, RI touched off a chain reaction that changed how people worked and where they lived, and continues to reverberate across the nation to this day. Come visit and see how this revolution transformed the landscape of the Blackstone Valley and then the United States.",
        weather_description:
          "Summer temperatures range from 56-83F. Fall temperatures range from 30-70F. Winter temperatures range from 20-45F. Spring temperatures range from 30-70F.",
        state: "RI,MA",
        parkCode: "blrv",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/blri/index.htm",
        parkname: "Blue Ridge Parkway",
        address: "Milepost 384 Asheville 28803",
        description:
          "A Blue Ridge Parkway experience is unlike any other: a slow-paced and relaxing drive revealing stunning long-range vistas and close-up views of the rugged mountains and pastoral landscapes of the Appalachian Highlands. The Parkway meanders for 469 miles, protecting a diversity of plants and animals, and providing opportunities for enjoying all that makes this region of the country so special.",
        weather_description:
          "The weather on the parkway can vary widely along its 469-mile route. Precipitation is possible any time of the year. Winter can be cold and snowy, especially at the higher elevations. Spring and fall can have large temperature swings, from near freezing to over 80 degrees Fahrenheit. Summers are hot in the lower elevations, but the highest elevations remain cooler. Summertime thunderstorms are common, so be prepared for weather changes.",
        state: "NC,VA",
        parkCode: "blri",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/blue/index.htm",
        parkname: "Bluestone National Scenic River",
        address: "3405 Pipestem Drive Pipestem 25979",
        description:
          "The Bluestone River and the rugged and ancient gorge it has carved is a richly diverse and scenic area of the southern Appalachians. Bluestone National Scenic River is preserved as a living landscape that provides an unspoiled experience for visitors and a haven for a variety of plants and animals. The park protects a 10.5-mile section of the Bluestone River in southern West Virginia.",
        weather_description:
          "Summer: Temperatures range from low to mid 60's at night to middle to upper 80's during the daytime hours. Winter: Temperatures average from the mid 20's to the mid 40's. Snowfall amount varies, but averages 5' per month Dec. - March. Spring and Fall: temperatures and rainfall variable. Peak fall foliage is usually mid-October.",
        state: "WV",
        parkCode: "blue",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/bowa/index.htm",
        parkname: "Booker T Washington National Monument",
        address: "12130 Booker T. Washington Highway Hardy 24101",
        description:
          "Booker T. Washington was born a slave in April 1856 on the 207-acre farm of James Burroughs. After the Civil War, Washington became the first principal of Tuskegee Normal and Industrial School. Later as an adviser, author and orator, his past would influence his philosophies as the most influential African American of his era. Come explore his birthplace.",
        weather_description:
          "Please contact the park at 540/721-2094 during inclement weather conditions to find out about closures.",
        state: "VA",
        parkCode: "bowa",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/boaf/index.htm",
        parkname: "Boston African American National Historic Site",
        address: "15 State Street Boston 02109",
        description:
          "Centered on the north slope of Beacon Hill, the African American community of 19th century Boston led the city and the nation in the fight against slavery and injustice. These remarkable men and women, together with their allies, were leaders in the Abolition Movement, the Underground Railroad, the Civil War, and the early struggle for equal rights and education.",
        weather_description:
          "Boston African American National Historic Site is located in downtown Boston which can see extreme cold in the winter months, as well as extreme heat and humidity throughout the summer months. Walking tours may be cancelled during severe heat and/or weather events.",
        state: "MA",
        parkCode: "boaf",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/boha/index.htm",
        parkname: "Boston Harbor Islands National Recreation Area",
        address: "15 State Street Boston 02109",
        description:
          ". . . where you can walk a Civil War-era fort, visit historic lighthouses, explore tide pools, hike lush trails, camp under the stars, or relax while fishing, picnicking or swimming-all within reach of downtown Boston. Youth programs, visitor services, research, wildlife management, and more are coordinated on the park's 34 islands and peninsulas by the Boston Harbor Islands Partnership.",
        weather_description:
          "The Boston Harbor Islands have a humid maritime climate characterized by slightly cooler temperatures than the mainland, so dress in layers. Typical summer conditions feature air temperatures approximately 5-10 degrees cooler than the mainland between 60-80 Fahrenheit, winds of 0-15 knots and waves of 1-3 feet.",
        state: "MA",
        parkCode: "boha",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/bost/index.htm",
        parkname: "Boston National Historical Park",
        address: "Boston National Historical Park Charlestown 02129",
        description:
          "Discover how one city could be the Cradle of Liberty, site of the first major battle of American Revolution, and home to many who espoused that freedom can be extended to all.",
        weather_description:
          "Temperatures range from warm, humid summer days to cold New England winter days. Wear comfortable sportswear in season, with comfortable walking shoes.",
        state: "MA",
        parkCode: "bost",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/brcr/index.htm",
        parkname: "Brices Cross Roads National Battlefield Site",
        address: "260 Bethany Rd Guntown 38849",
        description:
          "The Confederate victory at Brices Cross Roads was a significant victory for Major General Nathan Bedford Forrest, but its long term effect on the war proved costly for the Confederates. Brices Cross Roads is an excellent example of winning the battle, but losing the war.",
        weather_description:
          "Mississippi is classified as a humid subtropical climate, the weather ranges from mild winters to hot summers with high humidity between May and September. Average high temperatures reach into the high 80's in summer, and into the high 40's in winter. Check local forecasts to plan your trip.",
        state: "MS",
        parkCode: "brcr",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/brvb/index.htm",
        parkname: "Brown v. Board of Education National Historic Site",
        address: "1515 SE Monroe Street Topeka 66612-1143",
        description:
          "The story of Brown v. Board of Education, which ended legal segregation in public schools, is one of hope and courage. When the people agreed to be plaintiffs in the case, they never knew they would change history. The people who make up this story were ordinary people. They were teachers, secretaries, welders, ministers and students who simply wanted to be treated equally.",
        weather_description:
          "Kansas has a temperate but continental climate, with great extremes between summer and winter temperatures but few long periods of extreme hot or cold.",
        state: "KS",
        parkCode: "brvb",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/brca/index.htm",
        parkname: "Bryce Canyon National Park",
        address: "Highway 63 Bryce 84764",
        description:
          "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the park's high elevations include numerous life communities, fantastic dark skies, and geological wonders that defy description.",
        weather_description:
          "Due of its high elevation climate, weather at Bryce Canyon through autumn, winter, and spring can be highly variable. From October to May temperatures fall below freezing nearly every night. The park typically experiences its coldest and snowiest periods from December through February. Spring storms in March and April can still produce heavy snowfall that may impact travel in the region. Summer highs are typically in the 70s-80s F and afternoon thunderstorms are common in July and August.",
        state: "UT",
        parkCode: "brca",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/buis/index.htm",
        parkname: "Buck Island Reef National Monument",
        address: "2100 Church St. #100 Christiansted, St. Croix 00820",
        description:
          "Welcome to Buck Island! Before you come, please watch our 2014 Telly Award winning film 'Caribbean Gem.' Watching this will catch you up on 50+ years of National Park Service protection and civic engagement. Learn what we do every day to preserve this resource for Virgin Islanders and visitors alike. For the General Management Plan and Environmental Compliance, visit the News page.",
        weather_description: "Welcome to the tropics!",
        state: "VI",
        parkCode: "buis",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/buff/index.htm",
        parkname: "Buffalo National River",
        address: "170 Ranger Road St. Joe 72675",
        description:
          "Established in 1972, Buffalo National River flows freely for 135 miles and is one of the few remaining undammed rivers in the lower 48 states. Once you arrive, prepare to journey from running rapids to quiet pools while surrounded by massive bluffs as you cruise through the Ozark Mountains down to the White River.",
        weather_description:
          "Summer in the Ozarks can be very hot and humid. Please check the weather forecast prior to your arrival and plan accordingly. The weather the rest of the year has the potential to be wet and cool or dry and warm. Please pay special attention to river levels and the rain forecast when planning a trip on the river. River levels can rise dramatically in a short period of time so please be aware of conditions.",
        state: "AR",
        parkCode: "buff",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cabr/index.htm",
        parkname: "Cabrillo National Monument",
        address: "1800 Cabrillo Memorial Drive San Diego 92106",
        description:
          "Climbing out of his boat and onto shore in 1542, Juan Rodriguez Cabrillo stepped into history as the first European to set foot on what is now the West Coast of the United States. In addition to telling the story of 16th century exploration, the park is home to a wealth of cultural and natural resources. Join us and embark on your own Voyage of Exploration.",
        weather_description:
          "Near Perfection Almost three million county residents can't be wrong: it's the weather. While many areas of the country are hibernating under blankets of snow or sweltering in muggy mid-summer humidity, San Diego's climate is generally sunny and mild year-round.",
        state: "CA",
        parkCode: "cabr",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cali/index.htm",
        parkname: "California National Historic Trail",
        address: "National Trails Santa Fe 87505",
        description:
          "Follow in the footsteps of over 250,000 emigrants who traveled to the gold fields and rich farmlands of California during the 1840s and 1850s: the greatest mass migration in American history. The California National Historic Trail is over 5,000 miles long and covers portions of 10 states. Step into history along more than 1,000 miles of ruts and traces from travelers and their overland wagons.",
        weather_description:
          "Due to the length of the California National Historic Trail, be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: www.weather.gov",
        state: "CA,CO,ID,KS,MO,NE,NV,OR,UT,WY",
        parkCode: "cali",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cane/index.htm",
        parkname: "Camp Nelson National Monument",
        address: "6614 Danville Road Nicholasville 40356",
        description:
          "Established as a supply depot and hospital during the Civil War for the U.S. Army, Camp Nelson became a large recruitment and training center for African American soldiers (USCTs), and a refugee camp for their wives and children. Thousands of enslaved people escaped to this site with the hope of securing freedom and ultimately controlling their futures by aiding in the destruction of slavery.",
        weather_description:
          "Kentucky has a moderate climate, summers are humid with highs typically in the upper 80s, and winter highs in the low 40s. Of course be aware of the possibility of storms or more extreme temperatures on occasion. The wettest months are March - July when about 4 inches of rain per month are expected, other months of the year are usually drier.",
        state: "KY",
        parkCode: "cane",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cana/index.htm",
        parkname: "Canaveral National Seashore",
        address: "Apollo Visitor Center, New Smyrna Beach 32169",
        description:
          "This pristine barrier island composed of dune, hammock and lagoon habitats provides protection from storms, preserves ancient Timucua Native American mounds, and is sanctuary for thousands of species of plants and animals that call Canaveral National Seashore home. Reflect on a pristine undeveloped shoreline, explore a historic site, or experience the rumble of a rocket soaring into space.",
        weather_description:
          "Summer: Hot & humid (Temperatures average in the 90's) Winter months: Temperatures in the 40-70 degree range, with a 'cold spells' where temps down to the low to mid-30's). Hurricane Season: June 1st through November 30th (most activity normally occurs in August or September)",
        state: "FL",
        parkCode: "cana",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cari/index.htm",
        parkname: "Cane River Creole National Historical Park",
        address:
          "4386 Highway 494, Natchez, LA 71456 (Oakland ) Natchitoches Parish 71457",
        description:
          "The Cane River region is home to a unique culture; the Creoles. Generations of the same families of owners and workers, enslaved and tenant, lived on these lands for over 200 years. The park tells their stories and preserves the cultural landscape of Oakland and Magnolia Plantations, two of the most intact Creole cotton plantations in the United States.",
        weather_description:
          "Weather in central Louisiana can be unpredictable. Summers are hot and humid. Winter is relatively mild with measurable snowfall every 5-10 years. Average rainfall is approximately 55-60 inches per year. The area is also subject to severe thunderstorms, hail, damaging winds, and tornadoes. Visitors might want to bring hats, umbrellas, and drink plenty of water. Please check the local weather forecast before planning your visit to the park.",
        state: "LA",
        parkCode: "cari",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cach/index.htm",
        parkname: "Canyon de Chelly National Monument",
        address: "3 miles E of Highway 191 on Route 7 Chinle 86503",
        description:
          "For nearly 5,000 years, people have lived in these canyons - longer than anyone has lived uninterrupted anywhere on the Colorado Plateau. In the place called Tsegi, their homes and images tell us their stories. Today, Navajo families make their homes, raise livestock, and farm the lands in the canyons. A place like no other, the park and Navajo Nation work together to manage the land's resources.",
        weather_description:
          "Canyon de Chelly is located at 5,500 feet. Spring is cool and windy; highs from 50 to 70; lows of 35 degrees. Expect dust storms and canyon flooding. Summer is hot and dry; highs from 85 to 100; lows of 51 degrees. Drink plenty of water outdoors. Fall is warm and often wet; highs from 60 to 80; lows of 40 degrees. Expect lightning, thunderstorms, and flash floods. Winter is cold and breezy; highs from 40 to 60; lows of 18 degrees. Expect 1-4 inches of snow and freezing nighttime temperatures.",
        state: "AZ",
        parkCode: "cach",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cany/index.htm",
        parkname: "Canyonlands National Park",
        address: "Island in the Sky - 33 miles from Moab on UT 313 Moab 84532",
        description:
          "Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure.",
        weather_description:
          "Canyonlands is part of the Colorado Plateau, a 'high desert' region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day. The temperate (and most popular) seasons are spring (April-May) and fall (mid-September-October), when daytime highs average 60 to 80 F and lows average 30 to 50 F. Summer temperatures often exceed 100 F, making strenuous exercise difficult. Winters are cold, with highs averaging 30 to 50 F, and lows averaging 0 to 20 F.",
        state: "UT",
        parkCode: "cany",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/caco/index.htm",
        parkname: "Cape Cod National Seashore",
        address: "99 Marconi Site Road Wellfleet 02667",
        description:
          "The great Outer Beach described by Thoreau in the 1800s is protected within the national seashore. Forty miles of pristine sandy beach, marshes, ponds, and uplands support diverse species. Lighthouses, cultural landscapes, and wild cranberry bogs offer a glimpse of Cape Cod's past and continuing ways of life. Swimming beaches and walking and biking trails beckon today's visitors.",
        weather_description:
          "Cape Cod's weather is generally moderated by its proximity to the ocean. Winter is typically cold with some snow. Spring is often rainy. Summer is usually warm and humid. Fall is generally dry and clear.",
        state: "MA",
        parkCode: "caco",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/caha/index.htm",
        parkname: "Cape Hatteras National Seashore",
        address: "46375 Lighthouse Road Buxton 27920",
        description:
          "The sound of ocean waves, the starry night sky, or the calm of the salt marshes, you can experience it all. Shaped by the forces of water, wind, and storms these islands are ever changing. The plants, wildlife, and people who live here adapt continually. Whether you are enjoying the beach, kayaking the sound, or climbing the Cape Hatteras Lighthouse there is something for everyone to explore!",
        weather_description:
          "The weather along the Outer Banks varies throughout the year and even throughout the day. Please check the National Weather Service information at http://www.weather.gov/mhx/ for forecast information.",
        state: "NC",
        parkCode: "caha",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/came/index.htm",
        parkname:
          "Cape Henry Memorial Part of Colonial National Historical Park",
        address: "Atlantic Ave Fort Story 23459",
        description:
          "English colonists first landed here in April 1607, erected a wooden cross and gave thanks for a successful crossing to a new land. In 1781, Americans could watch from these same sand dunes the largest naval battle of the Revolutionary War. Our French Allies defeated a British fleet just off this shore to set the stage for General George Washington's victory at Yorktown.",
        weather_description:
          "Spring: Temperatures usually range from 40 F to 80 F. Rain is common. Summer: Temperatures usually range from 80 F to 100 F. Rain and sun are equally common. On very sunny days, be prepared with plenty of water . Fall: Temperatures usually range from 40 F to 70 F. Winter: Temperatures range from 40 F to 20 F. Be prepared with cold weather gear and numerous layers if you intend to be outside.",
        state: "VA",
        parkCode: "came",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cakr/index.htm",
        parkname: "Cape Krusenstern National Monument",
        address: "171 3rd Ave Kotzebue 99752",
        description:
          "North of the Arctic Circle, the monument forms 70 miles of shoreline on the Chukchi Sea. More than 114 beach ridges provide evidence of human use for 5,000 years. The Inupiat continue to use the area today. Vast wetlands provide habitat for shorebirds from as far away as South America. Hikers and boaters can see carpets of wildflowers among shrubs containing wisps of qiviut from muskoxen.",
        weather_description:
          "Snow, rain, and freezing temperatures can occur any time of the year. Always travel with good quality rain gear and warm layers. Be especially careful to stay dry. Hypothermia can set in on a windy, wet day, even when it doesn't feel that cold.",
        state: "AK",
        parkCode: "cakr",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/calo/index.htm",
        parkname: "Cape Lookout National Seashore",
        address: "1800 Island Rd Harkers Island 28531",
        description:
          "A boat ride three miles off-shore brings you to the barrier islands of Cape Lookout National Seashore. Horse watching, shelling, fishing, birding, camping, lighthouse climbing, and touring historic villages--there’s something for everyone at Cape Lookout. Be sure to bring all the food, water, and supplies you need (and carry your trash out of the park) when visiting these remote beaches.",
        weather_description:
          "Spring: Temperatures generally range from 50 F to 70+ F. Rain & wind are common Summer: Temperatures usually range from 80 F to 100 F with high humidity (80-90%). Average wind speed is 10-15 mph. Be prepared with plenty of water. With little shade on the islands, an umbrella to provide shade from the sun is a good idea. Fall: Temperatures usually range from the high 70 F to the upper 40 F. Winter: Temperatures usually range from 50 F - 32 F. Winds can be strong. Dress in layers.",
        state: "NC",
        parkCode: "calo",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cahi/index.htm",
        parkname: "Capitol Hill Parks",
        address:
          "Capitol Hill Parks are spread out in various locations on Capitol Hill Washington 20003",
        description:
          "The Capitol Hill Parks include several park areas east of the U.S. Capitol. Included in this group are Folger, Lincoln, Stanton, and Marion Parks, the Eastern Market and Potomac Avenue Metro stations, and several smaller land parcels such as Seward Square, Twining Square, the Maryland Avenue Triangles, the Pennsylvania Avenue Medians, and 59 inner-city triangles and squares.",
        weather_description:
          "Winter: Temperatures usually range from 30 to 50 F. There is occasional snow. Spring: Temperatures usually range widely from 40 to 70 F. Rain is common. Summer: Temperatures usually range from 70 to 90 F. Humidity is usually high. Be prepared and drink plenty of water. There is a water fountain in the visitor center. Fall: Temperatures usually range widely from 40 to 70 F. Humidity can remain high in the earlier part of the season.",
        state: "DC",
        parkCode: "cahi",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/care/index.htm",
        parkname: "Capitol Reef National Park",
        address: "52 West Headquarters Drive Torrey 84775",
        description:
          "Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes, and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles.",
        weather_description:
          "Weather is posted daily; check at the park visitor center for weather updates. Do not enter into narrow canyons if there is a threat of rain or if rain has been falling in the area. Rain and snow may also make dirt roads impassable to vehicles.",
        state: "UT",
        parkCode: "care",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cajo/index.htm",
        parkname: "Captain John Smith Chesapeake National Historic Trail",
        address: "1368 Colonial Parkway Jamestown 23081",
        description:
          "Four hundred years ago Englishman John Smith and a small crew of adventurers set out in an open boat to explore the Chesapeake Bay. Between 1607 and 1609 Smith and his crew mapped nearly 3,000 miles of the Bay and rivers and documented American Indian communities. Smith’s map and journals are a remarkable record of the 17th-century Chesapeake. Come join the adventure on the Chesapeake Bay!",
        weather_description:
          "During the summer season, visitors should dress in light, comfortable clothing, wear comfortable shoes and use sunscreen. We recommended you carry a bottle of water with you. High temperatures and humidity create a higher risk of heat cramps, heat exhaustion and heatstroke. Most of the Historic site is out-of-doors, and although not a great distance from an air-conditioned building, staying properly hydrated will help prevent these illnesses. During the fall, visitors should have a light jacket available.",
        state: "VA,MD,DE,DC,PA,NY",
        parkCode: "cajo",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cavo/index.htm",
        parkname: "Capulin Volcano National Monument",
        address: "44 Volcano Road Capulin 88414",
        description:
          "Part of the 8,000 square mile Raton-Clayton Volcanic Field, Capulin Volcano showcases the volcanic geology of northeastern New Mexico. The views are spectacular day or night, with views of 4 different states from the volcanic rim and one of the darkest night skies in the country. Whether it's a quick stop or a day's trip, enjoy exploring the landscape of this unique volcano!",
        weather_description:
          "Elevations in the park range from approximately 7,000 feet to 8,182 feet on the crater rim. Windy conditions may exist at the top of the volcano. Summers are mild (highs in the mid-80sF/approximately 30C). Thunderstorms are common in July and August. The top of the Volcano will be closed during thunderstorms. Light jackets may be needed during the summer. Winters are cold, and blizzards may result in temporary park closures. Warm and layered clothing should be worn the rest of the year.",
        state: "NM",
        parkCode: "cavo",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/carl/index.htm",
        parkname: "Carl Sandburg Home National Historic Site",
        address: "81 Carl Sandburg Lane Flat Rock 28731",
        description:
          "Carl Sandburg provided a popular voice for the American people of the twentieth century and still speaks to us through his words, activism, music and the beauty and serenity of Carl Sandburg Home National Historic Site. Explore Sandburg's legacy and Experience Your America!",
        weather_description:
          "Average Monthly Highs and Lows January - 45 / 25 February - 50 / 30 March - 55 / 35 April - 60 / 40 May- 70 / 60 June - 80 / 65 July - 85 / 65 August - 80 / 65 September - 75 / 55 October - 70 / 45 November - 60 / 35 December - 50 / 30",
        state: "NC",
        parkCode: "carl",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cave/index.htm",
        parkname: "Carlsbad Caverns National Park",
        address: "727 Carlsbad Caverns Highway Carlsbad 88220",
        description:
          "High ancient sea ledges, deep rocky canyons, flowering cactus, and desert wildlife—treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves—formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes.",
        weather_description:
          "Carlsbad Caverns National Park is located in the Chihuahuan Desert in southeast New Mexico. Summers are hot with temperatures between 90°F (32°C) and low 100s °F (38°C). Windy conditions and mild temperatures are common in early spring (March-May) with frequent rain in early fall (August-September). This part of the country also sees cold temperatures in the winter with occasional snow and icy conditions. Most days, the park is enveloped by a gorgeous blue sky with very few clouds, 278 sunny days a year!",
        state: "NM",
        parkCode: "cave",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cawo/index.htm",
        parkname: "Carter G. Woodson Home National Historic Site",
        address: "1538 Ninth Street NW Washington 20001",
        description:
          "Before Dr. Carter G. Woodson, there was very little accurate written history about the lives and experiences of Americans of African descent. Today a National Historic Site, Dr. Woodson’s home served as the headquarters for the Association for the Study of African American Life and History. Dr. Woodson established Negro History Week here in 1926, which we celebrate today as Black History Month.",
        weather_description:
          "Winter: Temperatures usually range from 30 to 50 F. There is occasional snow. Spring: Temperatures usually range widely from 40 to 70 F. Rain is common. Summer: Temperatures usually range from 70 to 90 F. Humidity is usually high. Be prepared and drink plenty of water. There is a water fountain in the visitor center. Fall: Temperatures usually range widely from 40 to 70 F. Humidity can remain high in the earlier part of the season.",
        state: "DC",
        parkCode: "cawo",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cagr/index.htm",
        parkname: "Casa Grande Ruins National Monument",
        address: "1100 W. Ruins Drive Coolidge 85128",
        description:
          "Explore the mystery and complexity of an extended network of communities and irrigation canals. An Ancestral Sonoran Desert People's farming community and 'Great House' are preserved at Casa Grande Ruins. Whether the Casa Grande was a gathering place for the Desert People or simply a waypoint marker in an extensive system of canals and trading partners is but part of the mystique of the Ruins.",
        weather_description:
          "Summer daytime temperatures frequently exceed 100 degrees F. Winter temperatures range from the 60's to the 80's F. Spring and fall are warm and dry, with highs in the 80's and 90's F. During summer months, be prepared for hot temperatures. Protective clothing, hats, sunscreen and personal water containers are highly recommended. BE AWARE: Walls of dirt and debris, usually miles wide and thousands of feet high, are pushed across dry desert terrain by high winds, causing dust to engulf highways.",
        state: "AZ",
        parkCode: "cagr",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/casa/index.htm",
        parkname: "Castillo de San Marcos National Monument",
        address: "11 South Castillo Drive Saint Augustine 32084",
        description:
          "Built by the Spanish in St. Augustine to defend Florida and the Atlantic trade route, Castillo de San Marcos National Monument preserves the oldest masonry fortification in the continental United States and interprets more than 450 years of cultural intersections.",
        weather_description:
          "St. Augustine has a semi-tropical climate with over 300 days of sunshine each year. Summers (May-September) are hot, bright, and humid with afternoon thunderstorms common. Temperatures range from the lower 70s to the mid 90s F. Spring (March-mid-May) and Autumn (October-late November) can be pleasant with temperatures ranging from the upper 50s into the 80s F. The Winter months (December-March) are usually dry. Temperatures can be cool ranging from the upper 30s through the 60sF.",
        state: "FL",
        parkCode: "casa",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/cacl/index.htm",
        parkname: "Castle Clinton National Monument",
        address: "Battery Park New York 10004",
        description:
          "Located at the southern tip of Manhattan Island, Castle Clinton stands where New York City began, and represents not only the city’s growth, but the growth of a nation. Initially intended to prevent a British invasion in 1812, the fortification has transformed over the years to welcome theatergoers, immigrants, sightseers, and now, millions of visitors to New York Harbor.",
        weather_description:
          "Castle Clinton National Monument has a variety of weather. New York City has hot summers and cold winters. Spring can have heavy rains and Autumn can be cool. http://forecast.weather.gov/MapClick.php?CityName=New+York&state=NY&site=OKX&lat=40.7198&lon=-73.993#.Vqj8OvkrJlZ",
        state: "NY",
        parkCode: "cacl",
        createdAt: "2021-02-06T13:28:36.481",
        updatedAt: "2021-02-06T13:28:36.481",
      },
      {
        url: "https://www.nps.gov/camo/index.htm",
        parkname: "Castle Mountains National Monument",
        address: "Castle Mountains National Monument Barstow 92311",
        description:
          "Castle Mountains represents some of the most unique elements of the Mojave Desert. Nestled between the Nevada state line and Mojave National Preserve, the nearly 21,000 acres of Castle Mountains boasts Joshua tree forests, unbroken natural landscapes, rare desert grasslands, and rich human history. This intriguing area provides serenity and solitude from nearby metropolitan areas.",
        weather_description:
          "Weather at Castle Mountains changes with the seasons. Freezing temperatures are expected in winter, with occasional snow. Spring brings mild warm days and cooler nights. With enough rain, wildflowers can carpet the area, making for spectacular displays. Summer months are much hotter, with temperatures nearing 100 degrees Fahrenheit. Strong monsoonal storms in late summer may cause flash-flooding in low-lying areas and can create hazardous road conditions. Fall is a cooler respite after the heat of summer.",
        state: "CA",
        parkCode: "camo",
        createdAt: "2021-02-06T13:28:36.485",
        updatedAt: "2021-02-06T13:28:36.485",
      },
      {
        url: "https://www.nps.gov/cato/index.htm",
        parkname: "Catoctin Mountain Park",
        address: "14707 Park Central Road Thurmont 21788",
        description:
          "President Franklin D. Roosevelt created programs to give people a chance to rebuild their lives from the Great Depression. The Works Progress Administration and the Civilian Conservation Corps gave this land a second opportunity and through re-growth, a new role as a recreation area.",
        weather_description:
          "Summer (June-Aug) average temperature is between 61 and 81 degrees Fahrenheit. Fall (Sep-Nov) average temperature is between 45 and 64 degrees Fahrenheit. Fall foliage is at its peak in mid-October Winter (Dec-Feb) average temperature is between 24 and 41 degrees Fahrenheit. Winter snowfall is between 5-12' per month. Spring (March-May) average temperature is between 41 and 63 degrees Fahrenheit. Average precipitation is approximately 4 inches per month. (Source: usclimatedata.com)",
        state: "MD",
        parkCode: "cato",
        createdAt: "2021-02-06T13:28:36.485",
        updatedAt: "2021-02-06T13:28:36.485",
      },
      {
        url: "https://www.nps.gov/cebr/index.htm",
        parkname: "Cedar Breaks National Monument",
        address: "Cedar Breaks National Monument Brian Head 84719",
        description:
          "Crowning the grand staircase, Cedar Breaks sits at over 10,000 feet and looks down into a half-mile deep geologic amphitheater. Come wander among timeless bristlecone pines, stand in lush meadows of wildflower, ponder crystal-clear night skies and experience the richness of our subalpine forest.",
        weather_description:
          "Cedar Breaks sits at over 10,000 feet in elevation and is usually 10-20 degrees cooler than surrounding parks. Be prepared for cooler temperatures and unpredictable weather. Snow, sleet, and hail can occur at any time of the year, even in the summer! Summer-time highs are between 60 and 70°F and night-time lows dip to 30-40s°F. Thunderstorms frequently develop in the afternoons. Be aware of lightning and avoid exposed trails and overlooks until storms pass.",
        state: "UT",
        parkCode: "cebr",
        createdAt: "2021-02-06T13:28:36.485",
        updatedAt: "2021-02-06T13:28:36.485",
      },
      {
        url: "https://www.nps.gov/cebe/index.htm",
        parkname: "Cedar Creek & Belle Grove National Historical Park",
        address: "7712 Main Street Middletown 22645",
        description:
          "The Shenandoah Valley invites you to learn about its rich heritage, from Native Americans who first shaped the land, to pioneers of this frontier; this fertile area became one of the most important wheat producing regions of the entire South. The Valley also witnessed some of the most dramatic events of the Civil War,including the Battle of Cedar Creek, a decisive October 19, 1864 Union victory.",
        weather_description:
          "Summers in Virginia are often very hot with high heat indexes. Check the weather in advance of your trip, and plan accordingly. Dress for the heat and for sun protection. Pack lots of water. The Shenandoah Valley experiences temperate spring and fall seasons and winters with snowfall and cold temperatures.",
        state: "VA",
        parkCode: "cebe",
        createdAt: "2021-02-06T13:28:36.485",
        updatedAt: "2021-02-06T13:28:36.485",
      },
      {
        url: "https://www.nps.gov/chcu/index.htm",
        parkname: "Chaco Culture National Historical Park",
        address: "1808 CR 7950 Nageezi 87037",
        description:
          "Today the massive buildings of the Ancestral Puebloan people still testify to the organizational and engineering abilities not seen anywhere else in the American Southwest. For a deeper contact with the canyon that was central to thousands of people between 850 and 1250 A.D., come and explore Chaco through guided tours, hiking & biking trails, evening campfire talks, and night sky programs.",
        weather_description:
          "Summer highs are typically in the 80's to mid-90's. Thunderstorms can produce heavy localized downpours and sudden dramatic drops in temperatures. Winter temperatures will drop to well below freezing most nights. If you plan to camp in the winter, prepare for nighttime temperatures in the teens or lower. Spring and Fall are great times to visit with more moderate temperatures, but unexpected storms can change things dramatically. Monitor local weather forecasts.",
        state: "NM",
        parkCode: "chcu",
        createdAt: "2021-02-06T13:28:36.485",
        updatedAt: "2021-02-06T13:28:36.485",
      },
      {
        url: "https://www.nps.gov/cham/index.htm",
        parkname: "Chamizal National Memorial",
        address: "800 South San Marcial Street El Paso 79905",
        description:
          "Chamizal is more than just an urban park to recreate or enjoy a quiet afternoon. These grounds are a reminder of the harmonious settlement of a 100-year boundary dispute between the United States and Mexico. We celebrate the cultures of the borderlands to promote the same mutual respect that helped to diplomatically resolve an international disagreement.",
        weather_description:
          "Chamizal National Memorial is open year-round, but periodic winter weather conditions may cause closure. Please check for alerts on the park website: www.nps.gov/cham. Thunderstorms typically occur during summer and early fall. There may be no shelter to avoid lightning, so please prepare by looking at weather forecasts and paying attention to developing weather conditions.",
        state: "TX",
        parkCode: "cham",
        createdAt: "2021-02-06T13:28:36.485",
        updatedAt: "2021-02-06T13:28:36.485",
      },
      {
        url: "https://www.nps.gov/chis/index.htm",
        parkname: "Channel Islands National Park",
        address: "1901 Spinnaker Drive Ventura 93001",
        description:
          "Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was.",
        weather_description:
          "In general, the islands have a Mediterranean climate year-round. Temperatures are relatively stable, with highs averaging in the mid-60s (°F) and lows in the low-50s. However, there are seasonal differences that visitors should take into consideration when visiting the park. In addition, visitors also should be aware that ocean and weather conditions vary considerably from day-to-day and island-to-island. For more information visit: http://www.nps.gov/chis/planyourvisit/weather.htm",
        state: "CA",
        parkCode: "chis",
        createdAt: "2021-02-06T13:28:36.485",
        updatedAt: "2021-02-06T13:28:36.485",
      },
      {
        url: "https://www.nps.gov/chpi/index.htm",
        parkname: "Charles Pinckney National Historic Site",
        address: "1254 Long Point Road Mount Pleasant 29464",
        description:
          "Charles Pinckney was a principal author and signer of the United States Constitution. This remnant of his coastal plantation is preserved to tell the story of a 'founding father,' his life of public service, the lives of enslaved African Americans on South Carolina Lowcountry plantations and their influences on Charles Pinckney.",
        weather_description:
          "Winters are generally mild. Summers are hot and humid.",
        state: "SC",
        parkCode: "chpi",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/chyo/index.htm",
        parkname: "Charles Young Buffalo Soldiers National Monument",
        address: "1120 U.S. Route 42 E Wilberforce 45384",
        description:
          "Throughout his life, Charles Young overcame countless obstacles in his ascent to prominence. In spite of overt racism and stifling inequality, Young rose through the military ranks to become one of the most respected leaders of his time. A well-rounded man with a steadfast devotion to duty, Young led by example and inspired a generation of new leaders.",
        weather_description:
          "The park lies in a humid continental zone with a generally temperate climate. Winters are mildly cold with average temperatures around 29 degrees (F). Summers are hot and humid with an average temperature around 74 degrees (F). Average annual total rainfall is just under 40'. Snowfall in the winter is generally light with an average total snowfall of about 22'.",
        state: "OH",
        parkCode: "chyo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/chat/index.htm",
        parkname: "Chattahoochee River National Recreation Area",
        address: "8800 Roberts Drive Sandy Springs 30350",
        description:
          "Today the river valley attracts us for so many reasons. Take a solitary walk to enjoy nature’s display, raft leisurely through the rocky shoals with friends, fish the misty waters as the sun comes up, or have a picnic on a Sunday afternoon. Get Outdoors and experience your Chattahoochee River National Recreation Area as you have never done before.",
        weather_description:
          "Summers typically consist of long spells of warm, humid weather. Average highs are in the lower 90's and overnight lows range from the upper 60's to lower 70's. Winters are more variable with highs averaging from the mid 50's to lower 60's while the lows average in the mid 30's. Oftentimes, stretches of mild weather will alternate with cold spells. Spring and Autumn seasons are characterized by much variability from day to day and from year to year.",
        state: "GA",
        parkCode: "chat",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/choh/index.htm",
        parkname: "Chesapeake & Ohio Canal National Historical Park",
        address: "1850 Dual Highway, Suite 100 Hagerstown 21740",
        description:
          "Preserving America's early transportation history, the C&O Canal began as a dream of passage to Western wealth. Operating for nearly 100 years the canal was a lifeline for communities along the Potomac River as coal, lumber, and agricultural products floated down the waterway to market. Today it endures as a pathway for discovering historical, natural, and recreational treasures.",
        weather_description:
          "The Washington, DC, area has a four-season Mid-Atlantic climate. Summertime is warm and humid, while winter can be cold and snowy. Precipitation averages 2-4” monthly, year-round. The climate gradually gets cooler and wetter further west along the canal where the elevation is higher.",
        state: "DC,MD,WV",
        parkCode: "choh",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cbpo/index.htm",
        parkname: "Chesapeake Bay",
        address: "410 Severn Avenue Annapolis 21403",
        description:
          "NPS helps you learn about and enjoy the Chesapeake Bay, the largest estuary in North America. Here, you can visit major league cities, colonial towns, American Indian landscapes, farms and fishing villages. You can learn to kayak, pick crabs, go fishing, tour a lighthouse, slurp oysters, and slow down to enjoy the natural beauty of the Chesapeake.",
        weather_description:
          "Annapolis, Maryland has a warm humid temperate climate with hot summers and no dry season. Over the course of a year, the temperature typically varies from 29°F to 86°F and is rarely below 19°F or above 91°F. The warm season lasts from May 30 to September 18 with an average daily high temperature above 77°F. The cold season lasts from November 29 to March 4 with an average daily high temperature below 50°F.",
        state: "DC,DE,MD,NY,PA,VA,WV",
        parkCode: "cbpo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cbgn/index.htm",
        parkname: "Chesapeake Bay Gateways and Watertrails Network",
        address: "No address available",
        description:
          "The Chesapeake Bay Gateways and Watertrails Network connects you with the natural and cultural heritage of the Chesapeake Bay watershed through more than 170 exceptional parks, wildlife refuges, museums, sailing ships, historic communities, trails and more. Gateways Network partner sites and water trails are the special places where you can experience the authentic Chesapeake.",
        weather_description: "No weather info provided",
        state: "DC,MD,NY,PA,VA,WV",
        parkCode: "cbgn",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/chch/index.htm",
        parkname: "Chickamauga & Chattanooga National Military Park",
        address: "3370 LaFayette Road Fort Oglethorpe 30742",
        description:
          "In 1863, Union and Confederate forces fought for control of Chattanooga, known as the 'Gateway to the Deep South.' The Confederates were victorious at nearby Chickamauga in September. However, renewed fighting in Chattanooga that November provided Union troops victory and control of the city. After the fighting, a Confederate soldier ominously wrote, 'This...is the death-knell of the Confederacy.'",
        weather_description:
          "The climate in northern Georgia is generally temperate. Short, cool winters give relief from hot summers. Most visitors enjoy this area during long, mild fall and spring seasons.",
        state: "GA,TN",
        parkCode: "chch",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/chic/index.htm",
        parkname: "Chickasaw National Recreation Area",
        address: "901 W. 1st Street Sulphur 73086",
        description:
          "Springs, streams, lakes - whatever its form, water is the attraction at Chickasaw National Recreation Area.",
        weather_description:
          "Summers are hot and humid. Temperatures above 100ºF occur, and humidity often exceeds 50%. Winters are mild and prolonged freezes are rare. Thunderstorms are common April through July.",
        state: "OK",
        parkCode: "chic",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/chir/index.htm",
        parkname: "Chiricahua National Monument",
        address: "12856 E Rhyolite Creek Rd Willcox 85643",
        description:
          "A 'Wonderland of Rocks' is waiting for you to explore at Chiricahua National Monument. The 8-mile paved scenic drive and 17-miles of day-use hiking trails provide opportunities to discover the beauty, natural sounds, and inhabitants of this 12,025 acre site. Visit the Faraway Ranch Historic District to discover more about the people who have called this area home.",
        weather_description:
          "Chiricahua National Monument ranges from 5,124 feet / 1,562 meters in elevation at the entrance station to 7,310 feet / 2,228 meters at the summit of Sugarloaf Mountain. You can enjoy the differences of four seasons. http://www.nps.gov/chir/planyourvisit/weather.htm",
        state: "AZ",
        parkCode: "chir",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/chri/index.htm",
        parkname: "Christiansted National Historic Site",
        address: "2100 Church St. #100 Christiansted 00820",
        description:
          "No place in the Caribbean still demonstrates the architectural, economic, and political influence of Europe like Christiansted National Historic Site. Come wander through 18th century buildings in one the Caribbean's few urban parks. It is a unique experience that you will never forget.",
        weather_description: "Welcome to the tropics!",
        state: "VI",
        parkCode: "chri",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/ciro/index.htm",
        parkname: "City Of Rocks National Reserve",
        address: "City of Rocks National Reserve Almo 83312",
        description:
          "Emigrants of the California Trail describe the rocks here in vivid detail as 'a city of tall spires,” “steeple rocks,' and 'the silent city.' Today, this backcountry byway attracts rock climbers, campers, hikers, hunters, and those with the spirit of adventure. There's inspirational scenery, exceptional opportunities for geologic study, and remnants of the Old West awaiting your discovery.",
        weather_description:
          "City of Rocks is located in south-central Idaho within the northern edge of the Basin and Range geologic province. Outdoor recreation can be pleasant from April through October. Summers are generally dry with 10 to 15 inches of precipitation in winter and spring. Summer temperatures range widely with night time lows occasionally approaching freezing and midday highs nearing 100° F; however, the typical range of low and high temperature is 45-85. Thunderstorms are common in the summer months (June - August)",
        state: "ID",
        parkCode: "ciro",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cwdw/index.htm",
        parkname: "Civil War Defenses of Washington",
        address: "Civil War Defenses of Washington Washington 20012",
        description:
          "On forested hills surrounding the nation's capital are the remnants of a complex system of Civil War fortifications. These strategic buttresses transformed the young capital into one of the world's most fortified cities. By 1865, 68 forts and 93 batteries armed with over 800 cannons encircled Washington, DC. Today, you can visit 17 of the original sites now managed by the National Park Service.",
        weather_description:
          "Civil War Defenses of Washington sites will be open. For Updates, visit the parks alert section of the website.",
        state: "DC,MD,VA",
        parkCode: "cwdw",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/clba/index.htm",
        parkname: "Clara Barton National Historic Site",
        address: "5801 Oxford Road Glen Echo 20812",
        description:
          "Clara Barton dedicated her life and energies to help others in times of need - both home and abroad, in peacetime as well as during military emergencies. Glen Echo was her home the last 15 years of her life and the structure illustrates her dedication and concern for those less fortunate than herself.",
        weather_description: "Weather for the Washington, D.C. area.",
        state: "MD",
        parkCode: "clba",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/colo/index.htm",
        parkname: "Colonial National Historical Park",
        address: "1000 Colonial Parkway Yorktown 23690",
        description:
          "On May 13, 1607, Jamestown was established as the first permanent English settlement in North America. Three cultures came together – European, Virginia Indian and African–to create a new society that would eventually seek independence from Great Britain. On October 19, 1781, American and French troops defeated the British at Yorktown in the last major battle of the American Revolutionary War.",
        weather_description:
          "During the summer season visitors should dress in light, comfortable clothing, wear comfortable shoes and use sunscreen. We recommended you carry a bottle of water with you. High temperatures and high humidity create higher risk of heat cramps, heat exhaustion and heatstroke. Most of the Historic site is out-of-doors and although not a great distance from an air-conditioned building, staying properly hydrated will help prevent these illnesses. During the fall visitors should have a light jacket available.",
        state: "VA",
        parkCode: "colo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/colm/index.htm",
        parkname: "Colorado National Monument",
        address: "1750 Rim Rock Drive Fruita 81521",
        description:
          "Colorado National Monument preserves one of the grand landscapes of the American West. But this treasure is much more than a monument. Towering monoliths exist within a vast plateau and canyon panorama. You can experience sheer-walled, red rock canyons along the twists and turns of Rim Rock Drive, where you may spy bighorn sheep and soaring eagles.",
        weather_description:
          "Spring - Daytime high temperatures 70-85 F (21-30 C), nighttime low temperature 30-50 F (-1 - +10 C). Summer - Daytime high temperatures can reach 100 F (38 C), afternoon thunderstorms common. Fall - Similar to spring temperatures, sudden changes in weather common. Snow can occur in October. Winter - Daytime highs vary from 10 - 45 F (-12 - +7 C). Snow common, patches of snow and ice stay around most of the winter.",
        state: "CO",
        parkCode: "colm",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/colt/index.htm",
        parkname: "Coltsville National Historical Park",
        address: "120 Huyshope Ave Hartford 06106",
        description:
          "When Samuel Colt started his Hartford factory on the banks of the Connecticut River in 1847, it followed years of mismanagement and failure. Soon, demand for Colt's revolver would change his fortunes and the Colt empire was born. Following Colt's untimely death in 1862, his wife, Elizabeth Colt, would lead the company to its legendary status, and influence Hartford for over 40 years.",
        weather_description:
          "Hartford experiences all four seasons. It is typically hot in the summer and cold in the winter with a pleasant spring and autumn.",
        state: "CT",
        parkCode: "colt",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cong/index.htm",
        parkname: "Congaree National Park",
        address: "100 National Park Road Hopkins 29061",
        description:
          "Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States. Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees.",
        weather_description:
          "Check the forecast before getting on the road. Conditions can change rapidly within the park. Flooding can happen with little or no warning, so make sure to check water levels for Cedar Creek and the Congaree River.",
        state: "SC",
        parkCode: "cong",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/coga/index.htm",
        parkname: "Constitution Gardens",
        address: "1850 Constitution Ave. NW Washington 20002",
        description:
          "Officially established in 1965, National Mall and Memorial Parks actually protects some of the older parkland in the National Park System. Areas within this premier park provide visitors with ample opportunities to commemorate presidential legacies; honor the courage and sacrifice of war veterans; and celebrate the United States commitment to freedom and equality.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "coga",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/coro/index.htm",
        parkname: "Coronado National Memorial",
        address: "4101 E Montezuma Canyon Road Hereford 85615",
        description:
          "It was a journey of conquest filled with exploration, wonder - and cruelty. Inspired by tales of vast cities of gold, 339 European soldiers and hundreds of Aztec allies embarked on an epic journey through arid deserts and rugged mountains. They encountered rich traditions and brought new technologies. The resulting collision and combination of cultures reverberates today.",
        weather_description:
          "Though the park shares a border with our southern neighbors, the elevation and the mountain ecosystem keep Coronado National Memorial relatively cool in the summer, and winter can bring snow. Summers are warm, with daytime temps in the 90s F (32-37 C) and low humidity in May, June, and July. The summer rainy season (monsoon) is between late June and early September. Monsoon thunderstorms can cause flash floods. Winter temps can fall below freezing at night, with highs 40-60 F (4-15 C).",
        state: "AZ",
        parkCode: "coro",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cowp/index.htm",
        parkname: "Cowpens National Battlefield",
        address: "Cowpens National Battlefield Gaffney 29341",
        description:
          "“…our success was complete…” -- Daniel Morgan to Nathanael Greene, January 19, 1781 A pasturing area at the time of the battle, this Revolutionary War site commemorates the place where Daniel Morgan and his army turned the flanks of Banastre Tarleton's British army. This classic military tactic, known as a double envelopment, was one of only a few in history.",
        weather_description:
          "Temperatures for the area range from very hot and humid in the summer to cool and moderate in the winter. http://forecast.weather.gov/MapClick.php?lat=35.1346&lon=-81.7036#.VhkrZ-xVhBc",
        state: "SC",
        parkCode: "cowp",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/crla/index.htm",
        parkname: "Crater Lake National Park",
        address: "Crater Lake National Park Crater Lake 97604",
        description:
          "Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity: fed by rain and snow, it’s the deepest lake in the USA and one of the most pristine on earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range.",
        weather_description:
          "Summers at Crater Lake are short but sunny. July, August, and September are your best bets for warm, dry weather. In May, June, and October, sunny days alternate with periods of rain and snow. Winters at Crater Lake are long and snowy. Storms from the Pacific Ocean dump an annual average of 43 feet (13 meters) of snow at Park Headquarters. The park's tremendous snowfall is a result of its position at the crest of the Cascade Mountains.",
        state: "OR",
        parkCode: "crla",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/crmo/index.htm",
        parkname: "Craters Of The Moon National Monument & Preserve",
        address: "Craters of the Moon National Monument Arco 83213",
        description:
          "Craters of the Moon is a vast ocean of lava flows with scattered islands of cinder cones and sagebrush. We invite you to explore this 'weird and scenic landscape' where yesterday's volcanic events are likely to continue tomorrow.",
        weather_description:
          "Weather at Craters of the Moon is characterized by hot summers and cold winters. In February, average snow depth ranges from 26 inches at the north end of the monument to just 2 inches at the south end. Intense summer sun bakes the black lava, generating surface temperatures of 170 degrees Fahrenheit and air temperatures in the 90s. Drying winds are a daily occurence, especially in the afternoon, and may reach 15 to 30 miles per hour.",
        state: "ID",
        parkCode: "crmo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cuga/index.htm",
        parkname: "Cumberland Gap National Historical Park",
        address: "91 Bartlett Park Road Middlesboro 40965",
        description:
          "At Cumberland Gap, the first great gateway to the west, follow the buffalo, the Native American, the longhunter, the pioneer... all traveled this route through the mountains into the wilderness of Kentucky. Modern day explorers and travelers stand in awe at this great gateway and the many miles of trails and scenic features found in the park.",
        weather_description:
          "Summers at Cumberland Gap are hot and humid, with temperatures commonly in the mid to upper 90s. Winters are generally mild with rain and some periods of snow January through March. Temperatures usually range in the 30s and 40s. Weather can sometimes be unpredictable, especially at higher elevations.",
        state: "KY,TN,VA",
        parkCode: "cuga",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cuis/index.htm",
        parkname: "Cumberland Island National Seashore",
        address: "113 St. Marys St W St. Marys 31558",
        description:
          "St Marys is the gateway to Cumberland Island, Georgia's largest and southernmost barrier island. Here pristine maritime forests, undeveloped beaches and wide marshes whisper the stories of both man and nature. Natives, missionaries, enslaved African Americans and Wealthy Industrialists all walked here. Cumberland Island is also home to over 9,800 acres of Congressionally designated Wilderness.",
        weather_description:
          "Cumberland Island’s climate is hot and humid during summer when temperatures tend to be in the 80's (>26 C) and mild during winter when temperatures tend to be in the 60's (<20 C). The warmest month of the year is July with an average high of 90 degrees F (32 C), while the coldest is January with an average low of 45 degrees F (44 C). Visit the Current Conditions page for an up-to-date local forecast: https://www.nps.gov/cuis/planyourvisit/conditions.htm#weather",
        state: "GA",
        parkCode: "cuis",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cure/index.htm",
        parkname: "Curecanti National Recreation Area",
        address: "102 Elk Creek Gunnison 81230",
        description:
          "Curecanti National Recreation Area is a series of three reservoirs along the once wild Gunnison River. The reservoirs that make up Curecanti today are a destination for water-based recreation high in the Rocky Mountains. Best known for salmon and trout fishing, Curecanti also offers opportunities for hiking, boating, camping, and bird watching.",
        weather_description:
          "Weather can vary greatly throughout the day. Summer daytime temperatures range between 50 to 90F (10 to 32C), nights 40 to 60F (4 to 15C). Winter daytime temperatures range between -20 to +40F (-29 to +4C), nights -30 to +20F (-34 to -7C). Precipitation is minimal, but afternoon thunderstorms and strong winds are common during the summer. Snow accumulation varies greatly year to year. Layered clothing appropriate for the season is recommended.",
        state: "CO",
        parkCode: "cure",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cuva/index.htm",
        parkname: "Cuyahoga Valley National Park",
        address: "6947 Riverview Road Peninsula 44264",
        description:
          "Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal.",
        weather_description:
          "Spring's rain and warming temperatures bring new leaves on trees, blooming wildflowers, and visitors anxious get out on the trail. Summer temperatures range from 49 to 95 degrees F and can be humid. Dressing in layers is advisable. Fall temperatures can range from low 70s during the day to freezing during the night. Fall foliage often peaks in mid-October. Winter weather conditions can rapidly change due to the lake effect snow from Lake Erie. Temperatures vary from mid-30s to below zero.",
        state: "OH",
        parkCode: "cuva",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/cech/index.htm",
        parkname: "César E. Chávez National Monument",
        address: "29700 Woodford-Tehachapi Road Keene 93531",
        description:
          "Yes, we can! Widely recognized as the most important Latino leader in the United States during the twentieth century, César E. Chávez led farm workers and supporters in the establishment of the country's first permanent agricultural union. His leadership brought sustained international attention to the plight of U.S. farm workers, and secured for them higher wages and safer working conditions",
        weather_description:
          "The climate in this area is mild, with warm, dry summers and cool winters. Average temperatures in July, the warmest month, are in the mid-80s and hot days often reach into the 90s. In winter, frosty mornings are common and roads may be icy.",
        state: "CA",
        parkCode: "cech",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/dabe/index.htm",
        parkname: "David Berger National Memorial",
        address: "26001 South Woodland Road Beachwood 44122",
        description:
          "This site honors the memory of David Berger, an American citizen who was one of 11 Israeli athletes killed at the 1972 Olympic Games in Munich, Germany. David had no expectations of winning a medal but joined the Israeli weightlifting team to realize his dream - a dream which ended tragically. The Memorial is dedicated to his memory and the memory of the ten other athletes.",
        weather_description:
          "The weather at David Berger Memorial is typical of Northeastern Ohio: four distinct seasons. Spring's rain and warming temperatures bring new leaves on trees and blooming wildflowers. Summer temperatures range from 49 to 95 degrees F and can be humid. Fall temperatures can range from low 70s during the day to freezing during the night. Fallcolor peaks mid-October. Winter weather conditions can rapidly change. Temperatures vary from mid-30s to below zero.",
        state: "OH",
        parkCode: "dabe",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/daav/index.htm",
        parkname: "Dayton Aviation Heritage National Historical Park",
        address: "16 South Williams Street Dayton 45402",
        description:
          "Three exceptional men from Dayton, Ohio, Wilbur Wright, Orville Wright and Paul Laurence Dunbar, found their creative outlet here through accomplishments and failures, and finally success. However, these men offered the world something far greater, they offered the world hope, and the ability to take a dream and make it a reality.",
        weather_description:
          "The park lies in a humid continental zone with a generally temperate climate. Winters are mildly cold with average temperatures around 39 degrees (F). Summers are hot and humid with an average temperature around 74 degrees (F). Average annual total rainfall is just above 41'. Snowfall in the winter is generally light with an average total snowfall of about 25'.",
        state: "OH",
        parkCode: "daav",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/deso/index.htm",
        parkname: "De Soto National Memorial",
        address: "8300 De Soto Memorial Hwy Bradenton 34209",
        description:
          "In May 1539, Conquistador Hernando de Soto’s army of soldiers, hired mercenaries, craftsmen, and clergy made landfall in Tampa Bay. They were met with fierce resistance of indigenous people protecting their homelands. De Soto’s quest for glory and gold would be a four year, four thousand mile odyssey of intrigue, warfare, disease, and discovery that would form the history of the United States.",
        weather_description:
          "Summers avg. Temperature is 90 degrees Fahrenheit with a relative humidity of 80-90% Late afternoon showers and thunderstorms are common usually lasting only 10-20 minutes. Winters are mild and dry with lows reaching on average 60 degrees.",
        state: "FL",
        parkCode: "deso",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/deva/index.htm",
        parkname: "Death Valley National Park",
        address: "PO Box 579 Death Valley 92328",
        description:
          "In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley.",
        weather_description:
          "SPRING is the most popular time to visit Death Valley. Warm and sunny days with the possibility of spring wildflowers is a big attraction. SUMMER starts early in Death Valley. By May the valley can be scorching hot. AUTUMN arrives in late October, with warm but pleasant temperatures and generally clear skies. WINTER has cool days, chilly nights and rarely, rainstorms. With snow capping the high peaks and low angled winter light, this season is especially beautiful for exploring the valley.",
        state: "CA,NV",
        parkCode: "deva",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/dewa/index.htm",
        parkname: "Delaware Water Gap National Recreation Area",
        address: "1978 River Road Bushkill 18324",
        description:
          "Paddlers slip down the river between low forested mountains; anglers wade the trout streams; hikers scan the valley from the ridge or peer into the 1000-foot-deep Water Gap. The valley has known human hand and voice for 10,000 years. Floodplains nourished the Native farmer; waterfalls drew the Victorian vacationer. Today, a 70,000-acre park welcomes those who seek the outdoors close to home.",
        weather_description:
          "Spring: Temperatures usually range from lows of 26 F to highs of 80 F with average rainfall of 5 inches. Summer: Temperatures usually range from lows of 55 F to highs of 85 F with average rainfall of 4 inches. Fall: Temperatures usually range from lows of 30 F to highs of 83F. Fall foliage is at its peak sometime in October as daily mountain temperatures vary frequently and influence the change. Winter: Temperatures usually range from lows of 15 F to highs of 49 F.",
        state: "NJ,PA",
        parkCode: "dewa",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/dena/index.htm",
        parkname: "Denali National Park & Preserve",
        address: "Mile 237 Highway 3 Denali Park 99755",
        description:
          "Denali is six million acres of wild land, bisected by one ribbon of road. Travelers along it see the relatively low-elevation taiga forest give way to high alpine tundra and snowy mountains, culminating in North America's tallest peak, 20,310' Denali. Wild animals large and small roam un-fenced lands, living as they have for ages. Solitude, tranquility and wilderness await.",
        weather_description:
          "Summer is typically cool and wet, with highs typically in the upper 50s to low 60s, and lows in the 40s. On occasion, summer highs reach the low 80s, though this is rare. Snow can fall any month of the year, so be prepared for chilly weather even in summer. Fall colors emerge on the alpine tundra in August and in the low valleys in early September. Winter generally starts in mid-September, with temps often getting down to -40 by January. Spring is a short season in April / May, with highs above freezing.",
        state: "AK",
        parkCode: "dena",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/depo/index.htm",
        parkname: "Devils Postpile National Monument",
        address: "Devils Postpile Access Road Mammoth Lakes 93546",
        description:
          "Established in 1911 by presidential proclamation, Devils Postpile National Monument protects and preserves the Devils Postpile formation, the 101-foot high Rainbow Falls, and pristine mountain scenery. The formation is a rare sight in the geologic world and ranks as one of the world's finest examples of columnar basalt. Its' columns tower up to 60 feet and display a striking symmetry.",
        weather_description:
          "Devils Postpile National Monument is located at 7,560 feet above sea level just west of the Sierra Nevada crest. As such, it experiences typical summer weather in the Sierras. Afternoon thunderstorms are possible in July and August. Daytime temperatures can range from the mid-70s to to mid-80s (degrees Fahrenheit). Evening temperatures can drop into the low 40s (and even the low 30s in the months of September and October).",
        state: "CA",
        parkCode: "depo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/deto/index.htm",
        parkname: "Devils Tower National Monument",
        address: "149 State Highway 110 Devils Tower 82714",
        description:
          "The Tower is an astounding geologic feature that protrudes out of the prairie surrounding the Black Hills. It is considered sacred by Northern Plains Indians and indigenous people. Hundreds of parallel cracks make it one of the finest crack climbing areas in North America. Devils Tower entices us to learn more, explore more and define our place in the natural and cultural world.",
        weather_description:
          "Obtain forecast information before beginning your adventure at Devils Tower National Monument and observe changing weather conditions. Thunderstorms can develop quickly bringing lightning, hail, rain, slippery rock surfaces, and hypothermia. Summer days can bring very hot temperatures. Carry enough water, and realize the rock of the Tower can reach over 100 degrees Fahrenheit. Winter weather can bring blowing snow and road closures. Check local forecasts and road conditions before visiting.",
        state: "WY",
        parkCode: "deto",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/dino/index.htm",
        parkname: "Dinosaur National Monument",
        address: "11625 E 1500 S Jensen 84035",
        description:
          "Dinosaurs once roamed here. Their fantastic remains are still visible embedded in the rocks. Today, the mountains, desert and untamed rivers flowing in deep canyons, support an array of life. Petroglyphs hint at earlier cultures. Later, homesteaders and outlaws found refuge here. Whether your passion is science, adventure, history or scenery, Dinosaur offers much to explore.",
        weather_description:
          "Dinosaur's climate is semiarid with temperatures averaging between 0°F to 30°F in January and 50°F to 100°F in July. Extreme winter low temperatures may reach -40°F and summer highs can top 110°F. Elevations within the park vary between 4,700 and 9,000 feet. Winter snow may be heavy at higher elevations while only light to moderate snow is found at lower elevations. Summer thunderstorms may cause heavy downpours and localized flooding, but fail to dampen parched soils less than a mile away.",
        state: "CO,UT",
        parkCode: "dino",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/drto/index.htm",
        parkname: "Dry Tortugas National Park",
        address: "40001 SR-9336 Homestead 33034",
        description:
          "Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. This 100-square mile park is mostly open water with seven small islands. Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life, and the vast assortment of bird life that frequents the area.",
        weather_description:
          "The climate in the Dry Tortugas is subtropical, which basically means that it has warm and tropical weather in the range of 60°F to 90°F. The two main seasons are the winter stormy season from December through March which is windier and sees rougher seas, and the summertime tropical storm season from June through November where there is a higher chance of isolated storms. During the summers it is hot and humid. During the winter the temperature is milder and drier.",
        state: "FL",
        parkCode: "drto",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/ddem/index.htm",
        parkname: "Dwight D. Eisenhower Memorial",
        address: "540 Independence Avenue SW Washington 20202",
        description:
          "The Dwight D. Eisenhower Memorial tells the story of one of America's greatest leaders of the 20th century.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "ddem",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/ebla/index.htm",
        parkname: "Ebey's Landing National Historical Reserve",
        address: "162 Cemetery Road Coupeville 98239",
        description:
          "This stunning landscape at the gateway to Puget Sound, with its rich farmland and promising seaport, lured the earliest American pioneers north of the Columbia River to Ebey’s Landing. Today Ebey’s Landing National Historical Reserve preserves the historical, agricultural and cultural traditions of both Native and Euro-American – while offering spectacular opportunities for recreation.",
        weather_description:
          "Fall and Winter often bring blustery and rainy weather, and while winter storm watching might be fun from the many beaches within the Reserve, it's important to watch for high waves and logs coming ashore. Always dress appropriately for the weather, which can change suddenly from warm to chilly very quickly.",
        state: "WA",
        parkCode: "ebla",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/edal/index.htm",
        parkname: "Edgar Allan Poe National Historic Site",
        address: "532 N. 7th Street Philadelphia 19123",
        description:
          "Described as horrifying, mystifying, and brilliant, Poe’s writing has engaged readers all over the globe. The six years Edgar Allan Poe lived in Philadelphia were his happiest and most productive. Yet Poe also struggled with bad luck, personal demons and his wife’s illness. In Poe’s humble home, reflect on the human spirit surmounting crushing obstacles, and celebrate Poe’s astonishing creativity.",
        weather_description:
          "Summers are typically hot and muggy, fall and spring are generally mild, and winter is cold. Snowfall is highly variable, with some winters bringing only light snow and others bringing several major snowstorms, with the normal seasonal snowfall standing at 22.4 in (57 cm). Precipitation is generally spread throughout the year, with eight to twelve wet days per month.",
        state: "PA",
        parkCode: "edal",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/efmo/index.htm",
        parkname: "Effigy Mounds National Monument",
        address: "151 Hwy 76 Harpers Ferry 52146",
        description:
          "The mounds preserved here are considered sacred by many Americans, especially the Monument's 20 culturally associated American Indian tribes. A visit offers opportunities to contemplate the meanings of the mounds and the people who built them. The 200 plus American Indian mounds are located in one of the most picturesque sections of the Upper Mississippi River Valley.",
        weather_description:
          "All four seasons are represented in this area with summer temperature in the upper 80’s with higher heat indexes due to humidity and winter daytime highs in the 20's. Temperatures are in °Fahrenheit.",
        state: "IA",
        parkCode: "efmo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/eise/index.htm",
        parkname: "Eisenhower National Historic Site",
        address: "243 Eisenhower Farm Road Gettysburg 17325",
        description:
          "Eisenhower National Historic Site preserves the farm of General and 34th President Dwight D. Eisenhower. Adjacent to the Gettysburg battlefield, the farm served the president and first lady as a weekend retreat and as a meeting place for world leaders. With its peaceful setting and view of South Mountain, it was a respite from Washington, DC, and a backdrop for efforts to reduce Cold War tensions.",
        weather_description:
          "https://www.nps.gov/eise/planyourvisit/weather.htm",
        state: "PA",
        parkCode: "eise",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/elca/index.htm",
        parkname: "El Camino Real de Tierra Adentro National Historic Trail",
        address: "National Trails Office - Regions 6, 7, 8 Santa Fe 87505",
        description:
          "Travel along El Camino Real de Tierra Adentro National Historic Trail to experience and learn from a complicated legacy of 300 years of conflict, cooperation, and cultural exchange between a variety of empires—European and non-European alike.",
        weather_description:
          "Due to the length of El Camino Real de Tierra Adentro National Historic Trail, be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: weather.gov",
        state: "NM,TX",
        parkCode: "elca",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/elte/index.htm",
        parkname: "El Camino Real de los Tejas National Historic Trail",
        address: "National Trails Santa Fe 87501",
        description:
          "Explore a diverse array of histories contained within El Camino Real de los Tejas’ 150-year life, including the Spanish struggle to missionize American Indian nations, the growth of cattle ranching in the Mexican period, and the movement for Texan independence and statehood.",
        weather_description:
          "Due to the length of El Camino de los Tejas National Historic Trail, be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: www.weather.gov",
        state: "TX,LA",
        parkCode: "elte",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/elma/index.htm",
        parkname: "El Malpais National Monument",
        address: "1900 E. Santa Fe Ave. Grants 87020",
        description:
          "The richly diverse volcanic landscape of El Malpais offers solitude, recreation, and discovery. Explore cinder cones, lava tube caves, sandstone bluffs, and hiking trails. Wildlife abounds in the open grasslands and forests. While some may see a desolate environment, people have been adapting to and living in this extraordinary terrain for generations. Come discover the land of fire and ice!",
        weather_description:
          "As a general rule, daily temperatures swing roughly 30 (F) from night lows to afternoon highs. Summer is sunny and hot with monsoon rain storms and an average high of 80 (F). Winter is cool, sunny, with potential snow storms and an average high of 45 (F). Spring and fall are generally dry with the occasional storm rain and/or snow storm. For more information on weather and current weather conditions visit https://www.nps.gov/elma/planyourvisit/weather.htm",
        state: "NM",
        parkCode: "elma",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/elmo/index.htm",
        parkname: "El Morro National Monument",
        address: "Mile Marker 44.6 Hwy 53 Ramah 87321",
        description:
          "Imagine the refreshment of finding water after days of dusty travel. A reliable waterhole hidden at the base of a sandstone bluff made El Morro (the headland) a popular campsite for hundreds of years. Here, Ancestral Puebloans, Spanish and American travelers carved over 2,000 signatures, dates, messages, and petroglyphs. Make El Morro National Monument a stopping point on your travels.",
        weather_description:
          "At an elevation of 7,219 feet (2200 meters) winters can be cold and snowy. Summers are warm with afternoon thunder showers from mid-July through mid-September. Trails can close unexpectedly due to severe weather. Average snowfall: 40 inches per year. Average precipitation (snowmelt and rain): 16 inches per year. Warmest month: July, with average highs of 84 degrees and lows of 52 degrees. Coldest months: December and January, with average lows of 14-15 degrees, and average highs of 44-45 degrees.",
        state: "NM",
        parkCode: "elmo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/elro/index.htm",
        parkname: "Eleanor Roosevelt National Historic Site",
        address: "54 Val-Kill Park Road Hyde Park 12538",
        description:
          "Visit the home of Eleanor Roosevelt. Here, Franklin and Eleanor entertained friends, state visitors, the press, and their associates in the tranquil and relaxed atmosphere of Val-Kill. Explore the Roosevelt saga in the homes of Franklin and Eleanor Roosevelt, the exhibits at the nation’s first Presidential Library, and over a thousand acres of gardens and trails.",
        weather_description:
          "Spring: Temperatures usually range from 40°F to 70°F. Rain is not uncommon. Summer: Temperatures usually range from 70° F to 100° F. Humidity can be high throughout the summer months with periods of rain. Fall: Temperatures usually range from 40° F to 70° F. Peak leaf season is mid-October. Rain is not uncommon. Winter: Temperatures usually range from 30° F to 50°F. Ice, Freezing Rain and Snow are not uncommon.",
        state: "NY",
        parkCode: "elro",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/elis/index.htm",
        parkname: "Ellis Island Part of Statue of Liberty National Monument",
        address: "Ellis Island National Museum of Immigration New York 10004",
        description:
          "How far would you travel to find a better life? What if the journey took weeks under difficult conditions? If you answered 'Whatever it takes,' you echo the feelings of the 12 million immigrants who passed through these now quiet halls from 1892 to 1954. Ellis Island afforded them the opportunity to attain the American dream for themselves and their descendants. Come hear their stories.",
        weather_description:
          "It is typically colder and more windy in New York Harbor than in elsewhere in the New York City metropolitan area. Winters are cold and damp. Spring and Fall can range from chilly to warm. Summers are warm to hot and humid.",
        state: "NJ,NY",
        parkCode: "elis",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/euon/index.htm",
        parkname: "Eugene O'Neill National Historic Site",
        address: "205 Railroad Avenue Danville 94526",
        description:
          "America's only Nobel Prize winning playwright, Eugene O'Neill, chose to live in Northern California at the height of his writing career. Isolated from the world and within the walls of his home, O'Neill wrote his final and most memorable plays; The Iceman Cometh, Long Day's Journey Into Night, and A Moon for the Misbegotten.",
        weather_description:
          "The Mediterranean climate of Danville features hot, dry summers with lower temperatures near 60º F and upper temperatures near 100º F. The heat gives way to cool, rainy winters with lows near 45º F and highs near 75º F. Fall and spring can bring rain and temperatures from 55-80º F.",
        state: "CA",
        parkCode: "euon",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/ever/index.htm",
        parkname: "Everglades National Park",
        address: "40001 State Road 9336 Homestead 33034",
        description:
          "Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee, American crocodile, and the elusive Florida panther. An international treasure as well - a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty.",
        weather_description:
          "The climate in Florida is known to be mild and sunny.The average annual temperatures for South Florida and the Keys range from 74° to 77°F (23° to 25°C). There are two seasons at the Everglades National Park: the wet season and the dry season. The wet season runs from Mid-May to November and the dry season runs from December to mid-May.",
        state: "FL",
        parkCode: "ever",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fati/index.htm",
        parkname:
          "Fallen Timbers Battlefield and Fort Miamis National Historic Site",
        address:
          "Battlefield is at Intersection of US23/I-475 and US 24 Maumee 43537",
        description:
          "The Battle of Fallen Timbers was the culminating event that demonstrated the tenacity of the American people in their quest for western expansion and the struggle for dominance in the Old Northwest Territory. The events resulted in the dispossession of American Indian tribes and a loss of colonial territory for the British military and settlers.",
        weather_description:
          "The weather at Fallen Timbers Battlefield and Fort Miamis is typical of Northern Ohio: four distinct seasons. Spring's rain and warming temperatures bring new leaves on trees and blooming wildflowers. Summer temperatures range from 49 to 95 degrees F and can be humid. Fall temperatures can range from low 70s during the day to freezing during the night. Fallcolor peaks mid-October. Winter weather conditions can rapidly change. Temperatures vary from mid-30s to below zero.",
        state: "OH",
        parkCode: "fati",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/feha/index.htm",
        parkname: "Federal Hall National Memorial",
        address: "26 Wall Street New York 10005",
        description:
          "Here on Wall Street, George Washington took the oath of office as our first President, and this site was home to the first Congress, Supreme Court, and Executive Branch offices. The current structure, a Customs House, later served as part of the US Sub-Treasury. Now, the building serves as a museum and memorial to our first President and the beginnings of the United States of America.",
        weather_description:
          "http://forecast.weather.gov/MapClick.php?CityName=New+York&state=NY&site=OKX&lat=40.7198&lon=-73.993#.Vqj8OvkrJlZ",
        state: "NY",
        parkCode: "feha",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fiis/index.htm",
        parkname: "Fire Island National Seashore",
        address: "120 Laurel Street Patchogue 11772",
        description:
          "Immerse yourself in an enchanting collage of coastal life and history. Rhythmic waves, high dunes, ancient maritime forests, historic landmarks and glimpses of wildlife, Fire Island has been a special place for diverse plants, animals and people for centuries. Far from the pressure of nearby big-city life, dynamic barrier island beaches offer solitude, camaraderie, and spiritual renewal.",
        weather_description:
          "Spring: Temperatures may range from high 30s to low 50s (F). Rain and sun are equally common. Summer: Temperatures usually range from 65 F to 90 F. Fall: Temperatures from 70 F in early autumn to 40 F later in the season may be expected. Winter: Temperatures in the 30s (F) are common, with below freezing temperatures possible.",
        state: "NY",
        parkCode: "fiis",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fila/index.htm",
        parkname: "First Ladies National Historic Site",
        address: "205 Market Avenue South Canton 44702-2107",
        description:
          "First Ladies National Historic Site consists of two properties in downtown Canton, Ohio - the home of First Lady Ida Saxton-McKinley and a small visitor center with an exhibit and film. Come learn about how the position of First Lady has evolved over time to include a public role.",
        weather_description:
          "The weather at First Ladies National Historic Site is typical of Northeastern Ohio: four distinct seasons. Spring's rain and warming temperatures bring new leaves on trees and blooming wildflowers. Summer temperatures range from 49 to 95 degrees F and can be humid. Fall temperatures can range from low 70s during the day to freezing during the night. Fallcolor peaks mid-October. Winter weather conditions can rapidly change. Temperatures vary from mid-30s to below zero.",
        state: "OH",
        parkCode: "fila",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/frst/index.htm",
        parkname: "First State National Historical Park",
        address: "New Castle Court House Museum New Castle 19720",
        description:
          "Famous as the First State to ratify the Constitution, Delaware was born out of a conflict among three world powers for dominance of the Delaware Valley. From this beginning, the region developed a distinct character that tolerated diversity in religion and national origin and valued independence.",
        weather_description:
          "For details and information, visit, http://www.nps.gov/frst/index.htm.",
        state: "DE,PA",
        parkCode: "frst",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/flni/index.htm",
        parkname: "Flight 93 National Memorial",
        address: "6424 Lincoln Highway Stoystown 15563",
        description:
          "On Tuesday morning, September 11, 2001, the U.S. came under attack when four commercial airliners were hijacked and used to strike targets on the ground. Nearly 3,000 people tragically lost their lives. Because of the actions of the 40 passengers and crew aboard one of the planes, Flight 93, the attack on the U.S. Capitol was thwarted.",
        weather_description:
          "Fall-Winter Cooler weather starts in September with warm days and cool nights. The first snowfall of the season occurs by mid-October and extends through late March to mid-April. Daytime temperatures range in the mid-20s to 30s, with periodic warming in the 40s and 50s. The average annual snowfall is approximately 80 inches for Somerset County. Spring-Summer May is more predictable for warmer weather with daytime temperatures in the 60s and 70s. July and August are also mild with highs in the 80s-90s",
        state: "PA",
        parkCode: "flni",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/flfo/index.htm",
        parkname: "Florissant Fossil Beds National Monument",
        address: "15807 Teller County Road 1 Florissant 80816",
        description:
          "Beneath a grassy mountain valley in central Colorado lies one of the richest and most diverse fossil deposits in the world. Petrified redwood stumps up to 14 feet wide and thousands of detailed fossils of insects and plants reveal the story of a very different, prehistoric Colorado.",
        weather_description:
          "Winter months - average high 40 degrees F; average low 5 degrees F; Summer months - average high 75 degrees F; average low 40 degrees F;",
        state: "CO",
        parkCode: "flfo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/foth/index.htm",
        parkname: "Ford's Theatre",
        address: "511 10th Street NW Washington 20004",
        description:
          "April 14, 1865. President Lincoln is assassinated at Ford’s Theatre. Discover how a nation handled grief and loss, how everyday people experienced a national tragedy, and how we have remembered a fallen leader. Today, in partnership with Ford’s Theatre Society, live dramatic productions highlight Lincoln’s love of the theatre, and the power of stories to connect us to ourselves and our history.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "foth",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fobo/index.htm",
        parkname: "Fort Bowie National Historic Site",
        address: "3500 South Apache Pass Road Bowie 85605",
        description:
          "Fort Bowie witnessed almost 25 years of conflict between the Chiricahua Apache and the US Army, and remains a tangible connection to the turbulent era of the late 1800s. Explore the history of Fort Bowie and Apache Pass as you hike the 1.5 mile trail to the visitor center and old fort ruins. Today, this peaceful landscape stands in stark contrast to the violence that once gripped this land.",
        weather_description:
          "Please check the Fort Bowie weather page for up to date weather conditions: http://www.wunderground.com/personal-weather-station/dashboard?ID=MAU921",
        state: "AZ",
        parkCode: "fobo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/foda/index.htm",
        parkname: "Fort Davis National Historic Site",
        address: "101 Lt. Flipper Dr. #1379 Fort Davis 79734",
        description:
          "Fort Davis is one of the best surviving examples of an Indian Wars' frontier military post in the Southwest. From 1854 to 1891, Fort Davis was strategically located to protect emigrants, mail coaches, and freight wagons on the Trans-Pecos portion of the San Antonio-El Paso Road and on the Chihuahua Trail.",
        weather_description:
          "Summer Temperatures average a High of 95 and low of 65. Winter Temperatures average a High of 60 and a low of 20. Wind is very common and heavy rainfall is very sporadic.",
        state: "TX",
        parkCode: "foda",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fodo/index.htm",
        parkname: "Fort Donelson National Battlefield",
        address: "174 National Cemetery Drive Dover 37058",
        description:
          "Brigadier General Ulysses S. Grant was becoming quite famous as he wrote these words following the surrender of Confederate Fort Donelson on Sunday, February 16, 1862. The Union victory at Fort Donelson elated the North, and stunned the South. Within days of the surrender, Clarksville and Nashville would fall into Union hands. Grant and his troops had created a pathway to victory for the Union.",
        weather_description:
          "Fort Donelson National Battlefield traditionally experiences mild to moderate winters and hot summers with an average high of 90 degrees in the summer and 40 in winter; average lows in the winter are 30 degrees but single digits are not unusual. Rainfall in the area averages 53 inches a year with an additional 6 inches of ice/snow and violent thunderstorms can take place at any time of year.",
        state: "KY,TN",
        parkCode: "fodo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fodu/index.htm",
        parkname: "Fort Dupont Park",
        address: "National Capitol Parks-East Washington 20020",
        description:
          "Welcome to Fort Dupont Park in Washington DC! At 376-acres, the wooded park was once home to earthen fort built to protect the capital during the Civil War. Today, visitors can see the fort's earthworks and escape to the great outdoors. Activities include picnics, nature walks, biking, gardening, environmental education, music, and ranger-led programs.",
        weather_description:
          "Open in all weather, unless otherwise noted under the alerts section of the parks website.",
        state: "DC",
        parkCode: "fodu",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fofo/index.htm",
        parkname: "Fort Foote Park",
        address: "8915 Fort Foote Road Oxon Hill 20745",
        description:
          "Fort Foote was constructed in 1863 atop Rozier's Bluff to strengthen the ring of fortifications that encircled Washington, D.C. Two of the Guns that protected Washington are still there along with the remains of the fort's earthworks.",
        weather_description:
          "Summers are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit and scattered afternoon thunderstorms. Please carry water while participating in physical activity and be prepared to take shelter from lightning. Winters are generally cold, with nighttime lows frequently near freezing and occasional snowfall. Weather during spring and fall is generally moderate, but can change quickly.",
        state: "MD",
        parkCode: "fofo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fofr/index.htm",
        parkname: "Fort Frederica National Monument",
        address: "Fort Frederica National Monument St. Simons Island 31522",
        description:
          "Georgia's fate was decided in 1742 when Spanish and British forces clashed on St. Simons Island. Fort Frederica's troops defeated the Spanish, ensuring Georgia's future as a British colony. Today, the archeological remnants of Frederica are protected by the National Park Service.",
        weather_description:
          "The site enjoys mild climate from fall through early summer, followed by hot, humid summers.",
        state: "GA",
        parkCode: "fofr",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fola/index.htm",
        parkname: "Fort Laramie National Historic Site",
        address: "965 Gray Rocks Road Fort Laramie 82212",
        description:
          "Originally established as a private fur trading fort in 1834, Fort Laramie evolved into the largest and best known military post on the Northern Plains before its abandonment in 1890. This “grand old post” witnessed the entire sweeping saga of America’s western expansion and Indian resistance to encroachment on their territories.",
        weather_description:
          "Fort Laramie is located in the warmest part of Wyoming. Summer days can get quite hot (over 100F/37C) with average temperatures in the 80s and 90s (30-35C), though nights are mostly cool. The region is semi-arid with a distinct winter dry season. About 70% of annual precipitation normally falls in thunderstorms during the spring and early summer. Winters can be cold and windy with sub-zero wind chills. Visitors should be aware that high winds are possible in the winter and can approach hurricane strength.",
        state: "WY",
        parkCode: "fola",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fols/index.htm",
        parkname: "Fort Larned National Historic Site",
        address: "1767 KS Hwy 156 Larned 67550",
        description:
          "Discover a complete and authentic army post from the 1860s -1870s! This well-preserved fort on the Santa Fe Trail shares a tumultuous history of the Indian Wars era. The sandstone constructed buildings sheltered troops who were known as the Guardians of the Santa Fe Trail.",
        weather_description:
          "Central Kansas has a four-season climate. Winter tends to be cold and dry, with average daytime highs below 40F (4C). Foehn winds blowing across the Great Plains from the Southwest periodically raise temperatures above 80F (27C). Unsettled warmer air, higher winds, and severe weather arrive in the spring and often last through early July. Late summer days hover above 90F (32C) and readings over 100F (38C) are not uncommon. Fall is variable but generally milder with showers changing to snow and ice later.",
        state: "KS",
        parkCode: "fols",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/foma/index.htm",
        parkname: "Fort Matanzas National Monument",
        address: "8635 A1A South Saint Augustine 32080",
        description:
          "Fort Matanzas National Monument preserves the fortified coquina watchtower, completed in 1742, which defended the southern approach to the Spanish military settlement of St. Augustine. It also protects approximately 300 acres of Florida coastal environment containing dunes, marsh, maritime forest, and associated flora and fauna, including threatened and endangered species.",
        weather_description:
          "Summers are hot and humid with afternoon thundershowers. Sunscreen, a hat, UV protective sunglasses, and are recommended. Drink plenty of water. Winters are cool to mild with some cold spells, especially with wind from the north or off the water. Fall and spring are temperate with temperatures around 70F-80F (21C-26C). During danger of lightning, the fort will be closed and ferry service will be suspended. June-November is hurricane season so check for tropical storms before visiting.",
        state: "FL",
        parkCode: "foma",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fomc/index.htm",
        parkname: "Fort McHenry National Monument and Historic Shrine",
        address: "2400 East Fort Avenue Baltimore 21230",
        description:
          "by the dawn's early light, a large red, white and blue banner? Whose broad stripes and bright stars... were so gallantly streaming...over Fort McHenry! The valiant defense of the fort during the Battle of Baltimore on September 13-14, 1814 inspired Francis Scott Key to write the words that became the U.S. national anthem. The fort's history holds many other stories too, from the Civil War to WWII.",
        weather_description:
          "Temperatures and weather in the spring and fall months tend to be mild. Ice, snow, and freezing temperatures can occur during winter. Extreme heat can occur during the summer months. Inclement weather may impact park hours of operation year round. Refer to the park alerts or call ahead to confirm operating hours.",
        state: "MD",
        parkCode: "fomc",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fomr/index.htm",
        parkname: "Fort Monroe National Monument",
        address: "41 Bernard Road Fort Monroe 23651-1001",
        description:
          "Fort Monroe National Monument has a diverse history spanning the American story from American Indian presence, Captain John Smith's journeys, first arrival of enslaved Africans in English North America, a safe haven for freedom seekers during the American Civil War, and a bastion of defense for the Chesapeake Bay through the 21st Century. Visit and witness the on-going preservation work in action.",
        weather_description:
          "Spring: Temperatures range from 40 F to 70 F with rain being common. Summer: Temperatures range from 75 F to 100 F with rain and sun equally common. On very sunny days, be prepared with plenty of water. Fall: Temperatures usually range from 40 F to 65 F. Hurricanes are more likely to threaten the are at this time of year. If planning a visit during this time, please be mindful of the storm activity. Winter: Temperatures range from 40 F to 50 F on average with snow being uncommon.",
        state: "VA",
        parkCode: "fomr",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fone/index.htm",
        parkname: "Fort Necessity National Battlefield",
        address: "1 Washington Parkway Farmington 15437",
        description:
          "The battle at Fort Necessity in the summer of 1754 was the opening action of the French and Indian War. This war was a clash of British, French and American Indian cultures. It ended with the removal of French power from North America. The stage was set for the American Revolution.",
        weather_description:
          "Weather varies considerably within each season. Be prepared with layered clothing. Precipitation is common throughout the year. Spring: Temperatures usually range from 25°F to 70°F. On average, May is the wettest month. Summer: Temperatures usually range from 50°F to 80°F. July is the warmest month. Fall: Temperatures usually range from 30°F to 70°F. Fall foliage is at its peak around mid-October. Winter: Temperatures range from 15°F to 40°F. January is the coldest month.",
        state: "PA",
        parkCode: "fone",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fopo/index.htm",
        parkname: "Fort Point National Historic Site",
        address: "Fort Point National Historic Site San Francisco 94129",
        description:
          "From its vantage point overlooking the spectacular Golden Gate, Fort Point defended the San Francisco Bay following California's Gold Rush through World War II. Its beautifully arched casemates display the art of 3rd system brick masonry and interacts gracefully with the Golden Gate Bridge.",
        weather_description:
          "Fort Point is typically cold and windy throughout the year. Fog is especially common in the summer months. Come prepared with layers and windbreakers for maximum comfort.",
        state: "CA",
        parkCode: "fopo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fopu/index.htm",
        parkname: "Fort Pulaski National Monument",
        address: "101 Fort Pulaski Road Savannah 31410",
        description:
          "For much of the 19th century, masonry fortifications were the United States’ main defense against overseas enemies. However, during the Civil War, new technology proved its superiority to these forts. The Union army used rifled cannon and compelled the Confederate garrison inside Fort Pulaski to surrender. The siege was a landmark experiment in the history of military science and invention.",
        weather_description:
          "Savannah has a humid sub tropical climate with over two hundred days of sunshine each year. Summers are typically hot, bright and humid with afternoon thunderstorms common. Temperatures often range from the lower 70s to the mid 90s F. Spring and autumn can be quite pleasant with temperatures ranging from the upper 50s into the 80s F. The winter months are usually dry. Temperatures can be cooler than one would expect, ranging from the upper 30s through the 60s F generally, though sudden cold snaps can occur.",
        state: "GA",
        parkCode: "fopu",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fora/index.htm",
        parkname: "Fort Raleigh National Historic Site",
        address: "1500 Fort Raleigh Road Manteo 27954",
        description:
          "Fort Raleigh National Historic Site protects and preserves known portions of England's first New World settlements from 1584 to 1590. This site also preserves the cultural heritage of the Native Americans, European Americans and African Americans who have lived on Roanoke Island.",
        weather_description:
          "Weather on the Outer Banks varies seasonally and daily. Please check the National Weather Service at http://www.weather.gov/mhx/ for up-to-date weather forecast information.",
        state: "NC",
        parkCode: "fora",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fosc/index.htm",
        parkname: "Fort Scott National Historic Site",
        address: "1 Old Fort Blvd. Fort Scott 66701",
        description:
          "Promises made and broken! Who deserves to be free? The fight for freedom! Soldiers fighting settlers! Each of these stories is a link in the chain of events that encircled Fort Scott from 1842-1873. All of the site's structures, its parade ground, and its tallgrass prairie bear witness to this era when the country was forged from a young republic into a united transcontinental nation.",
        weather_description:
          "Spring and autumn are pleasant with mild temperatures. Summers are generally hot and humid, while winters are mild with periods of cold weather, snowfall, and ice storms. Thunderstorms, some severe, are common throughout the spring and summer. During periods of severe weather, visitors should seek shelter, as the area is prone to lightning strikes Visitors are advised to check the weather prior to traveling.",
        state: "KS",
        parkCode: "fosc",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fosm/index.htm",
        parkname: "Fort Smith National Historic Site",
        address: "301 Parker Ave Fort Smith 72901",
        description:
          "Explore life on the edge of frontier and Indian Territory through the stories of soldiers, the Trail of Tears, scandals, outlaws, and lawmen who pursued them. From the establishment of the first Fort Smith on December 25, 1817, to the final days of Judge Isaac C. Parker's jurisdiction over Indian Territory in 1896, Fort Smith National Historic Site preserves almost 80 years of history.",
        weather_description:
          "Fort Smith weather includes four distinct, yet temperate seasons. Spring and fall are usually mild while late summer is hot and humid. During winter months, temperatures occasionally dip into the teens. Forecast often changes dramatically due to surrounding weather influences. Arkansas's central location allows weather systems from all directions to influence its climate. The area is prone to flash flooding and river flooding in rainy seasons.",
        state: "AR,OK",
        parkCode: "fosm",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fost/index.htm",
        parkname: "Fort Stanwix National Monument",
        address: "100 North James St. Rome 13440",
        description:
          "For centuries, the Oneida Carrying Place, a six mile portage connecting the Mohawk River and Wood Creek, served as a vital link for those traveling by water from the ocean to the Great Lakes. When Europeans arrived, nations fought for control of the carry, the homelands of the Six Nations Confederacy, and the rich resources of North America. In this struggle, Fort Stanwix would play a vital role.",
        weather_description:
          "The Park lies within a temperate zone and experiences four full seasons. Summer can become very hot and humid. Snow is common as late as May and as early as October. The fort area can become muddy in all seasons. With most activities outdoors, good closed-toe walking shoes and low heels are advised. Air conditioning and heating is limited to park visitor center most times in the year. Water and extra layers of clothing in all seasons are always recommended!",
        state: "NY",
        parkCode: "fost",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fosu/index.htm",
        parkname: "Fort Sumter and Fort Moultrie National Historical Park",
        address: "340 Concord Street Charleston 29401",
        description:
          "Charleston, victorious over the Royal Navy in 1776 and scene of the largest patriot defeat in 1780, played a key role in the American Revolution. Charleston's appetite for revolution continued in the 1800s as the city blazed a path to secession to safeguard slavery. The Confederacy fired on the US garrison of Fort Sumter on April 12, 1861, opening the Civil War, which redefined American freedom.",
        weather_description: "Mild winters. Hot and humid during the summer.",
        state: "SC",
        parkCode: "fosu",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/foun/index.htm",
        parkname: "Fort Union National Monument",
        address: "3115 NM Highway 161 Watrous 87753",
        description:
          "Exposed to the wind, within a sweeping valley of short grass prairie, amid the swales of the Santa Fe Trail, lie the territorial-style adobe remnants of the largest 19th century military fort in the region. For forty years, 1851-1891, Fort Union functioned as an agent of political and cultural change, whether desired or not, in New Mexico and throughout the Southwest.",
        weather_description:
          "Fort Union is situated at 6,760 feet above sea level. Daytime temperatures between June and September may exceed 90 degrees Fahrenheit. Winter temperatures often drop below 32 degrees Fahrenheit. Temperatures may vary within 50 degrees in a 24-hour period. During the winter, it is not uncommon for the temperatures to drop below 0°F (-18°C.) During the summer, expect high temperatures, intense sunlight and extreme low humidity.",
        state: "NM",
        parkCode: "foun",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fous/index.htm",
        parkname: "Fort Union Trading Post National Historic Site",
        address: "15550 Highway 1804 Williston 58801",
        description:
          "Between 1828 and 1867, Fort Union was the most important fur trade post on the Upper Missouri River. Here, the Assiniboine and six other Northern Plains Indian Tribes exchanged buffalo robes and smaller furs for goods from around the world, including cloth, guns, blankets, and beads. A bastion of peaceful coexistence, the post annually traded over 25,000 buffalo robes and $100,000 in merchandise.",
        weather_description:
          "Weather in western North Dakota can be harsh, with extremes in temperature and sudden, violent storms. Be prepared for rapidly changing conditions. Summers are warm with average high temperatures in the 80s-90s May through September. Winters are cold with average lows in the single digits December through February. Wind is considerable year-round. Conditions can change quickly. Travelers should be aware of the potential for violent thunderstorms in the summer and the possibility of blizzards.",
        state: "MT,ND",
        parkCode: "fous",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fova/index.htm",
        parkname: "Fort Vancouver National Historic Site",
        address: "1501 E Evergreen Blvd Vancouver 98661",
        description:
          "Located on the north bank of the Columbia River, in sight of snowy mountain peaks and a vibrant urban landscape, this park has a rich cultural past. From a frontier fur trading post, to a powerful military legacy, the magic of flight, and the origin of the American Pacific Northwest, history is shared at four unique sites. Discover stories of transition, settlement, conflict, and community.",
        weather_description:
          "Fort Vancouver National Historic Site is located in a mild, temperate climate. However, in the case of severe weather, park alerts posted on the park's website will provide information about emergency closures.",
        state: "OR,WA",
        parkCode: "fova",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fowa/index.htm",
        parkname: "Fort Washington Park",
        address: "13551 Fort Washington Road Fort Washington 20744",
        description:
          "Built to defend the river approach to Washington, DC, Fort Washington has stood as silent sentry for over 200 years. As technologies advanced so did Fort Washington, from the brick and stone of the 19th century to the concrete and steel of the 20th century. Joining the National Park Service in 1946, the park continues to protect the Potomac River.",
        weather_description:
          "Summers are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit and scattered afternoon thunderstorms. Please carry water while participating in physical activity and be prepared to take shelter from lightning. Winters are generally cold, with nighttime lows frequently near freezing and occasional snowfall. Weather during spring and fall is generally moderate, but can change quickly.",
        state: "MD",
        parkCode: "fowa",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/fobu/index.htm",
        parkname: "Fossil Butte National Monument",
        address: "864 Chicken Creek Road Kemmerer 83101",
        description:
          "Some of the world's best preserved fossils are found in the flat-topped ridges of southwestern Wyoming's cold sagebrush desert. Fossilized fishes, insects, plants, reptiles, birds, and mammals are exceptional for their abundance, variety, and detail of preservation. Most remarkable is the story they tell of ancient life in a subtropical landscape.",
        weather_description:
          "Expect a variety of weather conditions no matter what time of year you visit. Spring, fall and winter can be very cold; expect snow and winter conditions. Spring: Day time temperatures usually range from 30 F to 65 F Summer: Day time temperatures range from 60 F to 90 F Fall: Day time temperatures range from 45 F to 70 F Winter: Day time temperatures range from -20 F to 30 F",
        state: "WY",
        parkCode: "fobu",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/frde/index.htm",
        parkname: "Franklin Delano Roosevelt Memorial",
        address: "400 West Basin Drive SW Washington 20002",
        description:
          "These words by President Franklin Delano Roosevelt ushered the United States into World War II and defined what it is to be an American. Stop by this secluded memorial and begin to understand the Roosevelt legacy.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "frde",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/frdo/index.htm",
        parkname: "Frederick Douglass National Historic Site",
        address: "1411 W Street SE Washington 20020",
        description:
          "Frederick Douglass spent his life fighting for justice and equality. Born into slavery in 1818, he escaped as a young man and became a leading voice in the abolitionist movement. People everywhere still find inspiration today in his tireless struggle, brilliant words, and inclusive vision of humanity. Douglass's legacy is preserved here at Cedar Hill, where he lived his last 17 years.",
        weather_description:
          "Winter: Temperatures usually range from 30 to 50 F. There is occasional snow. Spring: Temperatures usually range widely from 40 to 70 F. Rain is common. Summer: Temperatures usually range from 70 to 90 F. Humidity is usually high. Be prepared and drink plenty of water. There is a water fountain in the visitor center. Fall: Temperatures usually range widely from 40 to 70 F. Humidity can remain high in the earlier part of the season.",
        state: "DC",
        parkCode: "frdo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/frla/index.htm",
        parkname: "Frederick Law Olmsted National Historic Site",
        address: "99 Warren Street Brookline 02445",
        description:
          "Frederick Law Olmsted (1822-1903) is recognized as the founder of American landscape architecture and the nation's foremost parkmaker. Olmsted moved his home to suburban Boston in 1883 and established the world's first full-scale professional office for the practice of landscape design. During the next century, his sons and successors perpetuated Olmsted's design ideals, philosophy, and influence.",
        weather_description:
          "Summer: Warm temperatures, average high temperature around 80 degrees Fahrenheit, often with humidity. July and August bring the hottest temperatures. Fall: Cooler temperatures, mean temperatures between 45 and 65 degrees Fahrenheit, sometimes rainy. Peak fall foliage is in mid-October. Winter: Cold, with snow, average low temperature around 25 degrees Fahrenheit. Spring: Cold to cool temperatures, average mean temperatures between 40 and 60 degrees Fahrenheit.",
        state: "MA",
        parkCode: "frla",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/frsp/index.htm",
        parkname: "Fredericksburg & Spotsylvania National Military Park",
        address: "120 Chatham Ln Fredericksburg 22405",
        description:
          "Fredericksburg, Chancellorsville, Wilderness, and Spotsylvania--this is America's battleground, where the Civil War roared to its bloody climax. No place more vividly reflects the War's tragic cost in all its forms. A town bombarded and looted. Farms large and small ruined. Refugees by the thousands forced into the countryside. More than 85,000 men wounded; 15,000 killed--most in graves unknown.",
        weather_description:
          "The regional climate is characterized by mild winters and warm, humid summers. The mean annual temperatures is 56 degrees Fahrenheit. The average summer temperature is 75 degrees Fahrenheit. Daytime highs during the summer can reach the 90s, and nighttime lows are in the lower 60s. Daytime highs in the winter are typically in the upper 40s, and nighttime lows in the middle 20s. Precipitation is well distributed throughout the year, with the minimum amount in August and the maximum in February.",
        state: "VA",
        parkCode: "frsp",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/frri/index.htm",
        parkname: "Freedom Riders National Monument",
        address: "Freedom Riders National Monument Anniston 36201",
        description:
          "In 1961, a small interracial band of “Freedom Riders” challenged discriminatory laws requiring separation of the races in interstate travel. They were attacked by white segregationists, who firebombed the bus. Images of the attack appeared in hundreds of newspapers, shocking the American public and spurring the Federal Government to issue regulations banning segregation in interstate travel.",
        weather_description:
          "Temperatures can soar to extremes of heat and humidity in the summer and fall to a damp, wet, cold in the winter. During the summer season visitors should dress in light, comfortable clothing, wear comfortable shoes and use sunscreen. Drink plenty of fluids to maintain hydration. In the spring and fall visitors should have a light jacket available as temperatures can drop suddenly. Winter temperatures can be unpredictable, ranging from mild to extremely cold",
        state: "AL",
        parkCode: "frri",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/frhi/index.htm",
        parkname: "Friendship Hill National Historic Site",
        address: "223 New Geneva Rd. Point Marion 15470",
        description:
          "Albert Gallatin is best remembered for his thirteen year tenure as Secretary of the Treasury during the Jefferson and Madison administrations. In that time he reduced the national debt, purchased the Louisiana Territory and funded the Lewis & Clark exploration. Gallatin's accomplishments and contributions are highlighted at Friendship Hill, his restored country estate.",
        weather_description:
          "Weather varies considerably within each season. Be prepared with layered clothing. Precipitation is common throughout the year. Spring: Temperatures usually range from 25°F to 70°F. On average, May is the wettest month. Summer: Temperatures usually range from 50°F to 80°F. July is the warmest month. Fall: Temperatures usually range from 30°F to 70°F. Fall foliage is at its peak around mid-October. Winter: Temperatures range from 15°F to 40°F. January is the coldest month.",
        state: "PA",
        parkCode: "frhi",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gaar/index.htm",
        parkname: "Gates Of The Arctic National Park & Preserve",
        address: "101 Dunkel St Fairbanks 99701",
        description:
          "This vast landscape does not contain any roads or trails. Visitors discover intact ecosystems where people have lived with the land for thousands of years. Wild rivers meander through glacier-carved valleys, caribou migrate along age-old trails, endless summer light fades into aurora-lit night skies of winter. It remains virtually unchanged except by the forces of nature.",
        weather_description:
          "The climate of Gates of the Arctic National Park & Preserve is generally classified as arctic and sub-arctic, with exceptionally cold winters, relatively mild summers, low annual precipitation, and generally high winds. The weather is influenced by many different systems, and can change rapidly.!!",
        state: "AK",
        parkCode: "gaar",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/jeff/index.htm",
        parkname: "Gateway Arch National Park",
        address: "11. North 4th Street St. Louis 63102",
        description:
          "The Gateway Arch reflects St. Louis' role in the Westward Expansion of the United States during the nineteenth century. The park is a memorial to Thomas Jefferson's role in opening the West, to the pioneers who helped shape its history, and to Dred Scott who sued for his freedom in the Old Courthouse.",
        weather_description:
          "Normal Daily Mean Temperature (in degrees Fahrenheit)* January - 29.3 February - 33.9 March - 45.1 April - 56.7 May - 66.1 June - 75.4 July - 79.8 August - 77.6 September - 70.2 October - 58.4 November - 46.2 December - 33.9 Average Percent of Days with Sunshine* January - 50% February - 52% March - 54% April - 56% May - 59% June - 66% July - 68% August - 65% September - 63% October - 60% November - 46% December - 53% *Source: National Oceanic and Atmospheric Administration",
        state: "MO",
        parkCode: "jeff",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gate/index.htm",
        parkname: "Gateway National Recreation Area",
        address: "210 New York Avenue Staten Island 10305",
        description:
          "Spanning 27,000 acres from Sandy Hook in New Jersey to Breezy Point in New York City, the park is both the gateway from the ocean into New York Harbor, and the gateway to the National Park Service for millions of visitors every year. Gateway offers green spaces and beaches alongside historic structures and cultural landscapes. Every day, Gateway is open for you to explore, envision, and enjoy!",
        weather_description:
          "Gateway National Recreation Area includes several separate land areas spread throughout the New York metropolitan area. The New York area experiences four distinct seasons. Temperatures are moderate in the spring and fall, but range from the high 90's during the summer to snow and sleet in winter.",
        state: "NY,NJ",
        parkCode: "gate",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gari/index.htm",
        parkname: "Gauley River National Recreation Area",
        address: "Gauley River National Recreation Area Glen Jean 25846-0246",
        description:
          "The 25 miles of free-flowing Gauley River and the six miles of the Meadow River pass through scenic gorges and valleys containing a wide variety of natural and cultural features. The Gauley River contains several class V+ rapids, making it one of the most adventurous white water boating rivers in the east.",
        weather_description:
          "Weather in the Appalachian Mountains can be unpredictable and can change quickly. Always be prepared for the possibility of sudden storms. Weather in the mountains is often cooler and wetter than the surrounding area. On average, the warmest month is July. The maximum average precipitation also occurs in July.",
        state: "WV",
        parkCode: "gari",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gegr/index.htm",
        parkname: "General Grant National Memorial",
        address: "Riverside Drive and W. 122nd Street New York 10027",
        description:
          "The final resting place of President Ulysses S. Grant and his wife, Julia, is the largest mausoleum in North America. It testifies to a people’s gratitude for the man who ended the bloodiest conflict in American history as Commanding General of the Union Army and then, as President of the United States, strove to heal a nation after a civil war and make rights for all citizens a reality.",
        weather_description:
          "http://forecast.weather.gov/MapClick.php?CityName=New+York&state=NY&site=OKX&lat=40.7198&lon=-73.993#.Vqj8OvkrJlZ",
        state: "NY",
        parkCode: "gegr",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gero/index.htm",
        parkname: "George Rogers Clark National Historical Park",
        address: "401 S. 2nd Street Vincennes 47591",
        description:
          "The British flag would not be raised above Fort Sackville Feb. 25, 1779. At 10 a.m., the garrison surrendered to American Colonel George Rogers Clark. His American army, aided by French residents of the Illinois country, had marched through freezing floodwaters to gain this victory. The fort’s capture assured United States claims to the frontier, an area nearly as large as the original 13 states.",
        weather_description:
          "The weather in the area is quite typical for the Midwest. The average temperature for the winter months is the mid-30s, but the summers can often be hot and humid with temperatures reaching into the 90s.",
        state: "IN",
        parkCode: "gero",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gewa/index.htm",
        parkname: "George Washington Birthplace National Monument",
        address: "1732 Popes Creek Road Colonial Beach 22443",
        description:
          "Established to honor the 200th birthday of the first president of the United States, the Birthplace represents more than a century of local, state, and national efforts to memorialize Washington. The Washingtons shaped an American identity through their encounters and relationships with Native Americans, enslaved Africans, and other Europeans, all struggling to find their place in this world.",
        weather_description:
          "George Washington Birthplace can be very warm and humid in the summer months and cold and dry in the winter. Spring and fall are the best seasons to visit.",
        state: "VA",
        parkCode: "gewa",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gwca/index.htm",
        parkname: "George Washington Carver National Monument",
        address: "5646 Carver Road Diamond 64840",
        description:
          "The young child known as the 'Plant Doctor' tended his secret garden while observing the day-to-day operations of a 19th century farm. Nature and nurture ultimately influenced George on his quest for education to becoming a renowned agricultural scientist, educator, and humanitarian.",
        weather_description:
          "George Washington Carver National Monument is located in southwestern Missouri just outside of Diamond and about 10 miles from Joplin. Summer temperatures generally range from 75-100 degrees with high humidity. Winter temperatures generally range from 0-50 degrees with periods of intermittent freezing.",
        state: "MO",
        parkCode: "gwca",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gwmp/index.htm",
        parkname: "George Washington Memorial Parkway",
        address: "George Washington Memorial Parkway Headquarters McLean 22101",
        description:
          "The George Washington Memorial Parkway was designed for recreational driving. It links sites that commemorate important episodes in American history and preserve habitat for local wildlife. The parkway and its associated trails provide a scenic place to play and rest in the busy Washington, DC metropolitan area.",
        weather_description:
          "Summers on the parkway are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit and scattered afternoon thunderstorms. Please carry water while participating in physical activity and be prepared to take shelter from lightning. Winters on the parkway are generally cold, with nighttime lows frequently near freezing and occasional snowfall. Please be alert for snowplows and icy spots on roadways. Weather during spring and fall is generally moderate, but can change quickly.",
        state: "DC,MD,VA",
        parkCode: "gwmp",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gett/index.htm",
        parkname: "Gettysburg National Military Park",
        address: "1195 Baltimore Pike Gettysburg 17325",
        description:
          "The Battle of Gettysburg was a turning point in the Civil War, the Union victory that ended General Robert E. Lee's second and most ambitious invasion of the North. Often referred to as the 'High Water Mark of the Rebellion', Gettysburg was the Civil War's bloodiest battle and was also the inspiration for President Abraham Lincoln's immortal 'Gettysburg Address'.",
        weather_description:
          "https://www.nps.gov/gett/planyourvisit/weather.htm",
        state: "PA",
        parkCode: "gett",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gicl/index.htm",
        parkname: "Gila Cliff Dwellings National Monument",
        address: "26 Jim Bradford Trail Mimbres 88049",
        description:
          "For thousands of years, groups of nomadic people used the caves of the Gila River as temporary shelter. In the late 1200's, people of the Mogollon Culture decided it would be a good place to call home. They built rooms, crafted pottery and raised children in the cliff dwellings for about twenty years. Then the Mogollon moved on, leaving the walls for us as a glimpse into the past.",
        weather_description:
          "Weather is extremely variable. Summers are usually in the 90s F but approach 100° F. Winters have occasional snow or temperatures near 0° F. Thunderstorms are common in the summer and early fall, usually in the afternoon. Thunderstorms and lightning may cause temporary closures of the monument.",
        state: "NM",
        parkCode: "gicl",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/glba/index.htm",
        parkname: "Glacier Bay National Park & Preserve",
        address: "1 Park Road Gustavus 99826",
        description:
          "Covering 3.3 million acres of rugged mountains, dynamic glaciers, temperate rainforest, wild coastlines and deep sheltered fjords, Glacier Bay National Park is a highlight of Alaska's Inside Passage and part of a 25-million acre World Heritage Site—one of the world’s largest international protected areas. From sea to summit, Glacier Bay offers limitless opportunities for adventure and inspiration.",
        weather_description:
          "Summer temperatures average 50° to 60° F (10° to 15° C). Rain is the norm in lush southeast Alaska. It is best to be prepared to enjoy the park in any kind of weather, especially rain. Suggested clothing includes waterproof boots, rain gear, a hat, gloves, wool or pile layers or a warm coat. Good rain gear is essential here. April, May and June are usually the driest months of the year. September and October tend to be the wettest.",
        state: "AK",
        parkCode: "glba",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/glac/index.htm",
        parkname: "Glacier National Park",
        address: "64 Grinnell Drive West Glacier 59936",
        description:
          "Come and experience Glacier's pristine forests, alpine meadows, rugged mountains, and spectacular lakes. With over 700 miles of trails, Glacier is a hiker's paradise for adventurous visitors seeking wilderness and solitude. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road. Explore Glacier National Park and discover what awaits you.",
        weather_description:
          "Glacier's weather is highly variable and can be extreme. Expect warm sunny summer days and in the winter the temperatures can fall well below freezing. Glacier's geography, straddling the Continental Divide, sets the stage for clashes of two very different climates. Warm, wet Pacific air moves in from the west, and cold dry Arctic air from the northeast. They meet at the Divide.",
        state: "MT",
        parkCode: "glac",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/glca/index.htm",
        parkname: "Glen Canyon National Recreation Area",
        address: "691 Scenic View Rd. Page 86040",
        description:
          "Encompassing over 1.25 million acres, Glen Canyon National Recreation Area offers unparalleled opportunities for water-based & backcountry recreation. The recreation area stretches for hundreds of miles from Lees Ferry in Arizona to the Orange Cliffs of southern Utah, encompassing scenic vistas, geologic wonders, and a vast panorama of human history.",
        weather_description:
          "The weather in Glen Canyon National Recreation Area is usually typical for the high deserts. Summers are extremely hot with little, if any, shade. Winters are moderately cold with night time lows often below freezing. Spring weather is highly variable and unpredictable with extended periods of winds. Fall weather is usually nice and mild, a great time to beat the heat (and the crowds!).",
        state: "AZ,UT",
        parkCode: "glca",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/glec/index.htm",
        parkname: "Glen Echo Park",
        address: "7300 MacArthur Boulevard Glen Echo 20812",
        description:
          "Glen Echo Park began in 1891 as a National Chautauqua Assembly 'to promote liberal and practical education.' By 1911, it transformed into DC's premier amusement park until it closed in 1968. Since 1971, the National Park Service has owned and operated the site and today, with the help of the Glen Echo Park Partnership for Arts and Culture, offers year-round cultural and recreational activities.",
        weather_description:
          "Weather for Washington, D.C. and Bethesda, Maryland areas.",
        state: "MD",
        parkCode: "glec",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/glde/index.htm",
        parkname: "Gloria Dei Church National Historic Site",
        address: "916 S. Swanson Street Philadelphia 19147",
        description:
          "Before Pennsylvania there was New Sweden. Discover this last historic link to a forgotten past. Visit the church's pastoral surroundings and its burial ground of patriots and ordinary citizens alike.",
        weather_description:
          "Summers are typically hot and muggy, fall and spring are generally mild, and winter is cold. Snowfall is highly variable, with some winters bringing only light snow and others bringing several major snowstorms, with the normal seasonal snowfall standing at 22.4 in (57 cm). Precipitation is generally spread throughout the year, with eight to twelve wet days per month.",
        state: "PA",
        parkCode: "glde",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/goga/index.htm",
        parkname: "Golden Gate National Recreation Area",
        address:
          "Golden Gate National Recreation Area San Francisco 94123-0022",
        description:
          "Experience a park so rich it supports 19 distinct ecosystems with over 2,000 plant and animal species. Go for a hike, enjoy a vista, have a picnic or learn about the centuries of overlapping history from California’s indigenous cultures, Spanish colonialism, the Mexican Republic, US military expansion and the growth of San Francisco. All of this and more awaits you, so get out and find your park.",
        weather_description:
          "Winter is characterized by sporadic rain and cool weather punctuated by brilliant sunshine. In winter the grass greens. Trees and flowers dormant through winter start blooming in late February or early March and last until May or June. By July, summer fog predominates in most coastal areas of the park. Grasses and plants have now turned to the golden brown and muted grays characteristic of California summer and fall. September and October skies are clear and sunshine is abundant everywhere in the park.",
        state: "CA",
        parkCode: "goga",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gosp/index.htm",
        parkname: "Golden Spike National Historical Park",
        address: "6200 North 22300 West Promontory, Utah 84307",
        description:
          "One of the greatest technological achievements of the 19th century, the completion of the first transcontinental railroad across the United States. Visitors to the park can see the location of the Last Spike Site, 1869 railroad construction features, walk or drive on the original railroad grade, and get an up close view of Victorian era replica locomotives.",
        weather_description:
          "Golden Spike National Historical Park is located in a high desert environment in the Promontory Mountains near the north end of the Great Salt Lake. The temperatures can reach over 100 degrees in the summer and into single digits in the winter, which much of the park blanketed in snow. Visitors are recommended to check forecasts before coming to our site and come prepared for changing weather conditions.",
        state: "UT",
        parkCode: "gosp",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gois/index.htm",
        parkname: "Governors Island National Monument",
        address: "Governors Island New York 10004-1921",
        description:
          "From 1794 to 1966, the U.S. Army on Governors Island was part of the social, political, and economic tapestry of New York City. Today, the island is a vibrant summer seasonal venue of art, culture, and performance against the backdrop of two centuries of military heritage and the skyline of one of the great cities of the world. The island is open to the public, May 1st thru Oct 31st",
        weather_description:
          "During the summer public access season from May to September, the weather is typical of the mid-Atlantic region. Thunderstorms can come quickly with short downpours. There may be extended periods of heat or humidity that might last a week or more. The island is generally a few degrees cooler than the city due to the fairly constant breeze.",
        state: "NY",
        parkCode: "gois",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/grca/index.htm",
        parkname: "Grand Canyon National Park",
        address: "20 South Entrance Road Grand Canyon 86023",
        description:
          "Located in Arizona, Grand Canyon National Park encompasses 277 miles (446 km) of the Colorado River and adjacent uplands. The park is home to much of the immense Grand Canyon; a mile (1.6 km) deep, and up to 18 miles (29 km) wide. Layered bands of colorful rock reveal millions of years of geologic history. Grand Canyon is unmatched in the incomparable vistas it offers visitors from the rim.",
        weather_description:
          "This weather varies with cold winters and mild pleasant summers, moderate humidity, and considerable diurnal temperature changes at the higher elevations, with hot and drier summers at the bottom of the Grand Canyon along with cool damp winters. Summer thunderstorms and winter snowfall adds to the weather variety in this region.",
        state: "AZ",
        parkCode: "grca",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/para/index.htm",
        parkname: "Grand Canyon-Parashant National Monument",
        address: "345 East Riverside Drive St. George 84790",
        description:
          "Take a lonely and rocky two-track road in a 4x4 to the edge of the Grand Wash Cliffs. Find a stunning solitary vista deep into the Grand Canyon. Relax in the shade of ponderosas at Mt. Trumbull. Touch ancient waters at Pakoon Springs in one of the driest places in the world. Parashant is remote. There are no crowds here. Be equipped to leave pavement, cell service, and the 21st century behind.",
        weather_description:
          "Parashant is split between low elevation Mojave Desert on the west side and high elevation pinyon/juniper/ponderosa highlands on the east side. Expect sun on average 310 days per year. The summer months of June through September are very hot on the west side with highs above 100°F daily (80°F+ at night) below 2,500 feet. The high elevation east side is ~15°F cooler. Expect heavy afternoon monsoon storms June - September. Roads often stay muddy/icy above 5,500 feet December - February.",
        state: "AZ",
        parkCode: "para",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/grpo/index.htm",
        parkname: "Grand Portage National Monument",
        address: "170 Mile Creek Road Grand Portage 55605",
        description:
          "Travel into the past to discover the present. Explore the partnership of the Grand Portage Ojibwe and the North West Company during the North American fur trade and the NPS today. Follow pathways into a distant time. Experience the sights and smells of a bustling depot reconstructed in its exact location. Hear the beat of the drum echo over Gichigami - Lake Superior.",
        weather_description:
          "Short, warm summers and long, cold winters define the climate of northern Minnesota. Average range of summer temperature is from 55°F to 78°F in July and average range of winter temperatures is from –11°F to 12°F in January. Average annual precipitation in Grand Portage, MN is about 32 inches.",
        state: "MN",
        parkCode: "grpo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/grte/index.htm",
        parkname: "Grand Teton National Park",
        address: "103 Headquarters Loop Moose 83012",
        description:
          "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands as a monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River, and enjoy the serenity of this remarkable place.",
        weather_description:
          "Grand Teton National Park has long, cold winters—snow and frost are possible any month. April, May, & June - Mild days and cool nights alternate with rain and snow. July & August - Warm days and cool nights prevail, with afternoon thundershowers common. September, October, & November - Sunny days and cold nights alternate with rain and occasional snowstorms. December to April - Between storms the days are sunny and nights are frigid. Snow blankets the mountains and valley.",
        state: "WY",
        parkCode: "grte",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/grko/index.htm",
        parkname: "Grant-Kohrs Ranch National Historic Site",
        address: "251 Grant Circle Deer Lodge 59722",
        description:
          "Wide open spaces, the hard-working cowboy, his spirited cow pony, and vast herds of cattle are among the strongest symbols of the American West. Once the headquarters of a 10 million acre cattle empire, Grant-Kohrs Ranch National Historic Site preserves these symbols and commemorates the role of cattlemen in American history.",
        weather_description:
          "Spring: Temperatures can fluctuate greatly. Sub-freezing temperatures in the morning can give way to mild days. Snow in early spring, rain in late season. Summer: Temperatures can average 70-80 F, but can reach highs of 100 F. Rain rare. Dry and hot. Fall: Temperatures can fluctuate greatly. Sub-freezing mornings can give way to mild days. Rain in early fall likely. Winter: Temperature can fall to -30 F, with highs of 10-20 F. Snow is possible. Cold weather gear is highly recommended.",
        state: "MT",
        parkCode: "grko",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/grba/index.htm",
        parkname: "Great Basin National Park",
        address: "Great Basin National Park Baker 89311",
        description:
          "From the 13,063-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. There's a whole lot more than just desert here!",
        weather_description:
          "There is almost an 8,000 ft (2,400 m) difference in elevation between Wheeler Peak and the valley floor. Weather conditions in the park vary with elevation. In late spring and early summer, days in the valley may be hot, yet the snow pack may not have melted in the higher elevations. The Great Basin is a desert, with low relative humidity and sharp drops in temperature at night. In the summer, fierce afternoon thunderstorms are common. It can snow any time of the year at high elevations.",
        state: "NV",
        parkCode: "grba",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/greg/index.htm",
        parkname: "Great Egg Harbor River",
        address: "Route 50 Estell Manor 08330",
        description:
          "The River gradually widens as it picks up the waters of 17 tributaries on its way to Great Egg Harbor and the Atlantic Ocean. Established by Congress in 1992, nearly all of this 129-mile river system rests within the Pinelands National Reserve. This National Park Service unit is unusual in that local jurisdictions continue to administer the lands.",
        weather_description:
          "Temperate, with a moderating influence of the Atlantic Ocean.",
        state: "NJ",
        parkCode: "greg",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/grfa/index.htm",
        parkname: "Great Falls Park",
        address: "9200 Old Dominion Dr. McLean 22102",
        description:
          "At Great Falls, the Potomac River builds up speed and force as it falls over a series of steep, jagged rocks and flows through the narrow Mather Gorge. The Patowmack Canal offers a glimpse into the early history of this country. Great Falls Park has many opportunities to explore history and nature, all in a beautiful 800-acre park only 15 miles from the Nation's Capital.",
        weather_description:
          "The Washington, D.C. area has a four-season Mid-Atlantic climate. Summertime is warm and humid, while winter can be cold and snowy. Precipitation averages 2-4” monthly, year-round.",
        state: "VA",
        parkCode: "grfa",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/grsa/index.htm",
        parkname: "Great Sand Dunes National Park & Preserve",
        address: "Visitor Center Mosca 81146",
        description:
          "Open all day and night year round, the tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, conifer and aspen forests, alpine lakes, and tundra. Experience a starry sky on moonless nights, or a surreal walk on the dunes under bright full moonlight.",
        weather_description:
          "Temperatures are relatively cool all year, thanks to the park and preserve's high elevation. Conditions are most often calm, but winds can arise, especially in spring and during storm fronts. Daytime temperatures feel warmer here year round due to intense high-altitude sunlight, and a scorching mid-day summer sand surface. Plan to explore the dunes morning or evening during summer. Nights are cool in summer, and frigid in winter. Visit the Great Sand Dunes website for the most accurate weather forecasts.",
        state: "CO",
        parkCode: "grsa",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/grsm/index.htm",
        parkname: "Great Smoky Mountains National Park",
        address: "Sugarlands Visitor Center Gatlinburg 37738",
        description:
          "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park.",
        weather_description:
          "Elevations in the park range from approximately 875 feet to 6,643 feet and the topography can drastically affect local weather. Temperatures can vary 10-20 degrees Fahrenheit from mountain base to top, and clear skies lower down do not guarantee equally pleasant weather at higher elevations. Visit http://www.nps.gov/grsm/planyourvisit/weather.htm for seasonal weather information and links to local forecasts.",
        state: "NC,TN",
        parkCode: "grsm",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/grsp/index.htm",
        parkname: "Green Springs",
        address:
          "Western Louisa County Multiple Privately Owned Properties 23093",
        description:
          "Green Springs National Historic Landmark District in Virginia’s Piedmont encompasses over 14,000 acres. Its landscapes and structures, privately owned today but viewable from public roads, offer a continuum of rural vernacular architecture with minimal alteration. Many of the farmsteads, often dating to the 19th century and connecting to one another visually, are preserved through easements.",
        weather_description:
          "Louisa County, Virginia enjoys a temperate climate with hot, humid summers and cool winters.",
        state: "VA",
        parkCode: "grsp",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gree/index.htm",
        parkname: "Greenbelt Park",
        address: "6565 Greenbelt Road Greenbelt 20770",
        description:
          "Greenbelt Park is located in suburban Greenbelt, Maryland. Visit to enjoy affordable camping, peaceful surroundings and National Park Service hospitality. Greenbelt Park has a 174 site campground, nine miles of trails and three picnic areas.",
        weather_description:
          "The Washington, D.C. area has a four-season Mid-Atlantic climate. Summertime is warm and humid, while winter can be cold and snowy. Spring: During these months of transition, the weather can alternate from warm, humid air coming from the south to cold, dry air coming from the northwest. Be prepared for changing conditions. Summer: The warmest months are June, July, and August, with average highs in the 80s (~31 ?) combined with high humidity. Fall: Expect a drop in temperature and humidity in September",
        state: "MD",
        parkCode: "gree",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/gumo/index.htm",
        parkname: "Guadalupe Mountains National Park",
        address: "400 Pine Canyon Salt Flat 79847",
        description:
          "Come experience mountains and canyons, desert and dunes, night skies and spectacular vistas within a place unlike any other. Guadalupe Mountains National Park protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, an environmentally diverse collection of flora and fauna, and the stories of lives shaped through conflict, cooperation and survival.",
        weather_description:
          "Weather in the Guadalupe Mountains can change in an instant. In the Spring and Summer, average temperatures vary with highs between 80F-100F+ with evening lows in the 40F-60F range. The Fall and Winter bring milder temperatures with highs in between 50F-70F with evening lows in the 30F-50F range.",
        state: "TX",
        parkCode: "gumo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/guco/index.htm",
        parkname: "Guilford Courthouse National Military Park",
        address: "2332 New Garden Road Greensboro 27410",
        description:
          "'I never saw such fighting since God made me. The Americans fought like demons.' - Lt. General Charles, Earl Cornwallis On March 15, 1781, six years into the American Revolution, General Greene and Lord Cornwallis' troops faced off at a small courthouse community. This 2.5 hour battle would change the course of the Southern Campaign of the American Revolution.",
        weather_description:
          "https://www.nps.gov/guco/planyourvisit/weather.htm Summers are warm to hot and humid with the occasional thunderstorm. Spring and Fall are cool with rainy periods. Winter is mild and cold with snow and ice possible in January and February. Wear comfortable clothing for the season and good walking shoes year round!",
        state: "NC",
        parkCode: "guco",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/guis/index.htm",
        parkname: "Gulf Islands National Seashore",
        address: "1801 Gulf Breeze Parkway Gulf Breeze 32563",
        description:
          "What is it that entices people to the sea? Poet John Masefield wrote, “I must go down to the seas again, for the call of the running tide is a wild call and a clear call that may not be denied.” Millions of visitors are drawn to the islands in the northern Gulf of Mexico for the white sandy beaches, the aquamarine waters, a boat ride, a camping spot, a tour of an old fort, or a place to fish.",
        weather_description:
          "Weather along the northern coast of the Gulf of Mexico can change quickly. During the winter temperatures range from 40-70 degrees fahrenheit, rain is less common than other seasons. Snow and freezing temperatures are not common. During the summer temperatures range from 70-100+ degrees fahrenheit. Rain is common during the summer with many thunderstorms. Hurricanes impact the area during the tropical storm season between June and November. Tornadoes can impact the area during the Spring and Fall.",
        state: "FL,MS",
        parkCode: "guis",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/hafo/index.htm",
        parkname: "Hagerman Fossil Beds National Monument",
        address: "221 N State St Hagerman 83332",
        description:
          "Did you know that horses evolved in North America? The Hagerman horse, Equus simplicidens, is the first true one-toed horse. It's the park's most famous fossil, but we have fossils from over two hundred other species too! From the saber-toothed cat, mastodon, bear, camel, and ground sloth, to smaller animals like rodents and frogs, the scientific study of Pliocene fossils is the key to Hagerman.",
        weather_description:
          "Hagerman, Idaho, gets 10 inches of rain per year. On average, there are 213 sunny days per year in Hagerman, Idaho. The July high is around 94 degrees. The January low is 22. Our comfort index, which is based on humidity during the hot months, is a 78 out of 100, where higher is more comfortable. The US average on the comfort index is 44.",
        state: "ID",
        parkCode: "hafo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/hale/index.htm",
        parkname: "Haleakal&#257; National Park",
        address: "Haleakalā National Park Kula 96790",
        description:
          "This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry.",
        weather_description:
          "On any given day, the temperatures in the park can range from a high of 80°F (27°C) in Kīpahulu to a low of 30°F (-1°C) at the summit. In either area clouds and rain can quickly replace warm sunshine. Weather in the high-elevation summit and wilderness areas of the park is highly unpredictable and changes often. Cool temperatures, intense solar radiation, and rapidly moving clouds are characteristic. On average, the temperature drops about 3°F for every 1,000 foot rise in elevation.",
        state: "HI",
        parkCode: "hale",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/hagr/index.htm",
        parkname: "Hamilton Grange National Memorial",
        address: "414 West 141st Street New York 10031",
        description:
          "Alexander Hamilton created the tools for the success of the United States. From his humble beginnings as an orphan on the Caribbean island of Nevis, he became George Washington's right-hand man. Come visit Hamilton Grange and find out more about this controversial founder and the country home that he built on his Harlem estate.",
        weather_description:
          "New York City has a temperate climate, and temperatures in northern Manhattan are frequently several degrees cooler than those in the southern part of the city.",
        state: "NY",
        parkCode: "hagr",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/hamp/index.htm",
        parkname: "Hampton National Historic Site",
        address: "535 Hampton Lane Towson 21286",
        description:
          "Once possibly the largest private home in America by 1790, the Hampton mansion serves as a grand example of late-Georgian architecture in America. Hampton is also the story of its people, as the estate evolved through the actions of the Ridgely family, enslaved African Americans, European indentured servants, and paid laborers within a nation struggling to define its own concept of freedom.",
        weather_description:
          "Weather during the spring and fall months tend to be mild. Visitors can expect mild to severe seasonal weather during the winter and summer months. Inclement weather may impact park hours of operation year round. Refer to the park alerts or call ahead to confirm operating hours.",
        state: "MD",
        parkCode: "hamp",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/haha/index.htm",
        parkname: "Harmony Hall",
        address: "10702 Livingston Rd. Fort Washington 20744",
        description:
          "The 18th century Harmony Hall mansion is located on a 62.5-acre open pasture land estate along the Potomac River. This estate was purchased by the National Park Service in 1966, to preserve southern Maryland cultural heritage. Surrounded by a rich landscape, it offers visitors many chances to connect with Colonial History. The park also home to the remains of the Want Water House and canal.",
        weather_description:
          "Summers are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit and scattered afternoon thunderstorms. Winters are generally cold, with nighttime lows frequently near freezing and occasional snowfall. Weather during spring and fall is generally moderate, but can change quickly..",
        state: "MD",
        parkCode: "haha",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/hafe/index.htm",
        parkname: "Harpers Ferry National Historical Park",
        address: "Harpers Ferry National Historical Park Harpers Ferry 25425",
        description:
          "A visit to this quaint, historic community, at the confluence of the Potomac and Shenandoah rivers, is like stepping into the past. Stroll the picturesque streets, visit exhibits and museums, or hike our trails and battlefields. Spend a day or a weekend. We have something for everyone, so come and discover Harpers Ferry!",
        weather_description:
          "Harpers Ferry experiences all four seasons - the cold and snow of winter, the rain and flowers of spring, the humidity and sunshine of summer, and the chill and leave change of fall. We will strive to keep you up-to-date as Harpers Ferry's landscape changes with the seasons. To see the current weather or the forecasted weather for Harpers Ferry, please visit the National Weather Service site and set the zip code to 25425.",
        state: "WV,VA,MD",
        parkCode: "hafe",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/hart/index.htm",
        parkname: "Harriet Tubman National Historical Park",
        address: "180 South Street Auburn 13021",
        description:
          "Harriet Tubman was guided by a deep faith and devotion to family, freedom, and community. After emancipating herself and members of her family, she moved them from Ontario, Canada to Fleming and Auburn, New York in 1859. Central New York was a center for progressive thought, abolition, and women’s suffrage where Tubman continued to fight for human rights and dignity until she died in 1913.",
        weather_description:
          "Auburn, New York has four distinct seasons. Fall and spring are usually mild and summers tend to be sunny, warm, and humid. Winter weather is variable and conditions can change quickly. Snow in November is not uncommon. The heaviest snowfall tends to be in January with an average of 33”.",
        state: "NY",
        parkCode: "hart",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/hatu/index.htm",
        parkname:
          "Harriet Tubman Underground Railroad National Historical Park",
        address: "4068 Golden Hill Road Church Creek 21622",
        description:
          "Harriet Tubman was a deeply spiritual woman who lived her ideals and dedicated her life to freedom. She is the Underground Railroad’s best known conductor and before the Civil War repeatedly risked her life to guide nearly 70 enslaved people north to new lives of freedom. This new national historical park preserves the same landscapes that Tubman used to carry herself and others away from slavery.",
        weather_description:
          "Cambridge, Maryland generally experiences warm, humid summers and mild winters. Average summertime highs are in the 80s, with evening lows in the 60s. Winter temperatures usually range from the 30s to the 50s. Spring and fall are variable, but tend to be in the 50s and 60s. Precipitation is spread throughout the year. For more information, see: http://forecast.weather.gov/MapClick.php?lat=38.37100441991913&lon=-76.13347536809295#.WCNeYWorLIU",
        state: "MD",
        parkCode: "hatu",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/hstr/index.htm",
        parkname: "Harry S Truman National Historic Site",
        address: "219 North Delaware Street (Truman Home) Independence 64050",
        description:
          "President Harry S Truman took America from its traditional isolationism into the age of international involvement. Despite his power, he never forgot where he came from. Today, visitors can experience the surroundings Truman knew as a young man of modest ambition through his political career and final years as a former president.",
        weather_description:
          "Located on the western edge of Missouri, the park enjoys each of the four seasons. Early spring brings frequent and rapid fluctuations in weather. The summer season has warm days, periods of high heat and humidity, and mild nights. The fall season is normally mild with sunny days and cool nights. Winters can be cold. The January low averages 21 degrees. The area receives a yearly average of 37 inches of rain per year and around 18 inches of snow.",
        state: "MO",
        parkCode: "hstr",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/havo/index.htm",
        parkname: "Hawai'i Volcanoes National Park",
        address: "1 Crater Rim Drive Hawaii National Park 96718",
        description:
          "Hawai‘i Volcanoes National Park protects some of the most unique geological, biological, and cultural landscapes in the world. Extending from sea level to 13,677 feet, the park encompasses the summits of two of the world's most active volcanoes - Kīlauea and Mauna Loa.",
        weather_description:
          "The weather at Kīlauea's summit (4000' elevation) varies daily and may be rainy and chilly any time of the year. Temperature varies by elevation. At the summit of the volcano, temperatures may be 12 to 15 degrees cooler than at sea level. The coastal plain at the end of Chain of Craters Road, where lava crossed the road in 2003, is often hot, dry, and windy with the possibility of passing showers.",
        state: "HI",
        parkCode: "havo",
        createdAt: "2021-02-06T13:28:36.486",
        updatedAt: "2021-02-06T13:28:36.486",
      },
      {
        url: "https://www.nps.gov/heho/index.htm",
        parkname: "Herbert Hoover National Historic Site",
        address: "110 Parkside Drive West Branch 52358",
        description:
          "Orphaned at age nine, Herbert Hoover left West Branch never to live here again. In later years, he returned to his humble birthplace to celebrate his long career of public service. A memorial landscape remains to tell his story: how community, hard work, honesty, and usefulness to others opened a world of opportunity— and the presidency of the United States— to a child of simple beginnings.",
        weather_description:
          "Spring and fall are mild with moderate temperatures. Average high temperatures in the spring and fall are between 50° and 60° F, with lows from 40° F to 50° F. Summer is hot and humid with average highs around 85° F. Winter can be cold, windy, and snowy with highs averaging 30° F or lower. Rain and thunderstorms are most frequent in the spring and summer.",
        state: "IA",
        parkCode: "heho",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jame/index.htm",
        parkname:
          "Historic Jamestowne Part of Colonial National Historical Park",
        address: "1368 Colonial Parkway Jamestown 23081",
        description:
          "Walk in the steps of Captain John Smith and Pocahontas where a successful English colonization of North America began. Despite early struggles to survive, the 1607 settlement evolved into a prosperous colony. As the colony expanded, the Virginia Indians were pushed out of their homeland. In 1619, the arrival of Africans was recorded, marking the origin of slavery in English North America.",
        weather_description:
          "http://www.nps.gov/jame/planyourvisit/weather.htm NUMBER TO PHONE IF SITES ARE CLOSED DUE TO INCLEMENT WEATHER: For closures in Colonial National Historical Park please phone this 24 hour phone number (757) 856-1240.",
        state: "VA",
        parkCode: "jame",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/hofr/index.htm",
        parkname: "Home Of Franklin D Roosevelt National Historic Site",
        address: "114 Estates Lane Hyde Park 12538",
        description:
          "Home to the 32nd and longest-serving president of the United States, Franklin D. Roosevelt returned to Hyde Park often, drawing on this place to renew his spirit during times of personal and political crisis. Explore the Roosevelt saga in the homes of Franklin and Eleanor Roosevelt, the exhibits at the nation’s first Presidential Library, and over a thousand acres of gardens and trails.",
        weather_description:
          "Spring: Temperatures usually range from 40°F to 70°F. Rain is not uncommon. Summer: Temperatures usually range from 70° F to 100° F. Humidity can be high throughout the summer months with periods of rain. Fall: Temperatures usually range from 40° F to 70° F. Peak leaf season is mid-October. Rain is not uncommon. Winter: Temperatures usually range from 30° F to 50°F. Ice, Freezing Rain and Snow are not uncommon.",
        state: "NY",
        parkCode: "hofr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/home/index.htm",
        parkname: "Homestead National Historical Park",
        address: "8523 West State Highway 4 Beatrice 68310",
        description:
          "The Homestead Act of 1862 transformed the world. Millions were invited to file claims including, families, immigrants, single women, and freed slaves. Over 10 percent of the United States was homesteaded! The land, long inhabited by American Indian cultures, changed forever. Homesteaders created settlements and farms, drove industrial advancement, and built our nation chasing the American Dream.",
        weather_description:
          "https://forecast.weather.gov/MapClick.php?lat=40.287780000000055&lon=-96.83391999999998#.X7vZ2BNKjq4",
        state: "NE",
        parkCode: "home",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/hono/index.htm",
        parkname: "Honouliuli National Historic Site",
        address: "National Park Service Honolulu 96818",
        description:
          "Although not yet open to the public, Honouliuli National Historic Site will tell the history of internment, martial law, and the experience of prisoners of war in Hawai‘i during World War II. Honouliuli National Historic Site will be a place to reflect on wartime experiences and recommit ourselves to the pursuit of freedom and justice.",
        weather_description:
          "The temperature ranges from 70°F/22°C to 85°F/29°C year round with light tropical showers common.",
        state: "HI",
        parkCode: "hono",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/hocu/index.htm",
        parkname: "Hopewell Culture National Historical Park",
        address: "16062 State Route 104 Chillicothe 45601",
        description:
          "Earthen mounds and embankments forming huge geometric enclosures grace the landscape of the Ohio River Valley. These monumental structures were built by Native American hands almost 2,000 years ago. Hopewellian people gathered at these earthworks for feasts, funerals and rites of passage. Come learn about these sacred spaces and reflect upon the lives of these American Indians.",
        weather_description:
          "The park lies in a humid continental zone with a generally temperate climate. Winters are mildly cold with average temperatures around 30 degrees (F). Summers are hot and humid with an average temperature around 75 degrees (F). Average annual total rainfall is just under 38'. Snowfall in the winter is generally light with an average total snowfall of less than 24'.",
        state: "OH",
        parkCode: "hocu",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/hofu/index.htm",
        parkname: "Hopewell Furnace National Historic Site",
        address: "2 Mark Bird Lane Elverson 19520",
        description:
          "Hopewell Furnace showcases an early American landscape of industrial operations from 1771-1883, Hopewell and other 'iron plantations' laid the foundation for the transformation of the United States into an industrial giant for the time. The park's 848 acres and historic structures illustrate the business, technology and lifestyle of our growing nation.",
        weather_description:
          "Summers are generally humid with daily temps. averaging 83 degrees (F) for a high and 60 degrees (F) for a low. Daily temps. in January average 38 degrees (F) for a high and 20 degrees (F) for a low. Precipitation averages 3-5 inches of rain per month during spring, summer and autumn. During winter conditions can be icy with snow accumulating up to several inches.",
        state: "PA",
        parkCode: "hofu",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/hobe/index.htm",
        parkname: "Horseshoe Bend National Military Park",
        address: "11288 Horseshoe Bend Road Daviston 36256",
        description:
          "On 27 March 1814, Major General Andrew Jackson ‘s army of 3,300 men attacked Chief Menawa’s 1,000 Red Stick Creek warriors fortified in a horseshoe shaped bend of the Tallapoosa River. Over 800 Red Sticks died that day. The battle ended the Creek War, resulted in a land cession of 23,000,000 acres to the United States and created a national hero of Andrew Jackson.",
        weather_description:
          "Summers can be extremely hot and humid and winters can be damp, wet, and cold, with occasional hard freezes. During the summer season visitors should dress in light, comfortable clothing, wear comfortable shoes and use sunscreen and insect repellant. Stay hydrated to avoid risk of heat cramps, heat exhaustion and heatstroke. A bottle refill station is available in the visitor center. In the spring and fall visitors should have a light jacket available as temperatures can drop suddenly.",
        state: "AL",
        parkCode: "hobe",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/hosp/index.htm",
        parkname: "Hot Springs National Park",
        address: "369 Central Avenue Hot Springs 71901",
        description:
          "Hot Springs National Park has a rich cultural past. The grand architecture of our historic bathhouses is equally matched by the natural curiosities that have been drawing people here for hundreds of years. Ancient thermal springs, mountain views, incredible geology, forested hikes, and abundant creeks – all in the middle of town – make Hot Springs National Park a unique and beautiful destination.",
        weather_description:
          "Average temperatures in Hot Springs can range from about 90°F (32°C) to less than 27°F (-2.7°C). Summer days can be hot and humid, with heat index values up to 110ºF (43ºC). Winter wind chills can make temperatures feel much colder, as low as 15ºF (-9.4ºC). Spring and fall typically have the most rainfall. Generally, Hot Springs experiences mild weather throughout the year.",
        state: "AR",
        parkCode: "hosp",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/hove/index.htm",
        parkname: "Hovenweep National Monument",
        address:
          "Along the border between southeast Utah and southwest Colorado Cortez 81321",
        description:
          "Once home to over 2,500 people, Hovenweep includes six prehistoric villages built between A.D. 1200 and 1300. Explore a variety of structures, including multistory towers perched on canyon rims and balanced on boulders. The construction and attention to detail will leave you marveling at the skill and motivation of the builders.",
        weather_description:
          "Hovenweep is part of the Colorado Plateau, a 'high desert' region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day. The temperate (and most popular) seasons are spring (April-May) and fall (mid-September-October), when daytime highs average 60 to 80 F and lows average 30 to 50 F. Summer temperatures often exceed 100 F, making strenuous exercise difficult. Winters are cold, with highs averaging 30 to 50 F, and lows averaging 0 to 20 F.",
        state: "CO,UT",
        parkCode: "hove",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/hutr/index.htm",
        parkname: "Hubbell Trading Post National Historic Site",
        address: "1/2 mile west of Hwy 191/264 Ganado 86505-0150",
        description:
          "The squeaky wooden floor greets your entry into the oldest operating Trading Post on the Navajo Nation. When your eyes adjust to the dim light in the 'bullpen' you find you’ve just entered a mercantile. Hubbell Trading Post has been serving Ganado selling goods and Native American Art since 1878. Discover Hubbell Trading Post NHS, sheep, rugs, jewelry and so much more..",
        weather_description:
          "Spring is normally windy. Summer can reach into high 90s with thunderstorms beginning in July into August. Fall is cooling off. Last couple of Winters have been dry and with a couple of inches of snow.",
        state: "AZ",
        parkCode: "hutr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/inup/index.htm",
        parkname: "I&#241;upiat Heritage Center",
        address: "5421 North Star Street Barrow 99723",
        description:
          "On the rooftop of the world, the Iñupiat Heritage Center in Barrow, Alaska, tells the story of the Iñupiat people. They have thrived for thousands of years in one of the harshest climates on Earth, hunting the bowhead, or 'Agviq.' In the 19th century, these lonely seas swarmed with commercial whalemen from New England, who also sought the bowhead for its valuable baleen and blubber.",
        weather_description:
          "Owing to its location 320 miles (515 km) north of the Arctic Circle, Barrow's climate is cold and dry, classified as a polar climate (Köppen ET). Winter weather can be extremely dangerous because of the combination of cold and wind, while summers are cool even at their warmest.",
        state: "AK",
        parkCode: "inup",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/iafl/index.htm",
        parkname: "Ice Age Floods National Geologic Trail",
        address: "Superintendent Coulee Dam 99116",
        description:
          "'At the end of the last Ice Age, some 12,000 to 17,000 years ago, a series of cataclysmic floods occurred in what is now the northwest region of the United States, leaving a lasting mark of dramatic and distinguishing features on the landscape of parts of the States of Montana, Idaho, Washington and Oregon.' Public Law 111-11, March 30, 2009",
        weather_description:
          "The National Geologic Trail is a collection of sites stretched across a four state area, the weather will vary from site to site. Please check the weather for your local region, or the region you'll be visiting, through their respective sites.",
        state: "WA,OR,ID,MT",
        parkCode: "iafl",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/iatr/index.htm",
        parkname: "Ice Age National Scenic Trail",
        address: "8075 Old Sauk Pass Road Cross Plains 53528",
        description:
          "A mere 15,000 years ago during the Ice Age, much of North America lay under a huge glacier. Mammoths, saber tooth cats and cave lions roamed the earth! Some of the best evidence of this glacier is found in Wisconsin such as the state’s many lakes, river valleys, gently rolling hills, and ridges. The nearly 1,200 mile Ice Age National Scenic Trail, established in 1980, traces the glacier's edge.",
        weather_description:
          "Wisconsin has four distinctly different seasons. Wisconsin's continental climate means this state enjoys a little bit of everything, weather-wise. Summers are generally warm and pleasant, while the area is covered with a thick blanket of white snow in winter.",
        state: "WI",
        parkCode: "iatr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/inde/index.htm",
        parkname: "Independence National Historical Park",
        address: "599 Market Street Philadelphia 19106",
        description:
          "The park represents the founding ideals of the nation, and preserves national and international symbols of freedom and democracy, including Independence Hall and the Liberty Bell. The Declaration of Independence and U.S. Constitution were both debated and signed inside Independence Hall, a UNESCO World Heritage Site.",
        weather_description:
          "Summers are typically hot and muggy, fall and spring are generally mild, and winter is cold. Snowfall is highly variable, with some winters bringing only light snow and others bringing several major snowstorms, with the normal seasonal snowfall standing at 22.4 in (57 cm). Precipitation is generally spread throughout the year, with eight to twelve wet days per month.",
        state: "PA",
        parkCode: "inde",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/indu/index.htm",
        parkname: "Indiana Dunes National Park",
        address: "1215 SR-49 Chesterton 46304",
        description:
          "Indiana Dunes National Park hugs 15 miles of the southern shore of Lake Michigan and has much to offer. Whether you enjoy scouting for rare species of birds or flying kites on the sandy beach, the national park's 15,000 acres will continually enchant you. Hikers will enjoy 50 miles of trails over rugged dunes, mysterious wetlands, sunny prairies, meandering rivers and peaceful forests.",
        weather_description:
          "On average, the warmest month is July and the highest recorded temperature was 105F in 1934. The coolest month is January, with the lowest recorded temperature of -25F in 1985. June sees the most precipitation with an average rainfall of 4.66 Inches.",
        state: "IN",
        parkCode: "indu",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/isro/index.htm",
        parkname: "Isle Royale National Park",
        address: "800 East Lakeshore Drive Houghton 49931",
        description:
          "Explore a rugged, isolated island, far from the sights and sounds of civilization. Surrounded by Lake Superior, Isle Royale offers unparalleled solitude and adventures for backpackers, hikers, boaters, kayakers, canoeists and scuba divers. Here, amid stunning scenic beauty, you'll find opportunities for reflection and discovery, and make memories that last a lifetime.",
        weather_description:
          "Isle Royale National Park is a remote island wilderness in the middle of Lake Superior. Weather influences traveling to and from the island, as well as your trip once you arrive. For the most up-to-date weather information, call (906) 482-0984 or email isro_parkinfo@nps.gov prior to your trip.",
        state: "MI",
        parkCode: "isro",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jaga/index.htm",
        parkname: "James A Garfield National Historic Site",
        address: "8095 Mentor Avenue Mentor 44060",
        description:
          "A front porch can serve many purposes. For some, it is a place to enjoy the breeze on a warm summer night. For others, a perch from which to keep eyes on what's happening in their neighborhood. In 1880, James Garfield used his front porch as a platform to greet thousands of well-wishers during his presidential campaign. Today, the porch serves as a gateway to the story of the Garfield family.",
        weather_description:
          "Winter tends to be cold with snow and ice from January - early March. Summers are comfortable, but can be humid and reach into the 90's. There is a 100 yard walk between the Visitor Center and Garfield home; visitors are advised to check weather conditions prior to their visit.",
        state: "OH",
        parkCode: "jaga",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jela/index.htm",
        parkname: "Jean Lafitte National Historical Park and Preserve",
        address: "419 Decatur St New Orleans 70130",
        description:
          "In Jean Lafitte's day, silver and gold filled a pirate's treasure chest, but today's treasures are people, places, and memories. Discover New Orleans’ rich cultural mix. Learn Cajun traditions from people who live them. Watch an alligator bask on a bayou’s bank. Walk in the footsteps of the men who fought at 1815’s Battle of New Orleans. Follow the link to discover the treasure of Jean Lafitte.",
        weather_description:
          "All temperatures in degrees Fahrenheit. Note that relative humidity, especially in summer months, can reach 90%, so temperatures can feel 10-20 degrees hotter than actual temperature. Spring (March, April, May) average high 77, low 61 Summer (June, July, August) average high 89, low 75 Fall (September, October, November) average high 78, low 64 Winter (December, January, February) average high 64, low 48",
        state: "LA",
        parkCode: "jela",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jeca/index.htm",
        parkname: "Jewel Cave National Monument",
        address: "11149 U.S. Hwy. 16 Custer 57730",
        description:
          "Immerse yourself within the third longest cave in the world. With over 208 miles of mapped and surveyed passages, this underground wilderness appeals to human curiosity. Its splendor is revealed through fragile formations and glimpses of brilliant color. Its maze of passages lure explorers, and its scientific wealth remains a mystery. This resource is truly a jewel in the National Park Service.",
        weather_description:
          "Weather in the Black Hills varies significantly throughout the year and may be drastically different from the northern hills to the southern hills. The temperatures listed are for average lows to average highs in the location of Custer, South Dakota. Spring ~ Temp. Range of 29F to 53F / Summer ~ Temp. Range of 54F to 80F / Fall ~ Temp. Range of 33F to 58F / Winter ~ Temp. Range of 14F to 37F The yearly average rain is 19 inches, with May being the wettest month. The yearly average snow is 48 inches.",
        state: "SD",
        parkCode: "jeca",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jica/index.htm",
        parkname: "Jimmy Carter National Historical Park",
        address: "300 North Bond Street Plains 31780",
        description:
          "Few U.S. Presidents have had such close ties with where they were born and raised. The rural southern culture of Plains, Georgia, that revolves around farming, church and school, had a large influence in molding the character and in shaping the political policies of the 39th President of the United States.",
        weather_description:
          "Weather in Southwest Georgia can change in the blink of an eye during the summer months. Thunderstorms and high temperatures can make it unpleasant for visitors. Check the local forecast and dress appropriately.",
        state: "GA",
        parkCode: "jica",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/joda/index.htm",
        parkname: "John Day Fossil Beds National Monument",
        address: "32651 Highway 19 Kimberly 97848",
        description:
          "Colorful rock formations at John Day Fossil Beds preserve a world class record of plant and animal evolution, changing climate, and past ecosystems that span over 40 million years. Exhibits and a working lab at the Thomas Condon Paleontology and Visitor Center as well as scenic drives and hikes at all three units allow visitors to explore the prehistoric past of Oregon and see science in action.",
        weather_description:
          "Weather conditions at John Day Fossil Beds National Monument are highly variable in this semi-arid desert landscape. Summer highs can climb into the 110's. Winters tend to be fairly mild, with occassional snow and ice and lows occasionally dipping into the single digits.",
        state: "OR",
        parkCode: "joda",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jofi/index.htm",
        parkname: "John Fitzgerald Kennedy National Historic Site",
        address: "83 Beals Street Brookline 02446",
        description:
          "As a boy, JFK’s parents never expected he would grow up to be president. Yet in his birthplace home he learned values that inspired a life in public service. His mother, Rose Kennedy, recreated her family’s first home to share her memories of those early years with visitors. We commemorate not only his early life, but the ideas and principles he left behind.",
        weather_description:
          "Typical New England Weather: Warm, humid summers and cold winters. Any available outdoor programs take place rain or shine.",
        state: "MA",
        parkCode: "jofi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jomu/index.htm",
        parkname: "John Muir National Historic Site",
        address: "4202 Alhambra Ave Martinez 94553",
        description:
          "John Muir played many roles in his life, all of which helped him succeed in his role as an advocate for Nature. As America’s most famous naturalist and conservationist, Muir fought to protect the wild places he loved, places we can still visit today. Muir’s writings convinced the U.S. government to protect Yosemite, Sequoia, Grand Canyon and Mt. Rainier as national parks.",
        weather_description:
          "The Mediterranean climate of Martinez features hot, dry summers with lower temperatures near 60º F and upper temperatures near 100º F. The heat gives way to cool, rainy winters with lows near 45º F and highs near 75º F. Fall and spring can bring rain and temperatures from 55-80º F. March to April: wet/dry, 60-80º F May to September: very dry, 60-100º+ F October to November: dry/wet, 55-80º F December to February: wet, 45-75º F",
        state: "CA",
        parkCode: "jomu",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jofl/index.htm",
        parkname: "Johnstown Flood National Memorial",
        address: "733 Lake Road South Fork 15956",
        description:
          "The South Fork dam failed on Friday, May 31, 1889 and unleashed 20,000,000 tons of water that devastated Johnstown, PA. The flood killed 2,209 people but it brought the nation and the world together to aid the 'Johnstown sufferers.' The story of the Johnstown Flood reminds us all, '...that we must leave nothing undone for the preservation and protection of our brother men.'",
        weather_description:
          "Winters can be cold and severe. Spring can be seasonable and wet. Summer can be hot with potentials for thunderstorms. Fall can be seasonal, with cold temperatures into October and November.",
        state: "PA",
        parkCode: "jofl",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jotr/index.htm",
        parkname: "Joshua Tree National Park",
        address: "74485 National Park Drive Twentynine Palms 92277-3597",
        description:
          "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself.",
        weather_description:
          "Days are typically clear with less than 25% humidity. Temperatures are most comfortable in the spring and fall, with an average highs around 85°F (29°C) and average lows around 50°F (10°C) respectively. Winter brings cooler days, around 60°F (15°C), and freezing nights. It occasionally snows at higher elevations. Summers are hot, over 100°F (38°C) during the day and not cooling much below 75°F (24°C) at night.",
        state: "CA",
        parkCode: "jotr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/juba/index.htm",
        parkname: "Juan Bautista de Anza National Historic Trail",
        address: "440 Civic Center Plaza, Suite 300 Richmond 94804",
        description:
          "'¡Vayan Subiendo!'('Everyone mount up!') was the rousing call from Juan Bautista de Anza. In 1775-76, he led some 240 men, women, and children on an epic journey to establish the first non-Native settlement at San Francisco Bay. Today, the 1,200-mile Juan Bautista de Anza National Historic Trail connects history, culture, and outdoor recreation from Nogales, Arizona, to the San Francisco Bay Area.",
        weather_description:
          "The 1,200-mile Anza Trail connects historic, cultural, and recreation sites from Nogales, AZ, to the San Francisco Bay Area that reveal the legacy of our Spanish colonial heritage. To learn more, visit http://www.nps.gov/juba. Each site along the Anza Trail is managed independently. Contact individual sites for hours, directions, and other details.",
        state: "AZ,CA",
        parkCode: "juba",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/kala/index.htm",
        parkname: "Kalaupapa National Historical Park",
        address: "P.O. Box 2222 Kalaupapa 96742",
        description:
          "When Hansen's disease (leprosy) was introduced to the Hawaiian Islands, King Kamehameha V banished all afflicted to the isolated Kalaupapa peninsula on the north shore of Molokai. Since 1866, more than 8000 people, mostly Hawaiians, have died at Kalaupapa. Once a prison, Kalaupapa is now refuge for the few remaining residents who are now cured, but were forced to live their lives in isolation.",
        weather_description:
          "Hawaii enjoys warm temperatures year-round, although site conditions at the park can vary depending on weather and time of year. The rainy season is in the winter with the more hot and humid days in the summer. Trade winds are fairly constant and typically blow from the northeast. Daytime temperatures range from 65–75° F in the winter to 80-90°F in the summer. Nighttime temperatures are often in the 60-70°F range.",
        state: "HI",
        parkCode: "kala",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/kaho/index.htm",
        parkname: "Kaloko-Honok&#333;hau National Historical Park",
        address:
          "Visitor Center, Queen Ka'ahumanu Highway, south of 97 mile marker Kailua-Kona 96740",
        description:
          "To survive in a hot and arid environment the native Hawaiians (kanaka maoli) used ancient fishing skills, including the building of fishponds, and the knowledge of the location of precious fresh water (wai) that flows into the many brackish pools throughout the park. The spirit of the people (poe) and the knowledge of the elders (kupuna) created a tradition of respect and reverence for this area.",
        weather_description:
          "The weather in the park is typically hot and sunny, with temperatures in the upper 80's.",
        state: "HI",
        parkCode: "kaho",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/kaww/index.htm",
        parkname: "Katahdin Woods and Waters National Monument",
        address: "PO Box 446 Patten 04765",
        description:
          "Spread across a wild landscape offering spectacular views of Mount Katahdin, Katahdin Woods and Waters invites discovery of its rivers, streams, woods, flora, fauna, geology, and the night skies that have attracted humans for millennia.",
        weather_description:
          "Northern Maine experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C).",
        state: "ME",
        parkCode: "kaww",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/katm/index.htm",
        parkname: "Katmai National Park & Preserve",
        address: "1000 Silver Street King Salmon 99613",
        description:
          "A landscape is alive underneath our feet, filled with creatures that remind us what it is to be wild. Katmai was established in 1918 to protect the volcanically devastated region surrounding Novarupta and the Valley of Ten Thousand Smokes. Today, Katmai National Park and Preserve also protects 9,000 years of human history and important habitat for salmon and thousands of brown bears.",
        weather_description:
          "Located between the stormy north Pacific Ocean and the even stormier Bering Sea, the Katmai region is often a battleground between weather systems. When you visit, be prepared to encounter all types of weather. On average, wet and cool conditions predominate in spring, summer, and fall. Winters are drier and colder.",
        state: "AK",
        parkCode: "katm",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/kefj/index.htm",
        parkname: "Kenai Fjords National Park",
        address: "411 Washington Street Seward 99664",
        description:
          "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Sugpiaq people relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate.",
        weather_description:
          "The weather Kenai Fjords is difficult to predict and can change rapidly. The area generally enjoys a relatively temperate maritime climate, primarily due to the influence of the Japanese current that flows through the Gulf of Alaska. Summer daytime temperatures range from the mid 40s to the low 70s (Fahrenheit). Overcast and cool rainy days are frequent. Winter temperatures can range from the low 30s to -20.",
        state: "AK",
        parkCode: "kefj",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/keaq/index.htm",
        parkname: "Kenilworth Park & Aquatic Gardens",
        address: "1550 Anacostia Ave. NE Washington 20019",
        description:
          "Deep within Kenilworth lies an oasis, hidden behind trees and cattails. It's a place where beavers build their homes and turtles sleep on logs. Lotus's rise from the muck and lilies sit on the water. The wind dances with the dragonflies, rustling through the trees, carrying the song of the birds until it brushes across your face, fading to a whisper, saying 'come join.'",
        weather_description:
          "June-September expect warm and humid weather. Average high temperatures are in the 80s, though often in the low 90s. On humid days, showers and thunderstorms often build in the late afternoon. July and August are the warmest months. The coldest month is January, with average daytime highs in the low 40s and overnight lows in the upper 20s.",
        state: "DC",
        parkCode: "keaq",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/kemo/index.htm",
        parkname: "Kennesaw Mountain National Battlefield Park",
        address: "900 Kennesaw Mountain Dr Kennesaw 30152",
        description:
          "Kennesaw Mountain National Battlefield Park is a 2,965 acre National Battlefield that preserves a Civil War battleground of the Atlanta Campaign. Opposing forces maneuvered and fought here from June 19, 1864 until July 2, 1864. Although most famous as a Civil War battlefield, Kennesaw Mountain has a much richer story.",
        weather_description:
          "Before you start your trip to the mountain, check the local weather forecast to be sure that you will have a dry time. Though we are located north of Atlanta, we're still have the same hot summers and mild winters as our neighbors. The mountain top generally ranges 8-10 degrees cooler than at the base. In fall and winter, be prepared with a light weight jacket on hand. After planning your activities, check back to see what the weather will have in store for your day.",
        state: "GA",
        parkCode: "kemo",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/kewe/index.htm",
        parkname: "Keweenaw National Historical Park",
        address: "25970 Red Jacket Road Calumet 49913",
        description:
          "From 7,000 years ago to the 1900s people mined Keweenaw copper. Native peoples made copper into tools and trade items. Investors and immigrants arrived in the 1800s in a great mineral rush, developing thriving industries and cosmopolitan communities. Though the mines have since closed, their mark is still visible on the land and people.",
        weather_description:
          "Summer: Keweenaw summers are usually mild, with average highs in the 70s, but can reach into the 80s and 90s. Nighttime temperatures are typically cool, but can also dip into the 40s or stay in the 70s. Summer months are dry, with occasional rain or severe thunderstorms. Winter: Again influenced by Lake Superior, winter temperatures are mild with highs in the 20s. Cold spells can occur with subzero temperatures. Lake effect snow is common, and 300 inches of snow can fall in a season.",
        state: "MI",
        parkCode: "kewe",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/kimo/index.htm",
        parkname: "Kings Mountain National Military Park",
        address: "2300 Park Road Blacksburg 29702",
        description:
          "Thomas Jefferson called it 'The turn of the tide of success.' The battle of Kings Mountain, fought October 7th, 1780, was an important American victory during the Revolutionary War. The battle was the first major patriot victory to occur after the British invasion of Charleston, SC in May 1780. The park preserves the site of this important battle.",
        weather_description:
          "Temperatures for the area range from very hot and humid in the summer to cool and moderate in the winter.",
        state: "SC",
        parkCode: "kimo",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/klse/index.htm",
        parkname: "Klondike Gold Rush - Seattle Unit National Historical Park",
        address: "319 Second Ave S. Seattle 98104",
        description:
          "Seattle flourished during and after the Klondike Gold Rush. Merchants supplied people from around the world passing through this port city on their way to a remarkable adventure in Alaska. Today, the park is your gateway to learn about the Klondike Gold Rush, explore the area's public lands, and engage with the local community.",
        weather_description:
          "Warm dry summers from mid-July through mid-Sept, all the rest of the year, mainly rainy and cool.",
        state: "WA",
        parkCode: "klse",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/klgo/index.htm",
        parkname: "Klondike Gold Rush National Historical Park",
        address: "Klondike Gold Rush National Historical Park Skagway 99840",
        description:
          "Headlines screamed 'Gold!' The dream of a better life catapulted thousands of people to Alaska and the Yukon Territory. Their journey shaped them, and changed the people they encountered and the north forever. Today, the park remembers the trails, boomtowns, and stories of the Klondike Gold Rush.",
        weather_description:
          "Skagway has a highly variable climate with frequent rain and high winds. Average temperatures May through September range from 47 F to 60 F. Average temperatures October through April range from 28 F to 38 F.",
        state: "AK",
        parkCode: "klgo",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/knri/index.htm",
        parkname: "Knife River Indian Villages National Historic Site",
        address: "564 County Road 37 Stanton 58571",
        description:
          "Earthlodge people hunted bison and other game, but were in essence farmers living in villages along the Missouri and its tributaries. The site was a major Native American trade center for hundreds of years prior to becoming an important market place for fur traders after 1750.",
        weather_description:
          "Summers are warm and sunny with temperatures occasionally reaching 100 degrees F and frequent afternoon thunderstorms. Winters are invigorating, with extremely cold temperatures as low as -35 degrees F. High winds and sunny skies are common in winter. Snow is sporadic in the relatively dry climate, but blizzards are common.",
        state: "ND",
        parkCode: "knri",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/kova/index.htm",
        parkname: "Kobuk Valley National Park",
        address: "171 3rd Ave Kotzebue 99752",
        description:
          "Caribou, sand dunes, the Kobuk River, Onion Portage - just some of the facets of Kobuk Valley National Park. Half a million caribou migrate through, their tracks crisscrossing sculpted dunes. The Kobuk River is an ancient and current path for people and wildlife. For 9000 years, people came to Onion Portage to harvest caribou as they swam the river. Even today, that rich tradition continues.",
        weather_description:
          "Snow, rain, and freezing temperatures can occur any time of the year. Always travel with good quality rain gear and warm layers. Be especially careful to stay dry. Hypothermia can set in on a windy, wet day, even when it doesn't feel that cold.",
        state: "AK",
        parkCode: "kova",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/kowa/index.htm",
        parkname: "Korean War Veterans Memorial",
        address: "10 Daniel French Dr, SW Washington 20002",
        description:
          "Our nation honors her sons and daughters who answered the call to defend a country they never knew and a people they never met.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "kowa",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lyba/index.htm",
        parkname: "LBJ Memorial Grove on the Potomac",
        address: "Lyndon Baines Johnson Memorial Grove Washington",
        description:
          "From this distance the seat of national power appears pristine across the river, so President Johnson came here often when he needed to escape from the stresses of building a Great Society. After he died, his wife chose this place for his memorial. A landscape of serpentine paths, white pines, a granite monolith, and an open meadow honors his legacy of social justice and conservation legislation.",
        weather_description:
          "Summers in the park are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit and scattered afternoon thunderstorms. Please carry water while participating in physical activity and be prepared to take shelter from lightning. Winters in the park are generally cold, with nighttime lows frequently near freezing and occasional snowfall. Please be alert for snowplows and icy spots on roadways. Weather during spring and fall is generally moderate, but can change quickly.",
        state: "DC",
        parkCode: "lyba",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lacl/index.htm",
        parkname: "Lake Clark National Park & Preserve",
        address: "1 Park Place Port Alsworth 99653",
        description:
          "Lake Clark National Park and Preserve is a land of stunning beauty. Volcanoes steam, salmon run, bears forage, and craggy mountains reflect in shimmering turquoise lakes. Here, too, local people and culture still depend on the land and water. Venture into the park to become part of the wilderness.",
        weather_description:
          "Lake Clark has two distinct climate areas: the coast and the interior. The coast is wetter and experiences milder temperatures. The interior gets half to one fourth as much precipitation, but temperatures are hotter in summer and colder in winter. Frost and snow can occur any time parkwide, but are most common from September to early June. Lakes here typically begins freezing in November and melting in April. Ice conditions dictate whether planes need floats or skis to land on lakes.",
        state: "AK",
        parkCode: "lacl",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lake/index.htm",
        parkname: "Lake Mead National Recreation Area",
        address: "Lake Mead Visitor Center Boulder City 89005",
        description:
          "Swim, boat, hike, cycle, camp and fish at America’s first and largest national recreation area. With striking landscapes and brilliant blue waters, this year-round playground spreads across 1.5 million acres of mountains, canyons, valleys and two vast lakes. See the Hoover Dam from the waters of Lake Mead or Lake Mohave, or find solitude in one of the park's nine wilderness areas.",
        weather_description:
          "Spring (April, May and June): Daytime highs 80 °F to 98 °F. Nighttime lows 50 °F to 66 °F Summer* (July, August and September): Daytime highs 89 °F to 103 °F (It can get up to 117 °F.) Fall (October, November and December): Daytime highs 59 °F to 83 °F. Nighttime lows 32 °F to 50 °F. Winter (January, February and March) Daytime highs 57 °F to 69 °F. Nighttime lows 30 °F to 40 °F. *Summer can be a dangerous time due to excessive heat. Some trails are closed for public safety.",
        state: "AZ,NV",
        parkCode: "lake",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lamr/index.htm",
        parkname: "Lake Meredith National Recreation Area",
        address: "419 E. Broadway Fritch 79036",
        description:
          "Within the dry, windswept plains of the Texas Panhandle lies a hidden oasis, a welcoming haven where wildlife and humans find relief from the dry grasslands above. Through this plain, the Canadian River has cut dramatic 200-foot canyons, or breaks, where humans lived 13,000 years ago. Lake Meredith occupies these hidden coves and is a haven for migratory birds and other wildlife.",
        weather_description:
          "This area of the Texas Panhandle has a wide variety of weather conditions throughout the year. Winters are cold and windy, with summers being hot and dry. It is usually a good idea to check the weather report and dress accordingly.",
        state: "TX",
        parkCode: "lamr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/laro/index.htm",
        parkname: "Lake Roosevelt National Recreation Area",
        address: "Lake Roosevelt National Recreation Area Coulee Dam 99116",
        description:
          "The ancient geologic landscape of the upper Columbia River cradles Lake Roosevelt in walls of stone carved by massive ice age floods. Come explore the shorelines and learn the stories of American Indians, traders and trappers, settlers and dam builders who called this place home. Swim, boat, hike, camp, and fish at this hidden gem in Northeast Washington, created by the Grand Coulee Dam.",
        weather_description:
          "Lake Roosevelt is generally a cool or cold place from fall through spring with overcast skies. In the summer, the skies clear and present warm to hot days.",
        state: "WA",
        parkCode: "laro",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lavo/index.htm",
        parkname: "Lassen Volcanic National Park",
        address: "38050 Highway 36 East Mineral 96063",
        description:
          "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land.",
        weather_description:
          "Weather at Lassen can vary dramatically throughout the year. Average January temperatures are a high of 40.4 °F (4.7 °C) and a low of 20.8 °F (-6.2 °C). Average July temperatures are a high of 88.4 °F and a low of 49.8 °F. Temperatures reach 90 °F or higher on an average of 36.9 days, and drop to 32 ° or lower on an average of 164 days days annually.",
        state: "CA",
        parkCode: "lavo",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/labe/index.htm",
        parkname: "Lava Beds National Monument",
        address: "1 Indian Well HQ Tulelake 96134",
        description:
          "Lava Beds National Monument is a land of turmoil, both geological and historical. Over the last half-million years, volcanic eruptions on the Medicine Lake shield volcano have created a rugged landscape dotted with diverse volcanic features. More than 800 caves, Native American rock art sites, historic battlefields and campsites, and a high desert wilderness experience await you!",
        weather_description:
          "Park elevations range from 4,000 to 5,700 feet. Cold weather is possible any time of year, and snow has been recorded in all months. Winter day­time highs average 40°F; lows average 20°F. Morning fog is frequent from autumn through spring. Summer daytime highs average 75° to 80°F; lows average 50°F. Occasional thunderstorms occur in summer.",
        state: "CA",
        parkCode: "labe",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lecl/index.htm",
        parkname: "Lewis & Clark National Historic Trail",
        address: "601 Riverfront Dr. Omaha 68102",
        description:
          "The Lewis and Clark National Historic Trail is approximately 4,900 miles long, extending from Pittsburgh, Pennsylvania, to the mouth of the Columbia River, near present day Astoria, Oregon. It follows the historic outbound and inbound routes of the Lewis and Clark Expedition as well as the preparatory section from Pittsburgh, Pennsylvania to Wood River, Illinois.",
        weather_description:
          "In winter, watch for ice on trails and sidewalks. In summer, make sure to drink plenty of water and wear sunscreen on hot days. Keep in mind the Trail covers 16 states, use www.weather.gov to look up the specific area you plan to visit.",
        state: "IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV",
        parkCode: "lecl",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lewi/index.htm",
        parkname: "Lewis and Clark National Historical Park",
        address: "Lewis and Clark National Historical Park Astoria 97103",
        description:
          "Explore the timeless rainforests and majestic coastal vistas. Discover the rich heritage of the native people. Unfold the dramatic stories of America's most famous explorers. The park encompasses sites along the Columbia River and the Pacific Coast. Follow in the footsteps of the explorers and have an adventure in history.",
        weather_description:
          "We see an average of 70 inches of rain a year and we are the foggiest location in the Lower 48 states. Summer months are usually nice with days ranging from 55-70 degrees. Winters are wet and mild, usually 40-55 degrees. During the 106 days the Lewis and Clark Expedition wintered at Fort Clatsop in 1806 it rained all but 12 days and they saw the sun 6 times. While we are usually not so dreary make sure to prepare for rain or shine.",
        state: "OR,WA",
        parkCode: "lewi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/libo/index.htm",
        parkname: "Lincoln Boyhood National Memorial",
        address: "3027 East South Street Lincoln City 47552",
        description:
          "Abraham Lincoln grew from youth to manhood on this southern Indiana soil. Many character and moral traits of one of the world's most respected leaders was formed and nurtured here. Explore Lincoln's boyhood and learn about the boy who would one day become the leader of our nation.",
        weather_description:
          "Southern Indiana has a moderate climate, characterized by warm, yet moist conditions. Summers are usually warm, and winters cool. Much of the area's average 46 inches of precipitation falls in spring, the rainiest season.",
        state: "IN",
        parkCode: "libo",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/liho/index.htm",
        parkname: "Lincoln Home National Historic Site",
        address: "426 S. 7th Street Springfield 62701",
        description:
          "Abraham Lincoln believed in the ideal that everyone in America should have the opportunity to improve their economic and social condition. Lincoln’s life was the embodiment of that idea. We know him as the sixteenth president but he was also a spouse, parent, and neighbor who experienced the same hopes, dreams, and challenges of life that are still experienced by many people today.",
        weather_description:
          "Temperatures at our site can range from 0°F (-18°C) in the winter to 95°F (35°C) or warmer in the summer. Summers can be very humid, with both intense sun, rainstorms, and thunderstorms. Winter sees clear skies as well as snow. Please dress appropriate for potential weather conditions. We recommend wearing shoes comfortable for walking.",
        state: "IL",
        parkCode: "liho",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/linc/index.htm",
        parkname: "Lincoln Memorial",
        address: "2 Lincoln Memorial Circle, NW Washington 20002",
        description:
          "'In this temple, as in the hearts of the people for whom he saved the Union, the memory of Abraham Lincoln is enshrined forever.' Beneath these words, the 16th president of the United States sits immortalized in marble as an enduring symbol of unity, strength, and wisdom.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "linc",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/libi/index.htm",
        parkname: "Little Bighorn Battlefield National Monument",
        address: "756 Battlefield Tour Road Crow Agency 59022",
        description:
          "This area memorializes the US Army's 7th Cavalry and the Lakotas and Cheyennes in one of the Indian's last armed efforts to preserve their way of life. Here on June 25 and 26 of 1876, 263 soldiers, including Lt. Col. George A. Custer and attached personnel of the US Army, died fighting several thousand Lakota and Cheyenne warriors.",
        weather_description:
          "Little Bighorn Battlefield National Monument weather: Spring: 50-60 (F) degree days/ 30+/- (F) degree nights Summer: 70-100 (F) degree days/ 45-60+ (F) degree nights Fall: 50 degree (F) days/ 25+/- (F) degree nights Winter: 20 degree (F) days/ 0+/- (F) degree nights",
        state: "MT",
        parkCode: "libi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/liri/index.htm",
        parkname: "Little River Canyon National Preserve",
        address: "472 Alabama Highway 35 Fort Payne 35967",
        description:
          "Little River is unique because it flows for most of its length atop Lookout Mountain in northeast Alabama. Forested uplands, waterfalls, canyon rims and bluffs, pools, boulders, and sandstone cliffs offer settings for a variety of recreational activities. Natural resources and cultural heritage come together to tell the story of the Preserve, a special place in the Southern Appalachians.",
        weather_description:
          "The weather in Fort Payne, Alabama is mild. The average temperature in the winter is in the 50's. The average summer temperature is in the high 80's with high humidity. We receive about 55 inches of rain each year. Snowfall varies, but only lasts a few days per event.",
        state: "AL",
        parkCode: "liri",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/chsc/index.htm",
        parkname: "Little Rock Central High School National Historic Site",
        address: "Little Rock Central High School NHS Little Rock 72202-5212",
        description:
          "In 1957, Little Rock Central High School was the epicenter of confrontation and a catalyst for change as the fundamental test for the United States to enforce African American civil rights following Brown v. Board of Education. Learn how the sacrifice and struggle endured by the Little Rock Nine have provided opportunities and opened doors for those seeking equality and education around the world.",
        weather_description:
          "Arkansas weather can change quickly. While the state is in a moderate temperate zone, it does experience strong thunderstorms, tornadoes and flash floods. In winter, 'snow' events tend to quickly turn to thin ice which can be difficult to see and to clear. Summer temperatures and humidity can lead to dehydration, heat exhaustion and heat stroke. Visitors are advised to dress in layers and be prepared for precipitation.",
        state: "AR",
        parkCode: "chsc",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/long/index.htm",
        parkname:
          "Longfellow House Washington's Headquarters National Historic Site",
        address: "105 Brattle Street Cambridge 02138",
        description:
          "Longfellow House-Washington's Headquarters National Historic Site preserves the home of Henry W. Longfellow, one of the world’s foremost 19th century poets. The house also served as headquarters for General George Washington during the Siege of Boston, July 1775 - April 1776. In addition to its rich history, the site offers unique opportunities to explore 19th century literature and arts.",
        weather_description:
          "New England weather is highly variable. Temperatures in the winter can be very cold with high snowfall. Fall and spring are generally pleasant. Summer temperatures are generally mild, with periods of heat and humidity. However, the house is air conditioned and heated for collection care and the comfort of the visitor.",
        state: "MA",
        parkCode: "long",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lowe/index.htm",
        parkname: "Lowell National Historical Park",
        address: "115 John Street Lowell 01852",
        description:
          "Discover the Continuing Revolution. Lowell’s water-powered textile mills catapulted the nation – including immigrant families and early female factory workers – into an uncertain new industrial era. Nearly 200 years later, the changes that began here still reverberate in our shifting global economy. Explore Lowell, a living monument to the dynamic human story of the Industrial Revolution.",
        weather_description:
          "Summer: Throughout the summer, temperatures range from the mid 60s to mid 90s during the day, with rain and thunderstorms more common in the months of July and August. Boats and trolleys operate rain or shine and are only cancelled in cases of extreme weather or the presence of thunder and lightning. Winter: Winters are typically cold with temperatures in the mid 30s and 40s (with occasional single digit temperatures) and snow storms with a few inches accumulation occur frequently throughout the season.",
        state: "MA",
        parkCode: "lowe",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lode/index.htm",
        parkname: "Lower Delaware National Wild and Scenic River",
        address: "NPS Wild & Scenic Rivers Philadelphia 19106",
        description:
          "The largest free-flowing river in the eastern United States, the Delaware River runs past forests, farmlands, and villages, and it also links some of the most densely populated regions in America. In 2000, the National Wild and Scenic River System incorporated key segments of the lower Delaware River to form this unit of the National Park System.",
        weather_description:
          "Spring: Temperatures usually range from lows of 26 F to highs of 80 F with average rainfall of 5 inches. Summer: Temperatures usually range from lows of 55 F to highs of 85 F with average rainfall of 4 inches. Fall: Temperatures usually range from lows of 30 F to highs of 83F. Fall foliage is at its peak sometime in October as daily mountain temperatures vary frequently and influence the change. Winter: Temperatures usually range from lows of 15 F to highs of 49 F.",
        state: "PA,NJ",
        parkCode: "lode",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/loea/index.htm",
        parkname: "Lower East Side Tenement Museum National Historic Site",
        address: "103 Orchard Street New York 10002",
        description:
          "The heart of the museum is a historic tenement, home to an estimated 7,000 people from over 20 nations between 1863 and 1935. The tenement’s cramped living spaces, the lives of past residents and the history of the Lower East Side, contribute to its representation of the immigrant experience. Throughout the year, programs such as walking tours and readings are offered.",
        weather_description:
          "For details and information, visit, https://www.tenement.org/.",
        state: "NY",
        parkCode: "loea",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/lyjo/index.htm",
        parkname: "Lyndon B Johnson National Historical Park",
        address: "100 Ladybird Lane Johnson City 78636",
        description:
          "---Lyndon Baines Johnson Lyndon B. Johnson National Historical Park tells the story of our 36th President beginning with his ancestors until his final resting place on his beloved LBJ Ranch. This entire 'circle of life' gives the visitor a unique perspective into one of America's most noteworthy citizens by providing the most complete picture of any American president.",
        weather_description:
          "Overall, the park enjoys a sunny, mild climate during three seasons of the year. Spring: Temperatures range from 45 F to 85 F (7 C/29 C). Rain is common in April and May. Summer: Temperatures range from 70 F to 95 F (21 C/35 C). Temperatures can exceed 100 F (38 C) in July and August. Lightweight clothing and sunscreen are advisable. Be prepared with plenty of water. Fall: Temperatures range from 45 F to 85 F (7 C/29 C). Winter: Temperatures range from 35 F to 65 F (2 C/18 C) . Snow and ice are rare.",
        state: "TX",
        parkCode: "lyjo",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mawa/index.htm",
        parkname: "Maggie L Walker National Historic Site",
        address: "600 N. 2nd Street Richmond 23219",
        description:
          "Maggie Lena Walker devoted her life to civil rights advancement, economic empowerment, and educational opportunities for Jim Crow-era African Americans and women. As a bank president, newspaper editor, and fraternal leader, Walker served as an inspiration of pride and progress. Today, Walker’s home is preserved as a tribute to her enduring legacy of vision, courage, and determination.",
        weather_description:
          "Summer is hot and humid, spring and winter are pleasant/mild, winter can be cold and occasionally snowy.",
        state: "VA",
        parkCode: "mawa",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/maac/index.htm",
        parkname: "Maine Acadian Culture",
        address: "PO Box 88 Madawaska 04756",
        description:
          "Maine Acadians share beliefs and experiences tying them to a common religion, languages, and history. The St. John River, land, and family are essential to their culture. The National Park Service supports the Maine Acadian Heritage Council, an association of historical societies, cultural clubs, towns, and museums that work together to support Maine Acadian culture in the St. John Valley.",
        weather_description:
          "Located in remote northern Maine, Aroostook County experiences all four seasons. Summers temperatures average highs near 75° F (23° C) while winter temperatures average lows often below 0° F (-17° C). Snow falls typically from November through April and averages well over 100 inches of snow per winter.",
        state: "ME",
        parkCode: "maac",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/maca/index.htm",
        parkname: "Mammoth Cave National Park",
        address: "P.O. Box 7 Mammoth Cave 42259-0007",
        description:
          "Rolling hills, deep river valleys, and the worlds longest known cave system. Mammoth Cave National Park is home to thousands of years of human history and a rich diversity of plant and animal life, earning it the title of UNESCO World Heritage Site and International Biosphere Reserve.",
        weather_description:
          "Kentucky has a moderate climate with warm, yet moist conditions. Summers average in the high 80s; winters average in the low 40s. Southern Kentucky, where Mammoth Cave is located, receives the highest average precipitation for the state, about 50 inches per year, mostly in spring. Winter can bring mild to moderate snow and ice. Storms happen year-round, and can include tornadoes and flooding in low-lying areas, but severe weather is infrequent. The temperature deep in the cave is a constant 54°F (12°C).",
        state: "KY",
        parkCode: "maca",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mana/index.htm",
        parkname: "Manassas National Battlefield Park",
        address: "6511 Sudley Road Manassas 20109",
        description:
          "On July 21, 1861, two armies clashed for the first time on the fields overlooking Bull Run. Heavy fighting swept away any notion of a quick war. In August 1862, Union and Confederate armies converged for a second time on the plains of Manassas. The Confederates won a solid victory bringing them to the height of their power.",
        weather_description:
          "Spring: Mild weather, with average low/high temperatures from 33 F to 75 F. Variable rainfall, with May being the wettest month of the year on average. Summer: Warm and humid weather, with average temperatures from 61 F to 88 F. Variable rainfall, with occasional downpours during storms. Fall: Mild weather, with average temperatures from 35 F to 79 F. Variable rainfall. Winter: Mild to cool weather, with average temperatures from 24 F to 47 F. Annual snowfall averages about 22 inches.",
        state: "VA",
        parkCode: "mana",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mapr/index.htm",
        parkname: "Manhattan Project National Historical Park",
        address: "Manhattan Project National Historical Park Lakewood 80228",
        description:
          "This site tells the story about the people, events, science, and engineering that led to the creation of the atomic bomb, which helped end World War II.",
        weather_description: "Weather varies across all three of our units.",
        state: "NM,WA,TN",
        parkCode: "mapr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/manz/index.htm",
        parkname: "Manzanar National Historic Site",
        address: "Manzanar National Historic Site Independence 93526",
        description:
          "In 1942, the United States government ordered more than 110,000 men, women, and children to leave their homes and detained them in remote, military-style camps. Manzanar War Relocation Center was one of ten camps where Japanese American citizens and resident Japanese aliens were incarcerated during World War II.",
        weather_description:
          "Manzanar is located in the Owens Valley at 4,000' elevation, at the eastern base of the Sierra Nevada. We get little precipitation but we do have four distinct seasons. Summer temperatures can soar over 100 degrees. Winter highs are usually in the 40's. Nighttime temperatures year round are 30 to 40 degrees less than daytime highs. High winds are common in any season.",
        state: "CA",
        parkCode: "manz",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mabi/index.htm",
        parkname: "Marsh - Billings - Rockefeller National Historical Park",
        address: "54 Elm Street Woodstock 05091",
        description:
          "Experience wintry conditions and bracing temperatures along both groomed cross-country ski trails and natural snowshoe trails in the folded hilly landscape of the park. Reflect on the story of stewardship, of people taking care of places – sharing an enduring connection to the land - as you observe the tall trees, wildlife and experience the peacefulness of the woods.",
        weather_description:
          "The weather in Vermont is dramatic and varied depending on location, terrain, distance from a body of water like Lake Champlain, and elevation and can change from year to year. In the Woodstock area, summer daily high temperatures range between 60 to 80 degrees, with some days reaching into the 90s. Winter is Vermont's longest season and temps in winter vary more than those in summer. Common to experience freezing temperatures from Nov to March, many sub-zero days, seasonal snowfall averages 80 inches.",
        state: "VT",
        parkCode: "mabi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mlkm/index.htm",
        parkname: "Martin Luther King, Jr. Memorial",
        address: "1850 West Basin Drive SW Washington 20024",
        description:
          "Located in downtown Washington, DC, the memorial honors Martin Luther King, Jr.'s legacy and the struggle for freedom, equality, and justice. A prominent leader in the modern civil rights movement, Dr. King was a tireless advocate for racial equality, working class, and the oppressed around the world.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "mlkm",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/malu/index.htm",
        parkname: "Martin Luther King, Jr. National Historical Park",
        address: "450 Auburn Avenue, NE Atlanta 30312",
        description:
          "A young boy grows up in a time of segregation…A dreamer is moved by destiny into leadership of the modern civil rights movement…This was Martin Luther King, Jr. Come hear his story, visit the home of his birth, and where he played as a child. Walk in his footsteps, and hear his voice in the church where he moved hearts and minds. Marvel at how he was an instrument for social change.",
        weather_description:
          "Summers typically are warm and humid with average afternoon high temperatures are in the lower 90s. During winter the high temperatures average from the mid-50s to the lower 60s. Lows average in the mid-30s. Spring and Autumn seasons are characterized by much variability from day to day and from year to year. The average date of first freeze is in mid-November and the date of the last freeze is mid to late March.",
        state: "GA",
        parkCode: "malu",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mava/index.htm",
        parkname: "Martin Van Buren National Historic Site",
        address: "Martin Van Buren NHS Kinderhook 12106-3605",
        description:
          "Today, Martin Van Buren is an obscure man, often little more than a footnote. In pre-Civil War America, however, it was impossible not to have an opinion of him. Van Buren was central to the issues of his day: the creation of political parties, and the largest crisis of his time, slavery. The above quote is from Davy Crockett, one of many Americans trying to understand the Red Fox of Kinderhook.",
        weather_description:
          "The weather at Martin Van Buren National Historic Site is typical of the northeast United States; it varies considerably throughout the year. Always check the forecast prior to your visit and dress accordingly. Be sure to wear comfortable walking shoes.",
        state: "NY",
        parkCode: "mava",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mamc/index.htm",
        parkname: "Mary McLeod Bethune Council House National Historic Site",
        address: "1318 Vermont Avenue NW Washington 20005",
        description:
          "Mary McLeod Bethune achieved her greatest recognition at the Washington, DC townhouse that is now this National Historic Site. The Council House was the first headquarters of the National Council of Negro Women (NCNW) and was Bethune’s last home in Washington, DC. From here, Bethune and the NCNW spearheaded strategies and developed programs that advanced the interests of African American women.",
        weather_description:
          "Winter: Temperatures usually range from 30 to 50 F. There is occasional snow. Spring: Temperatures usually range widely from 40 to 70 F. Rain is common. Summer: Temperatures usually range from 70 to 90 F. Humidity is usually high. Be prepared and drink plenty of water. There is a water fountain in the visitor center. Fall: Temperatures usually range widely from 40 to 70 F. Humidity can remain high in the earlier part of the season.",
        state: "DC",
        parkCode: "mamc",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/memy/index.htm",
        parkname: "Medgar and Myrlie Evers Home National Monument",
        address: "2332 Margaret Walker Alexander Drive Jackson 39213",
        description:
          "Medgar and Myrlie Evers were partners in the civil rights struggle. The assassination of Medgar Evers in the carport of their home on June 12, 1963, was the first murder of a nationally significant leader of the American Civil Rights Movement, and it became a catalyst for passage of the Civil Rights Act of 1964. Myrlie Evers continued to promote issues of racial equality and social justice.",
        weather_description:
          "Spring: Temperatures usually range from 50 F to 83 F. Rain is common. Summer: Be prepared for heat and humidity. Temperatures usually range from 70 F to 95 F. Thunderstorms are common. Fall: Temperatures usually range from 55 F to 79 F. Winter: Temperatures range from 40 F to 63 F. Rain is common.",
        state: "MS",
        parkCode: "memy",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/meve/index.htm",
        parkname: "Mesa Verde National Park",
        address:
          "Mile .7 Headquarters Loop Road Mesa Verde National Park 81330",
        description:
          "Mesa Verde National Park was established in 1906 to preserve and interpret the archeological heritage of the Ancestral Pueblo people who made it their home for over 700 years, from 600 to 1300 CE. Today, the park protects nearly 5,000 known archeological sites, including 600 cliff dwellings. These sites are some of the most notable and best preserved in the United States.",
        weather_description:
          "Spring: Temps range from 40 F to 70 F, but snowstorms can occur as late as May. Summer: Temps can reach well into the 90s F. Thunderstorms are common in July and August. Be prepared to bring and DRINK plenty of water. Fall: Temps can range from 50 F to 75 F. Snowstorms can occur as early as October. Winter: Temps can range from the teens to low 30s F. Icy roads are common. Snow tires, all-wheel drive, or chains, may be required. Be prepared with water, snacks, and layers of warm clothing.",
        state: "CO",
        parkCode: "meve",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/misp/index.htm",
        parkname: "Mill Springs Battlefield National Monument",
        address: "Superintendent, MISP Nancy 42544",
        description:
          "The Union won a significant victory early in the Civil War at The Battle of Mill Springs. Explore the rolling fields of Kentucky where the battle took place and learn about that state's strategic importance to both sides of the fight.",
        weather_description:
          "Nancy, Kentucky, on average, gets 50 inches of rain per year and 11 inches of snow. July is usually the warmest month with temperatures around 86 F. January can reach a low of 25 F.",
        state: "KY",
        parkCode: "misp",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/miin/index.htm",
        parkname: "Minidoka National Historic Site",
        address: "1428 Hunt Road Jerome 83338",
        description:
          "The Pearl Harbor attack intensified existing hostility towards Japanese Americans. As wartime hysteria mounted, President Roosevelt signed Executive Order 9066 forcing over 120,000 West Coast persons of Japanese ancestry (Nikkei) to leave their homes, jobs, and lives behind, forcing them into one of ten prison camps spread across the nation because of their ethnicity. This is Minidoka's story.",
        weather_description:
          "Jerome and Twin Falls, Idaho, gets 10 inches of rain per year. On average, there are 213 sunny days per year here. The July high is around 94 degrees. The January low is 22. Our comfort index, which is based on humidity during the hot months, is a 78 out of 100, where higher is more comfortable. The US average on the comfort index is 44.",
        state: "ID,WA",
        parkCode: "miin",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mima/index.htm",
        parkname: "Minute Man National Historical Park",
        address: "Minute Man Visitor Center Lincoln 01773",
        description:
          "At Minute Man National Historical Park the opening battle of the Revolution is brought to life as visitors explore the battlefields and structures associated with April 19, 1775, and witness the American revolutionary spirit through the writings of the Concord authors.",
        weather_description:
          "New England weather can be quite unpredictable, so check the regional weather forecasts before you plan your trip. Winters can range in temperature from 20 - 50 degrees Fahrenheit. Summers are quite humid and range in temperature from 60 - 90 degrees Fahrenheit. Beware of ticks as they can be active year round.",
        state: "MA",
        parkCode: "mima",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mimi/index.htm",
        parkname: "Minuteman Missile National Historic Site",
        address: "24545 Cottonwood Road Philip 57567",
        description:
          "During the Cold War, a vast arsenal of nuclear missiles were placed in the Great Plains. Hidden in plain sight, for thirty years 1,000 missiles were kept on constant alert; hundreds remain today. The Minuteman Missile remains an iconic weapon in the American nuclear arsenal. It holds the power to destroy civilization, but is meant as a nuclear deterrent to maintain peace and prevent war.",
        weather_description:
          "Rapid weather changes are common in the western South Dakota area where Minuteman Missile National Historic Site is located. Variations from season to season and from year to year are great. Characteristics of the climate are hot dry summers and bitterly cold winters. Wind is a constant on the Great Plains, winds in excess of 50 mph not uncommon. During the winter season, winds typically blow from the north-northwest and have been known to cause wind chills in excess of -40 degrees.",
        state: "SD",
        parkCode: "mimi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/miss/index.htm",
        parkname: "Mississippi National River and Recreation Area",
        address: "120 W. Kellogg Blvd. Saint Paul 55101",
        description:
          "In the middle of a bustling urban setting, this 72 mile river park offers quiet stretches for fishing, boating and canoeing, birdwatching, bicycling, and hiking. And there are plenty of visitor centers and trails that highlight the fascinating human history of the Mississippi River. This a great place to start your exploration of this important river.",
        weather_description:
          "Minnesota has a continental climate characterized by cold winters and warm summers. Spring brings moderate temperatures and low humidity. Summer days may reach temperatures of more than 100°F (38°C), but are usually pleasant with temperatures in the low to mid-80°F (25-30°C). Autumn brings dry, warm days, cool nights and gorgeous fall colors. Winter daytime highs are around 25°F (-3°C). Rarely, winter daytime high temperatures may not get above -10°F (-23°C), sometimes with strong winds.",
        state: "MN",
        parkCode: "miss",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mnrr/index.htm",
        parkname: "Missouri National Recreational River",
        address: "508 East 2nd Street Yankton 57078",
        description:
          "Imagine a 100-mile stretch of North America's longest river, a vestige of the untamed American West. The Missouri National Recreational River is where imagination meets reality. Two free flowing stretches of the Missouri make up the National Park. Relive the past by making an exploration of the wild, untamed and mighty river that continues to flow as nature intended.",
        weather_description:
          "Rapid weather changes are common along the Missouri National Recreational River corridor. Variations from season to season and from year to year are great. Characteristics of the climate are hot summers and cold winters. Sunshine is abundant, particularly in the summer months. Average annual rainfall is 25 inches. Thunderstorms can be dangerous and visitors should be prepared for them, especially from June until late August. Winter snowfall averages 34 inches annually.",
        state: "SD,NE",
        parkCode: "mnrr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/moja/index.htm",
        parkname: "Mojave National Preserve",
        address: "2701 Barstow Road Barstow 92311",
        description:
          "Singing sand dunes, cinder cone volcanoes, a large Joshua tree forest, and carpets of spring wildflowers are all found within this 1.6-million-acre park. A visit to its canyons, mountains, and mesas will reveal long-abandoned mines, homesteads, and rock-walled military outposts. Located between Los Angeles and Las Vegas, Mojave provides serenity and solitude from major metropolitan areas.",
        weather_description:
          "Mojave Desert experiences change with the seasons. In winter, freezing temperatures and strong winds can be expected, with rain and snow in the mountains. With enough moisture, spring wildflowers may carpet the desert floor with vivid colors. Summers are hot, and temperatures above 100 degrees Fahrenheit are typical. In summer, adventurers head for the higher elevations such as Mid-Hills and the New York Mountains. The cooler temperatures of fall mark hunting season.",
        state: "CA",
        parkCode: "moja",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mono/index.htm",
        parkname: "Monocacy National Battlefield",
        address: "5201 Urbana Pike Frederick 21704",
        description:
          "During the summer of 1864, the Confederacy carried out a bold plan to turn the tide of the Civil War in their favor. They planned to capture Washington, DC and influence the election of 1864. On July 9, however, Federal soldiers outnumbered three to one, fought gallantly along the banks of the Monocacy River in an effort to buy time for Union reinforcement to arrive in Washington, DC.",
        weather_description:
          "Spring (March - May) Temperatures: Average high is 67 degrees with a low of 53 degrees Summer (June - August) Temperatures: Average high is 87 degrees with a low of 65 degrees Fall (September - November) Temperatures: Average high is 68 degrees with a low of 48 degrees Winter (December - February) Temperatures: Average high is 45 degrees with a low of 27 degrees (Source: www.usclimatedata.com)",
        state: "MD",
        parkCode: "mono",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/moca/index.htm",
        parkname: "Montezuma Castle National Monument",
        address: "2800 Montezuma Castle Road Camp Verde 86322",
        description:
          "Established December 8, 1906, Montezuma Castle is the third National Monument dedicated to preserving Native American culture. This 20 room high-rise apartment, nestled into a towering limestone cliff, tells a story of ingenuity, survival and ultimately, prosperity in an unforgiving desert landscape.",
        weather_description:
          "Summer: Hot. Temperatures range from 95°F (35°C) beyond 110°F (42°C). Nighttime temperatures can be much cooler, around 70°F (21°C). From late June through early August, heavy rains called monsoons are common in the afternoons. Winter: Cool. Highs average around 55°F (13°C); lows may be in the teens (-10°C). Snow is rare, but possible. For detailed information, visit the National Weather Service: http://forecast.weather.gov/MapClick.php?lat=34.61151944900047&lon=-111.8389592099997#.Vi_FZX6rSUk",
        state: "AZ",
        parkCode: "moca",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mocr/index.htm",
        parkname: "Moores Creek National Battlefield",
        address: "40 Patriots Hall Dr. Currie 28435",
        description:
          "In the early morning hours of February 27, 1776, Loyalist forces charged across a partially dismantled Moores Creek Bridge. Beyond the bridge, nearly 1,000 North Carolina Patriots waited quietly with cannons and muskets poised to fire. This battle marked the last broadsword charge by Scottish Highlanders and the first significant victory for the Patriots in the American Revolution.",
        weather_description:
          "Currie, North Carolina has mild Winters and moderate to hot Summers with varying humidity.",
        state: "NC",
        parkCode: "mocr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mopi/index.htm",
        parkname: "Mormon Pioneer National Historic Trail",
        address: "National Trails Santa Fe 87505",
        description:
          "Explore the Mormon Pioneer National Historic Trail across five states to see the 1,300-mile route traveled by Mormons who fled Nauvoo, Illinois, to the Great Salt Lake Valley in 1846-1847.",
        weather_description:
          "Due to the length of the Mormon Pioneer National Historic Trail, be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: www.weather.gov",
        state: "IL,IA,NE,UT,WY",
        parkCode: "mopi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/morr/index.htm",
        parkname: "Morristown National Historical Park",
        address: "30 Washington Place Morristown 07052",
        description:
          "Morristown National Historical Park commemorates the sites of General Washington and the Continental army’s winter encampment of December 1779 to June 1780, where they survived through what would be the coldest winter on record. The park also maintains a museum & library collection related to the encampments & George Washington, as well as items relating to pre- and post-Revolutionary America.",
        weather_description:
          "Weather in this part of New Jersey is typical of the mid-Atlantic region.",
        state: "NJ",
        parkCode: "morr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/mora/index.htm",
        parkname: "Mount Rainier National Park",
        address: "55210 238th Avenue East Ashford 98304",
        description:
          "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits.",
        weather_description:
          "Weather patterns at Mount Rainier are strongly influenced by the Pacific Ocean and elevation. The climate is generally cool and rainy, with summer highs in the 60s and 70s. While July and August are the sunniest months of the year, rain is very likely in spring, fall, and winter. Visitors should be aware that mountain weather is very changeable. In the higher elevations, like Paradise, winter can last from November to May with many feet of snow on the ground.",
        state: "WA",
        parkCode: "mora",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/moru/index.htm",
        parkname: "Mount Rushmore National Memorial",
        address: "13000 Highway 244 Keystone 57751",
        description:
          "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincoln, surrounded by the beauty of the Black Hills of South Dakota, tell the story of the birth, growth, development and preservation of this country. From the history of the first inhabitants to the diversity of America today, Mount Rushmore brings visitors face to face with the rich heritage we all share.",
        weather_description:
          "Weather at Mount Rushmore can be highly variable in any season. Summer high temperatures range from 70 to 100 degrees Fahrenheit. Fall high temperatures range from 45 to 80 degrees Fahrenheit. Winter high temperatures range from 20 to 40 degrees Fahrenheit. Spring high temperatures range from 30 to 70 degrees Fahrenheit. July and August are the warmest months, December and January the coldest. March and April receive the most snow, while May and June receive the most rain.",
        state: "SD",
        parkCode: "moru",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/muwo/index.htm",
        parkname: "Muir Woods National Monument",
        address: "Muir Woods National Monument Mill Valley 94941",
        description:
          "Walk among old growth coast redwoods, cooling their roots in the fresh water of Redwood Creek and lifting their crowns to reach the sun and fog. Federally protected as a National Monument since 1908, this primeval forest is both refuge and laboratory, revealing our relationship with the living landscape. What will you discover in Muir Woods?",
        weather_description:
          "The coast redwood forest is cool most times of the year with temperatures ranging from 40 - 70 degrees F or 4 - 21 degrees C. From late October to early May expect rain. Summer months (June-August) can be warmer but it is generally cool and dry. Expect heavy fog in the morning, burning off in the afternoon. Some say fall (August-October) is the best weather of the year. But, don't let the weather stop you from having fun. If you're dressed for the elements and wearing sturdy shoes, you will enjoy your walk.",
        state: "CA",
        parkCode: "muwo",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/natc/index.htm",
        parkname: "Natchez National Historical Park",
        address: "640 South Canal Street Natchez 39120",
        description:
          "Discover the history of all the peoples of Natchez, Mississippi, from European settlement, African enslavement, the American cotton economy, to the Civil Rights struggle on the lower Mississippi River.",
        weather_description:
          "Spring: Temperatures usually range from 50 F to 83 F. Rain is common. Summer: Temperatures usually range from 70 F to 95 F. Rain and sun are equally common. On very sunny days, be prepared with plenty of water - heat exhaustion is common if you are not prepared. Fall: Temperatures usually range from 55 F to 79 F. Winter: Temperatures range from 40 F to 63 F. Rain is common.",
        state: "MS",
        parkCode: "natc",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/natt/index.htm",
        parkname: "Natchez Trace National Scenic Trail",
        address: "2680 Natchez Trace Parkway Tupelo 38804",
        description:
          "In 1983 the Natchez Trace National Scenic Trail was established as part of the National Park System and the National Trails System. The Scenic Trail runs parallel to the Natchez Trace Parkway in five developed sections totaling more than 60 miles. The trail offers opportunities to explore wetlands, swamps, hardwood forest, rock outcroppings, overlooks, and the history of the area.",
        weather_description:
          "Mississippi, Alabama, and most of Tennessee are classified as humid subtropical climates. The weather ranges from mild winters to hot summers. Average high temperatures reach into the high 80's in summer, and into the high 40's in winter. Thunderstorms are common in Mississippi, especially in the southern part of the state, and from June through November, the state is occasionally affected by hurricanes moving north from the Gulf of Mexico. Check local forecasts to plan your trip.",
        state: "AL,MS,TN",
        parkCode: "natt",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/natr/index.htm",
        parkname: "Natchez Trace Parkway",
        address: "2680 Natchez Trace Parkway Tupelo 38804",
        description:
          "The Natchez Trace Parkway is a 444-mile recreational road and scenic drive through three states. It roughly follows the 'Old Natchez Trace' a historic travel corridor used by American Indians, 'Kaintucks,' European settlers, slave traders, soldiers, and future presidents. Today, people can enjoy not only a scenic drive but also hiking, biking, horseback riding, and camping along the parkway.",
        weather_description:
          "Mississippi, Alabama, and most of Tennessee are classified as humid subtropical climates. The weather ranges from mild winters to hot summers. Average high temperatures reach into the high 80's in summer, and into the high 40's in winter. Thunderstorms are common in Mississippi, especially in the southern part of the state, and from June through November, the state is occasionally affected by hurricanes moving north from the Gulf of Mexico. Check local forecasts to plan your trip.",
        state: "AL,MS,TN",
        parkCode: "natr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/nace/index.htm",
        parkname: "National Capital Parks-East",
        address: "1900 Anacostia Drive SE Washington 20020",
        description:
          "Welcome to National Capital Parks-East. We invite you to journey to parks Beyond the Capital of Washington, D.C. National Capital Parks-East is 13 park sites, parkways and statuary covering more than 8,000 acres of historic, cultural, and recreational parklands from Capitol Hill to the nearby Maryland suburbs",
        weather_description:
          "Summers are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit, high humidity, and scattered afternoon thunderstorms. Winters are generally cold, with nighttime lows frequently near freezing and occasional snowfall. Weather during spring and fall is generally moderate, but can change quickly.",
        state: "DC",
        parkCode: "nace",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/nama/index.htm",
        parkname: "National Mall and Memorial Parks",
        address: "900 Ohio Drive SW Washington 20024",
        description:
          "This is where the nation comes to remember and where history is made. As “America’s Front Yard,” the National Mall and Memorial Parks is home to many of our country’s most iconic memorials telling the story of people and events that shaped us as a nation. Each year, millions of people come to recreate, commemorate presidential legacies, honor our veterans, and make their voices heard.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees, high humidity Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "nama",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/npsa/index.htm",
        parkname: "National Park of American Samoa",
        address: "National Park of American Samoa Pago Pago 96799",
        description:
          "The National Park of American Samoa welcomes you into the heart of the South Pacific, to a world of sights, sounds, and experiences that you will find in no other national park in the United States. Enjoy this unique national park and the welcoming people of American Samoa. We are here to protect its rich culture and natural resources. Come explore them with us!",
        weather_description:
          "American Samoa is in the South Pacific Ocean, between the Equator and the Tropic of Capricorn. A tropical climate prevails with warm or hot temperatures year-round and high humidity. Rain showers are frequent and can last only for a few minutes or all-day. The average annual rainfall is 125-inches in the dryer areas to as much as 300-inches in the highest mountains. Tropical storms are more prevalent during the long, wet summer season (October -May) and a slightly cooler and drier season (June-September)",
        state: "AS",
        parkCode: "npsa",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/npnh/index.htm",
        parkname: "National Parks of New York Harbor",
        address: "26 Wall Street New York 10007",
        description:
          "These 11 sites preserve more than 400 years of American history! We invite you to explore the past and investigate its relevance in our lives today. From the birth of American democracy to the evolution of commerce, harbor defense, ecology and immigration, the breadth of themes commemorated through the National Parks of New York Harbor reflect the richness and diversity of our heritage.",
        weather_description:
          "Look up weather for New York City for most of the national parks in New York Harbor: http://forecast.weather.gov/MapClick.php?lat=40.7142&lon=-74.0059#.VqfYL_krKUk. Gateway National Recreation Area's Sandy Hook Unit in central New Jersey can be found here: http://forecast.weather.gov/MapClick.php?lat=40.7142&lon=-74.0059#.VqfYL_krKUk.",
        state: "NY",
        parkCode: "npnh",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/nabr/index.htm",
        parkname: "Natural Bridges National Monument",
        address: "At the end of UT-275 Lake Powell 84533",
        description:
          "Three majestic natural bridges invite you to ponder the power of water in a landscape usually defined by its absence. View them from an overlook, or hit the trails and experience their grandeur from below. Declared a National Monument in 1908, the bridges are named 'Kachina,' 'Owachomo' and 'Sipapu' in honor of the ancestral Puebloans who once made this place their home.",
        weather_description:
          "Natural Bridges is part of the Colorado Plateau, a 'high desert' region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day. The temperate (and most popular) seasons are spring (April-May) and fall (mid-September-October), when daytime highs average 60 to 80 F and lows average 30 to 50 F. Summer temperatures often exceed 100 F, making strenuous exercise difficult. Winters are cold, with highs averaging 30 to 50 F, and lows averaging 0 to 20 F.",
        state: "UT",
        parkCode: "nabr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/nava/index.htm",
        parkname: "Navajo National Monument",
        address: "End of AZ Highway 564 Shonto 86054",
        description:
          "The Hopi, San Juan Southern Paiute, Zuni, and Navajo are tribes that have inhabited the canyons for centuries. Springs fed into farming land on the canyon floor and homes were built in the natural sandstone alcoves. The cliff dwellings of Betatakin, Keet Seel, and Inscription House were last physically occupied around 1300 AD but the villages have a spiritual presence that can still be felt today.",
        weather_description:
          "Check weather updates at NOAA.gov and enter city Betatakin, and State, Arizona.",
        state: "AZ",
        parkCode: "nava",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/nebe/index.htm",
        parkname: "New Bedford Whaling National Historical Park",
        address: "33 William Street New Bedford 02740",
        description:
          "'The town itself is perhaps the dearest place to live in, in all New England..nowhere in all America will you find more patrician-like houses, parks and gardens more opulent, than in New Bedford…all these brave houses and flowery gardens came from the Atlantic, Pacific, and Indian oceans. One and all, they were harpooned and dragged up hither from the bottom of the sea.' H. Melville, 'Moby-Dick'",
        weather_description:
          "Summer temperatures range from 56-83F. Fall temperatures range from 30-70F. Winter temperatures range from 20-45F. Spring temperatures range from 30-70F.",
        state: "MA",
        parkCode: "nebe",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/neen/index.htm",
        parkname: "New England National Scenic Trail",
        address: "New England Trail Springfield 01105",
        description:
          "From the Sound to the Summits: the New England Trail covers 215 miles from Long Island Sound across long ridges to scenic mountain summits in Connecticut and Massachusetts. The trail offers panoramic vistas and close-ups of New England’s natural and cultural landscape: traprock ridges, historic village centers, farmlands, unfragmented forests, quiet streams, steep river valleys and waterfalls.",
        weather_description:
          "Temperatures range from warm, humid summer days to cold New England winter days.",
        state: "MA,CT",
        parkCode: "neen",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/pine/index.htm",
        parkname: "New Jersey Pinelands National Reserve",
        address: "15 Springfield Road New Lisbon 08064",
        description:
          "This is truly a special place. It's classified as a United States Biosphere Reserve and in 1978 was established by Congress as the country’s first National Reserve. It includes portions of seven southern New Jersey counties, and encompasses over one-million acres of farms, forests and wetlands. It contains 56 communities, from hamlets to suburbs, with over 700,000 permanent residents.",
        weather_description:
          "Spring: 50-70F, sunny with some rain Summer: 70-90F, mostly sunny with some rain Winter: 0-35F, snow is common Fall: 50-70F",
        state: "NJ",
        parkCode: "pine",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/jazz/index.htm",
        parkname: "New Orleans Jazz National Historical Park",
        address: "916 North Peters St New Orleans 70116",
        description:
          "Only in New Orleans could there be a National Park for jazz! Drop by our visitor center at 916 North Peters St. to inquire about musical events around town. In the mood for a world class musical experience? Attend a jazz concert or ranger performance at the state of the New Orleans Jazz Museum.",
        weather_description:
          "All temperatures in degrees Fahrenheit. Note that relative humidity, especially in summer months, can reach 90%, so temperatures can feel 10-20 degrees hotter than actual temperature. Spring (March, April, May) average high 77, low 61 Summer (June, July, August) average high 89, low 75 Fall (September, October, November) average high 78, low 64 Winter (December, January, February) average high 64, low 48",
        state: "LA",
        parkCode: "jazz",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/neri/index.htm",
        parkname: "New River Gorge National Park and Preserve.",
        address: "104 Main Street Glen Jean 25846",
        description:
          "A rugged, whitewater river flowing northward through deep canyons, the New River is among the oldest rivers on the continent. The park encompasses over 70,000 acres of land along the New River, is rich in cultural and natural history, and offers an abundance of scenic and recreational opportunities.",
        weather_description:
          "Weather in the Appalachian Mountains can be unpredictable and can change quickly. Always be prepared for the possibility of sudden storms. Weather in the mountains is often cooler and wetter than the surrounding area. On average, the warmest month is July. The maximum average precipitation also occurs in July.",
        state: "WV",
        parkCode: "neri",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/nepe/index.htm",
        parkname: "Nez Perce National Historical Park",
        address: "Nez Perce National Historical Park Lapwai 83540-9715",
        description:
          "Since time immemorial, the valleys, prairies, mountains, and plateaus of the inland northwest have been home to the Nimiipuu (Nez Perce) people. Extremely resilient, they survived the settling of the United States and adapted to a changed world. Nez Perce National Historical Park consists of 38 places important to the history and culture of the Nimiipuu. Explore these places. Learn their stories.",
        weather_description:
          "Elevations in the Park range from 700 feet above sea level to over 8,000, providing a wide range of climatic conditions, that follow the four seasons. Be prepared for very warm weather in the summer months, in particular in the river valleys. The spring and fall are moderate and comfortable. Winter conditions can be severe in the higher elevations, with snow and ice making travel difficult and dangerous. Please visit the National Weather Service for comprehensive weather information.",
        state: "ID,MT,OR,WA",
        parkCode: "nepe",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/nico/index.htm",
        parkname: "Nicodemus National Historic Site",
        address: "304 Washington Ave. Nicodemus 67625-3015",
        description:
          "Formerly enslaved African Americans left Kentucky in organized colonies at the end of the of post-Civil War Reconstruction period to experience freedom in the 'promised land' of Kansas. Nicodemus represents the involvement of African Americans in the westward expansion and settlement of the Great Plains. It is the oldest and only remaining Black settlement west of the Mississippi River.",
        weather_description:
          "Northwest Kansas has a four season climate typified by long, hot summers, cold winters, short spring and fall seasons, and nearly constant breeze. Humidity is relatively low compared to the eastern portion of the state. Afternoon thunderstorms with lightning, hail, and gusty winds frequently occur during the spring and summer. Tornados are possible but are less common in Kansas than they are in several other states. In the event of a tornado seek shelter immediately. Winter snow accumulation is usually l",
        state: "KS",
        parkCode: "nico",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/nisi/index.htm",
        parkname: "Ninety Six National Historic Site",
        address: "Ninety Six National Historic Site Ninety Six 29666",
        description:
          "Settlers struggled against the harsh backcountry to survive. Cherokee Indians hunted and fought to keep their land. Two towns and a trading post were formed then abandoned to the elements. And two Revolutionary War battles claimed over 100 lives. Come discover the 18th century history of South Carolina.",
        weather_description:
          "Temperatures for the area range from very hot and humid in the summer to cool and moderate in the winter.",
        state: "SC",
        parkCode: "nisi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/niob/index.htm",
        parkname: "Niobrara National Scenic River",
        address: "214 W US Highway 20 Valentine 69201",
        description:
          "With a little something for everyone, the Niobrara National Scenic River is a destination for crossing adventures off your bucket list. Most popular for river recreation, you can float the Niobrara River on a canoe, tube, or kayak as a beginner and have a blast. Hiking, biking, and wildlife watching keep our visitors busy. Oh! And we haven't even told you about the waterfalls yet.",
        weather_description:
          "Summer (June-August): highs - low 80s to low 100s; lows - 50s to 60s, with occasional thunderstorms and associated strong winds. Moderate dry winds are common in the summer. 8.3' is average summer rainfall. Winter (November-April): Average highs 20-30s, average lows 0-10s with 5.5'/month average snowfall. Spring (April/May) and Fall (September/October) have cooler temperatures: average highs 60-70s, average lows 30-40s with 7.3' average rain/snowfall.",
        state: "NE",
        parkCode: "niob",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/noat/index.htm",
        parkname: "Noatak National Preserve",
        address: "171 3rd Ave Kotzebue 99752",
        description:
          "As one of North America's largest mountain-ringed river basins with an intact ecosystem, the Noatak River environs features some of the Arctic's finest arrays of plants and animals. The river is classified as a national wild and scenic river, and offers stunning wilderness float-trip opportunities - from deep in the Brooks Range to the tidewater of the Chukchi Sea.",
        weather_description:
          "Snow, rain, and freezing temperatures can occur any time of the year. Always travel with good quality rain gear and warm layers. Be especially careful to stay dry. Hypothermia can set in on a windy, wet day, even when it doesn't feel that cold.",
        state: "AK",
        parkCode: "noat",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/noca/index.htm",
        parkname: "North Cascades National Park",
        address: "810 State Route 20 Sedro-Woolley 98284",
        description:
          "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
        weather_description:
          "The best weather for visiting the North Cascades generally occurs between mid-June and late-September. Summer daytime temperatures average in the 70's F. Snow is off most trails by mid-July. Autumn and Spring are popular for color and wildlife. Storms are common: always be prepared for a few days of rain and wind. The east side of the Cascade Mountains (Lake Chelan National Recreation Area) is drier and warmer in the summer than the west side. Summer temperatures at Stehekin reach the 90's F.",
        state: "WA",
        parkCode: "noca",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/noco/index.htm",
        parkname: "North Country National Scenic Trail",
        address: "318 East Main Street, Suite K Lowell 49331",
        description:
          "Come to the North Country. Trek the hills and valleys. Stand on the shores of lakes & streams from glaciers 10,000 years before. Clear-flowing water, red/gold of autumn, a fairyland of snow, open prairies, and distant horizons paint the land. Historic sites along the way tell how America settled and grew as a nation. From North Dakota to Vermont, adventure is never far away.",
        weather_description:
          "With the trail going through over 4,600 miles through seven states from the Northeast to the Great Plains, weather along the trail can be highly variable. You could be subject to any kind of weather or temperature related emergency depending on your location and the season. Be careful to protect yourself from heat-related illnesses and hypothermia while out on the trail. Be mindful of lightning, severe storms, and other environmental hazards common to the “North Country.”",
        state: "MI,MN,ND,NY,OH,PA,VT,WI",
        parkCode: "noco",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/obed/index.htm",
        parkname: "Obed Wild & Scenic River",
        address: "208 N. Maiden Street Wartburg 37887",
        description:
          "The Obed Wild and Scenic River looks much the same today as it did when the first white settlers strolled its banks in the late 1700s. While meagerly populated due to poor farming soil, the river was a hospitable fishing and hunting area for trappers and pioneers. Today, the Obed stretches along the Cumberland Plateau and offers visitors a variety of outdoor recreational opportunities.",
        weather_description:
          "The weather along the Cumberland Plateau can be best described as unpredictable. Each season brings its own weather patterns. Summers are generally hot and humid, with high temperatures sometimes eclipsing 90 degrees. The low temperatures in winter often dip below freezing. Spring sees the most amount of precipitation, but rainfall can occur in various amounts throughout the year.",
        state: "TN",
        parkCode: "obed",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/ocmu/index.htm",
        parkname: "Ocmulgee Mounds National Historical Park",
        address: "1207 Emery Hwy Macon 31217",
        description:
          "Welcome to Ocmulgee Mounds National Historical Park. This park is a prehistoric American Indian site. American Indians first came here during the Paleo-Indian period hunting Ice Age mammals. Many different American Indian cultures occupied this land for thousands of years. Around 900 CE, the Mississippian Period began. They constructed mounds for their elite, which remain today.",
        weather_description:
          "Macon has a humid subtropical climate (Köppen climate classification Cfa). The normal monthly mean temperature ranges from 46.3 °F (7.9 °C) in January to 81.8 °F (27.7 °C) in July. On average, there are 4.8 days with 100 °F (38 °C Winter's are mild. Temps ranging from 30 degrees to 50 degrees. Spring is mild but wet. Temps ranging from 50 degrees to low 70 degrees. Summers are hot and very humid. Temp ranging from upper 80 degrees to 100 degrees. Fall is pleasant. Temps ranging from 60 to 80 degrees.",
        state: "GA",
        parkCode: "ocmu",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/okci/index.htm",
        parkname: "Oklahoma City National Memorial",
        address: "Oklahoma City National Memorial Oklahoma City 73102-0676",
        description:
          "The outdoor symbolic memorial is a place of quiet reflection, honoring victims, survivors, rescuers, and all who were changed forever on April 19, 1995. It encompasses the now sacred soil where the Alfred P. Murrah Federal Building once stood, capturing and preserving forever the place and events that changed the world.",
        weather_description:
          "Summers are very warm with temperatures averaging low- mid 90’s. Also, be mindful of the heat index. Spring weather brings mild temperatures, 60’s-70’s, but the ability to produce severe storms that could include heavy rains, strong winds, hail, and tornadoes. While winters are generally mild delivering temperatures in the 40’s and 50’s, the wind chill can be brutal. No matter the season you are planning to visit, be prepared for the winds to be gusting.",
        state: "OK",
        parkCode: "okci",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/olsp/index.htm",
        parkname: "Old Spanish National Historic Trail",
        address: "National Trails Santa Fe 87505",
        description:
          "Follow the routes of mule pack trains across the Southwest on the Old Spanish National Historic Trail between Santa Fe, New Mexico, and Los Angeles, California. New Mexican traders moved locally produced merchandise across what are now six states to exchange for mules and horses.",
        weather_description:
          "Due to the length of Old Spanish National Historic Trail, be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: www.weather.gov",
        state: "AZ,CA,CO,NV,NM,UT",
        parkCode: "olsp",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/olym/index.htm",
        parkname: "Olympic National Park",
        address: "Olympic National Park Visitor Center Port Angeles 98362",
        description:
          "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!",
        weather_description:
          "Summers tend to be fair and warm, with high temperatures between 65 and 75 degrees F. July, August and September are the driest months, with heavier precipitation during the rest of the year. While winters are mild at lower elevation, snowfall can be heavy in the mountains. It is common for different weather conditions to exist within the park at the same time. At any time of year, visitors should come prepared for a variety of conditions.",
        state: "WA",
        parkCode: "olym",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/orca/index.htm",
        parkname: "Oregon Caves National Monument & Preserve",
        address: "19000 Caves Hwy Cave Junction 97523",
        description:
          "Deep within the Siskiyou Mountains are dark, twisting passages that await your discovery. Eons of acidic water seeping into marble rock created and decorated the wondrous “Marble Halls of Oregon.” Join a tour, get a taste of what caving is all about, and explore a mountain from the inside and out!",
        weather_description:
          "For current weather conditions visit http://forecast.weather.gov/MapClick.php?lat=42.07376224008719&lon=-123.3984375&site=mfr&smap=1&unit=0&lg=en&FcstType=text#.Vqe3FfkrKUk",
        state: "OR",
        parkCode: "orca",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/oreg/index.htm",
        parkname: "Oregon National Historic Trail",
        address: "National Trails - Regions 6, 7, 8 Santa Fe 87505",
        description:
          "Imagine yourself an emigrant headed for Oregon: would promises of lush farmlands and a new beginning lure you to leave home and walk for weeks? More than 2,000 miles of trail ruts and traces can still be seen along the Oregon National Historic Trail in six states and serve as reminders of the sacrifices, struggles, and triumphs of early American settlers.",
        weather_description:
          "Due to the length of the Oregon National Historic Trail,be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: www.weather.gov",
        state: "ID,KS,MO,NE,OR,WA,WY",
        parkCode: "oreg",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/orpi/index.htm",
        parkname: "Organ Pipe Cactus National Monument",
        address: "10 Organ Pipe Drive Ajo 85321",
        description:
          "Look closely. Look again. The sights and sounds of Organ Pipe Cactus National Monument, an International Biosphere Reserve, reveal a thriving community of plants and animals. Human stories echo throughout this desert preserve, chronicling thousands of years of desert living. A scenic drive, wilderness hike or a night of camping will expose you to a living desert that thrives.",
        weather_description:
          "Summer months are hot, with temperatures exceeding 100F. Winter months are milder, with temperatures in the 70s, with overnight lows in the 40s.",
        state: "AZ",
        parkCode: "orpi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/ovvi/index.htm",
        parkname: "Overmountain Victory National Historic Trail",
        address: "4001 Chesnee Hwy Gaffney 29341",
        description:
          "Stretching 330 miles through four states (Virginia, Tennessee, North and South Carolina) the Overmountain Victory National Historic Trail traces the route used by patriot militia during the pivotal Kings Mountain campaign of 1780. Follow the campaign by utilizing a Commemorative Motor Route which uses existing state highways marked with the distinctive trail logo, or 87 miles of walkable pathways.",
        weather_description:
          "Temperatures for the area range from very hot and humid in the summer to cool and moderate in the winter.",
        state: "NC,SC,TN,VA",
        parkCode: "ovvi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/oxhi/index.htm",
        parkname: "Oxon Cove Park & Oxon Hill Farm",
        address: "Bald Eagle Road Oxon Hill 20745",
        description:
          "The diverse history of Maryland and our national heritage can be experienced at Oxon Cove Park. Through hands-on programs and other activities, you can experience farm life and how its changed over time. Explore how the park evolved from a plantation home during the War of 1812, to a hospital farm, to the park you can visit today.",
        weather_description:
          "Make sure that you wear appropriate shoes and clothing. Closed-toe shoes are recommended, sneakers or comfortable boots are best. Dress for the season, light clothes in summer, layers in spring and fall, and warm coats in winter. Cooler days are often the best days to visit Oxon Hill Farm if you’re interested in seeing farm animals or wildlife out and about. There are still lots of things to see and do on hotter days, just make sure to keep hydrated and take frequent breaks.",
        state: "MD",
        parkCode: "oxhi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/ozar/index.htm",
        parkname: "Ozark National Scenic Riverways",
        address: "404 Watercress Drive Van Buren 63965",
        description:
          "Ozark National Scenic Riverways is the first national park area to protect a river system. The Current and Jacks Fork rivers are two of the finest floating rivers you'll find anywhere. Spring-fed, cold and clear they are a delight to canoe, swim, boat or fish. Besides these two famous rivers, the park is home to hundreds of freshwater springs, caves, trails and historic sites such as Alley Mill.",
        weather_description:
          "Ozark National Scenic Riverways is located in southeastern Missouri. Summer temperatures generally range from 75-100 degrees with high humidity. Winter temperatures generally range from 0-50 degrees with periods of intermittent freezing and snow.",
        state: "MO",
        parkCode: "ozar",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/pais/index.htm",
        parkname: "Padre Island National Seashore",
        address: "20420 Park Road 22 Corpus Christi 78418",
        description:
          "Padre Island National Seashore separates the Gulf of Mexico from the Laguna Madre, one of a few hypersaline lagoons in the world. The park protects 70 miles of coastline, dunes, prairies, and wind tidal flats teeming with life. It is a safe nesting ground for the Kemp’s ridley sea turtle and a haven for over 380 bird species. It also has a rich history, including the Spanish shipwrecks of 1554.",
        weather_description:
          "Padre Island has long, hot summers and short, mild winters. Summers are very humid. Winter can bring strong cold fronts and gale force winds. Most rain falls near the beginning and end of hurricane season (June-October). Average seasonal temperatures (Fahrenheit) are: Spring - high 70s-80s, low 50s-60s; Summer - high mid-90s, low 70s; Fall - high 70s-80s, low 50s-60s; Winter - high 50s-70s, low 30s-40s. Year-round, average wind speed ranges from 5-25 miles per hour. Relative humidity seldom drops below 70%.",
        state: "TX",
        parkCode: "pais",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/paal/index.htm",
        parkname: "Palo Alto Battlefield National Historical Park",
        address: "7200 Paredes Line Road Brownsville 78526",
        description:
          "On May 8, 1846, United States and Mexican troops clashed on the prairie of Palo Alto. The battle was the first in a two-year long war that changed the map of North America. Palo Alto Battlefield National Historical Park preserves the site of this notable battle and provides an understanding of the causes, events, and consequences of the U.S.-Mexican War.",
        weather_description:
          "Summers are hot and humid. Tropical weather systems generally affect the area from August to October. Winters are usually mild but cold fronts can drop temperatures by up to 30 degrees in about an hour.",
        state: "TX",
        parkCode: "paal",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/pagr/index.htm",
        parkname: "Paterson Great Falls National Historical Park",
        address: "72 McBride Avenue Extension Paterson 07501",
        description:
          "Cotton and silk fabrics; steam locomotives; continuous rolls of paper; airplane engines. What do these things have in common? They were all manufactured in the same place - Paterson, NJ. In 1792, Paterson was established, America's first planned industrial city, centered around the Great Falls of the Passaic River. From humble mills rose industries that changed the face of the United States.",
        weather_description:
          "http://forecast.weather.gov/MapClick.php?lat=40.91475800178142&lon=-74.1678490947591#.VusP4uIrK71",
        state: "NJ",
        parkCode: "pagr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/peri/index.htm",
        parkname: "Pea Ridge National Military Park",
        address: "15930 E Hwy 62 Garfield 72732",
        description:
          "On March 7-8, 1862, over 23,000 soldiers fought here to decide the fate of Missouri and was a turning point of the war in the West. The 4,300 acre battlefield honors those who fought and died on these grounds. Pea Ridge was the most pivotal Civil War battle west of the Mississippi River and is one of the most intact Civil War battlefields in the United States.",
        weather_description:
          "Pea Ridge National Military Park is located in the northwestern part of the state and is on a part of the Ozark Plateau. The climate is hot and humid in the summers, has mild temperatures in the fall, drier and cooler temperatures in the winter. During the spring and summer active thunderstorms can pop up. During the winter months the wind chill factor can make the temperature feel much colder than the air temperature. The winters can be cold with some snow and ice.",
        state: "AR",
        parkCode: "peri",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/valr/index.htm",
        parkname: "Pearl Harbor National Memorial",
        address: "Pearl Harbor Visitor Center Honolulu 96818",
        description:
          "At the Pearl Harbor National Memorial, learn about one of the most pivotal moments in US history: the attack on Pearl Harbor, and the subsequent entry of the United States into World War II.",
        weather_description:
          "Hawaii has two seasons – winter (ho'oilo) and summer (kau wela) – and temperatures don't change drastically the way they do in the mainland United States. During the day, expect temperatures in the mid-70s to the mid-80s all year around. Expect lows in the winter months (November to March) to be around 60 degrees. The Hawaiian winter is also considered the rainy season, and flash floods are not uncommon. You can expect to see lots of rainbows as the rain clears.",
        state: "HI",
        parkCode: "valr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/peco/index.htm",
        parkname: "Pecos National Historical Park",
        address: "Pecos National Historical Park Pecos 87552",
        description:
          "In the midst of piñon, juniper, and ponderosa pine woodlands of the Sangre de Cristo Mountains not far from Santa Fe, the remains of Indian pueblos stand as meaningful reminders of people who once prevailed. Pecos National Historical Park helps visitors explore the cultural exchange and geographic features that played such crucial roles in the rich history of the Pecos Valley.",
        weather_description:
          "Pecos National Historical Park is located at nearly 7,000 feet in altitude in the high desert region of Northern New Mexico. Please know your limits at this high desert altitude. We recommend that you wear clothing appropriate to the season, bring plenty of water, stop for a snack or lunch at one of the picnic tables, wear comfortable shoes, and put on plenty of sunscreen. Specific daily Pecos weather information may be accessed at this link: http://www.nps.gov/peco/planyourvisit/weather.htm.",
        state: "NM",
        parkCode: "peco",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/paav/index.htm",
        parkname: "Pennsylvania Avenue",
        address: "1 Pennsylvania Ave, NW Washington 20002",
        description:
          "A street unlike any other. It is known the world over as the heart of the Nation's Capital. America's history has marched, paraded, promenaded, and protested its way along the Avenue.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "paav",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/pevi/index.htm",
        parkname: "Perry's Victory & International Peace Memorial",
        address: "93 Delaware Avenue Put-in-Bay 43456",
        description:
          "Perry's Victory and International Peace Memorial was established to honor those who fought in the Battle of Lake Erie, during the War of 1812, and to celebrate the long-lasting peace among Great Britain, Canada and the U.S. The Memorial, a Doric column, rising 352 feet over Lake Erie is situated 5 miles from the longest undefended border in the world.",
        weather_description:
          "Summer months can be extremely hot and humid, with occasional and sudden severe thunderstorms. Fall and spring are pleasant with cool temperatures and brisk winds. During the Winter the Memorial and Visitor Center are closed.",
        state: "OH",
        parkCode: "pevi",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/pete/index.htm",
        parkname: "Petersburg National Battlefield",
        address: "Petersburg National Battlefield Petersburg 23803",
        description:
          "Nine and a half months, 70,000 casualties, the suffering of civilians, thousands of U. S. Colored Troops fighting for the freedom of their race, and the decline of Gen. Robert E. Lee's Army of No. Virginia all describe the Siege of Petersburg. It was here Gen. Ulysses S. Grant cut off all of Petersburg's supply lines ensuring the fall of Richmond on April 3, 1865. Six days later, Lee surrendered.",
        weather_description:
          "Winters are usually cool with temperatures averaging in the 40s. Spring and fall are mild. Summer can bring very hot and humid weather.",
        state: "VA",
        parkCode: "pete",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/pefo/index.htm",
        parkname: "Petrified Forest National Park",
        address: "1 Park Road Petrified Forest 86028",
        description:
          "Did you know that Petrified Forest is perfect for exploration and discovery? While the park has all the wonders known for a century, there are many new adventures and discoveries to share. There are backcountry hikes into areas never open before such as Red Basin. There are new exhibits that bring the stories to life. Come rediscover Petrified Forest!",
        weather_description:
          "Petrified Forest National Park is a semi-arid grassland. Temperatures range from above 100° F (38° C) to well below freezing. About 10 inches (25.4 cm) of moisture comes during infrequent snow in the winter and often dramatic summer thunder-storms. Animals and plants are adapted to extremes in temperature and moisture. You should be ready too. Check out the forecast before you arrive and plan accordingly.",
        state: "AZ",
        parkCode: "pefo",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/petr/index.htm",
        parkname: "Petroglyph National Monument",
        address: "Visitor Information Center Albuquerque 87120",
        description:
          "Petroglyph National Monument protects one of the largest petroglyph sites in North America, featuring designs and symbols carved onto volcanic rocks by Native Americans and Spanish settlers 400 to 700 years ago. These images are a valuable record of cultural expression and hold profound spiritual significance for contemporary Native Americans and for the descendants of the early Spanish settlers.",
        weather_description:
          "Altitude approx. 5000 ft. Usually sunny and dry, with low relative humidity. Winter temperatures range from 40 to 50 degrees F. Summer temperatures range from 88-99 degrees F. 278 days of sunshine per year. Spring can be windy with 20 to 30 mph sustained winds which can produce periods of blowing sand and dust. For current weather forecast, Google Albuquerque weather.",
        state: "NM",
        parkCode: "petr",
        createdAt: "2021-02-06T13:28:36.487",
        updatedAt: "2021-02-06T13:28:36.487",
      },
      {
        url: "https://www.nps.gov/piro/index.htm",
        parkname: "Pictured Rocks National Lakeshore",
        address: "1505 Sand Point Road Munising 49862",
        description:
          "Sandstone cliffs, beaches, sand dunes, waterfalls, inland lakes, deep forest, and wild shoreline beckon you to visit Pictured Rocks National Lakeshore. The power of Lake Superior shapes the park's coastal features and affects every ecosystem, creating a unique landscape to explore. Hiking, camping, sightseeing, and four-season outdoor opportunities abound.",
        weather_description:
          "Summers are pleasant with the average highs in June, July, and August in the 70s°F, and lows in the low 50s°F. The coldest months are December through March with average highs of 25°F to 32°F, and average lows in the teens. Annual precipitation averages 31 inches; average annual snowfall ranges from 140 to 160 inches. Snow generally covers the ground from late November through late April.",
        state: "MI",
        parkCode: "piro",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/pinn/index.htm",
        parkname: "Pinnacles National Park",
        address: "5000 Highway 146 Paicines 95043",
        description:
          "Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor.",
        weather_description:
          "Pinnacles National Park has a Mediterranean climate with hot and dry summers, and mild winters with moderate precipitation. The park is several miles inland from the Pacific Ocean. A wider variation in seasonal temperatures can be expected in the local area. On July or August day, daytime temperatures over 100° F are not uncommon, but a bright sunny day can turn into a very cold night.",
        state: "CA",
        parkCode: "pinn",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/pisp/index.htm",
        parkname: "Pipe Spring National Monument",
        address: "Pipe Spring National Monument Fredonia 86022",
        description:
          "Beneath vermilion cliffs, American Indians, Mormon ranchers, plants, animals, and many others have depended on the life-giving water found at the desert oasis at Pipe Spring. Learn about settler and Kaibab Paiute life by exploring the museum, historic fort and cabins, garden, and Ridge Trail. Visit with rangers and ranch animals, and attend living history demonstrations and talks.",
        weather_description:
          "Weather is hot in summer and cold in winter. Expect summer highs to be 80-100 degrees Fahrenheit and winter highs to be 30-50 degrees. Early morning and late afternoon can be considerably cooler; dress in layers and bring plenty of sunscreen. Arizona climate is very dry -- bring at least 1 liter of water per person per visit to Pipe Spring.",
        state: "AZ",
        parkCode: "pisp",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/pipe/index.htm",
        parkname: "Pipestone National Monument",
        address: "36 Reservation Ave Pipestone 56164",
        description:
          "For countless generations, American Indians have quarried the red pipestone found at this site. These grounds are sacred to many people because the pipestone quarried here is carved into pipes used for prayer. Many believe that the pipe's smoke carries one's prayer to the Great Spirit. The traditions of quarrying and pipemaking continue here today.",
        weather_description:
          "Weather varies seasonally from warm and humid in the summer to cold and snowy in the winter. Visitors should be prepared for seasonal weather and for rapidly-changing conditions.",
        state: "MN",
        parkCode: "pipe",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/pisc/index.htm",
        parkname: "Piscataway Park",
        address: "3400 Bryan Point Road Accokeek 20607",
        description:
          "Piscataway Park is home to bald eagles, beavers, deer, foxes, ospreys, and many other species. To complement the surroundings, the park has, in addition to a public fishing pier and two boardwalks over fresh water tidal wetlands, a variety of nature trails, meadows, and woodland areas. The Park is also home to National Colonial Farm.",
        weather_description:
          "Summers are generally hot and humid, with daytime highs frequently above 90 degrees Fahrenheit and scattered afternoon thunderstorms. Please carry water while participating in physical activity and be prepared to take shelter from lightning. Winters are generally cold, with nighttime lows frequently near freezing and occasional snowfall. Weather during spring and fall is generally moderate, but can change quickly.",
        state: "MD",
        parkCode: "pisc",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/pore/index.htm",
        parkname: "Point Reyes National Seashore",
        address: "1 Bear Valley Road Point Reyes Station 94956",
        description:
          "From its thunderous ocean breakers crashing against rocky headlands and expansive sand beaches to its open grasslands, brushy hillsides, and forested ridges, Point Reyes offers visitors over 1500 species of plants and animals to discover. Home to several cultures over thousands of years, the Seashore preserves a tapestry of stories and interactions of people. Point Reyes awaits your exploration.",
        weather_description:
          "The moderating influence of the Pacific Ocean creates a climate with no great extremes of heat or cold. Any season can bring interesting weather during your visit to Point Reyes National Seashore. Come prepared!",
        state: "CA",
        parkCode: "pore",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/poex/index.htm",
        parkname: "Pony Express National Historic Trail",
        address: "National Trails Santa Fe 87505",
        description:
          "It is hard to believe that young men once rode horses to carry mail from Missouri to California in the unprecedented time of only 10 days. This relay system along the Pony Express National Historic Trail in eight states was the most direct and practical means of east-west communications before the telegraph.",
        weather_description:
          "Due to the length of the Pony Express National Historic Trail, be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: www.weather.gov",
        state: "CA,CO,KS,MO,NE,NV,UT,WY",
        parkCode: "poex",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/poch/index.htm",
        parkname: "Port Chicago Naval Magazine National Memorial",
        address: "4202 Alhambra Ave Martinez 94553",
        description:
          "On the evening of July 17, 1944, residents in the San Francisco east bay area were jolted awake by a massive explosion that cracked windows and lit up the night sky. At Port Chicago Naval Magazine, 320 men were instantly killed when two ships being loaded with ammunition for the Pacific theater troops blew up. It was WWII's worst home front disaster.",
        weather_description:
          "The Port Chicago Naval Magazine National Memorial is on a base and sits on the waterfront. There is no shelter at the memorial, aside from the shuttle. It can be windy and cold during any season. Many people prefer to at least bring a light jacket during the summer, or coat during the other seasons.",
        state: "CA",
        parkCode: "poch",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/pohe/index.htm",
        parkname: "Potomac Heritage National Scenic Trail",
        address: "Potomac Heritage NST Office Washington 20242",
        description:
          "Over thousands of years, the Potomac River wound its way through layers of rock. Carving limestone cliffs, roaring falls, and serene winding bends, these waters created a landscape and shaped a nation. Today, the Potomac River corridor is rich in both history and recreation. Offering a chance to both explore your heritage and choose your adventure along the way. Start your journey below!",
        weather_description:
          "Weather associated with the PHT network is typical of a temperate climate, with four distinct seasons and variable precipitation throughout the year. Temperatures can vary from a high of 100 degrees Fahrenheit in the summer to 0 degrees in the winter.",
        state: "DC,MD,PA,VA",
        parkCode: "pohe",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/popo/index.htm",
        parkname: "Poverty Point National Monument",
        address: "6859 Hwy. 577 Pioneer 71266",
        description:
          "Now a nearly forgotten culture, Poverty Point at its peak 3,000 years ago was part of an enormous trading network that stretched for hundreds of miles across the continent. It was - and is - also an engineering marvel, the product of five million hours of labor. Explore the culture of a highly sophisticated people who left behind one of North America’s most important archeological sites.",
        weather_description:
          "Summers are sunny, hot, and humid. Winters tend to be mild; however, humid rainy periods occur throughout the year. Sudden and severe thunderstorms are common, so stay alert to weather forecasts. Check with rangers at the Visitor Center and/or USS Cairo Museum for updates on weather patterns. Wear comfortable sportswear appropriate for the season, with walking or hiking shoes recommended.",
        state: "LA",
        parkCode: "popo",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wicl/index.htm",
        parkname:
          "President William Jefferson Clinton Birthplace Home National Historic Site",
        address: "117 South Hervey Street Hope 71801",
        description:
          "Named for the father who died shortly before his birth, William Jefferson Blythe III later became the 42nd President of the United States. In this place, the experiences shared with his mother & grandparents in rural Arkansas developed the broad views on race relations, social justice, and public service that defined his presidency and life after the White House. For Bill Clinton, 'Hope was home.'",
        weather_description:
          "Average temperatures in Hope can range from 30ºF to 60ºF in winter, 40ºF to 80ºF in the spring, 65ºF to 95ºF in summer, and 50ºF to 75ºF in the fall. Humidity in late spring, summer and early fall can make temperatures feel hotter and lead to dehydration or heatstroke. We recommend that visitors in these seasons dress comfortably and drink plenty of water to beat the heat. Inclement weather (tornadoes, thunderstorms) are possible at times, so check local weather conditions before your visit to Arkansas.",
        state: "AR",
        parkCode: "wicl",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/whho/index.htm",
        parkname: "President's Park (White House)",
        address: "1450 Pennsylvania Ave., NW Washington 20230",
        description:
          "Every president except George Washington has called the White House home and has run the executive branch of the United States government from within its walls. Recognizable around the world, the White House stands as a symbol of democracy. The White House and its park grounds also serve as an iconic place for civil discourse.",
        weather_description:
          "The Washington, DC, area has a four-season Mid-Atlantic climate. Summertime is warm and humid, while winter can be cold and snowy. Precipitation averages 2-4” monthly, year-round. The warmest months are June, July, and August, with average highs in the 80s (~31) combined with high humidity. Temperatures often climb into the 90s (~34). The coldest months are December, January, and February, with average temperatures in the 30s (~3), though lows may dip into the single digits on occasion.",
        state: "DC",
        parkCode: "whho",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/prsf/index.htm",
        parkname: "Presidio of San Francisco",
        address: "Presidio of San Francisco San Francisco 94129",
        description:
          "For 218 years, the Presidio served as an army post for three nations. World and local events, from military campaigns to World Fairs and earthquakes, left their mark. Come enjoy the history and the natural beauty of the Presidio. Explore centuries of architecture. Reflect in a national cemetery. Walk along an historic airfield, through forests or to beaches, and admire spectacular vistas.",
        weather_description:
          "The weather at the Presidio is typically cool and quite variable from location to location. The summer is often foggy and cool, so a light coat or sweater is appropriate year-round.",
        state: "CA",
        parkCode: "prsf",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/prwi/index.htm",
        parkname: "Prince William Forest Park",
        address: "18170 Park Entrance Road Triangle 22172",
        description:
          "Prince William Forest Park is an oasis, a respite of quiet and calm. In 1936, Chopawamsic Recreation Area opened its gates to house children's 'relief' camps during the Great Depression. Renamed Prince William Forest Park in 1948, these fragrant woods and trickling streams have welcomed generations of campers, hikers, bikers and nature lovers. Discover Northern Virginia's best kept secret!",
        weather_description:
          "Prince William Forest Park experiences all four seasons. Spring and fall are generally comfortable with precipitation possible.Summers can be hot and humid with average temperatures in the high 80s and with sudden thunderstorms possible. July and August are the hottest months. Winters can be cold with average temperatures in the winter of 41 degrees with variable precipitation. The main park roads can close due to snowy conditions, though cross-country skiing and snow-shoeing are permitted.",
        state: "VA",
        parkCode: "prwi",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/puhe/index.htm",
        parkname: "Pu`ukohol&#257; Heiau National Historic Site",
        address: "Pu'ukohola Heiau National Historic Site Kawaihae 96743",
        description:
          "How many places in America can you walk in the footsteps of a king? Where else has a stranded sailor risen up to become a great chief over an entire island? Where else can you experience the culminating event of a people, foretold from centuries past? Where else can you stand on a beach and watch as sharks pass over a submerged temple? Experience all this and much more – only at Pu'ukoholā Heiau!",
        weather_description:
          "The weather in the park is typically hot and sunny with daytime temperatures in the upper 80's. An excellent time to experience the park is in the morning and in the late afternoon when the temperatures are a bit cooler. The park is open daily from 7:30 a.m. until 5 p.m. However the park does occasionally close because of high winds or dangerous storm conditions. Please check with the visitor center or your hotel for any weather advisories or hazardous conditions on the day of your visit.",
        state: "HI",
        parkCode: "puhe",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/pull/index.htm",
        parkname: "Pullman National Monument",
        address: "11141 S. Cottage Grove Chicago 60628",
        description:
          "In a growing Chicago neighborhood, diverse people and stories intertwined. All were seeking opportunity. Some succeeded. Others were limited—by race, gender, or economic status. Their stories came together in Pullman, a planned industrial community famed for its urban design and architecture.",
        weather_description:
          "The park lies in a humid continental zone with a generally temperate climate. Chicago winters are mildly cold with average temperatures around 26 degrees (F). Summers are hot and humid with an average temperature around 72 degrees (F). Average annual total rainfall is about 36'. Snowfall in the winter is moderate with an average total snowfall of about 38'.",
        state: "IL",
        parkCode: "pull",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/puho/index.htm",
        parkname: "Puʻuhonua o Hōnaunau National Historical Park",
        address: "Highway 160 Hōnaunau 96726",
        description:
          "Imagine you had just broken the sacred laws, the kapu, and the only punishment was death. Your only chance of survival is to elude your pursuers and reach the Puʻuhonua, a place of refuge. The Puʻuhonua protected the kapu breaker, defeated warriors, as well as civilians during the time of battle. No physical harm could come to those who reached the boundaries of the Puʻuhonua.",
        weather_description:
          "The weather in the park is typically hot and sunny with daytime temperatures in the upper 80's. An excellent time to experience the park is in the morning and in the late afternoon when the temperatures are a bit cooler. The park occasionally closes because of high winds or dangerous storm conditions. Please check with the visitor center or your hotel for any weather advisories or hazardous conditions on the day of your visit.",
        state: "HI",
        parkCode: "puho",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/rabr/index.htm",
        parkname: "Rainbow Bridge National Monument",
        address: "Rainbow Bridge National Monument Lake Powell 00000",
        description:
          "Rainbow Bridge is one of the world's largest known natural bridges. The span has undoubtedly inspired people throughout time--from the neighboring American Indian tribes who consider Rainbow Bridge sacred, to the 85,000 people from around the world who visit it each year. Please visit Rainbow Bridge in a spirit that honors and respects the cultures to whom it is sacred.",
        weather_description:
          "Summers are extremely hot with little, if any, shade. Winters are moderately cold with night time lows often below freezing. Spring weather is highly variable with extended periods of strong winds. Fall is generally mild. Temperatures range from 110°F (43°C) in June & July to 20°F (-7°C) in December & January. Although precipitation is generally less than 6 inches (15cm) annually, both heavy rains and flash flooding can occur, particularly during the summer monsoon season.",
        state: "UT",
        parkCode: "rabr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/reer/index.htm",
        parkname: "Reconstruction Era National Historical Park",
        address: "706 Craven Street Beaufort 29902",
        description:
          "The Reconstruction era,1861-1900 the historic period in which the United States grappled with the question of how to integrate millions of newly freed African Americans into social, political,economic, and labor systems, was a time of significant transformation. The people, places, and events in Beaufort County, South Carolina, reflect on the most important issues of this tumultuous time period.",
        weather_description: "No weather info provided",
        state: "SC",
        parkCode: "reer",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/redw/index.htm",
        parkname: "Redwood National and State Parks",
        address: "1111 Second Street Crescent City 95531",
        description:
          "Most people know Redwood as home to the tallest trees on Earth. But the parks also protect vast prairies, oak woodlands, wild riverways, and nearly 40 miles of rugged coastline. People have lived in this verdant landscape since time immemorial. Together, the National Park Service and California State Parks are managing and restoring these lands for the inspiration, enjoyment, and education of all.",
        weather_description:
          "Visitors should be prepared for cooler and damp weather. Dress in layers and expect to get wet. Year-round temperatures along California's redwood coast: mid-40s°F (7°C) to mid-60s°F (18°C). Summer can be foggy, with highs occasionally reaching low 70s°F (20°C). Winters are cooler with considerable rain. October through April averages 60-80 inches of rain over the region.",
        state: "CA",
        parkCode: "redw",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/rich/index.htm",
        parkname: "Richmond National Battlefield Park",
        address: "470 Tredegar Street Richmond 23219",
        description:
          "The center of Confederate manufacturing fueled a modern war, one of the South’s largest hospitals gave care to the sick and wounded, and armies battled on open fields and in miles of defensive earthworks. From 1861 to 1865, Richmond’s fate would determine America’s future.",
        weather_description:
          "Summer-hot and humid Fall and spring-mild Winter-cold with occasional ice and snow",
        state: "VA",
        parkCode: "rich",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/rigr/index.htm",
        parkname: "Rio Grande Wild & Scenic River",
        address: "Rio Grande Wild & Scenic River Big Bend National Park 79834",
        description:
          "It is an irresistible playground where unruly rapids check your skills as a canyon wren’s definitive call cascades down ancient limestone cliffs. Below the chasm, the canyon’s raw beauty dances across mirrored water. While the primal nature of the river stirs hunger for spirited adventure, the river is also an undulant ribbon of wetland corridor and, against all odds, the lifeblood of the desert.",
        weather_description:
          "Variable -- February-April: High temperatures range from mid-70sF (23C) to low-90sF (32C) with lows from the mid-30sF (2C) to mid-50sF (12C). Cold fronts can bring freezing weather with rain or snow. -- May-August: Temperatures are hot and the weather can be stormy. Temperatures over 100F (more than 38C) degrees. -- September-January:Temperatures are cooler. The weather can turn cold any time during these months.",
        state: "TX",
        parkCode: "rigr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/rira/index.htm",
        parkname: "River Raisin National Battlefield Park",
        address: "333 N. Dixie Hwy. Monroe 48162",
        description:
          "River Raisin National Battlefield Park preserves, commemorates, and interprets the January 1813 battles of the War of 1812 and their aftermath in Monroe and Wayne counties in SE Michigan. The Battle resulted in the greatest victory for Tecumseh’s American Indian confederation and the greatest defeat for the U.S. The resulting rally cry “Remember the Raisin” spurred support for the rest of the war.",
        weather_description:
          "There is a saying about Michigan weather: 'If you don't like the weather wait five minutes and it will change!' Seasonal average temperatures for Monroe area: Winter: highs range from 30 F- 45 F and lows range from 15 F- 30 F Spring: highs range from 40 F - 70 F and lows range from 25 F - 55 F Summer: highs range from 70 F - 85 F and lows range from 50 F - 65 F Fall: highs range from 40 F - 80 F and lows range from 60 F - 30 F",
        state: "MI",
        parkCode: "rira",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/rocr/index.htm",
        parkname: "Rock Creek Park",
        address: "5200 Glover Rd, NW Washington 20015",
        description:
          "Rock Creek Park is truly a gem in our nation's capital. This 1,754 acre city park was officially authorized in 1890, making it the third national park to be designated by the federal government. It offers visitors the opportunity to escape the bustle of the city and find a peaceful refuge, recreation, fresh air, majestic trees, wild animals, and thousands of years of human history.",
        weather_description:
          "Weather in D.C. is often erratic Spring: Pleasant, Avg. High: 67° Avg. Low: 44.3°, Avg. Precipitation: 12.1” Summer: Hot & Humid, Avg. High: 87°, Avg. Low: 66°, Avg. Precipitation: 12.7”, July is the hottest month Fall: Pleasant, Avg. High: 69°, Avg. Low: 48.3°, Avg. Precipitation: 11.6” Winter: Mild, Avg. High: 45°, Avg. Low: 27.3°, Avg. Precipitation: 9.3”, Avg. Snowfall: 15.4” January is coolest month Hurricanes may impact D.C. in late summer and fall Light droughts are not uncommon in summer",
        state: "DC",
        parkCode: "rocr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/romo/index.htm",
        parkname: "Rocky Mountain National Park",
        address: "1000 US Hwy 36 Estes Park 80517",
        description:
          "Rocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!",
        weather_description:
          "Winter (Dec–Mar): cold weather, deep snow at higher elevations, and seasonal closures of facilities and roads. Spring (April–May): unpredictable weather, with a mix of warm sunny days and cool days with heavy snow and rain. Many trails are still snow-covered. Trail Ridge Road opens in late May. Summer (Jun–Aug): warmer weather, thunderstorms, and wildflowers. Most park roads and facilities are open. Fall (Sep–Nov): crisp air, blue skies, fall colors, and the elk rut. Trail Ridge Road closes mid-October.",
        state: "CO",
        parkCode: "romo",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/rowi/index.htm",
        parkname: "Roger Williams National Memorial",
        address: "282 North Main Street Providence 02903",
        description:
          "Roger Williams National Memorial commemorates the life of the founder of Rhode Island and a champion of the ideal of religious freedom. Williams, banished from Massachusetts for his beliefs, founded Providence in 1636. This colony served as a refuge where all could come to worship as their conscience dictated without interference from the state.",
        weather_description:
          "Summer temperatures range from 56-83F. Fall temperatures range from 30-70F. Winter temperatures range from 20-45F. Spring temperatures range from 30-70F.",
        state: "RI",
        parkCode: "rowi",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/roca/index.htm",
        parkname: "Roosevelt Campobello International Park",
        address: "PO Box 129 Lubec 04652",
        description:
          "For many years, Franklin D. Roosevelt summered on Campobello Island. As an adult, he shared with his family the same active pursuits he enjoyed on the island as child. Although he visited less frequently after contracting polio, Campobello remained important to FDR. Today Roosevelt Campobello International Park serves as a memorial to FDR and a symbol of cooperation between the U.S. and Canada.",
        weather_description:
          "Roosevelt Campobello experiences all four seasons. Summer temperatures range from 50-80F (10-27C). Fall temperatures range from 25-70F (-4-21C). Typically the first is in frost mid-October and first snowfall begins in November and can continue through April with an average accumulation of 67 inches (170 cm). Winter temperatures range from 5-30F (-15 - -1C). Spring temperatures range from 20-60F (-6-16C).",
        state: "ME",
        parkCode: "roca",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/rori/index.htm",
        parkname: "Rosie the Riveter WWII Home Front National Historical Park",
        address: "1414 Harbour Way South, Suite 3000 Richmond 94804",
        description:
          "Explore and honor the efforts and sacrifices of American civilians on the World War II home front. Find out how they lived, worked and got along. Many faces, many stories, many truths weave a complex tapestry of myths and realities from this time of opportunity and loss.",
        weather_description:
          "Weather typical for San Francisco Bay Area. Can be cold and windy year round. Fog in the summer.",
        state: "CA",
        parkCode: "rori",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/ruca/index.htm",
        parkname: "Russell Cave National Monument",
        address: "3729 County Road 98 Bridgeport 35740",
        description:
          "Russell Cave is an archeological site with one of the most complete records of prehistoric cultures in the Southeast. In the 1950s, archeologists uncovered a large quantity of artifacts representing over 10,000 years of use in a single place. Today, Russell Cave National Monument helps bring to light many cultural developments of phenomenal human journeys.",
        weather_description:
          "The weather in Bridgeport, Alabama is mild. The average temperature in the winter is in the low 50's. The average summer temperature is in the high 80's. We receive about 50 inches of rain each year. Snowfall varies, but only lasts a few days per event.",
        state: "AL",
        parkCode: "ruca",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sahi/index.htm",
        parkname: "Sagamore Hill National Historic Site",
        address: "20 Sagamore Hill Road Oyster Bay 11771",
        description:
          "Sagamore Hill was the home of Theodore Roosevelt, 26th President of the United States, from 1885 until his death in 1919. During Roosevelt's time in office, his 'Summer White House' was the focus of international attention. Explore 83 acres of natural surroundings and historic buildings and become inspired by the legacy of one of America's most popular presidents.",
        weather_description:
          "The Atlantic Ocean and Long Island Sound moderates the climate of Long Island and Sagamore Hill. Spring: Highs average between 50 F and 70 F. Snow in early March becomes rain by April. Summer: Average highs range between 70 F and the upper 80s F. Summers are drier but thunderstorms are possible. Fall: Highs are from the mid-50s F to the mid-70s F. Fall is the driest season, but showers are possible. Winter: Highs are around 40 F. Snow showers are common; the largest accumulations come in February.",
        state: "NY",
        parkCode: "sahi",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sagu/index.htm",
        parkname: "Saguaro National Park",
        address: "3693 S Old Spanish Trail Tucson 85730",
        description:
          "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
        weather_description:
          "Winter Season With daytime temperature from the low 50's to the high 70's Summer Season As we get deeper into the summer season, temperatures will range from mid-90's to low 110's. This is a great time to experience the desert as the day breaks or in the late of the day as the sun disappears behind the surrounding mountain ranges. During the late spring and summer months Saguaro National Park only offers interpretive programs on an intermittent basis.",
        state: "AZ",
        parkCode: "sagu",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sacr/index.htm",
        parkname: "Saint Croix Island International Historic Site",
        address: "84 Saint Croix Drive Calais 04619",
        description:
          "The winter of 1604-1605 on Saint Croix Island was a cruel one for Pierre Dugua's French expedition. Iced in by freezing temperatures and cut off from fresh water and game, 35 of 79 men died. As spring arrived and native people traded game for bread, the health of those remaining improved. Although the expedition moved on by summer, the beginning of French presence in North America had begun.",
        weather_description:
          "Located in Maine, Saint Croix Island experiences all four seasons. Summer temperatures range from 50-80F (10-27C). Fall temperatures range from 25-70F (-4-21C). Typically the first is in frost mid-October and first snowfall begins in November and can continue through April with an average accumulation of 67 inches (170 cm). Winter temperatures range from 5-30F (-15 - -1C). Spring temperatures range from 20-60F (-6-16C).",
        state: "ME",
        parkCode: "sacr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sacn/index.htm",
        parkname: "Saint Croix National Scenic Riverway",
        address: "401 North Hamilton Street St. Croix Falls 54024",
        description:
          "Grab your paddle and your longing for adventure and head to the St. Croix and Namekagon rivers! Together they form the St. Croix National Scenic Riverway, offering over 200 miles of clean water that glides and rushes through a forested landscape. Paddle, boat, fish, and camp among this wild and scenic beauty. Hiking and historic towns also beckon.",
        weather_description:
          "Access to the Riverway is year-round. Early spring temperatures can reach into the 40's resulting in high, fast, and cold water from melting snow and ice. Summers are warm and humid. Severe weather can be experienced anytime from mid-spring through late summer. Fall colors begin in late September with high temperatures averaging in the 60's. Winter can set in early with high temperatures in the teens, lows falling below zero, and occasional heavy snow. The rivers can begin to freeze over by early December.",
        state: "WI,MN",
        parkCode: "sacn",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sapa/index.htm",
        parkname: "Saint Paul's Church National Historic Site",
        address: "897 South Columbus Avenue Mount Vernon 10550",
        description:
          "Since 1665, Saint Paul's Church played a vital role in the colonial life of Eastchester, 20 miles north of New York City. Townspeople voted at the nearby Village Green; local militia drilled outside its doors. But the American Revolution changed everything. American, British and Hessian troops tore down the old wooden meetinghouse for firewood and used the unfinished stone chapel as a hospital.",
        weather_description:
          "The weather in New York City is basically the same as for this northern suburb. Please visit http://forecast.weather.gov/MapClick.php?lat=40.91259830500047&lon=-73.83707741599966#.Vqjtf_krKUk.",
        state: "NY",
        parkCode: "sapa",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/saga/index.htm",
        parkname: "Saint-Gaudens National Historical Park",
        address: "139 Saint Gaudens Road Cornish 03745",
        description:
          "Augustus Saint-Gaudens, one of America's greatest sculptors lived here seasonally starting in 1885, and year-round 1900 until his death in 1907. Experience the park grounds, where several of Saint-Gaudens bronze sculptures are on view throughout the year, & trails wind through the woods. Learn more about the park.",
        weather_description:
          "The upper Connecticut River valley is located in a temperate climate. While some summer days may be hot and humid, the average summer temperature ranges in the 70s and lower 80s. Temperatures in the fall are normally in the upper 60s, with evenings dropping into the upper 40s and lower 50s. Winters can be cold with daily temperatures usually in the 20s and occasionally dropping to below zero. Snow may be heavy from mid December through March.",
        state: "NH",
        parkCode: "saga",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sama/index.htm",
        parkname: "Salem Maritime National Historic Site",
        address: "Salem Armory Visitor Center Salem 01970",
        description:
          "Established on March 17, 1938 as the first National Historic Site in the United States, Salem Maritime National Historic Site consists of nine acres of land and twelve historic structures along the Salem waterfront, as well as a downtown visitor center. Located in the urban setting of Salem, the park preserves and interprets over 600 years of New England's maritime history and global connections.",
        weather_description:
          "New England weather is unpredictable year-round. Monthly averages, in degrees Fahrenheit, are: January: 37 high, 20 low February: 40 high, 23 low March: 47 high, 30 low April: 57 high, 38 low May: 67 high, 48 low June: 76 high, 58 low July: 82 high, 63 low August: 80 high, 62 low September: 73 high, 55 low October: 62 high, 45 low November: 52 high, 37 low December: 42 high, 27 low",
        state: "MA",
        parkCode: "sama",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sapu/index.htm",
        parkname: "Salinas Pueblo Missions National Monument",
        address:
          "Salinas Pueblo Missions National Monument Mountainair 87036-0517",
        description:
          "Tucked away in the middle of New Mexico you’ll find Salinas Pueblo Missions National Monument. Its three distinct sites offer a glimpse into a unique time in history—a time entrenched with cultural borrowing, conflict and struggles. These sites continue to stand as reminders of the Spanish and Pueblo peoples’ early encounters and prompt exploration of today’s interactions among different people.",
        weather_description:
          "Salinas Pueblo Missions is located at an elevation of 6100-6500 ft (1860-1980 m) in an arid climate. Average annual rainfall is about 15 inches. Winters can be cold and snowy. Summer highs are above 90°F/32°C with cool evenings. The months of June-September often have thunderstorms. Flash flooding may occur in the area. Abó is especially prone to road closures as a result. Spring highs average 75°F/24°C. Fall temperatures are a little cooler. High winds often occur, which may result in trail closures.",
        state: "NM",
        parkCode: "sapu",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sari/index.htm",
        parkname:
          "Salt River Bay National Historical Park and Ecological Preserve",
        address: "Route 75 Salt River Bay Christiansted 00820",
        description:
          "Salt River Bay National Historical Park and Ecological Preserve uniquely documents the human and natural Caribbean world from the earliest indigenous settlements in the central Caribbean to their clash with seven different colonial European powers to the present day.",
        weather_description: "Welcome to the tropics!",
        state: "VI",
        parkCode: "sari",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/saan/index.htm",
        parkname: "San Antonio Missions National Historical Park",
        address: "Visitor Center at Mission San José San Antonio 78214",
        description:
          "Welcome to San Antonio Missions, a National Park Service site and the only UNESCO World Heritage Site in Texas. After 10,000 years, the people of South Texas were faced with drought, European diseases, and colonization. In the early 1700s, many Native people of South Texas foreswore their traditional life to become Spanish, accepting a new religion and agrarian lifestyle in hopes of survival.",
        weather_description:
          "Over the course of a year, the temperature typically varies from 40°F to 95°F and is rarely below 29°F or above 100°F. The warm season lasts from May through September with an average daily high temperature above 90°F and a low of 75°F. The cold season lasts from November through February with an average daily high below 68°F and an average low of 40°F. The relative humidity ranges from 40-80% over the course of the year, which can be very uncomfortable to many people.",
        state: "TX",
        parkCode: "saan",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/safr/index.htm",
        parkname: "San Francisco Maritime National Historical Park",
        address: "2905 Hyde Street San Francisco 94109",
        description:
          "Located in the Fisherman's Wharf neighborhood, San Francisco Maritime National Historical Park offers visitors the sights, sounds, smells and stories of Pacific Coast maritime history. The Park includes a magnificent fleet of historic ships, a Visitor Center, Maritime Museum, Maritime Research Center, and Aquatic Park Historic District.",
        weather_description:
          "San Francisco is located in a Mediterranean climate. The rainy season usually lasts from November to March. The warmest months are usually September and October. The famous San Francisco fog begins rolling in through the Golden Gate in the spring and can persist throughout the summer months. That said, the city can be foggy and windy any time of the year, so if your visit to “sunny California” includes a stop in San Francisco, bring some warm clothing. The average annual temperature is 62.5°F (16.9°C).",
        state: "CA",
        parkCode: "safr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sajh/index.htm",
        parkname: "San Juan Island National Historical Park",
        address: "4668 Cattle Point Rd. Friday Harbor 98250",
        description:
          "San Juan Island is well known for splendid vistas, saltwater shore, quiet woodlands, orca whales and one of the last remaining native prairies in the Puget Sound/Northern Straits region. But it was also here in 1859 that the United States and Great Britain nearly went to war over possession of the island, the crisis ignited by the death of a pig.",
        weather_description:
          "Spring: Temperatures usually range from 40 F to 60 F. Wildflowers are at their peak around May. Summer: Temperatures usually range from 45 F to 70 F. On very sunny days, be prepared with water-heat exhaustion is a common complaint among park visitors who are unprepared. Fall: Temperatures usually range from 40 F to 65 F. Rain is common. Winter: Temperatures range from 35 F to 50 F. Be prepared with cold and wet weather gear and numerous layers if you intend to be outside. Rain and wind are common.",
        state: "WA",
        parkCode: "sajh",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/saju/index.htm",
        parkname: "San Juan National Historic Site",
        address: "501 Norzagaray Street San Juan 00901",
        description:
          "San Juan National Historic Site preserves stories of great ambition and aspirations. Countries fought for control of this tiny yet strategic island for centuries. Generations of soldiers have lived and worked within the forts. Visitors today are as inspired by these stories as they are by the beauty of the architecture and the ingenuity of design and engineering of this World Heritage Site.",
        weather_description:
          "Puerto Rico enjoys year round tropical climate. Winters are breeze and summers are mostly hot and humid. It rains all year long with a 'dry' season in April. Temperatures range from 80's in the winter to 90's in the summer. The hurricane season starts in June and ends in November. On the longest day, June 22nd, the sun sets around 7 PM. On the shortest day, December 22nd, the sun sets around 4:30 PM.",
        state: "PR",
        parkCode: "saju",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sand/index.htm",
        parkname: "Sand Creek Massacre National Historic Site",
        address: "1301 Maine St Eads 81036-",
        description:
          "The Sand Creek Massacre: profound, symbolic, spiritual, controversial, a site unlike any other in America. As 675 cavalrymen came around a prairie bend, the camps of Chiefs Black Kettle, White Antelope, and Left Hand lay in the valley before them. Chaotic, horrific, tumultuous, and bloody, the events of November 29, 1864 changed the course of history.",
        weather_description:
          "Weather conditions at the park vary considerably. Temperatures range from over 100°F in summer to under 20°F in winter. Visitors can expect blowing dust and sand year-round, especially during infrequent storms. Some of these storms produce violent tornadoes or large blizzards, so prepare accordingly.",
        state: "CO",
        parkCode: "sand",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/safe/index.htm",
        parkname: "Santa Fe National Historic Trail",
        address: "National Trails Santa Fe 87505",
        description:
          "You can almost hear the whoops and cries of 'All's set!' as trail hands hitched their oxen to freight wagons carrying cargo between western Missouri and Santa Fe, New Mexico. Follow the Santa Fe National Historic Trail through five states and you'll find adventure and evidence of past travelers who made this remarkable trip before you!",
        weather_description:
          "Due to the length of the Santa Fe National Historic Trail, be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: www.weather.gov",
        state: "CO,KS,MO,NM,OK",
        parkCode: "safe",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/samo/index.htm",
        parkname: "Santa Monica Mountains National Recreation Area",
        address: "26876 Mulholland Highway Calabasas 91302",
        description:
          "Hidden in plain sight from Los Angeles, the Santa Monica Mountains offer easy access to surprisingly wild places. Experience the famous beaches of Malibu or explore more than 500 miles of trails. The park abounds with historical and cultural sites, from old movie ranches to Native American centers. What will you and your family discover?",
        weather_description:
          "Summers are hot and dry while winters are cool and wet.",
        state: "CA",
        parkCode: "samo",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sara/index.htm",
        parkname: "Saratoga National Historical Park",
        address: "648 Route 32 Stillwater 12170",
        description:
          "Here, in 1777, during the American War for Independence, American troops battled and beat a British invasion force, marking the first time in world history that a British Army ever surrendered. This crucial victory secured essential foreign recognition and support, instigated world-wide wars, affirmed United States independence, and changed the face of the world.",
        weather_description:
          "The park experiences all four seasons. Temperatures can be as low as -20 degrees Fahrenheit in winter and as high as 100 degrees Fahrenheit in summer. Check local weather reports for more detailed information.",
        state: "NY",
        parkCode: "sara",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sair/index.htm",
        parkname: "Saugus Iron Works National Historic Site",
        address: "244 Central St Saugus 01906",
        description:
          "In the 1600's, on the banks of the Saugus River, something extraordinary happened. Explore the place where European iron makers brought their special skills to a young Massachusetts colony. This nine-acre National Historic Site includes working waterwheels, forges, mills, a historic 17th century home, and a lush river basin.",
        weather_description:
          "New England weather is unpredictable year-round. Monthly averages, in degrees Fahrenheit, are: January: 37 high, 20 low February: 40 high, 23 low March: 47 high, 30 low April: 57 high, 38 low May: 67 high, 48 low June: 76 high, 58 low July: 82 high, 63 low August: 80 high, 62 low September: 73 high, 55 low October: 62 high, 45 low November: 52 high, 37 low December: 42 high, 27 low",
        state: "MA",
        parkCode: "sair",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/scbl/index.htm",
        parkname: "Scotts Bluff National Monument",
        address: "190276 Old Oregon Trail Gering 69341",
        description:
          "Towering 800 feet above the North Platte River, Scotts Bluff has served as a landmark for peoples from Native Americans to emigrants on the Oregon, California and Mormon Trails to modern travelers. Rich with geological and paleontological history as well as human history, there is much to discover while exploring the 3,000 acres of Scotts Bluff National Monument.",
        weather_description:
          "Summers at Scotts Bluff are generally dry and high temperatures are usually in the 80's and 90's, although they can reach above 100 on occasion. Hikers are strongly advised to carry water. Winter daytime temperatures are usually in the 40's or low 50's, with overnight lows below freezing and, on occasion, below 0 degrees Fahrenheit. Although it can be windy any time of the year, spring is the windiest season.",
        state: "NE",
        parkCode: "scbl",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/semo/index.htm",
        parkname: "Selma To Montgomery National Historic Trail",
        address: "7002 U.S. Highway 80 West White Hall 36040",
        description:
          "‏‏‎Established by Congress in 1966, the Selma to Montgomery National Historic Trail commemorates the people, events, and route of the 1965 Voting Rights March in Alabama. Led by Dr. Martin Luther King Jr., Black and White non-violent supporters fought for the right to vote in Central Alabama. Today, you can connect with this history and trace the events of these marches along the 54-mile trail. ‏",
        weather_description:
          "Depending on the season, temperatures can soar to extremes of heat and humidity in the summer and to a damp, wet cold in the winter. During the summer season visitors should wear light, comfortable clothing, shoes and use sunscreen. High temperatures and humidity create higher risk of heat cramps, heat exhaustion and heatstroke. During the fall visitors should have a light jacket available as temperatures can drop suddenly. Winter temperatures can be range from mild to extremely cold.",
        state: "AL",
        parkCode: "semo",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/seki/index.htm",
        parkname: "Sequoia & Kings Canyon National Parks",
        address: "47050 Generals Highway Three Rivers 93271",
        description:
          "This dramatic landscape testifies to nature's size, beauty, and diversity—huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees. The parks lie side by side in the southern Sierra Nevada east of the San Joaquin Valley. Weather varies a lot by season and elevation, which ranges from 1,370' to 14,494'.",
        weather_description:
          "Because of the extreme elevation range in these parks, weather conditions vary widely between areas. In summer, the sequoia groves have comfortable temperatures and the foothills are hot and dry. Snow lingers on high-mountain passes well into summer. In fall, some areas close or reduce their hours. Winter brings snow to sequoia groves and rain to the foothills. Be prepared for tire chain requirements. Spring is a great time to hike in the foothills and snow begins to melt at higher elevations.",
        state: "CA",
        parkCode: "seki",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/shen/index.htm",
        parkname: "Shenandoah National Park",
        address: "Shenandoah National Park Luray 22835",
        description:
          "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows. With over 200,000 acres of protected lands that are haven to deer, songbirds, and black bear, there's so much to explore...and your journey begins right here!",
        weather_description:
          "Shenandoah National Park has four very distinct seasons. Spring typically brings mild temperatures, rain, and wildflowers. Summer brings lush green forests, but can be hot and very humid. Fall follows with cooler temperatures and spectacular fall foliage. Winter can bring snow and ice. The park spans roughly 100 miles, which means that weather can vary greatly depending on your location. The mountain is usually 10°F cooler than the valley below. Always check the forecast, dress in layers, and be prepared.",
        state: "VA",
        parkCode: "shen",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/shil/index.htm",
        parkname: "Shiloh National Military Park",
        address: "1055 Pittsburg Landing Road Shiloh 38376",
        description:
          "Visit the sites of the most epic struggle in the Western Theater of the Civil War. Nearly 110,000 American troops clashed in a bloody contest that resulted in 23,746 casualties; more casualties than in all of America's previous wars combined. Explore both the Shiloh and Corinth battlefields to discover the impact of this struggle on the soldiers and on the nation.",
        weather_description:
          "Shiloh National Military Park traditionally experiences mild winters and hot summers with an average high of 90 degrees in the summer and 50 in winter; average lows in the winter are 34 degrees but single digits are not unusual. Rainfall in the area averages 57 inches a year with an additional 2-3 inches of ice/snow and violent thunderstorms can take place at any time of year.",
        state: "TN,MS",
        parkCode: "shil",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sitk/index.htm",
        parkname: "Sitka National Historical Park",
        address: "103 Monastery St. Sitka 99835",
        description:
          "On an island amid towering spruce and hemlock, Sitka National Historical Park preserves the site of a battle between invading Russian traders and indigenous Kiks.ádi Tlingit. Park visitors are awed by Tlingit and Haida totem poles standing along the park’s scenic coastal trail, and the restored Russian Bishop’s House speaks of Russia’s little known colonial legacy in North America.",
        weather_description:
          "Sitka experiences a temperate maritime climate, characterized by heavy precipitation and a small temperature range between seasons. Summer temperatures range from high 50s to high 60s F with frequent rain. Winter is rainy and snowy with temperatures from the high teens to the 40s F. Well prepared visitors will have rain gear and layered clothing at any time of year.",
        state: "AK",
        parkCode: "sitk",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/slbe/index.htm",
        parkname: "Sleeping Bear Dunes National Lakeshore",
        address: "9922 Front Street Empire 49630",
        description:
          "Miles of sand beach, bluffs that tower 450’ above Lake Michigan, lush forests, clear inland lakes, unique flora and fauna make up the natural world of Sleeping Bear Dunes. High dunes afford spectacular views across the lake. An island lighthouse, US Life-Saving Service stations, coastal villages, and picturesque farmsteads reflect the park’s rich maritime, agricultural, and recreational history.",
        weather_description:
          "Spring: Temperatures usually range from 40 F to 70 F. Rain is common. Summer: Temperatures usually range from from 50 F to 83 F. Rain and sun are equally common. On very sunny days, be prepared with plenty of water--heat exhaustion is common, especially when hiking on the dunes. Fall: Temperatures range from 40 F to 70 F. Fall foliage is at its peak around mid September. Winter: Temperatures range from 15 F to 40 F. Snow is common and is on the ground for most of the winter. Dress in warm layers.",
        state: "MI",
        parkCode: "slbe",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/spar/index.htm",
        parkname: "Springfield Armory National Historic Site",
        address: "Springfield Armory National Historic Site Springfield 01105",
        description:
          "For nearly two centuries, the US Armed Forces and American industry looked to Springfield Armory for innovative engineering and superior firearms. Springfield Armory National Historic Site commemorates the critical role of the nation’s first armory by preserving and interpreting the world's largest historic US military small arms collection, along with historic archives, buildings, and landscapes.",
        weather_description:
          "Springfield Armory National Historic Site is situated in the heart of Western Massachusetts and the Pioneer Valley. Our year is marked by four distinct seasons. Summers tend to be pleasant, but can at times be very hot and very humid. Autumn features brilliant foliage and cooler, calmer weather. Winter storms are capable of closing the park and can make travel dangerous. Springtime in New England is pleasant.",
        state: "MA",
        parkCode: "spar",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/stsp/index.htm",
        parkname: "Star-Spangled Banner National Historic Trail",
        address: "2400 East Fort Avenue Baltimore 21230",
        description:
          "For three years the young United States was embroiled in the War of 1812 and the Chesapeake Bay region felt the brunt of it, choked by shipping blockades and ravaged by enemy raids. Through sites and landscapes in Virginia, the District of Columbia, and Maryland, the Trail tells the stories of the events, people, and places that led to the birth of the U.S. national anthem.",
        weather_description:
          "Weather can be extremely Cold or Hot in winter/summer. Fall and Spring pleasant.",
        state: "MD,VA,DC",
        parkCode: "stsp",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/stli/index.htm",
        parkname: "Statue Of Liberty National Monument",
        address: "Liberty Island New York 10004",
        description:
          "'The Statue of Liberty Enlightening the World' was a gift of friendship from the people of France to the United States and is recognized as a universal symbol of freedom and democracy. The Statue of Liberty was dedicated on October 28, 1886. It was designated as a National Monument in 1924. Employees of the National Park Service have been caring for the colossal copper statue since 1933.",
        weather_description:
          "It is typically colder and more windy in New York Harbor than in elsewhere in the New York City metropolitan area. Winters are cold and damp. Spring and Fall can range from chilly to warm. Summers are warm to hot and humid.",
        state: "NY",
        parkCode: "stli",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/stge/index.htm",
        parkname: "Ste. Geneviève National Historical Park",
        address: "Ste. Genevieve National Historical Park Ste. Genevieve 63670",
        description:
          "Established by 1750, Ste. Genevieve was the first permanent European settlement in Missouri. Early French Canadian settlers were drawn here by the rich agricultural land known as Le Grand Champ (the Big Field). After the flood of 1785, the town relocated to its present location on higher ground approximately three miles to the northwest of its original site.",
        weather_description:
          "The weather in Ste. Genevieve is typical of a midwestern climate. High heat and humidity, severe thunderstorms, snow and ice, and extreme cold are all possible depending upon the season. The average high in July is 88 degrees and the average low in January is 22 degrees. The area averages 41 inches of precipitation annually. Please plan your visit accordingly.",
        state: "MO",
        parkCode: "stge",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/stea/index.htm",
        parkname: "Steamtown National Historic Site",
        address: "Lackawanna Ave at Cliff St Scranton 18503",
        description:
          "You'd feel heat from the firebox, smell hot steam and oil; you'd hear the whistle, feel the ground vibrate, and watch as one-ton drive rods turned steel wheels. Remember the sound of 'chuff-chuff' from the smokestack? Today, you can learn the history of steam railroad transportation, and the people who built, repaired and rode, as we work to preserve a special era in America's industrial history!",
        weather_description:
          "Warm and sometimes humid summers; cold and rainy or snowy winters. Wear seasonable clothing and good walking shoes. For travel aboard the summer and fall seasonal excursion trains, please note that the commuter-type coaches are not air-conditioned, or may not be heated. Therefore, we recommend that you dress appropriately for the season that you plan to visit us!",
        state: "PA",
        parkCode: "stea",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/stri/index.htm",
        parkname: "Stones River National Battlefield",
        address: "1563 North Thompson Lane Murfreesboro 37129",
        description:
          "The Battle of Stones River began on the last day of 1862 and was one of the bloodiest conflicts of the Civil War. The battle produced important military and political gains for the Union, and it changed forever the people who lived and fought here.",
        weather_description:
          "Summer is hot and humid with highs in the 90s. Spring and fall are pleasant. Winter temperatures are variable, but temperatures may drop below freezing with occasional snow.",
        state: "TN",
        parkCode: "stri",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/ston/index.htm",
        parkname: "Stonewall National Monument",
        address:
          "Intersection of Christopher, Grove, and Fourth Streets. New York 10014",
        description:
          "Before the 1960s almost everything about living openly as a lesbian, gay, bisexual, transgender, or queer (LGBTQ) person was illegal. New York City laws against homosexual activities were particularly harsh. The Stonewall Uprising on June 28, 1969 is a milestone in the quest for LGBTQ civil rights and provided momentum for a movement.",
        weather_description:
          "New York City experiences all four seasons. It is typically hot in the summer and cold in the winter with cool springs and autumns.",
        state: "NY",
        parkCode: "ston",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/sucr/index.htm",
        parkname: "Sunset Crater Volcano National Monument",
        address: "6082 Sunset Crater Road Flagstaff 86004",
        description:
          "The cinder cone volcano's rim is the dusky red of sunset, but the crater is only part of the story. Around 1085 the ground began to shake, and lava spewed high into the air. When the eruption finished, it had changed both the landscape and the people who lived here. Today, it teaches how nature and humankind affect each other—and how rebirth and renewal happen in the wake of disaster.",
        weather_description:
          "Be prepared for variable and extreme weather conditions. You may expect high winds any time of year, summer temperatures above 95ºF (35ºC), afternoon storms July–September, and snow from fall to spring. Dress in layers, as weather at Sunset Crater Volcano can change quickly at any time of year.",
        state: "AZ",
        parkCode: "sucr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tapr/index.htm",
        parkname: "Tallgrass Prairie National Preserve",
        address: "2480B KS Hwy 177 Strong City 66869",
        description:
          "Tallgrass prairie once covered 170 million acres of North America, but within a generation most of it had been transformed into farmland. Today less than 4% remains intact, mostly in the Kansas Flint Hills. Established on November 12, 1996, the preserve protects a nationally significant remnant of the once vast tallgrass prairie ecosystem. Here the tallgrass makes its last stand.",
        weather_description:
          "Typical weather for the preserve ranges from lows of 0 degrees in the winter and highs of 90 + degrees in the summer. Prevailing prairie winds attribute to winter blizzards and occasional summer storms. Thunderstorms that form on the Great Plains have a rare chance of producing tornadoes. Lightning poses a danger when hiking into the prairie. Please check current weather conditions at NOAA before hiking into the preserve.",
        state: "KS",
        parkCode: "tapr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/thko/index.htm",
        parkname: "Thaddeus Kosciuszko National Memorial",
        address: "3rd and Pine Streets Philadelphia 19106",
        description:
          "Visit the house where wounded Polish freedom fighter Thaddeus Kosciuszko lived and hear how this brilliant military engineer designed successful fortifications during the American Revolution. See the room where he received notable visitors such as Chief Little Turtle and Thomas Jefferson.",
        weather_description:
          "Summers are typically hot and muggy, fall and spring are generally mild, and winter is cold. Snowfall is highly variable, with some winters bringing only light snow and others bringing several major snowstorms, with the normal seasonal snowfall standing at 22.4 in (57 cm). Precipitation is generally spread throughout the year, with eight to twelve wet days per month.",
        state: "PA",
        parkCode: "thko",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/thrb/index.htm",
        parkname: "Theodore Roosevelt Birthplace National Historic Site",
        address: "28 East 20th Street New York 10003",
        description:
          "This is the boyhood home of the first U.S. president to be born in New York City. Raised in a townhouse at 28 E. 20th St., Theodore Roosevelt would grow up to be our 26th President and become immortalized on Mount Rushmore. However, he started life as a sickly yet bright boy who exercised to improve his health and began a lifelong passion for the 'strenuous life.'",
        weather_description:
          "http://forecast.weather.gov/MapClick.php?CityName=New+York&state=NY&site=OKX&lat=40.7198&lon=-73.993#.Vqj8OvkrJlZ",
        state: "NY",
        parkCode: "thrb",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/thri/index.htm",
        parkname: "Theodore Roosevelt Inaugural National Historic Site",
        address: "Theodore Roosevelt Inaugural Site Buffalo 14202",
        description:
          "As president, Theodore Roosevelt created protections for ordinary citizens, began regulation of big business, and made the US a major force in international affairs. Yet one of the most important presidencies in America's history nearly didn't happen. See the place where a brief, emotional, and improvised ceremony in Buffalo, NY brought TR into office, and forever altered the nation.",
        weather_description:
          "Summer tends to be mild but humid. Fall moderate temperatures. Winters can have prolonged cold spells and be snowy, with occasional periods of intense snow. Spring mild and rainy.",
        state: "NY",
        parkCode: "thri",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/this/index.htm",
        parkname: "Theodore Roosevelt Island",
        address: "George Washington Memorial Parkway Arlington 22209",
        description:
          "In the 1930s, landscape architects transformed Mason’s Island from neglected, overgrown farmland into Theodore Roosevelt Island, a memorial to America’s 26th president. They conceived a “real forest” designed to mimic the natural forest that once covered the island. Today miles of trails through wooded uplands and swampy bottomlands honor the legacy of a great outdoorsman and conservationist.",
        weather_description:
          "Outdoor trails and memorial plaza subject to weather for Washington, D.C. and Arlington, VA.",
        state: "DC",
        parkCode: "this",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/thro/index.htm",
        parkname: "Theodore Roosevelt National Park",
        address: "315 Second Avenue Medora 58645",
        description:
          "When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.",
        weather_description:
          "In winter, some or all park roads may be closed due to snow.",
        state: "ND",
        parkCode: "thro",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/thco/index.htm",
        parkname: "Thomas Cole National Historic Site",
        address: "218 Spring Street Catskill 12414",
        description:
          "In 1825, America was still a new nation, just forming its own unique identity and traditions. Thomas Cole invented a new style of art, one that Americans could call their own. His landscape paintings launched the art movement known as the Hudson River School. His groundbreaking achievements took place here in Catskill, New York -- in the 'peaceful shades' of his beloved home, Cedar Grove.",
        weather_description:
          "For details and information, visit, http://www.thomascole.org/.",
        state: "NY",
        parkCode: "thco",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/edis/index.htm",
        parkname: "Thomas Edison National Historical Park",
        address: "211 Main Street West Orange 07052",
        description:
          "Thomas Edison’s home and laboratory are a step back in time, when machines were run by belts and pulleys and music was played on phonographs. Where to the uninformed passerby, the buildings betray little evidence of the industries they once started. Discover where America’s greatest inventor changed our world forever.",
        weather_description:
          "Spring and Fall weather can be cool, while summer is usually warm and humid. Winter is frequently snowy and cold. It is recommended that visitors dress for the weather. Visitors may need jackets or rain gear as they will be walking between buildings as they tour the park during inclement weather. Please keep any rain gear/umbrellas with you during your visit.",
        state: "NJ",
        parkCode: "edis",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/thje/index.htm",
        parkname: "Thomas Jefferson Memorial",
        address: "16 East Basin Drive, SW Washington 200024",
        description:
          "Author of the Declaration of Independence, statesman and visionary for the founding of a nation.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "thje",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/thst/index.htm",
        parkname: "Thomas Stone National Historic Site",
        address: "6655 Rose Hill Road Port Tobacco 20677",
        description:
          "Marylanders like Thomas Stone had a difficult choice; stay at peace or risk everything they held dear: lives, fortunes, and sacred honor, to protect American rights. Thomas Stone made that choice, and established his legacy when he became one of 56 men to sign the Declaration of Independence, while the powerful words, 'All Men Are Created Equal,' moved thousands of enslaved to seek their freedom.",
        weather_description:
          "Thomas Stone National Historic Site experiences all four seasons. Temperatures can be very warm and humid in the summer months and wet and cold in the winter months.",
        state: "MD",
        parkCode: "thst",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tica/index.htm",
        parkname: "Timpanogos Cave National Monument",
        address: "2038 W. Alpine Loop Road American Fork 84003",
        description:
          "Hike your way past stunning vistas to explore a hidden underground world. Taste the thrill of caving as you twist and bend to enter beautifully decorated rooms. Learn the science behind formations and hear stories of cave exploration and preservation. Experience and discover as you go – geologic mysteries await.",
        weather_description:
          "Although inside the caves its always 43-48 F, temperatures on the cave trail can range from the 30s up to above 100 degrees F, depending on time of year. Carrying drinking water is a necessity, especially in summer. In the mountains, weather sometimes presents interesting challenges. The cave and cave trail do not close due to rain, unless that rain is heavy enough to bring rockfall. They will close due to high winds/rockfall, or in lightning storms. Call the visitor center if you have specific concerns.",
        state: "UT",
        parkCode: "tica",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/timu/index.htm",
        parkname: "Timucuan Ecological & Historic Preserve",
        address: "12713 Fort Caroline Road Jacksonville 32225",
        description:
          "Visit one of the last unspoiled coastal wetlands on the Atlantic Coast. Discover 6,000 years of human history and experience the beauty of salt marshes, coastal dunes, and hardwood hammocks. The Timucuan Preserve includes Fort Caroline and Kingsley Plantation.",
        weather_description:
          "We have mild winters and hot summers. In the winter average highs are in the 60's, lows in the 40's. The summer temperatures reach up into the 90's.",
        state: "FL",
        parkCode: "timu",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tont/index.htm",
        parkname: "Tonto National Monument",
        address: "26260 N AZ Hwy 188 Lot 2 Roosevelt 85545",
        description:
          "The Salado Phenomena, 700 years ago, blended ideas of neighboring Native American cultures to emerge a unique and vibrant society. Tonto National Monument showcases two Salado-style cliff dwellings. Colorful pottery, woven cotton cloth, and other artifacts tell a story of people living and using resources from the northern Sonoran Desert from 1250 to 1450 CE.",
        weather_description:
          "Weather during the summer can be extremely hot. It is typically 10 degrees Fahrenheit cooler than Phoenix. Winter weather may create hazardous conditions on the roads to Tonto National Monument. Severe thunderstorms may lead to a closure of the hiking trails.",
        state: "AZ",
        parkCode: "tont",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tosy/index.htm",
        parkname: "Touro Synagogue National Historic Site",
        address: "85 Touro Street Newport 02840",
        description:
          "Touro Synagogue, a building of exquisite beauty and design, steeped in history and ideals, and one of the most historically significant Jewish buildings in America, was designated a National Historic Site in 1946. Dedicated in 1763, it still serves an active congregation and each year greets over 30,000 visitors who come to see the magnificent interior and hear its remarkable story.",
        weather_description:
          "Summer temperatures range from 56-83F. Fall temperatures range from 30-70F. Winter temperatures range from 20-45F. Spring temperatures range from 30-70F.",
        state: "RI",
        parkCode: "tosy",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/trte/index.htm",
        parkname: "Trail Of Tears National Historic Trail",
        address: "National Trails Santa Fe 87505",
        description:
          "Remember and commemorate the survival of the Cherokee people, forcefully removed from their homelands in Georgia, Alabama, and Tennessee to live in Indian Territory, now Oklahoma. They traveled by foot, horse, wagon, or steamboat in 1838-1839.",
        weather_description:
          "Due to the length of the Trail of Tears National Historic Trail, be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: www.weather.gov",
        state: "AL,AR,GA,IL,KY,MO,NC,OK,TN",
        parkCode: "trte",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tule/index.htm",
        parkname: "Tule Lake National Monument",
        address: "800 Main St Tuelake 96134",
        description:
          "The Tule Lake National Monument includes both the the Tule Lake Segregation Center, the largest and most controversial of the sites where Japanese Americans were incarcerated during World War II, and Camp Tulelake, which was first a Civilian Conservation Corps camp, then an additional facility to detain Japanese Americans, and finally a prisoner of war camp.",
        weather_description:
          "Summer daytime highs average 75° to 80°F; lows average 50°F. Occasional thunderstorms occur in summer. Winter daytime highs average 40°F; lows average 20°F. Morning fog is frequent from autumn through spring.",
        state: "CA",
        parkCode: "tule",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tusk/index.htm",
        parkname: "Tule Springs Fossil Beds National Monument",
        address: "Tule Springs Fossil Beds National Monument Las Vegas 89166",
        description:
          "Mammoths, lions and camels once roamed along wetlands just north of what is now known as Las Vegas, Nevada. Their history is preserved at Tule Springs Fossil Beds National Monument and is ready to be discovered.",
        weather_description:
          "Refugees from states hit hard by winter's icy clutch often flee to this area to spend a mild winter. Sunbathers spend summers here to toast in the 110 degree F plus temperatures. The area generally has less than five inches of annual rainfall. Water temperatures may range from 45 degrees F. to 85 degrees F. during winter and summer respectively.",
        state: "NV",
        parkCode: "tusk",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tuma/index.htm",
        parkname: "Tumacácori National Historical Park",
        address: "1895 E Frontage Road Tumacacori 85640",
        description:
          "Tumacácori sits at a cultural crossroads in the Santa Cruz River valley. Here O’odham, Yaqui, and Apache people met and mingled with European Jesuit and Franciscan missionaries, settlers, and soldiers, sometimes in conflict and sometimes in cooperation. Follow the timeworn paths and discover stories that connect us to enduring relationships, vibrant cultures, and traditions of long ago.",
        weather_description:
          "Located above the heat of the low desert, Tumacácori National Historical Park is in the mesquite highlands, close to 3,300 feet in elevation, where temperatures are five to ten degrees cooler than Tucson or Phoenix. Visiting the park in this moderate climate is pleasurable during any season of the year but remember to prepare accordingly. Bring layered clothing and drink plenty of water.",
        state: "AZ",
        parkCode: "tuma",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tupe/index.htm",
        parkname: "Tupelo National Battlefield",
        address: "2083 Main St Tupelo 38801",
        description:
          "In July, 1864, Union forces, including men from the United States Colored Troops, marched into Tupelo, Mississippi. Disorganized Confederate soldiers fought fiercely but could not overpower the federal troops. Neither side could claim a clear victory, but Union troops had succeeded in their main goal: keeping the Confederates away from Union railroads in Tennessee.",
        weather_description:
          "Mississippi is classified as a humid subtropical climate, the weather ranges from mild winters to hot summers with high humidity between May and September. Average high temperatures reach into the high 80's in summer, and into the high 40's in winter. Check local forecasts to plan your trip.",
        state: "MS",
        parkCode: "tupe",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tuai/index.htm",
        parkname: "Tuskegee Airmen National Historic Site",
        address: "1616 Chappie James Ave. Tuskegee 36083",
        description:
          "Before the first African American military pilots became known as the 'Red Tails' they wore striped tails as they began their flight training in the Army's PT-17 Stearman bi-plane. Their flying adventure started at Moton Field, in Tuskegee, Alabama, where the Army Air Corps conducted a military test to determine if African Americans could be trained to fly combat aircraft.",
        weather_description:
          "The weather in Tuskegee is generally sunny, averaging around 218 sunny days annually. Average rainfall is 52 inches a year, with an average snowfall of 0 inches. The high temperature in July is around 92 degrees, and average low in January is around 42 degrees.",
        state: "AL",
        parkCode: "tuai",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tuin/index.htm",
        parkname: "Tuskegee Institute National Historic Site",
        address: "1212 West Montgomery Road Tuskegee Institute 36088",
        description:
          "In 1881, Booker T. Washington arrived in Alabama and started building Tuskegee Institute both in reputation and literally brick by brick. He recruited the best and the brightest to come and teach here including George Washington Carver who arrived in 1896. Carver’s innovations in agriculture, especially with peanuts, expanded Tuskegee’s standing throughout the country. The story continues….",
        weather_description:
          "The weather in Tuskegee is generally sunny with an average of 218 sunny days annually. Tuskegee gets an average of 52 inches of rain per year. The high in July averages 92 degrees, and the average low in January is 34 degrees.",
        state: "AL",
        parkCode: "tuin",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/tuzi/index.htm",
        parkname: "Tuzigoot National Monument",
        address: "25 Tuzigoot Rd Clarkdale 86324",
        description:
          "Crowning a desert hilltop is an ancient pueblo. A child scans the desert landscape for the arrival of traders. What riches will they bring? What stories will they tell? From the rooftop of the Tuzigoot pueblo it is easy to imagine such a moment. The pueblo shows us this ancient village built by the Sinagua people. They were farmers and artists with trade connections that spanned hundreds of miles.",
        weather_description:
          "Summer: Hot. Temperatures range from 95°F (35°C) beyond 110°F (42°C). Nighttime temperatures can be much cooler, around 70°F (21°C). From late June through early August, heavy rains called monsoons are common in the afternoons. Winter: Cool. Highs average around 55°F (13°C); lows may be in the teens (-10°C). Snow is rare, but possible. For detailed information, visit the National Weather Service: http://forecast.weather.gov/MapClick.php?lon=-112.02729309051725&lat=34.7698307603777#.VmWtK3arSUk",
        state: "AZ",
        parkCode: "tuzi",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/ulsg/index.htm",
        parkname: "Ulysses S Grant National Historic Site",
        address: "7400 Grant Road St. Louis 63123",
        description:
          "Ulysses S. Grant is known as the victorious Civil War general who saved the Union and the 18th President of the United States. He first met Julia Dent, his future wife, at her family home, named White Haven. From 1854 to 1859 the Dents, Grants and an enslaved African-American workforce lived on the property.",
        weather_description:
          "St. Louis weather can be uncomfortable and occasionally severe, so please plan your visit accordingly. High heat and humidity, severe thunderstorms, snow and ice, and extreme cold are all possible depending upon the season. For an update of inclement weather conditions which may affect your visit, call (314)842-1867 and follow the instructions to connect to the inclement weather report.",
        state: "MO",
        parkCode: "ulsg",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/upde/index.htm",
        parkname: "Upper Delaware Scenic & Recreational River",
        address: "274 River Road Beach Lake 18405",
        description:
          "Canoe through rapids and quiet pools as the Delaware River winds its way through a valley of swiftly changing scenery or fish amid rolling hills and riverfront villages in one of the finest fishing rivers in the northeastern United States. The clean water of the Delaware, the last major undammed river in the eastern United States, supports a healthy ecosystem and offers tranquility and excitement.",
        weather_description:
          "Spring: Temperatures usually range from lows of 26 F to highs of 80 F with average rainfall of 5 inches. Summer: Temperatures usually range from lows of 55 F to highs of 85 F with average rainfall of 4 inches. Fall: Temperatures usually range from lows of 30 F to highs of 83F. Fall foliage is at its peak sometime in October as daily mountain temperatures vary frequently and influence the change. Winter: Temperatures usually range from lows of 15 F to highs of 49 F.",
        state: "NY,PA",
        parkCode: "upde",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/vall/index.htm",
        parkname: "Valles Caldera National Preserve",
        address: "39201 New Mexico Highway 4 Jemez Springs 87025",
        description:
          "About 1.25 million years ago, a spectacular volcanic eruption created the 13-mile wide circular depression now known as the Valles Caldera. The preserve is known for its huge mountain meadows, abundant wildlife, and meandering streams. The area also preserves the homeland of ancestral native peoples and embraces a rich ranching history.",
        weather_description:
          "Each season offers a different experience: lush springs, moderate summers, golden falls, and snowy winters. Average temperatures are 22°F (-6 C) in January and 60°F (16 C) in July. Temperature extremes range from a high of 84°F (29 C) in summer to -30°F (-34C) in winter. Precipitation is heavier during summer monsoon rains (thunderstorms) in July and August and winter snowstorms in December through March. Higher elevation lends to much cooler temperatures than nearby Albuquerque.",
        state: "NM",
        parkCode: "vall",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/vafo/index.htm",
        parkname: "Valley Forge National Historical Park",
        address: "1400 North Outer Line Drive King of Prussia 19406",
        description:
          "Valley Forge is the site of the 1777-78 winter encampment of the Continental Army. The park includes 3,500 acres of monuments, meadows, and woodlands that commemorate the sacrifices and perseverance of the Revolutionary War generation, and honors the ability of citizens to pull together in order to overcome adversity during extraordinary times.",
        weather_description:
          "Winters at Valley Forge are cold and damp with a cool spring and fall and a hot and humid summer. Sturdy hiking shoes are recommended for outdoor recreation during the snowy winter season.",
        state: "PA",
        parkCode: "vafo",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/vama/index.htm",
        parkname: "Vanderbilt Mansion National Historic Site",
        address: "81 Vanderbilt Park Road Hyde Park 12538",
        description:
          "Built by of one of the first families of wealth in America. Designed by one of the nation's preeminent architects. The Vanderbilt Mansion is a home built expressly for the aristocratic lifestyle.",
        weather_description:
          "Spring: Temperatures usually range from 40°F to 70°F. Rain is not uncommon. Summer: Temperatures usually range from 70° F to 100° F. Humidity can be high throughout the summer months with periods of rain. Fall: Temperatures usually range from 40° F to 70° F. Peak leaf season is mid-October. Rain is not uncommon. Winter: Temperatures usually range from 30° F to 50°F. Ice, Freezing Rain and Snow are not uncommon.",
        state: "NY",
        parkCode: "vama",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/vick/index.htm",
        parkname: "Vicksburg National Military Park",
        address: "3201 Clay Street Vicksburg 39183",
        description:
          "To Confederate President Jefferson Davis, Vicksburg was the 'nailhead that holds the South's two halves together.' President Abraham Lincoln remarked 'Vicksburg is the key' to victory, and could be the north's lifeline into the south. As the federals closed in on the Fortress City, they were met by a ring of forts with over 170 cannon. The resulting battle would determine the war's outcome.",
        weather_description:
          "Spring and fall in Vicksburg are always very pleasant with cool nights and warm, sunny days with temperatures ranging from lows of 40-50 degrees to highs of 70 degrees. Winter weather in Mississippi is usually mild except for occasional cold air invasions, which normally last only a couple of days. Temperatures range from lows of 30 degrees to highs of 50 degrees. In the summer, weather is consistently hot, beginning in the low 70's and climbing to highs ranging from 80-90 degrees in the afternoon.",
        state: "MS,LA",
        parkCode: "vick",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/vive/index.htm",
        parkname: "Vietnam Veterans Memorial",
        address: "5 Henry Bacon Drive NW Washington 20002",
        description:
          "Honoring the men and women who served in the controversial Vietnam War, the Vietnam Veterans Memorial chronologically lists the names of 58,318 Americans who gave their lives in service to their country.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "vive",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/vicr/index.htm",
        parkname: "Virgin Islands Coral Reef National Monument",
        address: "Hurrican Hole St. John 00830",
        description:
          "Virgin Islands Coral Reef National Monument includes federal submerged lands within the 3-mile belt off the island of St. John. These waters support a diverse and complex system of coral reefs and other ecosystems such as shoreline mangrove forests and seagrass beds.",
        weather_description:
          "Mostly Perfect. The Tradewinds (the Easterlies) dominate the weather in the Virgin Islands, blowing east to west across the tropical Atlantic. The winter tends to bring stronger winds and less rain, and the summer tends to bring more rain and lighter winds.",
        state: "VI",
        parkCode: "vicr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/viis/index.htm",
        parkname: "Virgin Islands National Park",
        address: "1300 Cruz Bay Creek St. John 00830",
        description:
          "Virgin Islands National Park is more than just beautiful beaches. Hike to plantation ruins to learn about a time when sugar dominated the island. Visit the ancient petroglyphs carved by the Taino Indians. Come snorkel the coral reefs to discover hidden marine life. Two-thirds of the island of St. John is national park, making it a unique destination for visitors from around the world.",
        weather_description:
          "Mostly Perfect! The Tradewinds (the Easterlies) dominate the weather in the Virgin Islands, blowing east to west across the tropical Atlantic. The winter tends to bring stronger winds and less rain, and the summer tends to bring more rain and lighter winds. Be sure to check the forecast often during hurricane season or winter swell events.",
        state: "VI",
        parkCode: "viis",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/voya/index.htm",
        parkname: "Voyageurs National Park",
        address:
          "Voyageurs National Park Headquarters International Falls 56649",
        description:
          "Voyageurs is a maze of interconnected water highways. Plan ahead before coming to this water-based park by bringing your own watercraft, reserving a watercraft, or taking a park ranger boat tour.",
        weather_description:
          "There are four distinct seasons in Voyageur country. The air is temperate during June, July, and August when periods of fine, mild weather prevail. The frost-free season averages 120 days from June to mid-September. The average ice-out date is May 3 but varies year to year. Annual precipitation (rain and snow) averages 25-28 inches in the park and snowfall ranges from 55-70 inches, but is highly variable. The first measurable snowfall occurs in late October and the last in late April or early May.",
        state: "MN",
        parkCode: "voya",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/waco/index.htm",
        parkname: "Waco Mammoth National Monument",
        address: "6220 Steinbeck Bend Drive Waco 76708",
        description:
          "Standing as tall as 14 feet and weighing 20,000 pounds, Columbian mammoths roamed across what is present-day Texas thousands of years ago. Today, the fossil specimens represent the nation's first and only recorded evidence of a nursery herd of ice age Columbian mammoths.",
        weather_description:
          "The monument enjoys a sunny, mild climate during three seasons of the year. Spring: Temperatures range from 45 F to 85 F (7 C/29 C). Rain is common in April and May. Summer: Temperatures range from 70 F to 95 F (21 C/35 C). Temperatures can exceed 100 F (38 C) in July and August. Lightweight clothing and sunscreen are advisable. Be prepared with plenty of water. Fall: Temperatures range from 45 F to 85 F (7 C/29 C). Winter: Temperatures range from 35 F to 65 F (2 C/18 C) . Snow and ice are rare.",
        state: "TX",
        parkCode: "waco",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/waca/index.htm",
        parkname: "Walnut Canyon National Monument",
        address: "3 Walnut Canyon Road Flagstaff 86004",
        description:
          "Come gaze across curved canyon walls. Among the remarkable geological formations of the canyon itself, the former homes of ancient inhabitants are easily evident. Along the trails you can imagine life within Walnut Canyon, while visiting actual pueblos and walking in the steps of those who came before.",
        weather_description:
          "Be prepared for variable and extreme weather conditions. You may expect high winds any time of year, summer temperatures above 95ºF (35ºC), afternoon storms July–September, and heavy snow from fall to spring. Dress in layers, as weather at Walnut Canyon can change quickly at any time of year.",
        state: "AZ",
        parkCode: "waca",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wapa/index.htm",
        parkname: "War In The Pacific National Historical Park",
        address: "135 Murray Blvd. Hagatna 96910",
        description:
          "War in the Pacific National Historical Park was established to commemorate the bravery and sacrifice of those participating in the campaigns of the Pacific Theater of World War II and to conserve and interpret outstanding natural, scenic, and historic values and objects of the island of Guam.",
        weather_description:
          "http://forecast.weather.gov/MapClick.php?lat=13.47190933300044&lon=144.74977715100056",
        state: "GU",
        parkCode: "wapa",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wamo/index.htm",
        parkname: "Washington Monument",
        address: "2 15th St. NW Washington 20024",
        description:
          "Built to honor George Washington, the United States' first president, the 555-foot marble obelisk towers over Washington, D.C.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "wamo",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/waro/index.htm",
        parkname:
          "Washington-Rochambeau Revolutionary Route National Historic Trail",
        address:
          "Washington-Rochambeau National Historic Trail King of Prussia 19406",
        description:
          "In 1781, General Rochambeau’s French Army joined forces with General Washington’s Continental Army to fight the British Army in Yorktown, Virginia. With the French Navy in support, the allied armies moved hundreds of miles to become the largest troop movement of the American Revolution. The effort and cooperation between the two sides led to a victory at Yorktown and secured American independence.",
        weather_description:
          "With over 680 miles of land and water trails and hundreds of historical sites, there is a wide variety in weather. Please check with your favorite weather website before traveling.",
        state: "MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC",
        parkCode: "waro",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/waba/index.htm",
        parkname: "Washita Battlefield National Historic Site",
        address: "18555 Hwy 47A, Ste. A Cheyenne 73628",
        description:
          "On November 27, 1868, Lt. Colonel George Armstrong Custer led the 7th US Cavalry on a surprise dawn attack on a Cheyenne village led by Peace Chief Black Kettle. The event was an example of the tragic clash of cultures that occurred during the Great Plains Wars. It is also a place of remembrance and reflection for those who died here.",
        weather_description:
          "Weather in western Oklahoma can vary considerably. Winters can be mild to severe with ice storms being the biggest concern. Spring is usually short but pleasant although severe weather, including tornadoes, is still a possibility. Usually a strong breeze is associated with spring weather. Summers are brutally hot and visitors should be cautioned about spending any length of time in the heat. Falls are cool with a bitter wind.",
        state: "OK",
        parkCode: "waba",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wefa/index.htm",
        parkname: "Weir Farm National Historical Park",
        address: "735 Nod Hill Road Wilton 06897",
        description:
          "Visit the home and studio of America's most beloved Impressionist, J. Alden Weir, and walk in the footsteps of generations of world-class artists. Set amidst more than 60 acres of painterly woods, fields, and waterways, you’ll soon see why Weir described his home as the 'Great Good Place.' Weir’s farm is a national legacy to American Impressionism, the creative spirit, and historic preservation.",
        weather_description:
          "Weir Farm’s grounds are open all year and each season offers a unique experience. For a comfortable visit please note the following information. Winter: Temperatures average from 20 F to 40 F. Storms and colder weather are possible. Spring: Temperatures average from 30 F to 70 F. Rain is common. Summer: Temperatures average from 60 F to 85 F. High humidity is common in July and August. Fall: Temperatures average from 35 F to 75 F. Foliage season runs from mid-September to mid-to-late October.",
        state: "CT",
        parkCode: "wefa",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/whis/index.htm",
        parkname: "Whiskeytown National Recreation Area",
        address: "14412 Kennedy Memorial Drive Whiskeytown 96095",
        description:
          "Whiskeytown Lake’s crystal-clear water is perhaps the most recognized feature of the park. However, water-based recreation is only a part of what the 42,000-acre Whiskeytown National Recreation Area (NRA) has to offer. Visit waterfalls, hike through rugged mountains, explore California Gold Rush history, and observe post-fire ecology in action. Your national park is calling...",
        weather_description:
          "Whiskeytown NRA is in a Mediterranean climate, which means hot, dry summers followed by cool, wet winters. Summer temperatures often reach the upper 90's to lower 100 degrees Fahrenheit, as well as the occasional thunderstorm. Winter brings snow to the upper elevations (only occasionally down to the lake level of 1,200'), and rain and ice. See the park weather page for the current weather.",
        state: "CA",
        parkCode: "whis",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/whsa/index.htm",
        parkname: "White Sands National Park",
        address: "19955 Hwy 70 W Alamogordo 88310",
        description:
          "Rising from the heart of the Tularosa Basin is one of the world's great natural wonders - the glistening white sands of New Mexico. Great wave-like dunes of gypsum sand have engulfed 275 square miles of desert, creating the world's largest gypsum dunefield. White Sands National Park preserves a major portion of this unique dunefield, along with the plants and animals that live here.",
        weather_description:
          "Temperatures at White Sands vary greatly throughout the year. Summer time temperatures can be very hot. Winters are mild with cool evenings. Spring time is the windy season. Fall is very enjoyable with mild daytime and night time temperatures.",
        state: "NM",
        parkCode: "whsa",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/whmi/index.htm",
        parkname: "Whitman Mission National Historic Site",
        address: "328 Whitman Mission Road Walla Walla 99362",
        description:
          "The 1847 attack on the Whitmans horrified Americans and impacted the lives of the peoples of the Columbia Plateau for decades afterwards. Was killing the Whitmans justified legal retribution, an act of revenge, or some combination of both? The circumstances that surround this tragic event resonate with modern issues of cultural interaction and differing perspectives.",
        weather_description:
          "Summers are hot. Hats, water and sunblock are recommended. Winters are mild and rainy with a few snow storms. Layered clothing is advised.",
        state: "WA",
        parkCode: "whmi",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wiho/index.htm",
        parkname: "William Howard Taft National Historic Site",
        address: "2038 Auburn Avenue Cincinnati 45219",
        description:
          "High atop one of Cincinnati's most prominent hilltops stands the two-story Greek Revival house where William Howard Taft was born and grew up. Hard work, a good education, and an interest in civic duty are attributes that made the Taft family outstanding leaders over the years. The environment that shaped Taft's character and philosophy is highlighted on a visit to the site.",
        weather_description:
          "The park lies in a humid continental zone with a generally temperate climate. Winters are mildly cold with average temperatures around 48 degrees (F). Summers are hot and humid with an average temperature around 77 degrees (F). Average annual total rainfall is just under 40'. Snowfall in the winter is generally light with an average total snowfall of less than 12'",
        state: "OH",
        parkCode: "wiho",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wicr/index.htm",
        parkname: "Wilson's Creek National Battlefield",
        address: "6424 W. Farm Road 182 Republic 65738",
        description:
          "Wilson's Creek was the first major Civil War battle fought west of the Mississippi River, and the site of the death of Nathaniel Lyon, the first Union general killed in action. The costly Southern victory on August 10, 1861, focused national attention on the war in Missouri. Wilson’s Creek NB commemorates and interprets the battle within the context of the war in the Trans-Mississippi West.",
        weather_description:
          "Summer months are frequently hot and humid, with occasional showers and thunderstorms. Winter months (especially January and February) are frequently cold, with occasional ice and light snow. Spring and fall months are generally pleasant, with occasional showers.",
        state: "MO",
        parkCode: "wicr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wica/index.htm",
        parkname: "Wind Cave National Park",
        address: "26611 US Highway 385 Hot Springs 57747",
        description:
          "Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world. Named for barometric winds at its entrance, this maze of passages is home to boxwork, a unique formation rarely found elsewhere.",
        weather_description:
          "Spring: Highs range from 50-70°F with highly variable weather. Spring is the park's wettest season. Summer: Hot and generally dry with daytime temperatures regularly exceeding 80°F (27°C). Strong thunderstorms are common and can produce large hail and lightning. Fall: Generally dry with warm days and cool nights. Highs 50-60°F. Lows below freezing are common. Winter: Highs are in the high 30s with lows around 10°F. Snowfall averages 30 inches annually, periodically closing park roads.",
        state: "SD",
        parkCode: "wica",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wing/index.htm",
        parkname: "Wing Luke Museum Affiliated Area",
        address: "719 South King Street Seattle 98104",
        description:
          "More than a museum, the Wing is an experience. A chance to truly understand what it was - and is - to be Asian American in the Pacific Northwest. Take a guided tour of a historic hotel and learn the inside story about what makes the local Chinatown-International District unique. Visitors explore thought-provoking exhibitions of real stories, including actor and martial arts master Bruce Lee.",
        weather_description:
          "The Wing Luke may close in the case of inclement weather. If you are unsure, please call the museum at 206.623.5124 after 10am to confirm that it is open.",
        state: "WA",
        parkCode: "wing",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wotr/index.htm",
        parkname: "Wolf Trap National Park for the Performing Arts",
        address: "1551 Trap Road Vienna 22182-1643",
        description:
          "No matter what your age or taste in shows, you'll find something you like onstage at Wolf Trap National Park for the Performing Arts. From May through September, multiple amphitheaters in the park present performances such as musicals, dance, opera, jazz, and popular and country music. A good time to explore the beauty and history of the park without the crowds is October - April.",
        weather_description:
          "The weather at Wolf Trap National Park for the Performing Arts is typical for the mid-Atlantic area. There are four seasons. The majority of visitation is during the summers, which can be hot and humid during the day and cooler at night.",
        state: "VA",
        parkCode: "wotr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wori/index.htm",
        parkname: "Women's Rights National Historical Park",
        address: "136 Fall Street Seneca Falls 13148",
        description:
          "Women’s Rights National Historical Park tells the story of the first Women’s Rights Convention held in Seneca Falls, NY on July 19-20,1848. It is a story of struggles for civil rights, human rights, and equality, global struggles that continue today. The efforts of women’s rights leaders, abolitionists, and other 19th century reformers remind us that all people must be accepted as equals.",
        weather_description:
          "In the winter, temperatures range from 0-40 degrees with an average of 10 inches of snow per month. Summer temperatures range from 60-85 degrees with high humidity.",
        state: "NY",
        parkCode: "wori",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wwii/index.htm",
        parkname: "World War II Memorial",
        address: "1750 Independence Ave. SW Washington 20024",
        description:
          "Through stone architecture and bronze sculptures, the World War II Memorial recognizes the ways Americans served, honors those who fell, and recognizes the victory they achieved to restore freedom and end tyranny around the globe.",
        weather_description:
          "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter. Spring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees Summer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees Fall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees Winter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees (Source: www.usclimatedata.com)",
        state: "DC",
        parkCode: "wwii",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wrst/index.htm",
        parkname: "Wrangell - St Elias National Park & Preserve",
        address:
          "Wrangell-St. Elias National Park & Preserve Copper Center 99573",
        description:
          "Wrangell-St. Elias is a vast national park that rises from the ocean all the way up to 18,008 ft. At 13.2 million acres, the park is the same size as Yellowstone National Park, Yosemite National Park, and Switzerland combined! Within this wild landscape, people continue to live off the land as they have done for centuries. This rugged, beautiful land is filled with opportunities for adventure.",
        weather_description:
          "Varies widely depending on location in park and time of year. Visit https://www.nps.gov/wrst/planyourvisit/weather.htm for detailed information.",
        state: "AK",
        parkCode: "wrst",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wrbr/index.htm",
        parkname: "Wright Brothers National Memorial",
        address: "1000 North Croatan Highway Kill Devil Hills 27948",
        description:
          "Wind, sand, and a dream of flight brought Wilbur and Orville Wright to Kitty Hawk, North Carolina where, after four years of scientific experimentation, they achieved the first successful airplane flights on December 17, 1903. With courage and perseverance, these self-taught engineers relied on teamwork and application of the scientific process. What they achieved changed our world forever.",
        weather_description:
          "Weather on the Outer Banks varies seasonally and daily. Please check the National Weather Service at http://www.weather.gov/mhx/ for up-to-date weather forecast information.",
        state: "NC",
        parkCode: "wrbr",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/wupa/index.htm",
        parkname: "Wupatki National Monument",
        address: "25137 N. Sunset Crater-Wupatki Loop Rd. Flagstaff 86004",
        description:
          "Nestled between the Painted Desert and ponderosa highlands of northern Arizona, Wupatki is a landscape of legacies. Ancient pueblos dot red-rock outcroppings across miles of prairie. Where food and water seem impossible to find, people built pueblos, raised families, farmed, traded, and thrived. Today, if you linger and listen, earth and artifacts whisper their stories to us still.",
        weather_description:
          "Be prepared for variable and extreme weather conditions. You may expect high winds any time of year, summer temperatures above 100ºF (38ºC), afternoon storms July–September, and occasional snow in winter and early spring. Dress in layers, as Wupatki weather can change quickly at any time of year.",
        state: "AZ",
        parkCode: "wupa",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/yell/index.htm",
        parkname: "Yellowstone National Park",
        address: "2 Officers Row Yellowstone National Park 82190",
        description:
          "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. Today, millions of people come here each year to camp, hike, and enjoy the majesty of the park.",
        weather_description:
          "Yellowstone's weather can vary quite a bit, even in a single day. In the summer, daytime highs can exceed 70°F (25°C), only to drop 20 or more degrees when a thunderstorm rolls through. It can snow during any month of the year, and winter lows frequently drop below 0°F (-18°C), especially at night. Bring a range of clothing options, including a warm jacket and rain gear, even in the summer.",
        state: "ID,MT,WY",
        parkCode: "yell",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/york/index.htm",
        parkname:
          "Yorktown Battlefield Part of Colonial National Historical Park",
        address: "Yorktown Battlefield Yorktown 23690",
        description:
          "Discover what it took for the United States to be independent as you explore the site of the last major battle of the Revolutionary War. Here at Yorktown, in the fall of 1781, General George Washington, with allied American and French forces, besieged General Charles Lord Cornwallis’s British army. On October 19, Cornwallis surrendered, effectively ending the war and ensuring independence.",
        weather_description:
          "Yorktown, VA climate is warm during summer when temperatures tend to be in the 80's and cold during winter when temperatures tend to be in the 30's. The warmest month of the year is July with an average maximum temperature of 89.00 degrees Fahrenheit, while the coldest month of the year is January with an average minimum temperature of 28.10 degrees Fahrenheit. For closures in due to inclement weather at Colonial National Historical Park please phone this 24 hour phone number (757) 856-1240.",
        state: "VA",
        parkCode: "york",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/yose/index.htm",
        parkname: "Yosemite National Park",
        address: "No address available",
        description:
          "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
        weather_description:
          "Yosemite National Park covers nearly 1,200 square miles (3,100 square km) in the Sierra Nevada, with elevations ranging from about 2,000 feet (600 m) to 13,000 ft (4,000 m). Yosemite receives 95% of its precipitation between October and May (and over 75% between November and March). Most of Yosemite is blanketed in snow from about November through May. (Yosemite Valley can be rainy or snowy in any given winter storm.)",
        state: "CA",
        parkCode: "yose",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/yuho/index.htm",
        parkname: "Yucca House National Monument",
        address: "Off County Rd 20.5 Cortez 81321",
        description:
          "Through a continuing tradition of public and private cooperation, Yucca House National Monument preserves one of the largest archeological sites in SW Colorado. The unexcavated nature of the site preserves its integrity and beauty for future generations of scientists and visitors. Experience a sense of discovery by visiting a site that has remained largely untouched for the past 800 years!",
        weather_description:
          "Spring and Fall are mild with daytime temperatures ranging from 50 F to 80 F. Winter temperatures are below 50 F with occasional snowstorms. Summers are hot and dry, with highs in the 90s.",
        state: "CO",
        parkCode: "yuho",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/yuch/index.htm",
        parkname: "Yukon - Charley Rivers National Preserve",
        address: "101 Dunkel St Fairbanks 99701",
        description:
          "Located in Interior Alaska, Yukon-Charley Rivers offers exploration in a largely untouched landscape. Whether you float the mighty Yukon River or paddle the Charley River's whitewater, your memories will last a lifetime. Geology, cultural history, gold rush remnants, wildlife, and vast scenery will be a part of your experience. But, the strongest element will be solitude. Your adventure awaits.",
        weather_description:
          "The area that Yukon-Charley Rivers encompasses is generally classified as sub-arctic, with exceptionally cold winters, relatively warm summers, low annual precipitation, and generally high winds.",
        state: "AK",
        parkCode: "yuch",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
      {
        url: "https://www.nps.gov/zion/index.htm",
        parkname: "Zion National Park",
        address: "Zion National Park Springdale 84767",
        description:
          "Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.",
        weather_description:
          "Zion is known for a wide range of weather conditions. Temperatures vary with changes in elevation and day/night temperatures may differ by over 30°F. In summer, temperatures in Zion National Park often exceed 100°F/38°C. Zion experiences monsoons from mid-July into September that results in an increased risk of flash floods. Always be aware of the threat of storms and lightning and be prepared for a wide range of weather conditions. Winters are generally mild.",
        state: "UT",
        parkCode: "zion",
        createdAt: "2021-02-06T13:28:36.488",
        updatedAt: "2021-02-06T13:28:36.488",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
