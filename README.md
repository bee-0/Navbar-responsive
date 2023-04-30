# Navbar-responsive





### Deskripsi

membuat hamburger menu responsif dengan JavaScript.
disini saya akan menjelaskan inti dalam membangun sebuah menu hamburger .

Silakan melihat [Demo](https://bee-0.github.io/Navbar-responsive/)

- Penjelasan
Ketika hamburger menu diklik, akan terjadi toggle class open pada elemen dengan class .hamburger, dan class open akan ditambahkan atau dihapus dari elemen 

### javascript


```javascript
var hamburger = document.querySelector('.hamburger');

var menu = document.querySelector('.menu');
```
- Mendefinisikan variabel 'hamburger' dan 'menu'  mengambil element HTML dengan class ".hamburger"  dan   ".menu" 

```javascript
hamburger.addEventListener('click', function() { ... });
```

- Menambahkan event listener untuk menghandle event klik pada elemen dengan class ". hamburger"

```javascript
this.classList.toggle('open');
```

- Ketika elemen dengan class ".hamburger" di-klik, class 'open' ditambahkan atau dihapus dari elemen, sehingga mengubah tampilan hamburger menjadi close dan sebaliknya


```javascript
if (menu.classList.contains('open')) { ... }
```

- Memeriksa apakah elemen HTML dengan class '.menu' memiliki class 'open' mengunakan 'classList.contains() '  jika iya, maka menghapus class open dengan menu.classList.remove('open').

```javascript
else { ... }
```

- Jika elemen HTML dengan class .menu tidak memiliki class open, maka class open ditambahkan ke elemen ini dengan menu.classList.add('open'), sehingga menampilkan isi menu.

📍 Untuk Penjelasan lebih lengkap silakan kunjungi website [dioarafi]()

