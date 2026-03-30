const STATES = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh / Telangana"
];

// Each state can have any number of celebrities — 3 are picked per game (or all if fewer than 3)
const CELEBRITY_POOLS = {
  "Tamil Nadu": [
    { name: "Kamal Haasan",   hint: "Veteran actor & filmmaker, born in Paramakudi",    img: "images/tamil-nadu/kamal-haasan.jpeg" },
    { name: "M. Karunanidhi", hint: "DMK founder, 5-time Tamil Nadu CM",                img: "images/tamil-nadu/karunanidhi.jpg" },
    { name: "Rajinikanth",    hint: "Superstar of Indian cinema, icon of Tamil films",  img: "images/tamil-nadu/rajnikanth.jpeg" },
    { name: "Sai Pallavi",    hint: "Actor known for Premam & Fidaa",                   img: "images/tamil-nadu/sai-pallavi.jpeg" },
    { name: "M.K. Stalin",    hint: "Current Tamil Nadu CM, DMK chief",                 img: "images/tamil-nadu/stalin.jpg" },
    { name: "Trisha",         hint: "Actor, queen of Kollywood",                         img: "images/tamil-nadu/trisha.jpg" },
    { name: "Vijay Sethupathi",hint: "Makkal Selvan of Tamil cinema",                   img: "images/tamil-nadu/vijay-sethupathi.jpeg" },
  ],
  "Kerala": [
    { name: "Fahadh Faasil",       hint: "Critically acclaimed actor known for intense roles",  img: "images/kerala/fahad.jpg" },
    { name: "Nazriya Nazim",       hint: "Actor turned producer, married to Fahadh Faasil",     img: "images/kerala/nasriya.jpg" },
    { name: "Nithya Menen",        hint: "Actor & singer, starred in OK Kanmani",               img: "images/kerala/nithya-menon.jpg" },
    { name: "Nivin Pauly",         hint: "Beloved Malayalam actor known for Premam",            img: "images/kerala/nivin-pauly.jpeg" },
    { name: "Pinarayi Vijayan",    hint: "Current Kerala CM, CPI(M) leader",                    img: "images/kerala/pinarayivijayan.jpeg" },
    { name: "Prithviraj Sukumaran",hint: "Actor & filmmaker from Thiruvananthapuram",            img: "images/kerala/prithviraj.jpg" },
    { name: "K.K. Shailaja",       hint: "Kerala's Rockstar health minister",                   img: "images/kerala/shailaja-minister.webp" },
  ],
  "Karnataka": [
    { name: "Siddaramaiah",    hint: "Current Karnataka CM, Congress leader",              img: "images/karnataka/Siddaramaiah.jpg" },
    { name: "Darshan",         hint: "Challenging Star of Kannada cinema, born in Mysore", img: "images/karnataka/darshan.jpg" },
    { name: "Rakshit Shetty",  hint: "Director & actor known for 777 Charlie",             img: "images/karnataka/rakshit_shetty.jpg" },
    { name: "Ramya",           hint: "Actress & politician from Karnataka",                 img: "images/karnataka/ramya.jpg" },
    { name: "Rashmika Mandanna",hint: "National Crush, known for Dear Comrade & Pushpa",  img: "images/karnataka/rashmika mandanna.jpg" },
    { name: "Kichcha Sudeep",  hint: "Pan-India star of Kannada cinema",                   img: "images/karnataka/sudeep.jpg" },
    { name: "Yash",            hint: "KGF superstar, born in Hassan, Karnataka",           img: "images/karnataka/yash.jpg" },
  ],
  "Andhra Pradesh / Telangana": [
    { name: "Allu Arjun",          hint: "Pushpa star, the Stylish Star of Telugu cinema",  img: "images/andhra-telangana/allu-arjun.jpeg" },
    { name: "N. Chandrababu Naidu",hint: "Andhra Pradesh CM, TDP founder",                  img: "images/andhra-telangana/chandrababu-naidu.jpg" },
    { name: "Chiranjeevi",         hint: "Mega Star — Padma Vibhushan & former Union Minister", img: "images/andhra-telangana/cihiranjeevi.jpeg" },
    { name: "Nagarjuna",           hint: "King — veteran Telugu actor & producer",           img: "images/andhra-telangana/nagarjuna.jpg" },
    { name: "Ram Charan",          hint: "Mega Power Star, son of Chiranjeevi, RRR star",   img: "images/andhra-telangana/ram-charan.jpg" },
    { name: "Seethakka",           hint: "Tribal welfare minister, Telangana MLA",           img: "images/andhra-telangana/seethakka-minister.png" },
    { name: "Vaishnavi Chaitanya", hint: "Telugu actor, known for Lucky Baskhar",            img: "images/andhra-telangana/vaishnavi-chaitanya.jpeg" },
  ],
};

// Flat list for results page lookup (encode/decode)
const CELEBRITIES = Object.values(CELEBRITY_POOLS).flat();
