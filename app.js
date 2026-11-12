/* =========================================================
   Jari Van Landeghem — persoonlijke site
   Pas hier je gegevens aan.
   ========================================================= */
const PROFIEL = {
  email: "jari.vanlandeghem@gmail.com",
  telefoon: "+32 470 42 47 34",   // leeg = niet tonen
  woonplaats: "Kruibeke, België",
  linkedin: "https://www.linkedin.com/in/jari-van-landeghem/",
  instagram: "https://www.instagram.com/jarivanlandeghem/",
  facebook: "https://www.facebook.com/jari.vanlandeghem/",
};

const ICON = {
  check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  chev: '<svg class="chev" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path d="M4 6.5h16v11H4z"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  in: '<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10.5V16M8 7.5v.01M11.5 16v-3.2c0-1.4 1-2.3 2.2-2.3s2.3.9 2.3 2.3V16M11.5 10.5V16"/></svg>',
  ig: '<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7v.01"/></svg>',
  fb: '<svg viewBox="0 0 24 24"><path d="M14.5 8H17V4.5h-2.5A4 4 0 0 0 10.5 8.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9a1 1 0 0 1 1-1z"/></svg>',
  plane: '<svg viewBox="0 0 24 24"><path d="M10.5 13.5 4 11l16-7-7 16-2.5-6.5z"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M6.5 3.5h7l4 4v13h-11z"/><path d="M13.5 3.5v4h4M9 13h6M9 16.5h6"/></svg>',
  copy: '<svg viewBox="0 0 24 24"><rect x="8.5" y="8.5" width="11" height="11" rx="2.5"/><path d="M15.5 8.5v-2a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"/></svg>',
  work: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7"/></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14"/><path d="M5 19c3-4 6-6 9-7.5"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/></svg>',
  cap: '<svg viewBox="0 0 24 24"><path d="M3 9.5 12 5l9 4.5-9 4.5z"/><path d="M7 11.5v4c1.5 1.5 3 2 5 2s3.5-.5 5-2v-4"/></svg>',
  flag: '<svg viewBox="0 0 24 24"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 4 2.4 5 5.4.6-4 3.7 1.1 5.3L12 16l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 19h16M7 15l4-4 3 3 5-6"/></svg>',
  house: '<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6z"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>',
  berry: '<svg viewBox="0 0 24 24"><path d="M12 8c4 0 7 1.5 7 4.5 0 4-3.5 8.5-7 8.5s-7-4.5-7-8.5C5 9.5 8 8 12 8z"/><path d="M9 8 7.5 5M12 8V4M15 8l1.5-3"/><path d="M9.5 12.5v.01M14.5 12.5v.01M12 15.5v.01M10 18v.01M14 18v.01"/></svg>',
  swim: '<svg viewBox="0 0 24 24"><circle cx="16" cy="6" r="2"/><path d="M4 13.5 9.5 9l3 2.5 3.5-2.5M3 18c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1"/></svg>',
  ball: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="m12 7.5 4 2.9-1.5 4.6h-5L8 10.4z"/><path d="M12 3.5v4M16 10.4l4.2-1.3M14.5 15l2.5 3.5M9.5 15 7 18.5M8 10.4 3.8 9.1"/></svg>',
  coin: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M14.5 9.5c-.5-1-1.4-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1.2 0-2.1-.6-2.6-1.6M12 6.5V8M12 16v1.5"/></svg>',
};

/* ---------- Projecten ---------- */
const PROJECTEN = [
  {
    id: "klj", naam: "KLJ Kasboek", sub: "iPhone · iPad · Mac", icoon: "assets/apps/KLJ.jpg", cat: ["klj", "fin"],
    kort: "Het volledige kasboek van KLJ Kruibeke: transacties, budgetten en het maandelijkse kasverslag.",
    lang: "Begonnen omdat het kasboek van onze KLJ in losse Excels zat. Nu een volwaardige app voor het hele bestuur, gesynchroniseerd via Supabase, met inlog per bestuurslid.",
    features: ["Kasverslagen als pdf of Excel, klaar om af te drukken", "Factuurlezer: scan een factuur, Apple Intelligence vult alles in", "Betaalverzoeken via WhatsApp met eigen betaallink", "Koppeling met Stamhoofd voor inschrijvingen", "Widgets op beginscherm en bureaublad"],
    tags: ["SwiftUI", "Supabase", "TestFlight"], testflight: "https://testflight.apple.com/join/tD84PjkV",
  },
  {
    id: "study", naam: "Study", sub: "iPhone · Mac", icoon: "assets/apps/Study.jpg", cat: ["leven"],
    kort: "Studie-app die cursussen omzet in leerstof, oefeningen en toetsen.",
    lang: "Gemaakt voor mijn eigen examens: importeer leerstof en oefen met vragen, rekenoefeningen en woordenschat.",
    features: ["Leerstof met voorbeelden en aantekeningen", "Toetsen en rekenoefeningen", "Woordenschat oefenen", "Agenda met examens"],
    tags: ["SwiftUI", "AI"],
  },
  {
    id: "pos", naam: "Personal OS", sub: "iPhone · Mac", icoon: "assets/apps/PersonalOS.jpg", cat: ["leven"],
    kort: "Tijdregistratie en persoonlijke planning op iPhone en Mac.",
    lang: "Een fundament om mijn tijd te registreren: hoeveel gaat naar studie, KLJ, werk en projecten.",
    features: ["Tijd registreren per project", "Overzicht per week", "Sync tussen iPhone en Mac"],
    tags: ["SwiftData", "In ontwikkeling"],
  },
];

