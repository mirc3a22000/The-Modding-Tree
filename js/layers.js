addLayer("achievementslmao", {
    row: "side",
    name: "Achievements",
    symbol: "A",
    color: "#FFFF00",
    position: 0,
    type: "none",
    tooltip() {return "Achievements"},

    achievements: {
        11: {
            name: "First lime",
            tooltip: 'Click for your first lime',
            done() {return player.L.points >= 1},
        },
        12: {
            name: "Lots of limes",
            tooltip: 'Click for your first 100 limes',
            done() {return player.L.points >= 100},
        },
        13: {
            name: "No more clicking!",
            tooltip: 'Buy upgrade #10',
            done() {return hasUpgrade("L",51)},
        },
    }
})


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

        if (hasUpgrade('L', 61)) mult = mult.times(upgradeEffect('L', 61)).plus(1);
       

        if (hasUpgrade('L', 32)) mult = mult.times(upgradeEffect('L', 32)).plus(1);
        if (hasUpgrade('L', 31)) mult = mult.times(3.5)
        if (hasUpgrade('L', 33)) mult = mult.times(3.14)

        if (hasUpgrade('L', 41)) mult = mult.times(4)

        if (hasUpgrade('L', 71)) mult = mult.times(10)

        if (hasUpgrade('L', 81)) mult = mult.times(upgradeEffect('L', 81));

        if (hasUpgrade('L', 71)) mult = mult.times(7.5)


        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },

    prestigeButtonText() {
        return "Click for +" + getResetGain("L") + " limes"
    },

    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    passiveGeneration() {
        if (hasUpgrade("L", 51)) return 10
        return 0
     },

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
            unlocked() {return hasUpgrade("L", 11)},
        },
        21: {
            title: "Lime Booster II (#5)",
            description: "1.75x Limes",
            cost: new Decimal(550),
            unlocked() {return hasUpgrade("L", 22)},
        },
        23: {
            title: "Lime Booster I (#4)",
            description: "1.5x Limes",
            cost: new Decimal(365),
            unlocked() {return hasUpgrade("L", 22)},
        },

        31: {
            title: "Lime Booster IV (#9)",
            description: "3.5x Limes",
            cost: new Decimal(100000),
            unlocked() {return hasUpgrade("L", 21)},
        },
        32: {

            effect() {
                return player.L.points.plus(1).log(6);
              },
    
            title: "Lime Synergy I (#6)",
            description() { 
               if (hasUpgrade("L", 32)) return "Limes boost themselves [log6(lime)] by " + format(upgradeEffect('L', 32).plus(1), 2) + "x"
               return "Limes boost themselves [log6(lime)]"
            },
            cost: new Decimal(1000),
            unlocked() {return hasUpgrade("L", 22)},
      
        },

        33: {
            title: "Lime Booster III (#8)",
            description: "3.14x Limes",
            cost: new Decimal(30000),
            unlocked() {return hasUpgrade("L", 23)},
        },

        41: {
            title: "Lime Quadrupler (#7)",
            description: "Quadruple Limes",
            cost: new Decimal(7500),
            unlocked() {return hasUpgrade("L", 32)},
        },
        42: {
            title: "No More Lime (#15)",
            description: "Unlock Lemons (placeholder)",
            cost: new Decimal("3.25e9"),
            unlocked() {return hasUpgrade("L", 41)},
        },

        51: {
            title: "Lime Autoclicker (#10)",
            description: "Generates 1000% of limes per second.",
            cost: new Decimal(350000),
            unlocked() {return hasUpgrade("L", 41)},
        },

        61: {
            title: "Lime Synergy II (#11)",
            effect() {
                return player.L.points.plus(1).log(15);
              },
            description() {  
            if (hasUpgrade("L", 61)) return "Limes boost upgrade Lime Synergy I (#6) by " + format(upgradeEffect('L', 61).plus(1), 2) + "x"
            return "Limes boost upgrade Lime Synergy I (#6)"
            },
            cost: new Decimal(650000),
            unlocked() {return hasUpgrade("L", 51)},
        },

        71: {
            title: "Huge Boost I (#12)",
            description: "10x Limes",
            cost: new Decimal("7.5e6"),
            unlocked() {return hasUpgrade("L", 61)},
        },

        81: {
            title: "Playtime Boost (#13)",
            effect() {
                return Math.log(player.timePlayed) / Math.log(5);
              },
            description() {  
                if (hasUpgrade("L", 81)) return "Get a boost based on active playtime by " + format(upgradeEffect('L', 81), 2) + "x"
                return "Get a boost based on active playtime"
                },
            cost: new Decimal("85e6"),
            unlocked() {return hasUpgrade("L", 71)},
        },

        91: {
            title: "Huge Boost II (#14)",
            description: "7.5x Limes",
            cost: new Decimal("425e6"),
            unlocked() {return hasUpgrade("L", 61)},
        },
    },
})


addLayer("lemons", {
    row: 1,
    name: "Lemons",
    symbol: "L",
    color: "#FFFF00",
    position: 0,
    type: "custom",
    resetsNothing: true,
    resource: "Lemons",
    baseResource: "Limes",
    baseAmount() {return player.L.points},
    requires: new Decimal(3e9),
    branches: ["L"],
    
    canReset() {
        return player.L.points >= new Decimal(3e9)
},

    prestigeButtonText() {
        return "Reset for +" + getResetGain("lemons") + " lemons"
    },

    getResetGain() {
return format(player.L.points.plus(1).div(3e9).log(7.5), 1)
},

    getNextAt() {
lemongain = new Decimal(0).plus(tmp.L.resetGain)
return format(lemongain.plus(1).pow_base(7.5).times(3e9), 1)
},

    onPrestige(gain) {
player.L.points = new Decimal(0)
},

layerShown() {
return hasUpgrade("L", 42)
},

})