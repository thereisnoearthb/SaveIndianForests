// Data for each person with multiple phone numbers
const peopleData = [
  {
    name: "Birendra Prasad Baishya",
    constituency: "",
    party: "Asom Gana Parishad",
    phoneNumbers: ["919868181789"]
  },
  {
    name: "Ajit Kumar",
    constituency: "",
    party: "Independent",
    phoneNumbers: ["919868181223"]
  },
  {
    name: "Rwngwra Narzary",
    constituency: "",
    party: "United People's Party(Liberal)",
    phoneNumbers: ["919868181202"]
  },
  {
    name: "Dhiraj Prasad Sahu",
    constituency: "",
    party: "Indian National Congress",
    phoneNumbers: ["919934111111", "919717000234"]
  },
  {
    name: "Prem Chand Gupta",
    constituency: "",
    party: "RJD",
    phoneNumbers: ["919013181666"]
  },
  {
    name: "Harivansh",
    constituency: "",
    party: "JDU",
    phoneNumbers: ["919013181002", "919013181002"]
  },
  {
    name: "Rajmani Patel",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919868181022", "919868181022"]
  },
  
  {
    name: "Rajani Ashokrao",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919422242222"]
  },

  {
    name: "Mukul Balkrishna",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919811658584"]
  },
  {
    name: "Sushil Kumar",
    constituency: "",
    party: "AAP",
    phoneNumbers: ["919431017530"]
  },
  {
    name: "Sant Balbir Singh",
    constituency: "",
    party: "AAP",
    phoneNumbers: ["919013181663", "919417319463"]
  },
 
  {
    name: "R Dharmar",
    constituency: "",
    party: "AIADMK",
    phoneNumbers: ["919443443661", "919443443661"]
  },
  {
    name: "N. R. Elango",
    constituency: "",
    party: "DMK",
    phoneNumbers: ["919499933998"]
  },
  {
    name: "S Kalyanasundaram",
    constituency: "",
    party: "DMK",
    phoneNumbers: ["919487691779", "919487691779"]
  },
  {
    name: "Dr. Kanimozhi NVN Somu",
    constituency: "",
    party: "DMK",
    phoneNumbers: ["919499933994", "919499933994"]
  },
  {
    name: "K.R.N. Rajeshkumar",
    constituency: "",
    party: "DMK",
    phoneNumbers: ["919442641618", "919442641618"]
  },
 
  {
    name: "C.V. Shanmugam",
    constituency: "",
    party: "AIADMK",
    phoneNumbers: ["919013181822", "919013181822"]
  },
  {
    name: "M Shanmugham",
    constituency: "",
    party: "DMK",
    phoneNumbers: ["919821010395"]
  },
  {
    name: "Tiruchi Siva",
    constituency: "",
    party: "DMK",
    phoneNumbers: ["919443160180", "919443160180"]
  },
  {
    name: "Vaiko",
    constituency: "",
    party: "MDMK",
    phoneNumbers: ["919842161241", "919842161241"]
  },
 

  {
    name: "P. Bhattacharya",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919433003922", "919433003922"]
  },
  {
    name: "Bikash Ranjan Bhattacharya",
    constituency: "",
    party: "CPI(M)",
    phoneNumbers: ["919013181922", "919013181922"]
  },
  {
    name: "Abir Ranjan Biswas",
    constituency: "",
    party: "AITC",
    phoneNumbers: ["919332274419", "919883293922"]
  },
  {
    name: "Subhashish Chakraborty",
    constituency: "",
    party: "AITC",
    phoneNumbers: ["919831159772"]
  },
  {
    name: "Shanta Chhetri",
    constituency: "",
    party: "AITC",
    phoneNumbers: ["919434003141", "9197432036898"]
  },
 
  {
    name: "Jawhar Sircar",
    constituency: "",
    party: "AITC",
    phoneNumbers: ["919868181120"]
  },
  {
    name: "Abhishek Manu Singhvi",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919810027705", "919868181959"]
  },
  {
    name: "Dola Sen",
    constituency: "",
    party: "AITC",
    phoneNumbers: ["919433155577", "919830361241"]
  },
 
  {
    name: "Dr. Wanwieroy Kharlukhi",
    constituency: "",
    party: "National Peoples Party",
    phoneNumbers: ["919485122202"]
  },
  {
    name: "Abdul Wahab",
    constituency: "",
    party: "Indian Union Muslim League",
    phoneNumbers: ["919013181677", "919868181280", "919847020911"]
  },
  {
    name: "Elamaram Kareem",
    constituency: "",
    party: "Communist Party of India(Marxist)",
    phoneNumbers: ["919868181068", "919400307786"]
  },
  {
    name: "Jose. K Mani",
    constituency: "",
    party: "Kerala Congress(M)",
    phoneNumbers: ["919447067772"]
  },
  {
    name: "Vayalar Ravi",
    constituency: "",
    party: "Indian National Congress",
    phoneNumbers: ["919910047474"]
  },
  {
    name: "Dr L. Hanumanthaiah",
    constituency: "",
    party: "Indian National Congress",
    phoneNumbers: ["919654087483"]
  },
  {
    name: "Jairam Ramesh",
    constituency: "",
    party: "Indian National Congress",
    phoneNumbers: ["919868181302", "919013181222"]
  },
  {
    name: "K.T.S. Tulsi",
    constituency: "",
    party: "Indian National Congress",
    phoneNumbers: ["919999609157"]
  }
];

