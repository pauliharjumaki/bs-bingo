(function(){
  let settings = {
    CELLS: 25,
    COLUMNS: 5,
    ROWS: 5,
    worklifeBS: ["tappajasovellus", "paradigma", "strateginen kumppanuus", "iteraatio", "implementaatio", "brainstormaus", "toimintakehys", "E-palvelu", "yhteisöllisyys", "lisäarvo", "lisäarvopalvelu", "lopputuote", "käyttäjärajapinta", "sisäinen yrittäjyys", "jatkuva parantaminen", "portaali", "Web 2.0", "sisältötuotanto", "innovaatio", "resurssien fokusointi", "huipputulos", "fokus", "lisäarvon tuottaminen", "tulosvastuu", "profiloituminen", "kvartaali", "brändi", "case", "sopeuttaminen", "markkinajohtaja", "big picture", "visio", "priorisointi", "skaalautuminen", "segmentti", "kohderyhmä", "ulkoistaminen", "ydinosaaminen", "tiimipelaaminen", "verkostoituminen", "keskittäminen", "hajauttaminen", "deadline", "erikoistuminen", "osaaminen", "moniosaaja", "tulevaisuus", "prosessi", "Fit-gap -analyysi", "käyttötapaus", "integraatio", "kilpailukyky", "kompetenssi", "osaamistaso", "utilisaatio", "globaali", "estimaatti", "voimavarat", "strategia", "mittakaavaetu", "markkinarako", "penetraatio", "offshore", "nearshore", "missio", "etsikkoaika", "potentiaali", "haaste", "muutosvastarinta", "ruohonjuuritaso", "strategian jalkauttaminen", "resurssit", "solution", "Internet", "ERP", "henkilöstöresurssit", "fasiliteetit", "trendi", "budjetti", "tiimipelaaja", "prosessin parannus", "aivoriihi", "projekti", "tuottavuus", "kehityskeskustelu", "ISO 9001", "break-even", "efortti", "konteksti", "tavoitetila", "konsepti", "approachi", "validointi", "verifiointi", "action plan", "action point", "kestävä kehitys", "huippusuoritus", "evaluointi", "sertifikaatti", "räätälöinti", "pitkässä juoksussa", "proaktiivinen", "24/7", "interaktiivinen", "go live", "prosessin optimointi", "tahtotila", "maailmanluokan osaaminen", "implementoida", "tuotekehitys", "mobiili", "ketterä", "asiantuntijuus", "reaaliaikainen", "B2B", "tiimityö", "lanseerata", "globaali kilpailu", "markkinaosuus", "synergia", "mobiiliratkaisu", "avaimet käteen -periaatteella", "menestys", "korkea teknologia", "käyttäjäystävällinen", "virtuaalinen", "asiakaskeskeinen", "skaalautua", "pyörän keksiminen uudelleen", "substanssi", "resurssien mobilisointi", "itseohjautuvuus", "toimintaympäristö", "laatujohtaminen", "signaali", "funktio", "win-win-tilanne", "tilanneherkkyys", "can do -asenne", "agenda", "pilvipalvelu", "dynaaminen", "kovan luokan osaaja", "sosiaalinen media", "dimensio", "sidosryhmä", "tunnusluvut", "arvot", "ylitämme asiakkaan odotukset", "asiakaslähtöinen", "asiantuntijaorganisaatio", "arjen johtajuus", "oppiva organisaatio", "tuottavuuden kasvattaminen", "eskaloituminen", "yhteiskuntavastuu", "kehityshanke", "sitouttaminen", "organisaatiotaso", "muutoshanke", "byod", "kehittämistarve", "kartoitus", "tarveharkinta", "kasvuhakuinen", "tulospohjainen", "organisaatiouudistus", "palvelumalli", "johtamisjärjestelmä", "verkostoitumismahdollisuus", "klousaaminen", "muutosjohtaminen",  "käyttöönotto", "statement", "Facebook", "LinkedIn", "Twitter","TikTok", "Tykkää meistä!", "alan parhaat osaajat", "voittajatiimi", "laatupalaute", "kehittämispäivä", "presentaatio", "kokonaisvaltaiset palveluratkaisut", "wow-elämys", "big data", "portfolio", "IoT", "fasilitointi", "scrum", "askelmerkki", "hiilineutraali", "hiilijalanjälki", "ilmastoystävällinen", "ilmastonmuutos", "mikromuovi", "ilmastoteko", "allokaatio", "agile", "metaversumi"]
  }  
  
  
  
  function createTable(rows, columns, bs) {
      let counter = 0, body = document.body, tbl = document.createElement('table');
      tbl.id = 'bsTable';
   
  
      for (let i = 0; i < rows; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < columns; j++) {
            let td = tr.insertCell();
            td.innerHTML= "<p>"+bs[counter]+"</p>";
            td.addEventListener("click", toggleSelection);
            counter+=1;
        }
      }
      return (tbl);
  }
  
   function createRandomized(amount) {
          let isUsed = new Array(settings.worklifeBS.length), foundStrings = [], numberFound = 0;
  
            for (i = 0; i < amount; i += 1) {
              isUsed[i] = false;
              }
              
            do {
              numberFound = Math.floor(Math.random() * settings.worklifeBS.length);
              if (isUsed[numberFound] === false) {
                isUsed[numberFound] = true;
                foundStrings.push(settings.worklifeBS[numberFound]);
              }
            } while (foundStrings.length !== amount);
          return foundStrings;
  }
  
  
  function toggleSelection(){
    this.classList.toggle("selected");
  }
  
  function initializeBingo(){
    let  bingoTable = document.getElementById("bsTable");
    if (bingoTable){
      bingoTable.remove();
    }
    document.getElementById("hevonpaska").appendChild(createTable(settings.ROWS, settings.COLUMNS, createRandomized(settings.CELLS)));
  }
  
  document.getElementById("refresh-default").addEventListener("click", initializeBingo);
  document.getElementById("print-default").addEventListener("click", function(){window.print()});
  initializeBingo();
})(); 

