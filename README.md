# Vefforitun 1 2024 - Hópverkefni 2
## Unnið af
### Óskar Víkingur Davíðsson - skarihacks (ovd2@hi.is) og Sævar Breki Snorrason - Sabbalingurinn (sbs87@hi.is)

Lausn á [hópverkefni 2](https://github.com/vefforritun/vef1-2024-h2).

### Lausn

Við fengum það skemmtilega verkefni að útfæra kennslusíðu sem kennir allt það helsta um HTML, CSS og JavaScript. Við notuðum einungis JavaScript og CSS til að leysa verkefnið.

### Hýsing

[![Netlify Status](linkur)

### Vinna

Við notuðum aðallega Project, issues og pull requests til að halda utan um hver var að gera hvað og það heppnaðist mjög vel.
Verkefnið er hýst með Netlify og við erum með build skriftu sem gerir okkur kleyft að hafa nákvæmlega sama skráarstrúktúr í hýsingunni.
Annað sem kom sér oft mjög vel var sjálfvirkt deployment á Netlify, sem gerði það að verkum að við gátum mjög auðveldlega séð í rauntíma hvort PR-ið sem var verið að vinna í væri að virka rétt eða ekki.
Við reyndum eftir bestu getu að aðskilja hvern og einn vinnulið í sér branch, svo að verki loknu var stofnað pull request með breytingunum og í kjölfarið framkvæmt merge sem einfaldaði vinnuna til muna.

### Skipulag

Við skiptum verkefninu niður í eftirfarandi:

```
vef1-H2/
├── img/            geymir myndir 
├── components/     geymir navigations.js og buttons.js
├── pages/          geymir javascript fyrir allar síður 
├── sytles.css      inniheldur allt css
├── node_modules/   geymir alla npm pakka
└── main.js         Keyrir síðurnar
```

### Tól og pakkar

Helstu pakkarnir sem voru notaðir og tilgangur þeirra:

- npm (Node Package Manager)
   - pakkastjóri sem heldur utan um öll tólin.
- browser-sync
   - Vaktar skráarkerfi og endurhleður vafra þegar breytingar eru gerðar
- stylelint
   - CSS linter, notað til að halda CSS-inu snyrtilegu
      - stylelint config pakkar: (skilgreina reglur fyrir linterinn)
         - stylelint-config-sass-guidelines
         - stylelint-config-standard

### Keyrsluleiðbeiningar

1. Fyrst þarftu að "clone-a" repoið
   ```
   git clone https://github.com/Sabbalingurinn/hopverkefni2
   ```
2. Svo þarftu að fara í nýju möppuna
   ```
   cd hopverkefni2
   ```
2. Næst þarftu að ná í þau tól (npm pakka) sem síðan notar
   ```
   npm install
   ```
5. Nú geturðu loksins keyrt verkefnið
   ```
   npm run dev
   ```
Ef allt gekk vel ætti nú að opnast vafragluggi með síðunni.

Þegar þú vilt ljúka keyrslu velurðu einfaldlega Ctrl + c í Terminal glugganum.

### Lærdómur

Þetta verkefni var ansi góð æfing í hópavinnu og góð leið til að kynnast git betur.