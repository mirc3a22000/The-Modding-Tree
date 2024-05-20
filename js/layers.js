addLayer("L", {
    name: "The Lime Clicker(tm) (#1)", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "Limes", // Name of prestige currency
    baseResource: "Limes", // Name of resource prestige is based on
    baseAmount() {return player.L.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('L', 11)) mult = mult.times(2)

        if (hasUpgrade('L', 22)) mult = mult.times(3)
        if (hasUpgrade('L', 23)) mult = mult.times(1.5)
        if (hasUpgrade('L', 21)) mult = mult.times(1.75)

        if (hasUpgrade('L', 32)) mult = mult.times(upgradeEffect('L', 32));
        if (hasUpgrade('L', 31)) mult = mult.times(3.5)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "L: Get Limes", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

    upgrades: {
        11: {
            title: "Lime Doubler (#2)",
            description: "Double Limes",
            cost: new Decimal(50),
        },


        22: {
            title: "Lime Tripler (#3)",
            description: "Triple Limes",
            cost: new Decimal(115),
        },
        21: {
            title: "Lime Booster II (#5)",
            description: "1.75x Limes",
            cost: new Decimal(550),
        },
        23: {
            title: "Lime Booster I (#4)",
            description: "1.5x Limes",
            cost: new Decimal(365),
        },

        31: {
            title: "Lime Booster IV (#9)",
            description: "3.5x Limes",
            cost: new Decimal(100000),
        },
        32: {

            effect() {
                return player.L.points.plus(1).log(6);
              },
    
            title: "Lime Synergy I (#6)",
            description() { 
               return "Limes boost themselves [log6(lime)] by " + format(upgradeEffect('L', 32), 2) + "x"
            },
            cost: new Decimal(1000),
      
        },
    },
})

