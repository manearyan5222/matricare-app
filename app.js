/* MatriCare - Maternal & Child Health Web Application
   Vanilla JS Engine (ES6+)
   Evidence-Based WHO & Indian Academy of Pediatrics (IAP) Guidelines
*/

// --- 1. DATASETS & CLINICAL KNOWLEDGE BASE ---

const PREGNANCY_DATA = [
  {
    week: 4,
    emoji: "🟤",
    fetalSize: "Size of a Poppy/Mustard Seed (~2 mm)",
    weight: "< 1g",
    length: "~2 mm",
    fetalDesc: "The blastocyst implants into the uterine lining. Neural tube formation begins.",
    maternalDesc: "Missed period. Tender breasts, fatigue, and early hormonal changes.",
    scansAndTests: "Home Pregnancy Test (hCG positive). Start daily Folic Acid (400 mcg)."
  },
  {
    week: 8,
    emoji: "🫘",
    fetalSize: "Size of a Rajma Bean / Cardamom (~1.6 cm)",
    weight: "~1g",
    length: "~1.6 cm",
    fetalDesc: "Tiny arms and legs are forming. Heartbeat is detectable via ultrasound (~150 bpm).",
    maternalDesc: "Morning sickness, nausea, heightened smell sensitivity, frequent urination.",
    scansAndTests: "First Dating & Viability Ultrasound scan. Blood test for Hb, Blood Group & Rh factor."
  },
  {
    week: 12,
    emoji: "🍋",
    fetalSize: "Size of an Amla / Lime (~5.4 cm)",
    weight: "~14g",
    length: "~5.4 cm",
    fetalDesc: "Fetal reflexes develop—fingers open and close. All major organs are formed.",
    maternalDesc: "Nausea begins to subside. Uterus expands above pelvic bone.",
    scansAndTests: "NT (Nuchal Translucency) Scan & Double Marker blood test for chromosomal screening."
  },
  {
    week: 16,
    emoji: "🍏",
    fetalSize: "Size of a Small Guava / Custard Apple (~11.6 cm)",
    weight: "~100g",
    length: "~11.6 cm",
    fetalDesc: "Baby can make facial expressions and suck their thumb. Eyes are light-sensitive.",
    maternalDesc: "Energy returns! Appetite increases. Minor backaches or round ligament stretching.",
    scansAndTests: "Tetanus Toxoid (TT-1 or Tdap) vaccine injection. Hemoglobin re-check."
  },
  {
    week: 20,
    emoji: "🍌",
    fetalSize: "Size of a Banana (~25 cm)",
    weight: "~300g",
    length: "~25 cm",
    fetalDesc: "Baby swallows amniotic fluid. Hearing is active—responds to mother's voice and music.",
    maternalDesc: "Quickening! First gentle fluttering baby movements felt. Belly is visibly rounded.",
    scansAndTests: "Level-2 Anomaly Scan (TIFFA scan) between weeks 18-22 to evaluate organ structure."
  },
  {
    week: 24,
    emoji: "🌽",
    fetalSize: "Size of an Ear of Corn (~30 cm)",
    weight: "~600g",
    length: "~30 cm",
    fetalDesc: "Lungs develop surfactant. Taste buds are forming; baby tastes food flavors in amniotic fluid.",
    maternalDesc: "Possibility of leg cramps, mild ankle swelling, or dry skin over abdomen.",
    scansAndTests: "Oral Glucose Tolerance Test (OGTT) for Gestational Diabetes screening."
  },
  {
    week: 28,
    emoji: "🥥",
    fetalSize: "Size of a Green Coconut (~37.5 cm)",
    weight: "~1000g (1 kg)",
    length: "~37.5 cm",
    fetalDesc: "Eyes open and close. Brain activity shows REM sleep cycles and dreaming.",
    maternalDesc: "Entering 3rd Trimester! Shortness of breath as uterus presses against diaphragm.",
    scansAndTests: "Tetanus Toxoid Booster (TT-2/Tdap). Anti-D injection if Rh-negative."
  },
  {
    week: 32,
    emoji: "🍈",
    fetalSize: "Size of a Papaya / Muskmelon (~42 cm)",
    weight: "~1700g (1.7 kg)",
    length: "~42 cm",
    fetalDesc: "Fetal skeleton hardens except skull bones (remains pliable for birth canal navigation).",
    maternalDesc: "Braxton Hicks (practice) contractions. Heartburn & pelvic pressure.",
    scansAndTests: "Growth Scan & Doppler ultrasound to monitor fetal weight & umbilical blood flow."
  },
  {
    week: 36,
    emoji: "🍍",
    fetalSize: "Size of a Large Pineapple / Honey Melon (~47 cm)",
    weight: "~2600g (2.6 kg)",
    length: "~47 cm",
    fetalDesc: "Baby gains ~30g of fat per day. Most babies turn head-down (cephalic position).",
    maternalDesc: "Lightening—baby settles lower into pelvis, making breathing easier but increasing bladder pressure.",
    scansAndTests: "Weekly ANC checkups. Group B Streptococcus (GBS) screening swab."
  },
  {
    week: 40,
    emoji: "🍉",
    fetalSize: "Size of a Full Watermelon (~50 cm)",
    weight: "~3200g (3.2 kg)",
    length: "~50 cm",
    fetalDesc: "Fully matured and ready to meet the world! Lungs and reflexes completely ready.",
    maternalDesc: "Mucus plug discharge, water breaking, or regular painful contractions signaling labor.",
    scansAndTests: "Immediate hospital admission upon regular contractions or amniotic fluid leak."
  }
];

