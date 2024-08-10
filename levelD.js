//Defining variables: const variables
//base stats object dictionary
const BSBulbasaur = { "bhp": 45, "batk": 49, "bdef": 49, "bspa": 65, "bspd": 65, "bspe": 45 };
const BSIvysaur = { "bhp": 60, "batk": 62, "bdef": 63, "bspa": 80, "bspd": 80, "bspe": 60 };
const BSVenusaur = { "bhp": 80, "batk": 82, "bdef": 83, "bspa": 100, "bspd": 100, "bspe": 80 };
const BSCharmander = { "bhp": 39, "batk": 52, "bdef": 43, "bspa": 60, "bspd": 50, "bspe": 65 };
const BSCharmeleon = { "bhp": 58, "batk": 64, "bdef": 58, "bspa": 80, "bspd": 65, "bspe": 80 };
const BSCharizard = { "bhp": 78, "batk": 84, "bdef": 78, "bspa": 109, "bspd": 85, "bspe": 100 };
const BSSquirtle = { "bhp": 44, "batk": 48, "bdef": 65, "bspa": 50, "bspd": 64, "bspe": 43 };
const BSWartortle = { "bhp": 59, "batk": 63, "bdef": 80, "bspa": 65, "bspd": 80, "bspe": 58 };
const BSBlastoise = { "bhp": 79, "batk": 83, "bdef": 100, "bspa": 85, "bspd": 105, "bspe": 78 };
const BSCaterpie = { "bhp": 45, "batk": 30, "bdef": 35, "bspa": 20, "bspd": 20, "bspe": 45 };
const BSMetapod = { "bhp": 50, "batk": 20, "bdef": 55, "bspa": 25, "bspd": 25, "bspe": 30 };
const BSButterfree = { "bhp": 60, "batk": 45, "bdef": 50, "bspa": 90, "bspd": 80, "bspe": 70 };
const BSWeedle = { "bhp": 40, "batk": 35, "bdef": 30, "bspa": 20, "bspd": 20, "bspe": 50 };
const BSKakuna = { "bhp": 45, "batk": 25, "bdef": 50, "bspa": 25, "bspd": 25, "bspe": 35 };
const BSBeedrill = { "bhp": 65, "batk": 90, "bdef": 40, "bspa": 45, "bspd": 80, "bspe": 75 };
const BSPidgey = { "bhp": 40, "batk": 45, "bdef": 40, "bspa": 35, "bspd": 35, "bspe": 56 };
const BSPidgeotto = { "bhp": 63, "batk": 60, "bdef": 55, "bspa": 50, "bspd": 50, "bspe": 71 };
const BSPidgeot = { "bhp": 83, "batk": 80, "bdef": 75, "bspa": 70, "bspd": 70, "bspe": 101 };
const BSRattata = { "bhp": 30, "batk": 56, "bdef": 35, "bspa": 25, "bspd": 35, "bspe": 72 };
const BSRaticate = { "bhp": 55, "batk": 81, "bdef": 60, "bspa": 50, "bspd": 70, "bspe": 87 };
const BSSpearow = { "bhp": 40, "batk": 60, "bdef": 30, "bspa": 31, "bspd": 31, "bspe": 70 };
const BSFearow = { "bhp": 65, "batk": 90, "bdef": 65, "bspa": 61, "bspd": 61, "bspe": 100 };
const BSEkans = { "bhp": 35, "batk": 60, "bdef": 44, "bspa": 40, "bspd": 54, "bspe": 55 };
const BSArbok = { "bhp": 60, "batk": 95, "bdef": 69, "bspa": 65, "bspd": 79, "bspe": 80 };
const BSPikachu = { "bhp": 35, "batk": 55, "bdef": 40, "bspa": 50, "bspd": 50, "bspe": 90 };
const BSRaichu = { "bhp": 60, "batk": 90, "bdef": 55, "bspa": 90, "bspd": 80, "bspe": 100 };
const BSSandshrew = { "bhp": 50, "batk": 75, "bdef": 85, "bspa": 20, "bspd": 30, "bspe": 40 };
const BSSandslash = { "bhp": 75, "batk": 100, "bdef": 110, "bspa": 45, "bspd": 55, "bspe": 65 };
const BSNidoranF = { "bhp": 55, "batk": 47, "bdef": 53, "bspa": 40, "bspd": 40, "bspe": 41 };
const BSNidorina = { "bhp": 70, "batk": 62, "bdef": 67, "bspa": 55, "bspd": 55, "bspe": 56 };
const BSNidoqueen = { "bhp": 90, "batk": 92, "bdef": 87, "bspa": 75, "bspd": 85, "bspe": 76 };
const BSNidoranM = { "bhp": 46, "batk": 57, "bdef": 40, "bspa": 40, "bspd": 40, "bspe": 50 };
const BSNidorino = { "bhp": 61, "batk": 72, "bdef": 57, "bspa": 50, "bspd": 55, "bspe": 65 };
const BSNidoking = { "bhp": 81, "batk": 102, "bdef": 77, "bspa": 85, "bspd": 75, "bspe": 85 };
const BSClefairy = { "bhp": 70, "batk": 45, "bdef": 48, "bspa": 60, "bspd": 65, "bspe": 35 };
const BSClefable = { "bhp": 95, "batk": 70, "bdef": 73, "bspa": 95, "bspd": 90, "bspe": 60 };
const BSVulpix = { "bhp": 48, "batk": 41, "bdef": 40, "bspa": 50, "bspd": 65, "bspe": 65 };
const BSNinetales = { "bhp": 73, "batk": 76, "bdef": 75, "bspa": 81, "bspd": 100, "bspe": 100 };
const BSJigglypuff = { "bhp": 115, "batk": 45, "bdef": 20, "bspa": 45, "bspd": 25, "bspe": 20 };
const BSWigglytuff = { "bhp": 140, "batk": 70, "bdef": 45, "bspa": 85, "bspd": 50, "bspe": 45 };
const BSZubat = { "bhp": 40, "batk": 45, "bdef": 35, "bspa": 30, "bspd": 40, "bspe": 55 };
const BSGolbat = { "bhp": 75, "batk": 80, "bdef": 70, "bspa": 65, "bspd": 75, "bspe": 90 };
const BSOddish = { "bhp": 45, "batk": 50, "bdef": 55, "bspa": 75, "bspd": 65, "bspe": 30 };
const BSGloom = { "bhp": 60, "batk": 65, "bdef": 70, "bspa": 85, "bspd": 75, "bspe": 40 };
const BSVileplume = { "bhp": 75, "batk": 80, "bdef": 85, "bspa": 110, "bspd": 90, "bspe": 50 };
const BSParas = { "bhp": 35, "batk": 70, "bdef": 55, "bspa": 45, "bspd": 55, "bspe": 25 };
const BSParasect = { "bhp": 60, "batk": 95, "bdef": 80, "bspa": 60, "bspd": 80, "bspe": 30 };
const BSVenonat = { "bhp": 60, "batk": 55, "bdef": 50, "bspa": 40, "bspd": 55, "bspe": 45 };
const BSVenomoth = { "bhp": 70, "batk": 65, "bdef": 60, "bspa": 90, "bspd": 75, "bspe": 90 };
const BSDiglett = { "bhp": 10, "batk": 55, "bdef": 25, "bspa": 35, "bspd": 45, "bspe": 95 };
const BSDugtrio = { "bhp": 35, "batk": 100, "bdef": 50, "bspa": 50, "bspd": 70, "bspe": 120 };
const BSMeowth = { "bhp": 40, "batk": 45, "bdef": 35, "bspa": 40, "bspd": 40, "bspe": 90 };
const BSPersian = { "bhp": 65, "batk": 70, "bdef": 60, "bspa": 65, "bspd": 65, "bspe": 115 };
const BSPsyduck = { "bhp": 50, "batk": 52, "bdef": 48, "bspa": 65, "bspd": 60, "bspe": 55 };
const BSGolduck = { "bhp": 80, "batk": 82, "bdef": 78, "bspa": 95, "bspd": 80, "bspe": 85 };
const BSMankey = { "bhp": 40, "batk": 80, "bdef": 35, "bspa": 35, "bspd": 45, "bspe": 70 };
const BSPrimeape = { "bhp": 65, "batk": 105, "bdef": 60, "bspa": 60, "bspd": 70, "bspe": 95 };
const BSGrowlithe = { "bhp": 55, "batk": 70, "bdef": 45, "bspa": 70, "bspd": 50, "bspe": 60 };
const BSArcanine = { "bhp": 90, "batk": 110, "bdef": 80, "bspa": 95, "bspd": 80, "bspe": 95 };
const BSPoliwag = { "bhp": 40, "batk": 50, "bdef": 40, "bspa": 40, "bspd": 40, "bspe": 90 };
const BSPoliwhirl = { "bhp": 65, "batk": 65, "bdef": 65, "bspa": 50, "bspd": 50, "bspe": 90 };
const BSPoliwrath = { "bhp": 90, "batk": 95, "bdef": 95, "bspa": 70, "bspd": 90, "bspe": 70 };
const BSAbra = { "bhp": 25, "batk": 20, "bdef": 15, "bspa": 105, "bspd": 55, "bspe": 90 };
const BSKadabra = { "bhp": 40, "batk": 35, "bdef": 30, "bspa": 120, "bspd": 70, "bspe": 105 };
const BSAlakazam = { "bhp": 55, "batk": 50, "bdef": 45, "bspa": 135, "bspd": 95, "bspe": 120 };
const BSMachop = { "bhp": 70, "batk": 80, "bdef": 50, "bspa": 35, "bspd": 35, "bspe": 35 };
const BSMachoke = { "bhp": 80, "batk": 100, "bdef": 70, "bspa": 50, "bspd": 60, "bspe": 45 };
const BSMachamp = { "bhp": 90, "batk": 130, "bdef": 80, "bspa": 65, "bspd": 85, "bspe": 55 };
const BSBellsprout = { "bhp": 50, "batk": 75, "bdef": 35, "bspa": 70, "bspd": 30, "bspe": 40 };
const BSWeepinbell = { "bhp": 65, "batk": 90, "bdef": 50, "bspa": 85, "bspd": 45, "bspe": 55 };
const BSVictreebel = { "bhp": 80, "batk": 105, "bdef": 65, "bspa": 100, "bspd": 70, "bspe": 70 };
const BSTentacool = { "bhp": 40, "batk": 40, "bdef": 35, "bspa": 50, "bspd": 100, "bspe": 70 };
const BSTentacruel = { "bhp": 80, "batk": 70, "bdef": 65, "bspa": 80, "bspd": 120, "bspe": 100 };
const BSGeodude = { "bhp": 40, "batk": 80, "bdef": 100, "bspa": 30, "bspd": 30, "bspe": 20 };
const BSGraveler = { "bhp": 55, "batk": 95, "bdef": 115, "bspa": 45, "bspd": 45, "bspe": 35 };
const BSGolem = { "bhp": 80, "batk": 120, "bdef": 130, "bspa": 55, "bspd": 65, "bspe": 45 };
const BSPonyta = { "bhp": 55, "batk": 85, "bdef": 55, "bspa": 65, "bspd": 65, "bspe": 90 };
const BSRapidash = { "bhp": 65, "batk": 100, "bdef": 70, "bspa": 80, "bspd": 80, "bspe": 105 };
const BSSlowpoke = { "bhp": 90, "batk": 65, "bdef": 65, "bspa": 40, "bspd": 40, "bspe": 15 };
const BSSlowbro = { "bhp": 95, "batk": 75, "bdef": 110, "bspa": 100, "bspd": 80, "bspe": 30 };
const BSMagnemite = { "bhp": 25, "batk": 35, "bdef": 70, "bspa": 96, "bspd": 55, "bspe": 45 };
const BSMagneton = { "bhp": 50, "batk": 60, "bdef": 95, "bspa": 120, "bspd": 70, "bspe": 70 };
const BSFarfetchd = { "bhp": 52, "batk": 90, "bdef": 55, "bspa": 58, "bspd": 62, "bspe": 60 };
const BSDoduo = { "bhp": 35, "batk": 85, "bdef": 45, "bspa": 35, "bspd": 35, "bspe": 75 };
const BSDodrio = { "bhp": 60, "batk": 110, "bdef": 70, "bspa": 60, "bspd": 60, "bspe": 110 };
const BSSeel = { "bhp": 65, "batk": 45, "bdef": 55, "bspa": 45, "bspd": 70, "bspe": 45 };
const BSDewgong = { "bhp": 90, "batk": 70, "bdef": 80, "bspa": 70, "bspd": 95, "bspe": 70 };
const BSGrimer = { "bhp": 80, "batk": 80, "bdef": 50, "bspa": 40, "bspd": 50, "bspe": 25 };
const BSMuk = { "bhp": 105, "batk": 105, "bdef": 75, "bspa": 65, "bspd": 100, "bspe": 50 };
const BSShellder = { "bhp": 30, "batk": 65, "bdef": 100, "bspa": 45, "bspd": 25, "bspe": 40 };
const BSCloyster = { "bhp": 50, "batk": 95, "bdef": 180, "bspa": 85, "bspd": 45, "bspe": 70 };
const BSGastly = { "bhp": 30, "batk": 35, "bdef": 30, "bspa": 100, "bspd": 35, "bspe": 80 };
const BSHaunter = { "bhp": 45, "batk": 50, "bdef": 45, "bspa": 115, "bspd": 55, "bspe": 95 };
const BSGengar = { "bhp": 60, "batk": 65, "bdef": 60, "bspa": 130, "bspd": 75, "bspe": 110 };
const BSOnix = { "bhp": 35, "batk": 45, "bdef": 160, "bspa": 30, "bspd": 45, "bspe": 70 };
const BSDrowzee = { "bhp": 60, "batk": 48, "bdef": 45, "bspa": 43, "bspd": 90, "bspe": 42 };
const BSHypno = { "bhp": 85, "batk": 73, "bdef": 70, "bspa": 73, "bspd": 115, "bspe": 67 };
const BSKrabby = { "bhp": 30, "batk": 105, "bdef": 90, "bspa": 25, "bspd": 25, "bspe": 50 };
const BSKingler = { "bhp": 55, "batk": 130, "bdef": 115, "bspa": 50, "bspd": 50, "bspe": 75 };
const BSVoltorb = { "bhp": 40, "batk": 30, "bdef": 50, "bspa": 55, "bspd": 55, "bspe": 100 };
const BSElectrode = { "bhp": 60, "batk": 50, "bdef": 70, "bspa": 80, "bspd": 80, "bspe": 150 };
const BSExeggcute = { "bhp": 64, "batk": 40, "bdef": 80, "bspa": 60, "bspd": 45, "bspe": 40 };
const BSExeggutor = { "bhp": 95, "batk": 95, "bdef": 85, "bspa": 125, "bspd": 75, "bspe": 55 };
const BSCubone = { "bhp": 50, "batk": 50, "bdef": 95, "bspa": 40, "bspd": 50, "bspe": 35 };
const BSMarowak = { "bhp": 60, "batk": 80, "bdef": 110, "bspa": 50, "bspd": 80, "bspe": 45 };
const BSHitmonlee = { "bhp": 50, "batk": 120, "bdef": 53, "bspa": 35, "bspd": 115, "bspe": 87 };
const BSHitmonchan = { "bhp": 50, "batk": 105, "bdef": 79, "bspa": 35, "bspd": 110, "bspe": 76 };
const BSLickitung = { "bhp": 90, "batk": 55, "bdef": 75, "bspa": 60, "bspd": 75, "bspe": 30 };
const BSKoffing = { "bhp": 40, "batk": 65, "bdef": 95, "bspa": 60, "bspd": 45, "bspe": 35 };
const BSWeezing = { "bhp": 65, "batk": 90, "bdef": 120, "bspa": 85, "bspd": 70, "bspe": 60 };
const BSRhyhorn = { "bhp": 80, "batk": 85, "bdef": 95, "bspa": 30, "bspd": 30, "bspe": 25 };
const BSRhydon = { "bhp": 105, "batk": 130, "bdef": 120, "bspa": 45, "bspd": 45, "bspe": 40 };
const BSChansey = { "bhp": 250, "batk": 5, "bdef": 5, "bspa": 35, "bspd": 105, "bspe": 50 };
const BSTangela = { "bhp": 65, "batk": 55, "bdef": 115, "bspa": 100, "bspd": 40, "bspe": 60 };
const BSKangaskhan = { "bhp": 105, "batk": 95, "bdef": 80, "bspa": 40, "bspd": 80, "bspe": 90 };
const BSHorsea = { "bhp": 30, "batk": 40, "bdef": 70, "bspa": 70, "bspd": 25, "bspe": 60 };
const BSSeadra = { "bhp": 55, "batk": 65, "bdef": 95, "bspa": 95, "bspd": 45, "bspe": 85 };
const BSGoldeen = { "bhp": 45, "batk": 67, "bdef": 60, "bspa": 35, "bspd": 60, "bspe": 63 };
const BSSeaking = { "bhp": 80, "batk": 92, "bdef": 65, "bspa": 65, "bspd": 80, "bspe": 68 };
const BSStaryu = { "bhp": 30, "batk": 45, "bdef": 55, "bspa": 70, "bspd": 55, "bspe": 85 };
const BSStarmie = { "bhp": 60, "batk": 75, "bdef": 85, "bspa": 100, "bspd": 85, "bspe": 115 };
const BSMrMime = { "bhp": 40, "batk": 45, "bdef": 65, "bspa": 100, "bspd": 120, "bspe": 90 };
const BSScyther = { "bhp": 70, "batk": 110, "bdef": 80, "bspa": 55, "bspd": 80, "bspe": 105 };
const BSJynx = { "bhp": 65, "batk": 50, "bdef": 35, "bspa": 115, "bspd": 95, "bspe": 95 };
const BSElectabuzz = { "bhp": 65, "batk": 83, "bdef": 57, "bspa": 95, "bspd": 85, "bspe": 105 };
const BSMagmar = { "bhp": 65, "batk": 95, "bdef": 57, "bspa": 100, "bspd": 85, "bspe": 93 };
const BSPinsir = { "bhp": 65, "batk": 125, "bdef": 100, "bspa": 55, "bspd": 70, "bspe": 85 };
const BSTauros = { "bhp": 75, "batk": 100, "bdef": 95, "bspa": 40, "bspd": 70, "bspe": 110 };
const BSMagikarp = { "bhp": 20, "batk": 10, "bdef": 55, "bspa": 15, "bspd": 20, "bspe": 80 };
const BSGyarados = { "bhp": 95, "batk": 125, "bdef": 79, "bspa": 60, "bspd": 110, "bspe": 81 };
const BSLapras = { "bhp": 130, "batk": 85, "bdef": 80, "bspa": 85, "bspd": 95, "bspe": 60 };
const BSDitto = { "bhp": 48, "batk": 48, "bdef": 48, "bspa": 48, "bspd": 48, "bspe": 48 };
const BSEevee = { "bhp": 55, "batk": 55, "bdef": 50, "bspa": 45, "bspd": 65, "bspe": 55 };
const BSVaporeon = { "bhp": 130, "batk": 65, "bdef": 60, "bspa": 110, "bspd": 95, "bspe": 65 };
const BSJolteon = { "bhp": 65, "batk": 65, "bdef": 60, "bspa": 110, "bspd": 95, "bspe": 130 };
const BSFlareon = { "bhp": 65, "batk": 130, "bdef": 60, "bspa": 95, "bspd": 110, "bspe": 65 };
const BSPorygon = { "bhp": 65, "batk": 60, "bdef": 70, "bspa": 85, "bspd": 75, "bspe": 40 };
const BSOmanyte = { "bhp": 35, "batk": 40, "bdef": 100, "bspa": 90, "bspd": 55, "bspe": 35 };
const BSOmastar = { "bhp": 70, "batk": 60, "bdef": 125, "bspa": 115, "bspd": 70, "bspe": 55 };
const BSKabuto = { "bhp": 30, "batk": 80, "bdef": 90, "bspa": 55, "bspd": 45, "bspe": 55 };
const BSKabutops = { "bhp": 60, "batk": 115, "bdef": 105, "bspa": 65, "bspd": 75, "bspe": 80 };
const BSAerodactyl = { "bhp": 80, "batk": 105, "bdef": 65, "bspa": 60, "bspd": 75, "bspe": 130 };
const BSSnorlax = { "bhp": 160, "batk": 110, "bdef": 65, "bspa": 65, "bspd": 110, "bspe": 30 };
const BSArticuno = { "bhp": 90, "batk": 85, "bdef": 100, "bspa": 95, "bspd": 125, "bspe": 85 };
const BSZapdos = { "bhp": 90, "batk": 90, "bdef": 85, "bspa": 125, "bspd": 90, "bspe": 100 };
const BSMoltres = { "bhp": 90, "batk": 100, "bdef": 90, "bspa": 125, "bspd": 85, "bspe": 90 };
const BSDratini = { "bhp": 41, "batk": 64, "bdef": 45, "bspa": 50, "bspd": 50, "bspe": 50 };
const BSDragonair = { "bhp": 61, "batk": 84, "bdef": 65, "bspa": 70, "bspd": 70, "bspe": 70 };
const BSDragonite = { "bhp": 91, "batk": 134, "bdef": 95, "bspa": 100, "bspd": 100, "bspe": 80 };
const BSMewtwo = { "bhp": 106, "batk": 110, "bdef": 90, "bspa": 154, "bspd": 90, "bspe": 130 };
const BSMew = { "bhp": 100, "batk": 100, "bdef": 100, "bspa": 100, "bspd": 100, "bspe": 100 };