/* ---------- Ervaring ---------- */
const ERVARING = {
  werk: [
    { t: "KBC Bank & Verzekering", p: "Observatiestage · Temse", d: "2026", logo: "assets/logos/kbc.png", c: "#FFFFFF", stage: 3,
      x: "Inkijk in de werking van een grootbank. Ik zag hoe adviseurs meedenken bij grote beslissingen van klanten, van de financiering van een eerste woning tot het opbouwen van een beleggingsportefeuille." },
    { t: "VIZI Makelaar", p: "Observatiestage · Kruibeke", d: "2026", logo: "assets/logos/vizi.png", c: "#FFFFFF", stage: 2,
      x: "Vastgoed van dichtbij: een netwerkmeeting van BNI, hoe een schatting verloopt en naar de klant gaat, de administratie van een makelaar en een rondleiding bij de verkoop van een appartement." },
    { t: "DVV Insure Consult", p: "Observatiestage · Kruibeke en Bazel", d: "2026", logo: "assets/logos/dvv.png", c: "#FFFFFF", stage: 1,
      x: "Samen met de zaakvoerder dossiers en schadeclaims overlopen, en het hele proces gevolgd: van eerste klantencontact tot offertes en dossierafhandeling. Een goede adviseur werkt niet alleen met cijfers, maar vooral met mensen." },
    { t: "Familiaal tuinbouwbedrijf (aardbeien)", p: "Kruibeke", d: "2018 – 2025", logo: "assets/logos/tuinbouw.png?v=2", c: "#F8F4EC",
      x: "Sinds mijn tienerjaren help ik mijn grootouders in hun aardbeienbedrijf. Vroeger vooral fysiek werk, nu vooral administratie: facturen inscannen en de overstap naar e-facturatie voorbereiden." },
    { t: "Standaard Boekhandel Logistics", p: "Temse", d: "2021 – 2023", logo: "assets/logos/standaard-boekhandel.png", c: "#FFF6E6",
      x: "Orders verwerken, bestellingen invullen en afdrukken, beschadigde boeken en creditnota's sorteren in het magazijn. Zorgen voor een correcte administratie en een vlotte levering." },
  ],
  studie: [
    { t: "Financiën en Verzekeringen", p: "Professionele bachelor · KdG Antwerpen", d: "2023 – nu", logo: "assets/logos/kdg.png", c: "#000000",
      x: "Nu in het derde jaar. Boekhouden, beleggen, verzekeringen, vastgoed en kredieten, met software als Bob50, Odoo en sbb SLIM." },
    { t: "Handel", p: "Technisch secundair onderwijs · Sint-Jorisinstituut Bazel", d: "2017 – 2023", logo: "assets/logos/sjib.png", c: "#FFFFFF", gip: true,
      x: "Economie, boekhouden, Nederlands, Engels en Frans. Hier is mijn interesse in de financiële sector begonnen." },
    { t: "Lagere school", p: "Vrije Basisschool Pius X · Kruibeke", d: "2011 – 2017", logo: "assets/logos/olv.png", c: "#FFFFFF",
      x: "Mijn zes jaar lager onderwijs in Kruibeke. Pius X is intussen samengegaan met OLV tot Vrije Basisschool OLV-PiusX." },
    { t: "Kleuterschool", p: "Vrije Kleuterschool OLV · Kruibeke", d: "2008 – 2011", logo: "assets/logos/olv.png", c: "#FFFFFF",
      x: "Hier begon het allemaal: mijn kleuterjaren bij OLV in Kruibeke, vandaag onderdeel van Vrije Basisschool OLV-PiusX." },
  ],
  engagement: [
    { t: "Oprichter LVG Kruibeke", p: "Landelijke Vendeliersgilde Kruibeke · vendelen en wimpelzwaaien", d: "2026 – nu", logo: "assets/logos/lvgk.png", c: "#FFFFFF",
      x: "Vendelen is mijn grote passie, dus richtte ik in 2026 zelf een gilde op. Bij LVG Kruibeke oefenen jongeren van 12 tot 35 jaar elke week vendelen en wimpelzwaaien, en in de zomer gaan we de competitie aan met andere verenigingen. Daarnaast doen we ook aan atletiek, touwtrekken en menselijke piramides. Sport en traditie, met veel teamgeest." },
    { t: "Leiding en financieel beheerder KLJ Kruibeke", p: "Lid sinds 2011 · leiding sinds 2021 · nu +16-leiding", d: "2011 – nu", logo: "assets/logos/klj.png", c: "#FFFFFF", traject: true,
      x: "Als financieel beheerder beheer ik de bankrekening, betaal ik alle facturen, houd ik het kasboek bij en maak ik elke maand het kasverslag. Daarvoor bouwde ik ook de KLJ Kasboek-app. Elk jaar ben ik feestweekendverantwoordelijke, ik was drie jaar -16-coördinator en begeleidde vijf jaar LVG & DLO bij de jongens. Daarnaast ben ik sponsor-, subsidie- en agendaverantwoordelijke." },
    { t: "Hoofdanimator in het jeugdwerk", p: "Attest Vlaanderen is jeugd", d: "juli 2026", logo: "assets/logos/vlaanderen-jeugd.png", c: "#FFFFFF", cert: "hoofd",
      x: "Cursus en stage (50 tot 55 uur cursus, 50 uur stage) om een team animatoren te begeleiden, een geheel aan activiteiten te organiseren en de eindverantwoordelijkheid te dragen." },
    { t: "Animator in het jeugdwerk", p: "Attest Vlaanderen is jeugd", d: "okt 2023", logo: "assets/logos/vlaanderen-jeugd.png", c: "#FFFFFF", cert: "anim",
      x: "Cursus en stage (50 tot 55 uur cursus, 50 uur stage) rond kinderen en jongeren begeleiden, activiteiten organiseren en veiligheid waarborgen." },
  ],
  sport: [
    { t: "FC Blue Boys", p: "Voetbal · Kruibeke", d: "2026 – nu", logo: "assets/logos/fc-blue-boys.png", c: "#1E3F8A",
      x: "Na een paar jaar zonder voetbal stond ik dit jaar terug op het veld, bij FC Blue Boys in Kruibeke. Voetballen met vrienden, zoals het hoort." },
    { t: "KJV Kruibeke", p: "Jeugdvoetbal · van de jongste ploeg tot U15", d: "2010 – 2020", logo: "assets/logos/kjv-kruibeke.png", c: "#FFFFFF",
      x: "Van zodra het kon, vanaf de allerjongste ploeg, speelde ik bij KJV Kruibeke, tot en met de U15. Toen corona alles stillegde en we naar de U17 zouden gaan, stopte bijna heel onze ploeg tegelijk." },
    { t: "Zwemmen", p: "Oud zwembad Klapperstraat · Beveren", d: "tot 2013", logo: "assets/logos/bv-zwembad.png", c: "#FFFFFF",
      x: "Als kleine jongen leerde ik zwemmen in het oude zwembad in de Klapperstraat in Beveren. Toen dat in 2013 de deuren sloot voor het nieuwe LAGO De Meerminnen, stopte ik ermee." },
  ],
};

