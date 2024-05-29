// Import Chai assertion library
import { expect } from 'chai'

// Contoh penjumlahan yang ingin diuji
// const pemjumlahan = 1 + 1
// expect(pemjumlahan).to.equal(2) //equal tu expect hasilnya berapa dr constt penjumlahannya

// contoh Method .equal 
expect(1).to.equal(1)

// contoh method .a
expect("Alya").to.be.a('string')

// contoh method .empty
expect({}).to.be.empty //--> empty gausa dipanggil sbg function tp cukup dipaggil sbg property aja

// contoh method .include
expect("alya").to.include("ly")

//contoh method .deep
expect([{a: 1}]).to.deep.include({a: 1})