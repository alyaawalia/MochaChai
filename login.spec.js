import { expect } from "chai"
import { it } from "mocha"

//describe dan it function

// describe('F001 - Fitur Login', function(){
//     it('User login dengan username dan password yang benar', function(){
//             //kode untuk assertion
//             expect(1).to.equal(1)
//         })

//     it('User login dengan username yang benar dan password yang salah', function(){
//             //kode untuk assertion
//             expect(1).to.equal(1)
//         })

//     it('User login dengan username yang benar dan password yang kosong', function(){
//             //kode untuk assertion
//             expect(1).to.equal(1)
//         })
// })


//before, after, beforeEach, afterEach
describe('F001 - Fitur Login', function(){
    beforeEach ('register user',function () {
        //script untuk register user yng mau ditest
        expect(1).to.equal(1)
    })
    
    afterEach ('remove registered user',function () {
        //script untuk menghapus user
        expect(1).to.equal(1)
    })

    it('User login dengan username dan password yang benar', function(){
            //kode untuk assertion
            expect(1).to.equal(1)
        })
    it('User login dengan username dan password yang benar', function(){
            //kode untuk assertion
            expect(1).to.equal(1)
        })
    })