const TODDLER_DATA = [
  {
    month: 1,
    emoji: "👶",
    fetalSize: "Newborn Stage (3-4 kg)",
    weight: "3.2 - 4.5 kg",
    length: "50 - 55 cm",
    fetalDesc: "Focuses on objects 8-12 inches away. Responds to maternal voice and smell.",
    maternalDesc: "Postpartum recovery, establishing breast milk supply, demand feeding every 2-3 hours.",
    scansAndTests: "BCG, OPV-0, Hepatitis B birth dose vaccines. Newborn Hearing & Metabolic screening."
  },
  {
    month: 3,
    emoji: "🍼",
    fetalSize: "Infant Growth Phase (5-6.5 kg)",
    weight: "5.0 - 6.5 kg",
    length: "58 - 62 cm",
    fetalDesc: "Pushes up on arms during tummy time. Coos, smiles socially, and tracks moving objects.",
    maternalDesc: "Increased infant alertness. Breastfeeding rhythm settles.",
    scansAndTests: "6th & 10th week primary immunization series (DTP, IPV, Hib, Rotavirus, PCV)."
  },
  {
    month: 6,
    emoji: "🥣",
    fetalSize: "Weaning & Solid Food Intro (~7.5 kg)",
    weight: "7.0 - 8.5 kg",
    length: "64 - 68 cm",
    fetalDesc: "Sits with support, rolls from back to tummy, reaches out with both hands.",
    maternalDesc: "Introduction of complementary feeding (weaning) alongside continued breastfeeding.",
    scansAndTests: "14-week vax series + 6-month Vitamin A dose. Intro to ragi porridge, stewed apple, dal water."
  },
  {
    month: 9,
    emoji: "🧸",
    fetalSize: "Crawling & Explorer Phase (~8.5 kg)",
    weight: "8.0 - 9.5 kg",
    length: "68 - 72 cm",
    fetalDesc: "Crawls, sits without support, develops pincer grasp (thumb and index finger pick up objects).",
    maternalDesc: "Baby proofing house! Teething management.",
    scansAndTests: "Measles-Rubella (MR-1) vaccine, Vitamin A dose 2. 9-month developmental check."
  },
  {
    month: 12,
    emoji: "🚶",
    fetalSize: "First Steps Milestone (~9.5 - 10.5 kg)",
    weight: "9.0 - 10.5 kg",
    length: "72 - 76 cm",
    fetalDesc: "Pulls up to stand, walks with support or takes first independent steps. Says 'Mama/Dada'.",
    maternalDesc: "Transition to family table foods (soft mashed roti, dal rice, cooked veggies).",
    scansAndTests: "Hepatitis A dose 1, 1-Year Pediatric Wellness checkup."
  },
  {
    month: 18,
    emoji: "🎨",
    fetalSize: "Toddler Exploration Phase (~11 kg)",
    weight: "10.5 - 12.0 kg",
    length: "80 - 84 cm",
    fetalDesc: "Runs, scribbles with crayons, speaks 10-20 words, uses spoon to feed self.",
    maternalDesc: "Managing toddler tantrums, encouraging interactive play and language.",
    scansAndTests: "MMR Booster, DTP Booster 1, IPV Booster."
  },
  {
    month: 24,
    emoji: "⚽",
    fetalSize: "2-Year Milestone (~12.5 kg)",
    weight: "11.5 - 13.5 kg",
    length: "85 - 90 cm",
    fetalDesc: "Kicks a ball, jumps with both feet, forms 2-3 word sentences, follows 2-step commands.",
    maternalDesc: "Introduction to potty training concepts, social play with peers.",
    scansAndTests: "Typhoid Conjugate Vaccine (TCV). 2-Year growth & speech assessment."
  },
  {
    month: 36,
    emoji: "🚴",
    fetalSize: "Preschooler Stage (~14.5 kg)",
    weight: "13.5 - 16.0 kg",
    length: "94 - 100 cm",
    fetalDesc: "Pedals a tricycle, dresses self with help, speaks in clear sentences, understands sharing.",
    maternalDesc: "Preparing child for preschool environment and independent habits.",
    scansAndTests: "Pre-school health assessment & vision check."
  }
];

const EXERCISE_DATA = [
  {
    id: "ex-butterfly",
    category: "mom",
    title: "Baddha Konasana (Butterfly Pose)",
    icon: "🦋",
    duration: "10 - 12 Mins",
    benefit: "Opens pelvic floor, improves inner thigh flexibility, and eases labor preparation.",
    steps: [
      "Sit upright on a yoga mat with soles of feet together.",
      "Hold feet gently with hands and let knees drop outward comfortably.",
      "Gently flutter thighs up and down like butterfly wings while taking slow deep breaths.",
      "Avoid pressing knees down forcefully."
    ]
  },
  {
    id: "ex-catcow",
    category: "mom",
    title: "Marjaryasana-Bitilasana (Cat-Cow Stretch)",
    icon: "🐈",
    duration: "5 - 8 Mins",
    benefit: "Relieves lower back pain, takes fetal weight pressure off spine, and aligns pelvis.",
    steps: [
      "Come on all fours with wrists under shoulders and knees under hips.",
      "Inhale: arch back gently down while looking forward (Cow Pose).",
      "Exhale: round spine upwards gently while letting head drop naturally (Cat Pose).",
      "Repeat 8-10 slow breath cycles."
    ]
  },
  {
    id: "ex-kegel",
    category: "mom",
    title: "Prenatal Pelvic Floor (Kegels)",
    icon: "🧘‍♀️",
    duration: "5 Mins Daily",
    benefit: "Strengthens pelvic diaphragm muscles, speeds postpartum recovery, and prevents incontinence.",
    steps: [
      "Contract pelvic muscles (as if attempting to stop urine flow).",
      "Hold contraction firmly for 3 to 5 seconds.",
      "Relax completely for 5 seconds.",
      "Perform 10-15 repetitions 2-3 times daily."
    ]
  },
  {
    id: "ex-anulom",
    category: "mom",
    title: "Anulom Vilom (Alternate Nostril Breathing)",
    icon: "🌬️",
    duration: "10 Mins",
    benefit: "Calms maternal anxiety, lowers blood pressure, and improves oxygen saturation for baby.",
    steps: [
      "Sit comfortably with spine straight and eyes closed.",
      "Close right nostril with thumb, inhale deeply through left nostril.",
      "Close left nostril with ring finger, exhale completely through right nostril.",
      "Inhale through right, exhale through left. Continue for 10 minutes."
    ]
  },
  {
    id: "ex-tummytime",
    category: "baby",
    title: "Tummy Time Explorer (0 - 6 Months)",
    icon: "🐢",
    duration: "3 - 5 Mins (2-3x/day)",
    benefit: "Strengthens infant neck, shoulder, and core muscles; prevents flat head syndrome (plagiocephaly).",
    steps: [
      "Place baby belly down on a clean, soft play mat when baby is awake and alert.",
      "Place bright colorful toys or a mirror 8-10 inches in front of baby.",
      "Get down on floor face-to-face to encourage eye contact and smiling.",
      "Always supervise closely and stop if baby gets tired."
    ]
  },
  {
    id: "ex-bicycle",
    category: "baby",
    title: "Bicycle Legs Gas Relief (0 - 6 Months)",
    icon: "🚲",
    duration: "3 - 5 Mins",
    benefit: "Eases trapped infant stomach gas, relieves abdominal colic, and improves hip mobility.",
    steps: [
      "Lay baby comfortably on back on a soft surface.",
      "Hold baby's lower legs gently at the ankles or knees.",
      "Gently move legs in a slow circular pedaling motion towards tummy.",
      "Gently press both knees toward tummy for 3 seconds to release gas."
    ]
  },
  {
    id: "ex-reach",
    category: "baby",
    title: "Reach & Grasp Arm Stretch (3 - 12 Months)",
    icon: "🧸",
    duration: "5 Mins Playtime",
    benefit: "Enhances hand-eye coordination, upper body reach, and fine motor grasping skill.",
    steps: [
      "Lay baby on back or supported sitting position.",
      "Hold a soft sound rattle slightly above baby's chest level.",
      "Encourage baby to reach out with alternate arms to grab and shake the toy.",
      "Cheer and clap when baby grasps the toy!"
    ]
  }
];

