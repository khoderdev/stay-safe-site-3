export const data = [
	{
		id: '1',
		pathogen: 'Astrovirus',
		illness: 'Astrovirus',
		signsSymptoms: [
			'Watery diarrhea, nausea, Vomiting, Abdominal pain, Fever. Some people may have an astrovirus infection without symptoms.',
		],
		onsetTimeDuration: '4-5 days after exposure',
		causes: [
			'Contaminated water. This includes drinking untreated water and swallowing water from lakes, swimming pools, water parks or other recreational water areas.',
			'Contaminated food. This includes unwashed fruits and vegetables, unpasteurized milk and foods made with unpasteurized milk.',
			'Contaminated items and surfaces. This includes touching items and surfaces that someone with astrovirus has touched, caring for someone (including children) with astrovirus and changing diapers.',
		],
		prevention: [
			'Not swimming if you have diarrhea. Wait at least two weeks after you stop having diarrhea to swim.',
			'Avoiding getting water in your mouth if you swim in lakes, rivers or public pools.',
			'Not drinking untreated water or unpasteurized milk.',
			'Washing fruits and vegetables with clean water. Wash, peel or cook fruits and vegetables before eating.',
			'Using bottled water if you’re unsure if drinking or cooking water is clean.',
			'Teaching kids good handwashing hygiene at a young age.',
			'Making sure kids wash their hands after going to the bathroom and before eating.',
		],
		comments: ['None'],
	},
	{
		id: '2',
		pathogen: 'Campylobacter jejuni',
		illness: 'Campylobacteriosis',
		signsSymptoms: ['Diarrhea (often bloody), fever, abdominal cramping'],
		onsetTimeDuration: '2-5 days after exposure; duration 2-10 days',
		causes: [
			'Drinking raw milk or eating raw or undercooked meat, shellfish, or poultry.',
		],
		prevention: [
			'Avoid raw milk and cook all meats and poultry thoroughly; it is safest to drink only pasteurized milk; the bacteria also may be found in tofu or raw vegetables.',
			'Hand-washing is important for prevention; wash hands with soap before and after handling raw foods of animal origin, and before touching anything else; prevent cross-contamination in the kitchen; proper refrigeration and sanitation are also essential.',
		],
		comments: [
			'Top source of foodborne illness; some people develop antibodies to it, but others do not. In people with compromised immune systems, it may spread to the bloodstream and cause sepsis; may lead to arthritis or to GBS, a rare nerve disorder causing paralysis; 40% of GBS in the United States is caused by campylobacteriosis and affects the nerves of the body, beginning several weeks after the diarrheal illness; can lead to paralysis that lasts several weeks and usually requires intensive care. If untreated, these symptoms may progress to cause paralysis of the arms, legs, trunk, and respiratory muscles; long-term ventilator support may be needed.',
		],
	},
	{
		id: '3',
		pathogen: 'Clostridium botulinum',
		illness: 'Botulism',
		signsSymptoms: [
			'Muscle paralysis caused by the bacterial toxin: double or blurred vision, drooping eyelids, slurred speech, difficulty swallowing, dry mouth, and muscle weakness; infants with botulism appear lethargic, feed poorly, are constipated, and have a weak cry and poor muscle tone',
		],
		onsetTimeDuration:
			'In foodborne botulism symptoms generally begin 18-36 hours after eating contaminated food; can occur as early as 6 hours or as late as 10 days; duration days or months',
		causes: [
			'Home-canned foods with low acid content such as asparagus, green beans, beets, and corn; outbreaks have occurred from more unusual sources such as chopped garlic in oil, hot peppers, tomatoes, improperly handled baked potatoes wrapped in aluminum foil, and home-canned or fermented fish.',
			'Honey can contain spores of C. botulinum and has been a source of infection for infants; children younger than 12 months old should not be fed honey.',
		],
		prevention: [
			'People who home-can should follow strict hygienic procedures to reduce contamination of foods; oils infused with garlic or herbs should be refrigerated; potatoes that have been baked while wrapped in aluminum foil should be kept hot until served or refrigerated, because high temperatures destroy the botulism toxin.',
			'Persons who eat home-canned foods should boil the food for 10 minutes before eating.',
			'Throw out bulging, leaking, or dented cans and jars that are leaking.',
		],
		comments: ['None'],
	},
	{
		id: '4',
		pathogen: 'Clostridium perfringens',
		illness: 'Food poisoning',
		signsSymptoms: [
			'Nausea with vomiting, diarrhea, and signs of acute gastroenteritis lasting 1 day',
		],
		onsetTimeDuration: 'Within 6-24 hours after ingestion',
		causes: [
			'Ingestion of canned meats, contaminated dried mixes, gravy, stews, refried beans, meat products, and unwashed vegetables.',
		],
		prevention: [
			'Thoroughly cook food, reheat leftovers properly, or discard.',
		],
		comments: ['None'],
	},
	{
		id: '5',
		pathogen: 'Cryptosporidium parvum',
		illness: 'Cryptosporidiosis',
		signsSymptoms: [
			'Watery stools, diarrhea, nausea, vomiting, slight fever, and stomach cramps',
		],
		onsetTimeDuration: '2-10 days after being infected',
		causes: ['Contaminated food due to poor handling.'],
		prevention: [
			'Follow food and water precautions, practice good hand hygiene, and avoid fecal exposure during sexual activity.',
		],
		comments: ['Protozoa causes diarrhea among immune-compromised patients.'],
	},
	{
		id: '6',
		pathogen: 'Entamoeba histolytica',
		illness: 'Amebiasis',
		signsSymptoms: [
			'No symptoms or diarrhea, constipation, cramping abdominal pain, tenderness in the upper abdomen, and fever.',
		],
		onsetTimeDuration: '1 to 3 weeks',
		causes: [
			'The amebas may spread directly from person to person through fecal-oral transmission, including through oral-anal contact, or indirectly through food or water.',
		],
		prevention: [
			'Follow food and water precautions, practice good hand hygiene, and avoid fecal exposure during sexual activity.',
		],
		comments: ['None'],
	},
	{
		id: '7',
		pathogen: 'Enterotoxigenic Escherichia coli (ETEC)',
		illness: 'Enterotoxigenic Escherichia coli (ETEC) diarrheal illness',
		signsSymptoms: [
			'Watery diarrhea, abdominal cramps, low-grade fever, nausea, and malaise',
		],
		onsetTimeDuration:
			'Within 24 hours, particularly with a high infective dose',
		causes: [
			'Contamination of water with human sewage may lead to contamination of foods; infected food handlers may also contaminate foods; dairy products such as semisoft cheeses may cause problems, but this is rare.',
		],
		prevention: [
			'Prevention of ETEC infection is clearly related to water and sanitation, including food preparation and distribution. In the developing world, such major improvements will be a long time coming.',
			'Other methods on a microscale are presently being done: building safe-water tube wells, chlorination/filtration/heating of drinking water, and building and improving latrines. These attempts to block transmission are certainly effective if implemented but cannot solve the problem quickly. Therefore, there is much interest in the development of vaccines for prevention of ETEC disease.',
		],
		comments: [
			'More common with travel to other countries, in infants or debilitated elderly persons, electrolyte replacement therapy may be necessary.',
		],
	},
	{
		id: '8',
		pathogen: 'Escherichia coli O 157:H7',
		illness: 'Enterohemorrhagic E. Coli (EHEC)',
		signsSymptoms: ['Hemorrhagic colitis (painful, bloody diarrhea)'],
		onsetTimeDuration:
			'Slow onset, approximately 3-8 days after ingestion; duration 5-10 days',
		causes: [
			'Undercooked ground beef and meats, from unprocessed apple cider, or from unwashed fruits and vegetables; sometimes water sources: alfalfa sprouts, unpasteurized fruit juices, dry cured salami, lettuce, spinach, game meat, and cheese curds.',
		],
		prevention: [
			'Cook meats thoroughly, use only pasteurized milk, and wash all produce well.',
		],
		comments: [
			'Antibiotics are not used because they spread the toxin further; the condition may progress to hemolytic anemia, thrombocytopenia, and acute renal failure, requiring dialysis and transfusions; hemolytic uremic syndrome (HUS) can be fatal, especially in young children; there are several outbreaks each year, particularly from catering operations, church events, and family picnics; E. coli 0157:H7 can survive in refrigerated acid foods for weeks.',
		],
	},
	{
		id: '9',
		pathogen: 'Giardia Intestinalis',
		illness: 'Giardiasis',
		signsSymptoms: [
			'Watery, sometimes foul-smelling diarrhea that may alternate with soft, greasy stools, Fatigue, Stomach cramps and bloating, Gas, Nausea, Weight loss',
		],
		onsetTimeDuration:
			'May last 2 to 6 weeks, but in some people they last longer or recur.',
		causes: [
			'Infection occurs by the ingestion of cysts in contaminated water, food, or by the fecal-oral route (hands or fomites).',
		],
		prevention: [
			"No drug or vaccine can prevent giardia infection. But commonsense precautions can go a long way toward reducing the chances that you'll become infected or spread the infection to others.",
			"Wash your hands. This is the simplest and best way to prevent most kinds of infection. Wash your hands with soap and water for at least 20 seconds after using the toilet or changing diapers, and before eating or preparing food. When soap and water aren't available, you can use alcohol-based sanitizers. However, alcohol-based sanitizers aren't effective in destroying the cyst form of giardia that survives in the environment.",
		],
		comments: ['None'],
	},

	{
		id: '10',
		pathogen: 'Intestinal Bacillus Cereus',
		illness: 'Food poisoning',
		signsSymptoms: ['Watery diarrhea, abdominal cramping, vomiting'],
		onsetTimeDuration:
			'6-15 hours after consumption of contaminated food; duration 24 hours',
		causes: [
			`Meats, milk, vegetables, and fish have been associated with the diarrheal type. Rice products, potato, pasta, and cheese products have been associated with the vomiting type. Food mixtures: sauces, puddings, casseroles, soups, pastries and salads may also be a source`,
		],
		prevention: [
			`You can lower your risk of intestinal Bacillus cereus by storing your food safely. Steps you can take include:
Cooling cooked foods that you won’t eat immediately to below 5 degrees Celsius (5°C) within six hours.
Keeping cold food refrigerated below 5 degrees Celsius (5°C).
Keeping hot food at temperatures above 57 degrees Celsius (57°C).
Making sure reheated food reaches a temperature of at least 74 degrees Celsius (74°C).
Throwing out any food you think may contain bacteria.
`,
		],
		comments: [`B. cereus is a gram-positive, aerobic spore former.`],
	},

	{
		id: '11',
		pathogen: 'Listeria monocytogenes',
		illness: 'Listeriosis',
		signsSymptoms: [
			'Mild fever, headache, vomiting, severe illness in pregnancy; sepsis in immunocompromised, meningoencephalitis in infants, febrile gastroenteritis in adults',
		],
		onsetTimeDuration: 'Onset 2-30 days, variable duration',
		causes: [
			`Processed, ready-to-eat products such as undercooked hot dogs, deli or lunchmeat, and unpasteurized dairy products; post pasteurization contamination of soft cheeses such as feta or Brie, milk, and commercial coleslaw; cross-contamination between food surfaces has also been a problem.
`,
		],
		prevention: [
			`Use pasteurized milk and cheeses; wash produce before use; reheat foods to proper temperatures; wash hands with hot, soapy water after handling these ready-to-eat foods; discard foods by their expiration dates.`,
		],
		comments: [
			`May be fatal
Caution must be used by pregnant women, who may pass the infection on to their unborn child.`,
		],
	},

	{
		id: '12',
		pathogen: 'Norovirus',
		illness: 'Norovirus “stomach flu" or the "stomach bug”.',
		signsSymptoms: [
			'Gastroenteritis with nausea, vomiting, diarrhea, abdominal cramps; may also include headache, fever, chills, muscle aches',
		],
		onsetTimeDuration:
			'24-48 hours after ingestion, but can appear as early as 12 hours after exposure',
		causes: [
			`Foods can be contaminated either by direct contact with contaminated hands or work surfaces that are contaminated with stool or vomit or by tiny droplets from nearby vomit that can travel through air to land on food; although the virus cannot multiply outside of human bodies, once on food or in water, it can cause illness; most cases occur on cruise ships.`,
		],
		prevention: [
			`Norovirus is very contagious, but you can take steps to protect yourself and others, including:
Wash your hands well and often.
Cook shellfish thoroughly and wash fruits and vegetables.
Clean and disinfect contaminated surfaces.
Wash laundry in hot water.
Stay home when sick for 2 days (48 hours) after symptoms stop.`,
		],
		comments: [
			`Norovirus is very contagious, but you can take steps to protect yourself and others, including:
Wash your hands well and often.
Cook shellfish thoroughly and wash fruits and vegetables.
Clean and disinfect contaminated surfaces.
Wash laundry in hot water.
Stay home when sick for 2 days (48 hours) after symptoms stop.`,
		],
	},

	{
		id: '13',
		pathogen: 'Salmonella',
		illness: 'Salmonellosis',
		signsSymptoms: ['Diarrhea, fever, abdominal cramps'],
		onsetTimeDuration: '12-72 hours after infection; duration usually 4-7 days',
		causes: [
			`Ingestion of raw or undercooked meat, poultry, fish, eggs, unpasteurized dairy products; unwashed fruits and raw vegetables (melons and sprouts)
`,
		],
		prevention: [
			`Prevent by thorough cooking, proper sanitation, and hygiene.`,
		],
		comments: [
			`There are many different kinds of Salmonella bacteria;
Most people recover without treatment, but some have diarrhea that is so severe that the patient needs to be hospitalized; this patient must be treated promptly with antibiotics; the elderly, infants, and those with impaired immune systems are more likely to have a severe illness.`,
		],
	},

	{
		id: '14',
		pathogen: 'Shigella',
		illness: 'Shigellosis may also be called bacillary dysentery.',
		signsSymptoms: ['Bloody diarrhea, fever, stomach cramps'],
		onsetTimeDuration: '24-48 hours after exposure; duration 4-7 days',
		causes: [
			`Contaminated Milk and dairy products, cold mixed salads such as egg, tuna, chicken, potato, and meat salads. Uncooked vegetables or shellfish`,
		],
		prevention: [
			`Proper cooking, reheating, and maintenance of holding temperatures should aid in prevention; careful hand washing is essential.`,
		],
		comments: [
			`This is caused by a group of bacteria called Shigella, it may be severe in young children and the elderly: severe infection with high fever may be associated with seizures in children younger than 2 years old.`,
		],
	},

	{
		id: '15',
		pathogen: 'Staphylococcus aureus',
		illness: 'S. aureus',
		signsSymptoms: [
			'Nausea, vomiting, retching, abdominal cramping, and prostration',
		],
		onsetTimeDuration: 'Within 1-6 hours, rarely fatal, duration 1-2 days',
		causes: [
			`Meat, pork, eggs, poultry, tuna salad, prepared salads, gravy, stuffing, cream-filed pastries
`,
		],
		prevention: [
			`Cooling does not destroy the toxin; proper handing and hygiene are crucial for prevention.`,
		],
		comments: [
			`Refrigerate foods promptly during preparation and after meal service`,
		],
	},

	{
		id: '16',
		pathogen: 'Streptococcus pyogenes',
		illness: 'S. pyogenes',
		signsSymptoms: [
			'Sore/red throat, pain on swallowing, tonsillitis, high fever, headache, nausea, vomiting, malaise, rhinorrhea, occasional rash',
		],
		onsetTimeDuration: 'Onset 1-3 days',
		causes: [
			`Entrance into the food is the result of poor hygiene, ill food handlers, or
the use of unpasteurized milk. Contaminated food include ice cream, eggs, steamed lobster, ground ham, potato salad, egg salad, cus-tara, nice pudding, and shrimp salad; in almost all cases, the foodstuffs were allowed to stand at room temperature for several hours between preparation and consumption.
`,
		],
		prevention: [
			'Proper hand-washing and food handling measures are  the best way to prevent all infections. Use only pasteurized milk.',
		],
		comments: [
			`
Complications are rare, treated with antibiotics.
`,
		],
	},
	{
		id: '17',
		pathogen: 'Toxoplasma gondii',
		illness: 'Toxoplasmosis',
		signsSymptoms: [
			'Ocular toxoplasmosis (toxoplasmosis of the eye) symptoms: Eye pain, Blurred vision, Blindness. Acute toxoplasmosis symptoms, Fever, Fatigue, Muscle aches, Painless swollen lymph nodes your neck or armpits, Sore throat, enlarged liver and spleen (hepatosplenomegaly). Ocular toxoplasmosis (rare). Reactivated toxoplasmosis symptoms Headaches, Confusion, Seizures, Fever, Facial paralysis, Vision changes, Numbness, Weakness or loss of motor skills, Toxoplasmic encephalitis, Coma. Congenital toxoplasmosis symptoms, Yellowish skin and eyes, Rash, Enlarged liver and spleen (hepatosplenomegaly), Vision loss, eye pain or sensitivity to light (retinochoroiditis), Calcium deposits in their brain, Fluid on the brain, Small head size, Seizures, Delays in motor skill development, Learning delays or differences, Ocular toxoplasmosis.',
		],
		onsetTimeDuration:
			'1 to 3 weeks after being exposed to the parasite. Symptoms usually last for 2 to 4 weeks.',
		causes: [
			'Direct or indirect contact with cat poop (feces) or by eating undercooked meat Cleaning a cat’s litter box. Gardening in soil where cats live. Drinking water that hasn’t been boiled or treated.  Eating unwashed fruits or vegetables. Eating undercooked or improperly refrigerated meat.',
		],
		prevention: [
			`Safe food preparation and hand washing are the most important things you can do to help prevent toxoplasmosis.
Follow safe freezing and cooking practices before eating meat.
Peel fruits and vegetables or wash thoroughly before eating.
Wash cutting boards, counters, utensils and dishes with soapy water after use.
Don’t drink unpasteurized milk.
Don’t eat raw or undercooked clams, oysters or mussels.
Don’t drink untreated water.
Wear gloves when gardening and while working with soil or sand. Wash hands with soap and water afterward.
Cover outdoor sandboxes.
Don’t feed cats raw or undercooked meats.
Change cat litter daily. Wear gloves and wash your hands with soap and water afterward.
Keep cats indoors.
If you’re pregnant or have a compromised immune system:
Avoid changing cat litter yourself if possible.
If you must change cat litter, wear disposable gloves and wash your hands thoroughly afterward.
Don’t adopt a new cat or take in a stray cat`,
		],
		comments: ['none'],
	},

	{
		id: '18',
		pathogen: 'Vibrio Cholero',
		illness: 'Cholera',
		signsSymptoms: [
			'Severe acute watery diarrhea and the severe forms of the disease can kill within hours if left untreated.',
		],
		onsetTimeDuration: '12 hours and 5 days for a person to show symptoms.',
		causes: [
			'Cholera is an extremely virulent disease transmitted through the ingestion of contaminated food or water.',
		],
		prevention: [
			'A combination of surveillance, water, sanitation and hygiene, social mobilization, treatment, and oral cholera vaccines are used.',
		],
		comments: [
			'Most people infected with Cholera do not develop any symptoms, although the bacteria are present in their feces for 1–10 days after infection and are shed back into the environment, potentially infecting other people. Among people who develop symptoms, the majority have mild or moderate symptoms.',
		],
	},
	{
		id: '19',
		pathogen: 'Vibrio vulnificus',
		illness: 'Vibriosis',
		signsSymptoms: ['Vomiting, diarrhea, or both; mild gastroenteritis'],
		onsetTimeDuration:
			'About 16 hours after consumption of contaminated food; duration about 48 hours',
		causes: [
			'Seafood, especially raw clams and oysters, that has been contaminated with human pathogens',
		],
		prevention: [
			'although oysters can only be harvested legally from waters free from fecal contamination, even these can be contaminated with V. vulnificus because the bacterium is naturally present.',
		],
		comments: [
			`This is a bacterium in the same family as those that cause cholera, it yields a Norovirus, it may be fatal in immunocompromised individuals.
`,
		],
	},
	{
		id: '20',
		pathogen: 'Yersinia enterocolitica',
		illness: 'yersiniosis',
		signsSymptoms: [
			'Fever, abdominal pain, bloody diarrhea in children; adults may experience right-sided abdominal pain and fever',
		],
		onsetTimeDuration: '1-2 days after exposure; duration, 1-3 weeks or longer',
		causes: [
			'Contaminated food, especially raw or undercooked pork products; post-pasteurization contamination of chocolate milk, reconstituted dry milk, pasteurized milk, and tofu are also high-risk foods, cold storage does not kill the bacteria.',
		],
		prevention: [
			'Cook meats thoroughly, use only pasteurized milk, proper hand washing is also important.',
		],
		comments: [
			'In a small proportion of cases, complications such as skin rash, Joint pain, or spread of bacteria to the bloodstream can occur.',
		],
	},
	{
		id: '21',
		pathogen: 'Trichinella Spiralis',
		illness: 'Trichinellosis',
		signsSymptoms: [
			'Light infections may be asymptomatic. Intestinal invasion can be accompanied by gastrointestinal symptoms (diarrhea, abdominal pain, vomiting). Larval migration into muscle tissues (one week after infection) can cause periorbital and facial edema, conjunctivitis, fever, myalgias, splinter hemorrhages, rashes, and peripheral eosinophilia. Occasional life-threatening manifestations include myocarditis, central nervous system involvement, and pneumonitis. Larval encystment in the muscles causes myalgia and weakness, followed by subsidence of symptoms.',
		],
		onsetTimeDuration:
			'Few days after the worms enter your body, Later symptoms may begin about two weeks after you eat the infected meat and may last as long as several weeks.',
		causes: [
			`Trichinellosis is caused by the ingestion of undercooked meat containing encysted larvae of Trichinella species. You can't get trichinosis from beef, as cows don't eat meat. But some cases of trichinosis in people have been linked to eating beef that was mixed with infected pork. You can also get trichinosis when beef or other meat is ground in a grinder previously used to grind infected meat.`,
		],
		prevention: [
			`The best defense against trichinosis is proper food preparation. Follow these tips to avoid trichinosis:
Avoid raw or undercooked meat. Be sure to thoroughly cook cuts of meat until brown. Cook pork and meat from wild animals to an internal temperature of 160 F (71 C) at the center. Use a meat thermometer to make sure the meat is thoroughly cooked.
Don't cut or eat meat for at least three minutes after you've removed it from the heat.
Freeze pork. Freezing pork that is less than 6 inches thick at 5 F (-15 C) for three weeks will kill the roundworm parasites. But roundworm parasites in wild-animal meat won't die by freezing, even over a long period.
Know that other processing methods don't kill parasites. Other methods of meat processing or preserving, such as smoking, curing and pickling, don't kill roundworm parasites in infected meat. Also, microwave cooking isn't recommended as a way to kill roundworm parasites. This is because using a microwave doesn't provide even cooking to ensure all parasites are killed.
Clean meat grinders thoroughly. If you grind your own meat, make sure the grinder is thoroughly cleaned after each use.
Hand washing. Wash your hands thoroughly with soap and water for 20 seconds after handling raw meat. This can prevent spreading infection to other food.`,
		],
		comments: [
			`Trichinella Spiralis parasites infect animals such as bears, cougars, walruses, foxes, wild boars and domestic pigs`,
		],
	},
];
