document.getElementById('biodataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters
    const weight = parseFloat(document.getElementById('weight').value);

    // Validasi
    if (!name || !gender || isNaN(height) || isNaN(weight)) {
        alert('Harap lengkapi semua data dengan benar!');
        return;
    }

    // Simpan nama di localStorage
    localStorage.setItem('userName', name);

    // Hitung BMI
    const bmi = weight / (height * height);

    // Logika navigasi ke tiga halaman
    if (bmi < 18.5) {
        window.location.href = 'pages/bb-kurang.html';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        window.location.href = 'pages/bb-ideal.html';
    } else {
        window.location.href = 'pages/bb-obesitas.html';
    }
});
