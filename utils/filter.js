function filter(transactions){
    let update = []

    //This is a lot of manual code, but I dont see a better way atm
    for(let i = 0; i < transactions.length; i++) {
        if(transactions[i].vendor.toUpperCase().includes('CAPITAL ONE')) continue
        else if(transactions[i].vendor.toUpperCase().includes('ADOBE')){
            transactions[i].vendor = 'Adobe Software'
            transactions[i].account = '565 SOFTWARE LEASE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('ADVANCE')){
            transactions[i].vendor = 'Advanced Auto Parts'
            transactions[i].account = '530 AUTO & TRUCK EXPENSE'
            update.push(transactions[i])
        }  else if(transactions[i].vendor.toUpperCase().includes('AMZN')){
            transactions[i].vendor = 'Amazon'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('PRIME VIDEO')){
            transactions[i].vendor = 'Amazon'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('ANCHOR')){
            transactions[i].vendor = 'Anchor Covers'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('AUGUSTINE')){
            transactions[i].vendor = 'AUGUSTINE EXTERMINATORS'
            transactions[i].account = '600 MAINTENANCE & REPAIRS'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('AUTOZONE')){
            transactions[i].vendor = 'AutoZone'
            transactions[i].account = '530 AUTO & TRUCK EXPENSE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('BEST BUY')){
            transactions[i].vendor = 'Best Buy'
            transactions[i].account = '550 OFFICE SUPPLIES'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('BP')){
            transactions[i].vendor = 'BP Gas'
            transactions[i].account = '529 FUEL & CASH TICKETS'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('CASEYS')){
            transactions[i].vendor = 'Caseys Gas'
            transactions[i].account = '529 FUEL & CASH TICKETS'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('COSTCO')){
            transactions[i].vendor = 'Costco'
            transactions[i].account = '550 OFFICE SUPPLIES'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('CRAIGSLIST')){
            transactions[i].vendor = 'Craigslist.org'
            transactions[i].account = '561 HIRING EXPENSE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('CVS')){
            transactions[i].vendor = 'CVS'
            transactions[i].account = '550 OFFICE SUPPLIES'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('DASHLANE')){
            transactions[i].vendor = 'Dashlane'
            transactions[i].account = '565 SOFTWARE LEASE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('DIALPAD')){
            transactions[i].vendor = 'Dialpad'
            transactions[i].account = '545 TELEPHONE EXPENSE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('DOORDASH')){
            transactions[i].vendor = 'DoorDash'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('FEDEX')){
            transactions[i].vendor = 'FedEx'
            transactions[i].account = '555 POSTAGE & DELIVERY'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('GOODCENTS')){
            transactions[i].vendor = 'Goodcents'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('GREAT PLAINS SUPPLY')){
            transactions[i].vendor = 'GREAT PLAINS SUPPLY, INC'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('HARBOR FREIGHT TOOLS')){
            transactions[i].vendor = 'Harbor Freight'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('HARDEE')){
            transactions[i].vendor = 'Hardees'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('HOELZEL')){
            transactions[i].vendor = 'hoelzel'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('HOLLIDAY SAND')){
            transactions[i].vendor = 'Holliday Sand & Gravel Co.'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('THE HOME DEPOT')){
            transactions[i].vendor = 'Home Depot'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('HULU')){
            transactions[i].vendor = 'Hulu'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('INDEED')){
            transactions[i].vendor = 'Indeed'
            transactions[i].account = '561 HIRING EXPENSE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('JOHNSON COUNTY AGG')){
            transactions[i].vendor = 'Johnson County Aggragate'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('KC BOBCAT')){
            transactions[i].vendor = 'Kc Bobcat'
            transactions[i].account = '530 AUTO & TRUCK EXPENSE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('LAMARS')){
            transactions[i].vendor = 'Lamars Donuts'
            transactions[i].account = '701 MEALS & ENTERTAINMENT'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('CAR WASH')){
            transactions[i].vendor = 'Lenexa Classic Car Wash'
            transactions[i].account = '530 AUTO & TRUCK EXPENSE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('LOWES')){
            transactions[i].vendor = 'Lowes'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('MAISCH')){
            transactions[i].vendor = 'maisch small engine repair'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('MCDONALDS')){
            transactions[i].vendor = 'McDonalds'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('MENARDS')){
            transactions[i].vendor = 'menards'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('MICRO CENTER')){
            transactions[i].vendor = 'Micro Center'
            transactions[i].account = '550 OFFICE SUPPLIES'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('MID AMERICA LOCKSMITH')){
            transactions[i].vendor = 'Mid America Locksmith'
            transactions[i].account = '530 AUTO & TRUCK EXPENSE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('MINSKY')){
            transactions[i].vendor = 'Minsky\'s Pizza'
            transactions[i].account = '701 MEALS & ENTERTAINMENT'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('NAPA')){
            transactions[i].vendor = 'NAPA Auto'
            transactions[i].account = '530 AUTO & TRUCK EXPENSE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('NORTHERN TOOL')){
            transactions[i].vendor = 'Northern Tool'
            transactions[i].account = '402 Construction Materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('O\'REILLY')){
            transactions[i].vendor = 'O\'Reilly'
            transactions[i].account = '530 AUTO & TRUCK EXPENSE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('OFFICE MAX')){
            transactions[i].vendor = 'OfficeMax'
            transactions[i].account = '550 OFFICE SUPPLIES'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('OFFICE DEPOT')){
            transactions[i].vendor = 'Office Depot'
            transactions[i].account = '550 OFFICE SUPPLIES'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('PET')){
            transactions[i].vendor = 'Petco'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('PHILLIPS')){
            transactions[i].vendor = 'Phillips 66'
            transactions[i].account = '529 FUEL & CASH TICKETS'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('CONOCO')){
            transactions[i].vendor = 'Phillips 66'
            transactions[i].account = '529 FUEL & CASH TICKETS'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('PRICE CHOPPER')){
            transactions[i].vendor = 'Price Chopper'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('QT')){
            transactions[i].vendor = 'QuickTrip'
            transactions[i].account = '529 FUEL & CASH TICKETS'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('REEVES W')){
            transactions[i].vendor = 'Reeves-Wiedeman'
            transactions[i].account = '410 Service Materials'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('RIGHT NETWORKS')){
            transactions[i].vendor = 'Right Networks'
            transactions[i].account = '565 SOFTWARE LEASE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('RIVERVIEW STONE')){
            transactions[i].vendor = 'Riverview Stone'
            transactions[i].account = '402 Construction materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('SEMCO')){
            transactions[i].vendor = 'Semco'
            transactions[i].account = '402 Construction materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('SHERWIN WILLIAMS')){
            transactions[i].vendor = 'SHERWIN WILLIAMS'
            transactions[i].account = '402 Construction materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('SHELL')){
            transactions[i].vendor = 'Shell'
            transactions[i].account = '529 FUEL & CASH TICKETS'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('SHUTTE')){
            transactions[i].vendor = 'Shutte Lumber'
            transactions[i].account = '402 Construction materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('SIGNS BY TOMORROW')){
            transactions[i].vendor = 'Signs By Tomorrow'
            transactions[i].account = '560 ADVERTISING & PROMOTION'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('SMITTY')){
            transactions[i].vendor = 'Smitty\'s Lawn and Garden'
            transactions[i].account = '402 Construction materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('STACK')){
            transactions[i].vendor = 'stack'
            transactions[i].account = '565 SOFTWARE LEASE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('STANION')){
            transactions[i].vendor = 'Stanion Electric'
            transactions[i].account = '402 Construction materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('STAPLES')){
            transactions[i].vendor = 'Staples'
            transactions[i].account = '550 OFFICE SUPPLIES'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('STARBUCKS')){
            transactions[i].vendor = 'Starbucks'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('STRAIGHTERLINE')){
            transactions[i].vendor = 'straighterline'
            transactions[i].account = '850 EDUCATION & TRAINING'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('STRUCTURE STUDIOS')){
            transactions[i].vendor = 'Structure Studios'
            transactions[i].account = '565 SOFTWARE LEASE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('SUBWAY')){
            transactions[i].vendor = 'Subway'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('SUTHERLANDS')){
            transactions[i].vendor = 'Sutherlands'
            transactions[i].account = '402 Construction materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('TACOBELL')){
            transactions[i].vendor = 'TacoBell'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('VISTAPRINT')){
            transactions[i].vendor = 'VistaPrint'
            transactions[i].account = '560 ADVERTISING & PROMOTION'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('WM')){
            transactions[i].vendor = 'Wal-mart'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('WALGREEN')){
            transactions[i].vendor = 'Walgreens'
            transactions[i].account = '550 OFFICE SUPPLIES'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('WENDY')){
            transactions[i].vendor = 'Wendys'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('WESTLAKE')){
            transactions[i].vendor = 'Westlake Ace Hardware'
            transactions[i].account = '402 Construction materials Costs'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('YETI')){
            transactions[i].vendor = 'Yeti'
            transactions[i].account = '560 ADVERTISING & PROMOTION'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('ZIPRECRUITER')){
            transactions[i].vendor = 'ZipRecruiter'
            transactions[i].account = '561 HIRING EXPENSE'
            update.push(transactions[i])
        }
        
        else {
            update.push(transactions[i])
        }

    }

    return update
}

module.exports.filter = filter
