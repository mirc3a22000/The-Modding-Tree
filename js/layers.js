addLayer("achievementslmao", {
    row: "side",
    name: "Achievements",
    symbol: "A",
    color: "#FFFF00",
    position: 0,
    type: "none",
    tabFormat: [
        ["display-text",
        function() { return 'Achievements' },
        { "color": "yellow", "font-size": "32px", "font-family": "Comic Sans MS" }],
        "achievements",
    ],
    startData() { return {
        unlocked: true,
        points: new Decimal(0)}
    },
    tooltip() {return "Achievements"},

    achievements: {
        11: {
            name: "Unnecessary click",
            tooltip: "Why would you do that?",
            done() {return false}
        },
        12: {
            name: "Lime Hater",
            tooltip: "The sequel to Unnecessary click",
            done() {return false}
        },
        13: {
            name: "Unneeded Currency",
            tooltip: "Come on, you already did everything it offered! (the triquel)",
            done() {return false}
        },
        14: {
            name: "Water gun into an ocean",
            tooltip: "Hows that supposed to contribute?",
            done() {return false},
        },
        15: {
            name: "Infinite effort, no gain",
            tooltip: "Are you just sabotaging yourself?",
            done() {return false},
        },
        21: {
            name: "First lime",
            tooltip: 'Click for your first lime',
            done() {return player.L.points.gte(1)},
        },
        22: {
            name: "Lots of limes",
            tooltip: 'Click for your first 100 limes',
            done() {return player.L.points.gte(100)},
        },
        23: {
            name: "No more clicking!",
            tooltip: 'Buy upgrade #10',
            done() {return hasUpgrade("L",51)},
        },
        24: {
            name: "New Era? Its just the same thing!",
            tooltip: "Get 1e100 limes",
            done() {return player.L.points.gte("1e100")}
        },
        25: {
            name: "A tiny amount of Limes",
            tooltip: "Get 1e1000 limes",
            done() {return player.L.points.gte("1e1000")}
        },
        31: {
            name: "Hey, I was promised limes!",
            tooltip: 'Get your first lemon',
            done() {return player.lemons.points.gte(1)},
            unlocked() {return hasUpgrade('L', 42) || hasAchievement("achievementslmao", 31)}
        },
        32: {
            name: "Generation? Already?",
            tooltip: `Buy upgrade #18`,
            done() {return hasUpgrade('L', 45)},
            unlocked() {return hasUpgrade('L', 42) || hasAchievement("achievementslmao", 31)}
        },
        33: {
            name: "Lemons are finally useful",
            tooltip: `Buy upgrade #21`,
            done() {return hasUpgrade('lemons', 11)},
            unlocked() {return hasUpgrade('L', 42) || hasAchievement("achievementslmao", 31)}
        },
        34: {
            name: "No longer useful",
            tooltip: `Max Lemon buyables`,
            done() {return getBuyableAmount('lemons', 11).plus(getBuyableAmount('lemons', 12)).gte(450)},
            unlocked() {return hasUpgrade('L', 42) || hasAchievement("achievementslmao", 31)}
        },
        35: {
            name: "SSOOOUUURR >_<",
            tooltip: `Get 1e100 Lemons`,
            done() {return player.lemons.points.gte("1e100")},
            unlocked() {return hasUpgrade('L', 42) || hasAchievement("achievementslmao", 31)}
        },
        41: {
            name: "Singularity.",
            tooltip: "Infinity for the first time",
            done() {return player.Infinity.points.gte(1)},
            unlocked() {return hasUpgrade('L', 95) || hasAchievement("achievementslmao", 41)}
        },
        42: {
            name: "Oh, an actual singularity.",
            tooltip: "Unlock the Black Hole",
            done() {return hasUpgrade('Infinity', 22)},
            unlocked() {return hasUpgrade('L', 95) || hasAchievement("achievementslmao", 41)}
        },
        43: {
            name: "No effort!",
            tooltip: "Automate Lemons",
            done() {return hasUpgrade('Infinity', 31) && hasUpgrade('Infinity', 33) && hasUpgrade('Infinity', 46)},
            unlocked() {return hasUpgrade('L', 95) || hasAchievement("achievementslmao", 41)}
        },
        44: {
            name: "Cliche reset begone",
            tooltip: "Break Infinity",
            done() {return hasUpgrade('Infinity', 45)},
            unlocked() {return hasUpgrade('L', 95) || hasAchievement("achievementslmao", 41)}
        },
        45: {
            name: "Outsourcing work",
            tooltip: "Fully automate Main Lime Upgrades",
            done() {return getBuyableAmount("Infinity", 11).gte(42)},
            unlocked() {return hasUpgrade('L', 95) || hasAchievement("achievementslmao", 41)}
        },
        51: {
            name: "CREATE",
            tooltip: "SOMETHING COSMIC",
            done() {return false},
            unlocked() {return hasUpgrade('Infinity', 81) || hasAchievement("achievementslmao", 51)}
        },
        52: {
            name: "FINISH",
            tooltip: "FIRST AUTOMATION",
            done() {return false},
            unlocked() {return hasUpgrade('Infinity', 81) || hasAchievement("achievementslmao", 51)}
        },
        53: {
            name: "COMEBACK",
            tooltip: "OF THE CITRIC",
            done() {return false},
            unlocked() {return hasUpgrade('Infinity', 81) || hasAchievement("achievementslmao", 51)}
        },
        54: {
            name: "HANDS",
            tooltip: "FREE FROM CONVERSION",
            done() {return false},
            unlocked() {return hasUpgrade('Infinity', 81) || hasAchievement("achievementslmao", 51)}
        },
        55: {
            name: "USE",
            tooltip: "THE THIRD TO ITS FULLEST",
            done() {return false},
            unlocked() {return hasUpgrade('Infinity', 81) || hasAchievement("achievementslmao", 51)}
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
        //if (hasUpgrade('L', 12)) mult = mult.times("1e50")
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
        if (hasUpgrade('L', 76)) mult = mult.times(123)
        if (hasUpgrade('L', 74)) mult = mult.times(upgradeEffect('L', 74));
        if (hasUpgrade('L', 84)) mult = mult.times(100)
        if (hasUpgrade('lemons', 16)) mult = mult.times(100)
        if (hasUpgrade('lemons', 21)) mult = mult.times(350)
        if (hasUpgrade('L', 86)) mult = mult.times(25000)
        if (hasUpgrade('L', 92)) mult = mult.times(250000)
        if (hasUpgrade('L', 93)) mult = mult.times("1e6")
        if (hasUpgrade('L', 94)) mult = mult.times("1e8")
        if (hasUpgrade('L', 95)) mult = mult.times("75e22")

        if(hasUpgrade('Infinity', 12)) mult = mult.times(5)
        if(hasUpgrade('Infinity', 13)) mult = mult.times(3)
        if(hasUpgrade('Infinity', 23)) mult = mult.times(2)
        if(hasUpgrade("Infinity", 33)) mult = mult.times(3)
        if(hasUpgrade("Infinity", 31)) mult = mult.times(2)   
        if(hasUpgrade("Infinity", 34)) mult = mult.times(2.5)
        if(hasUpgrade("Infinity", 41)) mult = mult.times(2)
        if(hasUpgrade("Infinity", 43)) mult = mult.times(6.5)
        if(hasUpgrade("Infinity", 44)) mult = mult.times(5)
        if(hasUpgrade("Infinity", 54)) mult = mult.times(6.5)
        if(hasUpgrade("Infinity", 61)) mult = mult.times(3)
        if(hasUpgrade("Infinity", 62)) mult = mult.times(6.5)
        if(hasUpgrade("Infinity", 63)) mult = mult.times(10)
        if(hasUpgrade("Infinity", 64)) mult = mult.times(20)
        if(hasUpgrade("Infinity", 71)) mult = mult.times(9)
        if(hasUpgrade("Infinity", 75)) mult = mult.times(1000)

        infboost = player.Infinity.mass.clampMin(1).log(3).plus(1)
        if(hasUpgrade("Infinity", 66)) infboost = infboost.pow(upgradeEffect("Infinity", 66))
        if(hasUpgrade('Infinity', 22)) mult = mult.times(infboost)
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)

        if (hasUpgrade('L', 53)) exp = exp.plus(0.08)
        if (hasUpgrade('L', 54)) exp = exp.plus(0.075)
        if (hasUpgrade('L', 62)) exp = exp.plus(0.055)
        if (hasUpgrade('L', 66)) exp = exp.plus(0.1)
        if (hasUpgrade('L', 82)) exp = exp.plus(0.065)
        if (hasUpgrade('L', 83)) exp = exp.plus(0.1)

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
        if (tmp.L.passiveGeneration > 0 && !hasAchievement("achievementslmao", 11)) {
            player.achievementslmao.achievements.push(11)
            doPopup("achievement","Unnecessary Click")
        }
        if (player.L.points.gte("1.79e308") && !hasAchievement("achievementslmao", 14)) {
            player.achievementslmao.achievements.push(14)
            doPopup("achievement","Water gun into an ocean")
        }
    },

    update() {
        if (player.L.points.gt("1.79e308") && !hasUpgrade("Infinity", 45)) player.L.points = new Decimal("1.79e308")
    },

    doReset(resettingLayer) {
  // Stage 1, almost always needed, makes resetting this layer not delete your progress
  if (layers[resettingLayer].row <= this.row) return;

  // Stage 2, track which specific subfeatures you want to keep, e.g. Upgrade 11, Challenge 32, Buyable 12
  let keptUpgrades = []
  if (hasUpgrade("Infinity", 53)) keptUpgrades.push(51)

  // Stage 3, track which main features you want to keep - all upgrades, total points, specific toggles, etc.
  let keep = [];

  // Stage 4, do the actual data reset
  layerDataReset(this.layer, keep);

  // Stage 5, add back in the specific subfeatures you saved earlier
  player[this.layer].upgrades.push(...keptUpgrades)
},

    upgrades: {
        11: {
            title: "Lime Doubler (#2)",
            description: "Double Limes",
            cost: new Decimal(50),
        },

        /*12: {
          titile: "testing",
            description: "testing",
            cost: new Decimal(1),
        },*/


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
            effect() { limusboost = player.lemons.points.clampMin(1).pow(0.1).log(65).plus(1)
                if(hasUpgrade("Infinity", 72)) limusboost = limusboost.times(upgradeEffect("Infinity", 72))
                return limusboost},
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
            effect() {return player.L.points.plus(1).log(5).plus(1)},
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

        73: {
            title: "New Era (#36)",
            description: "x1500 Limes",
            cost: new Decimal("5e99"),
            unlocked() {return hasUpgrade("L",72)}
        },

        74: {
            effect() {return player.L.points.plus(1).log(6).plus(1)},
            effectDisplay() {return format(upgradeEffect('L', 74)) + "x"},
            title: "Lime Synergy III (#37)",
            description: "Limes greatly boost themselves [log6(limes)]",
            cost: new Decimal("1.5e104"),
            unlocked() {return hasUpgrade('L', 73)},
        },

        75: {
            title: "Booster VI (#38)",
            description: "x1000 Lemons",
            cost: new Decimal("2e110"),
            unlocked() {return hasUpgrade("L",74)}
        },

        76: {
            title: "Booster VII (#39)",
            description: "x123 Limes and Lemons",
            cost: new Decimal("1e119"),
            unlocked() {return hasUpgrade("L",75)}
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

        82: {
            title: "Speedin' Up (#40)",
            description: "+0.065 to Lime's and Lemon's exponent",
            cost: new Decimal("4.99e128"),
            unlocked() {return hasUpgrade("L",76)}
        },

        83: {
            title: "MAXIMUM OVERDRIVE (#41)",
            description: "+0.1 to Lime's and Lemon's exponent",
            cost: new Decimal("2e146"),
            unlocked() {return hasUpgrade('L', 82)},
        },

        84: {
            title: "Peace (#43)",
            description: "100x Limes and 250x Lemons",
            cost: new Decimal("1e192"),
            unlocked() {return hasUpgrade('L', 83)},
        },

        85: {
            title: "eys (#44)",
            description: "+0.045 to Lemon's exponent",
            cost: new Decimal("1e208"),
            unlocked() {return hasUpgrade('L', 84)},
        },

        86: {
            title: "Booster VIII (#46)",
            description: "250000x Limes and 50x Lemons",
            cost: new Decimal("2.44e225"),
            unlocked() {return hasUpgrade('L', 85)},
        },

        91: {
            title: "Huge Boost II (#14)",
            description: "7.5x Limes",
            cost: new Decimal("425e6"),
            unlocked() {return hasUpgrade("L", 81)},
        },

        92: {
            title: "Lime Booster VIII (#47)",
            description: "Maxed out the lemon upgrade? No worries! 25000x Limes",
            cost: new Decimal("4.99e235"),
            unlocked() {return hasUpgrade('L', 86)},
        },

        93: {
            title: "Booster IX (#48)",
            description: "Getting bored huh? 1Mx Limes and 50000x Lemons",
            cost: new Decimal("4.99e242"),
            unlocked() {return hasUpgrade('L', 92)},
        },

        94: {
            title: "Booster X (#49)",
            description: "Well theres something big coming... 100Mx Limes and 1Mx Lemons",
            cost: new Decimal("2.99e256"),
            unlocked() {return hasUpgrade('L', 93)},
        },

        95: {
            title: "Holy Lime (#50)",
            description: "Here comes the Reset Layer! Multiply Limes by 750Sx and +0.065 to Lemon's exponent",
            cost: new Decimal("5e271"),
            unlocked() {return hasUpgrade('L', 94)},
        },

    },


    automate() {
        const upgradelist = [11, 22, 23, 21, 32, 41, 33, 31, 51, 61, 71, 81, 91, 42, 43, 44, 45, 46, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66, 72, 73, 74, 75, 76, 82, 83, 84, 85, 86, 92, 93, 94, 95]
        for (let step = 0; step <= toNumber(getBuyableAmount("Infinity", 11).minus(1)); step++) {
            buyUpgrade("L", upgradelist[step])
        }
    },
})


addLayer("lemons", {
    row: 0,
    name: "Lemons",
    symbol: "Le",
    color: "#FFFF00",
    position: 1,
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
        function() {
            if(!hasUpgrade('Infinity', 45) && player.L.points.gte("1.79e308")) return "You have Infinite limes"
            return "You have " + format(player.L.points) + " limes."}],
    ],
    
    canReset() {
        return player.L.points.gte("3e9")
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
    if (hasUpgrade('lemons', 16)) mult = mult.times(100)

    if (hasUpgrade(`L`, 43)) mult = mult.mul(2)
    if (hasUpgrade(`L`, 44)) mult = mult.times(5.5)
    if (hasUpgrade(`L`, 45)) mult = mult.times(10)
    if (hasUpgrade(`L`, 46)) mult = mult.times(25)
    if (hasUpgrade('L', 55)) mult = mult.times(100)
    if (hasUpgrade('L', 56)) mult = mult.times(upgradeEffect('L', 56))
    if (hasUpgrade('L', 62)) mult = mult.times(10)
    if (hasUpgrade('L', 63)) mult = mult.times(100)
    if (hasUpgrade('L', 64)) mult = mult.times(55)
    if (hasUpgrade('L', 75)) mult = mult.times(1000)
    if (hasUpgrade('L', 76)) mult = mult.times(123)
    if (hasUpgrade('L', 84)) mult = mult.times(250)
    if (hasUpgrade('L', 86)) mult = mult.times(50)
    if (hasUpgrade('L', 93)) mult = mult.times(50000)
    if (hasUpgrade('L', 94)) mult = mult.times("1e6")

    if(hasUpgrade('Infinity', 12)) mult = mult.times(2.5)
    if(hasUpgrade('Infinity', 11)) mult = mult.times(3)
    if(hasUpgrade('Infinity', 21)) mult = mult.times(2)
    if(hasUpgrade("Infinity", 32)) mult = mult.times(2)
    if(hasUpgrade("Infinity", 34)) mult = mult.times(2.5)
    if(hasUpgrade("Infinity", 42)) mult = mult.times(2.5)
    if(hasUpgrade("Infinity", 44)) mult = mult.times(5)
    if(hasUpgrade("Infinity", 54)) mult = mult.times(10)
    if(hasUpgrade("Infinity", 61)) mult = mult.times(2)
    if(hasUpgrade("Infinity", 63)) mult = mult.times(10)
    if(hasUpgrade("Infinity", 71)) mult = mult.times(7)
    
    if(hasUpgrade('Infinity', 22) && player.Infinity.mass.gte(10000)) mult = mult.times(player.Infinity.mass.clampMin(1).div(10000).log(5).plus(1))

    if (hasUpgrade('L', 65)) exp = exp.plus(0.065)
    if (hasUpgrade('L', 82)) exp = exp.plus(0.065)
    if (hasUpgrade('L', 83)) exp = exp.plus(0.1)
    if (hasUpgrade('L', 85)) exp = exp.plus(0.045)
    if (hasUpgrade('L', 95)) exp = exp.plus(0.065)

    return gain.times(mult).pow(exp)
},

    getNextAt() {
lemongain = new Decimal(0).plus(tmp.L.resetGain)
return format(lemongain.plus(1).pow_base(7.5).times(3e9), 1)
},

    onPrestige() {
 if (tmp.lemons.passiveGeneration > 0 && !hasAchievement("achievementslmao", 12)) {
            player.achievementslmao.achievements.push(12)
            doPopup("achievement","Lime Hater")
}
if (getBuyableAmount('lemons', 11).plus(getBuyableAmount('lemons', 12)).gte(450) && !hasAchievement("achievementslmao", 13)) {
            player.achievementslmao.achievements.push(13)
            doPopup("achievement","Unneeded Currency")
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
        purchaseLimit: 300,
        effect() {
            return getBuyableAmount(this.layer, this.id).pow_base(2);
          },
        cost(x) {return x.pow_base(2).mul(1.5) },
        display() { return "Buy for " + format(this.cost()) + " lemons \n" + getBuyableAmount("lemons", 11) + "/300 \n Currently: x" + format(getBuyableAmount("lemons",11).pow_base(2),2)},
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            affordable = player[this.layer].points.div(1.5).log(2).floor();
            if (affordable.gt(300)) affordable = new Decimal(299)
            if (!hasUpgrade("Infinity", 31)) player[this.layer].points = player[this.layer].points.minus(this.cost(affordable));
            setBuyableAmount(this.layer, this.id, affordable.plus(1));
        },
        automatethis() {if(hasUpgrade("Infinity", 31) && this.canAfford()) this.buy()},
    },
    12: {
        title: "Lemon Doubler",
        purchaseLimit: 150,
        effect() {
            return getBuyableAmount(this.layer, this.id).pow_base(2)
        },
        cost(x) { return x.pow_base(5).mul(5) },
        display() { return "Buy for " + format(this.cost()) + " lemons \n" + getBuyableAmount("lemons", 12) + "/150 \n Currently: x" + format(getBuyableAmount("lemons",12).pow_base(2),2)},
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            affordable = player[this.layer].points.div(5).log(5).floor();
            if (affordable.gt(150)) affordable = new Decimal(149)
            if (!hasUpgrade("Infinity", 33)) player[this.layer].points = player[this.layer].points.minus(this.cost(affordable));
            setBuyableAmount(this.layer, this.id, affordable.plus(1));
        },
        automatethis() {if(hasUpgrade("Infinity", 33) && this.canAfford()) this.buy()},
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
    16: {
        title: "You need to chill (#42)",
        description: "100x Limes and Lemons",
        cost: new Decimal("2.5e69"),
        unlocked() {return hasUpgrade('lemons', 15)},
    },
    21: {
        title: "Lime Booster VII (#45)",
        description: "350x Limes",
        cost: new Decimal("1e89"),
        unlocked() {return hasUpgrade('lemons', 16)},
    },
},