//the pokemonData dictionary: shows all 151 original pokemon and their data in the order [ID, name, type1, type2, BaseStat object]
const pokemonData = [[1, "Bulbasaur", "Grass", "Poison", BSBulbasaur],
[2, "Ivysaur", "Grass", "Poison", BSIvysaur],
[3, "Venusaur", "Grass", "Poison", BSVenusaur],
[4, "Charmander", "Fire", "None", BSCharmander],
[5, "Charmeleon", "Fire", "None", BSCharmeleon],
[6, "Charizard", "Fire", "Flying", BSCharizard],
[7, "Squirtle", "Water", "None", BSSquirtle],
[8, "Wartortle", "Water", "None", BSWartortle],
[9, "Blastoise", "Water", "None", BSBlastoise],
[10, "Caterpie", "Bug", "None", BSCaterpie],
[11, "Metapod", "Bug", "None", BSMetapod],
[12, "Butterfree", "Bug", "Flying", BSButterfree],
[13, "Weedle", "Bug", "Poison", BSWeedle],
[14, "Kakuna", "Bug", "Poison", BSKakuna],
[15, "Beedrill", "Bug", "Poison", BSBeedrill],
[16, "Pidgey", "Normal", "Flying", BSPidgey],
[17, "Pidgeotto", "Normal", "Flying", BSPidgeotto],
[18, "Pidgeot", "Normal", "Flying", BSPidgeot],
[19, "Rattata", "Normal", "None", BSRattata],
[20, "Raticate", "Normal", "None", BSRaticate],
[21, "Spearow", "Normal", "Flying", BSSpearow],
[22, "Fearow", "Normal", "Flying", BSFearow],
[23, "Ekans", "Poison", "None", BSEkans],
[24, "Arbok", "Poison", "None", BSArbok],
[25, "Pikachu", "Electric", "None", BSPikachu],
[26, "Raichu", "Electric", "None", BSRaichu],
[27, "Sandshrew", "Ground", "None", BSSandshrew],
[28, "Sandslash", "Ground", "None", BSSandslash],
[29, "Nidoran♀", "Poison", "None", BSNidoranF],
[30, "Nidorina", "Poison", "None", BSNidorina],
[31, "Nidoqueen", "Poison", "Ground", BSNidoqueen],
[32, "Nidoran♂", "Poison", "None", BSNidoranM],
[33, "Nidorino", "Poison", "None", BSNidorino],
[34, "Nidoking", "Poison", "Ground", BSNidoking],
[35, "Clefairy", "Fairy", "None", BSClefairy],
[36, "Clefable", "Fairy", "None", BSClefable],
[37, "Vulpix", "Fire", "None", BSVulpix],
[38, "Ninetales", "Fire", "None", BSNinetales],
[39, "Jigglypuff", "Normal", "Fairy", BSJigglypuff],
[40, "Wigglytuff", "Normal", "Fairy", BSWigglytuff],
[41, "Zubat", "Poison", "Flying", BSZubat],
[42, "Golbat", "Poison", "Flying", BSGolbat],
[43, "Oddish", "Grass", "Poison", BSOddish],
[44, "Gloom", "Grass", "Poison", BSGloom],
[45, "Vileplume", "Grass", "Poison", BSVileplume],
[46, "Paras", "Bug", "Grass", BSParas],
[47, "Parasect", "Bug", "Grass", BSParasect],
[48, "Venonat", "Bug", "Poison", BSVenonat],
[49, "Venomoth", "Bug", "Poison", BSVenomoth],
[50, "Diglett", "Ground", "None", BSDiglett],
[51, "Dugtrio", "Ground", "None", BSDugtrio],
[52, "Meowth", "Normal", "None", BSMeowth],
[53, "Persian", "Normal", "None", BSPersian],
[54, "Psyduck", "Water", "None", BSPsyduck],
[55, "Golduck", "Water", "None", BSGolduck],
[56, "Mankey", "Fighting", "None", BSMankey],
[57, "Primeape", "Fighting", "None", BSPrimeape],
[58, "Growlithe", "Fire", "None", BSGrowlithe],
[59, "Arcanine", "Fire", "None", BSArcanine],
[60, "Poliwag", "Water", "None", BSPoliwag],
[61, "Poliwhirl", "Water", "None", BSPoliwhirl],
[62, "Poliwrath", "Water", "Fighting", BSPoliwrath],
[63, "Abra", "Psychic", "None", BSAbra],
[64, "Kadabra", "Psychic", "None", BSKadabra],
[65, "Alakazam", "Psychic", "None", BSAlakazam],
[66, "Machop", "Fighting", "None", BSMachop],
[67, "Machoke", "Fighting", "None", BSMachoke],
[68, "Machamp", "Fighting", "None", BSMachamp],
[69, "Bellsprout", "Grass", "Poison", BSBellsprout],
[70, "Weepinbell", "Grass", "Poison", BSWeepinbell],
[71, "Victreebel", "Grass", "Poison", BSVictreebel],
[72, "Tentacool", "Water", "Poison", BSTentacool],
[73, "Tentacruel", "Water", "Poison", BSTentacruel],
[74, "Geodude", "Rock", "Ground", BSGeodude],
[75, "Graveler", "Rock", "Ground", BSGraveler],
[76, "Golem", "Rock", "Ground", BSGolem],
[77, "Ponyta", "Fire", "None", BSPonyta],
[78, "Rapidash", "Fire", "None", BSRapidash],
[79, "Slowpoke", "Water", "Psychic", BSSlowpoke],
[80, "Slowbro", "Water", "Psychic", BSSlowbro],
[81, "Magnemite", "Electric", "Steel", BSMagnemite],
[82, "Magneton", "Electric", "Steel", BSMagneton],
[83, "Farfetch'd", "Normal", "Flying", BSFarfetchd],
[84, "Doduo", "Normal", "Flying", BSDoduo],
[85, "Dodrio", "Normal", "Flying", BSDodrio],
[86, "Seel", "Water", "None", BSSeel],
[87, "Dewgong", "Water", "Ice", BSDewgong],
[88, "Grimer", "Poison", "None", BSGrimer],
[89, "Muk", "Poison", "None", BSMuk],
[90, "Shellder", "Water", "None", BSShellder],
[91, "Cloyster", "Water", "Ice", BSCloyster],
[92, "Gastly", "Ghost", "Poison", BSGastly],
[93, "Haunter", "Ghost", "Poison", BSHaunter],
[94, "Gengar", "Ghost", "Poison", BSGengar],
[95, "Onix", "Rock", "Ground", BSOnix],
[96, "Drowzee", "Psychic", "None", BSDrowzee],
[97, "Hypno", "Psychic", "None", BSHypno],
[98, "Krabby", "Water", "None", BSKrabby],
[99, "Kingler", "Water", "None", BSKingler],
[100, "Voltorb", "Electric", "None", BSVoltorb],
[101, "Electrode", "Electric", "None", BSElectrode],
[102, "Exeggcute", "Grass", "Psychic", BSExeggcute],
[103, "Exeggutor", "Grass", "Psychic", BSExeggutor],
[104, "Cubone", "Ground", "None", BSCubone],
[105, "Marowak", "Ground", "None", BSMarowak],
[106, "Hitmonlee", "Fighting", "None", BSHitmonlee],
[107, "Hitmonchan", "Fighting", "None", BSHitmonchan],
[108, "Lickitung", "Normal", "None", BSLickitung],
[109, "Koffing", "Poison", "None", BSKoffing],
[110, "Weezing", "Poison", "None", BSWeezing],
[111, "Rhyhorn", "Ground", "Rock", BSRhyhorn],
[112, "Rhydon", "Ground", "Rock", BSRhydon],
[113, "Chansey", "Normal", "None", BSChansey],
[114, "Tangela", "Grass", "None", BSTangela],
[115, "Kangaskhan", "Normal", "None", BSKangaskhan],
[116, "Horsea", "Water", "None", BSHorsea],
[117, "Seadra", "Water", "None", BSSeadra],
[118, "Goldeen", "Water", "None", BSGoldeen],
[119, "Seaking", "Water", "None", BSSeaking],
[120, "Staryu", "Water", "None", BSStaryu],
[121, "Starmie", "Water", "Psychic", BSStarmie],
[122, "Mr. Mime", "Psychic", "Fairy", BSMrMime],
[123, "Scyther", "Bug", "Flying", BSScyther],
[124, "Jynx", "Ice", "Psychic", BSJynx],
[125, "Electabuzz", "Electric", "None", BSElectabuzz],
[126, "Magmar", "Fire", "None", BSMagmar],
[127, "Pinsir", "Bug", "None", BSPinsir],
[128, "Tauros", "Normal", "None", BSTauros],
[129, "Magikarp", "Water", "None", BSMagikarp],
[130, "Gyarados", "Water", "Flying", BSGyarados],
[131, "Lapras", "Water", "Ice", BSLapras],
[132, "Ditto", "Normal", "None", BSDitto],
[133, "Eevee", "Normal", "None", BSEevee],
[134, "Vaporeon", "Water", "None", BSVaporeon],
[135, "Jolteon", "Electric", "None", BSJolteon],
[136, "Flareon", "Fire", "None", BSFlareon],
[137, "Porygon", "Normal", "None", BSPorygon],
[138, "Omanyte", "Rock", "Water", BSOmanyte],
[139, "Omastar", "Rock", "Water", BSOmastar],
[140, "Kabuto", "Rock", "Water", BSKabuto],
[141, "Kabutops", "Rock", "Water", BSKabutops],
[142, "Aerodactyl", "Rock", "Flying", BSAerodactyl],
[143, "Snorlax", "Normal", "None", BSSnorlax],
[144, "Articuno", "Ice", "Flying", BSArticuno],
[145, "Zapdos", "Electric", "Flying", BSZapdos],
[146, "Moltres", "Fire", "Flying", BSMoltres],
[147, "Dratini", "Dragon", "None", BSDratini],
[148, "Dragonair", "Dragon", "None", BSDragonair],
[149, "Dragonite", "Dragon", "Flying", BSDragonite],
[150, "Mewtwo", "Psychic", "None", BSMewtwo],
[151, "Mew", "Psychic", "None", BSMew]
];

