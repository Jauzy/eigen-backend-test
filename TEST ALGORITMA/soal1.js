
// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"


let text = "NEGIE1"

let org_len = text.length
for(i=org_len-1;i>=0;i--){
    text += text[i]
} 
text = text.slice(org_len)

console.log(text)