// Function to generate WhatsApp message
function generateMessage(name, constituency, party, phoneNumber) {
  var message = `Hon’ble MP ${name},

I'm a concerned citizen writing to express apprehensions about the *Forest (Conservation) Amendment Bill, 2023,* that was passed in the Lok Sabha on *July 26, 2023,* during the Monsoon session. The proposed revisions to the Forest (Conservation) Act, of 1980, are *worrisome* and have significant implications for our environment and biodiversity.

The Bill's modifications, exempting certain forest lands from protection, could lead to the loss of vital wildlife habitats and ecological services, *leaving 15% of Indian forests ready to be exploited*. Furthermore, the wide-ranging exclusions for building projects on forest land, including zoos and tourist attractions, will disturb wildlife and natural ecosystems to a great and concerning extent. Since there is a wide emphasis on *compensatory afforestation* on forest land, old-growth forests are at risk of being replaced with unsustainable monoculture plantations.

The bill has sparked concerns over the need for clearing forests for motorways and hydropower projects. This sets a dangerous precedent, diluting the needed environmental due diligence mandated by law as it gives easy leeway to the displacement of indigenous communities, especially in the Northeast.

Northeastern states, rich in biodiversity and home to many endemic species, fear blanket impacts under the provisions of the Amendment. The bill protects only notified forests, excluding unnotified ones in the North-East, which accounts for *23.75%* of the country's forest cover.

The decision to send the Amendment Bill to the *Joint Parliamentary Committee* instead of the Parliamentary Standing Committee on Science and Technology, Environment, and Forests for review raises concerns about the democratic process and the efforts taken in the deliberation and discussion of the Bill.

As citizens of India, we believe in fulfilling our fundamental duty by prioritizing *sustainable development, environmental protection, and democratic values* to preserve our unique ecosystems and promote the best interests of communities in coexistence with natural resources.

*We urge and rely on the members of the Rajya Sabha to reconsider these revisions and take into account the feedback and objections that have been submitted by experts, ecologists, and environmentalists in the course of the public consultation period.*
`;

  var whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, "_blank");
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to create a card element
function createCard(person) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = "https://prsindia.org/files/mptrack/profile_image/rajya-sabha/profile_image/900101.jpg";
  img.width = "90%";
  img.alt = "";
  card.appendChild(img);

  const h1 = document.createElement("h1");
  h1.textContent = person.name;
  card.appendChild(h1);

  const p1 = document.createElement("p");
  p1.innerHTML = `<b>Party:</b> ${person.party}`;
  card.appendChild(p1);

  // Loop through multiple phone numbers if available for a person
  person.phoneNumbers.forEach(phoneNumber => {
    const whatsappBtn = document.createElement("a");
    whatsappBtn.classList.add("whatsapp-icon");
    whatsappBtn.href = "#";
    whatsappBtn.onclick = () => generateMessage(person.name, person.constituency, person.party, phoneNumber);
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    card.appendChild(whatsappBtn);
  });

  return card;
}

// Shuffle the peopleData array
shuffleArray(peopleData);

// Create cards and append to the card container
const cardContainer = document.getElementById("cardContainer");
peopleData.forEach(person => {
  const card = createCard(person);
  cardContainer.appendChild(card);
});