const ATTESTEN = [
  { id: "hoofd", naam: "Hoofdanimator in het jeugdwerk", door: "Vlaanderen is jeugd", datum: "20 juli 2026",
    img: "assets/attesten/Hoofdanimatorattest.jpg", pdf: "assets/attesten/Hoofdanimatorattest.pdf",
    comp: ["Animatoren begeleiden", "Een geheel aan activiteiten organiseren", "Animatoren evalueren", "De eindverantwoordelijkheid nemen", "De werking praktisch organiseren", "Een team leiden"] },
  { id: "anim", naam: "Animator in het jeugdwerk", door: "Vlaanderen is jeugd", datum: "12 oktober 2023",
    img: "assets/attesten/Animatorattest.jpg", pdf: "assets/attesten/Animatorattest.pdf",
    comp: ["Kinderen en jongeren begeleiden", "Activiteiten organiseren", "Veiligheid waarborgen", "Respectvol handelen", "Samenwerken", "Enthousiasmeren"] },
];

/* ---------- KLJ-traject per werkjaar (nieuwste eerst) ----------
   groep: leeftijdsgroep die ik leidde · taken: functies uit de taakverdeling */
const TRAJECT = [
  { jaar: "2026 – 2027", titel: "6e jaar leiding", groep: "+16 leiding", nu: true,
    taken: ["Feestweekendverantwoordelijke", "Financieel beheerder", "Sponsorverantwoordelijke", "Subsidieverantwoordelijke", "Agendaverantwoordelijke"] },
  { jaar: "2025 – 2026", titel: "5e jaar leiding", groep: "+16 leiding",
    taken: ["Feestweekendverantwoordelijke", "LVG & DLO jongens", "Financieel beheerder", "Sponsorverantwoordelijke"] },
  { jaar: "2024 – 2025", titel: "4e jaar leiding", groep: "+16 leiding",
    taken: ["Feestweekendverantwoordelijke", "LVG & DLO jongens", "-16-coördinator", "Financieel beheerder", "Sponsorverantwoordelijke"] },
  { jaar: "2023 – 2024", titel: "3e jaar leiding", groep: "-16 leiding",
    taken: ["Feestweekendverantwoordelijke", "LVG & DLO jongens", "-16-coördinator"] },
  { jaar: "2022 – 2023", titel: "2e jaar leiding", groep: "-16 leiding",
    taken: ["Feestweekendverantwoordelijke", "LVG & DLO jongens", "-16-coördinator"] },
  { jaar: "2021 – 2022", titel: "1e jaar leiding", groep: "-9 leiding",
    taken: ["Feestweekendverantwoordelijke", "LVG & DLO jongens"] },
  { jaar: "2011 – 2021", titel: "Lid van KLJ Kruibeke", groep: "", lid: true,
    taken: [], x: "Tien jaar lid, van de jongste groep tot de oudste." },
];

/* ---------- GIP (6e middelbaar) ----------
   Vul titel in om de knop "Bekijk mijn GIP" bij Sint-Jorisinstituut te tonen.
   Lege velden worden niet getoond. */
const GIP = {
  titel: "HomeGym",
  sub: "Geïntegreerde proef · 6e jaar Handel · Sint-Jorisinstituut Bazel · 2022 – 2023",
  webshop: "https://jarivanlandeghem.wixsite.com/mijnsite",
  onderdelen: ["Bedrijfseconomie", "Marktanalyse", "Investerings- en financieringsplan", "Break-even", "Aankoop- en verkoopfacturen", "Webshop in Wix", "Duits", "Frans", "Engels", "Nederlands"],
};
/* definitieve bundel = "GIP HomeGym - eindbundel DEFINITIEF" (was "A Geïntegreerde proef eindbundel gip gip") (laatste versie, 140 p., mei 2023) */
const GIP_DOCS = [
  { id: "eindbundel", naam: "GIP-eindbundel", door: "140 pagina's · alle vakken", img: "assets/gip/eindbundel.jpg", pdf: "assets/gip/GIP-HomeGym-Jari-Van-Landeghem-eindbundel.pdf",
    x: "De volledige, definitieve bundel van mijn geïntegreerde proef: van het idee en de marktanalyse tot de financiële plannen, facturen en de opdrachten in vier talen." },
  { id: "catalogus", naam: "Productcatalogus", door: "5 pagina's", img: "assets/gip/catalogus.jpg", pdf: "assets/gip/HomeGym-productcatalogus.pdf",
    x: "Het aanbod van HomeGym: fitnesstoestellen en accessoires voor thuis, met prijzen." },
  { id: "folder", naam: "Folder", door: "Drieluik · Engels", img: "assets/gip/folder.jpg", pdf: "assets/gip/HomeGym-folder-Engels.pdf",
    x: "Een folder in het Engels die HomeGym voorstelt: ons verhaal, wat we doen, onze diensten en contactgegevens." },
  { id: "visitekaartje", naam: "Visitekaartje", door: "Voor- en achterkant", img: "assets/gip/visitekaartje.jpg", pdf: "assets/gip/HomeGym-visitekaartje.pdf",
    x: "Het visitekaartje van de zaakvoerder, in de huisstijl van HomeGym, met een link naar de webshop." },
  { id: "presentatie", naam: "Marketingstrategie", door: "Presentatie · Engels", img: "assets/gip/presentatie.jpg", pdf: "assets/gip/HomeGym-marketingstrategie-presentatie.pdf",
    x: "De presentatie over de marketingstrategie van HomeGym." },
  { id: "factuur", naam: "Verkoopfactuur", door: "Nr. 2023002 · april 2023", img: "assets/gip/factuur.jpg", pdf: "assets/gip/HomeGym-verkoopfactuur-2023002.pdf",
    x: "Een verkoopfactuur van HomeGym, met korting, btw en betalingsvoorwaarden." },
  { id: "voorwaarden", naam: "Algemene voorwaarden", door: "Webshop", img: "assets/gip/voorwaarden.jpg", pdf: "assets/gip/HomeGym-algemene-voorwaarden.pdf",
    x: "De algemene voorwaarden van de HomeGym-webshop." },
];