//colours for types in order [button colour, background colour, boxcolour]
const typeCol = {
"Bug" : ["#F4FFCF", "#C9DD83"],
"Dark" : ["#40205A", "#BE9FD7"],
"Dragon" : ["#7280EF", "#CDD3FF"],
"Electric" : ["#F2FF69", "#FCFFDD"],
"Fairy" : ["#FFD2EE", "#FFE7F6"],
"Fighting" : ["#D3711F", "#F4CCAB"],
"Fire" : ["#FF832D", "#FFC9A4"],
"Flying" : ["#ADFFF1", "#E2FFFA"],
"Ghost" : ["#BCA0E4", "#DCD2E9"],
"Grass" : ["#53F191", "#B8FFD4"],
"Ground" : ["#D7AC3F", "#E7D7AE"],
"Ice" : ["#7BF1FF", "#A4FFFD"],
"Normal" : ["#ECECEC", "#C9C9C9"],
"Poison" : ["#E780FF", "#EFC8F8"],
"Psychic" : ["#FF77FD", "#FFCAFE"],
"Rock" : ["#D0A66E", "#DAD2C8"],
"Steel" : ["#DFDFDF", "#F2F6F8"],
"Water" : ["#71BEFF", "#B7E8EF"],
"None" : ["whitesmoke", "lightgray"]
}

