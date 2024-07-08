const gambarArray = [
    { backgroundColor: 'gray', borderRadius: '0' },
    { backgroundColor: 'red', borderRadius: '50%' },
    { backgroundColor: 'blue', borderRadius: '0' },
    { backgroundColor: 'green', borderRadius: '50%' }
];

let urutan = 0;

function ubahGambar() {
    urutan = (urutan + 1) % gambarArray.length;
    const elemenGambar = document.getElementById('gambar');
    const gambarBerikutnya = gambarArray[urutan];
    elemenGambar.style.backgroundColor = gambarBerikutnya.backgroundColor;
    elemenGambar.style.borderRadius = gambarBerikutnya.borderRadius;
}