automate() {
    if(hasUpgrade("Infinity", 46)) {autobuyUpgrades('lemons')}
}

})


addLayer("Infinity", {
    row: 1,
    name: "Infinity",
    symbol: "IP",
    color: "#ff6f00",
    position: 0,
    type: "custom",
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        mass: new Decimal(0),
    }},
    resource: "IP",
    baseResource: "Limes",
    baseAmount() {return player.L.points},
    requires: new Decimal("1.79e308"),
    branches: ["L"],
    tabFormat: {
    "Main": {content :["main-display",
        "prestige-button",
        ["display-text",
            function() {
                if(!hasUpgrade('Infinity', 45) && player.L.points.gte("1.79e308")) return "You have Infinite limes"
                return "You have " + format(player.L.points) + " limes."}],
        "blank",
        "upgrades",],},
    "Black Hole": {content :["main-display",
        ["display-text",
            function() {return "Your Black Hole has " + format(player.Infinity.mass) + " mass."}],
        "blank",
        ["display-text",
            function() {return "Lime Boost: x" + format(player.Infinity.mass.clampMin(1).log(3).plus(1))}, { "color": "white", "font-size": "16px", "font-family": "Comic Sans MS" }
        ],
        ["display-text",
            function() {
                if(player.Infinity.mass.lt(10000)) return "Lemon Boost unlocked at 10000 mass"
                return "Lemon Boost: x" + format(player.Infinity.mass.clampMin(1).div(10000).log(5).plus(1))}, { "color": "yellow", "font-size": "16px", "font-family": "Comic Sans MS" }
        ],
        ["display-text",
            function() {
                if(player.Infinity.mass.lt("1e9")) return "IP Boost unlocked at 1e9 mass"
                return "IP Boost: x" + format(player.Infinity.mass.clampMin(1).div("1e9").log(7).plus(1))}, { "color": "orange", "font-size": "16px", "font-family": "Comic Sans MS" }
        ],
        "blank",
        ["display-text",
            function() {
                if(!hasUpgrade("Infinity", 52)) return "Resets on Infinity"
                return "Doesn't Reset on Infinity :D"}, { "color": "red", "font-size": "16px", "font-family": "Comic Sans MS" }
        ],
    "buyables",],
        unlocked() {return hasUpgrade("Infinity", 22)}},
    },
    
    canReset() {
        return player.L.points.gte("1.79e308")
},

    prestigeButtonText() {
        if (player.L.points.gte("1.79e308")) return "Reset for +" + format(getResetGain("Infinity")) + " IP"
        if(!hasUpgrade("Infinity", 45))return "You need Infinite limes to Infinity!"
        return "You nee 1.79e308 limes to Infinity!"
    },

    getResetGain() {
        gain = new Decimal(1)
        mult = new Decimal(10)
        exp = new Decimal(1)
        if(hasUpgrade("Infinity", 45)) gain = player.L.points.clampMin(1).div("1.79e308").log(5)

        if(hasUpgrade("Infinity", 32)) mult = mult.times(2)
        if(hasUpgrade("Infinity", 42)) mult = mult.times(2)
        if(hasUpgrade("Infinity", 62)) mult = mult.times(3)
        if(hasUpgrade("Infinity", 71)) mult = mult.times(10)
        if(hasUpgrade("Infinity", 73)) mult = mult.times(25)
        if(hasUpgrade("Infinity", 75)) mult = mult.times(5)
        if(hasUpgrade("Infinity", 76)) mult = mult.times(33)
        if(hasUpgrade("Infinity", 81)) mult = mult.times(100)
        

        if(hasUpgrade('Infinity', 22) && player.Infinity.mass.gte("1e9")) mult = mult.times(player.Infinity.mass.clampMin(1).div("1e9").log(7).plus(1))
        
        return gain.times(mult).pow(exp)
    },

    onPrestige() {
        if (!hasUpgrade("Infinity", 52)) player.Infinity.mass = new Decimal(0)
    },

    passiveGeneration() {
        return 0
    },

    update(dt) {
        if (!hasUpgrade("Infinity", 22)) return
        massgain = new Decimal(1).times(dt)
        mult = new Decimal(1)
        exp = new Decimal(1)

        if(hasUpgrade("Infinity", 32)) mult = mult.times(2)
        if(hasUpgrade("Infinity", 31)) mult = mult.times(4)
        if(hasUpgrade("Infinity", 33)) mult = mult.times(1.5)
        if(hasUpgrade("Infinity", 41)) mult = mult.times(10)
        if(hasUpgrade("Infinity", 42)) mult = mult.times(3)
        if(hasUpgrade("Infinity", 43)) mult = mult.times(2)
        if(hasUpgrade("Infinity", 52)) mult = mult.times(3)
        if(hasUpgrade("Infinity", 53)) mult = mult.times(3.5)
        if(hasUpgrade("Infinity", 54)) mult = mult.times(5.5)
        if(hasUpgrade("Infinity", 55)) mult = mult.times(upgradeEffect("Infinity", 55))
        if(hasUpgrade("Infinity", 61)) mult = mult.times(4.5)
        if(hasUpgrade("Infinity", 62)) mult = mult.times(10)
        if(hasUpgrade("Infinity", 63)) mult = mult.times(7.5)
        if(hasUpgrade("Infinity", 64)) mult = mult.times(20)
        if(hasUpgrade("Infinity", 65)) mult = mult.times(upgradeEffect("Infinity", 65))
        if(hasUpgrade("Infinity", 71)) mult = mult.times(8)
        if(hasUpgrade("Infinity", 74)) mult = mult.times(50)

        massgain = massgain.times(mult).pow(exp)
        player.Infinity.mass = player.Infinity.mass.plus(massgain)

        if(player.Infinity.mass.lt(0)) player.Infinity.mass = new Decimal(0)
    },

    getNextAt() {
    infgain = new Decimal(0).plus(tmp.Infinity.resetGain)
    return format(infgain.mul("1.79e308").pow(5), 1)
    },
    layerShown() {return hasUpgrade('L', 95) || hasUpgrade('Infinity', 12)},

    buyables: {
        11: {
            title: "Lime upgrade autobuyer",
            purchaseLimit: 48,
            cost(x) {return x.pow_base(2.1).mul(6500) },
            display() { return "Buy for " + format(this.cost()) + " mass \n" + getBuyableAmount("Infinity", 11) + "/48 \n You are autobuying " + format(getBuyableAmount("Infinity",11), 0) + " Lime Upgrades"},
            canAfford() { return player.Infinity.mass.gte(this.cost()) },
            buy() {
                affordable = player.Infinity.mass.div(1.5).log(2).floor();
                if (affordable.gt(48)) affordable = new Decimal(47)
                player[this.layer].mass = player[this.layer].mass.minus(this.cost(affordable));
                setBuyableAmount(this.layer, this.id, affordable.plus(1));
            },
            unlocked() {return hasUpgrade("Infinity", 51)}
        }
    },

    upgrades: {
        12: {
            title: "Recovering I (#1)",
            description: "5x Limes and 2.5x Lemons",
            cost: new Decimal(1),
        },
        
        11: {
            title: "Choice II (#3)",
            description: "3x Lemons",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade('Infinity', 12)}
        },

        13: {
            title: "Choice I (#2)",
            description: "3x Limes",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade('Infinity', 12)}
        },

        22: {
            title: "Incredile Mass (#6)",
            description: "Unlock the Black Hole",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('Infinity', 12)}
        },

        21: {
            title: "Recovering III (#5)",
            description: "2x Lemons",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade('Infinity', 11)}
        },

        23: {
            title: "Recovering II (#4)",
            description: "2x Limes",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade('Infinity', 13)}
        },

        32: {
            title: "Funny Boosts (#7)",
            description: "2x IP, 2x BH Mass and 2x Lemons",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('Infinity', 22)}
        },

        31: {
            title: "Automation I (#8)",
            description: "4x BH Mass, 2x Limes and autobuy the first lemon buyable",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('Infinity', 32)}
        },

        33: {
            title: "Automation II (#9)",
            description: "3x Limes, 1.5x BH Mass and autobuy the second lemon buyable",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('Infinity', 32)}
        },

        34: {
            title: "Booster XI (#10)",
            description: "2.5x Limes and Lemons",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade('Infinity', 33)}
        },

        41: {
            title: "Booster XII (#11)",
            description: "10x BH Mass, 2x Limes",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade('Infinity', 34)}
        },

        42: {
            title: "Booster XIII (#12)",
            description: "3x BH Mass, 2.5x Lemons and 2x IP",
            cost: new Decimal(7),
            unlocked() {return hasUpgrade('Infinity', 41)}
        },

        43: {
            title: "Booster XIV (#13)",
            description: "Hmm... 6.5x Limes and 2x BH Mass",
            cost: new Decimal(14),
            unlocked() {return hasUpgrade('Infinity', 42)}
        },
        44: {
            title: "Booster XV (#14)",
            description: "5x Lemons and Limes",
            cost: new Decimal(16),
            unlocked() {return hasUpgrade('Infinity', 43)}
        },
        45: {
            title: "Limit Breaker (#15)",
            description: "Break Infinity",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('Infinity', 44)}
        },
        46: {
            title: "Automation III (#16)",
            description: "Autobuy upgrades that cost lemons",
            cost: new Decimal(200),
            unlocked() {return hasUpgrade('Infinity', 45)}
        },
        51: {
            title: "Automation IV (#17)",
            description: "Unlock the Lime Upgrade Autobuyer (Black Hole tab)",
            cost: new Decimal(250),
            unlocked() {return hasUpgrade('Infinity', 46)}
        },
        52: {
            title: "Keep I (#18)",
            description: "BH Mass no longer resets on Infinity and 3x BH Mass",
            cost: new Decimal(300),
            unlocked() {return hasUpgrade('Infinity', 51)}
        },
        53: {
            title: "Keep II (#19)",
            description: "Keep Lime Upgrade #10 on Infinity and 3.5x BH Mass",
            cost: new Decimal(325),
            unlocked() {return hasUpgrade('Infinity', 52)}
        },
        54: {
            title: "Booster XVI (#20)",
            description: "5.5x BH Mass, 6.5x Limes and 10x Lemons",
            cost: new Decimal(400),
            unlocked() {return hasUpgrade('Infinity', 53)}
        },
        55: {
            effect() {return player.Infinity.points.clampMin(1).log(6).plus(1)},
            effectDisplay() {return format(upgradeEffect('Infinity', 55)) + "x"},
            title: "Infinity Mass (#21)",
            description: "IP Boosts BH Mass [log6(IP)]",
            cost: new Decimal(460),
            unlocked() {return hasUpgrade('Infinity', 54)}
        },
        61: {
            title: "Booster XVII (#22)",
            description: "4.5x BH Mass, 3x Limes and 2x Lemons",
            cost: new Decimal(500),
            unlocked() {return hasUpgrade('Infinity', 55)}
        },
        62: {
            title: "Booster XVIII (#23)",
            description: "10x BH Mass, 3x IP and 6.5x Limes",
            cost: new Decimal(550),
            unlocked() {return hasUpgrade('Infinity', 61)}
        },
        63: {
            title: "Booster XIX (#24)",
            description: "7.5x BH Mass, 10x Limes and Lemons",
            cost: new Decimal(2500),
            unlocked() {return hasUpgrade('Infinity', 62)}
        },
        64: {
            title: "Booster XX (#25)",
            description: "20x BH Mass and 20x Limes",
            cost: new Decimal(3250),
            unlocked() {return hasUpgrade('Infinity', 63)}
        },
        65: {
            effect() {return player.Infinity.mass.clampMin(1).log(5).plus(1)},
            effectDisplay() {return format(upgradeEffect('Infinity', 65)) + "x"},
            title: "BH Synergy (#26)",
            description: "5x Limes and BH Mass boosts itself [log5(mass)]",
            cost: new Decimal(10000),
            unlocked() {return hasUpgrade('Infinity', 64)}
        },
        66: {
            effect() {return player.Infinity.points.clampMin(1).pow(0.2).log(60).plus(1)},
            effectDisplay() {return "^" +format(upgradeEffect('Infinity', 66))},
            title: "Limus 2 (#27)",
            description: "IP gives an exponent boost to BH's Lime Boost [log60(IP^0.2)]",
            cost: new Decimal(25000),
            unlocked() {return hasUpgrade('Infinity', 65)}
        },
        71: {
            title: "Too Grindy (#28)",
            description: "20x IP, 9x Limes, 8x BH Mass and 7x Lemons",
            cost: new Decimal(30000),
            unlocked() {return hasUpgrade('Infinity', 66)}
        },
        72: {
            effect() {return player.Infinity.points.clampMin(1).pow(0.4).log(60).plus(1)},
            effectDisplay() {return format(upgradeEffect('Infinity', 66)) + "x"},
            title: "OverPowered (#29)",
            description: "IP boosts Lime Upgrade #20's effect [log60(IP^0.4)]",
            cost: new Decimal(275000),
            unlocked() {return hasUpgrade('Infinity', 71)}
        },
        73: {
            title: "IP Boost (#30)",
            description: "25x IP",
            cost: new Decimal("2e6"),
            unlocked() {return hasUpgrade('Infinity', 72)}
        },
        74: {
            title: "Booster 21 (#31)",
            description: "50x BH Mass",
            cost: new Decimal("45e6"),
            unlocked() {return hasUpgrade('Infinity', 73)}
        },
        75: {
            title: "Booster 22 (#32)",
            description: "1000x Limes and 5x IP",
            cost: new Decimal("65e6"),
            unlocked() {return hasUpgrade('Infinity', 74)}
        },
        76: {
            title: "Another IP Boost (#33)",
            description: "33x IP",
            cost: new Decimal("500e6"),
            unlocked() {return hasUpgrade('Infinity', 75)}
        },
        81: {
            title: "IP Incremental (#34)",
            description: "100x IP",
            cost: new Decimal("30e9"),
            unlocked() {return hasUpgrade('Infinity', 76)}
        },
    },
},
)

addLayer("cosmic", {
    row: 2,
    name: "???",
    symbol: "?",
    color: "#b300ff",
    position: 0,
    type: "custom",
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        dust: new Decimal(0),
    }},
    resource: "Galaxies",
    baseResource: "IP",
    baseAmount() {return player.Infinity.points},
    requires: new Decimal("1.5e26"),
    branches: ["Infinity"],

    getResetGain() {
        return 0
    },
    getNextAt() {
    galaxygain = new Decimal(0).plus(tmp.cosmic.resetGain)
    return format(galaxygain.mul("1.5e26").pow(5), 1)
    },
    layerShown() {hasUpgrade('Infinity', 81)},

    
},
)