addLayer("achievementslmao", {
    row: "side",
    name: "Achievements",
    symbol: "A",
    color: "#FFFF00",
    position: 0,
    type: "none",
    startData() { return {
        unlocked: true,
        points: new Decimal(0)}
    },
    tooltip() {return "Achievements"},

    achievements: {
        11: {
            name: "First lime",
            tooltip: 'Click for your first lime',
            done() {return player.L.points.gte(1)},
        },
        12: {
            name: "Lots of limes",
            tooltip: 'Click for your first 100 limes',
            done() {return player.L.points.gte(100)},
        },
        13: {
            name: "No more clicking!",
            tooltip: 'Buy upgrade #10',
            done() {return hasUpgrade("L",51)},
        },
        21: {
            name: "Hey, I was promised limes!",
            tooltip: 'Get your first lime',
            done() {return player.lemons.points.gte(1)},
        },
        22: {
            name: "Generation? Already?",
            tooltip: `Buy upgrade #18`,
            done() {return hasUpgrade('L', 72)},
        },
        23: {
            name: "Lemons are finally useful",
            tooltip: `Buy upgrade #21`,
            done() {return hasUpgrade('lemons', 11)}
        },
        31: {
            name: "Unnecessary click",
            tooltip: "Why would you do that?",
            done() {return false}
        },
        32: {
            name: "Lime Hater",
            tooltip: "The sequel to Unnecessary click",
            done() {return false}
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
        if (hasUpgrade("L", 12)) mult = mult.times(1000)

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

        if (getBuyableAmount("lemons", 11).gte(1)) mult = mult.mul((buyableEffect("lemons", 11)))

        if (hasUpgrade(`L`, 52)) mult = mult.mul(3)

        if (hasUpgrade(`L`, 62)) mult = mult.times(4.25)

        if (hasUpgrade(`L`, 72)) mult = mult.times(10)

        if (hasUpgrade(`L`, 82)) mult = mult.times(50)

        if (hasUpgrade("lemons", 11)) mult = mult.times(1.25)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)

        if (hasUpgrade('L', 93)) exp = exp.plus(0.08) 

        return exp
    },

    prestigeButtonText() {
        return "Click for +" + format(getResetGain("L")) + " limes"
    },

    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    passiveGeneration() {
        if (hasUpgrade("L", 51)) return 10
        return 0
     },

    onPrestige() {
        if (tmp.L.passiveGeneration > 0 && !hasAchievement("achievementslmao", 31)) {
            player.achievementslmao.achievements.push(31)
            doPopup("achievement","Unnecessary Click")
        }
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
                thing = player.L.points.plus(1).log(6);
                if (hasUpgrade("L", 92)) {
                    lemonboost = player.lemons.points.pow(0.1).log(65).plus(1)
                    thing = thing.pow(lemonboost)}
                return thing
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

        52: {
            title: "Need More Limes (#16)",
            description: "Triple Limes and Double Lemons",
            cost: new Decimal("1e13"),
            unlocked() {return hasUpgrade("L", 42)},
        },

        62: {
            title: "Lemonade (#17)",
            description: "5.5x Lemons and 4.25x Limes",
            cost: new Decimal("1e15"),
            unlocked() {return hasUpgrade("L", 52)}
        },

        61: {
            title: "Lime Synergy II (#11)",
            effect() {
                thing = player.L.points.plus(1).log(15);
                return thing
              },
            description() {  
            if (hasUpgrade("L", 61)) return "Limes boost upgrade Lime Synergy I (#6) by " + format(upgradeEffect('L', 61).plus(1), 2) + "x"
            return "Limes boost upgrade Lime Synergy I (#6)"
            },
            cost: new Decimal(650000),
            unlocked() {return hasUpgrade("L", 51)},
        },

        72: {
            title: "No More Clicking (#18)",
            description: "10x Limes, Lemons and finally generate Lemons!",
            cost: new Decimal("5e16"),
            unlocked() {return hasUpgrade(`L`, 62)},
        },

        71: {
            title: "Huge Boost I (#12)",
            description: "10x Limes",
            cost: new Decimal("7.5e6"),
            unlocked() {return hasUpgrade("L", 61)},
        },

        82: {
            title: "Huge Boost III (#19)",
            description: "50x Limes, 20x Lemons",
            cost: new Decimal("1e22"),
            unlocked() {return hasUpgrade('L', 72)},
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

        92: {
            title: "Limus (#20)",
            description() {
                if (hasUpgrade("L", 92)) return "Lemons give an exponent boost to Upgrade #6's Effect: ^" + format(upgradeEffect(`L`, 92), 2)
                return "Lemons give an exponent boost to Upgrade #6's Effect (also unlocks Lemon Upgrades)"},
            cost: new Decimal("35e25"),
            unlocked() {return hasUpgrade('L', 82)},
        },

        91: {
            title: "Huge Boost II (#14)",
            description: "7.5x Limes",
            cost: new Decimal("425e6"),
            unlocked() {return hasUpgrade("L", 61)},
        },

        93: {
            title: "Lime Booster V (#22)",
            description: "+0.08 to Lime's exponent",
            cost: new Decimal("5.5e30"),
            unlocked() {return hasUpgrade('L', 92)}
        }
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
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    resource: "Lemons",
    baseResource: "Limes",
    baseAmount() {return player.L.points},
    requires: new Decimal(3e9),
    branches: ["L"],
    tabFormat: [
    "main-display",
    "prestige-button",
    "blank",
    "buyables",
    "upgrades",
    ["display-text",
        function() {return "You have " + format(player.L.points) + " limes."}],
    ],
    
    canReset() {
        return player.L.points.gte(new Decimal(3e9))
},

    prestigeButtonText() {
        if (player.L.points.gte(3e9)) return "Reset for +" + format(getResetGain("lemons")) + " lemons"
        return "You need 3e9 limes to lemonize!"
    },

    getResetGain() {
gain = player.L.points.plus(1).div(3e9).log(7.5).plus(1)
mult = new Decimal(1)
exp = new Decimal(1)

    if (getBuyableAmount("lemons", 12).gte(1)) mult = mult.times(buyableEffect("lemons", 12)).plus(1)

    if (hasUpgrade("lemons", 11)) mult = mult.mul(35)
    if (hasUpgrade("lemons", 12)) mult = mult.mul(11)


    if (hasUpgrade(`L`, 52)) gain = gain.mul(2)

    if (hasUpgrade(`L`, 62)) gain = gain.times(5.5)

    if (hasUpgrade(`L`, 72)) gain = gain.times(10)

    if (hasUpgrade(`L`, 82)) gain = gain.times(25)

    return gain.times(mult).pow(exp)
},

    getNextAt() {
lemongain = new Decimal(0).plus(tmp.L.resetGain)
return format(lemongain.plus(1).pow_base(7.5).times(3e9), 1)
},

    onPrestige() {
 if (tmp.lemons.passiveGeneration > 0 && !hasAchievement("achievementslmao", 32)) {
            player.achievementslmao.achievements.push(32)
            doPopup("achievement","Lime Hater")
}

player.L.points = new Decimal(0)

return tmp.lemons.resetGain
},

layerShown() {
return hasUpgrade("L", 42)
},

passiveGeneration() {
        if (hasUpgrade("L", 72)) return 10
        return 0
     },

buyables: {
    11: {
        title: "Lime Doubler",
        purchaseLimit: 200,
        effect() {
            return getBuyableAmount(this.layer, this.id).pow_base(2);
          },
        cost(x) {return x.pow_base(2).mul(1.5) },
        display() { return "Blah, buy for " + format(this.cost()) + " lemons \n" + getBuyableAmount("lemons", 11) + "/200"},
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            const affordable = player[this.layer].points.div(1.5).log(2).floor();
            player[this.layer].points = player[this.layer].points.minus(this.cost(affordable));
            setBuyableAmount(this.layer, this.id, affordable.plus(1));
        },
    },
    12: {
        title: "Lemon Doubler",
        purchaseLimit: 150,
        effect() {
            return getBuyableAmount(this.layer, this.id).pow_base(2)
        },
        cost(x) { return x.pow_base(5).mul(5) },
        display() { return "Blah, buy for " + format(this.cost()) + " lemons \n" + getBuyableAmount("lemons", 12) + "/150"},
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            const affordable = player[this.layer].points.div(5).log(5).floor();
            player[this.layer].points = player[this.layer].points.minus(this.cost(affordable));
            setBuyableAmount(this.layer, this.id, affordable.plus(1));
        },
    },
},

upgrades: {
    11: {
        title: "lemon upgrade :o (#21)",
        description: "35x Lemons, 1.25x Limes",
        cost: new Decimal("2.5e12"),
        unlocked() {return hasUpgrade('L', 92)},
    },

    12: {
        title: "Single Lemons (#23)",
        description: "11x Lemons",
        cost: new Decimal("85e13"),
        unlocked() {return hasUpgrade('lemons', 11)},
    },
},

})