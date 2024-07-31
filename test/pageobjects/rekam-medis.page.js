import { $ } from "@wdio/globals";
import { faker } from "@faker-js/faker";

class RekamMedisPage {
  get pageRekamMedis() {
    return '~"Rekam Medis"';
  }

  get cardRekamMedisBaby() {
    return '~"Babyku"';
  }

  get cardRekamMedisAnak() {
    return '~"Anakku"';
  }

  get btnLihatGrafik() {
    return "~LIHAT GRAFIK";
  }

  get cardRekamMedis() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]';
  }

  get btnYukIsiRekamMedis() {
    return "~Yuk, Isi Rekam Medis Janin";
  }

  get btnTambahData() {
    return "~TAMBAH DATA";
  }

  get btnBackFormSkrining() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button';
  }

  get btnIsiBeratJanin() {
    return '//android.view.View[@content-desc="Berat Janin (gr)"]/android.widget.EditText';
  }

  get btnIsiPanjangJanin() {
    return '//android.view.View[@content-desc="Panjang Janin (cm)"]/android.widget.EditText';
  }

  get btnIsiDJJ() {
    return '//android.view.View[@content-desc="Detak Jantung Janin (per menit)"]/android.widget.EditText';
  }

  get btnIsiBeratBadanAnak() {
    return `//android.view.View[@content-desc="Berat Badan (kg)\n *"]/android.widget.EditText`;
  }

  get btnIsiTinggiBadanAnak() {
    return `//android.view.View[@content-desc="Tinggi Badan (cm)\n *"]/android.widget.EditText`;
  }

  get btnIsiLingkarKepalaAnak() {
    return '//android.view.View[@content-desc="Lingkar Kepala (cm)"]/android.widget.EditText';
  }

  get btnSimpanRekamMedis() {
    return "~SIMPAN";
  }

  get tabKategoriBeratJanin() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]';
  }

  get tabKategoriPanjangJanin() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]';
  }

  get tabKategoriDJJ() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]';
  }

  get tabKategoriBeratAnak() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]';
  }

  get tabKategoriTinggiAnak() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]';
  }

  get tabKategoriLingkarKepalaAnak() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]';
  }

  get tabKategoriBeratTinggiAnak() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]';
  }

  get tabKategoriImtAnak() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]';
  }

  async openCreateFormRekamMedis() {
    await $(this.btnLihatGrafik).click();
    await $(this.cardRekamMedis).click();

    const isDisplayed = await $(this.btnYukIsiRekamMedis).isDisplayed();
    console.log("==============\n BTN REKMED KOSONG TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $(this.btnYukIsiRekamMedis).click();
    } else {
      await $(this.btnTambahData).click();
    }

    await $(this.btnBackFormSkrining).click();
  }

  async createRekamMedisJanin(beratJanin, panjangJanin, detakJantungJanin) {
    //Isi Form Rekam Medis Janin
    await $(this.btnIsiBeratJanin).click();
    await $(this.btnIsiBeratJanin).setValue(beratJanin);

    await $(this.btnIsiPanjangJanin).click();
    await $(this.btnIsiPanjangJanin).setValue(panjangJanin);

    await $(this.btnIsiDJJ).click();
    await $(this.btnIsiDJJ).setValue(detakJantungJanin);

    //SIMPAN
    await $(this.btnSimpanRekamMedis).click();
  }

  async getBeratJaninShown() {
    //KATEGORI BERAT
    return await $(this.tabKategoriBeratJanin).getAttribute("content-desc");
  }

  async getPanjangJaninShown() {
    //KATEGORI PANJANG
    await $("~Panjang").click();
    return await $(this.tabKategoriPanjangJanin).getAttribute("content-desc");
  }

  async getDetakJantungJaninShown() {
    //KATEGORI DJJ
    await $("~Detak Jantung").click();
    return await $(this.tabKategoriDJJ).getAttribute("content-desc");
  }

  async createRekamMedisNewborn(
    beratBadanAnak,
    tinggiBadanAnak,
    lingkarKepalaAnak
  ) {
    //Isi Form Rekam Medis Janin
    await $(this.btnIsiBeratBadanAnak).click();
    await $(this.btnIsiBeratBadanAnak).setValue(beratBadanAnak);

    await $(this.btnIsiTinggiBadanAnak).click();
    await $(this.btnIsiTinggiBadanAnak).setValue(tinggiBadanAnak);

    await $(this.btnIsiLingkarKepalaAnak).click();
    await $(this.btnIsiLingkarKepalaAnak).setValue(lingkarKepalaAnak);

    //SIMPAN
    await $(this.btnSimpanRekamMedis).click();
  }

  async getBeratBadanAnakShown() {
    //KATEGORI BERAT
    return await $(this.tabKategoriBeratAnak).getAttribute("content-desc");
  }

  async getTinggiBadanAnakShown() {
    //KATEGORI TINGGI
    await $("~Tinggi").click();
    return await $(this.tabKategoriTinggiAnak).getAttribute("content-desc");
  }

  async getLingkarKepalaAnakShown() {
    //KATEGORI LINGKAR KEPALA
    await $("~Lingkar Kepala").click();
    return await $(this.tabKategoriLingkarKepalaAnak).getAttribute(
      "content-desc"
    );
  }

  async getBeratPerTinggiAnakShown() {
    //KATEGORI BERAT or TINGGI ANAK
    await $("~Berat/Tinggi").click();
    return await $(this.tabKategoriBeratTinggiAnak).getAttribute(
      "content-desc"
    );
  }

  async getIMTanak() {
    //KATEGORI IMT ANAK
    await $("~Indeks Masa Tubuh").click();
    return await $(this.tabKategoriImtAnak).getAttribute("content-desc");
  }

  get calculateImt() {
    return (berat, tinggi) => (berat / Math.pow(tinggi / 100, 2)).toFixed(2);
  }
}

export default new RekamMedisPage();
