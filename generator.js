window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

        let name = document.querySelector("input[name=name").value;

        if (name === "") {
            alert("TELL US");
        };

        let firstName = [
            "Silky",
            "Hell",
            "Saucy",
            "Juicy",
            "Vitamin",
            "Minty",
            "Phoenix",
            "Alaska",
            "Roxy",
            "Foxy",
            "Ginger",
            "Pearl",
            "Disco",
            "Calamity",
            "Genevieve",
            "Elle",
            "Love",
            "Brooklyn",
            "Charlize",
            "Rhinestone",
            "Diamond",
            "Pinot",
            "Sugar",
            "Salty",
            "Dorthy",
            "Vanessa",
            "Angela",
            "Tamara",
            "Diana",
            "Tia",
            "Doja",
            "Harlette",
            "Ashley",
            "Trixie",
            "Katya",
            "Ben",
            "Becky",
            "Carol",
            "Belle",
            "Delphine",
            "Anastasia",
            "Violet",
            "Tyra",
            "Raven",
            "Basil",
            "Sofia",
            "Mariah",
            "Almond",
            "Pecan",
            "Princess",
            "Ivy",
            "Jasmine",
            "DuJour",
            "Fame",
            "Noami",
            "Bambi",
            "Gigi",
            "Berry",
            "Jane",
            "Mary",
            "Dingo",
            "Cherry",
            "Strawberry",
            "Foster",
            "Golden",
            "Azalea",
            "Lily",
            "Yasmin",
            "Zinnia",
            "Poppy",
            "Daisy",
            "Dahlia",
            "Sage",
            "Cedar",
            "Ren",
            "Crying",
            "Indigo",
            "Sorrel",
            "Sloppy",
            "Glossy"
        ];
        let lastName = [
            "the Essence",
            "the Jay",
            "the Sauce",
            "the Sweet",
            "Cherry",
            "Cinnamon",
            "the Cherry",
            "Ketchup",
            "Moon",
            "Jalfo",
            "Dolphin",
            "the Moon",
            "Leopard",
            "the Fox",
            "the Chicken",
            "Lion",
            "George",
            "Bells",
            "Duvet",
            "the Gossip",
            "Chugs",
            "Kay",
            "Dips Hit",
            "the Dips",
            "Mustard",
            "the Phoenix",
            "Ritz",
            "the Ritz",
            "Princess",
            "Buchanan",
            "Mayonnaise",
            "Chanel",
            "Dipshit",
            "Pearl",
            "Deficiency",
            "Veloure",
            "Bloodlust",
            "Cox",
            "Lux",
            "Evangalista",
            "Frank",
            "Joe",
            "the Pillow Queen",
            "Willow",
            "Hamburger",
            "Balloon",
            "Pancake",
            "Muffin",
            "the Corndog",
            "'Nail Painting Emoji' Grant",
            "Hotdog",
            "Sorbet",
            "Dango",
            "the Juice",
            "the Strawberry",
            "Cartoon",
            "Money",
            "the Bunny",
            "Shampoo",
            "Foster",
            "the Joe",
            "the Posh",
            "the Primrose",
            "Poppins",
            "Au Fait",
            "Middeke",
            "Julep",
            "High Ball",
            "Christmas"
        ];

        let firstNameIndex = Math.floor(Math.random() * firstName.length);
        let lastNameIndex = Math.floor(Math.random() * lastName.length);
        let firstBimboName = firstName[firstNameIndex];
        let lastBimboName = lastName[lastNameIndex];
        let bimboName = firstBimboName + " " + lastBimboName;

        document.getElementById('hello-you').innerHTML = `Okay ${name}! That's great . . . We're gonna call you ${bimboName}`;


        event.preventDefault();

    });

});