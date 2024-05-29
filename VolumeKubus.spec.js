import { expect } from "chai";
import RumusVolumeKubus from "./VolumeKubus.js";

let rumusVolumeKubus

    describe('VolumeKubus', () => {
        beforeEach(function () {
            rumusVolumeKubus = new RumusVolumeKubus()
        })

        it('Menghitung volume kubus dengan sisi 5 posiif', () => {
            const volume = rumusVolumeKubus.hitungVolume(5)
            expect(volume).to.equal(125)
        })
    })


        // // volume balok
        // describe('VolumeBalok', () => {
        // beforeEach(function () {
        //     rumusVolumeBalok = new rumusVolumeBalok()
        // })
        
        // it('Melemparkan error jika panjang, lebar, atau tinggi negatif', () => {
        //     const volume1 = rumusVolumeBalok.hitungVolume(-4, 3, 2)
        //     expect(volume1).to.throw('Panjang, lebar, dan tinggi balok harus positif');