const NUTRITION_LEVEL_DATA = [
  {
    id: "iron",
    name: "Iron & Hemoglobin Booster",
    icon: "🥬",
    current: 70,
    target: "35 mg",
    colorClass: "iron",
    foods: "Spinach (Palak), Jaggery (Gur), Beetroot, Pomegranate, Rajma.",
    logActionText: "+ Log Iron Snack (+10 Stars)"
  },
  {
    id: "calcium",
    name: "Calcium & Bone Shield",
    icon: "🥛",
    current: 60,
    target: "1200 mg",
    colorClass: "calcium",
    foods: "Curd (Dahi), Paneer, Milk, Til (Sesame) seeds, Ragi.",
    logActionText: "+ Log Dairy/Ragi (+10 Stars)"
  },
  {
    id: "folic",
    name: "Folic Acid & Cell Growth",
    icon: "🥜",
    current: 85,
    target: "500 mcg",
    colorClass: "folic",
    foods: "Moong Sprouts, Dal, Methi leaves, Oranges, Peanuts.",
    logActionText: "+ Log Sprouts/Lentils (+10 Stars)"
  },
  {
    id: "protein",
    name: "Protein & Muscle Power",
    icon: "🥚",
    current: 50,
    target: "70 g",
    colorClass: "protein",
    foods: "Boiled Eggs, Chana, Paneer, Tofu, Moong Dal Khichdi.",
    logActionText: "+ Log Protein Meal (+10 Stars)"
  }
];

const IAP_VAX_SCHEDULE = [
  { id: "bcg", title: "BCG, OPV 0, Hep-B 1", timing: "At Birth", desc: "Tuberculosis, Polio & Hepatitis B birth doses" },
  { id: "dtp1", title: "DTP 1, IPV 1, Hib 1, Rota 1, PCV 1", timing: "6 Weeks", desc: "Diphtheria, Tetanus, Pertussis, Polio, Rotavirus & Pneumococcal" },
  { id: "dtp2", title: "DTP 2, IPV 2, Hib 2, Rota 2, PCV 2", timing: "10 Weeks", desc: "Second primary dose series" },
  { id: "dtp3", title: "DTP 3, IPV 3, Hib 3, Rota 3, PCV 3", timing: "14 Weeks", desc: "Third primary dose completion" },
  { id: "mr1", title: "MR 1 (Measles-Rubella) & Vit A", timing: "9 Months", desc: "Measles & Rubella protection + Vitamin A syrup" },
  { id: "hepa", title: "Hepatitis A 1", timing: "12 Months", desc: "Viral hepatitis A protection" },
  { id: "mmr1", title: "MMR 1, Varicella 1 & PCV Booster", timing: "15 Months", desc: "Measles, Mumps, Rubella & Chickenpox" },
  { id: "dtp_b1", title: "DTP Booster 1, IPV Booster", timing: "18 Months", desc: "Toddler booster doses" },
  { id: "typhoid", title: "Typhoid Conjugate Vaccine (TCV)", timing: "2 Years", desc: "Typhoid protection" }
];

