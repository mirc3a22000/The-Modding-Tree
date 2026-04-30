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
            name: "This is getting ridiculous",
            tooltip: "Get your first galaxy",
            done() {return player.cosmic.points.gte(1)},
            unlocked() {return hasUpgrade('Infinity', 82) || hasAchievement("achievementslmao", 51)}
        },
        52: {
            name: "Extended reach",
            tooltip: "Automate all extended Lime Upgrades",
            done() {return getBuyableAmount("Infinity", 11).gte(49)},
            unlocked() {return hasUpgrade('Infinity', 82) || hasAchievement("achievementslmao", 51)}
        },
        53: {
            name: "Back to normal, kinda?",
            tooltip: "Get your first Orange(s)",
            done() {return player.orange.points.gte(1)},
            unlocked() {return hasUpgrade('Infinity', 82) || hasAchievement("achievementslmao", 51)}
        },
        54: {
            name: "How are you even doing this?",
            tooltip: "Unlock IP generation",
            done() {return tmp.Infinity.passiveGeneration > 0},
            unlocked() {return hasUpgrade('Infinity', 82) || hasAchievement("achievementslmao", 51)}
        },
        55: {
            name: "As unneeded as its sibling",
            tooltip: "Max Orange Buyables",
            done() {return getBuyableAmount('orange', 11).plus(getBuyableAmount('orange', 12)).gte(85)},
            unlocked() {return hasUpgrade('Infinity', 82) || hasAchievement("achievementslmao", 51)}
        },
        61: {
            name: "How is this related to Limes???",
            tooltip: "Get 1 OP",
            done() {return player.omega.points.gte(1)},
            unlocked() {return hasUpgrade('cosmic', 64) || hasAchievement("achievementslmao", 61)}
        },
        62: {
            name: "How does this give us more limes???",
            tooltip: "Get a ω upgrade",
            done() {return hasUpgrade('omega', 111)},
            unlocked() {return hasUpgrade('cosmic', 64) || hasAchievement("achievementslmao", 61)}
        },
        63: {
            name: "That's all?",
            tooltip: "Fully buy ω upgrades.",
            done() {return hasUpgrade('omega', 131)},
            unlocked() {return hasUpgrade('cosmic', 64) || hasAchievement("achievementslmao", 61)}
        },
        64: {
            name: "Minor Inconvenience",
            tooltip: "Find the gap",
            done() {return hasUpgrade("omega", 25)},
            unlocked() {return hasUpgrade('cosmic', 64) || hasAchievement("achievementslmao", 61)}
        },
        65: {
            name: "CONVENTIONALLY",
            tooltip: "NAMED RESET",
            done() {return false},
            unlocked() {return hasUpgrade('omega', 26) || hasAchievement("achievementslmao", 64)}
        },
        71: {
            name: "THE END.",
            tooltip: "final update soon :P",
            done() {return false},
            unlocked() {return hasUpgrade('omega', 26) || hasAchievement("achievementslmao", 64)}
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
        if (hasUpgrade('L', 95)) mult = mult.times("7.5e21")

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
        if(hasUpgrade('cosmic', 35)) infboost = infboost.pow(3)
        if(hasUpgrade('Infinity', 22)) mult = mult.times(infboost)

        if(hasUpgrade("cosmic", 12)) mult = mult.times(12.64)
        if(hasUpgrade("cosmic", 13)) mult = mult.times(upgradeEffect("cosmic", 13))
        if(hasUpgrade("cosmic", 15)) mult = mult.times(35)
        if(hasUpgrade("cosmic", 44)) mult = mult.times("1e650")

        if(hasUpgrade("cosmic", 102)) mult = mult.times(3)
        if(hasUpgrade("cosmic", 103)) mult = mult.times(2)
        if(hasUpgrade("cosmic", 105)) mult = mult.times(5)
            
        if(hasUpgrade("cosmic", 42)) mult = mult.times(upgradeEffect("cosmic", 42)[0])
        
        if(hasUpgrade("omega", 11)) mult = mult.times(tmp.omega.lowercaseboostgain[0])
        
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
        if (hasUpgrade('L', 101)) exp = exp.plus(0.35)
        
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
            description: "25000x Limes and 50x Lemons",
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
            description: "Here comes the Reset Layer! Multiply Limes by 7.5Sx and +0.065 to Lemon's exponent",
            cost: new Decimal("5e271"),
            unlocked() {return hasUpgrade('L', 94)},
        },

        101: {
            title: "Welcome Back (#51)",
            description: "+0.35 to Lime's Exponent (1e13 IP Recommended)",
            cost: new Decimal("3.5e536"),
            unlocked() {return hasUpgrade('Infinity', 82) && hasUpgrade('L', 95)},
        },

        102: {
            title: "Very Balanced (#52)",
            description: "150x IP (1e13 IP Recommended)",
            cost: new Decimal("1.99e677"),
            unlocked() {return hasUpgrade('L', 101)},
        },

        103: {
            title: "Booster 23 (#53)",
            description: "1000x IP and +0.2 to Lemon's Exponent (4e14 IP Recommended)",
            cost: new Decimal("1e710"),
            unlocked() {return hasUpgrade('L', 102)},
        },

        104: {
            title: "MORE IP (#54)",
            description: "5000x IP (5e17 IP Recommended)",
            cost: new Decimal("5e838"),
            unlocked() {return hasUpgrade('L', 103)},
        },

        105: {
            title: "Holy Lime 2 (#55)",
            description: "Go nuts, Have fun. 15000x IP (5e21 IP Recommended)",
            cost: new Decimal("1e942"),
            unlocked() {return hasUpgrade('L', 104)},
        },

        106: {
            title: "fr (#56)",
            description: "5.5x IP",
            cost: new Decimal("1e1660"),
            unlocked() {return hasUpgrade('L', 105)},
        },
    },


    automate() {
        const upgradelist = [11, 22, 23, 21, 32, 41, 33, 31, 51, 61, 71, 81, 91, 42, 43, 44, 45, 46, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66, 72, 73, 74, 75, 76, 82, 83, 84, 85, 86, 92, 93, 94, 95, 101, 102, 103, 104, 105, 106]
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

    hotkeys: [
    {
        key: "l", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "l: reset your limes for lemons", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.lemons.unlocked) doReset("lemons") },
        unlocked () {return player.lemons.unlocked}
    }
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


    bhlemonboost = player.Infinity.mass.clampMin(1).div(10000).log(5).plus(1)
    if(hasUpgrade('cosmic', 35)) bhlemonboost = bhlemonboost.pow(3)
    if(hasUpgrade('Infinity', 22) && player.Infinity.mass.gte(10000)) mult = mult.times(bhlemonboost)

    if(hasUpgrade('cosmic', 16)) mult = mult.times(upgradeEffect("cosmic", 16))
    if(hasUpgrade('cosmic', 42)) mult = mult.times("1e40")
    if(hasUpgrade('cosmic', 43)) mult = mult.times("1e42")
    if(hasUpgrade('cosmic', 44)) mult = mult.times("1e63")
    if(hasUpgrade('cosmic', 45)) mult = mult.times("1e33")
    if(hasUpgrade("cosmic", 61)) mult = mult.times("1e33")
    
    if(hasUpgrade('cosmic', 104)) mult = mult.times(3)

    if(hasUpgrade("cosmic", 42)) mult = mult.times(upgradeEffect("cosmic", 42)[1])

    if(hasUpgrade("omega", 115)) mult = mult.times(tmp.omega.lowercaseboostgain[1])

    if (hasUpgrade('L', 65)) exp = exp.plus(0.065)
    if (hasUpgrade('L', 82)) exp = exp.plus(0.065)
    if (hasUpgrade('L', 83)) exp = exp.plus(0.1)
    if (hasUpgrade('L', 85)) exp = exp.plus(0.045)
    if (hasUpgrade('L', 95)) exp = exp.plus(0.065)
    if (hasUpgrade('L', 103)) exp = exp.plus(0.2)
    if(hasUpgrade("cosmic", 26)) exp = exp.plus(0.45)
    if(hasUpgrade("cosmic", 31)) exp = exp.plus(0.15)
    if(hasUpgrade("cosmic", 34)) exp = exp.plus(0.2)
    if(hasUpgrade("cosmic", 35)) exp = exp.plus(0.25)
    if(hasUpgrade("cosmic", 41)) exp = exp.plus(0.5)

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
            if (!hasUpgrade("Infinity", 31) && !hasUpgrade("cosmic", 126)) player[this.layer].points = player[this.layer].points.minus(this.cost(affordable));
            setBuyableAmount(this.layer, this.id, affordable.plus(1));
        },
        automatethis() {if((hasUpgrade("Infinity", 31) || hasUpgrade("cosmic", 126)) && this.canAfford()) this.buy()},
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
            if (!hasUpgrade("Infinity", 33) && !hasUpgrade("cosmic", 126)) player[this.layer].points = player[this.layer].points.minus(this.cost(affordable));
            setBuyableAmount(this.layer, this.id, affordable.plus(1));
        },
        automatethis() {if((hasUpgrade("Infinity", 33) || hasUpgrade("cosmic", 126)) && this.canAfford()) this.buy()},
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
    if(hasUpgrade("Infinity", 46) || hasUpgrade("cosmic", 126)) {autobuyUpgrades('lemons')}
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
             
            function() {boost = player.Infinity.mass.clampMin(1).log(3).plus(1)
            if(hasUpgrade("Infinity", 66)) boost = boost.pow(upgradeEffect('Infinity', 66))
            if(hasUpgrade("cosmic", 35)) boost = boost.pow(3)
                return "Lime Boost: x" + format(boost)}, { "color": "white", "font-size": "16px", "font-family": "Comic Sans MS" }
        ],
        ["display-text",
            function() {
                if(player.Infinity.mass.lt(10000)) return "Lemon Boost unlocked at 10000 mass"
                boost = player.Infinity.mass.clampMin(1).div(10000).log(5).plus(1)
                if(hasUpgrade("cosmic", 35)) boost = boost.pow(3)
                return "Lemon Boost: x" + format(boost)}, { "color": "yellow", "font-size": "16px", "font-family": "Comic Sans MS" }
        ],
        ["display-text",
            function() {
                if(player.Infinity.mass.lt("1e9")) return "IP Boost unlocked at 1e9 mass"
                boost = player.Infinity.mass.clampMin(1).div("1e9").log(7).plus(1)
                if(hasUpgrade("cosmic", 35)) boost = boost.pow(3)
                return "IP Boost: x" + format(boost)}, { "color": "orange", "font-size": "16px", "font-family": "Comic Sans MS" }
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
    hotkeys: [
    {
        key: "i", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "i: reset your progress for Infinity Points", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.Infinity.unlocked) doReset("Infinity") },
        unlocked() {return player.Infinity.unlocked}
    }
],
    
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
        mult = new Decimal(1)
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

        if(hasUpgrade("L", 102)) mult = mult.times(150)
        if(hasUpgrade("L", 103)) mult = mult.times(1000)
        if(hasUpgrade("L", 104)) mult = mult.times(5000)
        if(hasUpgrade("L", 105)) mult = mult.times(15000)
        if(hasUpgrade("L", 106)) mult = mult.times(5.5)

        bhipboost = player.Infinity.mass.clampMin(1).div("1e9").log(7).plus(1)
        if(hasUpgrade("cosmic", 35)) bhipboost = bhipboost.pow(3)
        if(hasUpgrade('Infinity', 22) && player.Infinity.mass.gte("1e9")) mult = mult.times(bhipboost)

        if(hasUpgrade("cosmic", 12)) mult = mult.times(5)
        if(hasUpgrade("cosmic", 14)) mult = mult.times(2.5)
        if(hasUpgrade("cosmic", 21)) mult = mult.times(1.5)
        if(hasUpgrade("cosmic", 23)) mult = mult.times(3)
        if(hasUpgrade("cosmic", 23)) mult = mult.times(10)
        if(hasUpgrade("cosmic", 55)) mult = mult.times("1e10")
        if(hasUpgrade("cosmic", 56)) mult = mult.times("1e9")
        if(hasUpgrade("cosmic", 61)) mult = mult.times("1e8")
        if(hasUpgrade("cosmic", 62)) mult = mult.times("1e12")
        if(hasUpgrade("cosmic", 63)) mult = mult.times("1e13")
        if(hasUpgrade("cosmic", 64)) mult = mult.times("5e9")

        if(hasUpgrade("cosmic", 111)) mult = mult.times(2)
        if(hasUpgrade("cosmic", 121)) mult = mult.times(3)
        if(hasUpgrade("cosmic", 122)) mult = mult.times(1.001)
        if(hasUpgrade("cosmic", 123)) mult = mult.times(2)
        if(hasUpgrade("cosmic", 125)) mult = mult.times(3.5)
        if(hasUpgrade("cosmic", 132)) mult = mult.times(100)
        if(hasUpgrade("cosmic", 134)) mult = mult.times(upgradeEffect("cosmic", 134))

        if(getBuyableAmount("orange",11).gte(1)) mult = mult.times(buyableEffect("orange", 11))

        if(hasUpgrade("cosmic", 42)) mult = mult.times(upgradeEffect("cosmic", 42)[2])
        if(hasUpgrade("omega", 11)) mult = mult.times(tmp.omega.lowercaseboostgain[2])

        if(hasUpgrade("cosmic", 34)) exp = exp.plus(0.1)
        if(hasUpgrade("cosmic", 43)) exp = exp.plus(0.065)
        if(hasUpgrade("cosmic", 44)) exp = exp.plus(0.115)
        if(hasUpgrade("cosmic", 51)) exp = exp.plus(0.2)
        if(hasUpgrade("cosmic", 52)) exp = exp.plus(0.145)
        
        return gain.times(mult).pow(exp)
    },

    onPrestige() {
        if (!hasUpgrade("Infinity", 52)) player.Infinity.mass = new Decimal(0)
        if (tmp.Infinity.passiveGeneration > 0 && !hasAchievement("achievementslmao", 15)) {
            player.achievementslmao.achievements.push(15)
            doPopup("achievement","Infinite effort, no gain")}
    },

    passiveGeneration() {
        if (hasUpgrade('cosmic', 131)) return 1
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

        if(hasUpgrade("cosmic", 14)) mult = mult.times(15)
        if(hasUpgrade("cosmic", 15)) mult = mult.times(3.5)
        if(hasUpgrade("cosmic", 45)) mult = mult.times("1e10")
        if(hasUpgrade("cosmic", 61)) mult = mult.times("1e33")
        
        if(hasUpgrade("cosmic", 122)) mult = mult.times(5.5)
        if(hasUpgrade("cosmic", 126)) mult = mult.times(10)

        massgain = massgain.times(mult).pow(exp)
        player.Infinity.mass = player.Infinity.mass.plus(massgain)

        if(player.Infinity.mass.lt(0)) player.Infinity.mass = new Decimal(0)
    },

    getNextAt() {
    infgain = new Decimal(0).plus(tmp.Infinity.resetGain)
    return format(infgain.mul("1.79e308").pow(5), 1)
    },
    layerShown() {return hasUpgrade('L', 95) || hasUpgrade('Infinity', 12) || player.Infinity.points.gte(1)},

    doReset(resettingLayer) {
  if (layers[resettingLayer].row <= this.row) return;

  let keptBuyables = {};
    if (resettingLayer == "cosmic" && hasUpgrade("cosmic", 135)) keptBuyables[11] = getBuyableAmount(this.layer, 11);

  let keep = [];

  layerDataReset(this.layer, keep);

  for (const [id, amount] of Object.entries(keptBuyables)) {
  setBuyableAmount(this.layer, id, amount);
}
},

    buyables: {
        11: {
            title: "Lime upgrade autobuyer",
            purchaseLimit: 49,
            cost(x) {return x.pow_base(2.1).mul(6500) },
            display() { return "Buy for " + format(this.cost()) + " mass \n" + getBuyableAmount("Infinity", 11) + "/49 \n You are autobuying " + format(getBuyableAmount("Infinity",11), 0) + " Lime Upgrades"},
            canAfford() { return player.Infinity.mass.gte(this.cost()) },
            buy() {
                affordable = player.Infinity.mass.div(6500).log(2.1).floor();
                if (affordable.gt(49)) affordable = new Decimal(48)
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
            effectDisplay() {return format(upgradeEffect('Infinity', 72)) + "x"},
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
        82: {
            title: "Memories (#35)",
            description: "Expand the Lime Tree from Lime Upgrade #50",
            cost: new Decimal("5e12"),
            unlocked() {return hasUpgrade('Infinity', 81)}
        },
    },
},
)

