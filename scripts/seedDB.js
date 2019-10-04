const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/awesomeProject"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    authors: "Stephen King",
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight."
  },
  {
    title: "Lord of the Flies",
    authors: "William Golding",
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death."
  },
  {
    title: "The Catcher in the Rye",
    authors: "J.D. Salinger",
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection."
  },
  {
    title: "The Punch Escrow",
    authors: "Tal M. Klein",
    description:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him."
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    authors: "J.K. Rowling",
    description:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny."
  },
  {
    title: "Coraline",
    authors: "Neil Gaiman",
    description:
      "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life."
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    authors: "Charles Petzold",
    description:
      "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within."
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    authors: "Brad Stone",
    description:
      "The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that's never been cracked. Until now. Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech's other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing. The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read."
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    authors: "Arnold Schwarzenegger",
    description:
      "In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brilliantly in these pages. He was born in a year of famine, in a small Austrian town, the son of an austere police chief. He dreamed of moving to America to become a bodybuilding champion and a movie star. By the age of twenty-one, he was living in Los Angeles and had been crowned Mr. Universe. Within five years, he had learned English and become the greatest bodybuilder in the world. Within ten years, he had earned his college degree and was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. He was also the winner of a Golden Globe Award for his debut as a dramatic actor in Stay Hungry. Within twenty years, he was the world’s biggest movie star, the husband of Maria Shriver, and an emerging Republican leader who was part of the Kennedy family. Thirty-six years after coming to America, the man once known by fellow body­builders as the Austrian Oak was elected governor of California, the seventh largest economy in the world. He led the state through a budget crisis, natural disasters, and political turmoil, working across party lines for a better environment, election reforms, and bipartisan solutions. With Maria Shriver, he raised four fantastic children. In the wake of a scandal he brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall."
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    authors: "Ashlee Vance",
    description:
      "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers. Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits. Vance uses Musk's story to explore one of the pressing questions of our age: Can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk - one of the most unusual and striking figures in American business history - is a contemporary, visionary amalgam of legendary inventors and industrialists, including Thomas Edison, Henry Ford, Howard Hughes,and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy."
  }
];

const donationSeed = [
  {
    name: "Feeding America",
    image: "http://seekvectorlogo.com/wp-content/uploads/2018/02/feeding-america-vector-logo.png",
    description:
      "A United States-based nonprofit organization that is a nationwide network of more than 200 food banks that feed more than 46 million people through food pantries, soup kitchens, shelters, and other community-based agencies.",
    link: "https://www.feedingamerica.org/",
    donation: 0
  },
  {
    name: "St. Jude Children’s Research Hospital",
    image: "https://1ijylmozio83m2nkr2v293mp-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/st-jude-childrens-hospital-logo.png",
    description:
      "Their mission is to advance cures and means of prevention, for pediatric catastrophic diseases through research and treatment. Consistent with the vision of our founder Danny Thomas, no child is denied treatment based on race, religion or a family’s ability to pay.",
    link: "https://www.stjude.org/",
    donation: 0
  },
  {
    name: "Habitat for Humanity International",
    image: "cecilia insert URL here!",
    description:
      "A nonprofit organization that helps families build and improve places to call home. We believe affordable housing plays a critical role in strong and stable communities.",
    link: "https://www.habitat.org/",
    donation: 0
  },
  {
    name: "Nature Conservancy",
    image: "https://www.greatlakesnow.org/wp-content/uploads/2017/01/logo-nature.png”",
    description:
      "Our mission is to conserve the land and waters on which all life depends. Our vision is a world where the diversity of life thrives, and people act to conserve nature for its own sake and its ability to fulfill our needs and enrich our lives.",
    link: "https://www.nature.org/en-us/",
    donation: 0
  },
  {
    name: "Planned Parenthood Federation of America",
    image: "https://healthhires.com/wp-content/sabai/File/files/l_f217386f67735efaa2057ef426e33336.png",
    description:
      "One of the nation’s leading providers of high-quality, affordable health care for women, men, and young people, and the nation’s largest provider of sex education. We offer quality health care, backed by medical experts and over 100 years of research in reproductive care.",
    link: "https://www.plannedparenthood.org/",
    donation: 0
  },
  {
    name: "Feed the Children",
    image: "https://volunteerrutherford.com/wp-content/sabai/File/files/l_82bac72aa055fdd23c63099f35f597a0.png",
    description:
      "We believe that we should create a world where no child goes to bed hungry.",
    link: "http://www.feedthechildren.org/",
    donation: 0
  },
  {
    name: "Doctors Without Borders",
    image: "https://denver-frederick.com/wp-content/uploads/2016/02/doctors-without-borders-logo-1.png",
    description:
      "An independent, global movement providing medical aid where it’s needed most.",
    link: "https://www.doctorswithoutborders.org/",
    donation: 0
  },
  {
    name: "Make-A-Wish Foundation of America",
    image: "http://www.romolagarai.org/imgs/full/119/1196800_make-a-wish-foundation-logo-png.png",
    description:
      "A vision to grant the wish of every child diagnosed with a critical illness.",
    link: "https://wish.org/",
    donation: 0
  },
  {
    name: "American Kidney Fund",
    image: "https://ml.globenewswire.com/Resource/Download/e9cb83a7-8c14-42dc-8527-d838abdf89ab?size=0",
    description:
      "Our mission is to help people fight kidney disease and live healthier lives.",
    link: "http://www.kidneyfund.org/",
    donation: 0
  },
  {
    name: "World Wildlife Fund",
    image: "https://www.pinclipart.com/maxpin/xoTobJ/",
    description:
      "Our mission is to conserve nature and reduce the most pressing threats to the diversity of life on Earth.",
    link: "https://www.worldwildlife.org/",
    donation: 0
  },
]

db.Donation
  .remove({})
  .then(() => db.Donation.collection.insertMany(donationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
// });