const TALEN = [ { n: "Nederlands", l: "moedertaal", v: 97 }, { n: "Engels", l: "goed", v: 80 }, { n: "Frans", l: "basis", v: 35 } ];
const TOOLS = [ ["Microsoft Office", "Excel · Word"], ["Odoo", "ERP"], ["Bob50", "boekhouding"], ["sbb SLIM", "boekhouding"], ["Canva Pro", "design"], ["SwiftUI", "apps"], ["Xcode", "apps"], ["Supabase", "database"] ];

const INTERESSES = [
  { n: "Vendelen", ic: ICON.flag, x: "Mijn grote passie: vendelen en wimpelzwaaien. In 2026 richtte ik er zelfs een eigen gilde voor op: LVG Kruibeke." },
  { n: "Economie", ic: ICON.chart, x: "Hoe markten, bedrijven en beleid samenhangen: de reden dat ik Financiën koos." },
  { n: "Beleggen", ic: ICON.coin, x: "Ik volg zelf een portefeuille en bouwde er een app voor met FIFO- en LIFO-berekening." },
  { n: "Verzekeringen", ic: ICON.shield, x: "Risico's inschatten en mensen beschermen: een sector waar ik graag in wil starten." },
  { n: "Vastgoed", ic: ICON.house, x: "Rendement, financiering en waardering van panden boeien me." },
  { n: "Voetbal", ic: ICON.ball, x: "Jarenlang jeugdvoetbal bij KJV Kruibeke, en sinds dit jaar terug op het veld bij FC Blue Boys." },
  { n: "Nieuwe media", ic: ICON.spark, x: "Apps, AI en design: ik probeer nieuwe tools meteen uit, en bouw er vaak zelf iets mee." },
];

/* ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- Taal ---------- */
function storedLang() { try { return localStorage.getItem("lang"); } catch { return null; } }
function pickLang() {
  const s = storedLang(); if (LANGS.some(l => l.code === s)) return s;
  const b = (navigator.language || "nl").slice(0, 2).toLowerCase();
  return LANGS.some(l => l.code === b) ? b : "nl";
}
let LANG = pickLang();
const langIdx = () => ["fr", "en", "de"].indexOf(LANG);
/* platte tekst vertalen (zonder opmaak) */
const plain = h => h.replace(/<[^>]+>/g, "");
const tr = s => { if (LANG === "nl" || s == null) return s; const t = I18N[s]; return t ? plain(t[langIdx()]) : s; };
const T = s => esc(tr(s));
const trDate = d => String(tr(d)).replace(/\bnu$/, tr("nu"));

/* ---------- Thema ---------- */
const root = document.documentElement;
function getStored() { try { return localStorage.getItem("theme"); } catch { return null; } }
function applyTheme(t) {
  if (t) root.dataset.theme = t; else delete root.dataset.theme;
  const dark = t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.themeNow = dark ? "dark" : "light";
}
applyTheme(getStored());
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => applyTheme(getStored()));
function toggleTheme() {
  const next = root.dataset.themeNow === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", next); } catch {}
  if (document.startViewTransition && !reduce) document.startViewTransition(() => applyTheme(next));
  else applyTheme(next);
}
$("#themeBtn").addEventListener("click", toggleTheme);
const tf = $("#themeBtn").cloneNode(true); tf.id = ""; tf.classList.add("theme-float");
tf.addEventListener("click", toggleTheme); document.body.appendChild(tf);

/* ---------- Statische teksten vertalen ----------
   Elk element waarvan de tekst als sleutel in I18N staat, krijgt de vertaling.
   Losse tekstknopen (naast een icoon) en attributen worden apart vertaald. */
const norm = t => t.replace(/\s+/g, " ").trim();
const INLINE = new Set(["B", "EM", "I", "KBD", "BR", "STRONG"]);
const STATIC = { els: [], texts: [], attrs: [] };
(function collectStatic() {
  const skip = el => el.closest("script, style, svg, #featured, #projects, #interests, #langs, #tools, #timeline, #traject, #certs, #contactRows, [data-socials], #sheetBody");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
  const done = new Set();
  for (let el = walker.currentNode; el; el = walker.nextNode()) {
    if (el === document.body || skip(el) || [...done].some(d => d.contains(el))) continue;
    const key = norm(el.textContent);
    if (key && I18N[key] && [...el.querySelectorAll("*")].every(c => INLINE.has(c.tagName))) {
      STATIC.els.push({ el, key, html: el.innerHTML }); done.add(el);
    }
  }
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = tw.nextNode());) {
    const key = norm(n.nodeValue);
    if (key && I18N[key] && !skip(n.parentElement) && ![...done].some(d => d.contains(n))) STATIC.texts.push({ n, key, raw: n.nodeValue });
  }
  $$("[placeholder], [aria-label], [title], img[alt]").forEach(el => ["placeholder", "aria-label", "title", "alt"].forEach(a => {
    const v = el.getAttribute(a); if (v && I18N[v]) STATIC.attrs.push({ el, a, v });
  }));
  const md = $('meta[name="description"]'); if (md) STATIC.attrs.push({ el: md, a: "content", v: md.content });
})();
function applyStatic() {
  const i = langIdx();
  STATIC.els.forEach(({ el, key, html }) => {
    el.innerHTML = i < 0 ? html : I18N[key][i];
    if (el.classList.contains("split")) splitWords(el);
  });
  STATIC.texts.forEach(({ n, key, raw }) => { n.nodeValue = i < 0 ? raw : raw.replace(key, plain(I18N[key][i])); });
  STATIC.attrs.forEach(({ el, a, v }) => el.setAttribute(a, i < 0 ? v : plain((I18N[v] || [v, v, v])[i])));
  $$("[data-suffix]").forEach(el => {
    if (!el.dataset.suffixNl) el.dataset.suffixNl = el.dataset.suffix;
    const sf = I18N_SUFFIX[el.dataset.suffixNl];
    el.dataset.suffix = sf && i >= 0 ? sf[i] : el.dataset.suffixNl;
    if (el.dataset.done) el.textContent = el.dataset.count + el.dataset.suffix;
  });
  root.lang = LANGS.find(l => l.code === LANG).html;
}

