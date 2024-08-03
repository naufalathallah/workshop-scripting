import { $ } from "@wdio/globals";

class ExamplePage {
  get btnTidakChucker() {
    return "~Tidak";
  }

  get pipMediaLive() {
    return "//android.webkit.WebView";
  }

  get btnClosePipMediaLive() {
    return '//android.view.View[@content-desc="◍ LIVE"]/android.view.View[2]';
  }

  get btnCheckboxPopupTnC() {
    return "//android.widget.CheckBox";
  }

  get btnLanjutPopupTnC() {
    return "~LANJUT";
  }

  get btnClosePUB() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.ImageView[2]';
  }

  get btnCloseCoachmarkPilihFase() {
    return "~Oke";
  }

  get jpopsRekamMedis() {
    return "~Rekam Medis";
  }

  get btnBackRekamMedis() {
    return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button';
  }

  get btnMenuProfil() {
    return "~PROFIL\nTab 5 of 5";
  }

  get tabEmail() {
    return "~Email";
  }

  get isiEmailOrPassword() {
    return "//android.widget.EditText";
  }

  get btnMasukLogin() {
    return "~MASUK";
  }

  get btnLogout() {
    return "~Logout";
  }

  get btnYaClosePopupLogout() {
    return "~Ya";
  }

  async closeChukcer() {
    // Tutup Chucker
    await driver.pause(5000);
    const isDisplayed = await $(this.btnTidakChucker).isDisplayed();
    console.log("==============\n CHUCKER TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $(this.btnTidakChucker).click();
    }
  }

  async login(email, password) {
    // Masukkan Email
    await $(this.tabEmail).click();
    await $(this.isiEmailOrPassword).click();
    await driver.pause(2000);
    await $(this.isiEmailOrPassword).click();
    await $(this.isiEmailOrPassword).setValue(email);
    await $("//android.widget.ScrollView").click();
    await $(this.btnMasukLogin).click();

    // Masukkan Password
    await $(this.isiEmailOrPassword).click();
    await $(this.isiEmailOrPassword).setValue(password);
    await $("//android.widget.ScrollView").click();
    await $(this.btnMasukLogin).click();
  }

  async closeMediaLive() {
    //Close PIP Media Live
    await driver.pause(5000);
    const isDisplayed = await $(this.pipMediaLive).isDisplayed();
    console.log("=============\n MEDIA TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $(this.btnClosePipMediaLive).click();
    }
  }

  async accPopupTnC() {
    await driver.pause(5000);
    await $(this.btnCheckboxPopupTnC).click();
    await $(this.btnLanjutPopupTnC).click();
  }

  async closePUB() {
    await driver.pause(5000);
    const isDisplayed = await $(this.btnClosePUB).isDisplayed();
    console.log("==============\n PUB TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $(this.btnClosePUB).click();
    }
  }

  async coachmarkPilihFase() {
    await driver.pause(3000);
    const isDisplayed = await $(this.btnCloseCoachmarkPilihFase).isDisplayed();
    console.log(
      "================\n Coachmark Pilih Fase TAMPIL: ",
      isDisplayed
    );
    if (isDisplayed) {
      await $(this.btnCloseCoachmarkPilihFase).click();
    }
  }

  async logout() {
    await $(this.btnBackRekamMedis).click();
    await $(this.btnMenuProfil).click();
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    );
    await $(this.btnLogout).click();
    await $(this.btnYaClosePopupLogout).click();
    await driver.pause(3000);
  }

  async endToEndLogin(email, password) {
    await this.closeChukcer();
    await this.login(email, password);
    await this.closeMediaLive();
    await this.accPopupTnC();
    await this.closePUB();
    await this.coachmarkPilihFase();
  }
}

export default new ExamplePage();
