

document.addEventListener("DOMContentLoaded", function() {
    function generateRandomPersonality(name) {
        // Define categories of traits
        const personalities = [
            "Cheerful", "Brooding", "Curious", "Charming", "Hot-headed",
            "Mysterious", "Optimistic", "Pessimistic", "Sarcastic", "Loyal"
        ];
    
        const occupations = [
            "Inventor", "Merchant", "Detective", "Soldier", "Healer",
            "Artist", "Farmer", "Scholar", "Explorer", "Thief"
        ];
    
        const quirks = [
            "Always hums a tune", "Obsessed with symmetry", "Afraid of cats",
            "Constantly loses things", "Speaks in riddles", "Collects strange artifacts",
            "Refuses to wear shoes", "Laughs at inappropriate times",
            "Carries a lucky charm", "Overuses metaphors"
        ];
    
        const strengths = [
            "Brilliant strategist", "Master of disguise", "Incredible strength",
            "Photographic memory", "Unwavering courage", "Expert tracker",
            "Exceptional cook", "Natural leader", "Gifted storyteller",
            "Knack for finding hidden things"
        ];
    
        const weaknesses = [
            "Trusts too easily", "Afraid of heights", "Impulsive decision-making",
            "Overly competitive", "Terrible liar", "Reckless in danger",
            "Shy in social settings", "Struggles with authority",
            "Easily distracted", "Fear of the dark"
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
});