/* ---------- Woorden splitsen voor titels ---------- */
function splitWords(el) {
  let i = 0;
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(" "); return; }
          const w = document.createElement("span"); w.className = "w";
          const s = document.createElement("span"); s.textContent = part; s.style.setProperty("--i", i++);
          w.append(s); frag.append(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(el);
}
applyStatic();
$$(".split").forEach(el => { if (!el.querySelector(".w")) splitWords(el); });

/* ---------- Renderen ---------- */
function riHTML(e, big) {
  return e.logo
    ? `<span class="ri logo${big ? " big" : ""}" style="--c:${e.c}"><img src="${e.logo}" alt="" loading="lazy"></span>`
    : `<span class="ri${big ? " big" : ""}" style="--c:${e.c}">${e.ic}</span>`;
}
function renderTimeline(key) {
  const tl = $("#timeline");
  tl.innerHTML = ERVARING[key].map((e, i) => `
    <div class="tl${i === 0 ? " open" : ""}">
      <button class="tl-head" aria-expanded="${i === 0}">
        ${riHTML(e)}
        <span class="tl-main"><b>${T(e.t)}${e.stage ? ` <i class="pill">${tr("Stage")} ${e.stage}/3</i>` : ""}</b><span>${T(e.p)}</span><span class="d">${esc(trDate(e.d))}</span></span>
        <span class="tl-date">${esc(trDate(e.d))}</span>${ICON.chev}
      </button>
      <div class="tl-body"><div><p>${T(e.x)}</p>${e.cert ? `<button class="btn glass small" data-cert="${e.cert}">${ICON.doc} ${tr("Bekijk attest")}</button>` : ""}${e.traject ? `<button class="btn glass small" data-traject>${ICON.flag} ${tr("Bekijk mijn traject")}</button>` : ""}${e.gip && GIP.titel ?`<button class="btn glass small" data-gip>${ICON.star} ${tr("Bekijk mijn GIP")}</button>` : ""}${e.stage ? `<a class="btn glass small" href="${PROFIEL.linkedin}recent-activity/all/" target="_blank" rel="noopener">${ICON.in} ${tr("Lees mijn post op LinkedIn")}</a>` : ""}</div></div>
    </div>`).join("");
  tl.classList.remove("swap"); void tl.offsetWidth; tl.classList.add("swap");
}

let tlKey = "werk";
function renderContact() {
const rows = [];
rows.push(`<button class="row" data-copy="${esc(PROFIEL.email)}"><span class="ri" style="--c:#6495ED">${ICON.mail}</span><span>${tr("E-mail")}<br><span class="row-val">${esc(PROFIEL.email)}</span></span>${ICON.copy.replace("<svg", '<svg class="chev"')}</button>`);
if (PROFIEL.telefoon) rows.push(`<a class="row" href="tel:${PROFIEL.telefoon.replace(/\s/g, "")}"><span class="ri" style="--c:#34C759">${ICON.phone}</span><span>${tr("Telefoon")}<br><span class="row-val">${esc(PROFIEL.telefoon)}</span></span>${ICON.chev}</a>`);
if (PROFIEL.linkedin) rows.push(`<a class="row" href="${esc(PROFIEL.linkedin)}" target="_blank" rel="noopener"><span class="ri" style="--c:#0A66C2">${ICON.in}</span><span>LinkedIn</span>${ICON.chev}</a>`);
if (PROFIEL.instagram) rows.push(`<a class="row" href="${esc(PROFIEL.instagram)}" target="_blank" rel="noopener"><span class="ri" style="--c:#E1306C">${ICON.ig}</span><span>Instagram<br><span class="row-val">@jarivanlandeghem</span></span>${ICON.chev}</a>`);
if (PROFIEL.facebook) rows.push(`<a class="row" href="${esc(PROFIEL.facebook)}" target="_blank" rel="noopener"><span class="ri" style="--c:#1877F2">${ICON.fb}</span><span>Facebook</span>${ICON.chev}</a>`);

rows.push(`<a class="row" href="assets/CV-Jari-Van-Landeghem.pdf" target="_blank" rel="noopener"><span class="ri" style="--c:#0B2A55">${ICON.doc}</span><span>${tr("Curriculum vitae")}<br><span class="row-val">pdf</span></span>${ICON.chev}</a>`);
rows.push(`<div class="row"><span class="ri" style="--c:#FF9F0A">${ICON.pin}</span><span>${tr("Woonplaats")}</span><em>${T(PROFIEL.woonplaats)}</em></div>`);
$("#contactRows").innerHTML = rows.join("");
}
function renderAll() {
$("#featured").innerHTML = PROJECTEN.slice(0, 5).map(p => `
  <button class="feat card" data-spot data-open="${p.id}">
    <img class="app-icon" src="${p.icoon}" alt="" loading="lazy">
    <h3>${T(p.naam)}</h3><p>${T(p.kort)}</p>
  </button>`).join("");

$("#projects").innerHTML = PROJECTEN.map(p => `
  <button class="proj card" data-spot data-open="${p.id}" data-cat="${p.cat.join(" ")}">
    <div class="proj-top"><img class="app-icon" src="${p.icoon}" alt="" loading="lazy">
      <div><h3>${T(p.naam)}</h3><span class="sub">${T(p.sub)}</span></div></div>
    <p>${T(p.kort)}</p>
    <div class="tags">${p.tags.map(t => `<span class="tag">${T(t)}</span>`).join("")}</div>
  </button>`).join("");

$("#interests").innerHTML = INTERESSES.map((x, i) => `<button class="interest" data-i="${i}">${x.ic}${T(x.n)}</button>`).join("") + `<p class="interest-note" id="interestNote"></p>`;

$("#langs").innerHTML = TALEN.map(l => `
  <div class="lang"><div class="lang-top"><span>${T(l.n)}</span><em>${T(l.l)}</em></div><div class="bar"><i data-w="${l.v}"></i></div></div>`).join("");

$("#tools").innerHTML = TOOLS.map(([n, s]) => `<span class="chip">${T(n)} <small>${T(s)}</small></span>`).join("");

$("#traject").innerHTML = TRAJECT.map((s, i) => `
  <li class="step card reveal${s.nu ? " now" : ""}${s.lid ? " lid" : ""}" style="--d:${i * 0.06}s" data-spot>
    <span class="step-dot" aria-hidden="true"></span>
    <div class="step-top"><b>${T(s.titel)}</b>${s.groep ? `<span class="tag">${T(s.groep)}</span>` : ""}${s.nu ? `<span class="tag now">${tr("Nu")}</span>` : ""}</div>
    <span class="step-year">${T(s.jaar)}</span>
    ${s.taken.length ? `<div class="tags">${s.taken.map(t => `<span class="tag soft">${T(t)}</span>`).join("")}</div>` : ""}
    ${s.x ? `<p>${T(s.x)}</p>` : ""}
  </li>`).join("");

$("#certs").innerHTML =ATTESTEN.map((a, i) => `
  <button class="cert card reveal" style="--d:${i * 0.08}s" data-spot data-cert="${a.id}">
    <div class="cert-paper"><img src="${a.img}" alt="${tr("Attest")} ${T(a.naam)}" loading="lazy"></div>
    <div class="cert-info">
      ${riHTML({ logo: "assets/logos/vlaanderen-jeugd.png", c: "#FFFFFF" })}
      <span><b>${T(a.naam)}</b><span>${T(a.door)} · ${T(a.datum)}</span></span>${ICON.chev}
    </div>
  </button>`).join("");
$("#gipParts").innerHTML = GIP.onderdelen.map(t => `<span class="tag soft">${T(t)}</span>`).join("");
$("#gipDocs").innerHTML = GIP_DOCS.map((a, i) => `
  <button class="cert card reveal" style="--d:${i * 0.06}s" data-spot data-doc="${a.id}">
    <div class="cert-paper"><img src="${a.img}" alt="${T(a.naam)}" loading="lazy"></div>
    <div class="cert-info">
      ${riHTML({ logo: "assets/gip/homegym-logo.jpg", c: "#FFFFFF" })}
      <span><b>${T(a.naam)}</b><span>${T(a.door)}</span></span>${ICON.chev}
    </div>
  </button>`).join("");
  renderTimeline(tlKey);
  renderContact();
}

