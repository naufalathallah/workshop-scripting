import { faker } from "@faker-js/faker";
import loginPage from "../pageobjects/login.page.js";

describe.only("Akses Rekam Medis User MATERNITY", () => {
  before(async () => {
    await loginPage.endToEndLogin("macan.oneweek@yopmail.com", "password");
  });

  after(async () => {
    //await loginPage.logout();
  });

  it("Open Menu Rekam Medis from JPOPS", async () => {
    await $(loginPage.jpopsRekamMedis).click();

    expect($('~"Rekam Medis"')).toBeDisplayed();
    expect($('~"Babyku"')).toBeDisplayed();
  });

  it("Create New Rekam Medis Janin", async () => {
    await $("~LIHAT GRAFIK").click();
    await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]'
    ).click();

    const isDisplayed = await $("~Yuk, Isi Rekam Medis Janin").isDisplayed();
    console.log("==============\n BTN REKMED KOSONG TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $("~Yuk, Isi Rekam Medis Janin").click();
    } else {
      await $("~TAMBAH DATA").click();
    }

    await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button'
    ).click();

    const beratJanin = `${faker.number.int({ min: 100, max: 4000 })}`;
    const panjangJanin = `${faker.number.int({ min: 10, max: 60 })}`;
    const detakJantungJanin = `${faker.number.int({ min: 70, max: 120 })}`;

    //Isi Form Rekam Medis Janin
    await $(
      '//android.view.View[@content-desc="Berat Janin (gr)"]/android.widget.EditText'
    ).click();
    await $(
      '//android.view.View[@content-desc="Berat Janin (gr)"]/android.widget.EditText'
    ).setValue(beratJanin);

    await $(
      '//android.view.View[@content-desc="Panjang Janin (cm)"]/android.widget.EditText'
    ).click();
    await $(
      '//android.view.View[@content-desc="Panjang Janin (cm)"]/android.widget.EditText'
    ).setValue(panjangJanin);

    await $(
      '//android.view.View[@content-desc="Detak Jantung Janin (per menit)"]/android.widget.EditText'
    ).click();
    await $(
      '//android.view.View[@content-desc="Detak Jantung Janin (per menit)"]/android.widget.EditText'
    ).setValue(detakJantungJanin);

    //SIMPAN
    await $("~SIMPAN").click();

    //KATEGORI BERAT
    const beratJaninShown = await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]'
    ).getAttribute("content-desc");

    //KATEGORI PANJANG
    await $("~Panjang").click();
    const panjangJaninShown = await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]'
    ).getAttribute("content-desc");

    //KATEGORI DETAK JANTUNG
    await $("~Detak Jantung").click();
    const detakJantungJaninShown = await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[7]'
    ).getAttribute("content-desc");

    expect(beratJaninShown).toContain(beratJanin);
    expect(panjangJaninShown).toContain(panjangJanin);
    expect(detakJantungJaninShown).toContain(detakJantungJanin);
  });
});

describe("Akses Rekam Medis User NB", () => {
  before(async () => {
    await loginPage.endToEndLogin("macan.onemonth@yopmail.com", "password");
  });

  it("Open Menu Rekam Medis from JPOPS", async () => {
    await $(loginPage.jpopsRekamMedis).click();

    expect($('~"Rekam Medis"')).toBeDisplayed();
    expect($('~"babababba"')).toBeDisplayed();
  });
});
