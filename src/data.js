import { imageaulia, imagealif, imageciro, imagefrizy, imagepuspita,
         imageatopic, imageeczema, imageherpes, imagevitiligo  } from './assets/image'

export const data = [
    {
        id: 1,
        image: imagealif,
        name: "alif nur rokhman",
        univ: "Universitas Darma Persada",
        title: "Modeling",
        link: "https://www.instagram.com/iam_alifnr04/"
    },
    {
        id: 2,
        image: imageaulia,
        name: "aulia ayu puspaningrum",
        univ: "Universitas Darma Persada",
        title: "Data Acquisition",
        link: "https://www.instagram.com/pnrmxxlia/"
    },
    {
        id: 3,
        image: imagefrizy,
        name: "frizy gartian",
        univ: "Universitas Darma Persada",
        title: "UI dan Deployment",
        link: "https://www.instagram.com/frzygar/"
    },
    {
        id: 4,
        image: imagepuspita,
        name: "puspita apriyani",
        univ: "Institut Bisnis dan Informatika Kesatuan",
        title: "Data Acquisition",
        link: "https://www.instagram.com/puspitaapriyani/"
    },
    {
        id: 5,
        image: imageciro,
        name: "krisogonus wiero baba kaju",
        univ: "Universitas Esa Unggul",
        title: "Modeling",
        link: "https://www.instagram.com/wiero_jr/"
    }
]

export const menuDisease = [
    {
        id: 1,
        image: imageatopic,
        name: 'Atopic Dermatitis',
        desc: 'Atopic Dermatitis adalah penyakit kulit kronis yang ditandai oleh peradangan, gatal-gatal, dan ruam merah yang umumnya terjadi pada bayi, anak-anak, remaja, dan orang dewasa.'
    },
    {
        id: 2,
        image: imageeczema,
        name: 'Eczema',
        desc: 'Eczema adalah kelainan kulit kronis yang ditandai oleh peradangan, gatal-gatal, dan ruam merah yang muncul dalam bentuk bercak kering, pecah-pecah, dan terasa kasar pada permukaan kulit.'
    },
    {
        id: 3,
        image: imageherpes,
        name: 'Herpes',
        desc: 'Herpes adalah infeksi kulit atau selaput lendir yang disebabkan oleh virus, ditandai dengan munculnya lepuh berisi cairan pada daerah tertentu, seperti bibir, kelamin, atau kulit.'
    },
    {
        id: 4,
        image: imagevitiligo,
        name: 'Vitiligo',
        desc: 'Vitiligo, Kelainan autoimun yang menyebabkan kehilangan pigmen pada kulit, sehingga menghasilkan bercak putih yang tidak beraturan.'
    }
]

