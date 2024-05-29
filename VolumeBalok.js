function hitungVolumeBalok(panjang, lebar, tinggi) {
    if (panjang <= 0 || lebar <= 0 || tinggi <= 0) {
        throw new Error('Panjang, lebar, dan tinggi harus berupa bilangan positif')
    }
	if(typeof panjang !== 'number' || typeof lebar !== 'number' || typeof tinggi !== 'number'){
		throw new Error('parameter tidak boleh string')
	}
    return panjang * lebar * tinggi
}



export default hitungVolumeBalok