renderAll();

/* taalkeuze: knop in de balk (desktop) en zwevend (telefoon) */
function langMenuHTML() {
  return `<button class="icon-btn lang-btn" aria-haspopup="menu" aria-expanded="false" aria-label="${tr("Taal")}" title="${tr("Taal")}"><span class="lang-code">${LANG.toUpperCase()}</span></button>
    <div class="lang-pop" role="menu">${LANGS.map(l => `<button role="menuitemradio" aria-checked="${l.code === LANG}" data-lang="${l.code}"><span>${l.naam}</span><small>${l.code.toUpperCase()}</small></button>`).join("")}</div>`;
}
const langNav = document.createElement("div"); langNav.className = "lang-menu";
$("#themeBtn").before(langNav);
const langFloat = document.createElement("div"); langFloat.className = "lang-menu lang-float";
document.body.appendChild(langFloat);
function drawLangMenus() { [langNav, langFloat].forEach(m => { m.innerHTML = langMenuHTML(); m.classList.remove("open"); }); }
drawLangMenus();
document.addEventListener("click", e => {
  const btn = e.target.closest(".lang-btn");
  const pick = e.target.closest("[data-lang]");
  $$(".lang-menu").forEach(m => {
    const open = btn && m.contains(btn) ? !m.classList.contains("open") : false;
    m.classList.toggle("open", open); $(".lang-btn", m).setAttribute("aria-expanded", open);
  });
  if (pick) setLang(pick.dataset.lang);
});
document.addEventListener("keydown", e => { if (e.key === "Escape") $$(".lang-menu").forEach(m => m.classList.remove("open")); });
function setLang(code) {
  if (code === LANG) return;
  LANG = code; try { localStorage.setItem("lang", code); } catch {}
  const run = () => {
    applyStatic(); renderAll(); drawLangMenus();
    $$("#traject .reveal, #certs .reveal").forEach(el => el.classList.add("in"));
    $$("#langs .bar i").forEach(b => b.style.width = b.dataset.w + "%");
    $$(".split").forEach(el => el.classList.add("in"));
    if (sheetWrap.classList.contains("open")) closeSheet();
    $("#sheetBody").innerHTML = "";
    moveTabPill(); $$(".segmented").forEach(segPill);
    setTitle();
  };
  run();
}

$("#timeline").addEventListener("click", e => {
  const h = e.target.closest(".tl-head"); if (!h) return;
  const t = h.parentElement; const open = !t.classList.contains("open");
  t.classList.toggle("open", open); h.setAttribute("aria-expanded", open);
});

/* sociale knoppen (home + footer) */
const SOCIALS = [["linkedin", "LinkedIn", ICON.in], ["instagram", "Instagram", ICON.ig], ["facebook", "Facebook", ICON.fb]].filter(([k]) => PROFIEL[k]);
const socialHTML = SOCIALS.map(([k, n, ic]) => `<a class="social" href="${esc(PROFIEL[k])}" target="_blank" rel="noopener" aria-label="${n}" title="${n}">${ic}</a>`).join("")
  + `<a class="social" href="mailto:${esc(PROFIEL.email)}" aria-label="E-mail" title="E-mail">${ICON.mail}</a>`;
$$("[data-socials]").forEach(el => el.innerHTML = socialHTML);


$("#yr").textContent = new Date().getFullYear();

/* ---------- Toast ---------- */
let toastT;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 1900);
}
document.addEventListener("click", async e => {
  const c = e.target.closest("[data-copy]"); if (!c) return;
  try { await navigator.clipboard.writeText(c.dataset.copy); toast(tr("E-mailadres gekopieerd")); }
  catch { location.href = "mailto:" + c.dataset.copy; }
});

