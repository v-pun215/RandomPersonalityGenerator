import random

def generate_random_personality():
    # Define categories of traits
    personalities = [
        "Cheerful", "Brooding", "Curious", "Charming", "Hot-headed",
        "Mysterious", "Optimistic", "Pessimistic", "Sarcastic", "Loyal"
    ]

    occupations = [
        "Inventor", "Merchant", "Detective", "Soldier", "Healer",
        "Artist", "Farmer", "Scholar", "Explorer", "Thief"
    ]

    quirks = [
        "Always hums a tune", "Obsessed with symmetry", "Afraid of cats",
        "Constantly loses things", "Speaks in riddles", "Collects strange artifacts",
        "Refuses to wear shoes", "Laughs at inappropriate times",
        "Carries a lucky charm", "Overuses metaphors"
    ]

    strengths = [
        "Brilliant strategist", "Master of disguise", "Incredible strength",
        "Photographic memory", "Unwavering courage", "Expert tracker",
        "Exceptional cook", "Natural leader", "Gifted storyteller",
        "Knack for finding hidden things"
    ]

    weaknesses = [
        "Trusts too easily", "Afraid of heights", "Impulsive decision-making",
        "Overly competitive", "Terrible liar", "Reckless in danger",
        "Shy in social settings", "Struggles with authority",
        "Easily distracted", "Fear of the dark"
    ]

    # Randomly select one trait from each category
    personality = random.choice(personalities)
    occupation = random.choice(occupations)
    quirk = random.choice(quirks)
    strength = random.choice(strengths)
    weakness = random.choice(weaknesses)

    # Format and return the character's personality profile
    profile = (
        f"Personality: {personality}\n"
        f"Occupation: {occupation}\n"
        f"Quirk: {quirk}\n"
        f"Strength: {strength}\n"
        f"Weakness: {weakness}"
    )

    return profile

# Generate and display a random character personality
if __name__ == "__main__":
    print("--- Random Character Personality ---")
    print(generate_random_personality())
