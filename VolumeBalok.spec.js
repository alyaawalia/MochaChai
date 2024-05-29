import { expect } from "chai";
import RumusVolumeBalok from "./VolumeBalok.js";

describe('VolumeBalok', () => {
    let rumusVolumeBalok

    beforeEach(function () {
        rumusVolumeBalok = new RumusVolumeBalok()
    })

    it('Melemparkan error jika panjang, lebar, atau tinggi negatif', () => {
        expect(() => hitungVolumeBalok(-4, 3, 2)).to.throw('Panjang, lebar, dan tinggi balok harus positif')
    })

    // it('Error jika salah satu nilai bersifat negatif', () => {
    //         const volume = rumusVolumeKubus.hitungVolume(-4, 3, 2)
    //         expect(volume).to.throw('Panjang, lebar, dan tinggi balok harus positif')
    //     })
    
    // it('Menghitung volume balok nilai positif', () => {
    //     const volume = rumusVolumeBalok.hitungVolume(4, 3, 2)
    //     expect(volume).to.equal(24)
    // })
})

