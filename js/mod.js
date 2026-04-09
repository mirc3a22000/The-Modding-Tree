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
	num: "0.0.4.1",
	name: "WERE SUPPOSED TO BE GETTING LIMES (part 2)",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0.1</h3><br>
		- Added Limes!<br>
		- Added Lime Upgrades.<br>
		<br>
	<h3>v0.0.2</h3><br>
		- More lime upgrades!<br>
		- bug fixes<br>
		v0.0.2.1<br>
		- Added endgame screen<br>
		- Added achievements<br>
		v0.0.2.2<br>
		- Added lemons (working)<br>
		- Added more achievements<br>
		- even MORE upgrades<br>
		v0.0.2.3<br>
		- Added more (one) achievements<br>
		- even MORE upgrades<br>
		v0.0.2.4<br>
		- Added more achievements<br>
		- even MORE upgrades<br>
		- preparing for the next big update<br>
		<br>
	<h3>v0.0.3</h3><br>
		- Added Infinity<br>
		- Added Achievements<br>
		- Achievements only appear if you unlocked their layer now<br>
		- New "Mechanic"<br>
		v0.0.3.1<br>
		- More Infinity Upgrades<br>
		- More Achievements (kinda)<br>
		- Finished Infinity, leaving last upgrade for the next update<br>
		<br>
	<h3>v0.0.4</h3><br>
		- Added first half of Cosmic<br>
		- Added ACTUAL Achievements<br>
		- Added final Infinity upgrade and its content<br>
		v0.0.4.1<br>
		- Added 2nd half of Cosmic<br>
		- Made rest of achievements obtainable<br>
		- Added hotkeys<br>`
	

	

let winText = `Congratulations! You have reached the current end of The Lime Upgrade Tree! one point seven nine 5 three zero eight`

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
	return hasUpgrade("cosmic", 64)
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