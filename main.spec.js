const { expect } = require('chai')
const wrongInput = require('./wrongInput')
const result = require('./result')

describe("FT_001_konversi_nilai",function(){
    describe("KN_001 Mencoba melakukan konversi nilai dengan input 100",function(){
        it ("Menampilkan nilai A",function(){
            const nilaiA = result(100)
            expect(nilaiA).to.equal("Nilai nya adalah A")
        })
    })
    describe("KN_002 Mencoba Mencoba melakukan konversi nilai dengan input 85",function(){
        it ("Menampilkan nilai B",function(){
            const nilaiB = result(85)
            expect(nilaiB).to.equal("Nilai nya adalah B")
        })
    })
    describe("KN_003 Mencoba melakukan konversi nilai dengan input 75",function(){
        it ("Menampilkan nilai C",function(){
            const nilaiC = result(75)
            expect(nilaiC).to.equal("Nilai nya adalah C")
        })
    })
    describe("KN_004 Mencoba Mencoba melakukan konversi nilai dengan input 65",function(){
        it ("Menampilkan nilai D",function(){
            const nilaiD = result(65)
            expect(nilaiD).to.equal("Nilai nya adalah D")
        })
    })
    describe("KN_005 Mencoba melakukan konversi nilai dengan input 55",function(){
        it ("Menampilkan nilai E",function(){
            const nilaiE = result(55)
            expect(nilaiE).to.equal("Nilai nya adalah E")
        })
    })
    describe("KN_006 Mencoba melakukan konversi nilai dengan input 25",function(){
        it ("Menampilkan nilai F",function(){
            const nilaiF = result(25)
            expect(nilaiF).to.equal("Nilai nya adalah F")
        })
    })
    describe("KN_007 Mencoba melakukan konversi nilai tanpa mengisi form input",function(){
        it ("Menampilkan text 'Nilai yang diinput harus berupa angka'",function(){
            const emptyInput = wrongInput()
            expect(emptyInput).to.equal("Nilai yang diinput harus berupa angka")
        })
    })
    describe("KN_008 Mencoba melakukan konversi nilai dengan input berupa simbol",function(){
        it ("Menampilkan text 'Nilai yang diinput harus berupa angka'",function(){
            const symbolInput = wrongInput("!@***&")
            expect(symbolInput).to.equal("Nilai yang diinput harus berupa angka")
        })
    })
    describe("KN_009 Mencoba melakukan konversi nilai dengan input berupa string",function(){
        it ("Menampilkan text 'Nilai yang diinput harus berupa angka'",function(){
            const stringInput = wrongInput("test")
            expect(stringInput).to.equal("Nilai yang diinput harus berupa angka")
        })
    })
    describe("KN_010 Mencoba melakukan konversi nilai dengan input lebih dari 100",function(){
        it ("Menampilkan text 'Nilai yang diinput tidak boleh lebih dari 100'",function(){
            const moreThanInput = wrongInput(101)
            expect(moreThanInput).to.equal("Nilai yang diinput tidak boleh lebih dari 100")
        })
    })
    describe("KN_011 Mencoba melakukan konversi nilai dengan input kurang dari 0",function(){
        it ("Menampilkan text 'Nilai yang diinput tidak boleh kurang dari 0'",function(){
            const lessThanInput = wrongInput(-1)
            expect(lessThanInput).to.equal("Nilai yang diinput tidak boleh kurang dari 0")
        })
    })
})