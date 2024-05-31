// Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

// diagonal pertama = 1 + 5 + 9 = 15 
// diagonal kedua = 0 + 5 + 7 = 12 

// maka hasilnya adalah 15 - 12 = 3


// assume matrix NxN always correct with the dimension without checking
let matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

let dimension = matrix.length

let diagonal_a = 0
let diagonal_b = 0

matrix.forEach((item, i) => {
    diagonal_a += item[i]
    diagonal_b += item[matrix.length - 1 - i]
})

console.log(diagonal_a - diagonal_b)
