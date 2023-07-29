// Data for each person with multiple phone numbers
const peopleData = [
  {
    name: "Ajit Kumar",
    constituency: "",
    party: "Independent",
    phoneNumbers: ["919868181044", "919868181223"]
  },
  {
    name: "Rwngwra Narzary",
    constituency: "",
    party: "United People's Party(Liberal)",
    phoneNumbers: ["919868181202", "919868181203"]
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
    phoneNumbers: ["919013181666", "919013181209"]
  },
  {
    name: "Harivansh",
    constituency: "",
    party: "JDU",
    phoneNumbers: ["919013181002", "919013181002"]
  },
  {
    name: "Digvijay Singh",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919013181725", "919013181725"]
  },
  {
    name: "Vivek Tankha",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919868249933", "919868249933"]
  },
  {
    name: "Rajmani Patel",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919868181022", "919868181022"]
  },
  {
    name: "Ramdas Athwale",
    constituency: "",
    party: "RPI",
    phoneNumbers: ["919004809627", "91996920011"]
  },
  {
    name: "Rajani Ashokrao",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919422242222", "919013181313"]
  },
  {
    name: "Sanjay Raut",
    constituency: "",
    party: "Shiv Sena",
    phoneNumbers: ["919868181089", "919868181089"]
  },
  {
    name: "Mukul Balkrishna",
    constituency: "",
    party: "INC",
    phoneNumbers: ["919013180257", "919811658584"]
  },
  {
    name: "Sushil Kumar",
    constituency: "",
    party: "AAP",
    phoneNumbers: ["919013181561", "919013181562", "919431017530"]
  },
  {
    name: "Sant Balbir Singh",
    constituency: "",
    party: "AAP",
    phoneNumbers: ["919013181663", "919417319463", "910182829936", "9101821294263"]
  },
  {
    name: "N Chandrasegharan",
    constituency: "",
    party: "AIADMK",
    phoneNumbers: ["919868181199", "919488361699"]
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
    phoneNumbers: ["919013181090", "919499933998", "914426153306"]
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
    name: "Anthiyur P Selvarasu",
    constituency: "",
    party: "DMK",
    phoneNumbers: ["919013181866", "919013181866"]
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
    phoneNumbers: ["919444042472", "919821010395"]
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
    name: "P Wilson",
    constituency: "",
    party: "DMK",
    phoneNumbers: ["919868181800", "919868181800"]
  },
  {
    name: "Subrata Bakshi",
    constituency: "",
    party: "AITC",
    phoneNumbers: ["919830040970", "919830040970"]
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
    phoneNumbers: ["919332274419", "919883293922", "9123311213"]
  },
  {
    name: "Subhashish Chakraborty",
    constituency: "",
    party: "AITC",
    phoneNumbers: ["919831159772", "919868181191"]
  },
  {
    name: "Shanta Chhetri",
    constituency: "",
    party: "AITC",
    phoneNumbers: ["919434003141", "9197432036898"]
  },
  {
    name: "Sushmita Dev",
    constituency: "",
    party: "AITC",
    phoneNumbers: ["919868181273"]
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
  }
];
// Function to generate WhatsApp message
function generateMessage(name, constituency, party, phoneNumber) {
  var message = `Hi ${name},
We, the concerned citizens of India, are writing to express our serious apprehensions about the Forest (Conservation) Amendment Bill, 2023 that passed in the Lok Sabha on 26th July, 2023 during the Monsoon session. The proposed revisions to the Forest (Conservation) Act, 1980 are worrisome and have significant implications for our environment and biodiversity.
The Bill's modifications, exempting certain forest lands from protection, could lead to the loss of vital wildlife habitats and ecological services, leaving 15% of Indian forests ready to be exploited.(want to confirm the statistic) Furthermore, the extensive exclusions for forest land construction projects, such as tourism facilities and zoos, may disrupt natural ecosystems and wildlife. Because of the emphasis on compensatory afforestation on forest land, old-growth forests may be replaced with unsustainable monoculture plantations.
Moreover, allowing construction near international borders may impact local communities and indigenous people, especially in the northeastern states, which are crucial biodiversity hotspots.
Additionally, the decision to send the Bill to the Joint Committee instead of the Parliamentary Standing Committee for review raises concerns about the democratic process.
We urge and rely on the members of Rajya Sabha to reconsider these revisions and take into account the feedback and objections submitted by experts, ecologists, and environmentalists.
As citizens of India, we believe in fulfilling our fundamental duty by prioritising sustainable development, environmental protection, and democratic values to preserve our unique ecosystems and promote the best interest of communities in coexistence with natural resources.`;

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