//creates the pokemon object
function mkPokemon(id){
    //general
    this.id = id;
    this.name = pokemonData[id-1][1];
    this.type1 = pokemonData[id-1][2];
    this.type2 = pokemonData[id-1][3];
    this.bStats = pokemonData[id-1][4];
    this.img = getPkImg(this.id);
    this.colour1 = typeCol[this.type1][0];
    this.colour2 = typeCol[this.type2][0];
    this.bgColour = typeCol[this.type1][1];
    //base stats
    this.bHp = this.bStats["bhp"];
    this.bAtk = this.bStats["batk"];
    this.bDef = this.bStats["bdef"];
    this.bSpa = this.bStats["bspa"];
    this.bSpd = this.bStats["bspd"];
    this.bSpe = this.bStats["bspe"];
    //level
    this.level = getLevel();
    //ivs
    this.ivHp = getIV("hp");
    this.ivAtk = getIV("atk");
    this.ivDef = getIV("def");
    this.ivSpa = getIV("spa");
    this.ivSpd = getIV("spd");
    this.ivSpe = getIV("spe");
    //evs
    this.evHp = getEV("hp");
    this.evAtk = getEV("atk");
    this.evDef = getEV("def");
    this.evSpa = getEV("spa");
    this.evSpd = getEV("spd");
    this.evSpe = getEV("spe");
    //actual stats
    this.hp = Math.floor(0.01 * (2*this.bHp + this.ivHp + Math.floor(0.25*this.evHp) * this.level) + this.level + 10);
    this.atk = (Math.floor(0.01 * (2*this.bAtk + this.ivAtk + Math.floor(0.25*this.evAtk)) * this.level) + 5);
    this.def = (Math.floor(0.01 * (2*this.bDef + this.ivDef + Math.floor(0.25*this.evDef)) * this.level) + 5);
    this.spa = (Math.floor(0.01 * (2*this.bSpa + this.ivSpa + Math.floor(0.25*this.evSpa)) * this.level) + 5);
    this.spd = (Math.floor(0.01 * (2*this.bSpd + this.ivSpd + Math.floor(0.25*this.evSpd)) * this.level) + 5);
    this.spe = (Math.floor(0.01 * (2*this.bSpe + this.ivSpe + Math.floor(0.25*this.evSpe)) * this.level) + 5);
}
    