addLayer("cosmic", {
    row: 2,
    name: "Cosmic",
    symbol: "C",
    color: "#b300ff",
    position: 0,
    type: "custom",
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        dust: new Decimal(0),
        thenumber: new Decimal(0)
    }},
    resource: "Galaxies",
    baseResource: "IP",
    baseAmount() {return player.Infinity.points},
    requires: new Decimal("1.5e26"),
    branches: ["Infinity"],
    tabFormat: {"Main": {content :["main-display",
        "prestige-button",
        ["display-text",
            function() {
                return "You have " + format(player.Infinity.points) + " IP."}],
        "blank",
        ["column", [
            ["row", [
                ["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14], ["upgrade", 15], ["upgrade", 16]
            ]],
            ["row", [
                ["upgrade", 21], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24], ["upgrade", 25], ["upgrade", 26],
            ]],
            ["row", [
                ["upgrade", 31], ["upgrade", 32], ["upgrade", 33], ["upgrade", 34], ["upgrade", 35], ["upgrade", 36],
            ]],
            ["row", [
                ["upgrade", 41], ["upgrade", 42], ["upgrade", 43], ["upgrade", 44], ["upgrade", 45], ["upgrade", 46],
            ]],
            ["row", [
                ["upgrade", 51], ["upgrade", 52], ["upgrade", 53], ["upgrade", 54], ["upgrade", 55], ["upgrade", 56],
            ]],
            ["row", [
                ["upgrade", 61], ["upgrade", 62], ["upgrade", 63], ["upgrade", 64],
            ]],
        ]],
    ],
    },
    "Cosmic Dust": {content :[
        ["display-text",
            function() {return "You have " + format(player.cosmic.dust) + " Cosmic Dust"}, { "color": "pink", "font-size": "16px", "font-family": "Comic Sans MS" }
        ],
        "blank",
        ["column", [
            ["row", [
                ["upgrade", 101], ["upgrade", 102], ["upgrade", 103], ["upgrade", 104], ["upgrade", 105], 
            ]],
            ["row", [
                ["upgrade", 111], ["upgrade", 112], ["upgrade", 113], 
            ]],
            ["row", [
                ["upgrade", 121], ["upgrade", 122], ["upgrade", 123], ["upgrade", 124], ["upgrade", 125], ["upgrade", 126] 
            ]],
            ["row", [
                ["upgrade", 131], ["upgrade", 132], ["upgrade", 133], ["upgrade", 134], ["upgrade", 135], 
            ]],
        ]],
    ],
    unlocked() {return hasUpgrade("cosmic", 11)}},
     "The Number": {content :["main-display",
        "blank",
        ["display-text",
            function() {
                return "Your number is " + format(player.cosmic.thenumber)}, { "color": "white", "font-size": "24px", "font-family": "Comic Sans MS" }],
        ["display-text", function() { bonus = new Decimal(1)
        if(hasUpgrade("cosmic", 45)) bonus = bonus.times(10000)
        if(hasUpgrade("cosmic", 54)) bonus = bonus.times(10000)
        if(hasUpgrade("cosmic", 56)) bonus = bonus.times("1e7")
        if(hasUpgrade("cosmic", 61)) bonus = bonus.times("1e8")
        if(hasUpgrade("cosmic", 63)) bonus = bonus.times("1e9")
        return format(player.L.points.root(1250).plus(1).clampMax("1e150").times(bonus),2) + " Number/s"}],
        ["display-text",
            function() {
                return "Lime Boost: x" + format(upgradeEffect("cosmic", 42)[0])}, { "color": "white", "font-size": "16px", "font-family": "Comic Sans MS" }],
        ["display-text",
            function() {
                return "Lime Boost: x" + format(upgradeEffect("cosmic", 42)[1])}, { "color": "yellow", "font-size": "16px", "font-family": "Comic Sans MS" }],
        ["display-text",
            function() {
                return "IP Boost: x" + format(upgradeEffect("cosmic", 42)[2])}, { "color": "orange", "font-size": "16px", "font-family": "Comic Sans MS" }],
        ["display-text",
            function() {
                return "Galaxy Boost: x" + format(upgradeEffect("cosmic", 42)[3])}, { "color": "purple", "font-size": "16px", "font-family": "Comic Sans MS" }],
        ["display-text",
            function() {
                return "Cosmic Dust Boost: x" + format(upgradeEffect("cosmic", 42)[4])}, { "color": "pink", "font-size": "16px", "font-family": "Comic Sans MS" }],
        ["infobox", "numbers"],
    ],
    unlocked() {return hasUpgrade("cosmic", 42)}},
    },
    hotkeys: [
    {
        key: "c", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "c: reset your progress for Galaxies", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.cosmic.unlocked) doReset("cosmic") },
        unlocked() {return player.cosmic.unlocked}
    }
],

    canReset() {
        return player.Infinity.points.gte("1.5e26")
},
    getResetGain() {
        galgain = player.Infinity.points.clampMin(1).div("1.5e26").log(5).plus(1)
        mult = new Decimal(1)
        exp = new Decimal(1)

        if(hasUpgrade("cosmic", 23)) mult = mult.times(2)
        if(hasUpgrade("cosmic", 26)) mult = mult.times(3)
        if(hasUpgrade("cosmic", 32)) mult = mult.times(2.5)
        if(hasUpgrade("cosmic", 45)) mult = mult.times(5)
        if(hasUpgrade("cosmic", 62)) mult = mult.times(10)
        if(hasUpgrade("cosmic", 63)) mult = mult.times(2)

        if(hasUpgrade("cosmic", 132)) mult = mult.times(2)
        if(hasUpgrade("cosmic", 134)) mult = mult.times(2)

        if(getBuyableAmount("orange",12).gte(1)) mult = mult.times(buyableEffect("orange", 12))

        if(hasUpgrade("cosmic", 42)) mult = mult.times(upgradeEffect("cosmic", 42)[3])

        if(hasUpgrade("omega", 11)) mult = mult.times(tmp.omega.lowercaseboostgain[3])

        galgain = galgain.times(mult).pow(exp)
        return galgain
    },
    getNextAt() {
    galaxygain = new Decimal(0).plus(tmp.cosmic.resetGain)
    return format(galaxygain.mul("1.5e26").pow(5), 1)
    },
    layerShown() {return hasUpgrade('Infinity', 82) || hasUpgrade('cosmic', 11) || player.cosmic.points.gte(1)},

    prestigeButtonText() {if(player.Infinity.points.gte("1.5e26")) return "Reset for " + format(tmp.cosmic.resetGain) + " Galaxies"
        return "You need 1.5e26 IP to reset"
    },

    update(dt) {
        if (!hasUpgrade("cosmic", 11)) return
        dustgain = new Decimal(0.1).times(dt)
        mult = new Decimal(1)
        exp = new Decimal(1)

        if(hasUpgrade("cosmic", 21)) mult = mult.times(100)
        if(hasUpgrade("cosmic", 24)) mult = mult.times(100)
        if(hasUpgrade("cosmic", 33)) mult = mult.times(1000)
        if(hasUpgrade("cosmic", 45)) mult = mult.times("1e18")
        if(hasUpgrade("cosmic", 61)) mult = mult.times("1e29")
        if(hasUpgrade("cosmic", 64)) mult = mult.times("1e33")

        if(hasUpgrade("cosmic", 101)) mult = mult.times(2)
        if(hasUpgrade("cosmic", 105)) mult = mult.times(5)
        if(hasUpgrade("cosmic", 112)) mult = mult.times(3)
        if(hasUpgrade("cosmic", 113)) mult = mult.times(upgradeEffect("cosmic", 113))

        if(hasUpgrade("cosmic", 36)) mult = mult.times(upgradeEffect("cosmic", 36))

        if(hasUpgrade("cosmic", 42)) mult = mult.times(upgradeEffect("cosmic", 42)[4])
        
        dustgain = dustgain.times(mult).pow(exp)
        player.cosmic.dust = player.cosmic.dust.plus(dustgain)

        if(player.cosmic.dust.lt(0))  player.cosmic.dust = new Decimal(0)
        bonus = new Decimal(1)

        if(!hasUpgrade("cosmic", 42)) return
        if(hasUpgrade("cosmic", 45)) bonus = bonus.times(10000)
        if(hasUpgrade("cosmic", 54)) bonus = bonus.times(10000)
        if(hasUpgrade("cosmic", 56)) bonus = bonus.times("1e7")
        if(hasUpgrade("cosmic", 61)) bonus = bonus.times("1e8")
        if(hasUpgrade("cosmic", 63)) bonus = bonus.times("1e9")
        numbergain = player.L.points.root(1250).plus(1).clampMax("1e150").times(bonus).times(dt)
        player.cosmic.thenumber = player.cosmic.thenumber.plus(numbergain)
    },

    infoboxes: {
        numbers: {
            title: "The Number",
            body: "The Number's gain is based on limes and has its base gain hardcapped to 1e150, so upgrades will help you get more than 1e150 Number/s"
        }
    },

    upgrades: {
        11: {
            title: "Big Bang (#1)",
            description: "Start generating Cosmic Dust",
            cost: new Decimal(1),
        },

        12: {
            title: "eys 2 (#2)",
            description: "5x IP and 12.64x Limes",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade("cosmic", 11)},
        },

        13: {
            effect() {return player.L.points.pow(0.05).plus(1)},
            fullDisplay() {whatever = ``
                if (hasUpgrade("cosmic", 13)) whatever = `Currently: x` + format(upgradeEffect("cosmic", 13),2)
                return ` <p style="font-size: 10px;"> <b> 20th Root (#3) </b> <br>
                Limes boost themselves, but better [root20(dust)] <br> ` + whatever + ` <br>
                Cost: 2.5 Galaxies`},
            cost: new Decimal(2.5),
            unlocked() {return hasUpgrade("cosmic", 12)},
        },

        14: {
            title: "giv me auto (#4)",
            description: "2.5x IP and 15x BH Mass",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade("cosmic", 13)},
        },

        15: {
            fullDisplay() {return ` <p style="font-size: 10px;"> <b> The Heat Death (#5) </b> <br>
                3.5x BH Mass and 35x Limes <br> <br>
                Cost: 3.5 Galaxies`},
            cost: new Decimal(3.5),
            unlocked() {return hasUpgrade("cosmic", 14)},
        },

        16: {
            effect() {return player.lemons.points.pow(0.2).plus(1)},
            effectDisplay() {return format(upgradeEffect("cosmic", 16)) + "x"},
            title: "more lemons (#7)",
            description: "Lemons boost themselves",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade("cosmic", 15)},
        },

        21: {
            fullDisplay() {return ` <p style="font-size: 10px;"> <b> Lots of Dust (#6) </b> <br>
                100x Cosmic Dust and 1.5x IP <br> <br>
                Cost: 4.5 Galaxies`},
            cost: new Decimal(4.5),
            unlocked() {return hasUpgrade("cosmic", 14)},
        },

        22: {
            title:"What's Next? (#8)",
            description:"Unlock Oranges",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade("cosmic", 21)},
        },

        23: {
            fullDisplay() {return ` <p style="font-size: 10px;"> <b> Sweet Oranges (#9) </b> <br>
                Triple Oranges, IP and Double Galaxies <br> <br>
                Cost: 14.5 Galaxies`},
            cost: new Decimal(14.5),
            unlocked() {return hasUpgrade("cosmic", 22)},
        },

        24: {
            title: "funny dust (#10)",
            description: "100x Cosmic Dust and 2x Oranges",
            cost: new Decimal(75),
            unlocked() {return hasUpgrade("cosmic", 23)},
        },

        25: {
            effect() {return player.cosmic.points.clampMin(1).log(6).plus(1)},
            effectDisplay() {return format(upgradeEffect("cosmic", 25),2) + "x"},
            title: "Bitter (#11)",
            description: "Galaxies boost Oranges",
            cost: new Decimal(170),
            unlocked() {return hasUpgrade("cosmic", 24)},
        },

        26: {
            title: "Yellow (#12)",
            description: "+0.45 to Lemon's Exponent and 3x Galaxies",
            cost: new Decimal(650),
            unlocked() {return hasUpgrade("cosmic", 25)},
        },

        31: {
            title: "Orange (#13)",
            description: "+0.15 to Lemon's Exponent, 4x Oranges, 10x IP",
            cost: new Decimal(3500),
            unlocked() {return hasUpgrade("cosmic", 26)},
        },

        32: {
            title: "Pantone (#14)",
            description: "7.5x Oranges and 2.5x Galaxies",
            cost: new Decimal(5500),
            unlocked() {return hasUpgrade("cosmic", 31)},
        },

        33: {
            title: "Orange Juice (#15)",
            description: "1000x Cosmic Dust and 3x Oranges",
            cost: new Decimal(45000),
            unlocked() {return hasUpgrade("cosmic", 32)},
        },

        34: {
            title: "ip exponent!! (#16)",
            description: "+0.1 to IP's Exponent, 2.5x Oranges and +0.2 to Lemon's Exponent",
            cost: new Decimal(200000),
            unlocked() {return hasUpgrade("cosmic", 33)},
        },

        35: {
            title: "Not Useless (#17)",
            description: "BH boosts seem kinda useless... Cube all of the boosts BH gives and +0.25 to Lemon's Exponent",
            cost: new Decimal(650000),
            unlocked() {return hasUpgrade("cosmic", 34)},
        },

        36: {
            effect() {return player.L.points.clampMin(1).pow(0.85).log(100).plus(1)},
            effectDisplay() {return format(upgradeEffect("cosmic", 36),2) + "x"},
            title: "cool upgrade (#18)",
            description: "Limes boost Cosmic Dust [log100(limes^0.85)]",
            cost: new Decimal(750000),
            unlocked() {return hasUpgrade("cosmic", 35)},
        },

        41: {
            title: "giv me lime (#19)",
            description: "This is a big one. 10x Oranges and +0.5 to Lemon's Exponent",
            cost: new Decimal("2e6"),
            unlocked() {return hasUpgrade("cosmic", 36)},
        },

        42: {
            effect() {
                return [player.cosmic.thenumber.pow(20).plus(1),
                        player.cosmic.thenumber.pow(2).plus(1),
                        player.cosmic.thenumber.root(4.65).plus(1),
                        player.cosmic.thenumber.clampMin(1).pow(0.15).log(100).plus(1),
                        player.cosmic.thenumber.root(4.25).plus(1),
                ]

            },
            title: "UUT reference? (#20)",
            description: "Unlock The Number and x1e40 Lemons",
            cost: new Decimal("4e6"),
            unlocked() {return hasUpgrade("cosmic", 41)},
        },

        43: {
            title: "This isn getting op isn't it? (#21)",
            description: "25x Oranges, x1e42 lemons and +0.065 to IP's Exponent",
            cost: new Decimal("3e7"),
            unlocked() {return hasUpgrade("cosmic", 42)},
        },

        44: {
            title: "THIS ONE IS OP. (#22)",
            description: "x1e650 Limes, x1e63 lemons, 15x Oranges and +0.115 to IP's Exponent",
            cost: new Decimal("1.5e8"),
            unlocked() {return hasUpgrade("cosmic", 43)},
        },

        45: {
            title: "Lets Chill A Bit (#23)",
            description: "x1e10 BH Mass, x1e18 Cosmic Dust, and 5x Galaxies",
            cost: new Decimal("1.5e9"),
            unlocked() {return hasUpgrade("cosmic", 44)},
        },

        46: {
            title: "We need a bigger Number (#24)",
            description: "10000x Number and x1e33 Lemons",
            cost: new Decimal("1e10"),
            unlocked() {return hasUpgrade("cosmic", 45)},
        },

        51: {
            title: "Second Thought (#25)",
            description: "Well you might be getting lots of Limes but what about IP? +0.2 to IP's Exponent and 10x Oranges",
            cost: new Decimal("5e10"),
            unlocked() {return hasUpgrade("cosmic", 45)},
        },

        52: {
            title: "Tree (#26)",
            description: "Stuff's going really fast now, you might or not know what this means. +0.145 to IP's Exponent and 100x Oranges",
            cost: new Decimal("3e11"),
            unlocked() {return hasUpgrade("cosmic", 51)},
        },

        53: {
            title: "Yellow Red (#27)",
            description: "Maxed the IP Doubler? Well, it's time to max the Galaxy Doubler! 1500x Oranges",
            cost: new Decimal("1e12"),
            unlocked() {return hasUpgrade("cosmic", 52)},
        },

        54: {
            title: "Lebron (#28)",
            description: "It's not enough. 10000x Number and 100000x Oranges",
            cost: new Decimal("25e12"),
            unlocked() {return hasUpgrade("cosmic", 53)},
        },

        55: {
            title: "you are my sunshine (#29)",
            description: "Pushing to the Max! 100000x Oranges and x1e10 IP",
            cost: new Decimal("25e14"),
            unlocked() {return hasUpgrade("cosmic", 54)},
        },

        56: {
            fullDisplay() {return ` <p style="font-size: 10px;"> <b> my only sunshine (#30) </b> <br>
                x1e9 IP, x1e7 Number and x1e29 Cosmic Dust <br> <br>
                Requires: 35 Galaxy Doublers (orange layer)`},
            canAfford() {return getBuyableAmount("orange", 12).gte(35)},
            unlocked() {return hasUpgrade("cosmic", 55)},
            pay() {return},
        },

        61: {
            title: "you make me happy (#31)",
            description: "x1e33 BH Mass, x1e8 IP, x1e8 Number and x1e33 Lemons",
            cost: new Decimal("5e17"),
            unlocked() {return hasUpgrade("cosmic", 56)},
        },
        
        62: {
            title: "when the skies are grey (#32)",
            description: "x1e12 IP and 10x Galaxies",
            cost: new Decimal("6.5e17"),
            unlocked() {return hasUpgrade("cosmic", 61)},
        },

        63: {
            title: "thats enough (#33)",
            description: "x1e13 IP, x1e9 Number and 2x Galaxies",
            cost: new Decimal("7.5e18"),
            unlocked() {return hasUpgrade("cosmic", 62)},
        },

        64: {
            title: "It's Time (#34)",
            description: "x5e9 IP and x1e33 Cosmic Dust",
            cost: new Decimal("20e18"),
            unlocked() {return hasUpgrade("cosmic", 63)},
        },


        101: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Useless?? (#1) </b> <br>
                Doubles Cosmic Dust <br> <br>
                Cost: 3.5 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",101)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(3.5)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(3.5)},
        },

        102: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Nevermind. (#2) </b> <br>
                Triples Limes <br> <br>
                Cost: 8 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",102)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(8)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(8)},
            unlocked() {return hasUpgrade("cosmic", 101)}
        },

        103: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Cosmic Limes (#3) </b> <br>
                Double Limes <br> <br>
                Cost: 15 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",103)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(15)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(15)},
            unlocked() {return hasUpgrade("cosmic", 102)}
        },

        104: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> I hate LEMONS! (#5) </b> <br>
                Triples Lemons <br> <br>
                Cost: 30 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",104)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(30)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(30)},
            unlocked() {return hasUpgrade("cosmic", 103)}
        },

        105: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Dusty Limes (#7) </b> <br>
                5x Limes and Cosmic Dust <br> <br>
                Cost: 450 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",105)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(450)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(450)},
            unlocked() {return hasUpgrade("cosmic", 104)}
        },
        112: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Dusty (#4) </b> <br>
                Triple Cosmic Dust <br> <br>
                Cost: 17.5 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",112)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(17.5)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(17.5)},
            unlocked() {return hasUpgrade("cosmic", 102)}
        },
        113: {
            effect() {return player.cosmic.dust.clampMin(1).log(4).plus(1)},
            fullDisplay() {whatever = ``
                if (hasUpgrade("cosmic", 113)) whatever = `Currently: x` + format(upgradeEffect("cosmic", 113),2)
                return ` <p style="font-size: 12px;"> <b> Cosmic Synergy (#6) </b> <br>
                Cosmic Dust boosts itself [log5(dust)] <br> ` + whatever + ` <br>
                Cost: 95 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",113)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(95)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(95)},
            unlocked() {return hasUpgrade("cosmic", 112)}
        },
        111: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Infinite Void (#8) </b> <br>
                2x IP <br> <br>
                Cost: 5000 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",111)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(5000)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(5000)},
            unlocked() {return hasUpgrade("cosmic", 112)}
        },
        121: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Infinite Cosmos (#9) </b> <br>
                3x IP <br> <br>
                Cost: 10000 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",121)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(10000)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(10000)},
            unlocked() {return hasUpgrade("cosmic", 111)}
        },
        122: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Very BIG IP (#10) </b> <br>
                5.5x BH Mass and 1.001x IP <br> <br>
                Cost: 250000 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",122)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte(250000)},
            pay() {player.cosmic.dust = player.cosmic.dust.minus(250000)},
            unlocked() {return hasUpgrade("cosmic", 121)}
        },
        123: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Actual IP Boost (#11) </b> <br>
                2x IP <br> <br>
                Cost: 1e6 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",123)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte("1e6")},
            pay() {player.cosmic.dust = player.cosmic.dust.minus("1e6")},
            unlocked() {return hasUpgrade("cosmic", 122)}
        },
        124: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Cosmic ORANGES (#12) </b> <br>
                2.25x Oranges <br> <br>
                Cost: 5e6 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",124)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte("5e6")},
            pay() {player.cosmic.dust = player.cosmic.dust.minus("5e6")},
            unlocked() {return hasUpgrade("cosmic", 123)}
        },
        125: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Orange has your IP! (#13) </b> <br>
                3.5x IP and 1.15x Oranges <br> <br>
                Cost: 1e7 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",125)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte("10e6")},
            pay() {player.cosmic.dust = player.cosmic.dust.minus("10e6")},
            unlocked() {return hasUpgrade("cosmic", 124)}
        },
        126: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Finally!!! (#14) </b> <br>
                Keep lemon upgrade autobuy on Cosmic and 10x BH Mass <br> <br>
                Cost: 2.5e7 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",126)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte("25e6")},
            pay() {player.cosmic.dust = player.cosmic.dust.minus("25e6")},
            unlocked() {return hasUpgrade("cosmic", 125)}
        },
        131: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Greg (#15) </b> <br>
                Generate 100% of Infinity Points gained from reset per second <br> <br>
                Cost: 2e10 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",131)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte("2e10")},
            pay() {player.cosmic.dust = player.cosmic.dust.minus("2e10")},
            unlocked() {return hasUpgrade("cosmic", 126)}
        },
        132: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Interesting (#16) </b> <br>
                100x IP and 2x Galaxies <br> <br>
                Cost: 6.5e10 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",132)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte("6.5e10")},
            pay() {player.cosmic.dust = player.cosmic.dust.minus("6.5e10")},
            unlocked() {return hasUpgrade("cosmic", 131)}
        },
        133: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Orangery (#17) </b> <br>
                2x Oranges <br> <br>
                Cost: 2e11 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",133)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte("20e10")},
            pay() {player.cosmic.dust = player.cosmic.dust.minus("20e10")},
            unlocked() {return hasUpgrade("cosmic", 132)}
        },
        134: {
            effect() {return player.cosmic.dust.clampMin(1).root(4.25).plus(1)},
            fullDisplay() {whatever = ``
                if (hasUpgrade("cosmic", 134)) whatever = `Currently: x` + format(upgradeEffect("cosmic", 134),2)
                return ` <p style="font-size: 12px;"> <b> Galactic (#18) </b> <br>
                2x Galaxies and Cosmic Dust boosts IP [root4.25(dust)] <br> ` + whatever + ` <br>
                Cost: 1.5e14 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",134)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte("1.5e14")},
            pay() {player.cosmic.dust = player.cosmic.dust.minus("1.5e14")},
            unlocked() {return hasUpgrade("cosmic", 133)}
        },
        135: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Big jump huh? (#19) </b> <br>
                Keep Infinity Upgrade #17 Content on Cosmic <br> <br>
                Cost: 4.99e102 Cosmic Dust`},
            style() {if(hasUpgrade("cosmic",135)) return
                if(this.canAfford()) return {"background-color": "LightPink"}},
            canAfford() {return player.cosmic.dust.gte("4.99e102")},
            pay() {player.cosmic.dust = player.cosmic.dust.minus("4.99e102")},
            unlocked() {return hasUpgrade("cosmic", 134)}
        },
    },
    
},
)

addLayer("orange", {
    row: 2,
    name: "Orange",
    symbol: "O",
    color: "#ff4800",
    position: 1,
    type: "custom",
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    resource: "Oranges",
    baseResource: "IP",
    baseAmount() {return player.Infinity.points},
    requires: new Decimal("5e29"),
    branches: ["cosmic"],
    tabFormat: ["main-display",
        "prestige-button",
        ["display-text",
            function() {
                return "You have " + format(player.cosmic.points) + " IP."}],
        "blank",
        "buyables",
    ],
    hotkeys: [
    {
        key: "o", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "o: reset your progress for Oranges", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.orange.unlocked) doReset("orange") },
        unlocked() {return player.orange.unlocked}
    }
],

    canReset() {
        return player.Infinity.points.gte("5e29")
},
    getResetGain() {
        orangain = player.Infinity.points.clampMin(1).div("5e29").log(5).plus(1)
        mult = new Decimal(1)
        exp = new Decimal(1)

        if(hasUpgrade("cosmic", 23)) mult = mult.times(3)
        if(hasUpgrade("cosmic", 24)) mult = mult.times(2)
        if(hasUpgrade("cosmic", 25)) mult = mult.times(upgradeEffect("cosmic",25))
        if(hasUpgrade("cosmic", 31)) mult = mult.times(4)
        if(hasUpgrade("cosmic", 32)) mult = mult.times(7.5)
        if(hasUpgrade("cosmic", 33)) mult = mult.times(3)
        if(hasUpgrade("cosmic", 34)) mult = mult.times(2.5)
        if(hasUpgrade("cosmic", 41)) mult = mult.times(10)
        if(hasUpgrade("cosmic", 43)) mult = mult.times(25)
        if(hasUpgrade("cosmic", 43)) mult = mult.times(15)
        if(hasUpgrade("cosmic", 51)) mult = mult.times(10)
        if(hasUpgrade("cosmic", 52)) mult = mult.times(100)
        if(hasUpgrade("cosmic", 53)) mult = mult.times(1500)
        if(hasUpgrade("cosmic", 54)) mult = mult.times(100000)
        if(hasUpgrade("cosmic", 55)) mult = mult.times(100000)

        if(hasUpgrade("cosmic",124)) mult = mult.times(2.25)
        if(hasUpgrade("cosmic",125)) mult = mult.times(1.15)
        if(hasUpgrade("cosmic", 133)) mult = mult.times(2)

        if(hasUpgrade("omega", 11)) mult = mult.times(tmp.omega.lowercaseboostgain[4])

        orangain = orangain.times(mult).pow(exp)
        return orangain
    },
    getNextAt() {
    orangain = new Decimal(0).plus(tmp.orange.resetGain)
    return format(orangain.mul("5e29").pow(5), 1)
    },
    layerShown() {return hasUpgrade('cosmic', 22)},

    prestigeButtonText() {if(player.Infinity.points.gte("5e29")) return "Reset for " + format(tmp.orange.resetGain) + " Oranges"
        return "You need 5e29 IP to reset"
    },

    buyables: {
    11: {
        title: "IP Doubler",
        purchaseLimit: 50,
        effect() {
            return getBuyableAmount(this.layer, this.id).pow_base(2);
          },
        cost(x) {return x.pow_base(1.75) },
        display() { return "Buy for " + format(this.cost()) + " oranges \n" + getBuyableAmount("orange", 11) + "/50 \n Currently: x" + format(getBuyableAmount("orange",11).pow_base(2),2)},
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            affordable = player[this.layer].points.log(1.75).floor();
            if (affordable.gt(50)) affordable = new Decimal(49)
            player[this.layer].points = player[this.layer].points.minus(this.cost(affordable));
            setBuyableAmount(this.layer, this.id, affordable.plus(1));
        },
    },
    12: {
        title: "Galaxy Doubler",
        purchaseLimit: 35,
        effect() {
            return getBuyableAmount(this.layer, this.id).pow_base(2)
        },
        cost(x) { return x.pow_base(6.5).mul(2.5) },
        display() { return "Buy for " + format(this.cost()) + " oranges \n" + getBuyableAmount("orange", 12) + "/35 \n Currently: x" + format(getBuyableAmount("orange",12).pow_base(2),2)},
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            affordable = player[this.layer].points.div(2.5).log(6.5).floor();
            if (affordable.gt(35)) affordable = new Decimal(34)
            player[this.layer].points = player[this.layer].points.minus(this.cost(affordable));
            setBuyableAmount(this.layer, this.id, affordable.plus(1));
        },
    },
    
},
})


addLayer("omega", {
    row: 3,
    name: "Omega",
    symbol: "Ω",
    color: "#006eff",
    position: 0,
    type: "custom",
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        lowercase: new Decimal(0),
        tickrate: new Decimal(5),
        newrate: new Decimal(5)
    }},
    resource: "OP",
    baseResource: "IP",
    baseAmount() {return player.Infinity.points},
    requires: new Decimal("1.79e308"),
    branches: ["cosmic"],
    tabFormat: { "Main": {content: ["main-display",
        "prestige-button",
        ["display-text",
            function() {
                return "You have " + format(player.cosmic.points) + " IP."}],
        "blank",
        ["column", [
            ["row", [
                ["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14], ["upgrade", 15], ["upgrade", 16]
            ]]]],
        ["column", [
            ["row", [
                ["upgrade", 21], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24], ["upgrade", 25], ["upgrade", 26]
            ]]]],
        ["column", [
            ["row", [
                ["upgrade", 31], ["upgrade", 32], ["upgrade", 33], ["upgrade", 34], ["upgrade", 35], ["upgrade", 36]
            ]]]],
        ]},
        "Evil Tab": {content: [
        ["display-text",
            function() {
                return "You have " + format(player.omega.lowercase) + " ω Points."}, {"color": "cyan", "font-size": "16px", "font-family": "Comic Sans MS" }],
        ["display-text",
            function() {
                return format(tmp.omega.getlowercaseGain) + " ω Points/" + format(player.omega.tickrate) + "s"}, {"color": "gray", "font-size": "10px", "font-family": "Comic Sans MS" }],
        ["display-text",
            function() {
                return "x" + format(tmp.omega.lowercaseboostgain[0]) + " Limes"}, {"color": "white", "font-size": "10px", "font-family": "Comic Sans MS" }
        ],
        ["display-text",
            function() {
                if(hasUpgrade("omega", 115)) return "x" + format(tmp.omega.lowercaseboostgain[1]) + " Lemons"}, {"color": "yellow", "font-size": "10px", "font-family": "Comic Sans MS" }
        ],
        ["display-text",
            function() {
                if(hasUpgrade("omega", 124)) return "x" + format(tmp.omega.lowercaseboostgain[2]) + " IP"}, {"color": "orange", "font-size": "10px", "font-family": "Comic Sans MS" }
        ],
        ["display-text",
            function() {
                if(hasUpgrade("omega", 126)) return "x" + format(tmp.omega.lowercaseboostgain[3]) + " Galaxies"}, {"color": "purple", "font-size": "10px", "font-family": "Comic Sans MS" }
        ],
        ["display-text",
            function() {
                if(hasUpgrade("omega", 131)) return "x" + format(tmp.omega.lowercaseboostgain[4]) + " Oranges"}, {"color": "orange", "font-size": "10px", "font-family": "Comic Sans MS" }
        ],
        "blank",
        ["column", [
            ["row", [
                ["upgrade", 111], ["upgrade", 112], ["upgrade", 113], ["upgrade", 114], ["upgrade", 115], ["upgrade", 116]
            ]]]],
        ["column", [
            ["row", [
                ["upgrade", 121], ["upgrade", 122], ["upgrade", 123], ["upgrade", 124], ["upgrade", 125], ["upgrade", 126]
            ]]]],
        ["column", [
            ["row", [
                ["upgrade", 131]
            ]]]],
        ],
    unlocked() {return hasUpgrade("omega",11)}}},

    canReset() {
        return player.Infinity.points.gte("1.79e308")
},

    hotkeys: [
    {
        key: "m", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "m: reset your progress for Omega", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.omega.unlocked) doReset("omega") },
        unlocked() {return player.omega.unlocked}
    }
],

    getResetGain() {
        gain = player.Infinity.points.clampMin(1).div("1.79e308").log(5).plus(1)
        mult = new Decimal(1)
        exp = new Decimal(1)

        if(hasUpgrade("omega", 26)) mult = mult.times(2)

        gain = gain.times(mult).pow(exp)

        return gain
    },

    getlowercaseGain() {
        gain = new Decimal(1)
        mult = new Decimal(1)
        exp = new Decimal(1)

        if(hasUpgrade("omega", 111)) mult = mult.times(2)
        if(hasUpgrade("omega", 112)) mult = mult.times(1.65)
        if(hasUpgrade("omega", 113)) mult = mult.times(1.35)
        if(hasUpgrade("omega", 114)) mult = mult.times(1.5)
        if(hasUpgrade("omega", 116)) mult = mult.times(3)
        if(hasUpgrade("omega", 121)) mult = mult.times(2)
        if(hasUpgrade("omega", 122)) mult = mult.times(5)
        if(hasUpgrade("omega", 123)) mult = mult.times(1.1)
        if(hasUpgrade("omega", 124)) mult = mult.times(2)
        if(hasUpgrade("omega", 125)) mult = mult.times(1.5)
        if(hasUpgrade("omega", 126)) mult = mult.times(3)
        if(hasUpgrade("omega", 131)) mult = mult.times(2)

        if(hasUpgrade("omega", 12)) mult = mult.times(15)
        if(hasUpgrade("omega", 13)) mult = mult.times(7.5)
        if(hasUpgrade("omega", 21)) mult = mult.times(3)
        if(hasUpgrade("omega", 22)) mult = mult.times(10)
        if(hasUpgrade("omega", 23)) mult = mult.times(5)
        if(hasUpgrade("omega", 24)) mult = mult.times(2.5)
        if(hasUpgrade("omega", 25)) mult = mult.times(upgradeEffect("omega", 25))
        if(hasUpgrade("omega", 26)) mult = mult.times(5)

        gain = gain.times(mult).pow(exp)

        return gain
    },

    lowercaseboostgain() {
        limeboostbase = new Decimal(50)
        lemonboostbase = new Decimal(10)
        ipboostbase = new Decimal(0.001)
        galaxyboostbase = new Decimal(0.00001)
        orangeboostbase = new Decimal(0.000005)

        if(!hasUpgrade("omega", 115)) lemonboostbase = new Decimal(0)
        if(!hasUpgrade("omega", 124)) ipboostbase = new Decimal(0)
        if(!hasUpgrade("omega", 126)) galaxyboostbase = new Decimal(0)
        if(!hasUpgrade("omega", 131)) orangeboostbase = new Decimal(0)

        if(hasUpgrade("omega", 114)) limeboostbase = limeboostbase.plus(25)
        if(hasUpgrade("omega", 116)) lemonboostbase = lemonboostbase.plus(7.5)
        if(hasUpgrade("omega", 121)) limeboostbase = limeboostbase.plus(50)
        if(hasUpgrade("omega", 121)) lemonboostbase = lemonboostbase.plus(6.5)
        if(hasUpgrade("omega", 123)) limeboostbase = limeboostbase.plus(75)
        if(hasUpgrade("omega", 125)) ipboostbase = ipboostbase.plus(0.01)
        if(hasUpgrade("omega", 126)) ipboostbase = ipboostbase.plus(0.02)
        if(hasUpgrade("omega", 126)) lemonboostbase = lemonboostbase.plus(35)
        if(hasUpgrade("omega", 131)) galaxyboostbase = galaxyboostbase.plus("0.000005")

        if(hasUpgrade("omega", 13)) orangeboostbase = orangeboostbase.plus("0.000005")
        if(hasUpgrade("omega", 13)) ipboostbase = ipboostbase.plus(0.1)
        if(hasUpgrade("omega", 22)) ipboostbase = ipboostbase.plus(0.15)
        if(hasUpgrade("omega", 23)) limeboostbase = limeboostbase.plus("1e33")
        if(hasUpgrade("omega", 24)) lemonboostbase = lemonboostbase.plus("1e30")
        
        if(hasUpgrade("omega", 21)) ipboostbase = ipboostbase.times(upgradeEffect('omega', 21))
        

        limeboostbase = limeboostbase.times(player.omega.lowercase).plus(1)
        lemonboostbase = lemonboostbase.times(player.omega.lowercase).plus(1)
        ipboostbase = ipboostbase.times(player.omega.lowercase).plus(1)
        galaxyboostbase = galaxyboostbase.times(player.omega.lowercase).plus(1)
        orangeboostbase = orangeboostbase.times(player.omega.lowercase).plus(1)

        return [limeboostbase, lemonboostbase, ipboostbase, galaxyboostbase, orangeboostbase]
    },

    update(diff) {
        player.omega.tickrate = new Decimal(5)
        if(hasUpgrade("omega",111)) player.omega.tickrate = player.omega.tickrate.minus(0.25)
        if(hasUpgrade("omega",113)) player.omega.tickrate = player.omega.tickrate.minus(0.15)
        if(hasUpgrade("omega",131)) player.omega.tickrate = player.omega.tickrate.minus(0.6)
        if(hasUpgrade("omega",12)) player.omega.tickrate = player.omega.tickrate.minus(0.5)
        if(hasUpgrade("omega",23)) player.omega.tickrate = player.omega.tickrate.minus(0.25)
        player.omega.newrate = player.omega.newrate.minus(new Decimal(1).times(diff))
        if (player.omega.newrate.lte(0)) {player.omega.lowercase = player.omega.lowercase.plus(this.getlowercaseGain())
            player.omega.newrate = player.omega.tickrate
        }
    },
    layerShown() {return hasUpgrade('cosmic', 64) || player.omega.points.gte(0.1)  || hasUpgrade("omega",11)},
    getNextAt() {
        return tmp.omega.getResetGain
    },
    
    prestigeButtonText() {if(player.Infinity.points.gte("1.79e308")) return "Reset for " + format(tmp.omega.resetGain) + " OP"
        return "You need 1.79e308 IP to reset"
    },

    upgrades: {
    11: {
            title: "Lowercase (#1)",
            description: "Unlock ω",
            cost: new Decimal(1),
    },
    12: {
            title: "The Grind is REAL (#2)",
            description: "15x ω Points and -0.5 ω Tick",
            cost: new Decimal(7),
            unlocked() {return hasUpgrade("omega", 11)},
    },
    13: {
            title: "Welcome to Omega! (#3)",
            description: "4.5x ω Points, +0.1 to ω's IP Boost Base and +0.0000005 to ω's Orange Boost Base",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade("omega", 12)},
    },
    21: {
            effect() {return player.Infinity.points.clampMin(1).pow(0.15).log(100).plus(1)},
            effectDisplay() {return "x" + format(upgradeEffect('omega', 21))},
            title: "Is it worth the grind? (#4)",
            description: "3x ω Points and IP boosts ω's IP Boost Base [log100(IP^0.15)+1]",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade("omega", 12)},
    },
    22: {
            title: "Absolute Infinity (#5)",
            description: "10x ω Points and +0.15 to ω's IP Boost Base",
            cost: new Decimal(12),
            unlocked() {return hasUpgrade("omega", 21)},
    },
    23: {
            title: "THY LIMES MUST NOT BE FORGOTTEN (#6)",
            description: "5x ω Points, -0.25 ω Tick and +1e33 to ω's Lime Boost Base",
            cost: new Decimal(14),
            unlocked() {return hasUpgrade("omega", 22)},
    },
    24: {
            title: "CREATURE OF LEMONS (#7)",
            description: "2.5x ω Points and +1e30 to ω's Lemon Boost Base",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade("omega", 23)},
    },
    25: {
            effect() {return player.omega.lowercase.log(8.5)},
            effectDisplay() {return "x" + format(upgradeEffect('omega', 25))},
            title: "Useful..? (#8)",
            description: "ω Points boost themselves [log8.5(ω)]",
            cost: new Decimal(16),
            unlocked() {return hasUpgrade("omega", 24)},
    },
    26: {
            title: "RESET 2 TIMES (#9)",
            description: "2x ω OP and 5x ω Points",
            cost: new Decimal(34),
            unlocked() {return hasUpgrade("omega", 25)},
    },
    31: {
            title: "??? (#10)",
            description: "??? and Unlock ???",
            cost: new Decimal("1.79e308"),
            unlocked() {return hasUpgrade("omega", 26)},
    },

    111: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Very Epic (#1) </b> <br>
                2x ω Points and -0.25 ω Tick <br> <br>
                Cost: 10 ω Points`},
            style() {if(hasUpgrade("omega",111)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("10")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("10")},
            unlocked() {return hasUpgrade("omega", 11)},
    },
    112: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Funny Booster (#2) </b> <br>
                1.65x ω Points <br> <br>
                Cost: 25 ω Points`},
            style() {if(hasUpgrade("omega",112)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("25")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("25")},
            unlocked() {return hasUpgrade("omega", 111)},
    },
    113: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Trust the Process (#3) </b> <br>
                1.35x ω Points and -0.15 ω Tick <br> <br>
                Cost: 35 ω Points`},
            style() {if(hasUpgrade("omega",113)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("35")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("35")},
            unlocked() {return hasUpgrade("omega", 112)},
    },
    114: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> No Name I (#4) </b> <br>
                +25 to ω's Lime Boost Base and 1.5x ω Points <br> <br>
                Cost: 50 ω Points`},
            style() {if(hasUpgrade("omega",114)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("50")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("50")},
            unlocked() {return hasUpgrade("omega", 113)},
    },
    115: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Grind em' Limes! (#5) </b> <br>
                ω now boosts Lemons <br> <br>
                Cost: 100 ω Points`},
            style() {if(hasUpgrade("omega",115)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("100")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("100")},
            unlocked() {return hasUpgrade("omega", 114)},
    },
    116: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> No Name II (#6) </b> <br>
                3x ω Points and +7.5 to ω's Lemon Boost Base <br> <br>
                Cost: 235 ω Points`},
            style() {if(hasUpgrade("omega",116)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("235")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("235")},
            unlocked() {return hasUpgrade("omega", 115)},
    },
    121: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> All in One (#7) </b> <br>
                2x ω Points, +50 to ω's Lime Boost Base and +6.5 to ω's Lemon Boost Base <br> <br>
                Cost: 700 ω Points`},
            style() {if(hasUpgrade("omega",121)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("700")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("700")},
            unlocked() {return hasUpgrade("omega", 116)},
    },
    122: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> BIG (#8) </b> <br>
                5x ω Points <br> <br>
                Cost: 1500 ω Points`},
            style() {if(hasUpgrade("omega",122)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("1500")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("1500")},
            unlocked() {return hasUpgrade("omega", 121)},
    },
    123: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Grindin (#9) </b> <br>
                1.1x ω Points and +75 to ω's Lime Boost Base <br> <br>
                Cost: 6500 ω Points`},
            style() {if(hasUpgrade("omega",123)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("6500")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("6500")},
            unlocked() {return hasUpgrade("omega", 122)},
    },
    124: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Even IP? (#10) </b> <br>
                2x ω Points and ω now boosts IP <br> <br>
                Cost: 8750 ω Points`},
            style() {if(hasUpgrade("omega",124)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("8750")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("8750")},
            unlocked() {return hasUpgrade("omega", 123)},
    },
    125: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> More Costs (#11) </b> <br>
                1.5x ω Points and +0.01 to ω's IP Boost Base <br> <br>
                Cost: 45000 ω Points and 1 Galaxy`},
            style() {if(hasUpgrade("omega",125)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("45000") && player.cosmic.points.gte("1")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("45000"); player.cosmic.points = player.cosmic.points.minus("1")},
            unlocked() {return hasUpgrade("omega", 124)},
    },
    126: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Recovering... (#12) </b> <br>
                3x ω Points, +0.02 to ω's IP Boost Base, +35 to ω's Lemon Boost Base and ω now boosts Galaxies <br> <br>
                Cost: 135000 ω Points and 250000 Cosmic Dust`},
            style() {if(hasUpgrade("omega",126)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("135000") && player.cosmic.dust.gte("250000")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("135000"); player.cosmic.dust = player.cosmic.dust.minus("250000")},
            unlocked() {return hasUpgrade("omega", 125)},
    },
    131: {
            fullDisplay() {return ` <p style="font-size: 12px;"> <b> Oranges too.? (#13) </b> <br>
                2x ω Points, -0.6 ω Tick, +0.000005 to ω's Galaxy Boost Base and ω now boosts Oranges <br> <br>
                Cost: 250000 ω Points`},
            style() {if(hasUpgrade("omega",131)) return
                if(this.canAfford()) return {"background-color": "cyan"}},
            canAfford() {return player.omega.lowercase.gte("250000")},
            pay() {player.omega.lowercase = player.omega.lowercase.minus("250000")},
            unlocked() {return hasUpgrade("omega", 126)},
    },
},})

addLayer("grapefruit", {
    row: 3,
    name: "Grapefruits",
    symbol: "?",
    color: "#ee1069",
    position: 1,
    type: "custom",
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    resource: "OP",
    baseResource: "IP",
    baseAmount() {return player.Infinity.points},
    requires: new Decimal("1.79e3008"),
    branches: ["omega"],

    layerShown() {return hasUpgrade("omega", 126)},
    unlocked() {return false},
    tooltipLocked() {return "See ya final update (hopefully) (i had enough of this)"},
    getResetGain() {return new Decimal(0)},
    getNextAt() {return new Decimal(0)},
})