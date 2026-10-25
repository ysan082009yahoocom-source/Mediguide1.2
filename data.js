const appData = {
  en: [
    {
      id: "severe-bleeding",
      title: "Severe Bleeding",
      icon: "🩸",
      keywords: ["bleeding", "blood", "wound", "cut", "hemorrhage", "gash", "laceration"],
      summary: "Control heavy blood loss from a wound using pressure and dressings.",
      callEmergency: [
        "Blood is spurting or flowing steadily from the wound",
        "Bleeding does not stop after 10 minutes of firm pressure",
        "The wound is large, deep, or caused by a major injury",
        "The person shows signs of shock (pale, clammy, confused, weak)"
      ],
      symptoms: [
        "Steady or spurting flow of blood",
        "Blood soaking through clothing or bandages",
        "Pale, cool, clammy skin",
        "Dizziness, weakness, or confusion",
        "Rapid heart rate or shallow breathing"
      ],
      steps: [
        "Put on disposable gloves if available and expose the wound.",
        "Apply firm, direct pressure with a sterile gauze pad or clean cloth.",
        "If blood soaks through, add more gauze on top — do not remove the first layer.",
        "If the wound is on an arm or leg and no fracture is suspected, raise it above heart level.",
        "Secure the dressing firmly with a bandage once bleeding is controlled.",
        "Keep the person warm, still, and calm, and monitor for signs of shock.",
        "Continue firm pressure until emergency help arrives if bleeding is severe."
      ],
      medKit: ["Disposable gloves", "Sterile gauze pads", "Roller bandage", "Adhesive tape", "Trauma dressing", "Antiseptic wipes", "Emergency blanket"],
      precautions: [
        "Do not remove an embedded object — pack around it and apply pressure beside it.",
        "Do not remove the first blood-soaked dressing; add layers on top.",
        "Do not use a tourniquet unless you are trained and bleeding is life-threatening."
      ],
      uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
    },
    {
      id: "burns",
      title: "Burns & Scalds",
      icon: "🔥",
      keywords: ["burn", "scald", "fire", "heat", "blister", "hot water", "steam"],
      summary: "Cool the burn, protect the skin, and prevent infection.",
      callEmergency: [
        "The burn is large, deep, or affects the face, hands, feet, joints, or genitals",
        "The burn is chemical or electrical",
        "The person has difficulty breathing or inhaled smoke",
        "The burn is on a child, infant, or older adult",
        "Signs of shock are present"
      ],
      symptoms: [
        "Red, painful skin (superficial burn)",
        "Blisters or wet, shiny skin (partial-thickness burn)",
        "White, charred, or numb skin (deep burn)",
        "Swelling around the burned area",
        "Difficulty breathing if smoke was inhaled"
      ],
      steps: [
        "Move the person away from the source of the burn.",
        "Cool the burn under cool (not cold) running water for 10–20 minutes.",
        "Remove rings, watches, or tight clothing near the burn before swelling starts.",
        "Cover the burn loosely with a sterile non-stick dressing or clean cling film.",
        "Protect the person from cold and monitor for shock.",
        "Do not break blisters — leave them intact to reduce infection risk."
      ],
      medKit: ["Burn gel / hydrogel dressing", "Sterile non-stick dressings", "Cling film", "Cool running water", "Disposable gloves", "Emergency blanket"],
      precautions: [
        "Do not apply ice, butter, toothpaste, or creams to a burn.",
        "Do not break blisters or remove clothing stuck to the burn.",
        "Do not use adhesive dressings directly on burned skin."
      ],
      uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
    },
    {
      id: "choking-adult",
      title: "Choking (Adult & Child)",
      icon: "🤢",
      keywords: ["choking", "airway", "blocked", "heimlich", "abdominal thrust", "cannot breathe"],
      summary: "Clear a blocked airway with back blows and abdominal thrusts.",
      callEmergency: [
        "The person becomes unresponsive",
        "You cannot clear the blockage after several attempts",
        "The person stops breathing"
      ],
      symptoms: [
        "Clutching the throat with one or both hands",
        "Inability to speak, cough, or breathe",
        "Noisy or silent breathing attempts",
        "Face turning red, then pale or blue",
        "Panic or loss of consciousness"
      ],
      steps: [
        "Ask: “Are you choking?” If they can cough or speak, encourage coughing.",
        "If they cannot cough or breathe, lean them forward and give up to 5 sharp back blows between the shoulder blades.",
        "If unsuccessful, stand behind them and give up to 5 abdominal thrusts (Heimlich maneuver).",
        "Alternate 5 back blows and 5 abdominal thrusts until the object is expelled.",
        "If the person becomes unresponsive, start CPR and call emergency services.",
        "After the object is expelled, keep the person still and seek medical evaluation."
      ],
      medKit: ["CPR face shield", "Gloves", "Phone to call emergency services"],
      precautions: [
        "Do not perform abdominal thrusts on a pregnant person — use chest thrusts.",
        "Do not put your fingers in the mouth to blindly sweep for an object.",
        "Do not ignore a partial blockage — monitor closely and seek help if it worsens."
      ],
      uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
    },
    {
      id: "cpr",
      title: "CPR / Cardiac Arrest",
      icon: "❤️",
      keywords: ["cpr", "cardiac", "heart", "arrest", "unresponsive", "not breathing", "chest compressions"],
      summary: "Keep blood flowing with chest compressions and rescue breaths.",
      callEmergency: [
        "The person is unresponsive and not breathing normally — call immediately before starting CPR"
      ],
      symptoms: [
        "Sudden collapse",
        "Unresponsiveness to voice or touch",
        "No breathing or only gasping (agonal breathing)",
        "No pulse or signs of circulation"
      ],
      steps: [
        "Check the scene for safety, then tap and shout to check responsiveness.",
        "Call emergency services and get an AED if available.",
        "Place the heel of one hand on the center of the chest; place the other hand on top and interlock fingers.",
        "Push hard and fast — at least 5 cm (2 inches) deep at 100–120 compressions per minute.",
        "Allow the chest to fully recoil between compressions.",
        "If trained, give 2 rescue breaths after every 30 compressions; otherwise continue hands-only CPR.",
        "Use an AED as soon as it arrives and follow its voice prompts.",
        "Continue until emergency help arrives or the person starts breathing normally."
      ],
      medKit: ["CPR face shield", "Pocket mask", "AED (if available)", "Gloves"],
      precautions: [
        "Do not stop compressions except to use an AED or if the person clearly recovers.",
        "Do not delay compressions to check for a pulse for more than 10 seconds.",
        "Do not perform rescue breaths if untrained or unwilling — hands-only CPR still saves lives."
      ],
      uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
    },
    {
      id: "Stomach Ache",
      title: "Stomach Ache/Pain",
      icon: "🤮",
      keywords: ["stomach ache", "belly pain", "abdominal cramps", "indigestion", "cramping", "heartburn", "bloating"],
      summary: "Rest comfortably, stay hydrated, and monitor for severe symptoms that require emergency medical care.",
      callEmergency: [
        "The pain is sudden, severe, and unbearable.",
        "The abdomen is rigid, hard, or highly sensitive to the touch.",
        "Accompanied by persistent vomiting, vomiting blood, or bloody/black stools.",
        "Accompanied by high fever, dizziness, fainting, or difficulty breathing."
      ],
      symptoms: [
        "Dull ache, sharp pain, or burning sensation in the abdomen",
        "Abdominal cramping or bloating",
        "Nausea, vomiting, or loss of appetite",
        "Gas, indigestion, or changes in bowel movements"
      ],
      steps: [
        "Have the person rest in a comfortable position, such as lying down with knees bent or slightly elevated.",
        "Loosen tight clothing around the waist and abdomen.",
        "Apply a warm compress or heating pad to the abdomen for 15-20 minutes to soothe cramps.",
        "Encourage slow sips of water, clear broths, or herbal teas like peppermint or ginger.",
"Avoid giving solid foods, caffeine, alcohol, carbonated drinks, or dairy until the pain subsides.",
"Monitor for any worsening signs or red flag symptoms that may indicate a surgical emergency like appendicitis."
],
medKit: ["Heating pad or warm compress", "Antacids (for indigestion)", "Electrolyte solutions", "Ginger or peppermint tea bags"],
precautions: [
"Do not give aspirin, ibuprofen, or other NSAIDs without a doctor's advice, as they can irritate the stomach lining.",
"Do not give any laxatives or enemas, especially if appendicitis is suspected.",
"Do not force the person to eat if they are experiencing nausea or active pain.",
"Do not ignore localized pain that migrates to the lower right side of the abdomen."
],
     uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
},
{
id: "fractures",
title: "Fractures & Sprains",
icon: "🦴",
keywords: ["fracture", "broken bone", "sprain", "strain", "dislocation", "injury", "swelling"],
summary: "Immobilize the injured area and reduce pain and swelling.",
callEmergency: [
"The bone is visible or piercing through the skin",
"The limb is deformed, numb, cold, or turning blue",
"The injury involves the head, neck, spine, or pelvis",
"The person cannot move or bear weight on the limb"
],
symptoms: [
"Pain that worsens with movement",
"Swelling, bruising, or deformity",
"A snap or grinding sound at the time of injury",
"Inability to move or bear weight",
"Numbness or tingling below the injury"
],
steps: [
"Keep the person still and support the injured area in the position found.",
"Apply a cold pack wrapped in cloth for up to 20 minutes to reduce swelling.",
"For a suspected fracture, immobilize the joint above and below the injury with a splint or sling.",
"For a sprain or strain, remember RICE: Rest, Ice, Compression, Elevation.",
"Check circulation below the injury — warmth, color, and sensation.",
"Treat for shock and seek medical help."
],
medKit: ["Cold pack", "Triangular bandage", "Elastic bandage", "Splint / rigid support", "Adhesive tape", "Pain relief (if appropriate)"],
precautions: [
"Do not try to straighten a deformed limb or push a bone back in.",
"Do not move a person with a suspected spine injury unless they are in danger.",
"Do not apply ice directly to bare skin."
],
     uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
},
{
id: "anaphylaxis",
title: "Allergic Reaction (Anaphylaxis)",
icon: "🐝",
keywords: ["allergy", "anaphylaxis", "epinephrine", "epipen", "bee sting", "swelling", "hives"],
summary: "Recognize a severe allergic reaction and use an epinephrine auto-injector.",
callEmergency: [
"Any signs of anaphylaxis are present — call immediately even if an auto-injector is used"
],
symptoms: [
"Swelling of the face, lips, tongue, or throat",
"Difficulty breathing, wheezing, or tight chest",
"Hives, redness, or widespread itching",
"Dizziness, weak pulse, or fainting",
"Nausea, vomiting, or stomach cramps",
"Feeling of impending doom"
],
steps: [
"Call emergency services immediately.",
"Ask if the person carries an epinephrine auto-injector (e.g., EpiPen).",
"Help them use it: remove the safety cap and inject firmly into the outer mid-thigh.",
"Have the person lie flat with legs raised — or sit up if breathing is difficult.",
"If symptoms persist after 5 minutes and a second auto-injector is available, use it.",
"Monitor breathing and start CPR if the person becomes unresponsive.",
"Keep them lying down until emergency help arrives, even if they feel better."
],
medKit: ["Epinephrine auto-injector (if prescribed)", "Antihistamine (mild reactions only)", "CPR face shield", "Gloves"],
precautions: [
"Do not wait to see if symptoms improve — anaphylaxis can worsen rapidly.",
"Do not let the person stand or walk around after an injection.",
"Do not use another person's auto-injector unless trained and authorized."
],
     uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
},
{
id: "seizures",
title: "Seizures",
icon: "⚡",
keywords: ["seizure", "convulsion", "fits", "epilepsy", "shaking", "unconscious"],
summary: "Protect the person from injury while the seizure runs its course.",
callEmergency: [
"The seizure lasts longer than 5 minutes",
"A second seizure follows immediately",
"The person is injured, pregnant, or has diabetes",
"It is the person's first seizure",
"The person does not wake or breathe normally afterward"
],
symptoms: [
"Sudden collapse or loss of awareness",
"Jerking or stiffening of the body",
"Eyes rolling upward",
"Foaming at the mouth or tongue biting",
"Confusion or sleepiness after the seizure"
],
steps: [
"Note the time the seizure starts.",
"Protect the head with something soft and clear away nearby objects.",
"Loosen tight clothing around the neck.",
"Gently roll the person onto their side when jerking stops to keep the airway clear.",
"Stay with them until they are fully alert.",
"Reassure them and check for injuries when the seizure ends."
],
medKit: ["Soft padding", "Emergency blanket", "Gloves", "Phone to call emergency services"],
precautions: [
"Do not hold the person down or try to stop their movements.",
"Do not put anything in their mouth.",
"Do not offer food or drink until they are fully alert."
],
     uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
},
{
id: "heat-stroke",
title: "Heat Exhaustion & Heat Stroke",
icon: "☀️",
keywords: ["heat", "heat stroke", "heat exhaustion", "overheating", "dehydration", "hot weather"],
summary: "Cool the person quickly and replace fluids if conscious.",
callEmergency: [
"The person is confused, agitated, or unconscious",
"Body temperature is very high",
"They stop sweating and the skin feels hot and dry",
"Vomiting prevents fluid intake",
"Symptoms do not improve within 30 minutes"
],
symptoms: [
"Heavy sweating, weakness, or dizziness",
"Headache, nausea, or muscle cramps",
"Hot, red, dry, or damp skin",
"Rapid, strong pulse",
"Confusion, slurred speech, or loss of consciousness"
],
steps: [
"Move the person to a cool, shaded place.",
"Remove excess clothing.",
"Cool rapidly: spray or sponge with cool water and fan them.",
"Apply cold packs to the neck, armpits, and groin.",
"If alert and not vomiting, give small sips of water or a sports drink.",
"Monitor closely — if confusion or unconsciousness occurs, call emergency services."
],
medKit: ["Cold pack", "Water / oral rehydration salts", "Cool cloth or spray bottle", "Emergency blanket (for shade)", "Thermometer"],
precautions: [
"Do not give fluids to someone who is confused or unconscious.",
"Do not use ice-cold water immersion unless trained — cool gradually.",
"Do not leave the person alone."
],
     uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
},
{
id: "hypothermia",
title: "Hypothermia",
icon: "❄️",
keywords: ["cold", "hypothermia", "freezing", "shivering", "low temperature", "frostbite"],
summary: "Warm the person gradually and prevent further heat loss.",
callEmergency: [
"Shivering stops but the person remains cold",
"The person is confused, drowsy, or unconscious",
"Breathing is slow or shallow",
"Body temperature is below 35°C (95°F)"
],
symptoms: [
"Shivering (which may stop in severe cases)",
"Cold, pale, or blue-gray skin",
"Slurred speech or confusion",
"Drowsiness or exhaustion",
"Slow, shallow breathing"
],
steps: [
"Move the person out of the cold and remove wet clothing.",
"Wrap them in blankets, focusing on the head and torso first.",
"Give warm, sweet, non-alcoholic drinks if they are alert and can swallow.",
"Apply warm (not hot) packs to the chest, neck, and groin.",
"Handle the person gently to avoid triggering heart rhythm problems.",
"Monitor breathing and start CPR if they become unresponsive and are not breathing normally."
],
medKit: ["Emergency blanket", "Warm blankets / sleeping bag", "Warm packs", "Warm non-alcoholic drink", "Dry clothing", "Thermometer"],
precautions: [
  "Do not rub or massage cold limbs — this can cause further injury.",
  "Do not give alcohol or caffeine.",
  "Do not warm too quickly with hot water or direct heat."
],
     uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
},
    {
      id: "poisoning",
      title: "Poisoning",
      icon: "☠️",
      keywords: ["poison", "overdose", "chemical", "toxic", "ingested", "swallowed", "fumes"],
      summary: "Identify the poison and get expert help immediately.",
      callEmergency: [
        "The person is unconscious, having seizures, or having trouble breathing",
        "A large or unknown amount of poison was taken",
        "The poison is corrosive, chemical, or a suspected overdose"
      ],
      symptoms: [
        "Nausea, vomiting, or abdominal pain",
        "Burns or stains around the mouth",
        "Drowsiness, confusion, or seizures",
        "Difficulty breathing",
        "Empty pill bottles or chemical containers nearby"
      ],
      steps: [
        "Call emergency services or poison control immediately.",
        "Move the person to fresh air if poison was inhaled.",
        "If poison touched skin or eyes, rinse with running water for 15–20 minutes.",
        "Keep the person still and monitor breathing and responsiveness.",
        "Save the container, label, or sample of the poison for responders.",
        "Start CPR if the person becomes unresponsive and is not breathing normally."
      ],
      medKit: ["Gloves", "Phone to call poison control", "Water for rinsing", "CPR face shield"],
      precautions: [
        "Do not induce vomiting unless specifically told to by poison control.",
        "Do not give food or drink unless advised by a professional.",
        "Do not try to neutralize the poison with vinegar, lemon, or other home remedies."
      ],
      uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try "burn", "choking", "seizure", or "bleeding".',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
    },
{
id: "stroke",
title: "Stroke (FAST)",
icon: "🧠",
keywords: ["stroke", "face drooping", "arm weakness", "speech", "fast", "brain attack"],
summary: "Spot a stroke with FAST and call for help immediately.",
callEmergency: [
"Any single FAST sign is present — call immediately, even if symptoms improve"
],
symptoms: [
"Face drooping on one side",
"Arm weakness or numbness on one side",
"Speech difficulty — slurred or unable to speak",
"Sudden confusion or trouble understanding",
"Sudden severe headache, dizziness, or vision problems"
],
steps: [
"Use FAST: Face — ask them to smile. Arm — ask them to raise both arms. Speech — ask them to repeat a simple sentence. Time — note when symptoms started.",
"Call emergency services immediately if any sign is present.",
"Note the time symptoms first appeared and share it with responders.",
"Keep the person still with the head and shoulders slightly raised.",
"Loosen tight clothing and keep them calm.",
"Monitor breathing; start CPR if they become unresponsive and stop breathing normally.",
"Do not give food, drink, or medication."
],
medKit: ["Phone to call emergency services", "Emergency blanket", "Gloves", "CPR face shield"],
precautions: [
"Do not give aspirin or any medication unless instructed by a medical professional.",
"Do not offer food or drink — swallowing may be impaired.",
"Do not wait to see if symptoms improve. Time lost is brain lost."
],
     uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
},
{
id: "shock",
title: "Shock",
icon: "🚨",
keywords: ["shock", "circulation", "pale", "clammy", "low blood pressure", "collapse"],
summary: "Support circulation by lying the person down and keeping them warm.",
callEmergency: [
"Shock is suspected after any serious injury, blood loss, infection, or allergic reaction"
],
symptoms: [
"Pale, cool, clammy skin",
"Rapid, weak pulse",
"Fast, shallow breathing",
"Dizziness, weakness, or fainting",
"Confusion, anxiety, or unresponsiveness"
],
steps: [
"Call emergency services.",
"Lay the person flat on their back.",
"Raise their legs about 30 cm (12 inches) if no head, neck, spine, or leg injury is suspected.",
"Keep them warm with a blanket or emergency blanket.",
"Loosen tight clothing around the neck, chest, and waist.",
"Monitor breathing and responsiveness; start CPR if they stop breathing normally.",
"Do not give food or drink."
],
medKit: ["Emergency blanket", "Gloves", "CPR face shield", "Phone to call emergency services"],
precautions: [
"Do not raise the legs if there is a suspected head, neck, spine, or leg injury.",
"Do not give fluids by mouth.",
"Do not leave the person alone."
],
     uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
},
{
id: "nausea",
title: "Nausea",
icon: "😵",
keywords: ["nausea", "vomiting", "queasy", "stomach", "dizziness", "sick", "motion sickness"],
summary: "Ease queasiness with rest, fresh air, small sips of fluid, and bland foods.",
callEmergency: [
"Nausea is accompanied by severe chest pain or trouble breathing",
"The person cannot keep any fluids down and shows signs of dehydration",
"Vomiting is severe, bloody, or persistent",
"The person is confused, unresponsive, or has a stiff neck and fever"
],
symptoms: [
"Queasy stomach or urge to vomit",
"Inability to stand steady",
"Head pain",
"Dizziness, weakness, or confusion",
"Pale, cool, clammy skin"
],
steps: [
"Rest and position: Have the person sit upright or slightly recline in a cool, quiet, well-ventilated area with fresh air. Avoid sudden movements.",
"Provide fresh air: Open a window or use a fan to cool them down. Apply a cool, damp cloth to the back of their neck.",
"Encourage slow hydration: Offer tiny, frequent sips of clear water, electrolyte solutions, or diluted juices once the initial wave passes. Do not let them gulp large amounts.",
"Try natural remedies: Offer ginger or peppermint tea if available, or try wrist acupressure (pressing the P6 point on the inner wrist).",
"Introduce bland foods slowly: If they can tolerate liquids and feel hungry, offer small amounts of plain, bland foods like the BRAT diet (bananas, rice, applesauce, toast) or plain crackers.",
"Avoid fatty, spicy, or strong-smelling foods."
],
medKit: ["Water or oral rehydration solution", "Crackers / bland snacks", "Ginger or peppermint tea", "Cool cloth", "Vomit bag or bowl"],
precautions: [
"Do not let them gulp large amounts of water at once.",
"Do not offer heavy, fatty, spicy, or strong-smelling foods.",
"Do not ignore repeated forceful vomiting, blood in vomit, or signs of dehydration — seek medical care."
],
     uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
}
],
  tl: [
    {
      id: "severe-bleeding",
      title: "Malalang Pagdurugo",
      icon: "🩸",
      keywords: ["pagdurugo", "dugo", "sugat", "hiwa", "buka"],
      summary: "Kontrolin ang malakas na pagkawala ng dugo mula sa sugat gamit ang presyur at mga bendahe.",
      callEmergency: [
        "Ang dugo ay bumubuga o patuloy na dumadaloy mula sa sugat",
        "Hindi tumitigil ang pagdurugo pagkatapos ng 10 minutong madiing pagpindot",
        "Ang sugat ay malaki, malalim, o sanhi ng isang malubhang pinsala",
        "Ang tao ay nagpapakita ng mga palatandaan ng shock (maputla, malamig ang pawis, nalilito, mahina)"
      ],
      symptoms: [
        "Patuloy o bumubugang daloy ng dugo",
        "Dugo na tumatagos sa damit o bendahe",
        "Maputla, malamig, at basang-basa ng pawis na balat",
        "Pakahilo, panghihina, o pagkalito",
        "Mabilis na tibok ng puso o mababaw na paghinga"
      ],
      steps: [
        "Magsuot ng disposable gloves kung mayroon at ilantad ang sugat.",
        "Maglapat ng madiin at direktang presyur gamit ang sterile gauze pad o malinis na tela.",
        "Kung tumagos ang dugo, magdagdag pa ng gauze sa ibabaw — huwag alisin ang unang layer.",
        "Kung ang sugat ay nasa braso o binti at walang pinaghihinalaang bali, itaas ito nang mas mataas sa puso.",
        "I-secure ang dressing nang mahigpit gamit ang bandage kapag kontrolado na ang pagdurugo.",
        "Panatilihing mainit, nakahiga, at kalmado ang tao, at bantayan ang mga senyales ng shock.",
        "Ipagpatuloy ang madiing pagpindot hanggang sa dumating ang tulong kung malala ang pagdurugo."
      ],
      medKit: ["Disposable gloves", "Sterile gauze pads", "Roller bandage", "Adhesive tape", "Trauma dressing", "Antiseptic wipes", "Emergency blanket"],
      precautions: [
        "Huwag alisin ang bumaong bagay — lagyan ng padding sa paligid nito at idiin sa gilid nito.",
        "Huwag alisin ang unang dressing na basa ng dugo; magdagdag na lang ng mga layer sa ibabaw.",
        "Huwag gumamit ng tourniquet maliban kung ikaw ay sanay at ang pagdurugo ay kritikal sa buhay."
      ],
      uiLabels: {
        emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
        callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
        recognizeSigns: "👀 Kilalanin ang mga senyales",
        firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
        medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
        doNotTitle: "⛔ Huwag Gawin"
      }
    },
    {
      id: "burns",
      title: "Mga Pasiyok at Paso",
      icon: "🔥",
      keywords: ["paso", "pasiyok", "apoy", "init", "paltos", "mainit na tubig", "singaw"],
      summary: "Palamigin ang paso, protektahan ang balat, at iwasan ang impeksyon.",
      callEmergency: [
        "Ang paso ay malaki, malalim, o nakakaapekto sa mukha, kamay, paa, kasukasuan, o ari",
        "Ang paso ay sanhi ng kemikal o kuryente",
        "Nahihirapang huminga ang tao o nakalanghap ng usok",
        "Ang paso ay nasa bata, sanggol, o matanda",
        "May mga palatandaan ng shock"
      ],
      symptoms: [
        "Namumula at masakit na balat (superficial burn)",
        "Mga paltos o basang balat (partial-thickness burn)",
        "Puti, sunog, o namamanhid na balat (deep burn)",
        "Pamamaga sa paligid ng pasong bahagi",
        "Nahihirapang huminga kung nakalanghap ng usok"
      ],
      steps: [
        "Ilayo ang tao mula sa pinagmulan ng paso.",
        "Palamigin ang paso sa ilalim ng umaagos na tubig (hindi yelo) sa loob ng 10–20 minuto.",
        "Alisin ang mga singsing, orasan, o masikip na damit bago magsimula ang pamamaga.",
        "Takpan ang paso nang maluwag gamit ang sterile non-stick dressing o malinis na cling film.",
        "Protektahan ang tao sa lamig at bantayan kung magpapakita ng shock.",
        "Huwag putukin ang mga paltos — iwanang buo upang mabawasan ang panganib ng inheksyon."
      ],
      medKit: ["Burn gel / hydrogel dressing", "Sterile non-stick dressings", "Cling film", "Running water", "Disposable gloves", "Emergency blanket"],
      precautions: [
        "Huwag lagyan ng yelo, mantikilya, toothpaste, o mga cream ang paso.",
        "Huwag putukin ang mga paltos o alisin ang damit na dumikit sa paso.",
        "Huwag gumamit ng mga adhesive dressing nang direkta sa pasong balat."
      ],
      uiLabels: {
        emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
        callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
        recognizeSigns: "👀 Kilalanin ang mga senyales",
        firstAidTitle: "🩹 Unang lunas — hakbang-hangbang",
        medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
        doNotTitle: "⛔ Huwag Gawin"
      }
    },
    {
      id: "choking-adult",
      title: "Nabilaukan (Matanda at Bata)",
      icon: "🤢",
      keywords: ["nabilaukan", "boga", "bara", "sinisid", "pindot sa tiyan", "hindi makahinga"],
      summary: "Alisin ang nakabarang bagay sa daanan ng hangin gamit ang mga tapik sa likod at pagpindot sa tiyan (abdominal thrusts).",
      callEmergency: [
        "Ang tao ay nawalan ng malay o hindi na sumasagot",
        "Hindi mo maalis ang bara pagkatapos ng ilang subok",
        "Huminto sa paghinga ang tao"
      ],
      symptoms: [
        "Pakahawak sa leeg gamit ang isa o dalawang kamay",
        "Hindi kakayahang magsalita, umubo, o huminga",
        "Maingay o walang tunog na pagsisikap na huminga",
        "Namumula ang mukha, na nagiging maputla o nangingitim",
        "Pagka-panic o pagkawala ng malay"
      ],
      steps: [
        "Itanong: \"Nabilaukan ka ba?\" Kung kaya nilang umubo o magsalita, hikayatin silang umubo.",
        "Kung hindi sila makaubo o makahinga, itumba sila nang bahagya pasulong at bigyan ng hanggang 5 matatalas na tapik sa likod sa pagitan ng mga paypay.",
        "Kung hindi nagtagumpay, tumayo sa likod nila at bigyan ng hanggang 5 pagpindot sa tiyan (Heimlich maneuver).",
        "Magpalit-palit sa 5 tapik sa likod at 5 pagpindot sa tiyan hanggang sa mailabas ang nakabarang bagay.",
        "Kung ang tao ay mawalan ng malay, simulan ang CPR at tumawag sa emergency services.",
        "Pagkatapos mailabas ang bagay, panatilihing nakahinto ang tao at magpatingin sa doktor."
      ],
      medKit: ["CPR face shield", "Guwantes", "Telepono para tumawag sa emergency services"],
      precautions: [
        "Huwag magsagawa ng pagpindot sa tiyan sa buntis — gumamit ng pagpindot sa dibdib (chest thrusts).",
        "Huwag ipasok ang mga daliri sa bibig para magbulag-bulagang magkapas ng nakabarang bagay.",
        "Huwag balewalain ang bahagyang bara — bantayan nang maigi at humingi ng tulong kung lumala."
      ],
      uiLabels: {
        emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
        callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
        recognizeSigns: "👀 Kilalanin ang mga senyales",
        firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
        medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
        doNotTitle: "⛔ Huwag Gawin"
      }
    },
    {
      id: "cpr",
      title: "CPR / Cardiac Arrest",
      icon: "❤️",
      keywords: ["cpr", "cardiac", "puso", "atake", "walang malay", "hindi humihinga", "bomba sa dibdib"],
      summary: "Panatilihing dumadaloy ang dugo sa pamamagitan ng pagbomba sa dibdib at mga artipisyal na paghinga.",
      callEmergency: [
        "Ang tao ay walang malay at hindi humihinga nang normal — tumawag agad bago simulan ang CPR"
      ],
      symptoms: [
        "Biglaang pagbagsak",
        "Walang tugon sa boses o hawak",
        "Walang paghinga o humihingal lang (agonal breathing)",
        "Walang pulso o mga senyales ng sirkulasyon"
      ],
      steps: [
        "Suriin kung ligtas ang paligid, pagkatapos ay tapikin at sumigaw para tingnan kung gising ang tao.",
        "Tumawag sa emergency services at kumuha ng AED kung mayroon.",
        "Iposisyon ang ibaba ng isang kamay sa gitna ng dibdib; ilagay ang isa pang kamay sa ibabaw at pag-isandigin ang mga daliri.",
        "Pumindot nang madiin at mabilis — hindi bababa sa 5 cm (2 pulgada) ang lalim sa bilis na 100–120 compressions bawat minuto.",
        "Hayaang bumalik sa normal ang dibdib sa pagitan ng mga pagbomba.",
        "Kung sanay, magbigay ng 2 artipisyal na paghinga pagkatapos ng bawat 30 pagbomba; kung hindi, ipagpatuloy ang hands-only CPR.",
        "Gamitin ang AED sa sandaling dumating ito at sundin ang mga tagubilin ng boses nito.",
        "Ipagpatuloy hanggang sa dumating ang tulong o magsimulang huminga nang normal ang tao."
      ],
      medKit: ["CPR face shield", "Pocket mask", "AED (kung mayroon)", "Guwantes"],
      precautions: [
        "Huwag ihinto ang pagbomba maliban na lang kung gagamit ng AED o kung malinaw na nagkamalay ang tao.",
        "Huwag iantala ang pagbomba para mag-check ng pulso nang higit sa 10 segundo.",
        "Huwag magbigay ng artipisyal na paghinga kung hindi sanay o hindi mairingan — ang hands-only CPR ay nakakapagligtas pa rin ng buhay."
      ],
      uiLabels: {
        emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
        callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
        recognizeSigns: "👀 Kilalanin ang mga senyales",
        firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
        medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
        doNotTitle: "⛔ Huwag Gawin"
      }
    },
    {
      id: "Stomach Ache",
      title: "Sakit ng Tiyan",
      icon: "🤮",
      keywords: ["sakit ng tiyan", "kabag", "kombulsyon sa tiyan", "hindi natunawan", "sinisikmura", "hilo", "paimbiyr"],
summary: "Magpahinga nang komportable, panatilihing hydrated, at bantayan ang mga malalang sintomas na nangangailangan ng agarang medikal na atensyon.",
callEmergency: [
"Ang sakit ay biglaan, matindi, at hindi matiis.",
"Ang tiyan ay matigas, makunat, o labis na sensitibo kapag hinawakan.",
"May kasamang patuloy na pagsusuka, pagsusuka ng dugo, o madugo/maitim na dumi.",
"May kasamang mataas na lagnat, pagkahilo, paghimatay, o paghihirap sa paghinga."
],
symptoms: [
"Katamtamang kirot, matalas na sakit, o tila nagbabagang pakiramdam sa tiyan",
"Pangangatog o pagkabag ng tiyan",
"Pagkahilo, pagsusuka, o pagkawala ng gana kumain",
"Gas, hindi pagkatunaw ng pagkain, o pagbabago sa pagdumi"
],
steps: [
"Paupuin o pahigaan ang tao sa isang komportableng posisyon, tulong ang pagbaluktot o bahagyang pagtaas ng mga tuhod.",
"Luwagan ang mga masikip na damit sa paligid ng baywang at tiyan.",
"Maglapat ng mainit na compress o heating pad sa tiyan sa loob ng 15-20 minuto para maibsan ang pananakit.",
"Hikayatin ang dahan-dahang pag-inom ng tubig, malinaw na sabaw, o mga herbal tea tulad ng peppermint o luya.",
"Iwasang magbigay ng matitigas na pagkain, kapeina, alak, carbonated na inumin, o gatas hanggang sa mawala ang sakit.",
"Bantayan ang anumang lumalalang senyales o mga seryosong sintomas na maaaring magpahiwatig ng emergency tulad ng appendicitis."
],
medKit: ["Heating pad o warm compress", "Antacids (para sa hindi natunawan)", "Electrolyte solutions", "Ginger o peppermint tea bags"],
precautions: [
"Huwag magbigay ng aspirin, ibuprofen, o iba pang NSAID nang walang payo ng doktor, dahil maaari nitong iritahin ang dingding ng tiyan.",
"Huwag magbigay ng anumang pampurga o laxative, lalo na kung pinaghihinalaan ang appendicitis.",
"Huwag piliting kumain ang tao kung sila ay nakakaramdam ng pagkasuka o aktwal na pananakit.",
"Huwag balewalain ang localized na sakit na lumilipat sa kanang ibabang bahagi ng tiyan."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
},
{
id: "fractures",
title: "Mga Bali at Pilay (Fractures & Sprains)",
icon: "🦴",
keywords: ["bali", "bali na buto", "pilay", "lamog", "dislocate", "pinsala", "pamamaga"],
summary: "I-immobilize o huwag pagalawin ang napinsalang bahagi at bawasan ang sakit at pamamaga.",
callEmergency: [
"Ang buto ay nakikita o bumaon palabas sa balat",
"Ang braso o binti ay deformed, namamanhid, malamig, o nangingitim",
"Ang pinsala ay kinabibilangan ng ulo, leeg, gulugod, o balakang",
"Ang tao ay hindi makagalaw o hindi makatapak gamit ang napinsalang bahagi"
],
symptoms: [
"Sakit na lumalala kapag iginalaw",
"Pamamaga, pasa, o pagka-deform",
"Tunog ng pagkabali o pagkakiskis sa oras ng pinsala",
"Hindi kakayahang magpakilos o magpasan ng bigat",
"Pamamanhid o kuryente sa ibaba ng pinsala"
],
steps: [
"Panatilihing walang galaw ang tao at suportahan ang napinsalang bahagi sa posisyong natagpuan.",
"Maglapat ng cold pack na nakabalot sa tela nang hanggang 20 minuto para mabawasan ang pamamaga.",
"Para sa pinaghihinalaang bali, i-immobilize ang kasukasuan sa itaas at ibaba ng pinsala gamit ang splint o sling.",
"Para sa pilay o lamog, tandaan ang RICE: Rest (Pahinga), Ice (Yelo), Compression (Bendahe), Elevation (Itaas).",
"Suriin ang sirkulasyon sa ibaba ng pinsala — init, kulay, at pakiramdam.",
"Gamutin para sa shock na kondisyon at humingi ng medikal na tulong."
],
medKit: ["Cold pack", "Triangular bandage", "Elastic bandage", "Splint / matigas na suporta", "Adhesive tape"],
precautions: [
"Huwag subukang ituwid ang isang deformed na bahagi o itulak pabalik ang buto.",
"Huwag ilipat ang isang taong may pinaghihinalaang pinsala sa gulugod maliban kung sila ay nasa panganib.",
"Huwag ilapat ang yelo nang direkta sa hubad na balat."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
},
{
id: "anaphylaxis",
title: "Matinding Allergic Reaction (Anaphylaxis)",
icon: "🐝",
keywords: ["allergy", "anaphylaxis", "epinephrine", "epipen", "kagat ng bubuyog", "pamamaga", "pantal"],
summary: "Kilalanin ang matinding allergic reaction at gumamit ng epinephrine auto-injector.",
callEmergency: [
"Mayroong anumang senyales ng anaphylaxis — tumawag agad kahit na nagamit na ang auto-injector"
],
symptoms: [
"Pamamaga ng mukha, labi, dila, o lalamunan",
"Nahihirapang huminga, humihingal, o masikip ang dibdib",
"Mga pantal, pamumula, o malawakang pangangati",
"Pagkahilo, mahinang pulso, o paghimatay",
"Pagkasuka, pagsusuka, o pananakit ng tiyan",
"Pakiramdam na tila may masamang mangyayari"
],
steps: [
"Tumawag agad sa emergency services.",
"Itanong kung ang tao ay may dalang epinephrine auto-injector (hal. EpiPen).",
"Tulungan silang gamitin ito: alisin ang safety cap at iturok nang madiin sa labas ng gitnang hita.",
"Pahigaan ang tao nang patag na nakataas ang mga binti — o paupuin kung nahihirapang huminga.",
"Kung magpatuloy ang mga sintomas pagkatapos ng 5 minuto at may available na ikalawang auto-injector, gamitin ito.",
"Bantayan ang paghinga at simulan ang CPR kung ang tao ay mawalan ng malay.",
"Panatilihin silang nakahiga hanggang sa dumating ang saklolo, kahit na bumuti na ang kanilang pakiramdam."
],
medKit: ["Epinephrine auto-injector (kung nireseta)", "Antihistamine (para sa banayad na reaksyon lamang)", "CPR face shield", "Guwantes"],
precautions: [
"Huwag mag-antay kung bubuti ang mga sintomas — ang anaphylaxis ay maaaring lumala nang napakabilis.",
"Huwag hayaang tumayo o maglakad-lakad ang tao pagkatapos saksakan ng gamot.",
"Huwag gumamit ng auto-injector ng ibang tao maliban kung ikaw ay sanay at pinahintulutan."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
},
{
id: "seizures",
title: "Kombulsyon (Seizures)",
icon: "⚡",
keywords: ["kombulsyon", "atake", "epilepsya", "Nanginginig", "walang malay"],
summary: "Protektahan ang tao mula sa pinsala habang nagpapatuloy ang kombulsyon.",
callEmergency: [
"Ang kombulsyon ay tumagal nang higit sa 5 minuto",
"May sumunod na ikalawang atake kaagad",
"Ang tao ay nasugatan, buntis, o may diabetes",
"Ito ang unang pagkakataon na nagkakombulsyon ang tao",
"Ang tao ay hindi nagising o hindi humihinga nang normal pagkatapos ng atake"
],
symptoms: [
"Biglaang pagbagsak o pagkawala ng kamalayan",
"Panginginig o pagtigas ng katawan",
"Pagtaas o pag-ikot ng mga mata paitaas",
"Pagbubula ng bibig o pagkagat sa dila",
"Pagkalito o pagkaantok pagkatapos ng kombulsyon"
],
steps: [
"Tandaan ang oras kung kailan nagsimula ang kombulsyon.",
"Protektahan ang ulo gamit ang isang malambot na bagay at ilayo ang mga kalapit na mapanganib na kagamitan.",
"Luwagan ang masisikip na damit sa paligid ng leeg.",
"Dahan-dahang iroll ang tao sa kanilang tagiliran kapag huminto na ang panginginig upang mapanatiling malinis ang daanan ng hangin.",
"Manatili sa tabi nila hanggang sa sila ay ganap nang gising.",
"Ipanatag ang kanilang loob at suriin kung may mga pinsala o sugat kapag natapos na ang atake."
],
medKit: ["Malambot na sapin", "Emergency blanket", "Guwantes", "Telepono para tumawag sa emergency services"],
precautions: [
"Huwag pigilan ang tao o subukang ihinto ang kanilang mga paggalaw.",
"Huwag maglagay ng anumang bagay sa loob ng kanilang bibig.",
"Huwag mag-alok ng pagkain o inumin hanggang sa sila ay ganap nang gising at alerto."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-bang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
},
{
id: "heat-stroke",
title: "Heat Exhaustion at Heat Stroke",
icon: "☀️",
keywords: ["init", "heat stroke", "heat exhaustion", "naoverheat", "dehydration", "mainit na panahon"],
summary: "Palamigin ang tao nang mabilis at bigyan ng likido kung may malay.",
callEmergency: [
"Ang tao ay nalilito, balisa, o walang malay",
"Napakataas ng temperatura ng katawan",
"Huminto sila sa pagpawis at ang balat ay mainit at tuyo",
"Ang pagsusuka ay pumipigil sa pag-inom ng likido",
"Hindi bumubuti ang mga sintomas sa loob ng 30 minuto"
],
symptoms: [
"Malakas na pagpapawis, panghihina, o pagkahilo",
"Sakit ng ulo, pagkasuka, o panginginig ng kalamnan",
"Mainit, mapula, tuyo, o basang balat",
"Mabilis at malakas na pulso",
"Pagkalito, bulol na pagsasalita, o pagkawala ng malay"
],
steps: [
"Ilipat ang tao sa isang malamig at may lilim na lugar.",
"Alisin ang mga labis na kasuotan.",
"Palamigin nang mabilis: sprayhan o punasan ng malamig na tubig at paypayan sila.",
"Maglapat ng mga cold pack sa leeg, kilikili, at singit.",
"Kung gising at hindi nagsusuka, bigyan ng maliliit na sipsip ng tubig o sports drink.",
"Bantayan silang maigi — kung magkaroon ng pagkalito o pagkawala ng malay, tumawag sa emergency services."
],
medKit: ["Cold pack", "Tubig / oral rehydration salts", "Malamig na tela o spray bottle", "Emergency blanket (para sa lilim)", "Thermometer"],
precautions: [
"Huwag magbigay ng inumin sa taong nalilito o walang malay.",
"Huwag ilubog sa napakalamig na yelong tubig maliban kung sanay — palamigin nang dahan-dahan.",
"Huwag iwanan ang tao nang mag-isa."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
},
{
id: "hypothermia",
title: "Hypothermia (Labis na Kalamigan)",
icon: "❄️",
keywords: ["lamig", "hypothermia", "nagiginaw", "nanginginig", "mababang temperatura", "frostbite"],
summary: "Painitin ang tao nang dahan-dahan at iwasan ang karagdagdang pagkawala ng init ng katawan.",
callEmergency: [
"Huminto ang panginginig ngunit ang tao ay nananatiling malamig",
"Ang tao ay nalilito, inaantok, o walang malay",
"Ang paghinga ay mabagal o mababaw",
"Ang temperatura ng katawan ay mababa sa 35°C (95°F)"
],
symptoms: [
"Panginginig (na maaaring huminto sa malubhang sitwasyon)",
"Malamig, maputla, o nangingitim na balat",
"Bulol na pagsasalita o pagkalito",
"Pagkaantok o matinding pagkapagod",
"Mabagal at mababaw na paghinga"
],
steps: [
"Ilayo ang tao sa malamig na lugar at alisin ang basang damit.",
"Balutin sila sa mga kumot, unahin ang ulo at katawan.",
"Magbigay ng mainit, matamis, at walang alak na inumin kung sila ay gising at nakakalunok.",
"Maglapat ng maiinit (hindi napakainit) na pack sa dibdib, leeg, at singit.",
"Hawakan ang tao nang dahan-dahan upang maiwasang mag-trigger ng mga problema sa ritmo ng puso.",
"Bantayan ang paghinga at simulan ang CPR kung sila ay mawalan ng malay at hindi humihinga nang normal."
],
medKit: ["Emergency blanket", "Maiinit na kumot / sleeping bag", "Warm packs", "Mainit na inuming walang alkohol", "Tuyong damit", "Thermometer"],
precautions: [
"Huwag kuskusin o i-massage ang mga malamig na braso o binti — maaari itong magdulot ng higit na pinsala.",
"Huwag magbigay ng alak o kapeina.",
"Huwag painitin nang napakabilis gamit ang mainit na tubig o direktang init."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
},
{
id: "poisoning",
title: "Pagkalason (Poisoning)",
icon: "☠️",
keywords: ["lason", "overdose", "kemikal", "toxic", "nailunok", "nakain", "usok"],
summary: "Alamin ang uri ng lason at humingi agad ng ekspertong tulong.",
callEmergency: [
"Ang tao ay walang malay, nagkakakombulsyon, o nahihirapang huminga",
"Malaki o hindi alam na dami ng lason ang nainom/nakain",
"Ang lason ay nakakatunaw ng balat (corrosive), kemikal, o pinaghihinalaang overdose"
],
symptoms: [
"Pagkasuka, pagsusuka, o pananakit ng tiyan",
"Mga paso o mantsa sa paligid ng bibig",
"Pagkaantok, pagkalito, o kombulsyon",
"Kahirapan sa paghinga",
"Mga bakanteng bote ng gamot o lalagyan ng kemikal sa malapit"
],
steps: [
"Tumawag agad sa emergency services o poison control center.",
"Ilipat ang tao sa sariwang hangin kung ang lason ay nasinghot.",
"Kung ang lason ay dumikit sa balat o mata, banlawan ng umaagos na tubig sa loob ng 15–20 minuto.",
"Panatilihing nakahinto ang tao at bantayan ang paghinga at pagtugon.",
"Itabi ang lalagyan, label, o sample ng lason para sa mga reresponde.",
"Simulan ang CPR kung ang tao ay mawalan ng malay at hindi humihinga nang normal."
],
medKit: ["Guwantes", "Telepono para tumawag sa poison control", "Tubig pangbanlaw", "CPR face shield"],
precautions: [
"Huwag piliting isuka maliban kung tahasang sinabi ng poison control.",
"Huwag magbigay ng pagkain o inumin maliban kung ipinayo ng isang propesyonal.",
"Huwag subukang i-neutralize ang lason gamit ang suka, kalamansi, o iba pang lunas sa bahay."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
},
{
id: "stroke",
title: "Stroke (Atake sa Utak - FAST)",
icon: "🧠",
keywords: ["stroke", "atake sa utak", "tabingi ang mukha", "panghihina ng bisig", "pagsasalita", "fast"],
summary: "Tukuyin ang stroke gamit ang FAST at tumawag agad ng tulong.",
callEmergency: [
"Kahit isang senyales lang ng FAST ang makita — tumawag agad, kahit bumuti pa ang mga sintomas"
],
symptoms: [
"Pagtatabingi ng mukha sa isang panig",
"Panghihina o pamamanhid ng isang braso/bisig",
"Kahirapan sa pagsasalita — bulol o hindi makapagsalita",
"Biglaang pagkalito o kahirapan sa pag-unawa",
"Biglaang matinding sakit ng ulo, pagkahilo, o problema sa paningin"
],
steps: [
"Gamitin ang FAST: Face (Mukha) — paikutin silang ngumiti. Arm (Bisig) — paangatin ang dalawang braso. Speech (Pagsasalita) — paanditin silang umulit ng simpleng pangungusap. Time (Oras) — itala kung kailan nagsimula ang mga sintomas.",
"Tumawag agad sa emergency services kung may makitang anumang senyales.",
"Itala ang oras kung kailan unang lumitaw ang mga sintomas at ibahagi ito sa mga reresponde.",
"Panatilihing nakahinto ang tao na may bahagyang nakataas ang ulo at mga balikat.",
"Luwagan ang masisikip na damit at panatilihin silang kalmado.",
"Bantayan ang paghinga; simulan ang CPR kung sila ay mawalan ng malay at huminto sa normal na paghinga.",
"Huwag magbigay ng pagkain, inumin, o anumang gamot."
],
medKit: ["Telepono para tumawag sa emergency services", "Emergency blanket", "Guwantes", "CPR face shield"],
precautions: [
"Huwag magbigay ng aspirin o anumang gamot maliban kung ipinag-utos ng isang medikal na propesyonal.",
"Huwag mag-alok ng pagkain o inumin — maaaring apektado ang kakayahang lumunok.",
"Huwag mag-antay kung bubuti ang mga sintomas. Ang bawat minutong mawala ay pinsala sa utak."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
},
{
id: "shock",
title: "Shock (Kondisyon ng Kakulangan sa Dugo)",
icon: "🚨",
keywords: ["shock", "sirkulasyon", "maputla", "malamig ang pawis", "mababang presyon", "pagbagsak"],
summary: "Suportahan ang sirkulasyon ng dugo sa pamamagitan ng pagpapahiga sa tao at pagpapanatili sa kanilang mainit.",
callEmergency: [
"Pinaghihinalaan ang shock pagkatapos ng anumang seryosong pinsala, matinding pagdurugo, impeksyon, o malalang allergic reaction"
],
symptoms: [
"Maputla, malamig, at basang-basa ng pawis na balat",
"Mabilis ngunit mahinang pulso",
"Mabilis at mababaw na paghinga",
"Pagkahilo, panghihina, o paghimatay",
"Pagkalito, pagkabalisa, o kawalan ng pagtugon"
],
steps: [
"Tumawag sa emergency services.",
"Pahigaan ang tao nang patag sa kanilang likod.",
"Itaas ang kanilang mga binti nang humigit-kumulang 30 cm (12 pulgada) kung walang pinaghihinalaang pinsala sa ulo, leeg, gulugod, o binti.",
"Panatilihin silang mainit gamit ang isang kumot o emergency blanket.",
"Luwagan ang masisikip na damit sa paligid ng leeg, dibdib, at baywang.",
"Bantayan ang paghinga at pagtugon; simulan ang CPR kung huminto sila sa normal na paghinga.",
"Huwag magbigay ng pagkain o inumin."
],
medKit: ["Emergency blanket", "Guwantes", "CPR face shield", "Telepono para tumawag sa emergency services"],
precautions: [
"Huwag itaas ang mga binti kung may pinaghihinalaang pinsala sa ulo, leeg, gulugod, o binti.",
"Huwag magbigay ng anumang likido sa pamamagitan ng bibig.",
"Huwag iwanan ang tao nang mag-isa."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
},
{
id: "nausea",
title: "Pagkasuka at Pagkahilo (Nausea)",
icon: "😵",
keywords: ["pagkasuka", "pagsusuka", "sinisikmura", "hilo", "hilo sa biyahe"],
summary: "Ibsan ang pagkasuka sa pamamagitan ng pahinga, sariwang hangin, maliliit na sipsip ng likido, at matatabang pagkain.",
callEmergency: [
"Ang pagkasuka ay may kasamang matinding sakit sa dibdib o hirap sa paghinga",
"Hindi kayang pigilan ng tao ang anumang likido at nagpapakita ng mga senyales ng dehydration",
"Ang pagsusuka ay malala, may dugo, o patuloy na nagaganap",
"Ang tao ay nalilito, hindi tumutugon, o may naninigas na leeg at lagnat"
],
symptoms: [
"Sinisikmura o matinding urges na sumuka",
"Kakulangan sa kakayahang tumayo nang matatag",
"Sakit ng ulo",
"Pagkahilo, panghihina, o pagkalito",
"Maputla, malamig, at basang-basa ng pawis na balat"
],
steps: [
"Pahinga at posisyon: Paupuin ang tao nang tuwid o bahagyang isandal sa isang malamig, tahimik, at maayos ang bentilasyong lugar na may sariwang hangin. Iwasan ang biglaang paggalaw.",
"Magbigay ng sariwang hangin: Buksan ang bintana o gumamit ng bentilador para palamigin sila. Maglapat ng malamig at basang tela sa likod ng kanilang leeg.",
"Hikayatin ang dahan-dahan na hydration: Mag-alok ng maliliit at madalas na sipsip ng malinaw na tubig, electrolyte solutions, o diluted na juice kapag lumipas na ang unang bugso. Huwag hayaang lumunok ng marami nang biglaan.",
"Subukan ang mga natural na lunas: Mag-alok ng tsaa na may luya o peppermint kung mayroon, o subukan ang wrist acupressure (pagpindot sa P6 point sa loob ng pulso).",
"Magpasok ng matatabang pagkain nang dahan-dahan: Kung kaya na nilang tumanggap ng likido at nagugutom, mag-alok ng maliliit na bahagi ng simpleng pagkain tulad ng BRAT diet (saging, kanin, applesauce, tinapay) o simpleng crackers.",
"Iwasan ang mga matataba, maaanghang, o may matatapang na amoy na pagkain."
],
medKit: ["Tubig o oral rehydration solution", "Crackers / simpleng meryenda", "Tsaa na may luya o peppermint", "Malamig na tela", "Plastik o mangkok para sa pagsusuka"],
precautions: [
"Huwag hayaang uminom ng malaking dami ng tubig nang sabay-sabay.",
"Huwag mag-alok ng mabibigat, matataba, maaanghang, o may matatapang na amoy na pagkain.",
"Huwag balewalain ang paulit-ulit na sapilitang pagsusuka, dugo sa suka, o mga senyales ng matinding pagkatuyo (dehydration) — humingi ng medikal na tulong."
],
uiLabels: {
emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang "burn", "choking", "seizure", o "bleeding".',
callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
recognizeSigns: "👀 Kilalanin ang mga senyales",
firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
doNotTitle: "⛔ Huwag Gawin"
}
}
]
};
export default appData;
