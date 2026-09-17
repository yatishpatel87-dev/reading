import { Chapter } from '../types';

export const STD7_CHAPTERS: Chapter[] = [
  {
    id: 'unit1-journey-by-night',
    unitNumber: 1,
    title: 'Journey by Night',
    subtitle: 'Sher Singh\'s Brave Quest to Kalaghat',
    theme: 'Courage, Brotherly Love & Determination',
    summary: 'Twelve-year-old Sher Singh carries his severely ill younger brother Kunwar on a dangerous nighttime trek through wild jungles and flooded rivers to reach the Kalaghat hospital.',
    fullPassage: `Sher Singh’s little brother, Kunwar, lay in the hut with pain in his stomach that was getting worse. "He must be carried to the hospital at Kalaghat," said their mother. But Sher Singh’s father, the famous hunter Sher Singh Bahadur, was far away in the jungle with a photography expedition. There was no one else in the village of Laldwani strong enough to help, as all the men had gone with the beaters.

Sher Singh was only twelve years old, small and cheerful, but he made up his mind. "I will take him," he declared bravely. His mother tied Kunwar safely into a sling around Sher Singh’s shoulders. The jungle path was five miles to the river, and then another long journey through dense forest to the road that led to Kalaghat.

Night fell swiftly over the hills. The cries of jackals echoed through the sal trees. As Sher Singh hurried along the narrow track, his bare feet bruised on sharp stones, but he did not slow down. Suddenly, around a sharp bend, a herd of wild elephants blocked the path. Sher Singh froze in terror. The great tusker raised his trunk and trumpeted, smelling the air. Sher Singh held his breath, praying silently. After an agonizing moment, the herd crashed into the bamboo grove, leaving the track clear.

Sher Singh ran on until he reached the first river. The water was waist-deep, swirling cold and rapid from melted snow. Clinging firmly to the bamboo pole and balancing his brother’s heavy weight, he waded through the icy current. His teeth chattered, and his muscles burned with exhaustion.

At last, near dawn, bruised and trembling with fatigue, he reached the metalled road where a bullock cart gave them a lift to Kalaghat. When the doctor came out of the emergency room, he smiled gently at the exhausted boy. "Your brother will live," the doctor said. "You are truly Sher Singh Bahadur—a brave lion of a boy!"`,
    questions: [
      {
        id: 1,
        question: "What was wrong with Sher Singh's younger brother, Kunwar?",
        options: ["He had a broken leg", "He had severe pain in his stomach", "He was bitten by a snake", "He had a high fever from the cold"],
        correctIndex: 1,
        explanation: "The passage states that Kunwar lay in the hut with pain in his stomach that was getting worse.",
        clueSentence: "Kunwar, lay in the hut with pain in his stomach that was getting worse.",
        category: "factual"
      },
      {
        id: 2,
        question: "Where was Sher Singh's father when Kunwar fell ill?",
        options: ["Working at the hospital in Kalaghat", "Hunting deer in the village fields", "In the jungle on a photography expedition", "Trading grain at the weekly market"],
        correctIndex: 2,
        explanation: "Sher Singh's father was away in the jungle accompanying a photography expedition.",
        clueSentence: "Sher Singh’s father, the famous hunter Sher Singh Bahadur, was far away in the jungle with a photography expedition.",
        category: "factual"
      },
      {
        id: 3,
        question: "How old was Sher Singh when he undertook this perilous journey?",
        options: ["Ten years old", "Twelve years old", "Fourteen years old", "Sixteen years old"],
        correctIndex: 1,
        explanation: "The passage mentions that Sher Singh was only twelve years old.",
        clueSentence: "Sher Singh was only twelve years old, small and cheerful, but he made up his mind.",
        category: "factual"
      },
      {
        id: 4,
        question: "How did Sher Singh carry his sick brother Kunwar?",
        options: ["In a wooden cart pulled by hand", "On his shoulders tied in a sling", "In a cane basket on his head", "On a horse borrowed from a neighbor"],
        correctIndex: 1,
        explanation: "His mother tied Kunwar safely into a sling around Sher Singh's shoulders.",
        clueSentence: "His mother tied Kunwar safely into a sling around Sher Singh’s shoulders.",
        category: "factual"
      },
      {
        id: 5,
        question: "Which wild animals suddenly blocked Sher Singh's path in the jungle?",
        options: ["A pack of howling wolves", "A Bengal tiger with two cubs", "A herd of wild elephants", "A pair of charging rhinos"],
        correctIndex: 2,
        explanation: "Suddenly, around a bend, a herd of wild elephants blocked the path.",
        clueSentence: "Suddenly, around a sharp bend, a herd of wild elephants blocked the path.",
        category: "factual"
      },
      {
        id: 6,
        question: "What does the word 'Bahadur' mean in Sher Singh Bahadur's title?",
        options: ["Clever detective", "Brave warrior or hero", "Swift runner", "Famous doctor"],
        correctIndex: 1,
        explanation: "'Bahadur' is an honorary title signifying courage and bravery.",
        clueSentence: "You are truly Sher Singh Bahadur—a brave lion of a boy!",
        category: "vocabulary"
      },
      {
        id: 7,
        question: "What did Sher Singh do when the tusker raised its trunk?",
        options: ["He shouted loudly to scare it away", "He threw rocks at the elephant", "He froze in terror, held his breath, and prayed", "He climbed up a tall sal tree"],
        correctIndex: 2,
        explanation: "Sher Singh froze in terror, held his breath, and prayed silently until the herd moved away.",
        clueSentence: "Sher Singh held his breath, praying silently. After an agonizing moment, the herd crashed into the bamboo grove...",
        category: "inference"
      },
      {
        id: 8,
        question: "How deep was the water in the swollen river Sher Singh crossed?",
        options: ["Ankle-deep", "Knee-deep", "Waist-deep", "Over his head"],
        correctIndex: 2,
        explanation: "The passage explicitly notes that the water was waist-deep, swirling cold and rapid.",
        clueSentence: "The water was waist-deep, swirling cold and rapid from melted snow.",
        category: "factual"
      },
      {
        id: 9,
        question: "What helped Sher Singh keep his balance while wading through the icy river?",
        options: ["A thick iron chain", "A bamboo pole", "A wooden paddle", "Rope tied across the river"],
        correctIndex: 1,
        explanation: "He balanced himself and his brother by clinging firmly to a bamboo pole.",
        clueSentence: "Clinging firmly to the bamboo pole and balancing his brother’s heavy weight, he waded through the icy current.",
        category: "factual"
      },
      {
        id: 10,
        question: "Find the synonym of 'exhaustion' as used in the passage:",
        options: ["Bravery", "Fatigue", "Speed", "Agony"],
        correctIndex: 1,
        explanation: "'Fatigue' and 'exhaustion' both mean extreme physical tiredness.",
        clueSentence: "At last, near dawn, bruised and trembling with fatigue...",
        category: "vocabulary"
      },
      {
        id: 11,
        question: "What vehicle helped Sher Singh on the metalled road?",
        options: ["A motor lorry", "A bullock cart", "A horse carriage", "A bicycle"],
        correctIndex: 1,
        explanation: "A bullock cart gave them a lift on the metalled road to Kalaghat.",
        clueSentence: "he reached the metalled road where a bullock cart gave them a lift to Kalaghat.",
        category: "factual"
      },
      {
        id: 12,
        question: "What is the antonym of 'swiftly' as in 'Night fell swiftly'?",
        options: ["Gradually / Slowly", "Rapidly", "Quickly", "Suddenly"],
        correctIndex: 0,
        explanation: "The opposite of 'swiftly' (quickly) is 'slowly' or 'gradually'.",
        clueSentence: "Night fell swiftly over the hills.",
        category: "vocabulary"
      },
      {
        id: 13,
        question: "Identify the part of speech of 'bravely' in 'declared bravely':",
        options: ["Noun", "Adjective", "Adverb", "Preposition"],
        correctIndex: 2,
        explanation: "'Bravely' describes how he declared (the verb), making it an adverb.",
        clueSentence: "'I will take him,' he declared bravely.",
        category: "grammar"
      },
      {
        id: 14,
        question: "Why couldn't other men in Laldwani village help carry Kunwar?",
        options: ["They were all asleep", "They refused to help Sher Singh", "All the men had gone with the beaters", "They had moved to Kalaghat permanently"],
        correctIndex: 2,
        explanation: "There was no one else strong enough because all the men had gone with the beaters.",
        clueSentence: "There was no one else in the village of Laldwani strong enough to help, as all the men had gone with the beaters.",
        category: "inference"
      },
      {
        id: 15,
        question: "What did the doctor mean by calling Sher Singh 'a brave lion of a boy'?",
        options: ["Sher Singh had the face of a lion", "Sher Singh fought like an animal", "Sher Singh displayed extraordinary courage like a lion", "Sher Singh kept a lion cub as a pet"],
        correctIndex: 2,
        explanation: "It is a metaphor highlighting Sher Singh's fearless courage and valor in saving his brother.",
        clueSentence: "You are truly Sher Singh Bahadur—a brave lion of a boy!",
        category: "inference"
      },
      {
        id: 16,
        question: "Choose the correct past tense form used in the passage for 'hurry':",
        options: ["Hurrys", "Hurried", "Hurrying", "Hurriedly"],
        correctIndex: 1,
        explanation: "The simple past tense of 'hurry' is 'hurried'.",
        clueSentence: "As Sher Singh hurried along the narrow track...",
        category: "grammar"
      },
      {
        id: 17,
        question: "What is the central theme of 'Journey by Night'?",
        options: ["The wildlife and geography of Kalaghat", "The importance of wildlife photography", "Selfless fraternal love and heroic endurance against all odds", "How bullock carts travel across India"],
        correctIndex: 2,
        explanation: "The story celebrates Sher Singh's unconditional love and courage to save his brother.",
        clueSentence: "Sher Singh’s little brother, Kunwar... 'Your brother will live,' the doctor said.",
        category: "theme"
      },
      {
        id: 18,
        question: "Which sensory detail illustrates the extreme cold of the river?",
        options: ["His bare feet bruised on sharp stones", "His teeth chattered, and muscles burned", "The cries of jackals echoed", "The great tusker trumpeted"],
        correctIndex: 1,
        explanation: "'His teeth chattered' is a physical sensory detail showing how freezing the water was.",
        clueSentence: "His teeth chattered, and his muscles burned with exhaustion.",
        category: "inference"
      },
      {
        id: 19,
        question: "Which preposition correctly completes: 'Kunwar lay ___ the hut'?",
        options: ["on", "at", "in", "above"],
        correctIndex: 2,
        explanation: "The passage uses 'in the hut'.",
        clueSentence: "Kunwar, lay in the hut with pain in his stomach...",
        category: "grammar"
      },
      {
        id: 20,
        question: "What joyful news did the doctor deliver at the end?",
        options: ["Sher Singh would get a reward of gold", "Kunwar would survive and live", "Sher Singh's father had arrived with a car", "The village won a championship"],
        correctIndex: 1,
        explanation: "The doctor reassured him with the words: 'Your brother will live.'",
        clueSentence: "'Your brother will live,' the doctor said.",
        category: "factual"
      }
    ]
  },
  {
    id: 'unit2-gift-of-chappals',
    unitNumber: 2,
    title: 'A Gift of Chappals',
    subtitle: 'Mridu, the Secret Kitten & the Kind Hearted Children',
    theme: 'Empathy, Generosity & Childhood Innocence',
    summary: 'Mridu visits her cousins in Madras where they secretly nurse an abandoned kitten, listen to violin music, and spontaneously give away footwear to an impoverished beggar with blistered feet.',
    fullPassage: `A smiling Rukku Manni threw open the door. Ravi and Meena rushed out, and Ravi pulled Mridu into the house. "Wait, let me take off my slippers!" protested Mridu. She set them out neatly near a pair of large black ones, grey with dust. You could see the clear mark of every toe on the front part of each slipper!

Ravi dragged her to the backyard, behind a thick bitter-berry bush. There, inside a torn football lined with sacking and filled with sand, lay a very small kitten, lapping up milk from a coconut half-shell. "We found him outside the gate this morning. He was crying 'Mew! Mew!', poor thing," said Meena. "Patti says she'll leave for Paddu Mama’s house if she knows we have a cat!"

Ravi whispered proudly, "His name is Mahendra-varma Pallava Poonai—M.P. Poonai for short! He is a descendant of the Rishi-Cat of Mahabalipuram." Just then, a weird screeching sound floated from the window. Lalli was learning to play the violin from her music master, whose notes derailing like a train off the tracks made Mridu giggle.

Later that afternoon, a weary beggar arrived at the gate, groaning for alms. His bare feet were covered with large, pink, peeling blisters from walking on the melting tar road in the scorching sun. Seeing his painful condition, Ravi, Meena, and Mridu searched for something to protect his feet. Finding a pair of sturdy old chappals in the verandah, they handed them over to the grateful beggar, who blessed the children and vanished quickly before the elders noticed!`,
    questions: [
      {
        id: 1,
        question: "Who opened the door when Mridu arrived at the house?",
        options: ["Patti", "Rukku Manni", "Meena", "Lalli"],
        correctIndex: 1,
        explanation: "A smiling Rukku Manni opened the door for Mridu.",
        clueSentence: "A smiling Rukku Manni threw open the door.",
        category: "factual"
      },
      {
        id: 2,
        question: "What distinct marks were visible on the large black slippers near the door?",
        options: ["Red mud stains", "The clear mark of every toe", "Dog bite marks", "Golden embroidery stitches"],
        correctIndex: 1,
        explanation: "The passage notes you could see the clear mark of every toe on the front part.",
        clueSentence: "You could see the clear mark of every toe on the front part of each slipper!",
        category: "factual"
      },
      {
        id: 3,
        question: "Where had the children hidden the abandoned kitten?",
        options: ["Inside the kitchen cupboard", "Under Ravi's bed", "Behind a thick bitter-berry bush in the backyard", "On the terrace roof"],
        correctIndex: 2,
        explanation: "The kitten was hidden behind a thick bitter-berry bush in the backyard.",
        clueSentence: "Ravi dragged her to the backyard, behind a thick bitter-berry bush.",
        category: "factual"
      },
      {
        id: 4,
        question: "What makeshift bowl was the kitten drinking milk from?",
        options: ["A cracked ceramic plate", "A coconut half-shell", "A silver spoon", "A plastic bottle cap"],
        correctIndex: 1,
        explanation: "The kitten was lapping up milk from a coconut half-shell inside a torn football.",
        clueSentence: "lapping up milk from a coconut half-shell.",
        category: "factual"
      },
      {
        id: 5,
        question: "What grand historical name did Ravi give to the kitten?",
        options: ["Chola Emperor Rajendra", "Mahendra-varma Pallava Poonai (M.P. Poonai)", "Sher Khan the Great", "Tipu Sultan the Third"],
        correctIndex: 1,
        explanation: "Ravi named him Mahendra-varma Pallava Poonai (M.P. Poonai).",
        clueSentence: "His name is Mahendra-varma Pallava Poonai—M.P. Poonai for short!",
        category: "factual"
      },
      {
        id: 6,
        question: "Why was the kitten kept secret from grandmother Patti?",
        options: ["She was allergic to cat fur", "Patti warned she would leave for Paddu Mama's house if she discovered a cat", "She wanted to sell the kitten at the market", "She preferred pet dogs instead"],
        correctIndex: 1,
        explanation: "Patti threatened to leave for Paddu Mama's house if she knew they had a cat.",
        clueSentence: "Patti says she'll leave for Paddu Mama’s house if she knows we have a cat!",
        category: "inference"
      },
      {
        id: 7,
        question: "What musical instrument was Lalli attempting to play?",
        options: ["Flute", "Veena", "Violin", "Harmonium"],
        correctIndex: 2,
        explanation: "Lalli was learning to play the violin from her music master.",
        clueSentence: "Lalli was learning to play the violin from her music master...",
        category: "factual"
      },
      {
        id: 8,
        question: "How did the author describe Lalli's discordant violin playing?",
        options: ["Like sweet birds singing at dawn", "Like thunder crashing in the valley", "Like a train derailing off the tracks", "Like ocean waves roaring"],
        correctIndex: 2,
        explanation: "Her music was compared to train wheels derailing off tracks.",
        clueSentence: "whose notes derailing like a train off the tracks made Mridu giggle.",
        category: "inference"
      },
      {
        id: 9,
        question: "What physical injury did the beggar have on his feet?",
        options: ["Deep cuts from thorns", "Large, pink, peeling blisters from hot melting tar", "A swollen ankle", "Frostbite from winter winds"],
        correctIndex: 1,
        explanation: "His bare feet had large, pink, peeling blisters caused by the scorching road.",
        clueSentence: "His bare feet were covered with large, pink, peeling blisters from walking on the melting tar road...",
        category: "factual"
      },
      {
        id: 10,
        question: "What meaning does the word 'alms' convey in this passage?",
        options: ["Musical notes", "Charitable gifts or food given to the poor", "Old leather shoes", "Garden plants"],
        correctIndex: 1,
        explanation: "Alms means money, food, or charity donated to destitute individuals.",
        clueSentence: "groaning for alms.",
        category: "vocabulary"
      },
      {
        id: 11,
        question: "What did the children do to help the barefoot beggar?",
        options: ["Gave him a glass of coconut milk", "Gave him a pair of sturdy chappals from the verandah", "Bought him a new bicycle", "Told him to go away"],
        correctIndex: 1,
        explanation: "They generously gave him sturdy old chappals found in the verandah.",
        clueSentence: "Finding a pair of sturdy old chappals in the verandah, they handed them over to the grateful beggar...",
        category: "factual"
      },
      {
        id: 12,
        question: "What is the synonym of 'scorching' in 'scorching sun'?",
        options: ["Blistering / Blazing hot", "Pleasantly warm", "Chilly", "Cloudy"],
        correctIndex: 0,
        explanation: "'Scorching' means intensely hot or blistering.",
        clueSentence: "...melting tar road in the scorching sun.",
        category: "vocabulary"
      },
      {
        id: 13,
        question: "Find the opposite (antonym) of 'grateful':",
        options: ["Thankful", "Ungrateful", "Generous", "Polite"],
        correctIndex: 1,
        explanation: "The antonym of 'grateful' is 'ungrateful'.",
        clueSentence: "...handed them over to the grateful beggar...",
        category: "vocabulary"
      },
      {
        id: 14,
        question: "Which adjective in the text describes the bush in the backyard?",
        options: ["Sweet-rose", "Bitter-berry", "Thorny-cactus", "Green-jasmine"],
        correctIndex: 1,
        explanation: "The text specifies a 'thick bitter-berry bush'.",
        clueSentence: "Ravi dragged her to the backyard, behind a thick bitter-berry bush.",
        category: "factual"
      },
      {
        id: 15,
        question: "What does the children's deed of giving away the chappals demonstrate?",
        options: ["Carelessness about property", "Pure empathy and natural kindness for the suffering", "Fear of the music teacher", "Disobedience without any reason"],
        correctIndex: 1,
        explanation: "It showcases pure childhood empathy and genuine compassion for someone in agony.",
        clueSentence: "Seeing his painful condition, Ravi, Meena, and Mridu searched for something to protect his feet.",
        category: "theme"
      },
      {
        id: 16,
        question: "Identify the correct plural form of 'chappal' used in English:",
        options: ["Chappals", "Chappales", "Chappalies", "Chappal"],
        correctIndex: 0,
        explanation: "'Chappals' is the standard plural form.",
        clueSentence: "Finding a pair of sturdy old chappals...",
        category: "grammar"
      },
      {
        id: 17,
        question: "Which punctuation mark is used after 'Mew! Mew!' in the passage?",
        options: ["Comma", "Exclamation mark", "Question mark", "Semicolon"],
        correctIndex: 1,
        explanation: "Exclamation marks emphasize the kitten's pathetic crying sound.",
        clueSentence: "He was crying 'Mew! Mew!', poor thing...",
        category: "grammar"
      },
      {
        id: 18,
        question: "What tone is created when Ravi speaks of the kitten's royal lineage?",
        options: ["Tragic and gloomy", "Humorous, imaginative, and boastful", "Angry and violent", "Scientific and factual"],
        correctIndex: 1,
        explanation: "Ravi humorously invents a grand mythical story connecting his stray kitten to ancient Pallava kings.",
        clueSentence: "He is a descendant of the Rishi-Cat of Mahabalipuram.",
        category: "inference"
      },
      {
        id: 19,
        question: "Complete the sentence with the correct tense: 'The beggar ___ quickly.'",
        options: ["vanish", "vanished", "has vanishing", "will vanishing"],
        correctIndex: 1,
        explanation: "The past tense form 'vanished' is used in the text.",
        clueSentence: "blessed the children and vanished quickly before the elders noticed!",
        category: "grammar"
      },
      {
        id: 20,
        question: "Why did the beggar vanish quickly after receiving the slippers?",
        options: ["He was scared of the kitten", "He wanted to leave before the adults caught him with the footwear", "He had an appointment at the music hall", "He forgot his begging bowl"],
        correctIndex: 1,
        explanation: "He hurried away before any elder could question or reclaim the chappals.",
        clueSentence: "...and vanished quickly before the elders noticed!",
        category: "inference"
      }
    ]
  },
  {
    id: 'unit3-gopal-hilsa-fish',
    unitNumber: 3,
    title: 'Gopal and the Hilsa Fish',
    subtitle: 'The Witty Courtier\'s Greatest Challenge',
    theme: 'Wit, Clever Psychology & Diverting Attention',
    summary: 'When the entire kingdom can talk of nothing but Hilsa fish, the king challenges witty Gopal to bring a fish to court without anyone mentioning it. Gopal accomplishes this through ingenious self-ridicule.',
    fullPassage: `It was the season for Hilsa fish, and fishermen could think of nothing else. In the market, fishmongers sold nothing but Hilsa: "Come, buy! The price of Hilsa is down today!" Even householders could talk of nothing else: "How much did you pay for that Hilsa?" Even courtiers in the royal palace discussed only fish.

The King finally lost his temper. "Stop it!" he thundered. "Are you a courtier or a fisherman? Not even Gopal can keep anyone from talking about Hilsa fish—not even for five minutes!"

Gopal smiled respectfully. "I think I could, Your Majesty." The King issued his challenge: "Buy a huge Hilsa and bring it to the palace without anyone asking you a single word about it." Gopal accepted at once.

A few days later, Gopal shaved half his face, smeared his body with charcoal and ash, and put on filthy, ragged clothes. His wife cried in shock, "Why are you looking like a lunatic?" Gopal replied calmly, "I am dressing up to buy a Hilsa fish."

At the bazaar, Gopal bought a colossal Hilsa fish and began walking toward the palace. A child cried, "Mother, look at that comic man!" A tradesman said, "He must be a madman!" Another whispered, "Hush, he is a mystic in disguise!" Everyone stared at Gopal’s comical face, rags, and smear of ash—nobody looked at the fish in his hands.

When Gopal arrived before the throne, the King asked in amusement, "Why are you dressed in this ridiculous fashion?" Only then did the King realize that throughout the entire journey, not a single soul had uttered the word 'Hilsa'! The King burst into laughter and congratulated Gopal on achieving the impossible yet again!`,
    questions: [
      {
        id: 1,
        question: "Which fish was everyone obsessed with during that particular season?",
        options: ["Salmon", "Hilsa fish", "Rohu fish", "Tuna"],
        correctIndex: 1,
        explanation: "The entire kingdom was talking exclusively about the season's Hilsa fish.",
        clueSentence: "It was the season for Hilsa fish, and fishermen could think of nothing else.",
        category: "factual"
      },
      {
        id: 2,
        question: "Why did the King lose his temper in the royal court?",
        options: ["The ministers stole his crown", "The courtiers would talk about nothing except Hilsa fish", "The palace ran out of food", "The enemy kingdom declared war"],
        correctIndex: 1,
        explanation: "The King was annoyed because even his courtiers discussed only Hilsa fish.",
        clueSentence: "Even courtiers in the royal palace discussed only fish. The King finally lost his temper.",
        category: "factual"
      },
      {
        id: 3,
        question: "What challenge did the King pose to Gopal?",
        options: ["To catch twenty Hilsa fish in one net", "To buy a huge Hilsa and bring it to the palace without anyone asking about it", "To cook the most delicious fish dish for the queen", "To stop fishermen from fishing in the river"],
        correctIndex: 1,
        explanation: "The King challenged Gopal to bring a huge Hilsa without anyone asking a word about it.",
        clueSentence: "Buy a huge Hilsa and bring it to the palace without anyone asking you a single word about it.",
        category: "factual"
      },
      {
        id: 4,
        question: "What bizarre disguise did Gopal adopt before buying the fish?",
        options: ["He dressed as a king in gold robes", "He shaved half his face, smeared ash and charcoal, and wore torn rags", "He wore a soldier's heavy armor", "He painted his face like a tiger"],
        correctIndex: 1,
        explanation: "He half-shaved, smeared ash on himself, and put on dirty rags to appear like a lunatic.",
        clueSentence: "Gopal shaved half his face, smeared his body with charcoal and ash, and put on filthy, ragged clothes.",
        category: "factual"
      },
      {
        id: 5,
        question: "What did Gopal's wife think when she saw his eccentric appearance?",
        options: ["She thought he was going to a wedding", "She thought he looked like a lunatic / madman", "She thought he looked handsome", "She thought he was acting in a drama"],
        correctIndex: 1,
        explanation: "His wife was horrified and asked why he was looking like a lunatic.",
        clueSentence: "His wife cried in shock, 'Why are you looking like a lunatic?'",
        category: "inference"
      },
      {
        id: 6,
        question: "What does the word 'colossal' mean in 'colossal Hilsa fish'?",
        options: ["Extremely tiny", "Extremely large or gigantic", "Dead and dried", "Poisonous"],
        correctIndex: 1,
        explanation: "'Colossal' means immensely large or huge in size.",
        clueSentence: "At the bazaar, Gopal bought a colossal Hilsa fish...",
        category: "vocabulary"
      },
      {
        id: 7,
        question: "What were the people in the bazaar focusing on instead of the fish?",
        options: ["On the weather", "On Gopal's comical, ragged, and ash-smeared appearance", "On the price of vegetables", "On the palace guards"],
        correctIndex: 1,
        explanation: "Gopal's eccentric appearance completely diverted attention away from the huge fish.",
        clueSentence: "Everyone stared at Gopal’s comical face, rags, and smear of ash—nobody looked at the fish in his hands.",
        category: "inference"
      },
      {
        id: 8,
        question: "What did the child in the market call Gopal?",
        options: ["A royal courtier", "A comic man", "A dangerous ghost", "A fish merchant"],
        correctIndex: 1,
        explanation: "A child exclaimed to his mother: 'Mother, look at that comic man!'",
        clueSentence: "A child cried, 'Mother, look at that comic man!'",
        category: "factual"
      },
      {
        id: 9,
        question: "What did the tradesman think Gopal was?",
        options: ["A wise teacher", "A rich traveler", "A madman", "The prime minister"],
        correctIndex: 2,
        explanation: "A tradesman said, 'He must be a madman!'",
        clueSentence: "A tradesman said, 'He must be a madman!'",
        category: "factual"
      },
      {
        id: 10,
        question: "What did the King ask when Gopal reached the throne?",
        options: ["'How much did the Hilsa cost?'", "'Why are you dressed in this ridiculous fashion?'", "'Where have you been all day?'", "'Did you bring the fish?'"],
        correctIndex: 1,
        explanation: "Even the King failed to mention the fish first and asked why he wore ridiculous clothes.",
        clueSentence: "When Gopal arrived before the throne, the King asked in amusement, 'Why are you dressed in this ridiculous fashion?'",
        category: "factual"
      },
      {
        id: 11,
        question: "What was Gopal's secret strategy to win the challenge?",
        options: ["Hiding the fish inside a wooden trunk", "Diverting human attention by creating a greater spectacle of himself", "Buying the fish late at night when the market was empty", "Bribing everyone on the street to stay quiet"],
        correctIndex: 1,
        explanation: "Gopal brilliantly used human psychology: people talk about what shocks their senses most.",
        clueSentence: "nobody looked at the fish in his hands... not a single soul had uttered the word 'Hilsa'!",
        category: "inference"
      },
      {
        id: 12,
        question: "Find the antonym of 'ridiculous':",
        options: ["Absurd", "Sensible / Reasonable", "Comical", "Foolish"],
        correctIndex: 1,
        explanation: "The antonym of 'ridiculous' (foolish/laughable) is 'sensible' or 'reasonable'.",
        clueSentence: "...dressed in this ridiculous fashion...",
        category: "vocabulary"
      },
      {
        id: 13,
        question: "Identify the tense in: 'Gopal accepted at once.'",
        options: ["Simple Present", "Simple Past", "Present Continuous", "Future Perfect"],
        correctIndex: 1,
        explanation: "'Accepted' is in the simple past tense.",
        clueSentence: "Gopal accepted at once.",
        category: "grammar"
      },
      {
        id: 14,
        question: "Which figure of speech is demonstrated when the King calls Gopal 'courtier or fisherman'?",
        options: ["Simile", "Irony / Sarcasm", "Personification", "Hyperbole"],
        correctIndex: 1,
        explanation: "The King uses sarcastic frustration to mock courtiers talking like fishmongers.",
        clueSentence: "'Are you a courtier or a fisherman?'",
        category: "grammar"
      },
      {
        id: 15,
        question: "What was the King's reaction when he realized Gopal had won?",
        options: ["He got furious and punished him", "He burst into laughter and congratulated him", "He refused to pay Gopal", "He banned all fish in the kingdom"],
        correctIndex: 1,
        explanation: "The King was delighted by Gopal's wit, laughed, and praised him.",
        clueSentence: "The King burst into laughter and congratulated Gopal on achieving the impossible yet again!",
        category: "factual"
      },
      {
        id: 16,
        question: "Give the noun form of the verb 'congratulated':",
        options: ["Congratulatory", "Congratulation", "Congratulate", "Congratulator"],
        correctIndex: 1,
        explanation: "'Congratulation' is the noun form.",
        clueSentence: "...congratulated Gopal on achieving the impossible...",
        category: "grammar"
      },
      {
        id: 17,
        question: "What quality makes Gopal a famous folk hero?",
        options: ["Physical strength and wrestling skill", "Sharp intellect, humor, and witty resourcefulness", "Cruelty to enemies", "Wealth and land ownership"],
        correctIndex: 1,
        explanation: "Gopal is renowned in folklore for his quick wit and philosophical humor.",
        clueSentence: "Gopal smiled respectfully... achieving the impossible yet again!",
        category: "theme"
      },
      {
        id: 18,
        question: "Which word in the text means 'dirty and torn' clothes?",
        options: ["Colossal", "Filthy, ragged", "Mystic", "Respectful"],
        correctIndex: 1,
        explanation: "'Filthy, ragged' describes clothes that are dirty and shredded.",
        clueSentence: "...put on filthy, ragged clothes.",
        category: "vocabulary"
      },
      {
        id: 19,
        question: "Which whisper showed that someone thought Gopal was a holy man?",
        options: ["'He is a great fishmonger!'", "'He must be a thief!'", "'Hush, he is a mystic in disguise!'", "'Look at his gold necklace!'"],
        correctIndex: 2,
        explanation: "One bystander thought his ascetic ash-smeared look indicated a mystic.",
        clueSentence: "Another whispered, 'Hush, he is a mystic in disguise!'",
        category: "inference"
      },
      {
        id: 20,
        question: "What lesson can students learn from this chapter?",
        options: ["One should never go to the fish market", "Problems can be solved smartly by understanding human behavior and thinking creatively", "Ash is good for the skin", "Kings should never get angry"],
        correctIndex: 1,
        explanation: "Creative thinking and understanding human psychology can achieve what sheer force cannot.",
        clueSentence: "...congratulated Gopal on achieving the impossible yet again!",
        category: "theme"
      }
    ]
  },
  {
    id: 'unit4-ashes-trees-bloom',
    unitNumber: 4,
    title: 'The Ashes That Made Trees Bloom',
    subtitle: 'The Good Old Couple & the Magical Cherry Blossoms',
    theme: 'Kindness Rewarded, Greed Punished & Nature',
    summary: 'A kind elderly Japanese couple loved their pet dog Muko. When greedy neighbors cruelly harmed the dog, its spirit continued to guide the couple, culminating in ashes that brought dead cherry trees into magnificent bloom.',
    fullPassage: `In the good old days of the daimios, there lived an honest old couple whose only pet was a little dog named Muko. Having no children, they loved it as though it were a human baby. The old woman made it a cushion of blue crepe, and at mealtimes Muko would sit on it as snug as any cat. The kind old man fed the dog boiled rice with his own chopsticks and tidbits of fish.

One day, Muko ran ahead of the old farmer into the field, barking and scratching at the earth. Thinking it might be a buried bone or bit of fish, the old man struck his hoe into the soft ground. Lo and behold! A gleaming pile of gold coins glittered before him! In an hour the honest couple became rich, but they remained humble, bought a piece of land, and gave generously to their poor neighbors.

Now in the adjacent cottage lived an envious, wicked old man and woman. Hearing of the fortune, they dragged Muko into their garden and offered him tasty food, hoping he would find them gold. When the terrified dog refused, the wicked man beat Muko cruelly and struck him with a spade, killing the innocent pet.

Grieving deeply, the kind farmer buried his beloved dog under a pine tree. That night, Muko appeared in the farmer's dream, instructing him to cut down the pine tree, make a mortar for rice-dough and a hand-mill for bean sauce. When the good couple used them, every grain turned into yellow gold!

The envious neighbor tried the same mill, but it produced only foul worms. In fury, they chopped the mill into firewood. Muko's spirit returned in another dream, telling the good farmer to sprinkle the ashes of the burnt mill on withered cherry trees. When the great Daimio lord rode by in his procession, the farmer sprinkled a pinch of ash—instantly, the barren cherry tree burst into pink fragrant blossoms! The delighted Daimio showered the honest farmer with silk robes, cakes, and honor, while the wicked neighbor was driven away in disgrace!`,
    questions: [
      {
        id: 1,
        question: "What was the name of the kind old couple's pet dog?",
        options: ["Kuro", "Muko", "Shiro", "Hachi"],
        correctIndex: 1,
        explanation: "The dog was named Muko.",
        clueSentence: "...whose only pet was a little dog named Muko.",
        category: "factual"
      },
      {
        id: 2,
        question: "How did the kind old couple treat their pet dog?",
        options: ["They tied him outside in the barn", "They loved him like their own baby, gave him a blue crepe cushion, and fed him fish", "They made him pull heavy carts", "They ignored him unless he hunted foxes"],
        correctIndex: 1,
        explanation: "Having no children, they loved Muko as though it were a human baby.",
        clueSentence: "Having no children, they loved it as though it were a human baby. The old woman made it a cushion of blue crepe...",
        category: "factual"
      },
      {
        id: 3,
        question: "What treasure did Muko help the honest farmer discover in the field?",
        options: ["Ancient samurai swords", "A chest of pearls", "A gleaming pile of gold coins", "A hidden spring of sweet water"],
        correctIndex: 2,
        explanation: "When the farmer struck his hoe, a pile of gold coins glittered.",
        clueSentence: "Lo and behold! A gleaming pile of gold coins glittered before him!",
        category: "factual"
      },
      {
        id: 4,
        question: "How did the honest couple use their newfound wealth?",
        options: ["They gambled it in the capital city", "They bought land and gave generously to their poor neighbors", "They built a giant fortress to keep neighbors out", "They stopped speaking to everyone"],
        correctIndex: 1,
        explanation: "They remained humble, bought land, and shared generously with poor neighbors.",
        clueSentence: "...bought a piece of land, and gave generously to their poor neighbors.",
        category: "inference"
      },
      {
        id: 5,
        question: "Why did the wicked neighbors drag Muko into their garden?",
        options: ["To play fetch with a ball", "To force the dog to find buried treasure for them", "To give the dog a warm bath", "To return him to the forest"],
        correctIndex: 1,
        explanation: "They were greedy and wanted Muko to point out buried gold for them.",
        clueSentence: "...dragged Muko into their garden and offered him tasty food, hoping he would find them gold.",
        category: "factual"
      },
      {
        id: 6,
        question: "What happened when the greedy neighbors used the wooden mortar and hand-mill?",
        options: ["It turned into diamonds", "It produced only a foul, squirming mass of worms", "It caught fire instantly", "It baked delicious cakes"],
        correctIndex: 1,
        explanation: "Instead of gold, their greedy intentions resulted in foul worms.",
        clueSentence: "The envious neighbor tried the same mill, but it produced only foul worms.",
        category: "factual"
      },
      {
        id: 7,
        question: "What miracle occurred when the good farmer sprinkled the mill's ashes on withered cherry trees?",
        options: ["The trees turned into solid gold", "The barren trees burst into pink fragrant cherry blossoms", "The trees grew giant golden apples", "The trees floated into the clouds"],
        correctIndex: 1,
        explanation: "A pinch of ash caused the withered winter trees to bloom into glorious pink flowers.",
        clueSentence: "instantly, the barren cherry tree burst into pink fragrant blossoms!",
        category: "factual"
      },
      {
        id: 8,
        question: "Who was the 'Daimio' mentioned in the story?",
        options: ["A wealthy Japanese feudal lord", "A poor wandering monk", "The village schoolmaster", "The head of the merchant guild"],
        correctIndex: 0,
        explanation: "In historical Japan, a Daimio was a powerful feudal lord or nobleman.",
        clueSentence: "When the great Daimio lord rode by in his procession...",
        category: "vocabulary"
      },
      {
        id: 9,
        question: "What does the word 'withered' mean in 'withered cherry trees'?",
        options: ["Fresh and blooming", "Dried up, bare, or lifeless", "Tall and leafy", "Covered with green fruits"],
        correctIndex: 1,
        explanation: "'Withered' means dried, shriveled, or devoid of leaves.",
        clueSentence: "sprinkle the ashes of the burnt mill on withered cherry trees.",
        category: "vocabulary"
      },
      {
        id: 10,
        question: "Find the antonym of 'envious':",
        options: ["Jealous", "Content / Benevolent", "Greedy", "Bitter"],
        correctIndex: 1,
        explanation: "The opposite of 'envious' (resentful/jealous) is 'content' or 'benevolent'.",
        clueSentence: "Now in the adjacent cottage lived an envious, wicked old man...",
        category: "vocabulary"
      },
      {
        id: 11,
        question: "How did the Daimio reward the good old farmer?",
        options: ["Gave him silk robes, rich cakes, and honored him", "Made him a general in his army", "Gave him a castle in Kyoto", "Named a river after him"],
        correctIndex: 0,
        explanation: "The delighted lord showered him with silk robes, cakes, and royal gifts.",
        clueSentence: "The delighted Daimio showered the honest farmer with silk robes, cakes, and honor...",
        category: "factual"
      },
      {
        id: 12,
        question: "What tool did the farmer use to dig the soil where Muko barked?",
        options: ["A tractor", "A hoe", "A golden spoon", "A wooden stick"],
        correctIndex: 1,
        explanation: "The farmer struck his hoe into the soft ground.",
        clueSentence: "...the old man struck his hoe into the soft ground.",
        category: "factual"
      },
      {
        id: 13,
        question: "Identify the conjunction in: 'rich, but they remained humble':",
        options: ["rich", "but", "they", "humble"],
        correctIndex: 1,
        explanation: "'But' is a coordinating conjunction linking two contrasting clauses.",
        clueSentence: "In an hour the honest couple became rich, but they remained humble...",
        category: "grammar"
      },
      {
        id: 14,
        question: "What happened to the wicked neighbor when he tried to imitate the farmer in front of the Daimio?",
        options: ["He got double the rewards", "He was driven away in disgrace and punished", "He was crowned the new Daimio", "He was forgiven and given land"],
        correctIndex: 1,
        explanation: "The wicked neighbor failed and was driven away in disgrace.",
        clueSentence: "...while the wicked neighbor was driven away in disgrace!",
        category: "inference"
      },
      {
        id: 15,
        question: "What is the primary moral message of this Japanese folktale?",
        options: ["Dogs should always dig for gold", "Kindness, humility, and honesty bring true blessings, while greed and cruelty lead to ruin", "Ashes can replace garden fertilizer", "Old people should buy silk robes"],
        correctIndex: 1,
        explanation: "Virtue and love are rewarded, while jealousy and malice bring disgrace.",
        clueSentence: "The delighted Daimio showered the honest farmer with silk robes... while the wicked neighbor was driven away in disgrace!",
        category: "theme"
      },
      {
        id: 16,
        question: "Choose the correct spelling:",
        options: ["Prosession", "Procesion", "Procession", "Proceshion"],
        correctIndex: 2,
        explanation: "'Procession' is the correct spelling.",
        clueSentence: "When the great Daimio lord rode by in his procession...",
        category: "grammar"
      },
      {
        id: 17,
        question: "In what country is this story set?",
        options: ["India", "China", "Japan", "Korea"],
        correctIndex: 2,
        explanation: "Terms like 'daimio', 'crepe', 'chopsticks', and cherry blossoms indicate historical Japan.",
        clueSentence: "In the good old days of the daimios...",
        category: "inference"
      },
      {
        id: 18,
        question: "What material was the little dog's cushion made of?",
        options: ["Red velvet", "Blue crepe", "Golden leather", "White cotton wool"],
        correctIndex: 1,
        explanation: "The old woman made Muko a cushion of blue crepe.",
        clueSentence: "The old woman made it a cushion of blue crepe...",
        category: "factual"
      },
      {
        id: 19,
        question: "Which word best describes the character of the dog Muko?",
        options: ["Fierce and aggressive", "Loyal, loving, and gentle", "Disobedient and lazy", "Cunning and sly"],
        correctIndex: 1,
        explanation: "Muko was a faithful, gentle pet whose spirit protected his caring masters even after death.",
        clueSentence: "Having no children, they loved it as though it were a human baby... Muko's spirit returned...",
        category: "theme"
      },
      {
        id: 20,
        question: "What part of speech is 'fragrant' in 'fragrant blossoms'?",
        options: ["Adjective", "Noun", "Verb", "Pronoun"],
        correctIndex: 0,
        explanation: "'Fragrant' describes the noun 'blossoms', making it an adjective.",
        clueSentence: "burst into pink fragrant blossoms!",
        category: "grammar"
      }
    ]
  },
  {
    id: 'unit5-quality',
    unitNumber: 5,
    title: 'Quality',
    subtitle: 'The Gessler Brothers & The Art of Bootmaking',
    theme: 'Artisanship, Integrity vs Commercial Greed',
    summary: 'John Galsworthy\'s poignant story of Mr. Gessler, a dedicated German bootmaker in London who refused to compromise on craftsmanship or materials despite starvation and the pressure of mass-producing big firms.',
    fullPassage: `I knew him from the days of my extreme youth, because he made my father’s boots; inhabiting with his elder brother two little shops let into one in a small by-street in the West End of London. The shop had a certain quiet distinction; there was no sign upon its face other than the name of Gessler Brothers; and in the window a few pairs of boots. He made only what was ordered, reaching that highest level of craft where boots fitted miraculously, lasted terribly long, and smelled richly of the finest leather.

Mr. Gessler was a little as if made from leather himself: his face yellowish-crinkled, with reddish hair and beard, and neat crinkly creases down his cheeks. He spoke with a guttural German accent: "Id is an ardt!" he would say when asked about the mysterious perfection of his boots. He took the measure of your foot with intense reverence, tracing on paper and feeling the bone structure with reverent fingers.

Years passed, and big advertisements began crowding out small craftsmen. One day I entered his shop and noticed how tired and hollow-cheeked he looked. "Those big firms have no self-respect," he sighed sadly. "Dey get id all by adverdisement, nod by work. Dey take id away from us, who lof our boods."

Even as poverty pressed harder and his elder brother died of heartbreak, Mr. Gessler never used cheaper leather or rushed a single stitch. He worked through the night, using only the finest Russian leather. Months later, when I returned to London and visited the familiar shop, a young English clerk stood behind the counter. "Mr. Gessler died last week, sir," the young man said gently. "Slow starvation, the doctor called it. He never gave himself time to eat; never had a penny in the house. All went into leather and rent. But he made good boots—the best boots in London!"`,
    questions: [
      {
        id: 1,
        question: "What trade were the Gessler brothers famous for?",
        options: ["Tailoring woolen suits", "Watchmaking and clock repair", "Crafting high-quality bespoke leather boots", "Carpentry and wooden furniture"],
        correctIndex: 2,
        explanation: "Mr. Gessler and his brother were master makers of boots.",
        clueSentence: "He made only what was ordered... boots fitted miraculously, lasted terribly long...",
        category: "factual"
      },
      {
        id: 2,
        question: "Where was Mr. Gessler's shop located?",
        options: ["In a noisy railway station in Paris", "In a small by-street in the West End of London", "On the waterfront of Hamburg", "Near the royal palace of Edinburgh"],
        correctIndex: 1,
        explanation: "The shop was located in a small by-street in London's West End.",
        clueSentence: "...in a small by-street in the West End of London.",
        category: "factual"
      },
      {
        id: 3,
        question: "What was displayed in the window of the Gessler Brothers' shop?",
        options: ["Hundreds of brightly colored sandals", "A few pairs of finely crafted boots", "Advertising posters with glowing neon lights", "Rows of imported machinery"],
        correctIndex: 1,
        explanation: "There were no flashy advertisements, only a few pairs of boots in the window.",
        clueSentence: "...and in the window a few pairs of boots.",
        category: "factual"
      },
      {
        id: 4,
        question: "What famous sentence did Mr. Gessler utter when asked about bootmaking?",
        options: ["'Money is everything!'", "'Id is an ardt!' (It is an art!)", "'Speed is our motto!'", "'Advertising wins the market!'"],
        correctIndex: 1,
        explanation: "Mr. Gessler deeply regarded bootmaking as an art form.",
        clueSentence: "'Id is an ardt!' he would say when asked about the mysterious perfection of his boots.",
        category: "factual"
      },
      {
        id: 5,
        question: "What kind of leather did Mr. Gessler insist on using?",
        options: ["Cheap synthetic plastic", "The finest genuine Russian leather", "Cardboard pressed with glue", "Pigskin coated with varnish"],
        correctIndex: 1,
        explanation: "He always insisted on using only the finest genuine Russian leather.",
        clueSentence: "He worked through the night, using only the finest Russian leather.",
        category: "factual"
      },
      {
        id: 6,
        question: "According to Mr. Gessler, how did big commercial firms attract customers?",
        options: ["By producing superior quality than him", "By heavy advertisement, not by genuine craftsmanship", "By treating customers with personal kindness", "By teaching young apprentices for free"],
        correctIndex: 1,
        explanation: "He pointed out that big corporations relied on marketing rather than real artistry.",
        clueSentence: "'Dey get id all by adverdisement, nod by work. Dey take id away from us, who lof our boods.'",
        category: "inference"
      },
      {
        id: 7,
        question: "What was the medical cause of Mr. Gessler's tragic death?",
        options: ["A tropical fever", "Slow starvation because he spent all his money on rent and fine leather", "A horse carriage accident", "Drowning in the Thames river"],
        correctIndex: 1,
        explanation: "The young clerk revealed that the doctor diagnosed slow starvation.",
        clueSentence: "'Slow starvation, the doctor called it. He never gave himself time to eat; never had a penny in the house.'",
        category: "factual"
      },
      {
        id: 8,
        question: "What happened to the money Mr. Gessler earned from boot orders?",
        options: ["He hid it in a Swiss bank", "All went into rent and the finest leather", "He bought luxury carriages", "He invested in the stock exchange"],
        correctIndex: 1,
        explanation: "Every penny he made went into high rent and premium materials.",
        clueSentence: "All went into leather and rent. But he made good boots—the best boots in London!",
        category: "factual"
      },
      {
        id: 9,
        question: "What tribute did the young English clerk pay to Mr. Gessler at the end?",
        options: ["'He was a foolish businessman.'", "'He made good boots—the best boots in London!'", "'He should have moved to Manchester.'", "'His boots were out of fashion.'"],
        correctIndex: 1,
        explanation: "Even his competitor acknowledged that Mr. Gessler made the finest boots in London.",
        clueSentence: "'But he made good boots—the best boots in London!'",
        category: "factual"
      },
      {
        id: 10,
        question: "What does the word 'distinction' mean in 'a certain quiet distinction'?",
        options: ["Extreme loudness", "A characteristic of dignity, uniqueness, and high quality", "A huge discount", "A state of decay"],
        correctIndex: 1,
        explanation: "'Distinction' here refers to refined excellence and dignified character.",
        clueSentence: "The shop had a certain quiet distinction...",
        category: "vocabulary"
      },
      {
        id: 11,
        question: "Find the antonym of 'reverence' in 'intense reverence':",
        options: ["Respect", "Disrespect / Contempt", "Honor", "Admiration"],
        correctIndex: 1,
        explanation: "'Disrespect' or 'contempt' is the opposite of 'reverence'.",
        clueSentence: "He took the measure of your foot with intense reverence...",
        category: "vocabulary"
      },
      {
        id: 12,
        question: "Why did Mr. Gessler's boots fit 'miraculously'?",
        options: ["He used magical spells", "He took exact anatomical measurements and crafted each pair by hand with dedication", "He bought them from Italy", "He made only one standard size"],
        correctIndex: 1,
        explanation: "His boots fit perfectly due to his painstaking precision and personal touch.",
        clueSentence: "tracing on paper and feeling the bone structure with reverent fingers.",
        category: "inference"
      },
      {
        id: 13,
        question: "Identify the author of the classic story 'Quality':",
        options: ["Charles Dickens", "John Galsworthy", "Roald Dahl", "Ruskin Bond"],
        correctIndex: 1,
        explanation: "'Quality' is one of the most famous short stories by Nobel Laureate John Galsworthy.",
        clueSentence: "John Galsworthy's poignant story of Mr. Gessler...",
        category: "factual"
      },
      {
        id: 14,
        question: "What grammatical voice is used in: 'He made only what was ordered'?",
        options: ["Active voice in first clause, passive voice in second clause", "Passive voice throughout", "Imperative voice", "Subjunctive mood"],
        correctIndex: 0,
        explanation: "'He made' is active voice; 'what was ordered' is passive voice.",
        clueSentence: "He made only what was ordered...",
        category: "grammar"
      },
      {
        id: 15,
        question: "What poignant conflict does this story portray?",
        options: ["A war between two European kingdoms", "The battle between traditional craftsmanship/integrity and ruthless commercial mass production", "A dispute between a landlord and a tenant", "A family dispute over inheritance"],
        correctIndex: 1,
        explanation: "The central tragedy is how ruthless commercial advertising crushed honest master craftsmen.",
        clueSentence: "'Those big firms have no self-respect... Dey get id all by adverdisement, nod by work.'",
        category: "theme"
      },
      {
        id: 16,
        question: "Which sensory adjective describes Mr. Gessler's face?",
        options: ["Smooth and pale", "Yellowish-crinkled with reddish hair", "Dark and bearded", "Round and smiling"],
        correctIndex: 1,
        explanation: "The author describes him as yellowish-crinkled, resembling the leather he worked with.",
        clueSentence: "his face yellowish-crinkled, with reddish hair and beard...",
        category: "factual"
      },
      {
        id: 17,
        question: "What does 'bespoke' mean when describing footwear?",
        options: ["Second-hand used boots", "Custom-made to an individual customer's exact measurements", "Mass-manufactured in factories", "Made of wooden planks"],
        correctIndex: 1,
        explanation: "'Bespoke' means custom tailored to a specific client's order.",
        clueSentence: "He made only what was ordered...",
        category: "vocabulary"
      },
      {
        id: 18,
        question: "What is the comparative degree of 'good'?",
        options: ["Gooder", "Better", "Best", "More good"],
        correctIndex: 1,
        explanation: "The degrees of comparison are: good (positive), better (comparative), best (superlative).",
        clueSentence: "...the best boots in London!",
        category: "grammar"
      },
      {
        id: 19,
        question: "How did Mr. Gessler feel towards the boots he created?",
        options: ["He hated them and wanted to quit", "He treated them with fatherly affection and artistic devotion", "He viewed them merely as quick cash", "He thought they were ordinary"],
        correctIndex: 1,
        explanation: "He had profound love and respect for his work: 'who lof our boods'.",
        clueSentence: "'Dey take id away from us, who lof our boods.'",
        category: "inference"
      },
      {
        id: 20,
        question: "What feeling does the ending of 'Quality' evoke in the reader?",
        options: ["Celebration and excitement", "Deep sympathy, respect, and melancholy for a fallen true artist", "Fear and panic", "Humor and comedy"],
        correctIndex: 1,
        explanation: "The ending leaves the reader with deep pathos and admiration for Mr. Gessler's uncompromising devotion.",
        clueSentence: "'All went into leather and rent. But he made good boots—the best boots in London!'",
        category: "theme"
      }
    ]
  },
  {
    id: 'unit6-invention-vita-wonk',
    unitNumber: 6,
    title: 'The Invention of Vita-Wonk',
    subtitle: 'Willy Wonka\'s Quest for the Oldest Living Things',
    theme: 'Imagination, Curiosity & Science Fiction',
    summary: 'Mr. Willy Wonka seeks to reverse the effect of Wonka-Vite, which made people too young. He travels across the globe to gather extracts from the oldest living trees, plants, and ancient creatures to brew Vita-Wonk.',
    fullPassage: `Mr. Willy Wonka said, "Wonka-Vite made people too young! One person actually became minus eighty-seven, which meant he had to wait eighty-seven years before he could be born! So I must find a new recipe to make people grow older!"

"What is the oldest living thing in the world?" asked Charlie.
"A tree," said Mr. Wonka. "Not the Douglas fir, nor the oak, nor the cedar! It is the Bristlecone pine that grows upon the slopes of Wheeler Peak in Nevada, USA! You can find Bristlecone pines over four thousand years old! That started me off!"

Mr. Willy Wonka jumped into the Great Glass Elevator and rushed around the world gathering special items from the oldest things alive. He collected:
• A pint of sap from a 4,000-year-old Bristlecone pine
• The toe-nail clippings from a 168-year-old Russian farmer
• An egg laid by a 200-year-old tortoise belonging to the King of Tonga
• The tail of a 51-year-old horse in Arabia
• The whiskers of a 36-year-old cat called Crumpets
• A flea that had lived on Crumpets for 36 years
• The black teeth of an ancient Grimalkin living in caves on Mount Popocatepetl

Back in his Inventing Room, Mr. Wonka boiled, bubbled, mixed, and tested his concoction. At last, he produced one tiny cupful of oily black liquid. He called for a brave twenty-year-old volunteer, Oompa-Loompa named Oompa-Gomer. He swallowed four drops. Instantly, he began wrinkling, his hair dropped off, his teeth fell out, and before anyone knew it, he had suddenly become an old man of seventy-five! "Thus, my dear Charlie," cried Mr. Wonka, "was Vita-Wonk invented!"`,
    questions: [
      {
        id: 1,
        question: "Why did Mr. Willy Wonka need to invent 'Vita-Wonk'?",
        options: ["Because chocolate sales were dropping", "Because Wonka-Vite made people too young, and one person became minus 87", "To cure common colds", "To win a Nobel prize in cooking"],
        correctIndex: 1,
        explanation: "Wonka-Vite had turned people far too young, so he needed a medicine to make people age.",
        clueSentence: "Wonka-Vite made people too young! One person actually became minus eighty-seven...",
        category: "factual"
      },
      {
        id: 2,
        question: "What is the oldest living thing on Earth according to Mr. Wonka?",
        options: ["The Giant Sequoia tree", "The Bristlecone pine of Wheeler Peak", "The English Oak", "The Himalayan Cedar"],
        correctIndex: 1,
        explanation: "He identified the Bristlecone pine growing on Wheeler Peak, Nevada as over 4,000 years old.",
        clueSentence: "It is the Bristlecone pine that grows upon the slopes of Wheeler Peak in Nevada, USA!",
        category: "factual"
      },
      {
        id: 3,
        question: "How old are the oldest Bristlecone pines according to Mr. Wonka?",
        options: ["500 years old", "Over 4,000 years old", "10,000 years old", "200 years old"],
        correctIndex: 1,
        explanation: "The passage notes they can live for over 4,000 years.",
        clueSentence: "You can find Bristlecone pines over four thousand years old!",
        category: "factual"
      },
      {
        id: 4,
        question: "What vehicle did Mr. Wonka use to travel the world collecting ancient ingredients?",
        options: ["A supersonic jet airplane", "The Great Glass Elevator", "A magic carpet", "A submarine"],
        correctIndex: 1,
        explanation: "Mr. Wonka leaped into his famous Great Glass Elevator.",
        clueSentence: "Mr. Willy Wonka jumped into the Great Glass Elevator and rushed around the world...",
        category: "factual"
      },
      {
        id: 5,
        question: "Whom did the 200-year-old tortoise belong to?",
        options: ["The King of England", "The King of Tonga", "The Emperor of Japan", "A fisherman in Hawaii"],
        correctIndex: 1,
        explanation: "The egg was laid by a 200-year-old tortoise owned by the King of Tonga.",
        clueSentence: "An egg laid by a 200-year-old tortoise belonging to the King of Tonga",
        category: "factual"
      },
      {
        id: 6,
        question: "What was the name of the 36-year-old cat whose whiskers Wonka collected?",
        options: ["Tom", "Crumpets", "Whiskers", "Felix"],
        correctIndex: 1,
        explanation: "The cat was named Crumpets.",
        clueSentence: "The whiskers of a 36-year-old cat called Crumpets",
        category: "factual"
      },
      {
        id: 7,
        question: "On which volcano's caves did the ancient Grimalkin live?",
        options: ["Mount Everest", "Mount Fuji", "Mount Popocatepetl", "Mount Kilimanjaro"],
        correctIndex: 2,
        explanation: "Wonka gathered teeth from an ancient Grimalkin in caves on Mount Popocatepetl.",
        clueSentence: "...living in caves on Mount Popocatepetl",
        category: "factual"
      },
      {
        id: 8,
        question: "What was the appearance and color of the final Vita-Wonk tonic?",
        options: ["Bright bubbly pink syrup", "A tiny cupful of oily black liquid", "Clear odorless water", "Golden glowing powder"],
        correctIndex: 1,
        explanation: "After boiling and mixing, it resulted in a tiny cupful of oily black liquid.",
        clueSentence: "At last, he produced one tiny cupful of oily black liquid.",
        category: "factual"
      },
      {
        id: 9,
        question: "How many drops did the volunteer swallow?",
        options: ["One spoonful", "Four drops", "Ten drops", "A whole cup"],
        correctIndex: 1,
        explanation: "The volunteer took just four drops.",
        clueSentence: "He swallowed four drops.",
        category: "factual"
      },
      {
        id: 10,
        question: "What happened to the 20-year-old volunteer after swallowing the four drops?",
        options: ["He turned into a toddler", "He became an old man of seventy-five with wrinkles and lost hair", "He sprouted wings", "He fell asleep for 100 years"],
        correctIndex: 1,
        explanation: "He aged dramatically into a 75-year-old within seconds.",
        clueSentence: "he had suddenly become an old man of seventy-five!",
        category: "factual"
      },
      {
        id: 11,
        question: "Who is the famous British author of 'Charlie and the Chocolate Factory'?",
        options: ["Enid Blyton", "Roald Dahl", "J.K. Rowling", "C.S. Lewis"],
        correctIndex: 1,
        explanation: "Roald Dahl wrote Charlie and the Chocolate Factory and this classic chapter.",
        clueSentence: "Roald Dahl - Mr. Willy Wonka searching for the oldest living things...",
        category: "factual"
      },
      {
        id: 12,
        question: "Find the meaning of 'concoction':",
        options: ["A simple glass of water", "A mixture of various ingredients or elements", "A musical instrument", "A scientific textbook"],
        correctIndex: 1,
        explanation: "'Concoction' refers to an elaborate mixture or blend of ingredients.",
        clueSentence: "Mr. Wonka boiled, bubbled, mixed, and tested his concoction.",
        category: "vocabulary"
      },
      {
        id: 13,
        question: "What is the antonym of 'ancient'?",
        options: ["Old", "Modern / Recent", "Antique", "Historic"],
        correctIndex: 1,
        explanation: "The opposite of 'ancient' is 'modern' or 'recent'.",
        clueSentence: "The black teeth of an ancient Grimalkin...",
        category: "vocabulary"
      },
      {
        id: 14,
        question: "Identify the punctuation mark used before the list of items in the passage:",
        options: ["Semicolon", "Colon (:)", "Hyphen", "Question mark"],
        correctIndex: 1,
        explanation: "A colon is used to introduce a bulleted list of items.",
        clueSentence: "He collected:",
        category: "grammar"
      },
      {
        id: 15,
        question: "What tone defines Roald Dahl's writing in this chapter?",
        options: ["Somber and sorrowful", "Wildly whimsical, humorous, and delightfully absurd", "Factual and dull", "Terrifying and scary"],
        correctIndex: 1,
        explanation: "Roald Dahl uses hyperbole, nonsense ingredients, and playful humor.",
        clueSentence: "A flea that had lived on Crumpets for 36 years...",
        category: "theme"
      },
      {
        id: 16,
        question: "Which of the following is an adverb in: 'Instantly, he began wrinkling'?",
        options: ["Instantly", "he", "began", "wrinkling"],
        correctIndex: 0,
        explanation: "'Instantly' is an adverb of time modifying 'began'.",
        clueSentence: "Instantly, he began wrinkling...",
        category: "grammar"
      },
      {
        id: 17,
        question: "What did a person becoming 'minus eighty-seven' signify in Wonka's world?",
        options: ["His temperature fell to -87 degrees", "He disappeared from existence and had to wait 87 years to be born", "He lost 87 dollars", "He moved 87 miles away"],
        correctIndex: 1,
        explanation: "Wonka-Vite was so potent it reversed time beyond zero into negative years.",
        clueSentence: "...which meant he had to wait eighty-seven years before he could be born!",
        category: "inference"
      },
      {
        id: 18,
        question: "What tree was rejected by Mr. Wonka because it wasn't old enough?",
        options: ["Bristlecone pine", "Douglas fir, oak, and cedar", "Banyan tree", "Coconut palm"],
        correctIndex: 1,
        explanation: "He explicitly ruled out Douglas fir, oak, and cedar.",
        clueSentence: "'Not the Douglas fir, nor the oak, nor the cedar!'",
        category: "factual"
      },
      {
        id: 19,
        question: "What is the noun form of 'invent'?",
        options: ["Invention", "Inventive", "Inventorily", "Invented"],
        correctIndex: 0,
        explanation: "'Invention' is the abstract noun.",
        clueSentence: "The Invention of Vita-Wonk",
        category: "grammar"
      },
      {
        id: 20,
        question: "What did Charlie do throughout Wonka's explanation?",
        options: ["He argued with Wonka", "He listened curiously and asked thoughtful questions", "He fell asleep", "He drank the Vita-Wonk himself"],
        correctIndex: 1,
        explanation: "Charlie acted as the keen, inquisitive companion asking about the oldest things.",
        clueSentence: "'What is the oldest living thing in the world?' asked Charlie.",
        category: "inference"
      }
    ]
  },
  {
    id: 'unit8-fire-friend-foe',
    unitNumber: 8,
    title: 'Fire: Friend and Foe',
    subtitle: 'The Science of Combustion & How Fire is Controlled',
    theme: 'Science, Human Discovery & Safety',
    summary: 'Early humans feared fire, but learning to generate and control combustion transformed civilization. Fire is a wonderful servant when managed, but a terrifying master when uncontrolled.',
    fullPassage: `Early man did not know what fire was, but he must have seen the damage it could cause. He must have watched lightning and volcanoes long before he began to use fire himself. Fire was powerful and dangerous, and he was frightened.

Today we know that fire is the result of a chemical reaction. When the oxygen in the air combines with carbon and hydrogen in a fuel, energy is released in the form of heat and light. This is what we call fire. Three things are needed to make fire: fuel, oxygen, and heat. Wood, coal, cooking gas, and petrol are examples of fuel. Oxygen comes from the air around us. That is why, when you blow on smouldering paper, it often bursts into flame.

The third thing needed to make fire is heat. Fuel and oxygen do not make fire by themselves; otherwise, a newspaper or a stick of match lying in the open would catch fire on its own! Every fuel has a particular temperature at which it begins to burn. This temperature is called the 'flash point' or 'kindling temperature' of the fuel.

Fire is a good servant but a bad master. It only means that fire is very useful as long as it is kept under control. For instance, we use it to cook our food, warm our homes in winter, and generate electricity. But if fire gets out of hand, it can destroy homes, vast forests, and kill thousands of people.

We can put out a fire by removing any one of the three essentials: we can take away the fuel; we can cut off the supply of oxygen with blankets, sand, or carbon dioxide extinguishers; or we can lower the temperature below the flash point using water spray. Remember, water should never be poured on oil or electrical fires, because oil floats on water and spreads the fire, while water conducts electricity, giving lethal electric shocks!`,
    questions: [
      {
        id: 1,
        question: "What is fire the result of scientifically?",
        options: ["A nuclear fusion reaction", "A chemical reaction between oxygen, carbon, and hydrogen in a fuel", "A magic spark from lightning", "Friction between clouds"],
        correctIndex: 1,
        explanation: "Fire is a chemical reaction releasing energy in the form of heat and light.",
        clueSentence: "Today we know that fire is the result of a chemical reaction. When the oxygen in the air combines with carbon and hydrogen in a fuel...",
        category: "factual"
      },
      {
        id: 2,
        question: "What are the three essential components required to produce fire?",
        options: ["Fuel, oxygen, and heat", "Water, air, and wood", "Coal, smoke, and electricity", "Gas, oil, and wind"],
        correctIndex: 0,
        explanation: "Combustion requires fuel, oxygen, and heat.",
        clueSentence: "Three things are needed to make fire: fuel, oxygen, and heat.",
        category: "factual"
      },
      {
        id: 3,
        question: "Why does blowing on smouldering paper cause it to burst into flame?",
        options: ["It cools the paper down", "It supplies fresh oxygen from the air", "It adds water droplets", "It removes carbon dioxide"],
        correctIndex: 1,
        explanation: "Blowing delivers a fresh stream of oxygen needed for burning.",
        clueSentence: "Oxygen comes from the air around us. That is why, when you blow on smouldering paper, it often bursts into flame.",
        category: "inference"
      },
      {
        id: 4,
        question: "What is the specific temperature at which a fuel begins to burn called?",
        options: ["Melting point", "Boiling point", "Flash point or kindling temperature", "Freezing point"],
        correctIndex: 2,
        explanation: "The ignition temperature is known as the flash point or kindling temperature.",
        clueSentence: "This temperature is called the 'flash point' or 'kindling temperature' of the fuel.",
        category: "vocabulary"
      },
      {
        id: 5,
        question: "What famous proverb about fire is highlighted in the passage?",
        options: ["'Smoke follows beauty'", "'Fire is a good servant but a bad master'", "'No fire without sparks'", "'Strike while the iron is hot'"],
        correctIndex: 1,
        explanation: "The text highlights that fire is an excellent servant but disastrous as a master.",
        clueSentence: "Fire is a good servant but a bad master.",
        category: "factual"
      },
      {
        id: 6,
        question: "In what useful ways do humans utilize controlled fire daily?",
        options: ["Cooking food, warming homes, and generating electricity", "Making ice cream", "Cleaning windows", "Sending letters"],
        correctIndex: 0,
        explanation: "Controlled fire cooks meals, heats homes, and drives turbines for electricity.",
        clueSentence: "For instance, we use it to cook our food, warm our homes in winter, and generate electricity.",
        category: "factual"
      },
      {
        id: 7,
        question: "How can one extinguish a fire based on the triangle of fire?",
        options: ["By adding more wood", "By removing any one of the three essentials (fuel, oxygen, or heat)", "By fanning it with newspapers", "By pouring petrol"],
        correctIndex: 1,
        explanation: "Eliminating fuel, cutting off oxygen, or cooling below the flash point extinguishes fire.",
        clueSentence: "We can put out a fire by removing any one of the three essentials...",
        category: "inference"
      },
      {
        id: 8,
        question: "Why should water NEVER be poured on an oil fire?",
        options: ["Water evaporates too quickly", "Oil is lighter than water, floats on top, and continues to burn while spreading", "Oil turns water into gas", "Water makes oil freeze"],
        correctIndex: 1,
        explanation: "Oil floats on water and the burning liquid will flow with the water, spreading flames.",
        clueSentence: "Remember, water should never be poured on oil or electrical fires, because oil floats on water and spreads the fire...",
        category: "factual"
      },
      {
        id: 9,
        question: "Why is pouring water dangerous on an electrical fire?",
        options: ["It rusts the wires", "Water conducts electricity and can deliver a lethal electric shock to the person", "It makes lights flicker", "It creates too much smoke"],
        correctIndex: 1,
        explanation: "Water conducts electrical current and can electrocute the firefighter.",
        clueSentence: "while water conducts electricity, giving lethal electric shocks!",
        category: "factual"
      },
      {
        id: 10,
        question: "Which type of fire extinguisher cuts off oxygen effectively without water?",
        options: ["Petrol sprayers", "Carbon dioxide (CO2) extinguishers and blankets", "Fan blowers", "Oxygen cylinders"],
        correctIndex: 1,
        explanation: "Carbon dioxide displaces oxygen, suffocating the flames.",
        clueSentence: "...cut off the supply of oxygen with blankets, sand, or carbon dioxide extinguishers...",
        category: "factual"
      },
      {
        id: 11,
        question: "Find the antonym of 'lethal' in 'lethal electric shocks':",
        options: ["Deadly", "Harmless / Safe", "Fatal", "Dangerous"],
        correctIndex: 1,
        explanation: "'Lethal' means deadly; its opposite is 'harmless' or 'safe'.",
        clueSentence: "...giving lethal electric shocks!",
        category: "vocabulary"
      },
      {
        id: 12,
        question: "What natural phenomena did early man watch before learning to make fire?",
        options: ["Airplanes and fireworks", "Lightning strikes and erupting volcanoes", "Solar panels", "Steam engines"],
        correctIndex: 1,
        explanation: "Early humans witnessed forest fires caused by lightning and volcanic eruptions.",
        clueSentence: "He must have watched lightning and volcanoes long before he began to use fire himself.",
        category: "factual"
      },
      {
        id: 13,
        question: "What does 'smouldering' mean in 'smouldering paper'?",
        options: ["Frozen stiff", "Burning slowly with smoke but no open flame", "Soaked in water", "Torn into bits"],
        correctIndex: 1,
        explanation: "'Smouldering' describes burning slowly without open flame.",
        clueSentence: "...when you blow on smouldering paper...",
        category: "vocabulary"
      },
      {
        id: 14,
        question: "Identify the modal auxiliary verb expressing rule in: 'water should never be poured':",
        options: ["water", "should", "never", "poured"],
        correctIndex: 1,
        explanation: "'Should' is a modal auxiliary verb expressing an obligation or warning.",
        clueSentence: "Remember, water should never be poured on oil...",
        category: "grammar"
      },
      {
        id: 15,
        question: "Why doesn't a matchstick in a box catch fire on its own?",
        options: ["It lacks wood", "It is below its flash point until friction generates sufficient heat", "There is no oxygen around it", "It is coated with ice"],
        correctIndex: 1,
        explanation: "It needs heat from friction against the strike strip to attain its ignition flash point.",
        clueSentence: "Fuel and oxygen do not make fire by themselves... Every fuel has a particular temperature at which it begins to burn.",
        category: "inference"
      },
      {
        id: 16,
        question: "What is the suffix in the word 'reaction'?",
        options: ["re-", "-tion", "-act", "-on"],
        correctIndex: 1,
        explanation: "'-tion' is the suffix forming a noun from the verb 'react'.",
        clueSentence: "Today we know that fire is the result of a chemical reaction.",
        category: "grammar"
      },
      {
        id: 17,
        question: "What method lowers the temperature of a fire below its flash point?",
        options: ["Spraying cold water on ordinary wood fires", "Blowing air with bellows", "Adding dry straw", "Wrapping with aluminum foil"],
        correctIndex: 0,
        explanation: "Water spray absorbs heat and drops the fuel temperature below its flash point.",
        clueSentence: "...or we can lower the temperature below the flash point using water spray.",
        category: "factual"
      },
      {
        id: 18,
        question: "Which of the following is NOT a fuel mentioned in the text?",
        options: ["Wood", "Cooking gas", "Pure water", "Petrol"],
        correctIndex: 2,
        explanation: "Water is not a combustible fuel.",
        clueSentence: "Wood, coal, cooking gas, and petrol are examples of fuel.",
        category: "factual"
      },
      {
        id: 19,
        question: "What is the adjective form of 'energy'?",
        options: ["Energize", "Energetic", "Energism", "Energetically"],
        correctIndex: 1,
        explanation: "'Energetic' is the adjective form of 'energy'.",
        clueSentence: "...energy is released in the form of heat and light.",
        category: "grammar"
      },
      {
        id: 20,
        question: "What is the primary purpose of this educational chapter?",
        options: ["To encourage people to play with fireworks", "To explain the scientific nature of fire, its benefits, and crucial fire safety rules", "To criticize early human beings", "To promote coal mining"],
        correctIndex: 1,
        explanation: "It educates students on fire chemistry, its role in human life, and life-saving safety practices.",
        clueSentence: "Fire is a good servant but a bad master... We can put out a fire by removing any one of the three essentials...",
        category: "theme"
      }
    ]
  },
  {
    id: 'unit9-tiger-in-house',
    unitNumber: 9,
    title: 'A Tiger in the House',
    subtitle: 'Timothy the Tiger Cub & Grandfather\'s Zoo Surprise',
    theme: 'Animals, Companionship & Human-Nature Bonds',
    summary: 'Ruskin Bond\'s delightful tale of Timothy, a wild tiger cub brought up like a family pet with Toto the monkey and a mongrel puppy, until his natural instincts awaken and Grandfather visits him in the Lucknow zoo.',
    fullPassage: `Timothy, the tiger cub, was discovered by Grandfather in the Siwalik hills near Dehra. While strolling down a forest path away from the main hunting party, Grandfather noticed a little tiger about eighteen inches long, hiding among the intricate roots of a banyan tree. Grandfather brought him home, and Grandmother promptly christened him Timothy.

At first, Timothy was brought up entirely on milk given to him in a feeding bottle by our cook, Mahmoud. But the milk proved too rich for him, and he was soon put on a diet of raw mutton and cod-liver oil, followed later by a more tempting diet of pigeons and rabbits.

Timothy was provided with two companions in the household: Toto the mischievous monkey, who was bold enough to pull the young tiger by the tail and then climb up the curtains if Timothy lost his temper; and a small mongrel puppy, found on the road by Grandfather. At first, Timothy seemed afraid of the puppy, springing back with a comical jump if it came too close. But eventually he allowed the puppy to crawl on his back and sleep there!

Timothy loved to stalk anyone who played with him. When I came to live with Grandfather, I became one of the tiger’s favorites. With a crafty look in his glittering eyes, he would creep closer and closer, suddenly make a dash for my feet, roll on his back, and pretend to bite my ankles!

However, when Timothy was about six months old, a change came over him. He grew steadily less friendly. When out for a walk with me, he would try to steal away to stalk a cat or someone’s pet Pekingese dog. At night we could hear frenzied cackling from the poultry house, and in the morning there would be feathers lying all over the verandah! Grandfather realized it was time to transfer Timothy to the zoo at Lucknow.

Months later, Grandfather visited the Lucknow zoo. Seeing a magnificent full-grown tiger pacing inside a cage, Grandfather strode up, stroked the beast's ears, and tickled its chin. The tiger purred and licked Grandfather's hands with apparent affection. Just then, an alarmed zookeeper shouted, "Sir, please step back! What are you doing? That is not your Timothy! Your tiger died of pneumonia two months ago. This dangerous beast was trapped in the hills only last month, and he is extremely savage!" Grandfather stood frozen in astonishment, murmured "Goodnight, Timothy," and walked briskly away!`,
    questions: [
      {
        id: 1,
        question: "Where did Grandfather discover Timothy the tiger cub?",
        options: ["In a circus cage in Delhi", "Under the roots of a banyan tree in the Siwalik hills near Dehra", "In a pet shop in Lucknow", "On a railway track in Mumbai"],
        correctIndex: 1,
        explanation: "Grandfather found Timothy hiding among banyan tree roots in the Siwalik hills.",
        clueSentence: "...hiding among the intricate roots of a banyan tree in the Siwalik hills near Dehra.",
        category: "factual"
      },
      {
        id: 2,
        question: "How long was Timothy when Grandfather found him?",
        options: ["Six inches long", "About eighteen inches long", "Three feet long", "Five feet long"],
        correctIndex: 1,
        explanation: "The text says he was a little tiger about eighteen inches long.",
        clueSentence: "Grandfather noticed a little tiger about eighteen inches long...",
        category: "factual"
      },
      {
        id: 3,
        question: "Who gave the tiger cub the name 'Timothy'?",
        options: ["The cook Mahmoud", "Grandmother", "Ruskin Bond", "The forest ranger"],
        correctIndex: 1,
        explanation: "Grandmother christened him Timothy.",
        clueSentence: "...and Grandmother promptly christened him Timothy.",
        category: "factual"
      },
      {
        id: 4,
        question: "What did Timothy drink from a feeding bottle at the start?",
        options: ["Warm goat milk", "Cow milk given by Mahmoud the cook", "Fruit juice", "Honey water"],
        correctIndex: 1,
        explanation: "He was fed milk from a bottle by the cook Mahmoud.",
        clueSentence: "At first, Timothy was brought up entirely on milk given to him in a feeding bottle by our cook, Mahmoud.",
        category: "factual"
      },
      {
        id: 5,
        question: "Who were Timothy's two animal companions at the house?",
        options: ["A parrot and a turtle", "Toto the monkey and a small mongrel puppy", "A Persian cat and a squirrel", "Two goat kids"],
        correctIndex: 1,
        explanation: "His companions were Toto the mischievous monkey and a mongrel puppy.",
        clueSentence: "Timothy was provided with two companions in the household: Toto the mischievous monkey... and a small mongrel puppy...",
        category: "factual"
      },
      {
        id: 6,
        question: "What playful prank did Toto the monkey play on young Timothy?",
        options: ["He threw bananas at him", "He pulled the tiger's tail and climbed up the curtains", "He bit the tiger's nose", "He hid Timothy's feeding bottle"],
        correctIndex: 1,
        explanation: "Toto would boldly tug Timothy's tail and scoot up curtains.",
        clueSentence: "Toto the mischievous monkey, who was bold enough to pull the young tiger by the tail and then climb up the curtains...",
        category: "factual"
      },
      {
        id: 7,
        question: "What game did Timothy love to play with the young narrator?",
        options: ["Hide and seek behind cupboards", "Creeping close, dashing for feet, and playfully rolling on ankles", "Chasing balls across the lawn", "Swimming in the garden pond"],
        correctIndex: 1,
        explanation: "Timothy would stealthily stalk the narrator and pretend to nibble his ankles.",
        clueSentence: "he would creep closer and closer, suddenly make a dash for my feet, roll on his back, and pretend to bite my ankles!",
        category: "factual"
      },
      {
        id: 8,
        question: "What warning signs showed that Timothy's wild predator instincts were awakening?",
        options: ["He stopped drinking water", "He stalked pet cats and dogs, and killed poultry at night leaving feathers on the verandah", "He roared all night", "He bit Grandfather's arm"],
        correctIndex: 1,
        explanation: "He stalked household pets and attacked the chicken coop.",
        clueSentence: "At night we could hear frenzied cackling from the poultry house, and in the morning there would be feathers lying all over the verandah!",
        category: "inference"
      },
      {
        id: 9,
        question: "To which city's zoo did Grandfather decide to send Timothy?",
        options: ["Kolkata zoo", "Lucknow zoo", "Delhi zoo", "Agra zoo"],
        correctIndex: 1,
        explanation: "Timothy was safely transported to the Lucknow zoo.",
        clueSentence: "Grandfather realized it was time to transfer Timothy to the zoo at Lucknow.",
        category: "factual"
      },
      {
        id: 10,
        question: "What shocking truth did the zookeeper reveal to Grandfather at the zoo?",
        options: ["Timothy had escaped into the forest", "The tiger in the cage was a savage wild tiger caught last month; Timothy had died of pneumonia two months ago", "Timothy had forgotten how to roar", "The zoo had sold Timothy to another city"],
        correctIndex: 1,
        explanation: "Timothy had passed away from pneumonia; the tiger Grandfather was petting was an extremely dangerous wild tiger!",
        clueSentence: "Your tiger died of pneumonia two months ago. This dangerous beast was trapped in the hills only last month, and he is extremely savage!",
        category: "factual"
      },
      {
        id: 11,
        question: "Who wrote this beloved autobiographical story?",
        options: ["R.K. Narayan", "Ruskin Bond", "Vikram Seth", "Mulk Raj Anand"],
        correctIndex: 1,
        explanation: "Ruskin Bond is the celebrated Indian author of 'A Tiger in the House'.",
        clueSentence: "Ruskin Bond's delightful tale of Timothy...",
        category: "factual"
      },
      {
        id: 12,
        question: "Find the meaning of 'intricate' in 'intricate roots of a banyan tree':",
        options: ["Very simple and straight", "Complex, entangled, and elaborate", "Dead and dried", "Poisonous"],
        correctIndex: 1,
        explanation: "'Intricate' means complex, tangled, and detailed.",
        clueSentence: "...hiding among the intricate roots of a banyan tree.",
        category: "vocabulary"
      },
      {
        id: 13,
        question: "What is the antonym of 'savage' in 'extremely savage'?",
        options: ["Fierce", "Tame / Gentle", "Wild", "Cruel"],
        correctIndex: 1,
        explanation: "The antonym of 'savage' (wild and ferocious) is 'tame' or 'gentle'.",
        clueSentence: "...and he is extremely savage!",
        category: "vocabulary"
      },
      {
        id: 14,
        question: "Why was Grandfather able to stroke the dangerous zoo tiger without being attacked?",
        options: ["Grandfather possessed supernatural power", "Grandfather's fearless, gentle, and calm confidence disarmed the ferocious beast", "The tiger was drugged with medicine", "The cage had glass in between"],
        correctIndex: 1,
        explanation: "Grandfather's genuine, calm affection and boldness momentarily soothed the savage tiger.",
        clueSentence: "The tiger purred and licked Grandfather's hands with apparent affection.",
        category: "inference"
      },
      {
        id: 15,
        question: "What does 'christened' mean in 'Grandmother promptly christened him Timothy'?",
        options: ["Sold him", "Named him formally", "Punished him", "Scolded him"],
        correctIndex: 1,
        explanation: "'Christened' here means gave him a name.",
        clueSentence: "Grandmother promptly christened him Timothy.",
        category: "vocabulary"
      },
      {
        id: 16,
        question: "Identify the part of speech of 'briskly' in 'walked briskly away':",
        options: ["Adverb", "Adjective", "Noun", "Conjunction"],
        correctIndex: 0,
        explanation: "'Briskly' modifies the verb 'walked', so it is an adverb of manner.",
        clueSentence: "murmured 'Goodnight, Timothy,' and walked briskly away!",
        category: "grammar"
      },
      {
        id: 17,
        question: "What illness caused the real Timothy's death at the zoo?",
        options: ["Rabies", "Pneumonia", "Malaria", "Heart attack"],
        correctIndex: 1,
        explanation: "The zookeeper explained that Timothy died of pneumonia.",
        clueSentence: "Your tiger died of pneumonia two months ago.",
        category: "factual"
      },
      {
        id: 18,
        question: "What did Grandfather whisper as his final farewell at the cage?",
        options: ["'Goodbye forever, savage tiger'", "'Goodnight, Timothy'", "'Beware of the zookeepers'", "'I shall bring you meat tomorrow'"],
        correctIndex: 1,
        explanation: "Grandfather gently murmured, 'Goodnight, Timothy.'",
        clueSentence: "Grandfather stood frozen in astonishment, murmured 'Goodnight, Timothy,' and walked briskly away!",
        category: "factual"
      },
      {
        id: 19,
        question: "Choose the correct collective noun: 'A ___ of chickens/poultry':",
        options: ["Flock", "Herd", "Pack", "School"],
        correctIndex: 0,
        explanation: "'A flock of poultry/chickens' is the correct collective noun.",
        clueSentence: "At night we could hear frenzied cackling from the poultry house...",
        category: "grammar"
      },
      {
        id: 20,
        question: "What is the overarching theme of this story?",
        options: ["Hunting tigers in the mountains", "The fascinating bond between humans and animals, and respecting the wild nature of beasts", "Cooking recipes for tigers", "How to manage city zoos"],
        correctIndex: 1,
        explanation: "It explores affection between humans and animals while acknowledging that wild creatures belong in their natural realm.",
        clueSentence: "The fascinating bond between humans and animals...",
        category: "theme"
      }
    ]
  }
];
