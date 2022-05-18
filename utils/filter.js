function filter(transactions){
    let update = []

    //This is a lot of manual code, but I dont see a better way atm
    for(let i = 0; i < transactions.length; i++) {

        if(transactions[i].vendor.toUpperCase().includes('ADOBE')){
            transactions[i].vendor = 'Adobe Software'
            transactions[i].account = '565 SOFTWARE LEASE'
            update.push(transactions[i])
        } else if(transactions[i].vendor.toUpperCase().includes('ADVANCED')){
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
        } else if(transactions[i].vendor.toUpperCase().includes('DOORDASH')){
            transactions[i].vendor = 'DoorDash'
            transactions[i].account = '125 A/R - Shareholder (Bryan)'
            transactions[i].customer = 'Shareholder - Bryan Yates'
            update.push(transactions[i])
        }
        
        else {
            update.push(transactions[i])
        }

    }

    return update
}

module.exports.filter = filter
