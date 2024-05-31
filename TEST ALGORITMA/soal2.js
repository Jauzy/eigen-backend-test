// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

// const sentence = "Saya sangat senang mengerjakan soal algoritma"

// longest(sentence) 
// mengerjakan: 11 character

function longest(str){
    let text = ""
    let len = 0

    str.split(" ").forEach(item => {
        if(item.length > len){
            text = item
            len = item.length
        }
    })

    console.log(text, ":", len, 'character')
}

const sentence = "Saya sangat senang mengerjakan soal algoritma"
longest(sentence) 