export const typeDisease = [
    {
        id: 1,
        name: 'Atopic Dermatitis',
        desc: 'Atopic Dermatitis adalah jenis dermatitis atau peradangan kulit kronis yang mempengaruhi orang yang memiliki riwayat alergi dan asma. Atopic dermatitis menyebabkan kulit menjadi kering, gatal, kemerahan, dan terkadang membentuk lepuhan dan kerak.',
        sub: [
            {id: 1, title: 'Kulit yang kering, kasar, atau pecah-pecah.'},
            {id: 2, title: 'Kulit yang merah dan bersisik.'},
            {id: 3, title: 'Gatal parah, terutama di malam hari.'},
            {id: 4, title: 'Kulit yang teriritasi dan bengkak.'},
            {id: 5, title: 'Lepuhan yang dapat berisi cairan dan terbuka, melepuh, atau mengeluarkan cairan.'},
            {id: 6, title: 'Kulit yang tebal dan kasar karena sering digaruk.'},
            {id: 7, title: 'Infeksi kulit yang sering terjadi karena kulit teriritasi dan terbuka.'},
        ],
        handling: [
            {id: 1, title: 'Menjaga kelembapan kulit: Penggunaan pelembap atau krim emolien secara teratur sangat penting untuk menjaga kelembapan kulit. Oleskan pelembap setelah mandi atau setiap kali kulit terasa kering. Pilih produk pelembap yang lembut, bebas pewangi, dan cocok untuk kulit sensitif.'},
            {id: 2, title: 'Hindari pemicu dan iritan: Identifikasi faktor-faktor yang memicu atau memperburuk dermatitis atopik Anda. Pemicu umum dapat meliputi alergen seperti serbuk sari, tungau debu, bulu hewan, atau makanan tertentu. Hindari kontak dengan alergen yang diketahui dan gunakan produk kulit yang lembut, bebas pewangi, dan bebas bahan kimia iritan.'},
            {id: 3, title: 'Mandi atau mencuci dengan hati-hati: Mandi dengan air hangat (bukan air panas) selama 10-15 menit setiap hari atau setiap dua hari dapat membantu menjaga kelembapan kulit. Gunakan sabun yang lembut, bebas pewangi, dan pH seimbang. Hindari menggosok kulit terlalu keras saat mandi dan setelah mandi, tepuk-tepuk kulit dengan lembut dan segera oleskan pelembap.'},
            {id: 4, title: 'Obat topikal: Dokter Anda mungkin meresepkan krim kortikosteroid topikal untuk meredakan peradangan dan gatal pada kulit. Krim ini biasanya digunakan hanya pada area yang terkena dan untuk jangka waktu yang singkat. Selain itu, krim atau salep kalsineurin inhibitor non-steroid seperti pimecrolimus atau tacrolimus juga dapat diresepkan untuk mengendalikan peradangan pada dermatitis atopik.'},
            {id: 5, title: 'Antihistamin: Jika gatal sangat mengganggu, dokter Anda mungkin meresepkan antihistamin oral untuk membantu mengurangi gejala gatal dan membantu tidur yang lebih nyenyak.'},
            {id: 6, title: 'Menghindari penggarukan: Menghindari menggaruk kulit adalah penting untuk mencegah iritasi lebih lanjut dan memperburuk peradangan. Anda dapat menggunakan kuku pendek atau memakai sarung tangan saat tidur untuk mencegah menggaruk.'},
            {id: 7, title: 'Pakaian dan lingkungan: Gunakan pakaian yang lembut dan bernapas, hindari pakaian yang terlalu ketat atau terbuat dari bahan kasar. Hindari juga suhu ekstrem, cuaca panas dan lembab, serta tingkat kelembaban yang rendah yang dapat mempengaruhi kulit.'},
        ],
        text: 'Penting untuk berkonsultasi dengan dokter untuk mendapatkan diagnosis yang akurat dan rekomendasi penanganan yang tepat sesuai dengan kondisi Anda.',
    },
    {
        id: 2,
        name: 'Eczema',
        desc: 'Eczema adalah kondisi kulit yang menyebabkan kulit menjadi meradang, kering, gatal, dan mengelupas. Kondisi ini bisa disebabkan oleh faktor lingkungan, genetik, dan imunologis.',
        sub: [
            {id: 1, title: 'Kulit yang merah, kering, dan bersisik.'},
            {id: 2, title: 'Gatal dan terasa perih pada kulit yang terkena.'},
            {id: 3, title: 'Muncul bercak kecil berair yang dapat melepuh dan pecah, kemudian mengeluarkan cairan.'},
            {id: 4, title: 'Kulit yang kasar dan tebal karena sering digaruk.'},
            {id: 5, title: 'Pada beberapa kasus, kulit dapat berubah warna menjadi lebih gelap atau lebih terang dari warna kulit normal.'},
        ],
        handling: [
            {id: 1, title: 'Menjaga kulit tetap lembap: Gunakan pelembap atau krim emolien secara teratur untuk menjaga kelembapan kulit. Oleskan pelembap setelah mandi atau setiap kali kulit terasa kering. Pilih pelembap yang lembut dan bebas pewangi atau bahan iritan potensial.'},
            {id: 2, title: 'Hindari pemicu dan iritan: Identifikasi faktor-faktor yang memicu atau memperburuk eksim Anda, seperti alergen, deterjen, sabun keras, stres, cuaca ekstrem, atau keringat berlebih. Usahakan untuk menghindari faktor-faktor tersebut dan gunakan produk kulit yang lembut dan bebas pewangi.'},
            {id: 3, title: 'Mandi atau mencuci dengan hati-hati: Hindari mandi dengan air panas, karena dapat mengeringkan kulit. Gunakan air hangat dan pilih sabun yang lembut, bebas pewangi, dan pH seimbang. Setelah mandi, tepuk-tepuk kulit dengan lembut dan segera oleskan pelembap.'},
            {id: 4, title: 'Kompres dingin: Jika terdapat rasa gatal yang parah atau peradangan pada kulit, Anda dapat menggunakan kompres dingin untuk meredakan gejalanya. Bungkus es dalam kain bersih dan letakkan pada area yang terkena selama beberapa menit.'},
            {id: 5, title: 'Hindari menggaruk: Meskipun gatal, hindari menggaruk kulit eksim Anda karena hal itu dapat memperburuk peradangan dan menyebabkan luka. Anda dapat menggunakan kuku pendek atau memakai sarung tangan khusus saat tidur untuk mencegah menggaruk.'},
            {id: 6, title: 'Obat bebas: Anda dapat menggunakan krim kortikosteroid over-the-counter (OTC) yang mengandung hidrokortison untuk meredakan peradangan dan gatal pada eksim ringan. Tetapi pastikan untuk mengikuti petunjuk penggunaan dan tidak menggunakannya dalam jangka panjang tanpa pengawasan dokter.'},
        ],
        text: 'Penting untuk berkonsultasi dengan dokter untuk mendapatkan diagnosis yang akurat dan rekomendasi penanganan yang tepat sesuai dengan kondisi Anda.',
    },
    {
        id: 3,
        name: 'Herpes',
        desc: 'Herpes adalah infeksi virus yang disebabkan oleh virus herpes simplex (HSV). Infeksi herpes dapat mempengaruhi kulit atau selaput lendir pada tubuh. Gejala herpes dapat bervariasi tergantung pada lokasi dan jenis virus herpes yang menyebabkan infeksi.',
        sub: [
            {id: 1, title: 'Munculnya lepuhan kecil: Lepuhan kecil dengan cairan bening pada kulit atau selaput lendir adalah gejala yang paling umum dari infeksi herpes. Lepuhan ini kemudian pecah dan membentuk luka.'},
            {id: 2, title: 'Rasa sakit atau gatal: Sebelum lepuhan muncul, seseorang dengan herpes mungkin merasakan rasa sakit atau gatal pada area yang terinfeksi.'},
            {id: 3, title: 'Demam atau sakit kepala: Beberapa orang dengan herpes mungkin juga mengalami demam, sakit kepala, atau rasa lelah.'},
            {id: 4, title: 'Pembengkakan kelenjar getah bening: Infeksi herpes dapat menyebabkan pembengkakan kelenjar getah bening di sekitar area yang terinfeksi.'},
            {id: 5, title: 'Sakit saat buang air kecil: Infeksi herpes genital dapat menyebabkan rasa sakit atau ketidaknyamanan saat buang air kecil.'},
            {id: 6, title: 'Nyeri pada area yang terinfeksi: Setelah lepuhan pecah, luka pada kulit atau selaput lendir dapat menyebabkan rasa sakit atau nyeri.'},
        ],
        handling: [
            {id: 1, title: 'Obat antivirus: Obat antivirus seperti asiklovir, valasiklovir, atau famsiklovir sering diresepkan untuk mengurangi keparahan dan durasi gejala herpes, serta mengurangi risiko penyebaran virus. Obat ini umumnya diberikan dalam bentuk tablet atau salep topikal. Penting untuk memulai pengobatan sesegera mungkin setelah timbulnya gejala pertama.'},
            {id: 2, title: 'Pengelolaan gejala: Untuk meredakan gejala, beberapa langkah yang dapat diambil termasuk mengompres area yang terkena dengan es, menghindari pakaian ketat atau berbahan kasar yang dapat mengiritasi kulit, dan menghindari penggarukan atau memecahkan lepuhan agar tidak memperburuk infeksi.'},
            {id: 3, title: 'Perubahan gaya hidup: Menerapkan gaya hidup sehat dan menjaga daya tahan tubuh dapat membantu mengelola herpes. Hal ini termasuk menjaga pola makan yang seimbang, beristirahat yang cukup, mengurangi stres, dan menjaga kebersihan yang baik.'},
            {id: 4, title: 'Pengobatan pencegahan: Untuk individu dengan herpes berulang, dokter dapat meresepkan terapi pencegahan jangka panjang dengan obat antivirus. Ini dapat membantu mengurangi frekuensi dan keparahan serangan herpes.'},
        ],
        text: 'Penting untuk berkonsultasi dengan dokter untuk mendapatkan diagnosis yang akurat dan rekomendasi penanganan yang tepat sesuai dengan kondisi Anda.',
    },
    {
        id: 4,
        name: 'Vitiligo',
        desc: 'Vitiligo, Kelainan autoimun yang menyebabkan kehilangan pigmen pada kulit, sehingga menghasilkan bercak putih yang tidak beraturan. Vitiligo adalah kondisi kulit yang ditandai oleh kehilangan pigmen melanin, yang menyebabkan terbentuknya area kulit yang putih atau pucat. Ini disebabkan oleh gangguan dalam produksi melanin oleh sel-sel melanosit di kulit. Vitiligo dapat mempengaruhi area-area kulit yang berbeda, termasuk wajah, tangan, lengan, kaki, dan bagian lain dari tubuh',
        sub: [
            {id: 1, title: 'kemunculan bercak-bercak putih atau pucat pada kulit. Bercak-bercak ini cenderung simetris, yaitu muncul di kedua sisi tubuh secara mirip'},
            {id: 2, title: 'Warna kulit yang hilang pada area yang terkena vitiligo dapat berbeda-beda, mulai dari putih, pucat, hingga merah muda. Bercak-bercak ini dapat membesar seiring waktu atau menggabungkan satu sama lain, dan kadang-kadang dapat mempengaruhi rambut dan alat kelamin'},
        ],
        handling: [
            {id: 1, title: 'Krim Kortikosteroid: Krim atau salep kortikosteroid sering diresepkan untuk mengurangi peradangan dan mengembalikan warna kulit pada daerah yang terkena vitiligo. Penggunaan krim kortikosteroid harus diawasi oleh dokter karena penggunaan jangka panjang dapat menyebabkan efek samping.'},
            {id: 2, title: 'Terapi Cahaya: Terapi cahaya ultraviolet (UV) dapat membantu dalam memulihkan warna kulit pada daerah yang terkena vitiligo. Terdapat beberapa metode terapi cahaya yang digunakan, termasuk terapi UVB dengan atau tanpa penggunaan psoralen (PUVA) dan terapi cahaya excimer.'},
            {id: 3, title: 'Terapi Topikal Imunomodulator: Imunomodulator topikal, seperti tacrolimus atau pimecrolimus, dapat digunakan untuk mengurangi peradangan dan memulihkan pigmen pada daerah yang terkena.'},
            {id: 4, title: 'Terapi Laser: Terapi laser dapat digunakan untuk merangsang produksi melanosit (sel yang menghasilkan pigmen melanin) di area yang terkena vitiligo.'},
            {id: 5, title: 'Transplantasi Melanosit: Prosedur ini melibatkan transplantasi melanosit dari area kulit yang masih normal ke area yang terkena vitiligo. Metode ini umumnya digunakan pada kasus vitiligo yang luas dan stabil.'},
            {id: 6, title: 'Makeup Khusus: Penggunaan makeup khusus atau pigmen kulit yang cocok dengan warna kulit dapat membantu menutupi bercak-bercak putih pada kulit.'},
            {id: 7, title: 'Selain itu, penting juga untuk menghindari faktor-faktor pemicu yang dapat memperburuk vitiligo, seperti sinar matahari langsung, stres, dan cedera pada kulit. Konsultasikan dengan dokter kulit Anda untuk mendapatkan rekomendasi penanganan yang paling sesuai dengan kondisi Anda.'},
        ],
        vit:', meskipun tidak ada obat yang dapat menyembuhkan vitiligo sepenuhnya, berikut adalah beberapa opsi penanganan yang umum digunakan ',
        text: 'Penting untuk berkonsultasi dengan dokter untuk mendapatkan diagnosis yang akurat dan rekomendasi penanganan yang tepat sesuai dengan kondisi Anda.'
    }
]