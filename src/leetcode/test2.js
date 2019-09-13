var longestPalindrome = function(s) {
    let strToArr = s.split('')
    let currentIndex = 0;
    let result = ''
    while(currentIndex <= strToArr.length - 1){
        let middle = (strToArr.length - currentIndex - 1) / 2
        let currentRes = strToArr[currentIndex]
        let middleStart = middle + currentIndex
        while(middleStart>currentIndex){
            let middleStr = ''
            if ((middleStart * 10) % 10 === 0){
                middleStr = strToArr[Math.floor(middleStart)]
            }
            const count = Math.ceil(middleStart-currentIndex)
            const before = strToArr.slice(currentIndex,currentIndex + count)
            const after = strToArr.slice(Math.floor(middleStart + 1) , Math.floor(middleStart + 1) + count).reverse()
            if (before.join('') === after.join('')){
                const str = after.reverse().join('');
                currentRes = before.join('') + middleStr + str
                break;
            } else {
                middleStart -= 0.5
            }
        }
        currentIndex+=1
        if (currentRes.length >= result.length){
            result = currentRes
        }
    }
    return result
};
console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'))