$("#mailForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subj = f.get("onderwerp") || `${tr("Bericht van")} ${f.get("naam")}`;
  const body = `${f.get("bericht")}\n\n— ${f.get("naam")}`;
  location.href = `mailto:${PROFIEL.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  toast(tr("Mail-app wordt geopend"));
});

/* ---------- Gesegmenteerde knoppen met glijdend blokje ---------- */
function segPill(seg) {
  const on = $("button.on", seg), pill = $(".seg-pill", seg);
  if (!on || !pill) return;
  pill.style.left = on.offsetLeft + "px"; pill.style.width = on.offsetWidth + "px";
}
function setupSeg(seg, onChange) {
  seg.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b || b.classList.contains("on")) return;
    $$("button", seg).forEach(x => x.classList.toggle("on", x === b));
    segPill(seg); onChange(b.dataset.f);
  });
}
setupSeg($("#projFilter"), f => {
  let n = 0;
  $$(".proj").forEach(p => {
    const show = f === "alles" || p.dataset.cat.split(" ").includes(f);
    p.classList.toggle("hide", !show);
    p.classList.remove("pop");
    if (show) { void p.offsetWidth; p.style.setProperty("--d", (n++ * 0.05) + "s"); p.classList.add("pop"); }
  });
});
setupSeg($("#expFilter"), k => { tlKey = k; renderTimeline(k); });

/* tegel die naar een bepaald tabblad op Ervaring springt */
document.addEventListener("click", e => {
  const t = e.target.closest("[data-exp]"); if (!t) return;
  const want = t.dataset.exp;
  setTimeout(() => { const b = $(`#expFilter [data-f="${want}"]`); if (b && !b.classList.contains("on")) b.click(); }, 320);
});

/* interesses */
$("#interests").addEventListener("click", e => {
  const b = e.target.closest(".interest"); if (!b) return;
  const note = $("#interestNote"); const was = b.classList.contains("on");
  $$(".interest").forEach(x => x.classList.remove("on"));
  if (was) { note.classList.remove("open"); return; }
  b.classList.add("on");
  note.classList.remove("open");
  setTimeout(() => { note.textContent = tr(INTERESSES[b.dataset.i].x); note.classList.add("open"); }, note.textContent ? 180 : 0);
});

/* ---------- Router ---------- */
const PAGES = ["home", "over", "projecten", "ervaring", "contact"];
const tabsEl = $(".tabs"), tabPill = $(".tabs-pill");
let current = null;
function moveTabPill() {
  const a = $(`.tabs a[data-route="${current}"]`); if (!a) return;
  tabPill.style.left = a.offsetLeft + "px"; tabPill.style.width = a.offsetWidth + "px";
}
function setTitle() {
  document.title = current === "home" ? "Jari Van Landeghem" : `${$(`.tabs a[data-route="${current}"] span`).textContent} · Jari Van Landeghem`;
}
function route() {
  const name = location.hash.replace(/^#\/?/, "") || "home";
  const next = PAGES.includes(name) ? name : "home";
  if (sheetWrap.classList.contains("open")) closeSheet();
  if (next === current) return;
  const prev = current; current = next;
  $$(".tabs a").forEach(a => { const on = a.dataset.route === next; a.classList.toggle("on", on); a.setAttribute("aria-selected", on); });
  moveTabPill();
  const show = () => {
    $$(".page").forEach(p => p.classList.remove("active", "leaving"));
    const pg = $(`.page[data-page="${next}"]`);
    pg.classList.add("active");
    window.scrollTo({ top: 0, behavior: "instant" });
    $$(".reveal, .split", pg).forEach(el => el.classList.remove("in"));
    requestAnimationFrame(() => { observe(pg); $$(".segmented", pg).forEach(segPill); });
    setTitle();
  };
  if (prev && !reduce) {
    $(`.page[data-page="${prev}"]`).classList.add("leaving");
    setTimeout(show, 240);
  } else show();
}
window.addEventListener("hashchange", route);
window.addEventListener("resize", () => { moveTabPill(); $$(".segmented").forEach(segPill); });

/* toetsen 1–5, pijltjes */
document.addEventListener("keydown", e => {
  if (e.target.closest("input, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
  if ($("#sheet").classList.contains("open")) { if (e.key === "Escape") closeSheet(); return; }
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= 5) location.hash = "#/" + (n === 1 ? "" : PAGES[n - 1]);
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    const i = PAGES.indexOf(current) + (e.key === "ArrowRight" ? 1 : -1);
    if (i >= 0 && i < PAGES.length) location.hash = "#/" + (i ? PAGES[i] : "");
  }
});

/* vegen op telefoon */
let sx = 0, sy = 0, st = 0;
document.addEventListener("touchstart", e => { if (e.target.closest(".carousel, .sheet")) { sx = null; return; } sx = e.touches[0].clientX; sy = e.touches[0].clientY; st = Date.now(); }, { passive: true });
document.addEventListener("touchend", e => {
  if (sx == null) return;
  const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
  if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.8 && Date.now() - st < 600) {
    const i = PAGES.indexOf(current) + (dx < 0 ? 1 : -1);
    if (i >= 0 && i < PAGES.length) location.hash = "#/" + (i ? PAGES[i] : "");
  }
}, { passive: true });

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target; el.classList.add("in"); io.unobserve(el);
    $$("[data-count]", el.matches("[data-count]") ? el.parentElement : el).forEach(countUp);
    if (el.matches(".stat")) countUp($("[data-count]", el));
    $$(".bar i", el).forEach(b => b.style.width = b.dataset.w + "%");
  });
}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
function observe(pg) { $$(".reveal, .split", pg).forEach(el => io.observe(el)); }

function countUp(el) {
  if (!el || el.dataset.done) return; el.dataset.done = 1;
  const to = +el.dataset.count, suf = el.dataset.suffix || "", dur = reduce ? 0 : 1300, t0 = performance.now();
  const step = t => {
    const k = dur ? Math.min(1, (t - t0) / dur) : 1;
    el.textContent = Math.round(to * (1 - Math.pow(1 - k, 4))) + suf;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Spotlight + tilt ---------- */
document.addEventListener("pointermove", e => {
  const s = e.target.closest("[data-spot]");
  if (s) { const r = s.getBoundingClientRect(); s.style.setProperty("--mx", e.clientX - r.left + "px"); s.style.setProperty("--my", e.clientY - r.top + "px"); }
}, { passive: true });

if (!reduce && matchMedia("(hover: hover)").matches) {
  $$("[data-tilt]").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.transition = "transform .15s ease-out";
      el.style.transform = `perspective(900px) rotateY(${(x - .5) * 10}deg) rotateX(${(.5 - y) * 10}deg)`;
      el.style.setProperty("--sx", x * 100 + "%"); el.style.setProperty("--sy", y * 100 + "%");
    });
    el.addEventListener("pointerleave", () => { el.style.transition = ""; el.style.transform = ""; });
  });
}

