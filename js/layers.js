addLayer("achievementslmao", {
    row: "side",
    name: "Achievements",
    symbol: "A",
    color: "#FFFF00",
    position: 0,
    type: "none",
    tabFormat: [
        "achievements"
    ],
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
        14: {
            name: "New Era? Its just the same thing!",
            tooltip: "Get 1e100 limes",
            done() {return player.L.points.gte("1e100")}
        },
        21: {
            name: "Hey, I was promised limes!",
            tooltip: 'Get your first lemon',
            done() {return player.lemons.points.gte(1)},
        },
        22: {
            name: "Generation? Already?",
            tooltip: `Buy upgrade #18`,
            done() {return hasUpgrade('L', 45)},
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
    symbol: "Li", // This appears on the layer's node. Default is the id with the first letter capitalized
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
            //if (hasUpgrade('L', 12)) mult = mult.times(2000)

        if (hasUpgrade('L', 22)) mult = mult.times(3)
        if (hasUpgrade('L', 23)) mult = mult.times(1.5)
        if (hasUpgrade('L', 21)) mult = mult.times(1.75)

        if (hasUpgrade('L', 32)) mult = mult.times(upgradeEffect('L', 32)).plus(1);
        if (hasUpgrade('L', 31)) mult = mult.times(3.5)
        if (hasUpgrade('L', 33)) mult = mult.times(3.14)

        if (hasUpgrade('L', 41)) mult = mult.times(4)

        if (hasUpgrade('L', 71)) mult = mult.times(10)

        if (hasUpgrade('L', 81)) mult = mult.times(upgradeEffect('L', 81));

        if (hasUpgrade('L', 71)) mult = mult.times(7.5)

        if (getBuyableAmount("lemons", 11).gte(1)) mult = mult.mul((buyableEffect("lemons", 11)))

        if (hasUpgrade(`L`, 43)) mult = mult.mul(3)

        if (hasUpgrade(`L`, 44)) mult = mult.times(4.25)

        if (hasUpgrade(`L`, 45)) mult = mult.times(10)

        if (hasUpgrade(`L`, 46)) mult = mult.times(50)

        if (hasUpgrade("lemons", 11)) mult = mult.times(1.25)

        if (hasUpgrade('lemons', 13)) mult = mult.times(15)

        if (hasUpgrade('lemons', 14)) mult = mult.times(25)
        
        if (hasUpgrade('lemons', 15)) mult = mult.times(50)

        if (hasUpgrade('L', 63)) mult = mult.times(100)

        if (hasUpgrade('L', 72)) mult = mult.times(250)

        if (hasUpgrade('L', 73)) mult = mult.times(1500)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)

        if (hasUpgrade('L', 53)) exp = exp.plus(0.08)
        if (hasUpgrade('L', 54)) exp = exp.plus(0.075)
        if (hasUpgrade('L', 62)) exp = exp.plus(0.055)
        if (hasUpgrade('L', 66)) exp = exp.plus(0.1)

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

        //12: {
          //  titile: "testing",
            //description: "testing",
            //cost: new Decimal(1),
        //},


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
                if (hasUpgrade('L', 61)) {
                    limeboost = upgradeEffect('L', 61)
                    thing = thing.times(limeboost)
                }
                if (hasUpgrade("L", 52)) {
                    lemonboost = upgradeEffect('L', 52)
                    thing = thing.pow(lemonboost)}
                return thing
              },
            effectDisplay() {return format(upgradeEffect('L', 32)) + "x"},
            title: "Lime Synergy I (#6)",
            description: "Limes boost themselves [log6(limes)]",
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
            description: "Unlock Lemons",
            cost: new Decimal("3.25e9"),
            unlocked() {return hasUpgrade("L", 41)},
        },

        43: {
            title: "Need More Limes (#16)",
            description: "Triple Limes and Double Lemons",
            cost: new Decimal("1e13"),
            unlocked() {return hasUpgrade("L", 42)},
        },

        44: {
            title: "Lemonade (#17)",
            description: "5.5x Lemons and 4.25x Limes",
            cost: new Decimal("1e15"),
            unlocked() {return hasUpgrade("L", 43)}
        },

        45: {
            title: "No More Clicking (#18)",
            description: "10x Limes, Lemons and finally generate Lemons!",
            cost: new Decimal("5e16"),
            unlocked() {return hasUpgrade(`L`, 44)},
        },

        46: {
            title: "Huge Boost III (#19)",
            description: "50x Limes, 20x Lemons",
            cost: new Decimal("1e22"),
            unlocked() {return hasUpgrade('L', 45)},
        },

        52: {
            title: "Limus (#20)",
            effect() {return player.lemons.points.pow(0.1).log(65).plus(1)},
            effectDisplay() {return "^" + format(upgradeEffect('L', 52))},
            description: "Lemons give an exponent boost to Upgrade #6's Effect [log65(lemons^0.1)] (also unlocks Lemon Upgrades)",
            cost: new Decimal("35e25"),
            unlocked() {return hasUpgrade('L', 46)},
        },

        53: {
            title: "Lime Booster V (#22)",
            description: "+0.08 to Lime's exponent",
            cost: new Decimal("5.5e30"),
            unlocked() {return hasUpgrade('L', 52)}
        },

        54: {
            title: "Lime Booster VI (#24)",
            description: "Extra +0.075 to Lime's exponent",
            cost: new Decimal("2e36"),
            unlocked() {return hasUpgrade('L', 53)}
        },

        51: {
            title: "Lime Autoclicker (#10)",
            description: "Generates 1000% of limes per second.",
            cost: new Decimal(350000),
            unlocked() {return hasUpgrade("L", 41)},
        },

        55: {
            title: "I forgor (#25)",
            description: "x100 Lemons",
            cost: new Decimal("5e39"),
            unlocked() {return hasUpgrade('L', 54)}
        },

        56: {
            effect() {return player.L.points.log(5).plus(1)},
            effectDisplay() {return format(upgradeEffect('L', 56)) + "x"},
            title: "Booster II (#27)",
            description: "Limes boost Lemons [log5(limes)]",
            cost: new Decimal("2e48"),
            unlocked() {return hasUpgrade('L', 55)},
        },
        
        62: {
            title: "Booster III (#28)",
            description: "+0.055 to Lime's exponent and x10 Lemons",
            cost: new Decimal("5e54"),
            unlocked() {return hasUpgrade('L', 56)}
        },

        61: {
            title: "Lime Synergy II (#11)",
            effect() {
                thing = player.L.points.plus(1).log(15);
                return thing
              },
            effectDisplay() {return format(upgradeEffect('L', 61)) + "x"},
            description: "Limes boost upgrade Lime Synergy I [log15(limes)] (#6)",
            cost: new Decimal(650000),
            unlocked() {return hasUpgrade("L", 51)},
        },

        63: {
            title: "Huge Boost IV (#29)",
            description: "100x Limes and Lemons",
            cost: new Decimal("1e60"),
            unlocked() {return hasUpgrade('L', 62)}
        },

        64: {
            title: "Idea Problem (#31)",
            description: "Im running out of ideas. 55x Lemons",
            cost: new Decimal("1.5e69"),
            unlocked() {return hasUpgrade('L', 63)}
        },

        65: {
            title: "Lemon Power (#32)",
            description: "+0.065 to Lemon's exponent",
            cost: new Decimal("1e75"),
            unlocked() {return hasUpgrade('L', 64)}
        },

        66: {
            title: "Huge Boost V (#33)",
            description: "+0.1 to Lime's exponent",
            cost: new Decimal("5e80"),
            unlocked() {return hasUpgrade('L', 65)},
        },


        71: {
            title: "Huge Boost I (#12)",
            description: "10x Limes",
            cost: new Decimal("7.5e6"),
            unlocked() {return hasUpgrade("L", 61)},
        },

        72: {
            title: "Huge Boost VI (#35)",
            description: "x250 Limes",
            cost: new Decimal("35e94"),
            unlocked() {return hasUpgrade("L",66)}
        },

        72: {
            title: "New Era (#36)",
            description: "x1500 Limes",
            cost: new Decimal("5e99"),
            unlocked() {return hasUpgrade("L",71)}
        },


        81: {
            title: "Playtime Boost (#13)",
            effect() {
                return Math.log(player.timePlayed) / Math.log(5);
              },
            effectDisplay() {return format(upgradeEffect('L', 81)) + "x"},
            description: "Get a boost based on active playtime",
            cost: new Decimal("85e6"),
            unlocked() {return hasUpgrade("L", 71)},
        },

        91: {
            title: "Huge Boost II (#14)",
            description: "7.5x Limes",
            cost: new Decimal("425e6"),
            unlocked() {return hasUpgrade("L", 81)},
        },

    },
})