const INDIAN_MYTHS_DATA = [
  {
    id: 1,
    category: "nutrition",
    badge: "Nutrition & Saffron",
    myth: "Drinking saffron (kesar) milk during pregnancy makes the baby fair-skinned.",
    factTitle: "Genetics Determines Skin Tone, Not Food",
    fact: "Scientific Fact: Skin pigmentation is strictly determined by melanin genetics inherited from both parents. Saffron is a safe aromatic spice with antioxidant properties in low amounts, but it has zero influence on fetal complexion.",
    source: "WHO & Indian Academy of Pediatrics Clinical Guidance"
  },
  {
    id: 2,
    category: "nutrition",
    badge: "Nutrition & Quantity",
    myth: "A pregnant mother must eat for two people, doubling her food portion size.",
    factTitle: "Quality Over Quantity (Need ~300 Extra Calories)",
    fact: "Scientific Fact: Overeating leads to excessive weight gain and increases the risk of gestational diabetes and preeclampsia. In the 2nd and 3rd trimesters, mothers only need ~300 to 450 extra nutrient-dense calories daily (e.g., a bowl of sprouts or curd with nuts).",
    source: "ICMR & National Institute of Nutrition (NIN) India"
  },
  {
    id: 3,
    category: "nutrition",
    badge: "Delivery Myth",
    myth: "Drinking pure ghee in the 9th month lubricates the birth canal for a smooth labor.",
    factTitle: "Ghee Enters Digestive Tract, Not Birth Canal",
    fact: "Scientific Fact: Ingested ghee is digested into fatty acids in the stomach. It never reaches or lubricates the uterus or vagina. Consuming excessive ghee causes severe heartburn, acute indigestion, and unnecessary weight gain.",
    source: "Federation of Obstetric and Gynaecological Societies of India (FOGSI)"
  },
  {
    id: 4,
    category: "nutrition",
    badge: "Fruit Restriction Myth",
    myth: "Eating papaya or pineapple during pregnancy immediately triggers miscarriage.",
    factTitle: "Ripe Fruits Are Safe & Rich in Vitamins",
    fact: "Scientific Fact: Ripe papaya (yellow/soft) and pineapple in culinary portions are rich in Vitamin C and fiber, making them completely safe. Only raw/unripe green papaya contains high papain/latex concentrations which can stimulate contractions.",
    source: "WHO Maternal Health Guidelines"
  },
  {
    id: 5,
    category: "massage",
    badge: "Massage & Touch",
    myth: "Vigorous dough (upton) massage and pinching the nose/head shapes the newborn's body.",
    factTitle: "Vigorous Massage Causes Tissue Injury & Infection",
    fact: "Scientific Fact: Newborn bones and skin are delicate. Forceful rubbing or dough compression causes skin friction abrasions, tissue bruising, and joint trauma. Gentle, light-touch oil strokes with coconut or sunflower oil are recommended.",
    source: "IAP Newborn Skin Care Guidelines"
  },
  {
    id: 6,
    category: "massage",
    badge: "Oil Cavity Myth",
    myth: "Putting mustard oil into a baby's ears, nose, and eyes cleans cavities and improves vision.",
    factTitle: "Never Put Oil in Eyes, Ears, or Nose",
    fact: "Scientific Fact: Instilling oil into body cavities can rupture the ear drum, cause chemical conjunctivitis in eyes, and lead to life-threatening lipoid pneumonia if oil drops enter the lungs.",
    source: "Indian Academy of Pediatrics (IAP) Red-Flag Protocols"
  },
  {
    id: 7,
    category: "newborn",
    badge: "Newborn Remedies",
    myth: "Giving Janam Ghutti, honey, or jaggery water right after birth purifies the infant gut.",
    factTitle: "Strict Exclusive Breastfeeding Needed (First 6 Months)",
    fact: "Scientific Fact: Honey contains Clostridium botulinum spores that cause fatal infant botulism. Unsterilized ghutti introduces gut infections. WHO and IAP mandate zero water, honey, or ghutti—only breast milk for 6 months.",
    source: "WHO & UNICEF Breastfeeding Policy"
  },
  {
    id: 8,
    category: "postpartum",
    badge: "Postpartum Restrictions",
    myth: "Postpartum mothers should avoid drinking water or cold foods for 40 days.",
    factTitle: "Dehydration Restricts Milk Supply & Causes Kidney Strain",
    fact: "Scientific Fact: Lactating mothers require 3 to 3.5 liters of water daily to maintain breast milk volume and prevent urinary tract infections (UTIs) and postpartum constipation.",
    source: "WHO Postpartum Maternal Care Standards"
  },
  {
    id: 9,
    category: "newborn",
    badge: "Colostrum Myth",
    myth: "Colostrum (thick yellow first milk) is stale, dirty milk and should be discarded.",
    factTitle: "Colostrum Is Baby's First Natural Vaccine",
    fact: "Scientific Fact: Colostrum is packed with secretory IgA antibodies, white blood cells, and growth factors that coat the infant gut lining against infections. It must be fed immediately within 1 hour of birth.",
    source: "WHO Early Initiation of Breastfeeding Protocol"
  },
  {
    id: 10,
    category: "newborn",
    badge: "Kajal / Kohl Myth",
    myth: "Applying homemade or commercial kajal in a baby's eyes protects from evil eye and sharpens eyesight.",
    factTitle: "Kajal Contains Lead & Causes Eye Damage",
    fact: "Scientific Fact: Laboratory testing shows kajal contains high levels of lead (galena), which gets absorbed into the bloodstream causing lead toxicity, tear duct blockages, and severe ocular bacterial infections.",
    source: "Central Drugs Standard Control Organization (CDSCO) & IAP Warning"
  }
];

const DIET_MATRIX_DATA = [
  {
    stage: "Trimester 1 (Weeks 1-12)",
    focusTag: "Folic Acid & Nausea Relief",
    foods: [
      "Folic Acid Rich: Spinach (Palak), Lentils (Dal), Chickpeas (Chana), Methi leaves.",
      "Nausea Relief: Ginger tea, lemon water, roasted chana, dry whole-wheat toast.",
      "Hydration: Coconut water, buttermilk (chaas), fresh lime water."
    ]
  },
  {
    stage: "Trimester 2 (Weeks 13-27)",
    focusTag: "Iron, Calcium & Growth",
    foods: [
      "Iron Focus: Ragi porridge, jaggery (gur) with roasted peanuts, beetroots, pomegranates.",
      "Calcium Rich: Curd (dahi), Paneer, Milk, Til (Sesame) seeds.",
      "Proteins: Moong dal sprouts, boiled eggs, fish (low mercury like Rohu/Katla), paneer."
    ]
  },
  {
    stage: "Trimester 3 & Lactation",
    focusTag: "Energy, Fiber & Galactagogues",
    foods: [
      "Natural Milk Boosters (Galactagogues): Cumin (Jeera) water, Methi seeds, Fennel (Saunf), Oats.",
      "Fiber & Energy: Whole grains, Dalia khichdi, soaked almonds & walnuts, dates.",
      "Hydration Target: 3.5 Liters of fluids daily."
    ]
  }
];

