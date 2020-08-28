const para = 'Bob hit a ball, the hit BALL flew far after it was hit'

let para1 = para.replace(/[!?;,.]/ig, ' ').toLowerCase()

console.log(para1);

const banned = ['hit']

let brokenPara = para1.split(' ')

let resultIndex = 0

let resultValue = brokenPara[0]

let maxCount = 0

let countObject = {}

const findResult = () => {
    brokenPara.forEach( (word, index) => {
        if(!banned.includes(word)){
            countObject[word] = 0
            for(let phrase=0; phrase<=brokenPara.length; phrase++) {
                if(word === brokenPara[phrase])
                    countObject[word]+=1
            }
        }
        if(maxCount<countObject[word]) {
            maxCount = countObject[word]
            resultIndex = index
            resultValue = brokenPara[index]
        }
    })
}
findResult()
console.log(resultValue);
