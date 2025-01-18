

document.addEventListener("DOMContentLoaded", function() {
    function getRandomWallpaper() {
        const wallpapers = [
            "wallpaper.jpg", "wallpaper2.jpg", "wallpaper3.jpg", "wallpaper4.jpg"
        ];
        const randomIndex = Math.floor(Math.random() * wallpapers.length);
        return wallpapers[randomIndex];
    }
    function generateRandomPersonality(name) {
        if (name === "") {
            alert("Please enter a name to generate a personality profile.");
            return;
        }
        // Define categories of traits
        const personalities = [
            "Cheerful", "Brooding", "Curious", "Charming", "Hot-headed",
            "Mysterious", "Optimistic", "Pessimistic", "Sarcastic", "Loyal", "Witty", "Cynical", "Eccentric", "Grumpy", "Naive", "Silly", "Stoic", "Whimsical", "Anxious", "Confident", "Dependable", "Energetic", "Friendly", "Gentle", "Honest", "Impulsive", "Kind", "Laid-back", "Meticulous", "Passionate", "Quiet", "Resourceful", "Serious", "Thoughtful", "Unpredictable", "Vivacious", "Wise", "Youthful", "Zany", "Adventurous", "Brave", "Clever", "Daring", "Enthusiastic", "Fearless", "Generous", "Helpful", "Intelligent", "Jovial", "Keen", "Lively", "Modest", "Noble", "Open-minded", "Patient", "Quick-witted", "Reliable", "Sensible", "Talented", "Understanding", "Versatile", "Warm-hearted", "Xenial", "Youthful", "Zealous"
        ];
    
        const occupations = [
            "Inventor", "Merchant", "Detective", "Soldier", "Healer",
            "Artist", "Farmer", "Scholar", "Explorer", "Thief", "Bard", "Pirate", "Knight", "Priest", "Blacksmith", "Noble", "Ranger", "Alchemist", "Sailor", "Miner", "Jester", "Spy", "Architect", "Baker", "Carpenter", "Dancer", "Engineer", "Fisherman", "Guard", "Herbalist", "Jeweler", "Librarian", "Mason", "Painter", "Quartermaster", "Scribe", "Tailor", "Undertaker", "Vintner", "Weaver", "Xylophonist", "Yarnspinner", "Zookeeper", "Apothecary", "Brewer", "Candlemaker", "Diplomat", "Entertainer", "Falconer", "Glassblower", "Herald", "Innkeeper", "Juggler", "Knight", "Luthier", "Mime", "Navigator", "Orator", "Philosopher", "Quartermaster", "Ranger", "Sculptor", "Tavernkeeper", "Undertaker", "Vintner", "Watchmaker", "Xylophonist", "Yarnspinner", "Zookeeper"
        ];
    
        const quirks = [
            "Always hums a tune", "Obsessed with symmetry", "Afraid of cats",
            "Constantly loses things", "Speaks in riddles", "Collects strange artifacts",
            "Refuses to wear shoes", "Laughs at inappropriate times",
            "Carries a lucky charm", "Overuses metaphors", "Hates the color green", "Writes poetry on napkins", "Never forgets a face", "Always has a snack", "Talks to animals", "Sleepwalks", "Keeps a journal", "Hates the outdoors", "Has a pet parrot", "Wears mismatched socks", "Always tells the truth", "Has a fear of heights", "Wears a monocle", "Hates the taste of chocolate", "Has a pet snake", "Wears a feather in their hat", "Hates the sound of bells", "Has a pet owl", "Wears a mask in public", "Hates the smell of roses", "Has a pet ferret", "Wears a ring on every finger", "Hates the feel of sand", "Has a pet fox", "Wears a flower behind their ear", "Hates the sight of blood", "Has a pet raccoon", "Wears a scarf in summer", "Hates the touch of velvet", "Has a pet bat", "Wears a locket around their neck",
        ];
    
        const strengths = [
            "Brilliant strategist", "Master of disguise", "Incredible strength",
            "Photographic memory", "Unwavering courage", "Expert tracker",
            "Exceptional cook", "Natural leader", "Gifted storyteller",
            "Knack for finding hidden things", "Skilled negotiator", "Quick reflexes",
            "Eagle-eyed archer", "Silver tongue", "Gifted healer", "Master of stealth",
            "Unbreakable will", "Exceptional memory", "Incredible speed", "Master of illusions",
            "Gifted musician", "Unmatched swordsmanship", "Expert climber", "Keen sense of direction"
        ];
    
        const weaknesses = [
            "Trusts too easily", "Afraid of heights", "Impulsive decision-making",
            "Overly competitive", "Terrible liar", "Reckless in danger",
            "Shy in social settings", "Struggles with authority",
            "Easily distracted", "Fear of the dark", "Overly trusting", "Impatient with others", "Overly critical", "Afraid of water", "Easily bored", "Overly stubborn", "Fear of fire", "Struggles with technology", "Overly sensitive", "Fear of spiders", "Struggles with math", "Overly curious", "Fear of snakes", "Struggles with reading", "Overly emotional", "Fear of failure", "Struggles with cooking", "Overly cautious", "Fear of crowds", "Struggles with animals", "Overly protective", "Fear of loud noises", "Struggles with heights", "Overly pessimistic", "Fear of germs", "Struggles with music", "Overly superstitious", "Fear of the unknown", "Struggles with art"
        ];
    
        // Hash the name to create a deterministic random seed
        function hashString(str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = (hash << 5) - hash + str.charCodeAt(i);
                hash |= 0; // Convert to 32bit integer
            }
            return Math.abs(hash);
        }
    
        const seed = hashString(name);
    
        // Seeded random function
        function seededRandom(seed) {
            const x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        }
    
        function randomFromArray(array, seedOffset) {
            return array[Math.floor(seededRandom(seed + seedOffset) * array.length)];
        }
    
        // Select one trait from each category based on the hashed name
        const personality = randomFromArray(personalities, 1);
        const occupation = randomFromArray(occupations, 2);
        const quirk = randomFromArray(quirks, 3);
        const strength = randomFromArray(strengths, 4);
        const weakness = randomFromArray(weaknesses, 5);
    
        // Format and return the character's personality profile
        const profile = `
            Name: ${name}
            Personality: ${personality}
            Occupation: ${occupation}
            Quirk: ${quirk}
            Strength: ${strength}
            Weakness: ${weakness}`;
    
        console.log(profile);
        document.getElementById('namelabel').innerHTML = name;
        document.getElementById('personality').innerHTML = personality;
        document.getElementById('occupation').innerHTML = occupation;
        document.getElementById('quirk').innerHTML = quirk;
        document.getElementById('strength').innerHTML = strength;
        document.getElementById('weakness').innerHTML = weakness;
    }
document.getElementById("generate").addEventListener("click", function() {
    generateRandomPersonality(document.getElementById("name").value);
});
document.getElementById("wallpaper").style.backgroundImage = `url(${getRandomWallpaper()})`;
});