const SYMPTOM_CHECKER_DATA = {
  pregnancy: [
    {
      id: "preg-nausea",
      name: "Morning Sickness & Mild Nausea",
      severity: "mild",
      isRedFlag: false,
      desc: "Hormonal rise (hCG) causing morning or all-day nausea, common in weeks 4-14.",
      steps: [
        "Eat small, frequent meals every 2 hours rather than 3 large meals.",
        "Sip ginger tea, fresh mint lime water, or dry whole-wheat biscuits before getting out of bed.",
        "Avoid greasy, spicy, or heavy mustard oil preparations.",
        "Take prescribed Vitamin B6 supplements."
      ]
    },
    {
      id: "preg-bleeding",
      name: "Vaginal Bleeding or Spotting",
      severity: "critical",
      isRedFlag: true,
      desc: "Bright red or brownish bleeding at any stage of pregnancy.",
      steps: [
        "🚨 DO NOT WAIT: This is a medical emergency requiring immediate doctor evaluation.",
        "Rest in bed and call your obstetrician or hospital emergency right away.",
        "Avoid inserting anything vaginally or taking home remedies."
      ]
    },
    {
      id: "preg-headache-swelling",
      name: "Severe Headache, Vision Changes & Face Swelling",
      severity: "critical",
      isRedFlag: true,
      desc: "Sudden facial edema, blurring of vision, or upper abdominal pain after week 20.",
      steps: [
        "🚨 RED-FLAG: Possible sign of Preeclampsia (dangerously high blood pressure).",
        "Seek immediate hospital emergency admission for BP and urine protein testing."
      ]
    },
    {
      id: "preg-reduced-movement",
      name: "Decreased or Absent Fetal Movement",
      severity: "critical",
      isRedFlag: true,
      desc: "Feeling fewer than 10 baby kicks/movements over a 2-hour period after week 28.",
      steps: [
        "🚨 RED-FLAG: Fetal distress warning.",
        "Drink a glass of cold water or juice, lie on your left side, and count movements.",
        "If under 10 kicks in 2 hours, go to hospital labor room immediately for NST (Non-Stress Test)."
      ]
    },
    {
      id: "preg-leg-cramps",
      name: "Mild Leg & Muscle Cramps",
      severity: "mild",
      isRedFlag: false,
      desc: "Calf muscle spasms, especially at night due to weight shift or calcium-magnesium depletion.",
      steps: [
        "Gently flex your foot upwards (toes pointing toward knee).",
        "Ensure daily compliance with prescribed Calcium + Vitamin D3 tablets.",
        "Massage calf with warm sesame oil before bed and stay hydrated."
      ]
    }
  ],
  infant: [
    {
      id: "infant-colic",
      name: "Infant Colic & Gas Distress",
      severity: "mild",
      isRedFlag: false,
      desc: "Excessive, inconsolable crying in an otherwise healthy baby, often in the evening.",
      steps: [
        "Burp the baby thoroughly after every feeding (keep upright against shoulder for 10-15 mins).",
        "Perform gentle 'bicycle leg' movements during tummy time.",
        "Apply a warm towel compress (check temperature first) or mild diluted asafoetida (hing) paste around navel.",
        "Avoid giving any unverified syrups or ghutti."
      ]
    },
    {
      id: "infant-fever-high",
      name: "High Fever (>100.4°F / 38°C) in Newborns < 3 Months",
      severity: "critical",
      isRedFlag: true,
      desc: "Elevated temperature in young infants.",
      steps: [
        "🚨 CRITICAL RED-FLAG: Any fever in a baby under 3 months is a pediatric emergency.",
        "Do NOT self-medicate with syrups. See a pediatrician immediately to rule out sepsis or infection."
      ]
    },
    {
      id: "infant-breathing",
      name: "Rapid Breathing, Chest Indrawing or Grunting",
      severity: "critical",
      isRedFlag: true,
      desc: "Baby breathing fast (>60 breaths/min), ribs pulling in deeply, or bluish lips.",
      steps: [
        "🚨 CRITICAL EMERGENCY: Sign of severe respiratory distress or pneumonia.",
        "Transport baby to the nearest pediatric ICU / hospital immediately."
      ]
    },
    {
      id: "infant-diaper-rash",
      name: "Mild Diaper Rash & Redness",
      severity: "mild",
      isRedFlag: false,
      desc: "Red skin irritation in the groin area due to moisture and friction.",
      steps: [
        "Change wet/soiled diapers immediately.",
        "Clean gently with plain warm water; avoid alcohol-based wet wipes.",
        "Allow skin to air dry completely ('diaper-free time').",
        "Apply zinc oxide rash barrier cream."
      ]
    }
  ]
};

// --- 2. APP STATE MANAGEMENT & LOCAL STORAGE ---

const DEFAULT_STATE = {
  mode: "pregnancy",
  userName: "Mother's Care",
  timelineIndex: 20,
  waterGlasses: 0,
  completedVax: {},
  activeTab: "timeline",
  mythFilter: "all",
  exerciseFilter: "mom",
  points: 50,
  streak: 1,
  completedExercises: {},
  nutrientLevels: {
    iron: 70,
    calcium: 60,
    folic: 85,
    protein: 50
  }
};

let appState = { ...DEFAULT_STATE };

function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem("matriCare_state");
    if (saved) {
      appState = { ...DEFAULT_STATE, ...JSON.parse(saved) };
    }
  } catch (err) {
    console.warn("LocalStorage unavailable, using default state", err);
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem("matriCare_state", JSON.stringify(appState));
  } catch (err) {
    console.warn("Could not save to LocalStorage", err);
  }
}

// --- 3. UI RENDERING ENGINE ---

function initApp() {
  loadStateFromStorage();
  setupEventListeners();
  renderAllComponents();
}

function renderAllComponents() {
  updateHeaderStats();
  renderTabVisibility();
  renderTimeline();
  renderChecklist();
  renderExercises();
  renderNutritionalTracker();
  renderMyths();
  renderSymptoms();
  renderHydration();
}

