import loginPage from "../pageobjects/login.page.js";

describe("Akses Rekam Medis User MATERNITY", () => {
  after(async () => {
    await loginPage.logout();

    expect(
      $(
        "~Terpercaya\nSemua data Mums akan terjamin privasinya dan tidak disebarluaskan"
      )
    ).toBeDisplayed();

    console.log("=============\n SUDAH LOGOUT!");
  });

  it("should login with valid credentials", async () => {
    await loginPage.closeChukcer();
    await loginPage.login("macan.oneweek@yopmail.com", "password");

    expect($("~Selamat Datang di Teman Bumil")).toBeDisplayed();

    console.log("=============\n SUDAH LOGIN!");
  });

  it("Tutup Media", async () => {
    await loginPage.closeMediaLive();
  });

  it("Accept Popup TnC", async () => {
    await loginPage.accPopupTnC();

    expect($("~Selamat Datang di Teman Bumil")).not.toBeDisplayed();

    console.log("=============\n SUDAH ACC POPUP TNC!");
  });

  it("Close Popup Banner", async () => {
    await loginPage.closePUB();

    expect($('~"Hi, "')).toBeDisplayed();

    console.log("=============\n SUDAH CLOSE PUB JIKA ADA!");
  });

  it("Close Coachmark Pilih Fase", async () => {
    await loginPage.coachmarkPilihFase();

    await driver.pause(3000);
    expect($('~"User Fase Hamil"')).toBeDisplayed();

    console.log("=============\n SUDAH CLOSE PUB!");
  });

  it("Open Menu Rekam Medis from JPOPS", async () => {
    await $(loginPage.jpopsRekamMedis).click();
    await driver.pause(3000);

    // Ekspetasi
    expect($('~"Rekam Medis"')).toBeDisplayed();
    expect($('~"Babyku"')).toBeDisplayed();

    console.log("=============\n SUDAH DISPLAY CARD REKAM MEDIS HAMIL & NB");
  });
});

describe("Akses Rekam Medis User NEWBORN", () => {
  it("should login with valid credentials", async () => {
    await loginPage.closeChukcer();
    await loginPage.login("macan.onemonth@yopmail.com", "password");

    expect($("~Selamat Datang di Teman Bumil")).toBeDisplayed();

    console.log("=============\n SUDAH LOGIN!");
  });

  it("Tutup Media", async () => {
    await loginPage.closeMediaLive();
  });

  it("Accept Popup TnC", async () => {
    await loginPage.accPopupTnC();

    expect($("~Selamat Datang di Teman Bumil")).not.toBeDisplayed();

    console.log("=============\n SUDAH ACC POPUP TNC!");
  });

  it("Close Popup Banner", async () => {
    await loginPage.closePUB();

    expect($('~"Hi, "')).toBeDisplayed();

    console.log("=============\n SUDAH CLOSE PUB JIKA ADA!");
  });

  it("Close Coachmark Pilih Fase", async () => {
    await loginPage.coachmarkPilihFase();

    await driver.pause(3000);
    expect($('~"User Fase NB"')).toBeDisplayed();

    console.log("=============\n SUDAH CLOSE PUB!");
  });

  it("Open Menu Rekam Medis from JPOPS", async () => {
    await $(loginPage.jpopsRekamMedis).click();
    await driver.pause(3000);

    // Ekspetasi
    expect($('~"Rekam Medis"')).toBeDisplayed();
    expect($('~"babababba"')).toBeDisplayed();

    console.log("=============\n SUDAH DISPLAY CARD REKAM MEDIS NB");
  });
});
