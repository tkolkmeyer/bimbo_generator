function generateBimboName() {
    var firstName = [
        "silky",
        "hell",
        "saucy",
        "juicy",
        "vitamin",
        "essence",
        "minty",
        "Phoenix",
        "Alaska",
        "roxy",
        "foxy",
        "ginger",
        "pearl",
        "disco",
        "calamity",
        "Genevieve",
        "elle",
        "love",
        "brooklyn",
        "charlize",
        "sexy",
        "rhinestone",
        "diamond",
        "pinot",
        "sugar",
        "salty",
        "dorthy",
        "vanessa",
        "angela",
        "tamara",
        "diana",
        "tia",
        "doja",
        "harlette",
        "jessica",
        "ashley",
        "emily",
        "stacy",
        "trixie",
        "katya",
        "ben",
        "Becky",
        "carol",
        "belle",
        "delphine",
        "Anastasia",
        "violet",
        "tyra",
        "raven",
        "basil",
        "sofia",
        "mariah",
        "almond",
        "pecan",
        "princess",
        "ivy",
        "jasmine",
        "DuJour",
        "Fame",
        "Noami",
        "bambi",
        "gigi",
        "Berry",
        "jane",
        "mary",
        "dingo",
        "cherry",
        "strawberry",
        "foster",
        "gold",
        "azalea",
        "lily",
        "ivy",
        "yasmin",
        "zinnia",
        "poppy",
        "daisy",
        "dahlia",
        "sage",
        "cedar",
        "ren",
        "indigo",
        "sorrel",
        "tension",
        "blueberry",
        "sloppy",
        "glossy",
        "smooth"
    ];
    var lastName = [
        "cherry",
        "ketchup",
        "moon",
        "dolphin",
        "leopard",
        "lion",
        "batman",
        "bells",
        "duvet",
        "cumslut",
        "kay",
        "dips hit",
        "mustard",
        "flowers",
        "wild",
        "phoenix",
        "ritz",
        "princess",
        "heart",
        "love",
        "mayonnaise",
        "coco",
        "winters",
        "summers",
        "pearl",
        "ho",
        "disco",
        "Veloure",
        "Silk",
        "Cotton",
        "Moan",
        "Cracker",
        "Bottoms",
        "Envy",
        "Honey",
        "Milk",
        "Closet",
        "Doll",
        "Rose",
        "Muse",
        "Sin",
        "Cox",
        "Lux",
        "Evangalista",
        "Berry",
        "billow",
        "pillow",
        "willow",
        "cumslut",
        "pillow",
        "hamburger",
        "afternoon",
        "ocean",
        "animal",
        "pencil",
        "pizza",
        "breakfast",
        "ambulance",
        "camera",
        "banana",
        "balloon",
        "pancake",
        "muffin",
        "corndog",
        "hotdog",
        "sorbet",
        "kangaroo",
        "dingo",
        "juice",
        "strawberry",
        "cartoon",
        "money",
        "bunny",
        "shampoo",
        "sugar",
        "foster",
        "eggplant",
        "peanut",
        "polish",
        "posh",
        "toothbrush",
        "hairbrush",
        "tomato",
        "oyster",
        "death",
        "church",
        "primrose",
        "poppins",
        "joe",
        "tension",
        "pole",
        "blueberry",
        "slop",
        "rabbit",
        "pecan",
        "operator",
        "smooth",
        "dynamo",
        "fishnet"
    ];
    var firstNameIndex = Math.floor(Math.random() * firstName.length);
    var lastNameIndex = Math.floor(Math.random() * lastName.length);
    var firstName = firstName[firstNameIndex];
    var lastName = lastName[lastNameIndex];
    var bimboName = firstName + lastName;
    return bimboName;
}