/* ---------- Sheet ---------- */
const sheetWrap = $("#sheet"), sheet = $(".sheet", sheetWrap);
let lastFocus;
function openSheet(id) {
  const p = PROJECTEN.find(x => x.id === id); if (!p) return;
  $("#sheetBody").innerHTML = `
    <div class="sh-head"><img class="app-icon" src="${p.icoon}" alt="">
      <div><h2 id="sheetTitle">${T(p.naam)}</h2><span class="sub">${T(p.sub)}</span></div></div>
    <p>${T(p.lang)}</p>
    <ul class="feat-list">${p.features.map((f, i) => `<li style="--i:${i}">${ICON.check}<span>${T(f)}</span></li>`).join("")}</ul>
    <div class="tags">${p.tags.map(t => `<span class="tag">${T(t)}</span>`).join("")}</div>
    ${p.testflight ? `<a class="btn primary tf" href="${p.testflight}" target="_blank" rel="noopener">${ICON.plane} ${tr("Probeer via TestFlight")}</a>` : ""}`;
  showSheet();
}
function openCert(id) {
  const a = ATTESTEN.find(x => x.id === id); if (!a) return;
  $("#sheetBody").innerHTML = `
    <div class="sh-head">${riHTML({ logo: "assets/logos/vlaanderen-jeugd.png", c: "#FFFFFF" }, true)}
      <div><h2 id="sheetTitle">${T(a.naam)}</h2><span class="sub">${T(a.door)} · ${tr("behaald op")} ${T(a.datum)}</span></div></div>
    <a class="cert-full" href="${a.pdf}" target="_blank" rel="noopener"><img src="${a.img}" alt="${tr("Attest")} ${T(a.naam)}"></a>
    <ul class="feat-list">${a.comp.map((f, i) => `<li style="--i:${i}">${ICON.check}<span>${T(f)}</span></li>`).join("")}</ul>
    <a class="btn primary" href="${a.pdf}" target="_blank" rel="noopener">${ICON.doc} ${tr("Open pdf")}</a>`;
  showSheet();
}
/* GIP-knop bij Sint-Joris: naar het GIP-blok op Projecten */
function openGip() {
  const go = () => $("#gip").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  if (current === "projecten") { go(); return; }
  location.hash = "#/projecten";
  setTimeout(() => $("#gip").scrollIntoView({ behavior: "auto", block: "start" }), reduce ? 60 : 420);
}
function openDoc(id) {
  const a = GIP_DOCS.find(x => x.id === id); if (!a) return;
  $("#sheetBody").innerHTML = `
    <div class="sh-head">${riHTML({ logo: "assets/gip/homegym-logo.jpg", c: "#FFFFFF" }, true)}
      <div><h2 id="sheetTitle">${T(a.naam)}</h2><span class="sub">HomeGym · ${tr("GIP")} 2022 – 2023 · ${T(a.door)}</span></div></div>
    <a class="cert-full" href="${a.pdf}" target="_blank" rel="noopener"><img src="${a.img}" alt="${T(a.naam)}"></a>
    <p>${T(a.x)}</p>
    ${a.id === "eindbundel" ? `<ul class="feat-list">${GIP.onderdelen.map((f, i) => `<li style="--i:${i}">${ICON.check}<span>${T(f)}</span></li>`).join("")}</ul>` : ""}
    <a class="btn primary" href="${a.pdf}" target="_blank" rel="noopener">${ICON.doc} ${tr("Open pdf")}</a>`;
  showSheet();
}
function showSheet() {
  lastFocus = document.activeElement;
  sheet.style.transform = ""; sheet.scrollTop = 0;
  sheetWrap.classList.add("open"); sheetWrap.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => $(".close", sheet).focus({ preventScroll: true }), 50);
}
function closeSheet() {
  sheetWrap.classList.remove("open"); sheetWrap.setAttribute("aria-hidden", "true");
  sheet.style.transform = ""; document.body.style.overflow = "";
  lastFocus && lastFocus.focus({ preventScroll: true });
}
document.addEventListener("click", e => {
  const o = e.target.closest("[data-open]"); if (o) { openSheet(o.dataset.open); return; }
  const c = e.target.closest("[data-cert]"); if (c) { openCert(c.dataset.cert); return; }
  if (e.target.closest("[data-gip]")) { openGip(); return; }
  const d = e.target.closest("[data-doc]"); if (d) { openDoc(d.dataset.doc); return; }
  if (e.target.closest("[data-traject]")) { $("#trajectHead").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); return; }
  if (e.target.closest("[data-close]")) closeSheet();
});
/* blad naar beneden slepen om te sluiten */
let dy0 = null, dyv = 0;
sheet.addEventListener("touchstart", e => { if (sheet.scrollTop > 0) { dy0 = null; return; } dy0 = e.touches[0].clientY; dyv = 0; sheet.style.transition = "none"; }, { passive: true });
sheet.addEventListener("touchmove", e => {
  if (dy0 == null) return; dyv = Math.max(0, e.touches[0].clientY - dy0);
  if (dyv > 0) sheet.style.transform = `translateY(${dyv}px)`;
}, { passive: true });
sheet.addEventListener("touchend", () => {
  if (dy0 == null) return; sheet.style.transition = "";
  if (dyv > 110) closeSheet(); else sheet.style.transform = "";
  dy0 = null;
});

/* start */
/* bij openen altijd op Home starten, ook als de link of de browser een andere pagina onthoudt */
if (location.hash && location.hash !== "#/") history.replaceState(null, "", location.pathname + location.search);
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
route();
requestAnimationFrame(() => { moveTabPill(); $$(".segmented").forEach(segPill); });
document.fonts && document.fonts.ready.then(() => { moveTabPill(); $$(".segmented").forEach(segPill); });