function updateHeaderStats() {
  const modeTextEl = document.getElementById("mode-text");
  const modeIconEl = document.getElementById("mode-icon");
  const userDisplayEl = document.getElementById("user-display-name");
  const streakEl = document.getElementById("streak-count-display");
  const pointsEl = document.getElementById("points-count-display");

  if (appState.mode === "pregnancy") {
    modeTextEl.textContent = "Pregnancy Mode";
    modeIconEl.textContent = "🤰";
  } else {
    modeTextEl.textContent = "Toddler Care Mode";
    modeIconEl.textContent = "👶";
  }

  userDisplayEl.textContent = appState.userName || "Mother's Care";
  streakEl.textContent = appState.streak || 1;
  pointsEl.textContent = appState.points || 50;
}

function renderTabVisibility() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === appState.activeTab);
  });

  document.querySelectorAll(".mobile-nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === appState.activeTab);
  });

  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `tab-${appState.activeTab}`);
  });
}

// --- 4. TIMELINE ENGINE ---

function renderTimeline() {
  const slider = document.getElementById("timeline-slider");
  const minText = document.getElementById("slider-min-text");
  const currentText = document.getElementById("slider-current-text");
  const maxText = document.getElementById("slider-max-text");
  const heading = document.getElementById("tracker-heading");
  const subheading = document.getElementById("tracker-subheading");
  const stageBadge = document.getElementById("current-stage-badge");

  if (appState.mode === "pregnancy") {
    slider.min = "1";
    slider.max = "40";
    minText.textContent = "Week 1";
    maxText.textContent = "Week 40";
    heading.textContent = "🤰 Fetal Development & Maternal Care";
    subheading.textContent = "Track week-by-week fetal growth, maternal body changes, and clinical scans";
    
    let weekVal = parseInt(appState.timelineIndex) || 20;
    if (weekVal > 40) weekVal = 20;
    slider.value = weekVal;

    currentText.textContent = `Week ${weekVal}`;
    stageBadge.textContent = weekVal <= 13 ? "Trimester 1" : weekVal <= 27 ? "Trimester 2" : "Trimester 3";

    const item = PREGNANCY_DATA.reduce((prev, curr) => 
      Math.abs(curr.week - weekVal) < Math.abs(prev.week - weekVal) ? curr : prev
    );

    document.getElementById("fetal-emoji").textContent = item.emoji;
    document.getElementById("fetal-size-title").textContent = item.fetalSize;
    document.getElementById("fetal-weight").textContent = `Weight: ${item.weight}`;
    document.getElementById("fetal-length").textContent = `Length: ${item.length}`;
    document.getElementById("fetal-desc-text").textContent = item.fetalDesc;
    document.getElementById("maternal-body-text").textContent = item.maternalDesc;
    document.getElementById("medical-scans-text").textContent = item.scansAndTests;

  } else {
    // Toddler Mode
    slider.min = "1";
    slider.max = "36";
    minText.textContent = "Month 1";
    maxText.textContent = "Month 36";
    heading.textContent = "👶 Toddler Growth & Developmental Milestones";
    subheading.textContent = "Track month-by-month motor skills, language, and WHO height/weight markers";

    let monthVal = parseInt(appState.timelineIndex) || 6;
    if (monthVal > 36) monthVal = 6;
    slider.value = monthVal;

    currentText.textContent = `Month ${monthVal}`;
    stageBadge.textContent = monthVal <= 6 ? "Infant (0-6m)" : monthVal <= 12 ? "Weaning (6-12m)" : "Toddler (1-3y)";

    const item = TODDLER_DATA.reduce((prev, curr) => 
      Math.abs(curr.month - monthVal) < Math.abs(prev.month - monthVal) ? curr : prev
    );

    document.getElementById("fetal-emoji").textContent = item.emoji;
    document.getElementById("fetal-size-title").textContent = item.fetalSize;
    document.getElementById("fetal-weight").textContent = `Weight: ${item.weight}`;
    document.getElementById("fetal-length").textContent = `Height: ${item.length}`;
    document.getElementById("fetal-desc-text").textContent = item.fetalDesc;
    document.getElementById("maternal-body-text").textContent = item.maternalDesc;
    document.getElementById("medical-scans-text").textContent = item.scansAndTests;
  }
}

// --- 5. EXERCISES & YOGA ENGINE ---

