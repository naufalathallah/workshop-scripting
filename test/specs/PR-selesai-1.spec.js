import loginPage from "../pageobjects/login.page.js";
import { faker } from "@faker-js/faker";
import rekamMedisPage from "../pageobjects/rekam-medis.page.js";

describe("Akses Rekam Medis User MATERNITY", () => {
  before(async () => {
    await loginPage.endToEndLogin("macan.oneweek@yopmail.com", "password");
  });

  after(async () => {
    //await loginPage.logout();
  });

  it("Open Menu Rekam Medis from JPOPS", async () => {
    await $(loginPage.jpopsRekamMedis).click();

    expect($(rekamMedisPage.pageRekamMedis)).toBeDisplayed();
    expect($(rekamMedisPage.cardRekamMedisBaby)).toBeDisplayed();
  });

  it("Create New Rekam Medis Janin", async () => {
    const beratJanin = `${faker.number.int({ min: 100, max: 4000 })}`;
    const panjangJanin = `${faker.number.int({ min: 10, max: 60 })}`;
    const detakJantungJanin = `${faker.number.int({ min: 70, max: 120 })}`;

    await rekamMedisPage.openCreateFormRekamMedis();
    await rekamMedisPage.createRekamMedisJanin(
      beratJanin,
      panjangJanin,
      detakJantungJanin
    );

    const beratJaninShown = await rekamMedisPage.getBeratJaninShown();
    const panjangJaninShown = await rekamMedisPage.getPanjangJaninShown();
    const detakJantungJaninShown =
      await rekamMedisPage.getDetakJantungJaninShown();

    expect(beratJaninShown).toContain(beratJanin);
    expect(panjangJaninShown).toContain(panjangJanin);
    expect(detakJantungJaninShown).toContain(detakJantungJanin);

    console.log(
      `=======================\n BERAT JANIN SHOWN: ${beratJaninShown}, BERAT EKSPETASI ADA: ${beratJanin}`
    );
    console.log(
      `=======================\n PANJANG JANIN SHOWN: ${panjangJaninShown}, PANJANG EKSPETASI ADA: ${panjangJanin}`
    );
    console.log(
      `=======================\n DETAK JANTUNG JANIN SHOWN: ${detakJantungJaninShown}, DJJ EKSPETASI ADA: ${detakJantungJanin}`
    );
  });
});

describe.only("Akses Rekam Medis User NB", () => {
  before(async () => {
    await loginPage.endToEndLogin("macan.onemonth@yopmail.com", "password");
  });

  after(async () => {
    //await loginPage.logout();
  });

  it("Open Menu Rekam Medis from JPOPS", async () => {
    await $(loginPage.jpopsRekamMedis).click();

    expect($(rekamMedisPage.pageRekamMedis)).toBeDisplayed();
    expect($(rekamMedisPage.cardRekamMedisAnak)).toBeDisplayed();
  });

  it("Create New Rekam Medis Newborn", async () => {
    const beratBadanAnak = faker.number.int({ min: 1, max: 30 });
    const tinggiBadanAnak = faker.number.int({ min: 30, max: 150 });
    const lingkarKepalaAnak = faker.number.int({ min: 25, max: 50 });

    await rekamMedisPage.openCreateFormRekamMedis();
    await rekamMedisPage.createRekamMedisNewborn(
      beratBadanAnak,
      tinggiBadanAnak,
      lingkarKepalaAnak
    );

    const beratBadanAnakShown = await rekamMedisPage.getBeratBadanAnakShown();
    const tinggiBadanAnakShown = await rekamMedisPage.getTinggiBadanAnakShown();
    const lingkarKepalaAnakShown =
      await rekamMedisPage.getLingkarKepalaAnakShown();
    const beratPerTinggiAnakShown =
      await rekamMedisPage.getBeratPerTinggiAnakShown();
    const imtAnakShown = await rekamMedisPage.getIMTanak();
    const imtAnak = rekamMedisPage.calculateImt(
      beratBadanAnak,
      tinggiBadanAnak
    );

    expect(beratBadanAnakShown).toContain(beratBadanAnak.toString());
    expect(tinggiBadanAnakShown).toContain(tinggiBadanAnak.toString());
    expect(lingkarKepalaAnakShown).toContain(lingkarKepalaAnak.toString());
    expect(beratPerTinggiAnakShown).toContain(
      `${beratBadanAnak}/${tinggiBadanAnak}`
    );
    expect(imtAnakShown).toContain(imtAnak);

    console.log(
      `=======================\n BERAT BADAN ANAK SHOWN: ${beratBadanAnakShown}, BERAT EKSPETASI ADA: ${beratBadanAnak}`
    );
    console.log(
      `=======================\n TINGGI BADAN ANAK SHOWN: ${tinggiBadanAnakShown}, TINGGI EKSPETASI ADA: ${tinggiBadanAnak}`
    );
    console.log(
      `=======================\n LINGKAR KEPALA ANAK SHOWN: ${lingkarKepalaAnakShown}, LINGKAR KEPALA EKSPETASI ADA: ${lingkarKepalaAnak}`
    );
    console.log(
      `==================\n BERAT ANAK PER TINGGI ANAK SHOWN: ${beratPerTinggiAnakShown}, BERAT PER TINGGI EKSPETASI ADA: ${beratBadanAnak}/${tinggiBadanAnak}`
    );

    console.log(`============\n IMT Anak: `, imtAnak);
    console.log(`============\n IMT Anak Shown: `, imtAnakShown);
  });
});