//this bit makes the pokemon show up for the pokemon search bar
const dropdown = document.getElementById("pokeOptions");
const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const options = wrapper.querySelector(".options");
const searchInput = wrapper.querySelector("input");

//defining let variables
var pokemon = new mkPokemon(1);
updateW(pokemon);

//defining functions
//function for getting level
function getLevel(){
    level = document.getElementById("level").value;
    return Number(level)
}

//functions for getting ivs
function getIV(statName){
    stat = document.getElementById(`iv${statName}`).value;
    return Number(stat)
}

//functions for getting evs
function getEV(statname){
    stat = document.getElementById(`ev${statname}`).value;
    return Number(stat)
}

//adds pokemon to the pokemon dropdown menu
function pokedex(currentPk) {
    options.innerHTML = ""
    pokemonData.forEach(pokemon => {
        let isSelected = pokemon == currentPk ? "selected" : "";
        let listItem = `<li onclick="updateName(this)" id="${isSelected}">${pokemon[1]}</li>`;
        dropdown.insertAdjacentHTML("beforeend",listItem)
    });
}

pokedex()
function getPkImg(pkId) {
    let pkImg = "00" + pkId //the ID of the pokemon in the image link
    if (pkId < 10) {
        pkImg = "00" + pkId
    }
    else if (pkId < 100) {
        pkImg = "0" + pkId
    }
    else {
        pkImg = pkId
    }
    pkImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pkImg}.png`
    return(pkImg)
}

//updaters
//updates the pokemon object once it is selected
function updatePk(pkName) {
    for (let p in pokemonData) {
        if(pokemonData[p][1] == pkName) {
            var pokemon = new mkPokemon(pokemonData[p][0])
            console.log(pokemon.name)
        }
    }
    updateW(pokemon)
}

//removes the dropdown after a pokemon is selected
function updateName(select){
    searchInput.value = "";
    wrapper.classList.remove("active");
    let pokemonName = select.innerText;
    pokedex(pokemonName);
    selectBtn.firstElementChild.innerText = pokemonName;
    pkid = updatePk(pokemonName);
}

//updates the website according to pokemon
function updateW(pk){//pk is the pokmeon object
    document.getElementById("pkimg").src = pk.img
    document.getElementById("type1").innerHTML = pk.type1
    document.getElementById("colour1").style.background = pk.colour1
    document.getElementById("body").style.background = pk.bgColour
    document.getElementById("type2").innerHTML = pk.type2
    document.getElementById("colour2").style.background = pk.colour2
    document.getElementById("hp").innerHTML = pk.hp
    document.getElementById("atk").innerHTML = pk.atk
    document.getElementById("def").innerHTML = pk.def
    document.getElementById("spa").innerHTML = pk.spa
    document.getElementById("spd").innerHTML = pk.spd
    document.getElementById("spe").innerHTML = pk.spe
}

//the search bar
searchInput.addEventListener("keyup", () => {
    let results= [];
    let searchedVal = searchInput.value.toLowerCase();
    results = pokemonData.filter(data => {
        let pkName = data[1];
        return(pkName.toLowerCase().startsWith(searchedVal));
    }).map(data => `<li onclick="updateName(this)">${data[1]}</li>`).join("");
    //this filters pokemonData and only shows matching search results in the dropdown
    options.innerHTML = results ? results : `<p>Check spelling.<p>`;//message if results is empty
});

//toggles the active of the search bar
selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});