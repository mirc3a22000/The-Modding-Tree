let modInfo = {
	name: "The Lime Upgrade Tree",
	id: "limesave",
	author: "mirc3a22000",
	pointsName: "Limes",
	modFiles: ["layers.js", "tree.js"],

	discordName: "None",
	discordLink: "discord.gg/channels/@me",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.2.1",
	name: "Continuing liming",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0.1</h3><br>
		- Added Limes!<br>
		- Added Lime Upgrades.<br>
		<br>
	<h3>v0.0.2</h3><br>
		- More lime upgrades!<br>
		- bug fixes<br>
		<br>
	<h3>v0.0.2.1</h3><br>
		- Added endgame screen<br>
		- Added achievements`

	

let winText = `Congratulations! You have reached the end and finished The Lime Upgrade Tree, but for now we wait...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

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
]

// Determines when the game "ends"
function isEndgame() {
	return hasUpgrade("L", 51)
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