function renderExercises() {
  const container = document.getElementById("exercise-cards-container");
  container.innerHTML = "";

  const filter = appState.exerciseFilter || "mom";
  const filteredEx = EXERCISE_DATA.filter(ex => ex.category === filter);

  filteredEx.forEach(item => {
    const isDone = appState.completedExercises[item.id] || false;

    const card = document.createElement("div");
    card.className = `exercise-card ${item.category}`;
    
    const stepsHtml = item.steps.map(s => `<li>✔ ${s}</li>`).join("");

    card.innerHTML = `
      <div class="exercise-card-header">
        <div class="exercise-icon-box">${item.icon}</div>
        <div>
          <h3 class="exercise-title">${item.title}</h3>
          <div class="exercise-meta">
            <span>⏱️ ${item.duration}</span>
            <span>⭐ +10 Pts</span>
          </div>
        </div>
      </div>
      <p style="font-size: 13px; color: var(--slate-body); line-height: 1.4;">${item.benefit}</p>
      <ul class="exercise-steps-list">
        ${stepsHtml}
      </ul>
      <button class="btn-complete-exercise ${isDone ? 'done' : ''}" data-id="${item.id}">
        ${isDone ? '✨ Completed Today!' : '⭐ Mark Done (+10 Pts)'}
      </button>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll(".btn-complete-exercise").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      if (!appState.completedExercises[id]) {
        appState.completedExercises[id] = true;
        appState.points += 10;
        saveStateToStorage();
        updateHeaderStats();
        renderExercises();
        triggerCelebration("Exercise Milestone!", "Awesome job! You completed your workout and earned +10 Health Stars!");
      }
    });
  });
}

// --- 6. NUTRITIONAL LEVEL TRACKER ENGINE ---

function renderNutritionalTracker() {
  const container = document.getElementById("nutrient-interactive-container");
  container.innerHTML = "";

  let totalPercent = 0;

  NUTRITION_LEVEL_DATA.forEach(item => {
    const val = appState.nutrientLevels[item.id] || item.current;
    totalPercent += val;

    const card = document.createElement("div");
    card.className = "nutrient-log-item";
    card.innerHTML = `
      <div class="nutrient-header">
        <div class="nutrient-name">
          <span>${item.icon}</span> ${item.name}
        </div>
        <span style="font-family: var(--font-fun); font-size: 13px; font-weight: 700; color: var(--sage-green);">${val}%</span>
      </div>

      <div class="nutrient-progress-bar">
        <div class="nutrient-fill ${item.colorClass}" style="width: ${val}%;"></div>
      </div>

      <p style="font-size: 12px; color: var(--slate-muted);"><strong>Indian Foods:</strong> ${item.foods}</p>

      <button class="btn-log-food" data-id="${item.id}">
        ${item.logActionText}
      </button>
    `;
    container.appendChild(card);
  });

  const overallAvg = Math.min(100, Math.round(totalPercent / NUTRITION_LEVEL_DATA.length));
  document.getElementById("overall-fuel-percentage").textContent = `${overallAvg}%`;
  document.getElementById("overall-progress-fill").style.width = `${overallAvg}%`;

  container.querySelectorAll(".btn-log-food").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      if (appState.nutrientLevels[id] < 100) {
        appState.nutrientLevels[id] = Math.min(100, appState.nutrientLevels[id] + 15);
        appState.points += 10;
        saveStateToStorage();
        updateHeaderStats();
        renderNutritionalTracker();
        triggerCelebration("Nutrition Level Up! 🥗", "Great choice! You boosted your nutrient level and earned +10 Stars!");
      }
    });
  });
}

// --- 7. IAP CHECKLIST ---

function renderChecklist() {
  const container = document.getElementById("vax-checklist-container");
  container.innerHTML = "";

  IAP_VAX_SCHEDULE.forEach(item => {
    const isChecked = appState.completedVax[item.id] || false;

    const div = document.createElement("div");
    div.className = `vax-item ${isChecked ? 'completed' : ''}`;
    div.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: var(--bg-warm); border-radius: var(--radius-sm); border: 2px solid #E2E8F0;";
    div.innerHTML = `
      <div class="vax-details">
        <h5 style="font-family: var(--font-fun); font-size: 14px; color: var(--slate-dark);">${item.title}</h5>
        <p style="font-size: 12px; color: var(--slate-muted);"><strong>Timing:</strong> ${item.timing} — ${item.desc}</p>
      </div>
      <input type="checkbox" class="vax-checkbox" data-id="${item.id}" ${isChecked ? 'checked' : ''} style="width: 20px; height: 20px; accent-color: var(--sage-green);">
    `;

    container.appendChild(div);
  });

  container.querySelectorAll(".vax-checkbox").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const id = e.target.dataset.id;
      appState.completedVax[id] = e.target.checked;
      if (e.target.checked) appState.points += 15;
      saveStateToStorage();
      updateHeaderStats();
      renderChecklist();
    });
  });
}

// --- 8. SCIENTIFIC MYTH-BUSTING MODULE ---

function renderMyths() {
  const container = document.getElementById("myth-cards-container");
  container.innerHTML = "";

  const filter = appState.mythFilter;
  const filteredMyths = filter === "all" 
    ? INDIAN_MYTHS_DATA 
    : INDIAN_MYTHS_DATA.filter(m => m.category === filter);

  filteredMyths.forEach(item => {
    const card = document.createElement("div");
    card.className = "myth-card";
    card.innerHTML = `
      <div class="myth-header">
        <span class="myth-badge ${item.category}">${item.badge}</span>
        <div class="myth-statement">
          <span>❌</span> <div><strong>MYTH:</strong> "${item.myth}"</div>
        </div>
      </div>
      <div class="fact-body">
        <div class="fact-title">
          <span>✅</span> ${item.factTitle}
        </div>
        <p class="fact-text">${item.fact}</p>
        <div class="medical-source" style="font-size: 11px; color: var(--slate-muted); font-weight: 600; margin-top: auto; padding-top: 8px; border-top: 1px dashed var(--slate-border);">
          <span>🩺</span> ${item.source}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// --- 9. SYMPTOM CHECKER ---

function renderSymptoms() {
  const categorySelect = document.getElementById("symptom-category");
  const symptomSelect = document.getElementById("symptom-select");

  const currentCat = categorySelect.value || "pregnancy";
  const list = SYMPTOM_CHECKER_DATA[currentCat] || [];

  symptomSelect.innerHTML = "";
  list.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item.id;
    opt.textContent = `${item.isRedFlag ? '🚨 [RED-FLAG] ' : '🟢 '} ${item.name}`;
    symptomSelect.appendChild(opt);
  });

  updateSymptomDisplay();
}

function updateSymptomDisplay() {
  const categorySelect = document.getElementById("symptom-category");
  const symptomSelect = document.getElementById("symptom-select");

  const currentCat = categorySelect.value || "pregnancy";
  const list = SYMPTOM_CHECKER_DATA[currentCat] || [];
  const selectedId = symptomSelect.value;

  const item = list.find(s => s.id === selectedId) || list[0];
  if (!item) return;

  const redFlagAlert = document.getElementById("red-flag-alert");
  const redFlagText = document.getElementById("red-flag-text");
  const titleResult = document.getElementById("symptom-title-result");
  const severityTag = document.getElementById("symptom-severity-tag");
  const descResult = document.getElementById("symptom-description");
  const careStepsContainer = document.getElementById("care-steps-container");

  if (item.isRedFlag) {
    redFlagAlert.classList.add("active");
    redFlagText.textContent = `CRITICAL WARNING: "${item.name}" is a potential emergency. ${item.desc}`;
    severityTag.style.background = "var(--red-flag-bg)";
    severityTag.style.color = "var(--red-flag)";
    severityTag.textContent = "🚨 SEVERE / URGENT MEDICAL ATTENTION REQUIRED";
  } else {
    redFlagAlert.classList.remove("active");
    severityTag.style.background = "var(--sage-light)";
    severityTag.style.color = "var(--sage-green)";
    severityTag.textContent = "🟢 Mild / Vetted Home Care Advice";
  }

  titleResult.textContent = item.name;
  descResult.textContent = item.desc;

  careStepsContainer.innerHTML = item.steps.map(step => `
    <div class="care-step-item" style="display: flex; gap: 8px; font-size: 13px; background: var(--sage-light); padding: 10px 14px; border-radius: var(--radius-sm); border-left: 4px solid var(--sage-green);">
      <span style="color: var(--sage-green); font-weight: bold;">✔</span>
      <div>${step}</div>
    </div>
  `).join("");
}

// --- 10. HYDRATION TRACKER ---

function renderHydration() {
  const countDisplay = document.getElementById("water-count-display");
  const glassesContainer = document.getElementById("water-glasses-container");

  const count = appState.waterGlasses || 0;
  countDisplay.textContent = `${count} / 8 Glasses (${(count * 0.35).toFixed(1)} Liters)`;

  glassesContainer.innerHTML = "";
  for (let i = 1; i <= 8; i++) {
    const btn = document.createElement("button");
    btn.className = `water-glass-btn ${i <= count ? 'filled' : ''}`;
    btn.textContent = i <= count ? "💧" : "🥛";
    btn.title = `Glass ${i}`;
    btn.addEventListener("click", () => {
      appState.waterGlasses = i === count ? i - 1 : i;
      if (appState.waterGlasses === 8) {
        appState.points += 20;
        triggerCelebration("Hydration Master! 💧", "Awesome! You reached your daily 8-glass water target!");
      }
      saveStateToStorage();
      updateHeaderStats();
      renderHydration();
    });
    glassesContainer.appendChild(btn);
  }
}

// --- 11. CELEBRATION POPUP SYSTEM ---

function triggerCelebration(title, desc) {
  const popup = document.getElementById("celebration-popup");
  document.getElementById("celebration-title").textContent = title;
  document.getElementById("celebration-desc").textContent = desc;
  popup.classList.add("active");
}

// --- 12. EVENT LISTENERS ---

function setupEventListeners() {
  // Navigation Tabs (Top Nav & Mobile Bottom Nav & Hero Quick Nav)
  document.querySelectorAll(".tab-btn, .mobile-nav-item, .quick-nav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const tab = e.currentTarget.dataset.tab;
      appState.activeTab = tab;
      saveStateToStorage();
      renderTabVisibility();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Mode Toggle Button
  document.getElementById("mode-toggle-btn").addEventListener("click", () => {
    appState.mode = appState.mode === "pregnancy" ? "toddler" : "pregnancy";
    appState.timelineIndex = appState.mode === "pregnancy" ? 20 : 6;
    saveStateToStorage();
    updateHeaderStats();
    renderTimeline();
  });

  // Timeline Slider
  document.getElementById("timeline-slider").addEventListener("input", (e) => {
    appState.timelineIndex = parseInt(e.target.value);
    saveStateToStorage();
    renderTimeline();
  });

  // Exercise Sub-filter
  document.getElementById("filter-ex-mom").addEventListener("click", (e) => {
    document.getElementById("filter-ex-baby").classList.remove("active");
    e.target.classList.add("active");
    appState.exerciseFilter = "mom";
    saveStateToStorage();
    renderExercises();
  });
  document.getElementById("filter-ex-baby").addEventListener("click", (e) => {
    document.getElementById("filter-ex-mom").classList.remove("active");
    e.target.classList.add("active");
    appState.exerciseFilter = "baby";
    saveStateToStorage();
    renderExercises();
  });

  // Myth Filters
  document.querySelectorAll(".filter-chip").forEach(chip => {
    if (chip.dataset.filter) {
      chip.addEventListener("click", (e) => {
        document.querySelectorAll(".myth-filter-bar .filter-chip").forEach(c => c.classList.remove("active"));
        e.target.classList.add("active");
        appState.mythFilter = e.target.dataset.filter;
        saveStateToStorage();
        renderMyths();
      });
    }
  });

  // Symptom Checker
  document.getElementById("symptom-category").addEventListener("change", renderSymptoms);
  document.getElementById("symptom-select").addEventListener("change", updateSymptomDisplay);

  // Hydration Reset
  document.getElementById("reset-water-btn").addEventListener("click", () => {
    appState.waterGlasses = 0;
    saveStateToStorage();
    renderHydration();
  });

  // Close celebration
  document.getElementById("close-celebration-btn").addEventListener("click", () => {
    document.getElementById("celebration-popup").classList.remove("active");
  });

  // Profile Modal
  const modal = document.getElementById("profile-modal");
  document.getElementById("profile-pill-btn").addEventListener("click", openProfileModal);
  document.getElementById("close-modal-btn").addEventListener("click", () => modal.classList.remove("active"));

  document.getElementById("profile-form").addEventListener("submit", (e) => {
    e.preventDefault();
    appState.userName = document.getElementById("profile-name").value || "Mother's Care";
    appState.mode = document.getElementById("profile-mode").value;
    saveStateToStorage();
    modal.classList.remove("active");
    renderAllComponents();
  });

  // Notification Button
  document.getElementById("enable-notifications-btn").addEventListener("click", requestNotificationPermission);
}

function openProfileModal() {
  const modal = document.getElementById("profile-modal");
  document.getElementById("profile-name").value = appState.userName || "";
  document.getElementById("profile-mode").value = appState.mode || "pregnancy";
  modal.classList.add("active");
}

function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("Browser Notifications are not supported on your device/browser.");
    return;
  }

  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      alert("✅ Reminders enabled! You will get daily notifications while MatriCare is open.");
      new Notification("MatriCare Enabled 🌸", {
        body: "Daily prenatal care, hydration & exercise reminders active!",
        icon: "🌸"
      });
    }
  });
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", initApp);
