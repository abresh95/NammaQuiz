const STATES = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh / Telangana"
];

const CELEBRITIES = [
  // ── Tamil Nadu ──
  {
    name: "AR Rahman",
    state: "Tamil Nadu",
    hint: "Oscar-winning music composer, born in Chennai",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/AR_Rahman_At_The_%E2%80%98Marvel_Anthem%E2%80%99_Launch_%283x4_cropped%29.jpg/500px-AR_Rahman_At_The_%E2%80%98Marvel_Anthem%E2%80%99_Launch_%283x4_cropped%29.jpg"
  },
  {
    name: "Kamal Haasan",
    state: "Tamil Nadu",
    hint: "Veteran actor & filmmaker, born in Paramakudi",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kamal_Haasan_at_2023_San_Diego_Comic-Con_International_by_Gage_Skidmore%2C_005_%28cropped%29.jpg/500px-Kamal_Haasan_at_2023_San_Diego_Comic-Con_International_by_Gage_Skidmore%2C_005_%28cropped%29.jpg"
  },
  {
    name: "Vijay",
    state: "Tamil Nadu",
    hint: "Superstar of Tamil cinema, born in Chennai",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Vijay_at_Protest_of_the_Nadigar_Sangam.jpg/500px-Vijay_at_Protest_of_the_Nadigar_Sangam.jpg"
  },
  {
    name: "Ilaiyaraaja",
    state: "Tamil Nadu",
    hint: "The Maestro — legendary Indian film music composer",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Ilaiyaraaja_at_Merku_Thodarchi_Malai_Press_Meet_%28cropped%29.jpg/500px-Ilaiyaraaja_at_Merku_Thodarchi_Malai_Press_Meet_%28cropped%29.jpg"
  },
  {
    name: "Sundar Pichai",
    state: "Tamil Nadu",
    hint: "CEO of Google & Alphabet, born in Madurai",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/500px-Sundar_Pichai_-_2023_%28cropped%29.jpg"
  },
  // ── Kerala ──
  {
    name: "Mohanlal",
    state: "Kerala",
    hint: "The Complete Actor of Malayalam cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mohanlal_Viswanathan_BNC.jpg/500px-Mohanlal_Viswanathan_BNC.jpg"
  },
  {
    name: "Mammootty",
    state: "Kerala",
    hint: "Three-time National Award-winning Malayalam legend",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mammootty%2C_2022.jpg/500px-Mammootty%2C_2022.jpg"
  },
  {
    name: "Dulquer Salmaan",
    state: "Kerala",
    hint: "Son of Mammootty; Malayalam & Bollywood star",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
  },
  {
    name: "Prithviraj Sukumaran",
    state: "Kerala",
    hint: "Actor & filmmaker from Thiruvananthapuram",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Prithviraj_at_Aiyyaa_event.jpg"
  },
  {
    name: "Fahadh Faasil",
    state: "Kerala",
    hint: "Critically acclaimed actor known for intense roles (Vikram, Pushpa)",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Fahadh_Faasil_2019.jpg/500px-Fahadh_Faasil_2019.jpg"
  },
  // ── Karnataka ──
  {
    name: "Yash",
    state: "Karnataka",
    hint: "KGF superstar, born in Hassan, Karnataka",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Yash%2C_Vishal%2C_Srinidhi_Shetty_at_the_%E2%80%98KGF%E2%80%99_Press_Meet_In_Chennai_%28cropped%29.jpg"
  },
  {
    name: "Kichcha Sudeep",
    state: "Karnataka",
    hint: "Pan-India star of Kannada cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sudeep_interview_TeachAIDS.jpg"
  },
  {
    name: "Darshan",
    state: "Karnataka",
    hint: "Challenging Star of Kannada cinema, born in Mysore",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Darshan_%28Kannada_actor%29_March_2024_%2801%29.jpg"
  },
  {
    name: "Puneeth Rajkumar",
    state: "Karnataka",
    hint: "Power Star — beloved icon of Kannada cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Puneeth_Rajkumar_%281%29.jpg"
  },
  {
    name: "Girish Karnad",
    state: "Karnataka",
    hint: "Jnanpith Award-winning playwright, actor & Padma Bhushan",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Girish_Karnad_Screening_Cornell_%28cropped%29.JPG/500px-Girish_Karnad_Screening_Cornell_%28cropped%29.JPG"
  },
  // ── Andhra Pradesh / Telangana ──
  {
    name: "Mahesh Babu",
    state: "Andhra Pradesh / Telangana",
    hint: "The Prince of Telugu cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mahesh_Babu_in_Spyder_%28cropped%29.jpg/500px-Mahesh_Babu_in_Spyder_%28cropped%29.jpg"
  },
  {
    name: "Prabhas",
    state: "Andhra Pradesh / Telangana",
    hint: "Baahubali star from Nellore, Andhra Pradesh",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Prabhas_by_Gage_Skidmore.jpg/500px-Prabhas_by_Gage_Skidmore.jpg"
  },
  {
    name: "Allu Arjun",
    state: "Andhra Pradesh / Telangana",
    hint: "Pushpa star, the Stylish Star of Telugu cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg/500px-Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg"
  },
  {
    name: "Chiranjeevi",
    state: "Andhra Pradesh / Telangana",
    hint: "Mega Star — Padma Vibhushan & former Union Minister",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Chiranjeevi_at_ANR_Awards_2024_%28cropped%29.jpg/500px-Chiranjeevi_at_ANR_Awards_2024_%28cropped%29.jpg"
  },
  {
    name: "Sania Mirza",
    state: "Andhra Pradesh / Telangana",
    hint: "Tennis Grand Slam champion from Hyderabad",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Sania_Mirza_in_Tennis_Premier_League_2021.jpg"
  }
];

// ── Hash encoding: 20 answers × 2 bits = 40 bits → 8 base32 chars (5 bits each) ──
const B32 = '0123456789abcdefghijklmnopqrstuv';

function encodeAnswers(chosenIndices) {
  let bits = 0n;
  for (const idx of chosenIndices) bits = (bits << 2n) | BigInt(idx);
  let result = '';
  for (let i = 7; i >= 0; i--) {
    result = B32[Number(bits & 31n)] + result;
    bits >>= 5n;
  }
  return result;
}

function decodeAnswers(hash) {
  let bits = 0n;
  for (const c of hash) bits = (bits << 5n) | BigInt(B32.indexOf(c));
  const indices = [];
  for (let i = 19; i >= 0; i--) {
    indices[i] = Number(bits & 3n);
    bits >>= 2n;
  }
  return indices;
}
