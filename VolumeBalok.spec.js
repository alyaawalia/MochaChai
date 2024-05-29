import { expect } from "chai";
import hitungVolumeBalok from "./VolumeBalok.js";

describe('Volume Balok', function() {
    it('Hitung volume balok dengan nilai positif', function() {
        const volume = hitungVolumeBalok(2, 3, 4)
        expect(volume).to.equal(24)
    })

    it('Hitung volume balok dengan salah satu nilai negatif', function() {
        expect(() => hitungVolumeBalok(-2, 3, 4)).to.throw('Panjang, lebar, dan tinggi harus berupa bilangan positif')

    })

    it('Hitung volume balok dengan salah satu string', function() {
        expect(() => hitungVolumeBalok('panjang', 3, 4)).to.throw('parameter tidak boleh string')
    })
})