addLayer("lemons", {
    row: 1,
    name: "Lemons",
    symbol: "Le",
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
    if (hasUpgrade('lemons', 13)) mult = mult.times(15)
    if (hasUpgrade('lemons', 15)) mult = mult.times(50)

    if (hasUpgrade(`L`, 43)) mult = mult.mul(2)

    if (hasUpgrade(`L`, 44)) mult = mult.times(5.5)

    if (hasUpgrade(`L`, 45)) mult = mult.times(10)

    if (hasUpgrade(`L`, 46)) mult = mult.times(25)

    if (hasUpgrade('L', 55)) mult = mult.times(100)

    if (hasUpgrade('L', 56)) mult = mult.times(upgradeEffect('L', 56))

    if (hasUpgrade('L', 62)) mult = mult.times(10)
    if (hasUpgrade('L', 63)) mult = mult.times(100)
    if (hasUpgrade('L', 64)) mult = mult.times(55)

    if (hasUpgrade('L', 65)) exp = exp.plus(0.065)

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
        if (hasUpgrade("L", 45)) return 10
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
        unlocked() {return hasUpgrade('L', 52)},
    },

    12: {
        title: "Single Lemons (#23)",
        description: "11x Lemons",
        cost: new Decimal("85e13"),
        unlocked() {return hasUpgrade('lemons', 11)},
    },
    13: {
        title: "Booster I (#26)",
        description: "15x Lemons and Limes",
        cost: new Decimal("1e20"),
        unlocked() {return (hasUpgrade('lemons',12))}
    },
    14: {
        title: "Booster IV (#30)",
        description: "25x Limes",
        cost: new Decimal("1e30"),
        unlocked() {return hasUpgrade('lemons', 13)},
    },
    15: {
        title: "Booster V (#34)",
        description: "50x Limes and Lemons",
        cost: new Decimal("1e39"),
        unlocked() {return hasUpgrade('lemons', 14)},
    },
},

})