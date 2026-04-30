let modInfo = {
	name: "The Lime Upgrade Tree",
	id: "limesave",
	author: "mirc3a22000",
	pointsName: "Limes",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Original TLUT Server",
	discordLink: "https://discord.gg/gGBz2v7jab",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.9",
	name: "can we go back to limes",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- Added Limes!<br>
		- Added Lime Upgrades.<br>
		<br>
	<h3>v0.2</h3><br>
		- More lime upgrades!<br>
		- bug fixes<br>
		v0.2.1<br>
		- Added endgame screen<br>
		- Added achievements<br>
		v0.2.2<br>
		- Added lemons (working)<br>
		- Added more achievements<br>
		- even MORE upgrades<br>
		v0.2.3<br>
		- Added more (one) achievements<br>
		- even MORE upgrades<br>
		v0.2.4<br>
		- Added more achievements<br>
		- even MORE upgrades<br>
		- preparing for the next big update<br>
		<br>
	<h3>v0.3</h3><br>
		- Added Infinity<br>
		- Added Achievements<br>
		- Achievements only appear if you unlocked their layer now<br>
		- New "Mechanic"<br>
		v0.3.1<br>
		- More Infinity Upgrades<br>
		- More Achievements (kinda)<br>
		- Finished Infinity, leaving last upgrade for the next update<br>
		<br>
	<h3>v0.4</h3><br>
		- Added first half of Cosmic<br>
		- Added ACTUAL Achievements<br>
		- Added final Infinity upgrade and its content<br>
		v0.4.1<br>
		- Added 2nd half of Cosmic<br>
		- Made rest of achievements obtainable<br>
		- Added hotkeys<br>
		<br>
	<h3>v0.9</h3><br>
		- Added first half of Omega<br>
		- Added Savebank in Settings<br>
		- Added more Achievements<br>
		- Made Version numbers make sense lol<br>`
	

	

let winText = `Congratulations! You have reached the current end of The Lime Upgrade Tree! Second half of Omega soon!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything", "SaveBankThing"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function displayPoints() {if (player.L.points.gte('1.79e308') && !hasUpgrade("Infinity", 45)) return `You have </span>
		<h2  class="overlayThing" id="points">Infinite</h2> limes`
		if(player.L.points.lt('1e1000')) return `You have </span>
		<h2  class="overlayThing" id="points">${format(player.L.points)}</h2> ${modInfo.pointsName}`
		if(player.L.points.lt('1e1e6')) return `<h2  class="overlayThing" id="points">${format(player.L.points)}</h2> ${modInfo.pointsName}</span>
	<br>`
	},
	function displayPointsPSecond() {if(player.L.points.gte('1.79e308') && !hasUpgrade('Infinity', 45) && hasUpgrade('L', 51)) return `Infinite Limes/sec`
		if(hasUpgrade('L', 51)) return format(tmp.L.resetGain.times(10)) + ` Limes/sec</span>`}
]

// Determines when the game "ends"
function isEndgame() {
	return hasUpgrade("omega", 26)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

// savebank stuff
function SaveBankThing(savename){
	player.L.upgrades = []
	player.lemons.upgrades = []
	setBuyableAmount('lemons', 11, new Decimal(0))
	setBuyableAmount('lemons', 12, new Decimal(0))
	player.Infinity.upgrades = []
	setBuyableAmount('Infinity', 11, new Decimal(0))
	player.cosmic.upgrades = []
	player.omega.upgrades = []
	setBuyableAmount('orange', 11, new Decimal(0))
	setBuyableAmount('orange', 12, new Decimal(0))
	player.grapefruit.upgrades = []
		
	player.L.points = new Decimal(0)
	player.lemons.points = new Decimal(0)
	player.Infinity.points = new Decimal(0)
	player.cosmic.points = new Decimal(0)
	player.cosmic.dust = new Decimal(0)
	player.orange.points = new Decimal(0)
	player.omega.points = new Decimal(0)
	player.omega.lowercase = new Decimal(0)

	if(savename=="lemons") {
		player.L.upgrades = [11, 22, 23, 21, 32, 41, 33, 31, 51, 61, 71, 81, 91, 42]
	}
	if(savename=="infinity") {
		player.L.upgrades = [11, 22, 23, 21, 32, 41, 33, 31, 51, 61, 71, 81, 91, 42, 43, 44, 45, 46, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66, 72, 73, 74, 75, 76, 82, 83, 84, 85, 86, 92, 93, 94, 95]
		player.lemons.upgrades = [11,12,13,14,15,16,21]
		setBuyableAmount('lemons', 11, new Decimal(300))
		setBuyableAmount('lemons', 12, new Decimal(150))
		player.L.points = new Decimal("1.75e308")
	}
	if(savename=="cosmic") {
		player.L.upgrades = [11, 22, 23, 21, 32, 41, 33, 31, 51, 61, 71, 81, 91, 42, 43, 44, 45, 46, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66, 72, 73, 74, 75, 76, 82, 83, 84, 85, 86, 92, 93, 94, 95,101,102,103,104,105]
		player.lemons.upgrades = [11,12,13,14,15,16,21]
		player.Infinity.upgrades = [11,12,13,21,22,23,31,32,33,34,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66,71,72,73,74,75,76,81,82]
		setBuyableAmount('lemons', 11, new Decimal(300))
		setBuyableAmount('lemons', 12, new Decimal(150))
		player.Infinity.points = new Decimal("1.5e26")
	}
	if(savename=="orange") {
		player.L.upgrades = [11, 22, 23, 21, 32, 41, 33, 31, 51, 61, 71, 81, 91, 42, 43, 44, 45, 46, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66, 72, 73, 74, 75, 76, 82, 83, 84, 85, 86, 92, 93, 94, 95,101,102,103,104,105,106]
		player.lemons.upgrades = [11,12,13,14,15,16,21]
		player.Infinity.upgrades = [11,12,13,21,22,23,31,32,33,34,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66,71,72,73,74,75,76,81,82]
		player.cosmic.upgrades = [11,12,13,14,15,16,21,22,101,102,103,104,105,112,113,111,121,122,123]
		setBuyableAmount('lemons', 11, new Decimal(300))
		setBuyableAmount('lemons', 12, new Decimal(150))
		player.Infinity.points = new Decimal("5e29")
	}
	if(savename=="omega") {
		player.L.upgrades = [11, 22, 23, 21, 32, 41, 33, 31, 51, 61, 71, 81, 91, 42, 43, 44, 45, 46, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66, 72, 73, 74, 75, 76, 82, 83, 84, 85, 86, 92, 93, 94, 95,101,102,103,104,105,106]
		player.lemons.upgrades = [11,12,13,14,15,16,21]
		player.Infinity.upgrades = [11,12,13,21,22,23,31,32,33,34,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66,71,72,73,74,75,76,81,82]
		player.cosmic.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,101,102,103,104,105,112,113,111,121,122,123,124,125,126,131,132,133,134,135]
		setBuyableAmount('lemons', 11, new Decimal(300))
		setBuyableAmount('lemons', 12, new Decimal(150))
		setBuyableAmount('orange', 11, new Decimal(50))
		setBuyableAmount('orange', 12, new Decimal(35))
		player.Infinity.points = new Decimal("1.79e308")
	}
}