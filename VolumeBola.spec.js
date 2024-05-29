import { expect } from "chai";
import RumusVolumeBola from "./VolumeBola.js";

describe('VolumeBola', () => {
    let rumusVolumeBola

    beforeEach(function () {
        rumusVolumeBola = new RumusVolumeBola()
    })

    it('Melemparkan error jika jari-jari negatif', () => {
        expect(() => hitungVolumeBola(-14)).to.throw('Jari-jari bola harus positif')
    })

    // it('Menghitung volume bola dengan jari-jari 14', () => {
    //     const volume = rumusVolumeBola.hitungVolume(14)
    //     expect(volume).to.be.closeTo(1436.75, 0.01)
    // });
})