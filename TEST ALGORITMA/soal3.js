// Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

// INPUT = ['xc', 'dz', 'bbb', 'dz']  
// QUERY = ['bbb', 'ac', 'dz']  

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT


let input = ['xc', 'dz', 'bbb', 'dz']
let query = ['bbb', 'ac', 'dz']

let count = []

query.forEach(item => {
    let c = 0
    count.push(c)
})

input.forEach(inp_key => {
    query.forEach((que_key, i) => {
        if (inp_key === que_key)    
            count[i] += 1
    })
})

console.log(count)